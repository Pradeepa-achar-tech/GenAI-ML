import { useEffect, useMemo, useRef, useState } from 'react'
import { Search, X } from 'lucide-react'
import { flattenTopics } from '../data/curriculum.js'

export default function SearchBar({ onJump }) {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const wrapRef = useRef(null)

  const allTopics = useMemo(() => flattenTopics(), [])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    return allTopics
      .filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.sectionTitle.toLowerCase().includes(q) ||
          t.moduleTitle.toLowerCase().includes(q)
      )
      .slice(0, 12)
  }, [query, allTopics])

  useEffect(() => {
    const onClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  const highlight = (text) => {
    const q = query.trim()
    if (!q) return text
    const idx = text.toLowerCase().indexOf(q.toLowerCase())
    if (idx === -1) return text
    return (
      <>
        {text.slice(0, idx)}
        <mark className="bg-accent-500/30 text-accent-100 rounded px-0.5">
          {text.slice(idx, idx + q.length)}
        </mark>
        {text.slice(idx + q.length)}
      </>
    )
  }

  return (
    <div ref={wrapRef} className="relative w-full max-w-xl">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
        <input
          type="text"
          value={query}
          placeholder="Search topics across all modules…"
          onChange={(e) => {
            setQuery(e.target.value)
            setOpen(true)
          }}
          onFocus={() => setOpen(true)}
          className="w-full bg-slate-900 border border-slate-800 focus:border-accent-500 outline-none rounded-lg pl-9 pr-9 py-2 text-sm text-slate-100 placeholder-slate-500 transition-colors"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('')
              setOpen(false)
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-slate-500 hover:text-slate-300"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {open && query && (
        <div className="absolute z-30 mt-2 w-full bg-slate-900 border border-slate-800 rounded-lg shadow-xl max-h-80 overflow-y-auto animate-slide-down">
          {results.length === 0 ? (
            <div className="px-4 py-6 text-sm text-slate-500 text-center">
              No matching topics.
            </div>
          ) : (
            <ul>
              {results.map((r) => (
                <li key={r.id}>
                  <button
                    onClick={() => {
                      onJump?.(r.moduleId, r.id)
                      setOpen(false)
                    }}
                    className="w-full text-left px-4 py-2.5 hover:bg-slate-800 transition-colors border-b border-slate-800/60 last:border-0"
                  >
                    <div className="text-sm text-slate-100">{highlight(r.title)}</div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {r.moduleTitle} · {r.sectionTitle}
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}
