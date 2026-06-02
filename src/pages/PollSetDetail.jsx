import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { watchPollSet } from '../utils/firebaseOps';

export default function PollSetDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pollSet, setPollSet] = useState(null);

  useEffect(() => {
    if (sessionStorage.getItem('role') !== 'teacher') navigate('/');
    return watchPollSet(id, setPollSet);
  }, [id]);

  if (!pollSet) return (
    <div style={{padding:'2rem', textAlign:'center', color:'var(--muted)'}}>
      Loading…
    </div>
  );

  return (
    <div style={{padding:'2rem', maxWidth:720, margin:'0 auto'}}>
      <button style={{background:'none', border:'none', color:'var(--accent2)', cursor:'pointer', marginBottom:'1rem'}}
        onClick={() => navigate('/pollsets')}>← Poll Sets</button>
      <h2 style={{fontFamily:'var(--font-display)', fontSize:'1.5rem', marginBottom:'0.5rem'}}>
        {pollSet.name}
      </h2>
      <p style={{color:'var(--muted)', marginBottom:'2rem'}}>
        {(pollSet.polls || []).length} polls — detail editing coming in next update
      </p>
      {(pollSet.polls || []).map((poll, i) => (
        <div key={i} style={{background:'white', borderRadius:12, border:'1px solid var(--border)', padding:'1rem', marginBottom:'0.75rem'}}>
          <div style={{fontWeight:600}}>{i+1}. {poll.question}</div>
          <div style={{color:'var(--muted)', fontSize:'0.85rem', marginTop:'0.25rem'}}>
            {poll.options.length} options · {poll.duration}s
          </div>
        </div>
      ))}
    </div>
  );
}
