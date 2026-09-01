import { useEffect, useState } from 'react'

// Returns days/hours/mins/secs remaining until target, and a ready flag.
export function useCountdown(targetISO) {
  const target = targetISO ? new Date(targetISO).getTime() : null
  const [now, setNow] = useState(Date.now())

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  if (!target || Number.isNaN(target)) {
    return { valid: false, done: false, days: 0, hours: 0, mins: 0, secs: 0 }
  }

  const diff = target - now
  if (diff <= 0) return { valid: true, done: true, days: 0, hours: 0, mins: 0, secs: 0 }

  const days = Math.floor(diff / 86400000)
  const hours = Math.floor((diff % 86400000) / 3600000)
  const mins = Math.floor((diff % 3600000) / 60000)
  const secs = Math.floor((diff % 60000) / 1000)
  return { valid: true, done: false, days, hours, mins, secs }
}
