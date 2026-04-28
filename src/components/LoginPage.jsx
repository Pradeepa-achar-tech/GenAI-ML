import { useState } from 'react'
import {
  BookOpen,
  Brain,
  GraduationCap,
  Trophy,
  BarChart3,
  CheckCircle2,
  Zap,
  Sparkles,
  FlaskConical,
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
    icon: FlaskConical,
    title: 'Hands-On Labs',
    desc: 'Code examples and experiments at every stage',
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
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
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-950 overflow-hidden">
      {/* ─── LEFT PANEL — Branding ─── */}
      <div className="relative flex-1 flex flex-col justify-between px-8 py-10 md:px-14 md:py-12 overflow-hidden order-2 md:order-1">
        {/* Background glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-accent-500/8 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -right-20 w-96 h-96 bg-fuchsia-500/7 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 left-1/4 w-80 h-80 bg-cyan-500/6 rounded-full blur-3xl" />
          {/* Grid dots */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'radial-gradient(circle, #fff 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
        </div>

        {/* Logo */}
        <div className="relative flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-accent-500/15 border border-accent-500/30 flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-accent-400" />
          </div>
          <div>
            <p className="text-sm font-bold text-white leading-tight">GenAI - ML Tutorial</p>
            <p className="text-[11px] font-extrabold italic bg-gradient-to-r from-accent-300 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
              by Thanthrajnaani
            </p>
          </div>
        </div>

        {/* Hero copy */}
        <div className="relative my-10 md:my-0">
          <div className="flex items-center gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-500/10 border border-accent-500/25 text-xs font-medium text-accent-300">
              <Sparkles className="w-3.5 h-3.5" />
              Free · Structured · Hands-on
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight mb-4">
            Master{' '}
            <span className="bg-gradient-to-r from-accent-300 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
              GenAI & ML
            </span>
            <br />
            from scratch
          </h1>

          <p className="text-slate-400 text-base md:text-lg max-w-md mb-10 leading-relaxed">
            A structured, hands-on curriculum covering every layer — from Python
            fundamentals to deploying production LLMs.
          </p>

          {/* Feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-2xl">
            {features.map(({ icon: Icon, title, desc, color }) => (
              <div
                key={title}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-colors"
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

        {/* Footer */}
        <p className="relative text-xs text-slate-600">
          Built with care in Kundapura, India &nbsp;·&nbsp; {new Date().getFullYear()}
        </p>
      </div>

      {/* ─── RIGHT PANEL — Login ─── */}
      <div className="flex items-center justify-center px-8 py-10 md:py-0
                      md:w-[420px] lg:w-[460px] flex-shrink-0
                      bg-slate-900/80 backdrop-blur border-l border-slate-800 order-1 md:order-2">
        <div className="w-full max-w-[340px]">

          {/* Mobile-only logo */}
          <div className="flex md:hidden items-center gap-2.5 mb-8">
            <div className="w-8 h-8 rounded-lg bg-accent-500/15 border border-accent-500/30 flex items-center justify-center">
              <GraduationCap className="w-4 h-4 text-accent-400" />
            </div>
            <span className="text-sm font-bold text-white">GenAI - ML Tutorial</span>
          </div>

          {/* Heading */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Welcome back</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Sign in with your Google account to sync your course progress and continue where you left off.
            </p>
          </div>

          {/* Google button */}
          <button
            onClick={handleSignIn}
            disabled={signing}
            className="w-full flex items-center justify-center gap-3 px-5 py-3.5
                       bg-white hover:bg-gray-50 active:bg-gray-100
                       text-gray-800 font-semibold text-sm rounded-xl
                       border border-gray-200 shadow-sm
                       transition-all duration-150
                       disabled:opacity-60 disabled:cursor-not-allowed
                       focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            {signing ? (
              <span className="w-5 h-5 border-2 border-gray-300 border-t-accent-500 rounded-full animate-spin" />
            ) : (
              <GoogleIcon />
            )}
            {signing ? 'Signing in…' : 'Continue with Google'}
          </button>

          {error && (
            <p className="mt-3 text-sm text-rose-400 text-center animate-fade-in">{error}</p>
          )}

          {/* Divider */}
          <div className="my-7 flex items-center gap-3">
            <div className="flex-1 h-px bg-slate-800" />
            <span className="text-[11px] text-slate-600 uppercase tracking-wider">What we save</span>
            <div className="flex-1 h-px bg-slate-800" />
          </div>

          {/* Tracking list */}
          <ul className="space-y-3">
            {[
              'Your email & display name',
              'First sign-up & latest login date',
              'Total sign-in & visit count',
              'All topic & quiz progress',
              'Your personal notes per module',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-7 text-[11px] text-slate-600 text-center leading-relaxed">
            Data is stored securely in Firebase Firestore.
            <br />
            Never shared with third parties.
          </p>
        </div>
      </div>
    </div>
  )
}
