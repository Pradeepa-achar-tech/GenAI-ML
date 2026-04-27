import { useState } from 'react'
import {
  Check,
  ChevronDown,
  Code2,
  Lightbulb,
  AlertTriangle,
  Sparkles,
  GraduationCap,
  Compass,
  Target,
} from 'lucide-react'

// Render a string with **bold** markdown converted to <strong>
// and `inline code` converted to monospace span. Preserves line breaks.
function FormattedText({ text }) {
  if (!text) return null
  // Normalize: split by line breaks first, then within each line handle bold + code
  const lines = String(text).split('\n')
  return (
    <>
      {lines.map((line, li) => (
        <span key={li} className="block">
          {renderInline(line)}
        </span>
      ))}
    </>
  )
}

function renderInline(line) {
  // Tokenize on **bold** and `code`
  const out = []
  let i = 0
  let key = 0
  while (i < line.length) {
    // Bold
    if (line[i] === '*' && line[i + 1] === '*') {
      const end = line.indexOf('**', i + 2)
      if (end !== -1) {
        out.push(
          <strong key={key++} className="text-white">
            {line.slice(i + 2, end)}
          </strong>
        )
        i = end + 2
        continue
      }
    }
    // Inline code
    if (line[i] === '`') {
      const end = line.indexOf('`', i + 1)
      if (end !== -1) {
        out.push(
          <code
            key={key++}
            className="px-1 py-0.5 rounded bg-slate-800 text-accent-300 text-[0.85em] font-mono"
          >
            {line.slice(i + 1, end)}
          </code>
        )
        i = end + 1
        continue
      }
    }
    // Plain run — find next special char
    let j = i + 1
    while (j < line.length && line[j] !== '*' && line[j] !== '`') j++
    out.push(<span key={key++}>{line.slice(i, j)}</span>)
    i = j
  }
  return out
}

function Section({ icon: Icon, label, color = 'slate', children }) {
  const ring = {
    slate: 'border-slate-800',
    accent: 'border-accent-500/30',
    blue: 'border-sky-500/30',
    rose: 'border-rose-500/30',
    emerald: 'border-emerald-500/30',
    amber: 'border-amber-500/30',
  }[color]
  const text = {
    slate: 'text-slate-400',
    accent: 'text-accent-400',
    blue: 'text-sky-400',
    rose: 'text-rose-400',
    emerald: 'text-emerald-400',
    amber: 'text-amber-400',
  }[color]
  return (
    <div className={`border-l-2 pl-4 ${ring}`}>
      <div className={`flex items-center gap-1.5 mb-2 text-[11px] uppercase tracking-wider font-semibold ${text}`}>
        <Icon className="w-3.5 h-3.5" />
        {label}
      </div>
      <div className="text-sm text-slate-300 leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  )
}

export default function TopicItem({ topic, done, onToggle }) {
  const [open, setOpen] = useState(false)
  const hasTutorial =
    Boolean(topic.explain) ||
    Boolean(topic.analogy) ||
    Boolean(topic.theory) ||
    Boolean(topic.whyItMatters) ||
    (topic.steps && topic.steps.length) ||
    Boolean(topic.code) ||
    (topic.pitfalls && topic.pitfalls.length) ||
    Boolean(topic.tryIt) ||
    Boolean(topic.takeaway)

  return (
    <div
      className={`group rounded-lg transition-colors ${
        done ? 'bg-accent-500/10' : 'hover:bg-slate-800/50'
      }`}
    >
      <div className="flex items-start gap-2 px-2 py-2">
        <button
          onClick={() => onToggle(topic.id)}
          aria-label={done ? 'Mark incomplete' : 'Mark complete'}
          className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded border flex items-center justify-center transition-colors ${
            done
              ? 'bg-accent-500 border-accent-500 hover:bg-accent-600'
              : 'bg-slate-900 border-slate-600 hover:border-accent-400'
          }`}
        >
          {done && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
        </button>

        <button
          onClick={() => hasTutorial && setOpen((v) => !v)}
          disabled={!hasTutorial}
          className="flex-1 min-w-0 text-left flex items-start gap-2"
        >
          <span
            className={`text-sm leading-relaxed flex-1 ${
              done
                ? 'text-slate-200 line-through decoration-accent-500/40'
                : 'text-slate-200'
            }`}
          >
            {topic.title}
          </span>
          {hasTutorial && (
            <span className="flex-shrink-0 flex items-center gap-1 text-[11px] text-slate-500 mt-0.5">
              <span className="hidden sm:inline">{open ? 'Hide' : 'Tutorial'}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  open ? 'rotate-180 text-accent-400' : 'group-hover:text-slate-300'
                }`}
              />
            </span>
          )}
        </button>
      </div>

      {open && hasTutorial && (
        <div className="pl-9 pr-3 pb-5 -mt-1 animate-slide-down">
          <div className="space-y-5">
            {/* Quick overview (always shown if present) */}
            {topic.explain && (
              <div className="border-l-2 border-accent-500/40 pl-4">
                <p className="text-sm text-slate-300 leading-relaxed">
                  <FormattedText text={topic.explain} />
                </p>
              </div>
            )}

            {/* Real-world analogy / story */}
            {topic.analogy && (
              <Section icon={Compass} label="Think of it like…" color="emerald">
                <FormattedText text={topic.analogy} />
              </Section>
            )}

            {/* Detailed theory */}
            {topic.theory && (
              <Section icon={GraduationCap} label="The full story" color="blue">
                <FormattedText text={topic.theory} />
              </Section>
            )}

            {/* Why it matters */}
            {topic.whyItMatters && (
              <Section icon={Sparkles} label="Why this matters" color="accent">
                <FormattedText text={topic.whyItMatters} />
              </Section>
            )}

            {/* Step-by-step */}
            {topic.steps && topic.steps.length > 0 && (
              <Section icon={Target} label="Step-by-step" color="slate">
                <ol className="space-y-2">
                  {topic.steps.map((step, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent-500/15 text-accent-300 text-[11px] font-semibold flex items-center justify-center mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-sm text-slate-300 leading-relaxed">
                        <FormattedText text={step} />
                      </span>
                    </li>
                  ))}
                </ol>
              </Section>
            )}

            {/* Code example */}
            {topic.code && (
              <div className="border-l-2 border-slate-800 pl-4">
                <div className="flex items-center gap-1.5 mb-2 text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                  <Code2 className="w-3.5 h-3.5" />
                  Example
                </div>
                <pre className="bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs text-slate-300 overflow-x-auto font-mono leading-relaxed">
                  <code>{topic.code}</code>
                </pre>
              </div>
            )}

            {/* Common mistakes / pitfalls */}
            {topic.pitfalls && topic.pitfalls.length > 0 && (
              <Section icon={AlertTriangle} label="Watch out for" color="rose">
                <ul className="space-y-1.5">
                  {topic.pitfalls.map((p, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-rose-400 flex-shrink-0">•</span>
                      <span><FormattedText text={p} /></span>
                    </li>
                  ))}
                </ul>
              </Section>
            )}

            {/* Try it yourself */}
            {topic.tryIt && (
              <Section icon={Target} label="Try it yourself" color="amber">
                <FormattedText text={topic.tryIt} />
              </Section>
            )}

            {/* Key takeaway */}
            {topic.takeaway && (
              <div className="flex gap-2 items-start bg-accent-500/10 border border-accent-500/20 rounded-lg p-3">
                <Lightbulb className="w-4 h-4 text-accent-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-accent-400 font-semibold mb-0.5">
                    Key takeaway
                  </div>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    <FormattedText text={topic.takeaway} />
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
