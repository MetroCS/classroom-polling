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
// Parses plain text poll format into poll objects.
//
// FORMAT RULES:
// - Polls are separated by --- on its own line
// - Q: starts the question; question text continues until a blank line
// - A blank line separates the question from the answer options (required)
// - Options start with a letter and period/paren: A. B) etc.
// - Prefix * marks the correct answer: * A. or *A.
// - Per-poll overrides before Q:: duration: 90, results: manual, correct: never
//
// EXAMPLE:
//   Q: What is photosynthesis?
//   It converts sunlight into energy.
//
//   * A. Converts sunlight into energy
//     B. Breaks down glucose
//     C. Absorbs water

export function parsePollText(text, defaults = {}) {
  const {
    duration: defaultDuration = 60,
    resultPolicy: defaultResultPolicy = 'on_submit',
    correctPolicy: defaultCorrectPolicy = 'with_results',
  } = defaults;

  const blocks = text.split(/^---$/m).map(b => b.trim()).filter(Boolean);
  const polls = [];

  for (const block of blocks) {
    const lines = block.split('\n');
    let question = '';
    let options = [];
    let correctIndex = null;
    let duration = defaultDuration;
    let resultPolicy = defaultResultPolicy;
    let correctPolicy = defaultCorrectPolicy;

    let i = 0;

    // Parse per-poll metadata lines at top (before Q:)
    while (i < lines.length) {
      const line = lines[i];
      const durationMatch = line.match(/^duration:\s*(\d+)/i);
      const resultsMatch  = line.match(/^results?:\s*(\S+)/i);
      const correctMatch  = line.match(/^correct:\s*(\S+)/i);
      if (durationMatch) { duration = Number(durationMatch[1]); i++; continue; }
      if (resultsMatch)  { resultPolicy = normalizePolicy(resultsMatch[1], 'result'); i++; continue; }
      if (correctMatch)  { correctPolicy = normalizePolicy(correctMatch[1], 'correct'); i++; continue; }
      break;
    }

    // Find Q: line
    while (i < lines.length && !/^Q:/i.test(lines[i])) i++;
    if (i >= lines.length) continue; // no question found

    // Parse question — everything from Q: until the first blank line
    question = lines[i].replace(/^Q:\s*/i, '').trim();
    i++;
    while (i < lines.length && lines[i].trim() !== '') {
      question += '\n' + lines[i].trim();
      i++;
    }

    // Skip the blank line(s) separating question from options
    while (i < lines.length && lines[i].trim() === '') i++;

    // Parse options — each starts with optional * then letter + . or )
    while (i < lines.length) {
      const line = lines[i];
      if (line.trim() === '') { i++; continue; } // skip blank lines between options

      const optMatch = line.match(/^(\*?)\s*[A-Za-z][\.\)]\s*(.+)/);
      if (!optMatch) { i++; continue; } // skip unrecognized lines

      const isCorrect = optMatch[1] === '*';
      let optText = optMatch[2].trim();
      i++;

      // Continuation lines for option: indented, until blank line or next option
      while (i < lines.length
        && lines[i].trim() !== ''
        && !/^\*?\s*[A-Za-z][\.\)]\s+/.test(lines[i])) {
        optText += '\n' + lines[i].trim();
        i++;
      }

      if (isCorrect) correctIndex = options.length;
      options.push(optText);
    }

    if (!question || options.length < 2) continue;
    polls.push({ question, options, correctIndex, duration, resultPolicy, correctPolicy });
  }

  return polls;
}

function normalizePolicy(val, type) {
  val = val.toLowerCase();
  if (type === 'result') {
    if (val === 'submit' || val === 'on_submit') return 'on_submit';
    if (val === 'manual') return 'manual';
    if (val === 'never') return 'never';
    return 'on_submit';
  }
  if (type === 'correct') {
    if (val === 'results' || val === 'with_results') return 'with_results';
    if (val === 'manual') return 'manual';
    if (val === 'never') return 'never';
    return 'with_results';
  }
  return val;
}

export function pollsToText(polls, defaults = {}) {
  return polls.map(poll => {
    const lines = [];
    if (poll.duration !== defaults.duration) lines.push(`duration: ${poll.duration}`);
    if (poll.resultPolicy !== defaults.resultPolicy) lines.push(`results: ${poll.resultPolicy}`);
    if (poll.correctPolicy !== defaults.correctPolicy) lines.push(`correct: ${poll.correctPolicy}`);
    lines.push(`Q: ${poll.question}`);
    lines.push(''); // blank line separating question from options (required)
    poll.options.forEach((opt, i) => {
      const prefix = poll.correctIndex === i ? '* ' : '  ';
      lines.push(`${prefix}${String.fromCharCode(65+i)}. ${opt}`);
    });
    return lines.join('\n');
  }).join('\n---\n');
}
