import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { watchPollHistory } from '../utils/firebaseOps';
import { db } from '../firebase';
import { ref, onValue, remove } from 'firebase/database';

const HISTORY_PASSWORD = 'teach123';

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

  useEffect(() => {
    if (sessionStorage.getItem('historyAuth') === 'true') setAuth(true);
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
      sessionStorage.setItem('historyAuth', 'true');
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

  // Group polls: sets (by setId+date) and standalone
  function groupPolls(polls) {
    const setGroups = {};   // key: setId_date
    const standalone = [];

    polls.forEach(poll => {
      if (poll.setId) {
        const date = new Date(poll.startedAt).toLocaleDateString();
        const key = poll.sessionKey || `${poll.setId}_${date}`;
        if (!setGroups[key]) {
          setGroups[key] = {
            key,
            setId:   poll.setId,
            setName: poll.setName,
            date,
            startedAt: poll.startedAt,
            polls: [],
          };
        }
        setGroups[key].polls.push(poll);
      } else {
        standalone.push(poll);
      }
    });

    // Sort polls within each set by position
    Object.values(setGroups).forEach(g => {
      g.polls.sort((a, b) => (a.setPosition ?? 0) - (b.setPosition ?? 0));
    });

    // Merge into a single sorted list of items
    const items = [
      ...Object.values(setGroups).map(g => ({ type: 'set', ...g })),
      ...standalone.map(p => ({ type: 'poll', ...p })),
    ].sort((a, b) => (b.startedAt || 0) - (a.startedAt || 0));

    return items;
  }

  if (!auth) return (
    <div style={styles.center}>
      <div style={styles.loginCard} className="fade-up">
        <div style={styles.loginLogo}>
          <span style={{color:'var(--accent)'}}>●</span> ClassPoll
        </div>
        <h2 style={{fontSize:'1.4rem', marginBottom:'0.25rem'}}>Poll History</h2>
        <p style={{color:'var(--muted)', marginBottom:'1.5rem', fontSize:'0.9rem'}}>
          Enter the teacher password to view history and attendance.
        </p>
        <form onSubmit={handleLogin}
          style={{display:'flex', flexDirection:'column', gap:'0.75rem'}}>
          <input className="input" type="password" placeholder="Teacher password"
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
                    {/* Set header */}
                    <button style={styles.setGroupHeader}
                      onClick={() => toggleSet(item.key)}>
                      <span style={styles.triangle}>{isOpen ? '▼' : '▶'}</span>
                      <div style={{flex:1}}>
                        <div style={styles.setGroupName}>
                          📚 {item.setName}
                        </div>
                        <div style={styles.setGroupMeta}>
                          {item.date} · {item.polls.length} polls · {totalResponses} total responses
                        </div>
                      </div>
                    </button>

                    {/* Set polls */}
                    {isOpen && (
                      <div style={styles.setGroupPolls}>
                        {item.polls.map(poll => (
                          <PollRow key={poll.id} poll={poll}
                            expanded={expanded.has(poll.id)}
                            confirmDelete={confirmDelete}
                            onToggle={() => togglePoll(poll.id)}
                            onDelete={() => handleDelete(poll.id)}
                            onConfirmDelete={() => setConfirmDelete(poll.id)}
                            onCancelDelete={() => setConfirmDelete(null)}
                            positionLabel={`${poll.setPosition + 1}.`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              // Standalone poll
              return (
                <PollRow key={item.id} poll={item}
                  expanded={expanded.has(item.id)}
                  confirmDelete={confirmDelete}
                  onToggle={() => togglePoll(item.id)}
                  onDelete={() => handleDelete(item.id)}
                  onConfirmDelete={() => setConfirmDelete(item.id)}
                  onCancelDelete={() => setConfirmDelete(null)}
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

function PollRow({ poll, expanded, confirmDelete, onToggle, onDelete, onConfirmDelete, onCancelDelete, positionLabel }) {
  const responses = poll.responses || {};
  const total = Object.keys(responses).length;
  const isConfirming = confirmDelete === poll.id;

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

      {expanded && (
        <div style={styles.pollDetails}>
          {(poll.options || []).map((opt, i) => {
            const votes = Object.values(responses).filter(v => v === i).length;
            const pct = total > 0 ? Math.round(votes / total * 100) : 0;
            const isCorrect = poll.correctIndex === i;
            return (
              <div key={i} style={styles.histOpt}>
                <div style={{display:'flex', justifyContent:'space-between', marginBottom:4}}>
                  <span style={{
                    fontWeight: isCorrect ? 600 : 400,
                    color: isCorrect ? 'var(--success)' : 'inherit',
                  }}>
                    {String.fromCharCode(65+i)}. {opt} {isCorrect && '✓'}
                  </span>
                  <span style={{color:'var(--muted)', fontSize:'0.85rem'}}>{votes} ({pct}%)</span>
                </div>
                <div style={styles.barBg}>
                  <div style={{...styles.barFill, width:`${pct}%`,
                    background: isCorrect ? 'var(--success)' : 'var(--accent2)'}} />
                </div>
              </div>
            );
          })}
          {total > 0 && (
            <div style={{marginTop:'0.75rem'}}>
              <label className="label">Who responded</label>
              <div style={{display:'flex', flexWrap:'wrap', gap:'0.35rem'}}>
                {Object.keys(responses).map(n => (
                  <span key={n} style={styles.chip}>{n}</span>
                ))}
              </div>
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
  main: { maxWidth:720, margin:'0 auto', padding:'1.5rem 1rem' },
  empty: { textAlign:'center', color:'var(--muted)', padding:'3rem', fontSize:'0.95rem' },
  setGroup: {
    background:'white', borderRadius:12, border:'1.5px solid var(--accent2)',
    marginBottom:'0.75rem', overflow:'hidden',
  },
  setGroupHeader: {
    display:'flex', alignItems:'center', gap:'0.75rem',
    padding:'0.85rem 1rem', background:'none', border:'none',
    cursor:'pointer', textAlign:'left', width:'100%',
    borderBottom:'1px solid var(--cream)',
  },
  setGroupName: { fontFamily:'var(--font-display)', fontWeight:700, fontSize:'0.95rem' },
  setGroupMeta: { color:'var(--muted)', fontSize:'0.8rem', marginTop:'0.2rem' },
  setGroupPolls: { padding:'0.5rem 0.75rem', display:'flex', flexDirection:'column', gap:'0.4rem' },
  triangle: { fontSize:'0.7rem', color:'var(--muted)', flexShrink:0 },
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
  histOpt: { marginBottom:'0.6rem' },
  barBg: { height:6, borderRadius:3, background:'var(--cream)', overflow:'hidden' },
  barFill: { height:'100%', borderRadius:3, transition:'width 0.3s' },
  chip: {
    background:'var(--cream)', borderRadius:4, padding:'0.2rem 0.5rem',
    fontSize:'0.78rem', color:'var(--ink)',
  },
};
