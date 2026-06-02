// Parses plain text poll format into poll objects.
// Polls are separated by --- on its own line.
// Q: starts a question (continuation lines indented)
// A/B/C... start options (* prefix = correct answer)
// Per-poll overrides: duration: 90, results: manual, correct: never

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

    // Parse Q: block
    while (i < lines.length) {
      const line = lines[i];
      if (/^Q:/i.test(line)) {
        question = line.replace(/^Q:\s*/i, '').trim();
        i++;
        // Continuation lines (indented)
        while (i < lines.length && /^\s+/.test(lines[i]) && !/^\s*\*?\s*[A-Z][\.\)]/i.test(lines[i])) {
          question += '\n' + lines[i].trim();
          i++;
        }
        continue;
      }
      // Option lines: optional * then optional letter then . or ) then text
      const optMatch = line.match(/^(\*?)\s*(?:[A-Za-z][\.\)])?\s*(.+)/);
      if (optMatch && question) {
        const isCorrect = optMatch[1] === '*';
        let optText = optMatch[2].trim();
        i++;
        // Continuation lines for option (indented, not starting a new option)
        while (i < lines.length && /^\s+/.test(lines[i]) && !/^\s*\*?\s*[A-Z][\.\)]/i.test(lines[i])) {
          optText += '\n' + lines[i].trim();
          i++;
        }
        if (isCorrect) correctIndex = options.length;
        options.push(optText);
        continue;
      }
      i++;
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
    // Per-poll overrides (only write if different from defaults)
    if (poll.duration !== defaults.duration) lines.push(`duration: ${poll.duration}`);
    if (poll.resultPolicy !== defaults.resultPolicy) lines.push(`results: ${poll.resultPolicy}`);
    if (poll.correctPolicy !== defaults.correctPolicy) lines.push(`correct: ${poll.correctPolicy}`);
    lines.push(`Q: ${poll.question}`);
    lines.push('');
    poll.options.forEach((opt, i) => {
      const prefix = poll.correctIndex === i ? '* ' : '  ';
      lines.push(`${prefix}${String.fromCharCode(65+i)}. ${opt}`);
    });
    return lines.join('\n');
  }).join('\n---\n');
}
