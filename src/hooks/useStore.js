import { useCallback, useEffect, useState } from 'react'

const KEY = 'olivia-nyc-2026'

const DEFAULT = {
  bakeryPicks: {}, // { bakeryId: true }
  bakeryPastry: {}, // { bakeryId: 'croissant' }
  scorecard: {}, // { bakeryId: { name, taste, looks, again, dadScore, oliviaScore, note } }
  omakaseVotes: {}, // { foodName: 'yes' | 'maybe' | 'no' }
  teaVote: '', // 'yes' | 'maybe' | 'skip'
  fashionChoice: '', // 'fit' | 'mood' | 'both'
  transportStamps: {}, // { taxi: true }
  planner: {}, // { promptId: 'text' }
  balletWatch: {}, // { item: 'text' }
  dreams: [], // [{ id, title, link, why, category }]
}

// One tiny global store, persisted to localStorage. Every section reads and
// writes the same object so a choice made anywhere shows up everywhere.
let memory = load()
const listeners = new Set()

function load() {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return { ...DEFAULT }
    return { ...DEFAULT, ...JSON.parse(raw) }
  } catch {
    return { ...DEFAULT }
  }
}

function persist() {
  try {
    localStorage.setItem(KEY, JSON.stringify(memory))
  } catch {
    /* storage full or blocked, choices simply won't persist */
  }
}

export function useStore(selector = (s) => s) {
  const [, force] = useState(0)
  useEffect(() => {
    const fn = () => force((n) => n + 1)
    listeners.add(fn)
    return () => listeners.delete(fn)
  }, [])

  const set = useCallback((updater) => {
    memory = typeof updater === 'function' ? updater(memory) : { ...memory, ...updater }
    persist()
    listeners.forEach((l) => l())
  }, [])

  return [selector(memory), set, memory]
}

export function resetStore() {
  memory = { ...DEFAULT }
  persist()
  listeners.forEach((l) => l())
}
