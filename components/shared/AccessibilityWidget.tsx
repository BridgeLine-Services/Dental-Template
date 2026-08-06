'use client'
import { useState, useEffect } from 'react'
import { Accessibility, Type, Contrast, Eye, X, Palette } from 'lucide-react'

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false)
  const [fontSize, setFontSize] = useState(100)
  const [highContrast, setHighContrast] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [dyslexiaFont, setDyslexiaFont] = useState(false)
  const [colorBlindMode, setColorBlindMode] = useState<'none' | 'protanopia' | 'deuteranopia' | 'tritanopia'>('none')

  useEffect(() => {
    const saved = localStorage.getItem('a11y-prefs')
    if (saved) {
      try {
        const p = JSON.parse(saved)
        setFontSize(p.fontSize ?? 100)
        setHighContrast(p.highContrast ?? false)
        setReducedMotion(p.reducedMotion ?? false)
        setDyslexiaFont(p.dyslexiaFont ?? false)
        setColorBlindMode(p.colorBlindMode ?? 'none')
      } catch { /* ignore */ }
    }
  }, [])

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`
    document.documentElement.classList.toggle('high-contrast', highContrast)
    document.documentElement.classList.toggle('reduce-motion', reducedMotion)
    document.documentElement.classList.toggle('dyslexia-font', dyslexiaFont)
    document.documentElement.setAttribute('data-color-blind', colorBlindMode)
    localStorage.setItem('a11y-prefs', JSON.stringify({ fontSize, highContrast, reducedMotion, dyslexiaFont, colorBlindMode }))
  }, [fontSize, highContrast, reducedMotion, dyslexiaFont, colorBlindMode])

  // Keyboard: Escape closes
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [open])

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Accessibility options"
        aria-expanded={open}
        aria-controls="a11y-panel"
        className="fixed bottom-4 right-4 z-50 w-12 h-12 bg-brand-600 text-white rounded-full shadow-lg hover:bg-brand-500 transition-colors flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-brand-200"
      >
        <Accessibility className="w-6 h-6" aria-hidden="true" />
      </button>
      {open && (
        <div
          id="a11y-panel"
          role="dialog"
          aria-label="Accessibility settings"
          className="fixed bottom-20 right-4 z-50 bg-white rounded-2xl shadow-xl border border-slate-200 p-6 w-72"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-slate-900">Accessibility</h3>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close accessibility panel"
              className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-slate-700 mb-2 flex items-center gap-1">
                <Type className="w-4 h-4" aria-hidden="true" /> Font Size
              </p>
              <div className="flex gap-2" role="group" aria-label="Font size options">
                {[
                  { val: 80, label: 'Small (A-)' },
                  { val: 100, label: 'Default (A)' },
                  { val: 120, label: 'Large (A+)' },
                  { val: 140, label: 'Extra Large (A++)' },
                ].map(s => (
                  <button
                    key={s.val}
                    onClick={() => setFontSize(s.val)}
                    aria-label={s.label}
                    aria-pressed={fontSize === s.val}
                    className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${fontSize === s.val ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                  >
                    {s.val === 80 ? 'A-' : s.val === 140 ? 'A+' : 'A'}
                  </button>
                ))}
              </div>
            </div>
            <label className="flex items-center justify-between p-2 rounded-lg bg-slate-50 cursor-pointer hover:bg-slate-100 transition-colors">
              <span className="text-sm text-slate-700 flex items-center gap-2">
                <Contrast className="w-4 h-4" aria-hidden="true" /> High Contrast
              </span>
              <input
                type="checkbox"
                checked={highContrast}
                onChange={e => setHighContrast(e.target.checked)}
                aria-label="Toggle high contrast mode"
                className="accent-brand-600 w-5 h-5"
              />
            </label>
            <label className="flex items-center justify-between p-2 rounded-lg bg-slate-50 cursor-pointer hover:bg-slate-100 transition-colors">
              <span className="text-sm text-slate-700">Reduced Motion</span>
              <input
                type="checkbox"
                checked={reducedMotion}
                onChange={e => setReducedMotion(e.target.checked)}
                aria-label="Toggle reduced motion"
                className="accent-brand-600 w-5 h-5"
              />
            </label>
            <label className="flex items-center justify-between p-2 rounded-lg bg-slate-50 cursor-pointer hover:bg-slate-100 transition-colors">
              <span className="text-sm text-slate-700 flex items-center gap-2">
                <Eye className="w-4 h-4" aria-hidden="true" /> Dyslexia Font
              </span>
              <input
                type="checkbox"
                checked={dyslexiaFont}
                onChange={e => setDyslexiaFont(e.target.checked)}
                aria-label="Toggle dyslexia-friendly font"
                className="accent-brand-600 w-5 h-5"
              />
            </label>
            <div>
              <p className="text-sm font-medium text-slate-700 mb-2 flex items-center gap-1">
                <Palette className="w-4 h-4" aria-hidden="true" /> Color Blind Mode
              </p>
              <select
                value={colorBlindMode}
                onChange={e => setColorBlindMode(e.target.value as 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia')}
                aria-label="Select color blind filter"
                className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm bg-white focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none"
              >
                <option value="none">None</option>
                <option value="protanopia">Protanopia (red-blind)</option>
                <option value="deuteranopia">Deuteranopia (green-blind)</option>
                <option value="tritanopia">Tritanopia (blue-blind)</option>
              </select>
            </div>
            <button
              onClick={() => {
                setFontSize(100)
                setHighContrast(false)
                setReducedMotion(false)
                setDyslexiaFont(false)
                setColorBlindMode('none')
              }}
              className="w-full text-sm text-slate-500 hover:text-brand-600 py-2 border-t border-slate-100"
              aria-label="Reset all accessibility settings"
            >
              Reset to Default
            </button>
          </div>
        </div>
      )}
    </>
  )
}
