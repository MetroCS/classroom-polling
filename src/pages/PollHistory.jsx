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
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { watchPollHistory } from '../utils/firebaseOps';
import { db } from '../firebase';
import { ref, onValue, remove } from 'firebase/database';
import { pollToCsv, sessionToCsv, downloadCsv } from '../utils/csvExport';

const HISTORY_PASSWORD = import.meta.env.VITE_INSTRUCTOR_PASSWORD || 'changeme';

export default function PollHistory() {
  const navigate = useNavigate();
  const [auth, setAuth]               = useState(false);
  const [pw, setPw]                   = useState('');
  const [err, setErr]                 = useState('');
  const [polls, setPolls]             = useState([]);
  const [attendance, setAttendance]   = useState({});
  const [tab, setTab]                 = useState('polls');
  const [expanded, setExpanded]       = useState(new Set());
  const [expandedSets, setExpandedSets] = useState(new Set());
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [confirmDeleteSet, setConfirmDeleteSet] = useState(null); // set key
  const [pollView, setPollView]       = useState({}); // pollId -> 'summary' | 'students'
  const [copyFeedback, setCopyFeedback] = useState({}); // key -> true

  useEffect(() => {
    if (localStorage.getItem("historyAuth") === 'true' || localStorage.getItem("role") === 'instructor') setAuth(true);
  }, []);

  useEffect(() => {
    if (!auth) return;
    const unsub1 = watchPollHistory(setPolls);
    const unsub2 = onValue(ref(db, 'sessionStudents'), snap => {
      const val = snap.val() || {};
      const byDate = {};
      Object.values(val).forEach(entry => {
        const d = entry.date || 'unknown';
        if (!byDate[d]) byDate[d] = new Set();
        byDate[d].add(entry.name);
      });
      const result = {};
      Object.entries(byDate).forEach(([d, names]) => {
        result[d] = [...names].sort();
      });
      setAttendance(result);
    });
    return () => { unsub1(); unsub2(); };
  }, [auth]);

  function handleLogin(e) {
    e.preventDefault();
    if (pw === HISTORY_PASSWORD) {
      localStorage.setItem("historyAuth", "true");
      setAuth(true);
    } else {
      setErr('Incorrect password.');
      setPw('');
    }
  }

  function handleDelete(pollId) {
    remove(ref(db, `pollHistory/${pollId}`));
    setConfirmDelete(null);
    setExpanded(prev => { const s = new Set(prev); s.delete(pollId); return s; });
  }

  function handleDeleteSet(key, polls) {
    polls.forEach(poll => remove(ref(db, `pollHistory/${poll.id}`)));
    setConfirmDeleteSet(null);
    setExpandedSets(prev => { const s = new Set(prev); s.delete(key); return s; });
  }

  function togglePoll(pollId) {
    setExpanded(prev => {
      const s = new Set(prev);
      s.has(pollId) ? s.delete(pollId) : s.add(pollId);
      return s;
    });
  }

  function toggleSet(key) {
    setExpandedSets(prev => {
      const s = new Set(prev);
      s.has(key) ? s.delete(key) : s.add(key);
      return s;
    });
  }

  function setPollViewMode(pollId, mode) {
    setPollView(prev => ({ ...prev, [pollId]: mode }));
  }

  function showFeedback(key) {
    setCopyFeedback(prev => ({ ...prev, [key]: true }));
    setTimeout(() => setCopyFeedback(prev => ({ ...prev, [key]: false })), 2000);
  }

  function handleDownloadPoll(poll) {
    const csv = pollToCsv(poll);
    const date = new Date(poll.startedAt).toLocaleDateString().replace(/\//g, '-');
    downloadCsv(`poll_${date}_${poll.id}.csv`, csv);
  }

  function handleDownloadSession(setName, sessionPolls) {
    const csv = sessionToCsv(setName, sessionPolls);
    const date = new Date(sessionPolls[0].startedAt).toLocaleDateString().replace(/\//g, '-');
    const safeName = setName.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    downloadCsv(`session_${safeName}_${date}.csv`, csv);
  }

  // Group polls into sets and standalone
  function groupPolls(polls) {
    const setGroups = {};
    const standalone = [];
    polls.forEach(poll => {
      if (poll.setId) {
        const key = poll.sessionKey || `${poll.setId}_${new Date(poll.startedAt).toLocaleDateString()}`;
        if (!setGroups[key]) {
          setGroups[key] = {
            key, setId: poll.setId, setName: poll.setName,
            date: new Date(poll.startedAt).toLocaleDateString(),
            startedAt: poll.startedAt, polls: [],
          };
        }
        setGroups[key].polls.push(poll);
      } else {
        standalone.push(poll);
      }
    });
    Object.values(setGroups).forEach(g => {
      g.polls.sort((a, b) => (a.setPosition ?? 0) - (b.setPosition ?? 0));
    });
    return [
      ...Object.values(setGroups).map(g => ({ type: 'set', ...g })),
      ...standalone.map(p => ({ type: 'poll', ...p })),
    ].sort((a, b) => (b.startedAt || 0) - (a.startedAt || 0));
  }

  if (!auth) return (
    <div style={styles.center}>
      <div style={styles.loginCard} className="fade-up">
        <div style={styles.loginLogo}>
          <span style={{color:'var(--accent)'}}>●</span> ClassPoll
        </div>
        <h2 style={{fontSize:'1.4rem', marginBottom:'0.25rem'}}>Poll History</h2>
        <p style={{color:'var(--muted)', marginBottom:'1.5rem', fontSize:'0.9rem'}}>
          Enter the instructor password to view history and attendance.
        </p>
        <form onSubmit={handleLogin}
          style={{display:'flex', flexDirection:'column', gap:'0.75rem'}}>
          <input className="input" type="password" placeholder="Instructor password"
            value={pw} onChange={e => { setPw(e.target.value); setErr(''); }}
            autoFocus style={{textAlign:'center'}} />
          {err && <span style={styles.err}>{err}</span>}
          <button type="submit" className="btn btn-primary"
            style={{justifyContent:'center', padding:'0.75rem'}}>
            View History →
          </button>
        </form>
        <button style={styles.backLink} onClick={() => navigate('/')}>← Back</button>
      </div>
    </div>
  );

  const grouped = groupPolls(polls);

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <button style={styles.back} onClick={() => navigate('/')}>← Back</button>
        <span style={styles.title}>Poll History</span>
        <div style={styles.tabs}>
          <button style={{...styles.tab, ...(tab==='polls' ? styles.tabActive : {})}}
            onClick={() => setTab('polls')}>Polls</button>
          <button style={{...styles.tab, ...(tab==='attendance' ? styles.tabActive : {})}}
            onClick={() => setTab('attendance')}>Attendance</button>
        </div>
      </header>

      <main style={styles.main}>
        {tab === 'polls' && (
          <div className="fade-up">
            {grouped.length === 0 && (
              <div style={styles.empty}>No polls yet. Run your first one in class!</div>
            )}
            {grouped.map(item => {
              if (item.type === 'set') {
                const isOpen = expandedSets.has(item.key);
                const totalResponses = item.polls.reduce((sum, p) =>
                  sum + Object.keys(p.responses || {}).length, 0);
                return (
                  <div key={item.key} style={styles.setGroup}>
                      <div style={styles.setGroupHeaderRow}>
                          <button style={styles.setGroupHeaderBtn}
                                  onClick={() => toggleSet(item.key)}>
                              <span style={styles.triangle}>{isOpen ? '▼' : '▶'}</span>
                              <div style={{flex:1}}>
                                  <div style={styles.setGroupName}>📚 {item.setName}</div>
                                  <div style={styles.setGroupMeta}>
                                      {item.date} · {item.polls.length} polls · {totalResponses} total responses
                                  </div>
                              </div>
                          </button>
                          <div style={{display:'flex', gap:'0.4rem', alignItems:'center'}}>
                              <button
                                  style={{...styles.exportBtn,
                                          ...(copyFeedback[item.key] ? styles.exportBtnSuccess : {})}}
                                  onClick={() => {
                                      handleDownloadSession(item.setName, item.polls);
                                      showFeedback(item.key);
                                  }}>
                                  {copyFeedback[item.key] ? '✓ Downloading' : '⬇ Session CSV'}
                              </button>
                              {confirmDeleteSet !== item.key ? (
                                  <button style={styles.deleteBtn}
                                          onClick={() => setConfirmDeleteSet(item.key)}
                                          title="Delete this session">🗑</button>
                              ) : (
                                  <div style={styles.confirmRow}>
                                      <span style={styles.confirmText}>
                                          Delete all {item.polls.length} polls?
                                      </span>
                                      <button className="btn btn-primary"
                                              style={{fontSize:'0.78rem', padding:'0.3rem 0.7rem', background:'#dc2626'}}
                                              onClick={() => handleDeleteSet(item.key, item.polls)}>Yes</button>
                                      <button className="btn btn-secondary"
                                              style={{fontSize:'0.78rem', padding:'0.3rem 0.7rem'}}
                                              onClick={() => setConfirmDeleteSet(null)}>Cancel</button>
                                  </div>
                              )}
                          </div>
                      </div>
                    {isOpen && (
                      <div style={styles.setGroupPolls}>
                        {item.polls.map(poll => (
                          <PollRow key={poll.id} poll={poll}
                            expanded={expanded.has(poll.id)}
                            viewMode={pollView[poll.id] || 'summary'}
                            confirmDelete={confirmDelete}
                            copyFeedback={copyFeedback[poll.id]}
                            onToggle={() => togglePoll(poll.id)}
                            onDelete={() => handleDelete(poll.id)}
                            onConfirmDelete={() => setConfirmDelete(poll.id)}
                            onCancelDelete={() => setConfirmDelete(null)}
                            onSetView={mode => setPollViewMode(poll.id, mode)}
                            onDownload={() => handleDownloadPoll(poll)}
                            onDownloadFeedback={() => showFeedback(poll.id)}
                            positionLabel={`${(poll.setPosition ?? 0) + 1}.`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <PollRow key={item.id} poll={item}
                  expanded={expanded.has(item.id)}
                  viewMode={pollView[item.id] || 'summary'}
                  confirmDelete={confirmDelete}
                  copyFeedback={copyFeedback[item.id]}
                  onToggle={() => togglePoll(item.id)}
                  onDelete={() => handleDelete(item.id)}
                  onConfirmDelete={() => setConfirmDelete(item.id)}
                  onCancelDelete={() => setConfirmDelete(null)}
                  onSetView={mode => setPollViewMode(item.id, mode)}
                  onDownload={() => handleDownloadPoll(item)}
                  onDownloadFeedback={() => showFeedback(item.id)}
                />
              );
            })}
          </div>
        )}

        {tab === 'attendance' && (
          <div className="fade-up">
            {Object.keys(attendance).length === 0 && (
              <div style={styles.empty}>No attendance records yet.</div>
            )}
            {Object.entries(attendance).sort(([a],[b]) => b.localeCompare(a)).map(([date, names]) => (
              <div key={date} style={styles.pollCard}>
                <div style={styles.pollHeaderRow}>
                  <div style={{padding:'0.25rem 0'}}>
                    <div style={styles.pollQ}>{date}</div>
                    <div style={styles.pollMeta}>
                      {names.length} student{names.length !== 1 ? 's' : ''}
                    </div>
                  </div>
                </div>
                <div style={{padding:'0 1rem 1rem', display:'flex', flexWrap:'wrap', gap:'0.4rem'}}>
                  {names.map(n => <span key={n} style={styles.chip}>{n}</span>)}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

function PollRow({ poll, expanded, viewMode, confirmDelete, copyFeedback,
  onToggle, onDelete, onConfirmDelete, onCancelDelete,
  onSetView, onDownload, onDownloadFeedback, positionLabel }) {

  const responses = poll.responses || {};
  const total = Object.keys(responses).length;
  const isConfirming = confirmDelete === poll.id;
  const hasCorrect = poll.correctIndex != null;

  // Group students by their answer
  const byAnswer = {};
  poll.options.forEach((_, i) => { byAnswer[i] = []; });
  Object.entries(responses).forEach(([name, idx]) => {
    if (byAnswer[idx] !== undefined) byAnswer[idx].push(name);
    else byAnswer[idx] = [name];
  });

  return (
    <div style={styles.pollCard}>
      <div style={styles.pollHeaderRow}>
        <button style={styles.pollHeaderBtn} onClick={onToggle}>
          <span style={styles.triangle}>{expanded ? '▼' : '▶'}</span>
          <div>
            <div style={styles.pollQ}>
              {positionLabel && <span style={styles.posLabel}>{positionLabel} </span>}
              {poll.question}
            </div>
            <div style={styles.pollMeta}>
              {new Date(poll.startedAt).toLocaleString()} · {total} response{total !== 1 ? 's' : ''}
            </div>
          </div>
        </button>
        <div style={{display:'flex', gap:'0.4rem', alignItems:'center'}}>
          {!isConfirming && (
            <button
              style={{...styles.exportBtn, ...(copyFeedback ? styles.exportBtnSuccess : {})}}
              onClick={() => { onDownload(); onDownloadFeedback(); }}>
              {copyFeedback ? '✓ Downloading' : '⬇ CSV'}
            </button>
          )}
          {!isConfirming ? (
            <button style={styles.deleteBtn} onClick={onConfirmDelete} title="Delete">🗑</button>
          ) : (
            <div style={styles.confirmRow}>
              <span style={styles.confirmText}>Delete?</span>
              <button className="btn btn-primary"
                style={{fontSize:'0.78rem', padding:'0.3rem 0.7rem', background:'#dc2626'}}
                onClick={onDelete}>Yes</button>
              <button className="btn btn-secondary"
                style={{fontSize:'0.78rem', padding:'0.3rem 0.7rem'}}
                onClick={onCancelDelete}>Cancel</button>
            </div>
          )}
        </div>
      </div>

      {expanded && (
        <div style={styles.pollDetails}>
          {/* View mode tabs */}
          <div style={styles.viewTabs}>
            <button
              style={{...styles.viewTab, ...(viewMode==='summary' ? styles.viewTabActive : {})}}
              onClick={() => onSetView('summary')}>
              Summary
            </button>
            <button
              style={{...styles.viewTab, ...(viewMode==='students' ? styles.viewTabActive : {})}}
              onClick={() => onSetView('students')}>
              By student
            </button>
          </div>

          {/* Summary view — bar chart */}
          {viewMode === 'summary' && (
            <div style={{display:'flex', flexDirection:'column', gap:'0.6rem'}}>
              {poll.options.map((opt, i) => {
                const votes = Object.values(responses).filter(v => v === i).length;
                const pct = total > 0 ? Math.round(votes / total * 100) : 0;
                const isCorrect = hasCorrect && poll.correctIndex === i;
                return (
                  <div key={i} style={styles.histOpt}>
                    <div style={{display:'flex', justifyContent:'space-between', marginBottom:4}}>
                      <span style={{
                        fontWeight: isCorrect ? 600 : 400,
                        color: isCorrect ? 'var(--success)' : 'inherit',
                      }}>
                        {String.fromCharCode(65+i)}. {opt} {isCorrect && '✓'}
                      </span>
                      <span style={{color:'var(--muted)', fontSize:'0.85rem'}}>
                        {votes} ({pct}%)
                      </span>
                    </div>
                    <div style={styles.barBg}>
                      <div style={{...styles.barFill, width:`${pct}%`,
                        background: isCorrect ? 'var(--success)' : 'var(--accent2)'}} />
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* By student view — grouped by answer */}
          {viewMode === 'students' && (
            <div style={{display:'flex', flexDirection:'column', gap:'0.75rem'}}>
              {poll.options.map((opt, i) => {
                const students = byAnswer[i] || [];
                const isCorrect = hasCorrect && poll.correctIndex === i;
                if (students.length === 0) return null;
                return (
                  <div key={i} style={styles.answerGroup}>
                    <div style={{...styles.answerGroupHeader,
                      ...(isCorrect ? styles.answerGroupCorrect : {})}}>
                      <span style={{fontWeight:600}}>
                        {String.fromCharCode(65+i)}. {opt}
                      </span>
                      {isCorrect && <span style={styles.correctTag}>✓ correct</span>}
                      <span style={styles.answerCount}>
                        {students.length} student{students.length !== 1 ? 's' : ''}
                      </span>
                    </div>
                    <div style={styles.studentNames}>
                      {students.sort().map(name => (
                        <span key={name} style={styles.chip}>{name}</span>
                      ))}
                    </div>
                  </div>
                );
              })}
              {total === 0 && (
                <div style={{color:'var(--muted)', fontSize:'0.9rem'}}>No responses.</div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

const styles = {
  center: {
    minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center',
    padding:'1rem', background:'var(--paper)',
  },
  loginCard: {
    background:'white', borderRadius:16, border:'1px solid var(--border)',
    padding:'2.5rem 2rem', maxWidth:380, width:'100%', textAlign:'center',
    boxShadow:'var(--shadow)',
  },
  loginLogo: {
    fontFamily:'var(--font-display)', fontWeight:800, fontSize:'1.1rem',
    marginBottom:'1.5rem', display:'block',
  },
  err: { color:'var(--accent)', fontSize:'0.85rem' },
  backLink: {
    background:'none', border:'none', color:'var(--muted)', cursor:'pointer',
    marginTop:'1rem', fontSize:'0.85rem', display:'block', textAlign:'center',
  },
  page: { minHeight:'100vh', background:'var(--paper)' },
  header: {
    padding:'1rem 1.5rem', borderBottom:'1px solid var(--border)',
    background:'white', display:'flex', alignItems:'center', gap:'1rem', flexWrap:'wrap',
  },
  back: { background:'none', border:'none', color:'var(--accent2)', cursor:'pointer', fontSize:'0.9rem' },
  title: { fontFamily:'var(--font-display)', fontWeight:700, fontSize:'1.2rem', flex:1 },
  tabs: { display:'flex', gap:'0.25rem', background:'var(--cream)', borderRadius:8, padding:'0.25rem' },
  tab: {
    background:'none', border:'none', padding:'0.35rem 0.85rem', borderRadius:6,
    cursor:'pointer', fontSize:'0.9rem', color:'var(--muted)', transition:'all 0.15s',
  },
  tabActive: { background:'white', color:'var(--ink)', fontWeight:600, boxShadow:'0 1px 3px rgba(0,0,0,0.1)' },
  main: { maxWidth:760, margin:'0 auto', padding:'1.5rem 1rem' },
  empty: { textAlign:'center', color:'var(--muted)', padding:'3rem', fontSize:'0.95rem' },
  setGroup: {
    background:'white', borderRadius:12, border:'1.5px solid var(--accent2)',
    marginBottom:'0.75rem', overflow:'hidden',
  },
  setGroupHeaderRow: {
    display:'flex', alignItems:'center', gap:'0.5rem',
    padding:'0.85rem 1rem', borderBottom:'1px solid var(--cream)',
  },
  setGroupHeaderBtn: {
    display:'flex', alignItems:'center', gap:'0.75rem',
    background:'none', border:'none', cursor:'pointer', textAlign:'left', flex:1,
  },
  setGroupName: { fontFamily:'var(--font-display)', fontWeight:700, fontSize:'0.95rem' },
  setGroupMeta: { color:'var(--muted)', fontSize:'0.8rem', marginTop:'0.2rem' },
  setGroupPolls: { padding:'0.5rem 0.75rem', display:'flex', flexDirection:'column', gap:'0.4rem' },
  triangle: { fontSize:'0.7rem', color:'var(--muted)', flexShrink:0 },
  exportBtn: {
    background:'var(--cream)', border:'1px solid var(--border)', borderRadius:6,
    padding:'0.3rem 0.65rem', fontSize:'0.78rem', cursor:'pointer',
    color:'var(--ink)', whiteSpace:'nowrap', transition:'all 0.15s', flexShrink:0,
  },
  exportBtnSuccess: { background:'#dcfce7', borderColor:'var(--success)', color:'var(--success)' },
  pollCard: {
    background:'white', borderRadius:12, border:'1px solid var(--border)',
    marginBottom:'0.75rem', overflow:'hidden',
  },
  pollHeaderRow: {
    display:'flex', alignItems:'center', gap:'0.5rem', padding:'0.75rem 1rem',
  },
  pollHeaderBtn: {
    display:'flex', alignItems:'center', gap:'0.6rem',
    background:'none', border:'none', cursor:'pointer', textAlign:'left', flex:1,
    padding:'0.25rem 0',
  },
  posLabel: { color:'var(--muted)', fontWeight:400 },
  pollQ: { fontFamily:'var(--font-display)', fontWeight:600, fontSize:'0.95rem' },
  pollMeta: { color:'var(--muted)', fontSize:'0.8rem', marginTop:'0.2rem' },
  deleteBtn: {
    background:'none', border:'none', cursor:'pointer', fontSize:'1.1rem',
    padding:'0.25rem 0.4rem', borderRadius:6, opacity:0.5,
  },
  confirmRow: { display:'flex', alignItems:'center', gap:'0.4rem' },
  confirmText: { fontSize:'0.82rem', color:'var(--muted)', whiteSpace:'nowrap' },
  pollDetails: { padding:'0.75rem 1rem 1rem', borderTop:'1px solid var(--border)' },
  viewTabs: {
    display:'flex', gap:'0.25rem', background:'var(--cream)',
    borderRadius:6, padding:'0.2rem', marginBottom:'0.75rem', width:'fit-content',
  },
  viewTab: {
    background:'none', border:'none', padding:'0.25rem 0.65rem', borderRadius:4,
    cursor:'pointer', fontSize:'0.82rem', color:'var(--muted)',
  },
  viewTabActive: { background:'white', color:'var(--ink)', fontWeight:600, boxShadow:'0 1px 2px rgba(0,0,0,0.08)' },
  histOpt: { marginBottom:'0.6rem' },
  barBg: { height:6, borderRadius:3, background:'var(--cream)', overflow:'hidden' },
  barFill: { height:'100%', borderRadius:3, transition:'width 0.3s' },
  answerGroup: {
    borderRadius:8, border:'1px solid var(--border)', overflow:'hidden',
  },
  answerGroupHeader: {
    display:'flex', alignItems:'center', gap:'0.5rem',
    padding:'0.5rem 0.75rem', background:'var(--cream)', flexWrap:'wrap',
  },
  answerGroupCorrect: { background:'#dcfce7' },
  correctTag: {
    fontSize:'0.75rem', color:'var(--success)', fontWeight:600,
    background:'#bbf7d0', borderRadius:4, padding:'0.1rem 0.4rem',
  },
  answerCount: { marginLeft:'auto', fontSize:'0.78rem', color:'var(--muted)' },
  studentNames: { padding:'0.5rem 0.75rem', display:'flex', flexWrap:'wrap', gap:'0.35rem' },
  chip: {
    background:'var(--cream)', borderRadius:4, padding:'0.2rem 0.5rem',
    fontSize:'0.78rem', color:'var(--ink)',
  },
};
