import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'genai_ml_progress'

const defaultState = {
  topics: {},   // { topicId: true }
  notes: {},    // { moduleId: 'text' }
  quiz: {},     // { moduleId: { score, total, takenAt } }
}

const readState = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { ...defaultState }
    const parsed = JSON.parse(raw)
    return {
      topics: parsed.topics || {},
      notes: parsed.notes || {},
      quiz: parsed.quiz || {},
    }
  } catch {
    return { ...defaultState }
  }
}

export default function useProgress() {
  const [state, setState] = useState(readState)

  // Persist to localStorage on every change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      // storage full or blocked — ignore
    }
  }, [state])

  // Listen for changes from other tabs
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === STORAGE_KEY) setState(readState())
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const toggleTopic = useCallback((topicId) => {
    setState((prev) => {
      const next = { ...prev.topics }
      if (next[topicId]) delete next[topicId]
      else next[topicId] = true
      return { ...prev, topics: next }
    })
  }, [])

  const isTopicDone = useCallback(
    (topicId) => Boolean(state.topics[topicId]),
    [state.topics]
  )

  const setNote = useCallback((moduleId, text) => {
    setState((prev) => ({
      ...prev,
      notes: { ...prev.notes, [moduleId]: text },
    }))
  }, [])

  const getNote = useCallback(
    (moduleId) => state.notes[moduleId] || '',
    [state.notes]
  )

  const setQuizResult = useCallback((moduleId, score, total) => {
    setState((prev) => ({
      ...prev,
      quiz: {
        ...prev.quiz,
        [moduleId]: { score, total, takenAt: Date.now() },
      },
    }))
  }, [])

  const getQuizResult = useCallback(
    (moduleId) => state.quiz[moduleId] || null,
    [state.quiz]
  )

  const moduleProgress = useCallback(
    (module) => {
      const allTopics = module.sections.flatMap((s) => s.topics.map((t) => t.id))
      if (allTopics.length === 0) return { done: 0, total: 0, pct: 0 }
      const done = allTopics.filter((id) => state.topics[id]).length
      return {
        done,
        total: allTopics.length,
        pct: Math.round((done / allTopics.length) * 100),
      }
    },
    [state.topics]
  )

  const overallProgress = useCallback(
    (modules) => {
      let done = 0
      let total = 0
      for (const m of modules) {
        for (const s of m.sections) {
          for (const t of s.topics) {
            total += 1
            if (state.topics[t.id]) done += 1
          }
        }
      }
      return { done, total, pct: total ? Math.round((done / total) * 100) : 0 }
    },
    [state.topics]
  )

  const reset = useCallback(() => {
    setState({ ...defaultState })
  }, [])

  return {
    state,
    toggleTopic,
    isTopicDone,
    setNote,
    getNote,
    setQuizResult,
    getQuizResult,
    moduleProgress,
    overallProgress,
    reset,
  }
}
