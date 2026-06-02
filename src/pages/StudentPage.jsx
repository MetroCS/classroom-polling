import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { joinSession, leaveSession, submitAnswer, watchActivePoll } from '../utils/firebaseOps';

export default function StudentPage() {
  const navigate = useNavigate();
  const [name, setName]             = useState('');
  const [joined, setJoined]         = useState(false);
  const [activePoll, setActivePoll] = useState(null);
  const [selected, setSelected]     = useState(null);
  const [submitted, setSubmitted]   = useState(false);
  const [timeLeft, setTimeLeft]     = useState(0);
  const [pollEnded, setPollEnded]   = useState(null);
  const timerRef = useRef(null);
  const prevPollId = useRef(null);

  useEffect(() => {
    const unsub = watchActivePoll(poll => {
      if (!poll && activePoll) {
        setPollEnded(activePoll);
        setTimeout(() => setPollEnded(null), 10000);
      }
      if (poll && poll.id !== prevPollId.current) {
        setSelected(null);
        setSubmitted(false);
        prevPollId.current = poll.id;
      }
      setActivePoll(poll);
      if (poll && !poll.ended) setTimeLeft(Math.max(0,
        Math.round(poll.duration - (Date.now() - poll.startedAt) / 1000)
      ));
    });
    return unsub;
  }, [activePoll]);

  useEffect(() => {
    clearInterval(timerRef.current);
    if (activePoll && !activePoll.ended) {
      timerRef.current = setInterval(() => {
        const left = Math.max(0,
          Math.round(activePoll.duration - (Date.now() - activePoll.startedAt) / 1000)
        );
        setTimeLeft(left);
        if (left === 0) clearInterval(timerRef.current);
      }, 500);
    }
    return () => clearInterval(timerRef.current);
  }, [activePoll?.id, activePoll?.ended]);

  useEffect(() => {
    if (!joined || !name) return;
    const cleanup = () => leaveSession(name);
    window.addEventListener('beforeunload', cleanup);
    return () => { cleanup(); window.removeEventListener('beforeunload', cleanup); };
  }, [joined, name]);

  function handleJoin(e) {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;
    joinSession(trimmed).then(() => setJoined(true));
  }

  function handleSelect(i) {
    if (submitted || timeLeft === 0 || activePoll?.ended) return;
    setSelected(i);
  }

  function handleSubmit() {
    if (selected === null || submitted || !activePoll) return;
    submitAnswer(name, activePoll.id, selected);
    setSubmitted(true);
  }

  const alreadyAnswered = activePoll && activePoll.responses?.[name] !== undefined;
  const myAnswer = alreadyAnswered ? activePoll.responses[name] : selected;
  const responseCount = activePoll ? Object.keys(activePoll.responses || {}).length : 0;
  const pollStopped = activePoll?.ended || timeLeft === 0;

  // Determine what to show based on teacher policy + manual overrides
  function shouldShowResults() {
    if (!activePoll) return false;
    if (activePoll.revealResults) return true;      // teacher manually revealed
    if (activePoll.resultPolicy === 'never') return false;
    if (activePoll.resultPolicy === 'manual') return false;
    if (activePoll.resultPolicy === 'on_submit') return submitted || alreadyAnswered;
    return false;
  }

  function shouldShowCorrect() {
    if (!activePoll) return false;
    if (activePoll.correctIndex == null) return false;
    if (activePoll.revealCorrect) return true;      // teacher manually revealed
    if (activePoll.correctPolicy === 'never') return false;
    if (activePoll.correctPolicy === 'manual') return false;
    if (activePoll.correctPolicy === 'with_results') return shouldShowResults();
    return false;
  }

  const showResults = shouldShowResults();
  const showCorrect = shouldShowCorrect();

  // ── Join screen ───────────────────────────────────────────
  if (!joined) return (
    <div style={styles.center}>
      <div style={styles.joinCard} className="fade-up">
        <div style={styles.joinLogo}><span style={{color:'var(--accent)'}}>●</span> ClassPoll</div>
        <h1 style={{fontSize:'1.8rem', marginBottom:'0.25rem'}}>Join Session</h1>
        <p style={{color:'var(--muted)', marginBottom:'1.5rem'}}>Enter your name to start answering polls</p>
        <form onSubmit={handleJoin} style={{display:'flex', flexDirection:'column', gap:'0.75rem'}}>
          <input className="input" placeholder="Your first name"
            value={name} onChange={e => setName(e.target.value)}
            autoFocus style={{fontSize:'1.1rem', textAlign:'center'}} required />
          <button type="submit" className="btn btn-primary"
            style={{justifyContent:'center', padding:'0.75rem'}}>Join →</button>
        </form>
        <button style={styles.backLink} onClick={() => navigate('/')}>← Back</button>
      </div>
    </div>
  );

  // ── Waiting screen ────────────────────────────────────────
  if (!activePoll && !pollEnded) return (
    <div style={styles.center}>
      <div style={styles.waitCard} className="fade-up">
        <div style={styles.pulse} />
        <h2 style={{fontFamily:'var(--font-display)', fontSize:'1.5rem'}}>Hi, {name}! 👋</h2>
        <p style={{color:'var(--muted)'}}>Waiting for the teacher to start a poll…</p>
        <button style={styles.backLink}
          onClick={() => { leaveSession(name); navigate('/'); }}>Leave session</button>
      </div>
    </div>
  );

  // ── Poll ended screen ─────────────────────────────────────
  if (!activePoll && pollEnded) return (
    <div style={styles.center}>
      <div style={styles.waitCard} className="fade-up">
        <span style={{fontSize:'2.5rem'}}>✅</span>
        <h2 style={{fontFamily:'var(--font-display)'}}>Poll closed!</h2>
        <p style={{color:'var(--muted)', textAlign:'center'}}><em>{pollEnded.question}</em></p>
        {pollEnded.correctIndex != null && pollEnded.revealCorrect && (
          <p style={{color:'var(--success)', fontWeight:600}}>
            Correct answer: {pollEnded.options[pollEnded.correctIndex]}
          </p>
        )}
        <p style={{color:'var(--muted)', fontSize:'0.85rem'}}>Waiting for next poll…</p>
      </div>
    </div>
  );

  // ── Active poll ───────────────────────────────────────────
  return (
    <div style={styles.pollPage}>
      <header style={styles.pollHeader}>
        <span style={{fontFamily:'var(--font-display)', fontWeight:700}}>
          <span style={{color:'var(--accent)'}}>●</span> ClassPoll
        </span>
        <span style={{color:'var(--muted)', fontSize:'0.9rem'}}>
          Signed in as <strong>{name}</strong>
        </span>
      </header>

      <div style={styles.pollContent} className="fade-up">
        {/* Timer bar */}
        {!activePoll.ended && (
          <>
            <div style={styles.timerBar}>
              <div style={{...styles.timerFill,
                width:`${(timeLeft/activePoll.duration)*100}%`,
                background: timeLeft > activePoll.duration*0.4 ? 'var(--accent2)'
                  : timeLeft > activePoll.duration*0.15 ? '#f59e0b' : 'var(--accent)'}} />
            </div>
            <div style={styles.timerLabel}>{timeLeft}s remaining · {responseCount} responded</div>
          </>
        )}
        {activePoll.ended && (
          <div style={styles.stoppedBanner}>
            ⏰ Time's up — waiting for teacher
          </div>
        )}

        <h2 style={styles.questionText}>{activePoll.question}</h2>

        <div style={styles.optionGrid}>
          {activePoll.options.map((opt, i) => {
            const isSelected = myAnswer === i;
            const isCorrect  = activePoll.correctIndex === i;
            const votes = Object.values(activePoll.responses || {}).filter(v => v === i).length;
            const pct   = responseCount > 0 ? Math.round(votes / responseCount * 100) : 0;

            return (
              <button key={i}
                style={{
                  ...styles.optionBtn,
                  ...(isSelected ? styles.optionSelected : {}),
                  ...(showCorrect && isCorrect ? styles.optionCorrect : {}),
                  ...((pollStopped || alreadyAnswered) ? {cursor:'default'} : {}),
                }}
                onClick={() => handleSelect(i)}
                disabled={pollStopped || alreadyAnswered}>
                <span style={styles.optionLetter}>{String.fromCharCode(65+i)}</span>
                <span style={{flex:1, textAlign:'left'}}>{opt}</span>
                {showResults && <span style={styles.optionPct}>{pct}%</span>}
                {showResults && (
                  <div style={{...styles.optionBar, width:`${pct}%`,
                    background: showCorrect && isCorrect
                      ? 'rgba(22,163,74,0.15)' : 'rgba(37,99,235,0.1)'}} />
                )}
              </button>
            );
          })}
        </div>

        {/* Submit button */}
        {!alreadyAnswered && !submitted && !pollStopped && (
          <button className="btn btn-primary"
            style={{width:'100%', justifyContent:'center', padding:'0.85rem', fontSize:'1rem', marginTop:'0.5rem'}}
            onClick={handleSubmit} disabled={selected === null}>
            Submit Answer
          </button>
        )}

        {/* Status messages */}
        {(submitted || alreadyAnswered) && !pollStopped && (
          <div style={styles.submittedBadge}>✓ Answer submitted</div>
        )}
        {pollStopped && !alreadyAnswered && !submitted && (
          <div style={{...styles.submittedBadge, background:'#fef9c3', color:'#854d0e', borderColor:'#fef08a'}}>
            ⏰ Time's up — no answer recorded
          </div>
        )}
        {pollStopped && (alreadyAnswered || submitted) && (
          <div style={styles.submittedBadge}>✓ Answer submitted — waiting for teacher</div>
        )}
      </div>
    </div>
  );
}

