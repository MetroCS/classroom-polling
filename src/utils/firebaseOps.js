/**
 * Copyright (C) 2026 Dr. Jody Paul
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * See the project LICENSE file for full GPL-3 details.
 */
import { db } from '../firebase';
import {
  ref, set, update, onValue, get, serverTimestamp, remove
} from 'firebase/database';

export function joinSession(name) {
  const date = new Date().toLocaleDateString('en-CA'); // Local date from student's browser clock
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

export function startPoll({ question, options, correctIndex, duration, resultPolicy, correctPolicy }) {
  const pollId = `poll_${Date.now()}`;
  return set(ref(db, 'session/activePoll'), {
    id: pollId,
    question,
    options,
    correctIndex: correctIndex ?? null,
    duration,
    resultPolicy,
    correctPolicy,
    startedAt: Date.now(),
    responses: {},
    ended: false,
    revealResults: false,
    revealCorrect: false,
  });
}

export async function endPoll(revealResults, revealCorrect) {
  const [pollSnap, queueSnap] = await Promise.all([
    get(ref(db, 'session/activePoll')),
    get(ref(db, 'session/queue')),
  ]);
  const latest = pollSnap.val();
  const queue  = queueSnap.val();
  if (!latest) return;

  const historyEntry = {
    ...latest,
    revealResults,
    revealCorrect,
    endedAt: Date.now(),
  };
  if (queue) {
    historyEntry.setId       = queue.setId;
    historyEntry.setName     = queue.setName;
    historyEntry.setPosition = queue.currentIndex;
    historyEntry.sessionKey  = queue.sessionKey;
  }

  await set(ref(db, `pollHistory/${latest.id}`), historyEntry);
  return remove(ref(db, 'session/activePoll'));
}

export function expirePoll() {
  return update(ref(db, 'session/activePoll'), { ended: true });
}

export function revealPollResults(revealResults, revealCorrect) {
  return update(ref(db, 'session/activePoll'), { revealResults, revealCorrect });
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

// ── Poll Sets ─────────────────────────────────────────────────

export function watchPollSets(callback) {
  const r = ref(db, 'pollSets');
  return onValue(r, snap => {
    const val = snap.val() || {};
    const list = Object.entries(val).map(([id, s]) => ({ id, ...s }))
      .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
    callback(list);
  });
}

export async function createPollSet({ name, defaults, polls }) {
  const id = `set_${Date.now()}`;
  await set(ref(db, `pollSets/${id}`), {
    id, name, createdAt: Date.now(), defaults, polls: polls || [],
  });
  return id;
}

export function updatePollSet(id, data) {
  return get(ref(db, `pollSets/${id}`)).then(snap => {
    const existing = snap.val() || {};
    return set(ref(db, `pollSets/${id}`), { ...existing, ...data });
  });
}

export function deletePollSet(id) {
  return remove(ref(db, `pollSets/${id}`));
}

export function watchPollSet(id, callback) {
  const r = ref(db, `pollSets/${id}`);
  return onValue(r, snap => callback(snap.val()));
}

// ── Queue ─────────────────────────────────────────────────────

export function launchSet(setId, setName, totalPolls) {
  const sessionKey = `run_${Date.now()}`;
  return set(ref(db, 'session/queue'), {
    setId, setName, currentIndex: 0, totalPolls, sessionKey,
  });
}

export function advanceQueue(currentIndex) {
  return update(ref(db, 'session/queue'), { currentIndex });
}

export function clearQueue() {
  return remove(ref(db, 'session/queue'));
}

export function watchQueue(callback) {
  const r = ref(db, 'session/queue');
  return onValue(r, snap => callback(snap.val()));
}
// Close current poll without clearing queue (used mid-set)
export async function closePoll(revealResults, revealCorrect) {
  const snap = await get(ref(db, 'session/activePoll'));
  const latest = snap.val();
  const queueSnap = await get(ref(db, 'session/queue'));
  const queue = queueSnap.val();
  if (!latest) return;
  const historyEntry = {
    ...latest,
    revealResults,
    revealCorrect,
    endedAt: Date.now(),
  };
  if (queue) {
    historyEntry.setId      = queue.setId;
    historyEntry.setName    = queue.setName;
    historyEntry.setPosition = queue.currentIndex;
    historyEntry.sessionKey = queue.sessionKey;
  }
  await set(ref(db, `pollHistory/${latest.id}`), historyEntry);
  return remove(ref(db, 'session/activePoll'));
}
