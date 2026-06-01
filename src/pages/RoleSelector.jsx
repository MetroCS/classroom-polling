import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TEACHER_PASSWORD = 'teach123';

export default function RoleSelector() {
  const navigate = useNavigate();
  const [showTeacherLogin, setShowTeacherLogin] = useState(false);
  const [pw, setPw] = useState('');
  const [err, setErr] = useState('');

  function handleTeacherSubmit(e) {
    e.preventDefault();
    if (pw === TEACHER_PASSWORD) {
      sessionStorage.setItem('role', 'teacher');
      navigate('/teacher');
    } else {
      setErr('Incorrect password.');
      setPw('');
    }
  }

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <div style={styles.logoMark}>●</div>
        <span style={styles.logoText}>ClassPoll</span>
      </div>
      <div style={styles.hero} className="fade-up">
        <h1 style={styles.title}>Live Classroom<br/>Polling</h1>
        <p style={styles.sub}>Real-time polls, instant results, zero setup for students.</p>
      </div>
      <div style={styles.cards} className="fade-up">
        <button style={styles.roleCard} onClick={() => navigate('/student')}>
          <span style={styles.roleIcon}>🎓</span>
          <span style={styles.roleLabel}>I'm a Student</span>
          <span style={styles.roleHint}>Join and answer polls</span>
        </button>
        {!showTeacherLogin ? (
          <button style={styles.roleCard} onClick={() => setShowTeacherLogin(true)}>
            <span style={styles.roleIcon}>📋</span>
            <span style={styles.roleLabel}>I'm the Teacher</span>
            <span style={styles.roleHint}>Create and manage polls</span>
          </button>
        ) : (
          <form style={{...styles.roleCard, gap:'0.75rem'}} onSubmit={handleTeacherSubmit}>
            <span style={styles.roleIcon}>🔑</span>
            <span style={styles.roleLabel}>Teacher Password</span>
            <input
              className="input"
              type="password"
              placeholder="Enter password"
              value={pw}
              onChange={e => { setPw(e.target.value); setErr(''); }}
              autoFocus
              style={{textAlign:'center'}}
            />
            {err && <span style={styles.err}>{err}</span>}
            <button type="submit" className="btn btn-primary"
              style={{width:'100%', justifyContent:'center'}}>
              Enter
            </button>
            <button type="button" className="btn btn-secondary"
              style={{width:'100%', justifyContent:'center', fontSize:'0.85rem'}}
              onClick={() => { setShowTeacherLogin(false); setErr(''); setPw(''); }}>
              Cancel
            </button>
          </form>
        )}
      </div>
      <a href="/classroom-polling/history" style={styles.historyLink}>
        View Poll History →
      </a>
    </div>
  );
}

const styles = {
  page: {
    minHeight: '100vh', display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center',
    padding: '2rem 1rem', gap: '2rem', background: 'var(--paper)',
  },
  header: {
    position: 'fixed', top: 0, left: 0, right: 0,
    padding: '1rem 2rem', display: 'flex', alignItems: 'center', gap: '0.5rem',
    borderBottom: '1px solid var(--border)', background: 'var(--paper)',
  },
  logoMark: { color: 'var(--accent)', fontSize: '1.2rem' },
  logoText: { fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem' },
  hero: { textAlign: 'center' },
  title: { fontSize: 'clamp(2.2rem, 6vw, 3.5rem)', lineHeight: 1.1, marginBottom: '0.75rem' },
  sub: { color: 'var(--muted)', fontSize: '1.05rem', maxWidth: '30ch', margin: '0 auto' },
  cards: { display: 'flex', gap: '1.25rem', flexWrap: 'wrap', justifyContent: 'center' },
  roleCard: {
    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
    padding: '2rem 2.5rem', borderRadius: '16px', border: '2px solid var(--border)',
    cursor: 'pointer', transition: 'all 0.2s', background: 'white',
    minWidth: '200px', boxShadow: 'var(--shadow)',
  },
  roleIcon: { fontSize: '2.5rem' },
  roleLabel: { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.15rem' },
  roleHint: { fontSize: '0.82rem', color: 'var(--muted)' },
  err: { color: 'var(--accent)', fontSize: '0.85rem' },
  historyLink: { color: 'var(--muted)', fontSize: '0.85rem', textDecoration: 'underline', cursor: 'pointer' },
};
