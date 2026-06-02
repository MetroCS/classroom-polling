import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { watchPollSet, updatePollSet, launchSet, startPoll } from '../utils/firebaseOps';
import { pollsToText, parsePollText } from '../utils/pollParser';

const RESULT_OPTIONS = [
  { value: 'on_submit',  label: 'After they submit' },
  { value: 'manual',     label: 'When I choose' },
  { value: 'never',      label: 'Never' },
];
const CORRECT_OPTIONS = [
  { value: 'with_results', label: 'With results' },
  { value: 'manual',       label: 'When I choose' },
  { value: 'never',        label: 'Never' },
];

export default function PollSetDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pollSet, setPollSet]       = useState(null);
  const [polls, setPolls]           = useState([]);
  const [selected, setSelected]     = useState(0);
  const [viewMode, setViewMode]     = useState('form');
  const [textValue, setTextValue]   = useState('');
  const [textDirty, setTextDirty]   = useState(false);
  const [parseErr, setParseErr]     = useState('');
  const [saved, setSaved]           = useState(false);
  const [editName, setEditName]     = useState(false);
  const [nameValue, setNameValue]   = useState('');

  useEffect(() => {
    if (sessionStorage.getItem('role') !== 'teacher') navigate('/');
    return watchPollSet(id, s => {
      if (!s) return;
      setPollSet(s);
      setPolls(s.polls || []);
      setNameValue(s.name || '');
    });
  }, [id]);

  useEffect(() => {
    if (viewMode === 'text' && pollSet) {
      setTextValue(pollsToText(polls, pollSet.defaults || {}));
      setTextDirty(false);
      setParseErr('');
    }
  }, [viewMode]);

  function effectivePoll(poll) {
    const d = pollSet?.defaults || {};
    return {
      ...poll,
      duration:      poll.duration      ?? d.duration      ?? 60,
      resultPolicy:  poll.resultPolicy  ?? d.resultPolicy  ?? 'on_submit',
      correctPolicy: poll.correctPolicy ?? d.correctPolicy ?? 'with_results',
    };
  }

  function updatePollField(field, value) {
    setPolls(polls.map((p, i) => i === selected ? { ...p, [field]: value } : p));
  }

  function updateOption(i, value) {
    const opts = effectivePoll(polls[selected]).options.map((o, j) => j === i ? value : o);
    updatePollField('options', opts);
  }

  function addOption() {
    const opts = [...(polls[selected].options || []), ''];
    if (opts.length <= 6) updatePollField('options', opts);
  }

  function removeOption(i) {
    const poll = polls[selected];
    const opts = poll.options.filter((_, j) => j !== i);
    if (opts.length < 2) return;
    let ci = poll.correctIndex;
    if (ci === i) ci = null;
    else if (ci > i) ci = ci - 1;
    setPolls(polls.map((p, idx) => idx === selected ? { ...p, options: opts, correctIndex: ci } : p));
  }

  function addPoll() {
    const next = [...polls, { question: '', options: ['', ''], correctIndex: null }];
    setPolls(next);
    setSelected(next.length - 1);
  }

  function deletePoll(i) {
    if (polls.length <= 1) return;
    const next = polls.filter((_, j) => j !== i);
    setPolls(next);
    setSelected(Math.min(i, next.length - 1));
  }

  function movePoll(i, dir) {
    const j = i + dir;
    if (j < 0 || j >= polls.length) return;
    const next = [...polls];
    [next[i], next[j]] = [next[j], next[i]];
    setPolls(next);
    setSelected(j);
  }

  function applyTextChanges() {
    setParseErr('');
    try {
      const parsed = parsePollText(textValue, pollSet.defaults || {});
      if (parsed.length === 0) { setParseErr('No polls found. Check your formatting.'); return; }
      setPolls(parsed);
      setTextDirty(false);
      setViewMode('form');
      setSelected(0);
    } catch(e) {
      setParseErr(e.message);
    }
  }

  async function handleSave() {
    await updatePollSet(id, { polls });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  async function handleSaveName() {
    await updatePollSet(id, { name: nameValue.trim() });
    setEditName(false);
  }

  async function handleLaunch() {
    if (!polls || polls.length === 0) {
      alert('No polls in this set.');
      return;
    }
    // Save any unsaved changes first
    await updatePollSet(id, { polls });
    const d = pollSet.defaults || {};
    const first = polls[0];
    await launchSet(pollSet.id, pollSet.name, polls.length);
    await startPoll({
      question:      first.question,
      options:       first.options,
      correctIndex:  first.correctIndex ?? null,
      duration:      first.duration      ?? d.duration      ?? 60,
      resultPolicy:  first.resultPolicy  ?? d.resultPolicy  ?? 'on_submit',
      correctPolicy: first.correctPolicy ?? d.correctPolicy ?? 'with_results',
    });
    navigate('/teacher');
  }

  if (!pollSet) return (
    <div style={{padding:'2rem', textAlign:'center', color:'var(--muted)'}}>Loading…</div>
  );

  const currentPoll = polls[selected] ? effectivePoll(polls[selected]) : null;
  const defaults = pollSet.defaults || {};

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <button style={styles.back} onClick={() => navigate('/pollsets')}>← Poll Sets</button>
        <div style={styles.titleArea}>
          {!editName ? (
            <span style={styles.title} onClick={() => setEditName(true)} title="Click to rename">
              {pollSet.name} ✎
            </span>
          ) : (
            <div style={{display:'flex', gap:'0.5rem', alignItems:'center'}}>
              <input className="input" value={nameValue}
                onChange={e => setNameValue(e.target.value)}
                style={{fontSize:'1rem', padding:'0.4rem 0.6rem'}}
                autoFocus
                onKeyDown={e => {
                  if (e.key === 'Enter') handleSaveName();
                  if (e.key === 'Escape') setEditName(false);
                }} />
              <button className="btn btn-primary"
                style={{padding:'0.4rem 0.8rem', fontSize:'0.85rem'}}
                onClick={handleSaveName}>Save</button>
              <button className="btn btn-secondary"
                style={{padding:'0.4rem 0.8rem', fontSize:'0.85rem'}}
                onClick={() => setEditName(false)}>Cancel</button>
            </div>
          )}
        </div>

        <div style={styles.viewToggle}>
          <button style={{...styles.toggleBtn, ...(viewMode==='form' ? styles.toggleActive : {})}}
            onClick={() => setViewMode('form')}>Form view</button>
          <button style={{...styles.toggleBtn, ...(viewMode==='text' ? styles.toggleActive : {})}}
            onClick={() => setViewMode('text')}>Text view</button>
        </div>

        <button className="btn btn-secondary" onClick={handleSave}
          style={{background: saved ? '#dcfce7' : undefined,
            borderColor: saved ? 'var(--success)' : undefined,
            color: saved ? 'var(--success)' : undefined}}>
          {saved ? '✓ Saved' : 'Save Changes'}
        </button>

        <button className="btn btn-primary" onClick={handleLaunch}>
          Launch →
        </button>
      </header>

      <div style={styles.body}>
        {/* ── Form view ── */}
        {viewMode === 'form' && (
          <>
            <aside style={styles.pollList}>
              <div style={styles.pollListHeader}>
                <span style={{fontSize:'0.8rem', color:'var(--muted)', fontWeight:600}}>
                  {polls.length} POLL{polls.length !== 1 ? 'S' : ''}
                </span>
                <button className="btn btn-ghost"
                  style={{fontSize:'0.78rem', padding:'0.3rem 0.6rem'}}
                  onClick={addPoll}>+ Add</button>
              </div>
              {polls.map((poll, i) => (
                <div key={i}
                  style={{...styles.pollItem, ...(selected===i ? styles.pollItemActive : {})}}
                  onClick={() => setSelected(i)}>
                  <span style={styles.pollItemNum}>{i+1}</span>
                  <span style={styles.pollItemQ}>
                    {poll.question || <em style={{color:'var(--muted)'}}>Untitled</em>}
                  </span>
                  <div style={styles.pollItemActions}>
                    <button style={styles.microBtn}
                      onClick={e => { e.stopPropagation(); movePoll(i, -1); }}
                      disabled={i === 0}>↑</button>
                    <button style={styles.microBtn}
                      onClick={e => { e.stopPropagation(); movePoll(i, 1); }}
                      disabled={i === polls.length - 1}>↓</button>
                    <button style={styles.microBtn}
                      onClick={e => { e.stopPropagation(); deletePoll(i); }}
                      disabled={polls.length <= 1}>✕</button>
                  </div>
                </div>
              ))}
            </aside>

            <main style={styles.editor}>
              {currentPoll && (
                <div style={styles.editorInner} className="fade-up">
                  <div>
                    <label className="label">Question</label>
                    <textarea className="input" rows={3}
                      placeholder="Enter your question…"
                      value={polls[selected].question}
                      onChange={e => updatePollField('question', e.target.value)}
                      style={{resize:'vertical', width:'100%'}} />
                  </div>

                  <div>
                    <label className="label">Answer Options</label>
                    <p style={styles.hint}>Click a letter circle to mark the correct answer (optional)</p>
                    <div style={{display:'flex', flexDirection:'column', gap:'0.5rem'}}>
                      {currentPoll.options.map((opt, i) => (
                        <div key={i} style={{display:'flex', gap:'0.5rem', alignItems:'center'}}>
                          <button type="button"
                            style={{...styles.correctBtn,
                              ...(polls[selected].correctIndex===i ? styles.correctBtnActive : {})}}
                            onClick={() => updatePollField('correctIndex',
                              polls[selected].correctIndex===i ? null : i)}>
                            {polls[selected].correctIndex===i ? '✓' : String.fromCharCode(65+i)}
                          </button>
                          <input className="input" style={{flex:1}}
                            placeholder={`Option ${String.fromCharCode(65+i)}`}
                            value={opt}
                            onChange={e => updateOption(i, e.target.value)} />
                          <button style={styles.removeBtn}
                            onClick={() => removeOption(i)}
                            disabled={currentPoll.options.length <= 2}>✕</button>
                        </div>
                      ))}
                    </div>
                    {currentPoll.options.length < 6 && (
                      <button className="btn btn-ghost"
                        style={{marginTop:'0.5rem', fontSize:'0.85rem'}}
                        onClick={addOption}>+ Add option</button>
                    )}
                  </div>

                  <div style={styles.overridesBox}>
                    <label className="label">
                      Per-poll overrides
                      <span style={{color:'var(--muted)', textTransform:'none', letterSpacing:0,
                        marginLeft:'0.5rem', fontWeight:400, fontSize:'0.78rem'}}>
                        (leave blank to use set defaults)
                      </span>
                    </label>
                    <div style={styles.overridesRow}>
                      <div>
                        <label className="label" style={{fontSize:'0.72rem'}}>Duration (s)</label>
                        <input className="input" type="number" min={10} max={300}
                          placeholder={`default: ${defaults.duration ?? 60}`}
                          value={polls[selected].duration ?? ''}
                          onChange={e => updatePollField('duration',
                            e.target.value === '' ? null : Number(e.target.value))}
                          style={{width:100}} />
                      </div>
                      <div>
                        <label className="label" style={{fontSize:'0.72rem'}}>Show results</label>
                        <select className="input"
                          value={polls[selected].resultPolicy ?? ''}
                          onChange={e => updatePollField('resultPolicy', e.target.value || null)}>
                          <option value="">Set default ({defaults.resultPolicy ?? 'on_submit'})</option>
                          {RESULT_OPTIONS.map(o =>
                            <option key={o.value} value={o.value}>{o.label}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="label" style={{fontSize:'0.72rem'}}>Reveal answer</label>
                        <select className="input"
                          value={polls[selected].correctPolicy ?? ''}
                          onChange={e => updatePollField('correctPolicy', e.target.value || null)}>
                          <option value="">Set default ({defaults.correctPolicy ?? 'with_results'})</option>
                          {CORRECT_OPTIONS.map(o =>
                            <option key={o.value} value={o.value}>{o.label}</option>)}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </main>
          </>
        )}

        {/* ── Text view ── */}
        {viewMode === 'text' && (
          <div style={styles.textView}>
            <p style={styles.textHint}>
              Edit all polls as plain text. Use <code>---</code> to separate polls.
              Per-poll overrides: <code>duration: 90</code>, <code>results: manual</code>, <code>correct: never</code>.
              Click <strong>Apply Changes</strong> to update the form view, then <strong>Save Changes</strong> to persist.
            </p>
            <textarea className="input"
              value={textValue}
              onChange={e => { setTextValue(e.target.value); setTextDirty(true); setParseErr(''); }}
              style={{
                fontFamily:'monospace', fontSize:'0.88rem',
                minHeight:'60vh', resize:'vertical', width:'100%',
              }} />
            {parseErr && <p style={styles.err}>{parseErr}</p>}
            <div style={{display:'flex', gap:'0.75rem', marginTop:'0.75rem'}}>
              <button className="btn btn-primary" onClick={applyTextChanges}
                disabled={!textDirty}>
                Apply Changes →
              </button>
              <button className="btn btn-secondary"
                onClick={() => { setViewMode('form'); setParseErr(''); }}>
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: { minHeight:'100vh', background:'var(--paper)', display:'flex', flexDirection:'column' },
  header: {
    padding:'1rem 1.5rem', borderBottom:'1px solid var(--border)',
    background:'white', display:'flex', alignItems:'center', gap:'0.75rem', flexWrap:'wrap',
  },
  back: { background:'none', border:'none', color:'var(--accent2)', cursor:'pointer', fontSize:'0.9rem' },
  titleArea: { flex:1 },
  title: {
    fontFamily:'var(--font-display)', fontWeight:700, fontSize:'1.15rem',
    cursor:'pointer', borderBottom:'1px dashed var(--border)',
  },
  viewToggle: {
    display:'flex', gap:'0.25rem', background:'var(--cream)',
    borderRadius:8, padding:'0.25rem',
  },
  toggleBtn: {
    background:'none', border:'none', padding:'0.35rem 0.85rem', borderRadius:6,
    cursor:'pointer', fontSize:'0.85rem', color:'var(--muted)',
  },
  toggleActive: { background:'white', color:'var(--ink)', fontWeight:600, boxShadow:'0 1px 3px rgba(0,0,0,0.1)' },
  body: { display:'flex', flex:1, overflow:'hidden' },
  pollList: {
    width:220, borderRight:'1px solid var(--border)', background:'white',
    display:'flex', flexDirection:'column', overflowY:'auto',
  },
  pollListHeader: {
    display:'flex', justifyContent:'space-between', alignItems:'center',
    padding:'0.75rem 1rem', borderBottom:'1px solid var(--border)',
  },
  pollItem: {
    display:'flex', alignItems:'flex-start', gap:'0.5rem',
    padding:'0.75rem 1rem', cursor:'pointer', borderBottom:'1px solid var(--cream)',
    transition:'background 0.1s',
  },
  pollItemActive: { background:'#eff6ff', borderLeft:'3px solid var(--accent2)' },
  pollItemNum: {
    fontFamily:'var(--font-display)', fontWeight:700, fontSize:'0.8rem',
    color:'var(--muted)', flexShrink:0, marginTop:'0.1rem',
  },
  pollItemQ: {
    fontSize:'0.82rem', flex:1, lineHeight:1.4,
    display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', overflow:'hidden',
  },
  pollItemActions: { display:'flex', flexDirection:'column', gap:'0.15rem', flexShrink:0 },
  microBtn: {
    background:'none', border:'none', cursor:'pointer', fontSize:'0.7rem',
    color:'var(--muted)', padding:'0.1rem 0.2rem', lineHeight:1,
  },
  editor: { flex:1, overflowY:'auto', padding:'1.5rem' },
  editorInner: { maxWidth:'100%', display:'flex', flexDirection:'column', gap:'1.25rem' },
  hint: { fontSize:'0.82rem', color:'var(--muted)', marginBottom:'0.5rem' },
  overridesBox: {
    background:'var(--cream)', borderRadius:10, padding:'1rem',
    display:'flex', flexDirection:'column', gap:'0.75rem',
  },
  overridesRow: { display:'flex', gap:'1rem', flexWrap:'wrap', alignItems:'flex-end' },
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
  textView: { flex:1, padding:'1.5rem', display:'flex', flexDirection:'column', gap:'0.75rem' },
  textHint: { fontSize:'0.85rem', color:'var(--muted)', lineHeight:1.6 },
  err: { color:'var(--accent)', fontSize:'0.85rem' },
};
