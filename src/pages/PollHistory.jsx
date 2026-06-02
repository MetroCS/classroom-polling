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
  const [expanded, setExpanded]       = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null); // poll id to confirm

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
    setExpanded(null);
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
            {polls.length === 0 && (
              <div style={styles.empty}>No polls yet. Run your first one in class!</div>
            )}
            {polls.map((poll, idx) => {
              const responses = poll.responses || {};
              const total = Object.keys(responses).length;
              const isOpen = expanded === idx;
              const isConfirming = confirmDelete === poll.id;

              return (
                <div key={poll.id || idx} style={styles.pollCard}>
                  <div style={styles.pollHeaderRow}>
                    <button style={styles.pollHeaderBtn}
                      onClick={() => setExpanded(isOpen ? null : idx)}>
                      <div>
                        <div style={styles.pollQ}>{poll.question}</div>
                        <div style={styles.pollMeta}>
                          {new Date(poll.startedAt).toLocaleString()} · {total} response{total !== 1 ? 's' : ''}
                        </div>
                      </div>
                      <span style={{color:'var(--muted)', marginLeft:'auto'}}>{isOpen ? '▲' : '▼'}</span>
                    </button>

                    {/* Delete controls */}
                    {!isConfirming ? (
                      <button style={styles.deleteBtn}
                        onClick={() => setConfirmDelete(poll.id)}
                        title="Delete this poll">
                        🗑
                      </button>
                    ) : (
                      <div style={styles.confirmRow}>
                        <span style={styles.confirmText}>Delete?</span>
                        <button className="btn btn-primary"
                          style={{fontSize:'0.78rem', padding:'0.3rem 0.7rem', background:'#dc2626'}}
                          onClick={() => handleDelete(poll.id)}>
                          Yes
                        </button>
                        <button className="btn btn-secondary"
                          style={{fontSize:'0.78rem', padding:'0.3rem 0.7rem'}}
                          onClick={() => setConfirmDelete(null)}>
                          Cancel
                        </button>
                      </div>
                    )}
                  </div>

                  {isOpen && (
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
                                color: isCorrect ? 'var(--success)' : 'inherit'
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
  pollCard: {
    background:'white', borderRadius:12, border:'1px solid var(--border)',
    marginBottom:'0.75rem', overflow:'hidden',
  },
  pollHeaderRow: {
    display:'flex', alignItems:'center', gap:'0.5rem',
    padding:'0.75rem 1rem', borderBottom:'1px solid transparent',
  },
  pollHeaderBtn: {
    display:'flex', alignItems:'center', gap:'0.75rem',
    background:'none', border:'none', cursor:'pointer', textAlign:'left', flex:1,
    padding:'0.25rem 0',
  },
  pollQ: { fontFamily:'var(--font-display)', fontWeight:600, fontSize:'0.95rem' },
  pollMeta: { color:'var(--muted)', fontSize:'0.8rem', marginTop:'0.2rem' },
  deleteBtn: {
    background:'none', border:'none', cursor:'pointer', fontSize:'1.1rem',
    padding:'0.25rem 0.4rem', borderRadius:6, flexShrink:0,
    opacity:0.5, transition:'opacity 0.15s',
  },
  confirmRow: {
    display:'flex', alignItems:'center', gap:'0.4rem', flexShrink:0,
  },
  confirmText: { fontSize:'0.82rem', color:'var(--muted)', whiteSpace:'nowrap' },
  pollDetails: {
    padding:'0.75rem 1rem 1rem',
    borderTop:'1px solid var(--border)',
  },
  histOpt: { marginBottom:'0.6rem' },
  barBg: { height:6, borderRadius:3, background:'var(--cream)', overflow:'hidden' },
  barFill: { height:'100%', borderRadius:3, transition:'width 0.3s' },
  chip: {
    background:'var(--cream)', borderRadius:4, padding:'0.2rem 0.5rem',
    fontSize:'0.78rem', color:'var(--ink)',
  },
};
