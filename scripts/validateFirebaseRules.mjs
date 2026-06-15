/**
 * Firebase Rules smoke tests.
 *
 * Uses @firebase/rules-unit-testing so that auth tokens are injected
 * correctly and the emulator enforces security rules.
 *
 * Run via: npm run validate:rules
 * (which wraps this in `firebase emulators:exec --only database`)
 */

import { readFileSync } from 'node:fs';
import { initializeTestEnvironment, assertSucceeds, assertFails }
  from './node_modules/@firebase/rules-unit-testing/dist/esm/index.esm.js';
import { ref, set, remove, get } from 'firebase/database';

// Environment setup

const host = process.env.FIREBASE_DATABASE_EMULATOR_HOST || '127.0.0.1:9000';
const [dbHost, dbPort] = host.split(':');

const testEnv = await initializeTestEnvironment({
  projectId: 'test-classroom-polling',
  database: {
    host: dbHost,
    port: Number(dbPort),
    rules: readFileSync('firebase-rules.json', 'utf8'),
  },
});

// Authenticated context (instructor / student — just needs auth != null)
const auth = testEnv.authenticatedContext('test-user');
const db   = auth.database();

// Shared fixtures

const BASE_POLL = {
  id: 'poll_test',
  question: 'Which answer is correct?',
  options: ['Alpha', 'Beta', 'Gamma'],
  duration: 60,
  resultPolicy: 'on_submit',
  correctPolicy: 'with_results',
  startedAt: Date.now(),
  ended: false,
  revealResults: false,
  revealCorrect: false,
};

async function writePoll(data) {
  return set(ref(db, 'session/activePoll'), data);
}

async function clearPoll() {
  // Use rules-bypassing context so cleanup never fails due to rules
  await testEnv.withSecurityRulesDisabled(ctx =>
    remove(ref(ctx.database(), 'session/activePoll'))
  );
}

// Test runner

let passed = 0;
let failed = 0;

async function test(name, fn) {
  try {
    await fn();
    console.log(`  ✓ ${name}`);
    passed++;
  } catch (err) {
    console.error(`  ✗ ${name}`);
    console.error(`    ${err.message.split('\n')[0]}`);
    failed++;
  }
}

// Student session

console.log('\nStudent session');

await test('student join write accepted', async () => {
  await assertSucceeds(
    set(ref(db, 'session/students/Alice'), {
      joinedAt: Date.now(),
      date: '2026-06-14',
    })
  );
  await assertSucceeds(
    set(ref(db, 'sessionStudents/2026-06-14_Alice'), {
      name: 'Alice',
      date: '2026-06-14',
      joinedAt: Date.now(),
    })
  );
});

// activePoll — happy paths

console.log('\nactivePoll — no correct answer');

await test('poll without correctIndex accepted', async () => {
  await assertSucceeds(writePoll(BASE_POLL));
  await clearPoll();
});

console.log('\nactivePoll — with correct answer (previously broken)');

await test('poll with correctIndex 0 accepted', async () => {
  await assertSucceeds(writePoll({ ...BASE_POLL, correctIndex: 0 }));
  await clearPoll();
});

await test('poll with correctIndex 1 accepted', async () => {
  await assertSucceeds(writePoll({ ...BASE_POLL, correctIndex: 1 }));
  await clearPoll();
});

await test('poll with correctIndex 2 (last option) accepted', async () => {
  await assertSucceeds(writePoll({ ...BASE_POLL, correctIndex: 2 }));
  await clearPoll();
});

// activePoll — rejection cases
// Note: correctIndex range (index < options.length) is enforced by app logic
// in pollParser.js, not by the database rule, because Firebase Rules expression
// language does not support dynamic child() lookup by numeric key.

console.log('\nactivePoll — invalid data rejected');

await test('poll with negative correctIndex rejected', async () => {
  await assertFails(writePoll({ ...BASE_POLL, correctIndex: -1 }));
});

await test('poll with non-integer correctIndex rejected', async () => {
  await assertFails(writePoll({ ...BASE_POLL, correctIndex: 1.5 }));
});

await test('poll with missing required field (id) rejected', async () => {
  const { id: _drop, ...incomplete } = BASE_POLL;
  await assertFails(writePoll(incomplete));
});

await test('poll with invalid resultPolicy rejected', async () => {
  await assertFails(writePoll({ ...BASE_POLL, resultPolicy: 'immediately' }));
});

await test('poll with invalid correctPolicy rejected', async () => {
  await assertFails(writePoll({ ...BASE_POLL, correctPolicy: 'always' }));
});

await test('poll with duration below minimum (0) rejected', async () => {
  await assertFails(writePoll({ ...BASE_POLL, duration: 0 }));
});

await test('poll with duration above maximum (3601) rejected', async () => {
  await assertFails(writePoll({ ...BASE_POLL, duration: 3601 }));
});

// Student responses

console.log('\nStudent responses');

await test('valid response index accepted', async () => {
  await assertSucceeds(writePoll({ ...BASE_POLL, correctIndex: 1 }));
  await assertSucceeds(set(ref(db, 'session/activePoll/responses/Alice'), 1));
  await clearPoll();
});

await test('negative response index rejected', async () => {
  await assertSucceeds(writePoll(BASE_POLL));
  await assertFails(set(ref(db, 'session/activePoll/responses/Alice'), -1));
  await clearPoll();
});

await test('non-integer response index rejected', async () => {
  await assertSucceeds(writePoll(BASE_POLL));
  await assertFails(set(ref(db, 'session/activePoll/responses/Alice'), 0.5));
  await clearPoll();
});

// pollHistory

console.log('\npollHistory');

await test('history entry with correctIndex accepted', async () => {
  await assertSucceeds(
    set(ref(db, 'pollHistory/poll_test'), {
      ...BASE_POLL,
      correctIndex: 0,
      endedAt: Date.now(),
    })
  );
  await testEnv.withSecurityRulesDisabled(ctx =>
    remove(ref(ctx.database(), 'pollHistory/poll_test'))
  );
});

await test('history entry without correctIndex accepted', async () => {
  await assertSucceeds(
    set(ref(db, 'pollHistory/poll_test_2'), {
      ...BASE_POLL,
      id: 'poll_test_2',
      endedAt: Date.now(),
    })
  );
  await testEnv.withSecurityRulesDisabled(ctx =>
    remove(ref(ctx.database(), 'pollHistory/poll_test_2'))
  );
});

// Teardown & summary

await testEnv.cleanup();

console.log(`\n${passed + failed} tests: ${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
