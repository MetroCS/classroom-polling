/**
 * Firebase Rules smoke tests.
 *
 * Uses the firebase package already installed in the project together with
 * connectDatabaseEmulator({ mockUserToken }) so the emulator receives a
 * properly-formed auth token and enforces security rules.
 *
 * No additional dependencies are required.
 *
 * Run via: npm run validate:rules
 * (which wraps this in `firebase emulators:exec --only database`)
 */

import { initializeApp, deleteApp } from 'firebase/app';
import {
  getDatabase, ref, set, remove, connectDatabaseEmulator,
} from 'firebase/database';
import { readFileSync } from 'node:fs';
import http from 'node:http';

// ── Emulator connection

const PROJECT_ID = 'demo-classroom-polling';
const emulatorHost = process.env.FIREBASE_DATABASE_EMULATOR_HOST || '127.0.0.1:9000';
const [dbHost, dbPortStr] = emulatorHost.split(':');
const dbPort = Number(dbPortStr);

// Load our rules into the running emulator via the admin REST endpoint.
// The emulator's /.settings/rules.json endpoint accepts 'Bearer owner' for admin access.
async function loadRules() {
  const rules = readFileSync('firebase-rules.json', 'utf8');
  const url = `http://${emulatorHost}/.settings/rules.json?ns=${PROJECT_ID}`;
  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer owner',
    },
    body: rules,
  });
  if (!res.ok) throw new Error(`Failed to load rules: ${await res.text()}`);
}

// Create a Firebase app connected to the emulator with a mock authenticated user.
function makeAuthApp(uid) {
  const app = initializeApp(
    { apiKey: 'test', projectId: PROJECT_ID, databaseURL: `http://${emulatorHost}?ns=${PROJECT_ID}` },
    `auth-app-${uid}-${Date.now()}`,
  );
  const db = getDatabase(app);
  connectDatabaseEmulator(db, dbHost, dbPort, { mockUserToken: { sub: uid, uid } });
  return { app, db };
}

// ── Test runner

let passed = 0;
let failed = 0;
const apps = [];

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

async function expectSucceeds(promise) {
  await promise; // throws on Firebase permission-denied → test fails
}

async function expectFails(promise) {
  try {
    await promise;
    throw new Error('Expected operation to fail, but it succeeded');
  } catch (err) {
    if (err.code === 'PERMISSION_DENIED' || err.message?.includes('PERMISSION_DENIED')) return;
    throw err; // unexpected error — re-throw
  }
}

// Admin helper: bypass rules for setup/teardown
async function adminSet(path, value) {
  const url = `http://${emulatorHost}/${path.replace(/^\//, '')}.json?ns=${PROJECT_ID}`;
  const res = await fetch(url, {
    method: value === null ? 'DELETE' : 'PUT',
    headers: { 'Authorization': 'Bearer owner', 'Content-Type': 'application/json' },
    ...(value !== null && { body: JSON.stringify(value) }),
  });
  if (!res.ok) throw new Error(`Admin write to ${path} failed: ${await res.text()}`);
}

// ── Setup

await loadRules();

const { app, db } = makeAuthApp('test-user');
apps.push(app);

// ── Shared fixtures

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

const pollRef      = ref(db, 'session/activePoll');
const responsesRef = (name) => ref(db, `session/activePoll/responses/${name}`);

async function writePoll(data)  { return set(pollRef, data); }
async function clearPoll()      { return adminSet('session/activePoll', null); }

// ── Student session

console.log('\nStudent session');

await test('student join write accepted', async () => {
  await expectSucceeds(set(ref(db, 'session/students/Alice'), {
    joinedAt: Date.now(), date: '2026-06-14',
  }));
  await expectSucceeds(set(ref(db, 'sessionStudents/2026-06-14_Alice'), {
    name: 'Alice', date: '2026-06-14', joinedAt: Date.now(),
  }));
});

// ── activePoll — happy paths

console.log('\nactivePoll — no correct answer');

await test('poll without correctIndex accepted', async () => {
  await expectSucceeds(writePoll(BASE_POLL));
  await clearPoll();
});

console.log('\nactivePoll — with correct answer (previously broken)');

await test('poll with correctIndex 0 accepted', async () => {
  await expectSucceeds(writePoll({ ...BASE_POLL, correctIndex: 0 }));
  await clearPoll();
});
await test('poll with correctIndex 1 accepted', async () => {
  await expectSucceeds(writePoll({ ...BASE_POLL, correctIndex: 1 }));
  await clearPoll();
});
await test('poll with correctIndex 2 (last option) accepted', async () => {
  await expectSucceeds(writePoll({ ...BASE_POLL, correctIndex: 2 }));
  await clearPoll();
});

// ── activePoll — rejection cases
// Note: correctIndex range (index in bounds of options) is enforced by app
// logic in pollParser.js rather than by the database rule, because Firebase
// Rules expression language does not support dynamic child() lookup by a
// numeric key.

console.log('\nactivePoll — invalid data rejected');

await test('poll with negative correctIndex rejected', async () => {
  await expectFails(writePoll({ ...BASE_POLL, correctIndex: -1 }));
});
await test('poll with non-integer correctIndex rejected', async () => {
  await expectFails(writePoll({ ...BASE_POLL, correctIndex: 1.5 }));
});
await test('poll with missing required field (id) rejected', async () => {
  const { id: _drop, ...incomplete } = BASE_POLL;
  await expectFails(writePoll(incomplete));
});
await test('poll with invalid resultPolicy rejected', async () => {
  await expectFails(writePoll({ ...BASE_POLL, resultPolicy: 'immediately' }));
});
await test('poll with invalid correctPolicy rejected', async () => {
  await expectFails(writePoll({ ...BASE_POLL, correctPolicy: 'always' }));
});
await test('poll with duration below minimum (0) rejected', async () => {
  await expectFails(writePoll({ ...BASE_POLL, duration: 0 }));
});
await test('poll with duration above maximum (3601) rejected', async () => {
  await expectFails(writePoll({ ...BASE_POLL, duration: 3601 }));
});

// ── Student responses

console.log('\nStudent responses');

await test('valid response index accepted', async () => {
  await expectSucceeds(writePoll({ ...BASE_POLL, correctIndex: 1 }));
  xundo
  await expectSucceeds(set(responsesRef('Alice'), 1));
  await clearPoll();
});
await test('negative response index rejected', async () => {
  await expectSucceeds(writePoll(BASE_POLL));
  await expectFails(set(responsesRef('Alice'), -1));
  await clearPoll();
});
await test('non-integer response index rejected', async () => {
  await expectSucceeds(writePoll(BASE_POLL));
  await expectFails(set(responsesRef('Alice'), 0.5));
  await clearPoll();
});

// ── pollHistory

console.log('\npollHistory');

await test('history entry with correctIndex accepted', async () => {
  await expectSucceeds(set(ref(db, 'pollHistory/poll_test'), {
    ...BASE_POLL, correctIndex: 0, endedAt: Date.now(),
  }));
  await adminSet('pollHistory/poll_test', null);
});
await test('history entry without correctIndex accepted', async () => {
  await expectSucceeds(set(ref(db, 'pollHistory/poll_test_2'), {
    ...BASE_POLL, id: 'poll_test_2', endedAt: Date.now(),
  }));
  await adminSet('pollHistory/poll_test_2', null);
});

// ── Teardown & summary

await Promise.all(apps.map(deleteApp));

console.log(`\n${passed + failed} tests: ${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
