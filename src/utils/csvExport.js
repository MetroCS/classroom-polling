// CSV export utilities for poll history

// Truncate question text for column headers
function truncateQ(text, max = 40) {
  return text.length > max ? text.slice(0, max) + '...' : text;
}

// Escape a value for CSV
function csvVal(val) {
  if (val === null || val === undefined) return '';
  const s = String(val);
  if (s.includes(',') || s.includes('"') || s.includes('\n')) {
    return `"${s.replace(/"/g, '""')}"`;
  }
  return s;
}

function csvRow(values) {
  return values.map(csvVal).join(',');
}

// Per-poll CSV — one row per student
export function pollToCsv(poll) {
  const responses = poll.responses || {};
  const hasCorrect = poll.correctIndex != null;
  const lines = [];

  // Header block
  lines.push(csvRow(['Question', poll.question]));
  lines.push(csvRow(['Date', new Date(poll.startedAt).toLocaleString()]));
  if (hasCorrect) {
    lines.push(csvRow(['Correct Answer',
      `${String.fromCharCode(65 + poll.correctIndex)}. ${poll.options[poll.correctIndex]}`]));
  }
  lines.push('');

  // Column headers
  // Correct column uses 1/0; header notes this
  const headers = ['Student', 'Response'];
  if (hasCorrect) headers.push('Correct (1=yes 0=no)');
  lines.push(csvRow(headers));

  // One row per student, sorted by name
  const students = Object.keys(responses).sort();
  if (students.length === 0) {
    lines.push(csvRow(['(no responses)', '', '']));
  } else {
    students.forEach(name => {
      const idx = responses[name];
      const response = idx != null
        ? `${String.fromCharCode(65 + idx)}. ${poll.options[idx]}`
        : '(no answer)';
      const row = [name, response];
      if (hasCorrect) row.push(idx === poll.correctIndex ? '1' : '0');
      lines.push(csvRow(row));
    });
  }

  return lines.join('\n');
}

// Per-session CSV — one row per student across all polls in a set run
export function sessionToCsv(setName, polls) {
  if (!polls || polls.length === 0) return '';

  // Collect all student names across all polls
  const allStudents = new Set();
  polls.forEach(poll => {
    Object.keys(poll.responses || {}).forEach(name => allStudents.add(name));
  });
  const students = [...allStudents].sort();

  const lines = [];

  // Header block
  lines.push(csvRow(['Set', setName]));
  lines.push(csvRow(['Date', new Date(polls[0].startedAt).toLocaleString()]));
  lines.push(csvRow(['Polls', polls.length]));
  lines.push('');

  // Column headers — Q1: truncated question, Q1 Correct (1=yes 0=no) if applicable
  const headers = ['Student'];
  polls.forEach((poll, i) => {
    const prefix = `Q${i + 1}: ${truncateQ(poll.question)}`;
    headers.push(prefix);
    if (poll.correctIndex != null) headers.push(`Q${i + 1} Correct (1=yes 0=no)`);
  });
  lines.push(csvRow(headers));

  // One row per student
  students.forEach(name => {
    const row = [name];
    polls.forEach(poll => {
      const responses = poll.responses || {};
      const idx = responses[name];
      const response = idx != null
        ? `${String.fromCharCode(65 + idx)}. ${poll.options[idx]}`
        : '(no answer)';
      row.push(response);
      if (poll.correctIndex != null) {
        row.push(idx === poll.correctIndex ? '1' : '0');
      }
    });
    lines.push(csvRow(row));
  });

  // Summary row
  lines.push('');
  lines.push(csvRow(['Summary']));
  polls.forEach((poll, i) => {
    const responses = poll.responses || {};
    const total = Object.keys(responses).length;
    lines.push('');
    lines.push(csvRow([`Q${i + 1}`, poll.question]));
    poll.options.forEach((opt, j) => {
      const votes = Object.values(responses).filter(v => v === j).length;
      const pct = total > 0 ? Math.round(votes / total * 100) : 0;
      const isCorrect = poll.correctIndex === j;
      lines.push(csvRow([
        `${String.fromCharCode(65 + j)}. ${opt}`,
        `${votes} responses`,
        `${pct}%`,
        isCorrect ? 'correct answer' : '',
      ]));
    });
  });

  return lines.join('\n');
}

// Copy text to clipboard and return a promise
export function copyToClipboard(text) {
  return navigator.clipboard.writeText(text);
}

// Trigger a file download
export function downloadCsv(filename, content) {
  const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
