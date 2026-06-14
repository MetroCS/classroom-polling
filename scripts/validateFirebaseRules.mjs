import http from 'node:http';

const host = process.env.FIREBASE_DATABASE_EMULATOR_HOST || '127.0.0.1:9000';
const baseUrl = `http://${host}`;
const authOverride = encodeURIComponent(JSON.stringify({
  uid: 'rules-smoke-test-user',
  token: {},
}));

async function put(path, body) {
  const url = new URL(`${baseUrl}${path}.json`);
  url.searchParams.set('auth_variable_override', authOverride);

  const payload = JSON.stringify(body);

  const response = await new Promise((resolve, reject) => {
    const request = http.request(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload),
      },
    }, resolve);

    request.on('error', reject);
    request.end(payload);
  });

  const text = await new Promise((resolve, reject) => {
    let data = '';
    response.setEncoding('utf8');
    response.on('data', chunk => { data += chunk; });
    response.on('end', () => resolve(data));
    response.on('error', reject);
  });

  if (response.statusCode < 200 || response.statusCode >= 300) {
    throw new Error(`${path} returned ${response.statusCode}: ${text}`);
  }
}

const joinedAt = { '.sv': 'timestamp' };
const date = '2026-06-14';

await put('/session/students/Alice', { joinedAt, date });
await put('/sessionStudents/2026-06-14_Alice', {
  name: 'Alice',
  date,
  joinedAt,
});

console.log('Firebase rules smoke tests passed');