const styles = {
  center: {
    minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center',
    padding:'1rem', background:'var(--paper)',
  },
  joinCard: {
    background:'white', borderRadius:16, border:'1px solid var(--border)',
    padding:'2.5rem 2rem', maxWidth:380, width:'100%', textAlign:'center',
    boxShadow:'var(--shadow)',
  },
  joinLogo: {
    fontFamily:'var(--font-display)', fontWeight:800, fontSize:'1.1rem',
    marginBottom:'1.5rem', display:'block',
  },
  backLink: {
    background:'none', border:'none', color:'var(--muted)', cursor:'pointer',
    marginTop:'1rem', fontSize:'0.85rem', display:'block', textAlign:'center',
  },
  waitCard: {
    display:'flex', flexDirection:'column', alignItems:'center', gap:'0.75rem',
    background:'white', borderRadius:16, border:'1px solid var(--border)',
    padding:'3rem 2rem', maxWidth:380, width:'100%', textAlign:'center',
    boxShadow:'var(--shadow)',
  },
  pulse: {
    width:16, height:16, borderRadius:'50%', background:'var(--accent2)',
    boxShadow:'0 0 0 0 rgba(37,99,235,0.4)',
    animation:'pulse-ring 1.5s ease-out infinite',
  },
  pollPage: { minHeight:'100vh', background:'var(--paper)', display:'flex', flexDirection:'column' },
  pollHeader: {
    padding:'1rem 1.5rem', borderBottom:'1px solid var(--border)',
    display:'flex', justifyContent:'space-between', alignItems:'center',
    background:'white',
  },
  pollContent: { maxWidth:620, margin:'0 auto', padding:'2rem 1rem', width:'100%' },
  timerBar: { height:6, background:'var(--cream)', borderRadius:3, overflow:'hidden', marginBottom:'0.4rem' },
  timerFill: { height:'100%', borderRadius:3, transition:'width 0.5s linear, background 0.5s' },
  timerLabel: { color:'var(--muted)', fontSize:'0.82rem', marginBottom:'1.5rem' },
  stoppedBanner: {
    background:'#fef9c3', color:'#854d0e', border:'1px solid #fef08a',
    borderRadius:8, padding:'0.6rem 1rem', fontSize:'0.9rem',
    marginBottom:'1.5rem', textAlign:'center',
  },
  questionText: {
    fontFamily:'var(--font-display)', fontSize:'clamp(1.2rem, 3vw, 1.6rem)',
    lineHeight:1.25, marginBottom:'1.25rem',
  },
  optionGrid: { display:'flex', flexDirection:'column', gap:'0.6rem' },
  optionBtn: {
    position:'relative', overflow:'hidden',
    display:'flex', alignItems:'center', gap:'0.75rem',
    padding:'0.9rem 1rem', borderRadius:10,
    border:'2px solid var(--border)', background:'white',
    cursor:'pointer', transition:'all 0.15s', textAlign:'left',
    fontFamily:'var(--font-body)', fontSize:'0.95rem',
  },
  optionSelected: { borderColor:'var(--accent2)', background:'#eff6ff' },
  optionCorrect:  { borderColor:'var(--success)', background:'#f0fdf4' },
  optionLetter: {
    width:28, height:28, borderRadius:'50%', background:'var(--cream)',
    display:'flex', alignItems:'center', justifyContent:'center',
    fontSize:'0.8rem', fontWeight:700, flexShrink:0,
  },
  optionPct: { color:'var(--muted)', fontSize:'0.82rem', fontWeight:600, flexShrink:0, zIndex:1 },
  optionBar: {
    position:'absolute', left:0, top:0, height:'100%',
    transition:'width 0.4s ease', zIndex:0, pointerEvents:'none',
  },
  submittedBadge: {
    marginTop:'1rem', padding:'0.75rem', borderRadius:8,
    background:'#f0fdf4', color:'var(--success)',
    textAlign:'center', fontWeight:500, fontSize:'0.9rem',
    border:'1px solid #bbf7d0',
  },
};
