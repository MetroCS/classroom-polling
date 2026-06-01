import { db } from '../firebase';
import {
  ref, set, update, onValue, get, serverTimestamp, remove
} from 'firebase/database';

export function joinSession(name) {
  const date = new Date().toISOString().split('T')[0];
  set(ref(db, `session/students/${name}`), { joinedAt: serverTimestamp(), date });
  return set(ref(db, `sessionStudents/${date}_${name}`), { name, date, joinedAt: serverTimestamp() });
}

export function leaveSession(name) {
  return remove(ref(db, `session/students/${name}`));
}

export function submitAnswer(studentName, pollId, selectedIndex) {
  return update(ref(db, `session/activePoll/responses`), {
    [studentName]: selectedIndex,
  });
}

export function startPoll({ question, options, correctIndex, duration }) {
  const pollId = `poll_${Date.now()}`;
  return set(ref(db, 'session/activePoll'), {
    id: pollId,
    question,
    options,
    correctIndex: correctIndex ?? null,
    duration,
    startedAt: Date.now(),
    responses: {},
  });
}

export async function endPoll(poll) {
  // Read the latest state from Firebase before archiving
  const snap = await get(ref(db, 'session/activePoll'));
  const latest = snap.val();
  if (!latest) return;
  await set(ref(db, `pollHistory/${latest.id}`), {
    ...latest,
    endedAt: Date.now(),
  });
  return remove(ref(db, 'session/activePoll'));
}

export function clearSession() {
  return remove(ref(db, 'session/students'));
}

export function watchActivePoll(callback) {
  const r = ref(db, 'session/activePoll');
  return onValue(r, snap => callback(snap.val()));
}

export function watchStudents(callback) {
  const r = ref(db, 'session/students');
  return onValue(r, snap => {
    const val = snap.val() || {};
    callback(Object.keys(val).map(name => ({ name, ...val[name] })));
  });
}

export function watchPollHistory(callback) {
  const r = ref(db, 'pollHistory');
  return onValue(r, snap => {
    const val = snap.val() || {};
    const list = Object.values(val).sort((a, b) =>
      (b.startedAt || 0) - (a.startedAt || 0)
    );
    callback(list);
  });
}
