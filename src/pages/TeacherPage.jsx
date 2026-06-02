import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { startPoll, endPoll, expirePoll, revealPollResults, watchActivePoll, watchStudents } from '../utils/firebaseOps';

const DEFAULT_DURATION = 60;

// Options for teacher-set display policy
const RESULT_OPTIONS = [
  { value: 'on_submit',  label: 'After they submit',  hint: 'Each student sees results once they answer' },
  { value: 'manual',     label: 'When I choose',       hint: 'You flip a toggle during or after the poll' },
  { value: 'never',      label: 'Never',               hint: 'Results stay hidden from students' },
];
const CORRECT_OPTIONS = [
  { value: 'with_results', label: 'With results',    hint: 'Shown at the same moment as results' },
  { value: 'manual',       label: 'When I choose',   hint: 'You flip a toggle independently' },
  { value: 'never',        label: 'Never',            hint: 'Correct answer never shown to students' },
];

export default function TeacherPage() {
  const navigate = useNavigate();
  const [students, setStudents]         = useState([]);
  const [activePoll, setActivePoll]     = useState(null);
  const [timeLeft, setTimeLeft]         = useState(0);
  const [view, setView]                 = useState('dashboard');
  const timerRef = useRef(null);

  // Poll creation form
  const [question, setQuestion]         = useState('');
  const [options, setOptions]           = useState(['', '']);
  const [correctIndex, setCorrectIndex] = useState(null);
  const [duration, setDuration]         = useState(DEFAULT_DURATION);
  const [resultPolicy, setResultPolicy] = useState('on_submit');
  const [correctPolicy, setCorrectPolicy] = useState('with_results');

  useEffect(() => {
    if (sessionStorage.getItem('role') !== 'teacher') navigate('/');
  }, []);

  useEffect(() => {
    const unsub1 = watchActivePoll(poll => {
      setActivePoll(poll);
      if (poll && !poll.ended) setTimeLeft(Math.max(0,
        Math.round(poll.duration - (Date.now() - poll.startedAt) / 1000)
      ));
    });
    const unsub2 = watchStudents(setStudents);
    return () => { unsub1(); unsub2(); };
  }, []);

  useEffect(() => {
    clearInterval(timerRef.current);
    if (activePoll && !activePoll.ended) {
      timerRef.current = setInterval(() => {
        const left = Math.max(0,
          Math.round(activePoll.duration - (Date.now() - activePoll.startedAt) / 1000)
        );
        setTimeLeft(left);
        if (left === 0) {
          clearInterval(timerRef.current);
          expirePoll();
        }
      }, 500);
    }
    return () => clearInterval(timerRef.current);
  }, [activePoll?.id, activePoll?.ended]);

  function handleAddOption() {
    if (options.length < 6) setOptions([...options, '']);
  }
  function handleOptionChange(i, val) {
    setOptions(options.map((o, idx) => idx === i ? val : o));
  }
  function handleRemoveOption(i) {
    if (options.length <= 2) return;
    const next = options.filter((_, idx) => idx !== i);
    setOptions(next);
    if (correctIndex === i) setCorrectIndex(null);
    else if (correctIndex > i) setCorrectIndex(correctIndex - 1);
  }

  function handleStartPoll(e) {
    e.preventDefault();
    const filled = options.filter(o => o.trim());
    if (!question.trim() || filled.length < 2) return;
    startPoll({
      question: question.trim(),
      options: filled,
      correctIndex,
      duration,
      resultPolicy,
      // if no correct answer marked, correct policy is irrelevant
      correctPolicy: correctIndex != null ? correctPolicy : 'never',
    });
    setQuestion(''); setOptions(['', '']); setCorrectIndex(null);
    setDuration(DEFAULT_DURATION); setResultPolicy('on_submit'); setCorrectPolicy('with_results');
    setView('dashboard');
  }

  const responseCount = activePoll ? Object.keys(activePoll.responses || {}).length : 0;
  const pollExpired = activePoll?.ended;

  // Compute what students currently see based on policy + teacher overrides
  function studentSeesResults(poll) {
    if (poll.revealResults) return true; // teacher manually revealed
    if (poll.resultPolicy === 'never') return false;
    if (poll.resultPolicy === 'on_submit') return true; // handled per-student in StudentPage
    return false; // 'manual' — only if teacher toggled
  }
  function studentSeesCorrect(poll) {
    if (poll.revealCorrect) return true;
    if (poll.correctPolicy === 'never') return false;
    if (poll.correctPolicy === 'with_results' && studentSeesResults(poll)) return true;
    return false;
  }

  return (
    <div style={styles.page}>
      <aside style={styles.sidebar}>
        <div style={styles.logo}>
          <span style={{color:'var(--accent)'}}>●</span> ClassPoll
        </div>
        <nav style={styles.nav}>
          <button style={{...styles.navBtn, ...(view==='dashboard' ? styles.navActive : {})}}
            onClick={() => setView('dashboard')}>📊 Dashboard</button>
          <button style={{...styles.navBtn, ...(view==='create' ? styles.navActive : {}), ...(activePoll ? styles.navDisabled : {})}}
            onClick={() => !activePoll && setView('create')}
            disabled={!!activePoll}>
            ➕ New Poll
          </button>
          <button style={styles.navBtn} onClick={() => navigate('/history')}>
            🕐 History
          </button>
        </nav>
        <div style={styles.sidebarBottom}>
          <div style={styles.studentCount}>
            <span style={styles.dot} />
            <strong>{students.length}</strong> student{students.length !== 1 ? 's' : ''} online
          </div>
          <div style={styles.studentList}>
            {students.map(s => (
              <div key={s.name} style={styles.studentChip}>{s.name}</div>
            ))}
          </div>
          <button className="btn btn-secondary"
            style={{width:'100%', marginTop:'auto', fontSize:'0.8rem'}}
            onClick={() => { sessionStorage.clear(); navigate('/'); }}>
            Exit
          </button>
        </div>
      </aside>

      <main style={styles.main}>

        {/* ── Create poll view ── */}
        {view === 'create' && (
          <div style={styles.content} className="fade-up">
            <h2 style={styles.pageTitle}>Create a Poll</h2>
            <form onSubmit={handleStartPoll} style={styles.form}>

              <div>
                <label className="label">Question</label>
                <textarea className="input" rows={2}
                  placeholder="e.g. Which process converts sunlight into energy?"
                  value={question} onChange={e => setQuestion(e.target.value)}
                  style={{resize:'vertical'}} required />
              </div>

              <div>
                <label className="label">Answer Options</label>
                <p style={styles.hint}>Click a letter circle to mark the correct answer (optional)</p>
                <div style={{display:'flex', flexDirection:'column', gap:'0.5rem'}}>
                  {options.map((opt, i) => (
                    <div key={i} style={{display:'flex', gap:'0.5rem', alignItems:'center'}}>
                      <button type="button"
                        style={{...styles.correctBtn, ...(correctIndex===i ? styles.correctBtnActive : {})}}
                        onClick={() => setCorrectIndex(correctIndex===i ? null : i)}
                        title="Mark as correct answer">
                        {correctIndex === i ? '✓' : String.fromCharCode(65+i)}
                      </button>
                      <input className="input" style={{flex:1}}
                        placeholder={`Option ${String.fromCharCode(65+i)}`}
                        value={opt} onChange={e => handleOptionChange(i, e.target.value)}
                        required />
                      <button type="button" style={styles.removeBtn}
                        onClick={() => handleRemoveOption(i)}
                        disabled={options.length <= 2}>✕</button>
                    </div>
                  ))}
                </div>
                {options.length < 6 && (
                  <button type="button" className="btn btn-ghost"
                    style={{marginTop:'0.5rem', fontSize:'0.85rem'}}
                    onClick={handleAddOption}>+ Add option</button>
                )}
              </div>

              {/* Display policy */}
              <div style={styles.policySection}>
                <label className="label">Show results to students</label>
                <div style={styles.policyRow}>
                  {RESULT_OPTIONS.map(o => (
                    <button key={o.value} type="button"
                      style={{...styles.policyBtn, ...(resultPolicy===o.value ? styles.policyBtnActive : {})}}
                      onClick={() => setResultPolicy(o.value)}>
                      <span style={styles.policyLabel}>{o.label}</span>
                      <span style={styles.policyHint}>{o.hint}</span>
                    </button>
                  ))}
                </div>
              </div>

              {correctIndex != null && (
                <div style={styles.policySection}>
                  <label className="label">Reveal correct answer to students</label>
                  <div style={styles.policyRow}>
                    {CORRECT_OPTIONS.map(o => (
                      <button key={o.value} type="button"
                        style={{
                          ...styles.policyBtn,
                          ...(correctPolicy===o.value ? styles.policyBtnActive : {}),
                          ...(o.value === 'with_results' && resultPolicy === 'never' ? styles.policyBtnDisabled : {}),
                        }}
                        onClick={() => {
                          if (o.value === 'with_results' && resultPolicy === 'never') return;
                          setCorrectPolicy(o.value);
                        }}>
                        <span style={styles.policyLabel}>{o.label}</span>
                        <span style={styles.policyHint}>
                          {o.value === 'with_results' && resultPolicy === 'never'
                            ? 'Not available — results are set to Never'
                            : o.hint}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div style={{display:'flex', gap:'1rem', alignItems:'flex-end'}}>
                <div style={{flex:1}}>
                  <label className="label">Duration (seconds)</label>
                  <input className="input" type="number" min={10} max={300}
                    value={duration} onChange={e => setDuration(Number(e.target.value))} />
                </div>
                <button type="submit" className="btn btn-primary" style={{padding:'0.65rem 2rem'}}>
                  Start Poll →
                </button>
              </div>
            </form>
          </div>
        )}

        {/* ── Dashboard view ── */}
        {view === 'dashboard' && (
          <div style={styles.content} className="fade-up">
            <h2 style={styles.pageTitle}>Dashboard</h2>

            {!activePoll && (
              <div style={styles.empty}>
                <span style={{fontSize:'3rem'}}>📋</span>
                <p>No active poll. <button style={styles.link}
                  onClick={() => setView('create')}>Create one →</button></p>
              </div>
            )}

            {activePoll && (
              <div style={styles.pollCard}>
                {/* Header row */}
                <div style={styles.timerRow}>
                  {!pollExpired
                    ? <TimerRing timeLeft={timeLeft} total={activePoll.duration} />
                    : <div style={styles.expiredBadge}>⏰</div>
                  }
                  <div style={{flex:1}}>
                    <div style={styles.pollQuestion}>{activePoll.question}</div>
                    <div style={styles.responseMeta}>
                      {responseCount} / {students.length} responded
                      {pollExpired && <span style={styles.expiredTag}> · Stopped accepting answers</span>}
                    </div>
                  </div>
                </div>

                {/* Results — teacher always sees them */}
                <div style={{marginTop:'1.25rem', display:'flex', flexDirection:'column', gap:'0.6rem'}}>
                  {activePoll.options.map((opt, i) => {
                    const votes = Object.values(activePoll.responses || {}).filter(v => v === i).length;
                    const pct = responseCount > 0 ? Math.round(votes / responseCount * 100) : 0;
                    const isCorrect = activePoll.correctIndex === i;
                    return (
                      <div key={i} style={styles.optionRow}>
                        <div style={{...styles.optionLabel, ...(isCorrect ? styles.correctLabel : {})}}>
                          {String.fromCharCode(65+i)}{isCorrect ? '✓' : ''}
                        </div>
                        <div style={{flex:1}}>
                          <div style={{display:'flex', justifyContent:'space-between', marginBottom:'0.25rem'}}>
                            <span style={{fontSize:'0.9rem'}}>{opt}</span>
                            <span style={{fontSize:'0.85rem', color:'var(--muted)'}}>{votes} ({pct}%)</span>
                          </div>
                          <div style={styles.barBg}>
                            <div style={{
                              ...styles.barFill, width:`${pct}%`,
                              background: isCorrect ? 'var(--success)' : 'var(--accent2)',
                            }} />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Who answered */}
                {responseCount > 0 && (
                  <div style={{marginTop:'1rem'}}>
                    <label className="label">Responded</label>
                    <div style={{display:'flex', flexWrap:'wrap', gap:'0.4rem'}}>
                      {Object.keys(activePoll.responses).map(name => (
                        <span key={name} style={styles.answeredChip}>{name}</span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Controls */}
                <div style={styles.controls}>
                  <label className="label" style={{marginBottom:'0.75rem'}}>Student display</label>
                  <div style={styles.controlGrid}>

                    {/* Results toggle — only if policy is 'manual' */}
                    {activePoll.resultPolicy === 'manual' && (
                      <div style={styles.controlItem}>
                        <span style={styles.controlLabel}>Results visible to students</span>
                        <Toggle
                          active={!!activePoll.revealResults}
                          onChange={val => revealPollResults(val, activePoll.revealCorrect)}
                        />
                      </div>
                    )}

                    {/* Correct answer toggle — only if policy is 'manual' */}
                    {activePoll.correctPolicy === 'manual' && activePoll.correctIndex != null && (
                      <div style={styles.controlItem}>
                        <span style={styles.controlLabel}>Correct answer visible</span>
                        <Toggle
                          active={!!activePoll.revealCorrect}
                          onChange={val => revealPollResults(activePoll.revealResults, val)}
                        />
                      </div>
                    )}

                    {/* Status summary */}
                    <div style={styles.statusSummary}>
                      <StatusPill
                        label="Results"
                        state={activePoll.resultPolicy === 'never' ? 'never'
                          : activePoll.resultPolicy === 'on_submit' ? 'auto'
                          : activePoll.revealResults ? 'shown' : 'hidden'}
                      />
                      {activePoll.correctIndex != null && (
                        <StatusPill
                          label="Answer"
                          state={activePoll.correctPolicy === 'never' ? 'never'
                            : studentSeesCorrect(activePoll) ? 'shown' : 'hidden'}
                        />
                      )}
                    </div>

                    <button className="btn btn-secondary"
                      style={{marginLeft:'auto', alignSelf:'center'}}
                      onClick={() => endPoll(activePoll.revealResults, activePoll.revealCorrect)}>
                      Close Poll
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

function Toggle({ active, onChange }) {
  return (
    <button onClick={() => onChange(!active)} style={{
      position:'relative', width:48, height:26, borderRadius:13, border:'none',
      background: active ? 'var(--success)' : 'var(--border)',
      cursor:'pointer', transition:'background 0.2s', flexShrink:0,
    }}>
      <span style={{
        position:'absolute', top:3, left: active ? 22 : 3,
        width:20, height:20, borderRadius:'50%', background:'white',
        transition:'left 0.2s', boxShadow:'0 1px 3px rgba(0,0,0,0.2)',
      }} />
    </button>
  );
}

function StatusPill({ label, state }) {
  const colors = {
    shown:  { bg:'#dcfce7', color:'#15803d' },
    hidden: { bg:'#fee2e2', color:'#b91c1c' },
    auto:   { bg:'#dbeafe', color:'#1d4ed8' },
    never:  { bg:'var(--cream)', color:'var(--muted)' },
  };
  const text = { shown:'Shown', hidden:'Hidden', auto:'Auto', never:'Never' };
  const c = colors[state] || colors.never;
  return (
    <div style={{display:'flex', alignItems:'center', gap:'0.4rem'}}>
      <span style={{fontSize:'0.78rem', color:'var(--muted)'}}>{label}:</span>
      <span style={{
        background:c.bg, color:c.color, borderRadius:4,
        padding:'0.15rem 0.5rem', fontSize:'0.75rem', fontWeight:600,
      }}>{text[state]}</span>
    </div>
  );
}

function TimerRing({ timeLeft, total }) {
  const radius = 28;
  const circ = 2 * Math.PI * radius;
  const progress = total > 0 ? (timeLeft / total) : 0;
  const offset = circ * (1 - progress);
  const color = progress > 0.4 ? 'var(--accent2)' : progress > 0.15 ? '#f59e0b' : 'var(--accent)';
  return (
    <div style={{position:'relative', width:72, height:72, flexShrink:0}}>
      <svg width="72" height="72" style={{transform:'rotate(-90deg)'}}>
        <circle cx="36" cy="36" r={radius} fill="none" stroke="var(--cream)" strokeWidth="5"/>
        <circle cx="36" cy="36" r={radius} fill="none" stroke={color} strokeWidth="5"
          strokeDasharray={circ} strokeDashoffset={offset}
          strokeLinecap="round" style={{transition:'stroke-dashoffset 0.5s linear, stroke 0.5s'}}/>
      </svg>
      <span style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',
        fontFamily:'var(--font-display)',fontWeight:700,fontSize:'1.1rem'}}>
        {timeLeft}
      </span>
    </div>
  );
}

const styles = {
  page: { display:'flex', minHeight:'100vh', background:'var(--paper)' },
  sidebar: {
    width:220, minHeight:'100vh', background:'var(--ink)', color:'white',
    display:'flex', flexDirection:'column', padding:'1.5rem 1rem', gap:'0.5rem',
    position:'sticky', top:0, flexShrink:0,
  },
  logo: { fontFamily:'var(--font-display)', fontWeight:800, fontSize:'1.1rem', padding:'0 0.5rem', marginBottom:'1rem' },
  nav: { display:'flex', flexDirection:'column', gap:'0.25rem' },
  navBtn: {
    background:'transparent', color:'rgba(255,255,255,0.7)', border:'none',
    borderRadius:8, padding:'0.6rem 0.75rem', textAlign:'left', cursor:'pointer',
    fontSize:'0.9rem', transition:'all 0.15s',
  },
  navActive: { background:'rgba(255,255,255,0.12)', color:'white' },
  navDisabled: { opacity:0.4, cursor:'not-allowed' },
  sidebarBottom: { marginTop:'auto', display:'flex', flexDirection:'column', gap:'0.75rem' },
  studentCount: { display:'flex', alignItems:'center', gap:'0.5rem', fontSize:'0.85rem', color:'rgba(255,255,255,0.6)' },
  dot: { width:8, height:8, borderRadius:'50%', background:'#4ade80', flexShrink:0, boxShadow:'0 0 6px #4ade80' },
  studentList: { display:'flex', flexWrap:'wrap', gap:'0.35rem', maxHeight:120, overflowY:'auto' },
  studentChip: {
    background:'rgba(255,255,255,0.1)', borderRadius:4, padding:'0.2rem 0.5rem',
    fontSize:'0.78rem', color:'rgba(255,255,255,0.8)',
  },
  main: { flex:1, padding:'2rem', overflowY:'auto' },
  content: { maxWidth:720, margin:'0 auto' },
  pageTitle: { fontSize:'1.6rem', marginBottom:'1.5rem' },
  form: { display:'flex', flexDirection:'column', gap:'1.25rem', background:'white', padding:'1.5rem', borderRadius:12, border:'1px solid var(--border)' },
  hint: { fontSize:'0.82rem', color:'var(--muted)', marginBottom:'0.5rem' },
  policySection: { display:'flex', flexDirection:'column', gap:'0.5rem' },
  policyRow: { display:'flex', gap:'0.5rem', flexWrap:'wrap' },
  policyBtn: {
    display:'flex', flexDirection:'column', gap:'0.2rem',
    padding:'0.6rem 0.85rem', borderRadius:8, border:'1.5px solid var(--border)',
    background:'var(--paper)', cursor:'pointer', textAlign:'left',
    transition:'all 0.15s', flex:1, minWidth:140,
  },
  policyBtnActive: { borderColor:'var(--accent2)', background:'#eff6ff' },
  policyBtnDisabled: { opacity:0.4, cursor:'not-allowed' },
  policyLabel: { fontSize:'0.88rem', fontWeight:600, color:'var(--ink)' },
  policyHint: { fontSize:'0.75rem', color:'var(--muted)' },
  empty: { textAlign:'center', padding:'4rem 2rem', color:'var(--muted)', display:'flex', flexDirection:'column', alignItems:'center', gap:'0.75rem' },
  link: { background:'none', border:'none', color:'var(--accent2)', cursor:'pointer', fontSize:'inherit', textDecoration:'underline' },
  pollCard: { background:'white', borderRadius:12, border:'1px solid var(--border)', padding:'1.5rem' },
  timerRow: { display:'flex', alignItems:'center', gap:'1rem' },
  pollQuestion: { fontFamily:'var(--font-display)', fontWeight:700, fontSize:'1.1rem' },
  responseMeta: { color:'var(--muted)', fontSize:'0.85rem', marginTop:'0.2rem' },
  expiredBadge: {
    width:72, height:72, borderRadius:'50%', background:'var(--cream)',
    display:'flex', alignItems:'center', justifyContent:'center',
    fontSize:'1.8rem', flexShrink:0,
  },
  expiredTag: { color:'var(--accent)', fontWeight:500 },
  optionRow: { display:'flex', alignItems:'center', gap:'0.75rem' },
  optionLabel: {
    width:28, height:28, borderRadius:'50%', background:'var(--cream)',
    display:'flex', alignItems:'center', justifyContent:'center',
    fontSize:'0.8rem', fontWeight:700, flexShrink:0,
  },
  correctLabel: { background:'#dcfce7', color:'var(--success)' },
  barBg: { height:8, borderRadius:4, background:'var(--cream)', overflow:'hidden' },
  barFill: { height:'100%', borderRadius:4, transition:'width 0.4s ease' },
  answeredChip: {
    background:'#dbeafe', color:'var(--accent2)', borderRadius:4,
    padding:'0.15rem 0.5rem', fontSize:'0.78rem',
  },
  correctBtn: {
    width:32, height:32, borderRadius:'50%', border:'2px solid var(--border)',
    background:'var(--cream)', cursor:'pointer', fontWeight:700, fontSize:'0.8rem',
    flexShrink:0, transition:'all 0.15s',
  },
  correctBtnActive: { background:'var(--success)', color:'white', borderColor:'var(--success)' },
  removeBtn: {
    background:'none', border:'none', color:'var(--muted)', cursor:'pointer',
    fontSize:'0.9rem', padding:'0.25rem', borderRadius:4,
  },
  controls: {
    marginTop:'1.25rem', paddingTop:'1.25rem',
    borderTop:'1px solid var(--border)',
  },
  controlGrid: { display:'flex', gap:'1rem', alignItems:'center', flexWrap:'wrap' },
  controlItem: { display:'flex', alignItems:'center', gap:'0.6rem' },
  controlLabel: { fontSize:'0.85rem', color:'var(--muted)' },
  statusSummary: { display:'flex', gap:'0.75rem', flexWrap:'wrap' },
};
