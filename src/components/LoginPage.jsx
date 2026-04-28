import { useState } from 'react'
import {
  BookOpen,
  Brain,
  GraduationCap,
  Trophy,
  BarChart3,
  Zap,
  Sparkles,
  ArrowRight,
} from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

const features = [
  {
    icon: BookOpen,
    title: '267 Topics',
    desc: 'Python to production LLMs, structured step-by-step',
    color: 'text-accent-400 bg-accent-500/10 border-accent-500/20',
  },
  {
    icon: Brain,
    title: 'AI-First Curriculum',
    desc: 'GenAI, ML, NLP, Computer Vision & Agents',
    color: 'text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-500/20',
  },
  {
    icon: Trophy,
    title: 'Quizzes & Projects',
    desc: 'Test understanding with real-world challenges',
    color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  },
  {
    icon: BarChart3,
    title: 'Cloud Progress',
    desc: 'Synced across all your devices automatically',
    color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
  },
  {
    icon: Zap,
    title: 'Fast & Free',
    desc: 'No paywalls — learn at your own pace',
    color: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
  },
]

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 18 18" aria-hidden>
      <path fill="#4285F4" d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18z" />
      <path fill="#34A853" d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17z" />
      <path fill="#FBBC05" d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18z" />
      <path fill="#EA4335" d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3z" />
    </svg>
  )
}

