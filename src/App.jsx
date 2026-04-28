import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'
import Sidebar from './components/Sidebar.jsx'
import Dashboard from './components/Dashboard.jsx'
import ModulePage from './components/ModulePage.jsx'
import SearchBar from './components/SearchBar.jsx'
import { curriculum } from './data/curriculum.js'
import useProgress from './hooks/useProgress.js'

export default function App() {
  const progress = useProgress()
  const [view, setView] = useState('dashboard') // 'dashboard' | 'module'
  const [activeModuleId, setActiveModuleId] = useState(null)
  const [jumpTopicId, setJumpTopicId] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Reset scroll on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [view, activeModuleId])

  const goDashboard = () => {
    setView('dashboard')
    setActiveModuleId(null)
    setSidebarOpen(false)
  }

  const goModule = (moduleId, topicId = null) => {
    setActiveModuleId(moduleId)
    setView('module')
    setJumpTopicId(topicId)
    setSidebarOpen(false)
  }

  const handleSidebarSelect = (which, moduleId) => {
    if (which === 'dashboard') goDashboard()
    else if (which === 'module') goModule(moduleId)
  }

  const handleReset = () => {
    if (
      window.confirm(
        'Reset ALL progress? This clears completed topics, notes, and quiz scores.'
      )
    ) {
      progress.reset()
    }
  }

  const activeModule =
    view === 'module'
      ? curriculum.modules.find((m) => m.id === activeModuleId)
      : null

  const overall = progress.overallProgress(curriculum.modules)

  return (
    <div className="min-h-screen flex bg-slate-950">
      <Sidebar
        activeView={view}
        activeModuleId={activeModuleId}
        moduleProgress={progress.moduleProgress}
        overallPct={overall.pct}
        onSelect={handleSidebarSelect}
        onReset={handleReset}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="flex-1 min-w-0 flex flex-col">
        {/* Top bar */}
        <header className="sticky top-0 z-20 bg-slate-950/80 backdrop-blur border-b border-slate-800">
          <div className="flex items-center gap-3 px-4 md:px-8 h-14">
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden p-2 -ml-2 text-slate-300 hover:text-white"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="flex-1 flex justify-end md:justify-start">
              <SearchBar onJump={(mid, tid) => goModule(mid, tid)} />
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 px-4 md:px-8 py-6 md:py-8 max-w-6xl w-full mx-auto">
          {view === 'dashboard' && (
            <Dashboard
              moduleProgress={progress.moduleProgress}
              overall={overall}
              onOpenModule={(id) => goModule(id)}
            />
          )}
          {view === 'module' && activeModule && (
            <ModulePage
              module={activeModule}
              isTopicDone={progress.isTopicDone}
              toggleTopic={progress.toggleTopic}
              moduleProgress={progress.moduleProgress}
              getNote={progress.getNote}
              setNote={progress.setNote}
              getQuizResult={progress.getQuizResult}
              setQuizResult={progress.setQuizResult}
              onBack={goDashboard}
              jumpTopicId={jumpTopicId}
              onJumpHandled={() => setJumpTopicId(null)}
            />
          )}
        </main>

        <footer className="px-4 md:px-8 py-4 border-t border-slate-900 text-xs text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Local progress saved in your browser.</span>
          <span className="flex items-center gap-1.5">
            Built with <span aria-label="love" className="text-rose-500">❤️</span> by{' '}
            <span className="font-extrabold italic tracking-wide bg-gradient-to-r from-accent-300 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
              Thanthrajnaani
            </span>{' '}
            in Kundapura
          </span>
        </footer>
      </div>
    </div>
  )
}
