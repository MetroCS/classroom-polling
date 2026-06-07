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
import { watchPollSets, createPollSet, deletePollSet } from '../utils/firebaseOps';
import { parsePollText } from '../utils/pollParser';

const DEFAULTS = {
  duration: 60,
  resultPolicy: 'on_submit',
  correctPolicy: 'with_results',
};

const RESULT_OPTIONS = [
  { value: 'on_submit', label: 'After they submit' },
  { value: 'manual',    label: 'When I choose' },
  { value: 'never',     label: 'Never' },
];
const CORRECT_OPTIONS = [
  { value: 'with_results', label: 'With results' },
  { value: 'manual',       label: 'When I choose' },
  { value: 'never',        label: 'Never' },
];

export default function PollSets() {
  const navigate = useNavigate();
  const [sets, setSets]               = useState([]);
  const [view, setView]               = useState('list');
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [saving, setSaving]           = useState(false);
  const [saveErr, setSaveErr]         = useState('');

  // Shared create form state
  const [name, setName]               = useState('');
  const [defaults, setDefaults]       = useState(DEFAULTS);
  const [createMode, setCreateMode]   = useState('text');

  // Text mode state
  const [text, setText]               = useState('');
  const [preview, setPreview]         = useState(null);
  const [parseErr, setParseErr]       = useState('');

  useEffect(() => {
    if (localStorage.getItem('role') !== 'teacher') navigate('/');
    return watchPollSets(setSets);
  }, []);

  function resetForm() {
    setName(''); setDefaults(DEFAULTS); setCreateMode('text');
    setText(''); setPreview(null); setParseErr(''); setSaveErr('');
  }

  function handlePreview() {
    setParseErr('');
    try {
      const polls = parsePollText(text, defaults);
      if (polls.length === 0) {
        setParseErr('No polls found. Check your formatting.');
        return;
      }
      setPreview(polls);
    } catch(e) {
      setParseErr(e.message);
    }
  }

  async function handleSaveText() {
    setSaveErr('');
    if (!name.trim()) { setSaveErr('Please enter a set name.'); return; }
    if (!preview || preview.length === 0) { setSaveErr('Preview your polls first.'); return; }
    setSaving(true);
    try {
      const newId = await createPollSet({ name: name.trim(), defaults, polls: preview });
      resetForm();
      setView('list');
      navigate(`/pollsets/${newId}`);
    } catch(e) {
      setSaveErr('Error saving: ' + e.message);
    } finally {
      setSaving(false);
    }
  }

  async function handleSaveManual() {
    setSaveErr('');
    if (!name.trim()) { setSaveErr('Please enter a set name.'); return; }
    setSaving(true);
    try {
      const newId = await createPollSet({ name: name.trim(), defaults, polls: [] });
      resetForm();
      setView('list');
      navigate(`/pollsets/${newId}`);
    } catch(e) {
      setSaveErr('Error saving: ' + e.message);
    } finally {
      setSaving(false);
    }
  }

  function handleDelete(id) {
    deletePollSet(id);
    setConfirmDelete(null);
  }

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <button style={styles.back} onClick={() => navigate('/teacher')}>← Dashboard</button>
        <span style={styles.title}>Poll Sets</span>
        {view === 'list' && (
          <button className="btn btn-primary" onClick={() => setView('create')}>
            + New Set
          </button>
        )}
        {view === 'create' && (
          <button className="btn btn-secondary"
            onClick={() => { setView('list'); resetForm(); }}>
            Cancel
          </button>
        )}
      </header>

      <main style={styles.main}>

        {/* ── List view ── */}
        {view === 'list' && (
          <div className="fade-up">
            {sets.length === 0 && (
              <div style={styles.empty}>
                <span style={{fontSize:'2.5rem'}}>📚</span>
                <p>No poll sets yet.</p>
                <button className="btn btn-primary" onClick={() => setView('create')}>
                  Create your first set →
                </button>
              </div>
            )}
            {sets.map(set => {
              const isConfirming = confirmDelete === set.id;
              return (
                <div key={set.id} style={styles.setCard}>
                  <button style={styles.setCardBtn}
                    onClick={() => navigate(`/pollsets/${set.id}`)}>
                    <div>
                      <div style={styles.setName}>{set.name}</div>
                      <div style={styles.setMeta}>
                        {(set.polls || []).length} poll{(set.polls||[]).length !== 1 ? 's' : ''} ·
                        Created {new Date(set.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                    <span style={{color:'var(--muted)'}}>→</span>
                  </button>
                  <div style={styles.setActions}>
                    {!isConfirming ? (
                      <button style={styles.deleteBtn}
                        onClick={() => setConfirmDelete(set.id)}>🗑</button>
                    ) : (
                      <div style={styles.confirmRow}>
                        <span style={styles.confirmText}>Delete?</span>
                        <button className="btn btn-primary"
                          style={{fontSize:'0.78rem', padding:'0.3rem 0.7rem', background:'#dc2626'}}
                          onClick={() => handleDelete(set.id)}>Yes</button>
                        <button className="btn btn-secondary"
                          style={{fontSize:'0.78rem', padding:'0.3rem 0.7rem'}}
                          onClick={() => setConfirmDelete(null)}>Cancel</button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ── Create view ── */}
        {view === 'create' && (
          <div className="fade-up" style={styles.createForm}>
            <h2 style={styles.sectionTitle}>New Poll Set</h2>

            {/* Name — always visible */}
            <div>
              <label className="label">Set Name</label>
              <input className="input" placeholder="e.g. Chapter 5 Review"
                value={name} onChange={e => setName(e.target.value)} autoFocus />
            </div>

            {/* Set-level defaults */}
            <div style={styles.defaultsBox}>
              <label className="label">Default settings for all polls in this set</label>
              <div style={styles.defaultsRow}>
                <div>
                  <label className="label" style={{fontSize:'0.72rem'}}>Duration (seconds)</label>
                  <input className="input" type="number" min={10} max={300}
                    value={defaults.duration}
                    onChange={e => setDefaults({...defaults, duration: Number(e.target.value)})}
                    style={{width:100}} />
                </div>
                <div style={{flex:1}}>
                  <label className="label" style={{fontSize:'0.72rem'}}>Show results to students</label>
                  <select className="input" value={defaults.resultPolicy}
                    onChange={e => setDefaults({...defaults, resultPolicy: e.target.value})}>
                    {RESULT_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                  </select>
                </div>
                <div style={{flex:1}}>
                  <label className="label" style={{fontSize:'0.72rem'}}>Reveal correct answer</label>
                  <select className="input" value={defaults.correctPolicy}
                    onChange={e => setDefaults({...defaults, correctPolicy: e.target.value})}>
                    {CORRECT_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                  </select>
                </div>
              </div>
            </div>

            {/* Mode tabs */}
            <div>
              <div style={styles.modeTabs}>
                <button
                  style={{...styles.modeTab, ...(createMode==='text' ? styles.modeTabActive : {})}}
                  onClick={() => setCreateMode('text')}>
                  Paste text
                </button>
                <button
                  style={{...styles.modeTab, ...(createMode==='manual' ? styles.modeTabActive : {})}}
                  onClick={() => setCreateMode('manual')}>
                  Build manually
                </button>
              </div>

              {/* Text mode */}
              {createMode === 'text' && (
                <div style={{display:'flex', flexDirection:'column', gap:'0.75rem'}}>
                  <textarea className="input" rows={14}
                    placeholder={`Q: What is photosynthesis?\n\n* A. Converts sunlight into energy\n  B. Breaks down glucose\n  C. Absorbs water through roots\n  D. Releases CO2\n---\nQ: Which organelle contains chlorophyll?\nduration: 90\n\n  A. Mitochondria\n* B. Chloroplast\n  C. Nucleus\n  D. Vacuole`}
                    value={text}
                    onChange={e => { setText(e.target.value); setPreview(null); setParseErr(''); }}
                    style={{
                      fontFamily:'monospace', fontSize:'0.85rem',
                      resize:'vertical', minHeight:'320px', width:'100%',
                    }} />
                  <div style={{display:'flex', gap:'0.75rem', alignItems:'center'}}>
                    <button className="btn btn-secondary" onClick={handlePreview}>
                      Preview →
                    </button>
                    {parseErr && <span style={styles.err}>{parseErr}</span>}
                  </div>
                </div>
              )}

              {/* Manual mode */}
              {createMode === 'manual' && (
                <div style={styles.manualBox}>
                  <p>The set will be created empty. You can add and edit polls one by one in the set detail view.</p>
                  {saveErr && <p style={styles.err}>{saveErr}</p>}
                  <button className="btn btn-primary"
                    style={{marginTop:'0.5rem'}}
                    onClick={handleSaveManual}
                    disabled={saving}>
                    {saving ? 'Creating…' : 'Create empty set →'}
                  </button>
                </div>
              )}
            </div>

            {/* Preview */}
            {createMode === 'text' && preview && (
              <div style={styles.previewBox}>
                <label className="label">
                  Preview — {preview.length} poll{preview.length !== 1 ? 's' : ''} found
                </label>
                {preview.map((poll, i) => (
                  <div key={i} style={styles.previewPoll}>
                    <div style={styles.previewQ}>{i+1}. {poll.question}</div>
                    <div style={styles.previewOptions}>
                      {poll.options.map((opt, j) => (
                        <div key={j} style={{
                          ...styles.previewOpt,
                          ...(poll.correctIndex === j ? styles.previewOptCorrect : {})
                        }}>
                          {poll.correctIndex === j ? '✓' : String.fromCharCode(65+j)}. {opt}
                        </div>
                      ))}
                    </div>
                    <div style={styles.previewMeta}>
                      {poll.duration}s ·
                      Results: {RESULT_OPTIONS.find(o => o.value===poll.resultPolicy)?.label} ·
                      Answer: {CORRECT_OPTIONS.find(o => o.value===poll.correctPolicy)?.label}
                    </div>
                  </div>
                ))}
                {saveErr && <p style={styles.err}>{saveErr}</p>}
                <button className="btn btn-primary"
                  onClick={handleSaveText}
                  disabled={saving}>
                  {saving ? 'Saving…' : 'Save Set →'}
                </button>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

const styles = {
  page: { minHeight:'100vh', background:'var(--paper)' },
  header: {
    padding:'1rem 1.5rem', borderBottom:'1px solid var(--border)',
    background:'white', display:'flex', alignItems:'center', gap:'1rem',
  },
  back: { background:'none', border:'none', color:'var(--accent2)', cursor:'pointer', fontSize:'0.9rem' },
  title: { fontFamily:'var(--font-display)', fontWeight:700, fontSize:'1.2rem', flex:1 },
  main: { maxWidth:960, margin:'0 auto', padding:'1.5rem 1rem' },
  empty: {
    textAlign:'center', padding:'4rem 2rem', color:'var(--muted)',
    display:'flex', flexDirection:'column', alignItems:'center', gap:'1rem',
  },
  setCard: {
    background:'white', borderRadius:12, border:'1px solid var(--border)',
    marginBottom:'0.75rem', display:'flex', alignItems:'center', overflow:'hidden',
  },
  setCardBtn: {
    display:'flex', alignItems:'center', justifyContent:'space-between',
    flex:1, padding:'1rem', background:'none', border:'none',
    cursor:'pointer', textAlign:'left',
  },
  setName: { fontFamily:'var(--font-display)', fontWeight:600, fontSize:'1rem' },
  setMeta: { color:'var(--muted)', fontSize:'0.8rem', marginTop:'0.2rem' },
  setActions: { padding:'0 0.75rem', display:'flex', alignItems:'center', gap:'0.4rem' },
  deleteBtn: {
    background:'none', border:'none', cursor:'pointer',
    fontSize:'1.1rem', padding:'0.25rem 0.4rem', borderRadius:6, opacity:0.5,
  },
  confirmRow: { display:'flex', alignItems:'center', gap:'0.4rem' },
  confirmText: { fontSize:'0.82rem', color:'var(--muted)', whiteSpace:'nowrap' },
  createForm: { display:'flex', flexDirection:'column', gap:'1.25rem' },
  sectionTitle: { fontSize:'1.4rem' },
  defaultsBox: {
    background:'white', borderRadius:12, border:'1px solid var(--border)',
    padding:'1rem', display:'flex', flexDirection:'column', gap:'0.75rem',
  },
  defaultsRow: { display:'flex', gap:'0.75rem', flexWrap:'wrap', alignItems:'flex-end' },
  modeTabs: {
    display:'flex', gap:'0.25rem', background:'var(--cream)',
    borderRadius:8, padding:'0.25rem', marginBottom:'0.75rem', width:'fit-content',
  },
  modeTab: {
    background:'none', border:'none', padding:'0.35rem 0.85rem',
    borderRadius:6, cursor:'pointer', fontSize:'0.9rem', color:'var(--muted)',
  },
  modeTabActive: {
    background:'white', color:'var(--ink)', fontWeight:600,
    boxShadow:'0 1px 3px rgba(0,0,0,0.1)',
  },
  manualBox: {
    background:'white', borderRadius:12, border:'1px solid var(--border)',
    padding:'1.25rem', color:'var(--muted)', fontSize:'0.9rem',
    display:'flex', flexDirection:'column', gap:'0.5rem',
  },
  previewBox: {
    background:'white', borderRadius:12, border:'1px solid var(--border)',
    padding:'1.25rem', display:'flex', flexDirection:'column', gap:'0.75rem',
  },
  previewPoll: {
    borderBottom:'1px solid var(--border)', paddingBottom:'0.75rem',
    display:'flex', flexDirection:'column', gap:'0.4rem',
  },
  previewQ: { fontWeight:600, fontSize:'0.95rem' },
  previewOptions: { display:'flex', flexDirection:'column', gap:'0.2rem', paddingLeft:'0.75rem' },
  previewOpt: { fontSize:'0.88rem', color:'var(--muted)' },
  previewOptCorrect: { color:'var(--success)', fontWeight:600 },
  previewMeta: { fontSize:'0.75rem', color:'var(--muted)', marginTop:'0.25rem' },
  err: { color:'var(--accent)', fontSize:'0.85rem' },
};