export default function LoginPage() {
  const { signInWithGoogle } = useAuth()
  const [signing, setSigning] = useState(false)
  const [error, setError] = useState('')

  const handleSignIn = async () => {
    setSigning(true)
    setError('')
    try {
      await signInWithGoogle()
    } catch (err) {
      const msg =
        err.code === 'auth/popup-closed-by-user'
          ? 'Sign-in was cancelled.'
          : 'Sign-in failed. Please try again.'
      setError(msg)
      setSigning(false)
    }
  }

  return (
    <>
      <style>{`
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          14%       { transform: scale(1.35); }
          28%       { transform: scale(1); }
          42%       { transform: scale(1.2); }
          70%       { transform: scale(1); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .free-shimmer {
          background: linear-gradient(90deg,
            #34d399 0%, #34d399 30%,
            #a7f3d0 50%,
            #34d399 70%, #34d399 100%
          );
          background-size: 200% auto;
          animation: shimmer 2.5s linear infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      <div className="min-h-screen flex flex-col md:flex-row bg-slate-950 overflow-hidden">

        {/* ══════════════════════════════════════
            LEFT PANEL — Branding & Content
            order-1 on all sizes (top on mobile)
            ══════════════════════════════════════ */}
        <div className="relative flex-1 flex flex-col px-8 py-8 md:px-12 md:py-10 overflow-hidden order-1">

          {/* Background glows */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-40 -left-40 w-[560px] h-[560px] bg-accent-500/6 rounded-full blur-3xl" />
            <div className="absolute top-1/2 -right-24 w-96 h-96 bg-fuchsia-500/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 left-1/3 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }}
            />
          </div>

          {/* ── Logo — top-left ── */}
          <div className="relative flex items-center gap-3 mb-auto pb-8">
            <div className="w-9 h-9 rounded-xl bg-accent-500/15 border border-accent-500/30 flex items-center justify-center">
              <GraduationCap className="w-4.5 h-4.5 text-accent-400" />
            </div>
            <div>
              <p className="text-sm font-bold text-white leading-tight">GenAI - ML Tutorial</p>
              <p className="text-[11px] font-extrabold italic bg-gradient-to-r from-accent-300 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
                by Thanthrajnaani
              </p>
            </div>
          </div>

          {/* ── FREE Stamp — desktop only, pinned to vertical centre of right edge ── */}
          <div
            aria-hidden
            className="hidden lg:block"
            style={{
              position: 'absolute',
              top: '50%',
              right: '28px',
              width: '148px',
              height: '148px',
              transform: 'translateY(-50%) rotate(18deg)',
              zIndex: 10,
              pointerEvents: 'none',
            }}
          >
            <div style={{
              position: 'absolute',
              inset: '-8px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(239,68,68,0.18) 0%, transparent 70%)',
            }} />
            <div style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              border: '3.5px solid #ef4444',
              boxShadow: '0 0 18px rgba(239,68,68,0.5), 0 0 40px rgba(239,68,68,0.18)',
              background: 'rgba(127,29,29,0.15)',
              backdropFilter: 'blur(2px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute',
                inset: '7px',
                borderRadius: '50%',
                border: '1.5px dashed rgba(239,68,68,0.45)',
              }} />
              <span style={{ fontSize: '8.5px', letterSpacing: '3.5px', color: '#fca5a5', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1px' }}>COMPLETELY</span>
              <span style={{ fontSize: '38px', fontWeight: 900, color: '#ef4444', lineHeight: 1, textShadow: '0 0 20px rgba(239,68,68,0.7)', letterSpacing: '-1px' }}>FREE</span>
              <span style={{ fontSize: '8.5px', letterSpacing: '4px', color: '#fca5a5', fontWeight: 800, textTransform: 'uppercase', marginTop: '2px' }}>COURSE</span>
            </div>
          </div>

          {/* ── Hero — vertically centered in remaining space ── */}
          <div className="relative flex-1 flex flex-col justify-center text-center lg:pr-44">

            {/* Sub-badge */}
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-xs font-medium text-slate-400">
                <Sparkles className="w-3 h-3 text-accent-400" />
                Structured · Hands-on · Community-driven
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-white leading-[1.15] mb-4">
              Master{' '}
              <span className="bg-gradient-to-r from-accent-300 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
                GenAI & ML
              </span>
              <br />
              from scratch
            </h1>

            <p className="text-slate-400 text-base md:text-[1.05rem] max-w-md mx-auto mb-8 leading-relaxed">
              A structured, hands-on curriculum covering every layer — from Python
              fundamentals to deploying production LLMs.{' '}
              <span className="text-emerald-400 font-semibold">No paywalls. Ever.</span>
            </p>

            {/* Feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 max-w-2xl mx-auto text-left">
              {features.map(({ icon: Icon, title, desc, color }) => (
                <div
                  key={title}
                  className="group flex items-start gap-3 p-3.5 rounded-xl
                             bg-slate-900/60 border border-slate-800/80
                             hover:border-slate-700 hover:bg-slate-900/90
                             transition-all duration-200"
                >
                  <div className={`mt-0.5 w-8 h-8 rounded-lg border flex items-center justify-center flex-shrink-0 ${color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white leading-tight">{title}</p>
                    <p className="text-xs text-slate-500 mt-0.5 leading-snug">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Footer — bottom ── */}
          <p className="relative text-xs text-slate-600 text-center mt-8">
            Built with{' '}
            <span style={{ display: 'inline-block', animation: 'heartbeat 1.3s ease-in-out infinite' }}>
              ❤️
            </span>{' '}
            by Thanthrajnaani in Kundapura
          </p>
        </div>

        {/* ══════════════════════════════════════
            RIGHT PANEL — Sign In
            order-2 on all sizes (bottom on mobile)
            ══════════════════════════════════════ */}
        <div className="relative flex items-center justify-center
                        px-6 py-10 md:py-0
                        md:w-[420px] lg:w-[460px] flex-shrink-0
                        order-2">

          {/* Panel background */}
          <div className="absolute inset-0 bg-slate-900/70 border-t md:border-t-0 md:border-l border-slate-800/60" />

          {/* Top glow */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-accent-500/8 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-fuchsia-500/6 rounded-full blur-2xl" />
          </div>

          {/* Card */}
          <div className="relative z-10 w-full max-w-[360px]">

            {/* Mobile-only logo */}
            <div className="flex md:hidden items-center gap-2.5 mb-6">
              <div className="w-8 h-8 rounded-lg bg-accent-500/15 border border-accent-500/30 flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-accent-400" />
              </div>
              <span className="text-sm font-bold text-white">GenAI - ML Tutorial</span>
            </div>

            {/* Card shell */}
            <div className="rounded-2xl border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm
                            shadow-2xl shadow-black/50 overflow-hidden">

              {/* Top accent gradient bar */}
              <div className="h-[3px] w-full bg-gradient-to-r from-accent-400 via-fuchsia-400 to-cyan-400" />

              <div className="p-7 md:p-8">
                {/* Heading */}
                <div className="mb-7">
                  <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">
                    Welcome back 👋
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Sign in to sync your progress across all your devices and continue where you left off.
                  </p>
                </div>

                {/* Google sign-in button */}
                <button
                  onClick={handleSignIn}
                  disabled={signing}
                  className="group w-full flex items-center justify-center gap-3 px-5 py-3.5
                             bg-white hover:bg-gray-50 active:bg-gray-100
                             text-gray-800 font-semibold text-sm rounded-xl
                             border border-gray-200
                             shadow-md shadow-black/20 hover:shadow-lg hover:shadow-black/30
                             transition-all duration-200
                             disabled:opacity-60 disabled:cursor-not-allowed
                             focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:ring-offset-2 focus:ring-offset-slate-900"
                >
                  {signing ? (
                    <span className="w-5 h-5 border-2 border-gray-300 border-t-accent-500 rounded-full animate-spin" />
                  ) : (
                    <GoogleIcon />
                  )}
                  <span>{signing ? 'Signing in…' : 'Continue with Google'}</span>
                  {!signing && (
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-0.5 transition-transform ml-auto" />
                  )}
                </button>

                {error && (
                  <p className="mt-3 text-sm text-rose-400 text-center">{error}</p>
                )}

                {/* Stats strip */}
                <div className="mt-7 grid grid-cols-3 gap-3 pt-6 border-t border-slate-700/50">
                  {[
                    { value: '267', label: 'Topics' },
                    { value: '100%', label: 'Free' },
                    { value: '∞', label: 'Access' },
                  ].map(({ value, label }) => (
                    <div key={label} className="text-center">
                      <p className="text-base font-bold bg-gradient-to-r from-accent-300 to-fuchsia-400 bg-clip-text text-transparent">
                        {value}
                      </p>
                      <p className="text-[11px] text-slate-500 mt-0.5">{label}</p>
                    </div>
                  ))}
                </div>

                {/* Privacy note */}
                <p className="mt-5 text-[11px] text-slate-600 text-center leading-relaxed">
                  Progress stored securely in Firebase · Never shared
                </p>
              </div>
            </div>

            {/* Decorative dots below card */}
            <div className="flex justify-center gap-1.5 mt-4">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={`rounded-full transition-all ${i === 1 ? 'w-4 h-1.5' : 'w-1.5 h-1.5'}`}
                  style={{
                    background: i === 1
                      ? 'linear-gradient(90deg, #818cf8, #e879f9)'
                      : '#1e293b',
                  }}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
