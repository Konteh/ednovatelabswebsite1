const STORAGE_KEY = "ednovate-waitlist"

export type WaitlistRole = "learner" | "employer" | "partner"

export type WaitlistEntry = {
  id: string
  name: string
  email: string
  role: WaitlistRole
  country: string
  organisation: string
  message: string
  createdAt: string
}

export function readWaitlist(): WaitlistEntry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as WaitlistEntry[]
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function saveWaitlistEntry(entry: Omit<WaitlistEntry, "id" | "createdAt">) {
  const next: WaitlistEntry = {
    ...entry,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  }
  const list = readWaitlist()
  localStorage.setItem(STORAGE_KEY, JSON.stringify([next, ...list]))
  return next
}
