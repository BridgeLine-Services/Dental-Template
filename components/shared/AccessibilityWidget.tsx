'use client'
import { useState, useEffect } from 'react'
import { Accessibility, Type, Contrast, Eye, X } from 'lucide-react'

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false)
  const [fontSize, setFontSize] = useState(100)
  const [highContrast, setHighContrast] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [dyslexiaFont, setDyslexiaFont] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('a11y-prefs')
    if (saved) { const p = JSON.parse(saved); setFontSize(p.fontSize ?? 100); setHighContrast(p.highContrast ?? false); setReducedMotion(p.reducedMotion ?? false); setDyslexiaFont(p.dyslexiaFont ?? false) }
  }, [])

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`
    document.documentElement.classList.toggle('high-contrast', highContrast)
    document.documentElement.classList.toggle('reduce-motion', reducedMotion)
    document.documentElement.classList.toggle('dyslexia-font', dyslexiaFont)
    localStorage.setItem('a11y-prefs', JSON.stringify({ fontSize, highContrast, reducedMotion, dyslexiaFont }))
  }, [fontSize, highContrast, reducedMotion, dyslexiaFont])

  return (
    <>
      <button onClick={() => setOpen(!open)} aria-label="Accessibility options" className="fixed bottom-4 right-4 z-50 w-12 h-12 bg-brand-600 text-white rounded-full shadow-lg hover:bg-brand-500 transition-colors flex items-center justify-center">
        <Accessibility className="w-6 h-6" />
      </button>
      {open && (
        <div className="fixed bottom-20 right-4 z-50 bg-white rounded-2xl shadow-xl border border-slate-200 p-6 w-72">
          <div className="flex justify-between items-center mb-4"><h3 className="font-bold text-slate-900">Accessibility</h3><button onClick={() => setOpen(false)} className="text-slate-400 hover:text-slate-600"><X className="w-5 h-5" /></button></div>
          <div className="space-y-4">
            <div><p className="text-sm font-medium text-slate-700 mb-2 flex items-center gap-1"><Type className="w-4 h-4" /> Font Size</p><div className="flex gap-2">{[80, 100, 120, 140].map(s => <button key={s} onClick={() => setFontSize(s)} className={`flex-1 py-2 rounded-lg text-sm font-medium ${fontSize === s ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>{s === 80 ? 'A-' : s === 140 ? 'A+' : 'A'}</button>)}</div></div>
            <label className="flex items-center justify-between p-2 rounded-lg bg-slate-50 cursor-pointer"><span className="text-sm text-slate-700 flex items-center gap-2"><Contrast className="w-4 h-4" /> High Contrast</span><input type="checkbox" checked={highContrast} onChange={e => setHighContrast(e.target.checked)} className="accent-brand-600 w-5 h-5" /></label>
            <label className="flex items-center justify-between p-2 rounded-lg bg-slate-50 cursor-pointer"><span className="text-sm text-slate-700">Reduced Motion</span><input type="checkbox" checked={reducedMotion} onChange={e => setReducedMotion(e.target.checked)} className="accent-brand-600 w-5 h-5" /></label>
            <label className="flex items-center justify-between p-2 rounded-lg bg-slate-50 cursor-pointer"><span className="text-sm text-slate-700 flex items-center gap-2"><Eye className="w-4 h-4" /> Dyslexia Font</span><input type="checkbox" checked={dyslexiaFont} onChange={e => setDyslexiaFont(e.target.checked)} className="accent-brand-600 w-5 h-5" /></label>
          </div>
        </div>
      )}
    </>
  )
}
