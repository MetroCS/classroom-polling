import http from 'node:http';

const host = process.env.FIREBASE_DATABASE_EMULATOR_HOST || '127.0.0.1:9000';
const baseUrl = `http://${host}`;
const authOverride = JSON.stringify({
  uid: 'rules-smoke-test-user',
  token: {},
});

async function request(method, path, body) {
  const url = new URL(`${baseUrl}${path}.json`);
  url.searchParams.set('auth_variable_override', authOverride);

  const payload = body !== undefined ? JSON.stringify(body) : null;

  const response = await new Promise((resolve, reject) => {
    const req = http.request(url, {
      method,
      headers: payload
        ? { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(payload) }
        : {},
    }, resolve);
    req.on('error', reject);
    if (payload) req.write(payload);
    req.end();
  });

  const text = await new Promise((resolve, reject) => {
    let data = '';
    response.setEncoding('utf8');
    response.on('data', chunk => { data += chunk; });
    response.on('end', () => resolve(data));
    response.on('error', reject);
  });

  return { status: response.statusCode, body: text };
}

async function put(path, body) {
  const { status, body: text } = await request('PUT', path, body);
  if (status < 200 || status >= 300) throw new Error(`PUT ${path} returned ${status}: ${text}`);
}

async function del(path) {
  const { status, body: text } = await request('DELETE', path);
  if (status < 200 || status >= 300) throw new Error(`DELETE ${path} returned ${status}: ${text}`);
}

/** Asserts that a PUT is rejected (expect a 4xx status). */
async function putShouldFail(path, body, reason) {
  const { status, body: text } = await request('PUT', path, body);
  if (status >= 200 && status < 300) {
    throw new Error(`PUT ${path} should have been rejected (${reason}) but got ${status}: ${text}`);
  }
}

// ── Shared fixtures ────────────────────────────────────────────────────────

const joinedAt = { '.sv': 'timestamp' };
const date = '2026-06-14';

const BASE_POLL = {
  id: 'poll_test',
  question: 'Which answer is correct?',
  options: { 0: 'Alpha', 1: 'Beta', 2: 'Gamma' },
  duration: 60,
  resultPolicy: 'on_submit',
  correctPolicy: 'with_results',
  startedAt: Date.now(),
  ended: false,
  revealResults: false,
  revealCorrect: false,
};

// ── Tests ──────────────────────────────────────────────────────────────────

let passed = 0;
let failed = 0;

async function test(name, fn) {
  try {
    await fn();
    console.log(`  ✓ ${name}`);
    passed++;
  } catch (err) {
    console.error(`  ✗ ${name}`);
    console.error(`    ${err.message}`);
    failed++;
  }
}

// Student session writes
console.log('\nStudent session');
await test('student join writes accepted', async () => {
  await put('/session/students/Alice', { joinedAt, date });
  await put('/sessionStudents/2026-06-14_Alice', { name: 'Alice', date, joinedAt });
});

// activePoll — no correct answer
console.log('\nactivePoll — no correct answer');
await test('poll without correctIndex accepted', async () => {
  await put('/session/activePoll', BASE_POLL);
  await del('/session/activePoll');
});

// activePoll — with correct answer (the previously broken case)
console.log('\nactivePoll — with correct answer');
await test('poll with correctIndex 0 accepted', async () => {
  await put('/session/activePoll', { ...BASE_POLL, correctIndex: 0 });
  await del('/session/activePoll');
});
await test('poll with correctIndex 1 accepted', async () => {
  await put('/session/activePoll', { ...BASE_POLL, correctIndex: 1 });
  await del('/session/activePoll');
});
await test('poll with correctIndex 2 (last option) accepted', async () => {
  await put('/session/activePoll', { ...BASE_POLL, correctIndex: 2 });
  await del('/session/activePoll');
});

// activePoll — invalid data rejected
console.log('\nactivePoll — invalid data rejected');
await test('poll with out-of-range correctIndex rejected', async () => {
  await putShouldFail('/session/activePoll', { ...BASE_POLL, correctIndex: 5 },
    'correctIndex 5 exceeds options length');
});
await test('poll with negative correctIndex rejected', async () => {
  await putShouldFail('/session/activePoll', { ...BASE_POLL, correctIndex: -1 },
    'negative correctIndex');
});
await test('poll with missing required field rejected', async () => {
  const { id: _drop, ...incomplete } = BASE_POLL;
  await putShouldFail('/session/activePoll', incomplete, 'missing id field');
});
await test('poll with invalid resultPolicy rejected', async () => {
  await putShouldFail('/session/activePoll', { ...BASE_POLL, resultPolicy: 'immediately' },
    'unrecognised resultPolicy value');
});
await test('poll with duration below minimum rejected', async () => {
  await putShouldFail('/session/activePoll', { ...BASE_POLL, duration: 0 },
    'duration < 1');
});

// Student response
console.log('\nStudent responses');
await test('valid response accepted', async () => {
  await put('/session/activePoll', { ...BASE_POLL, correctIndex: 1 });
  await put('/session/activePoll/responses/Alice', 1);
  await del('/session/activePoll');
});
await test('out-of-range response rejected', async () => {
  await put('/session/activePoll', BASE_POLL);
  await putShouldFail('/session/activePoll/responses/Alice', 9,
    'response index 9 not in options');
  await del('/session/activePoll');
});

// pollHistory — with correct answer (the previously broken case)
console.log('\npollHistory — with correct answer');
await test('history entry with correctIndex accepted', async () => {
  await put('/pollHistory/poll_test', {
    ...BASE_POLL,
    correctIndex: 0,
    endedAt: Date.now(),
  });
  await del('/pollHistory/poll_test');
});
await test('history entry without correctIndex accepted', async () => {
  await put('/pollHistory/poll_test_2', {
    ...BASE_POLL,
    id: 'poll_test_2',
    endedAt: Date.now(),
  });
  await del('/pollHistory/poll_test_2');
});

// ── Summary ────────────────────────────────────────────────────────────────

console.log(`\n${passed + failed} tests: ${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
