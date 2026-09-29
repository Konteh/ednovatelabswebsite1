import { useState, type FormEvent } from "react"
import { contact, ecowasCountries } from "../data"
import { saveWaitlistEntry, type WaitlistRole } from "../lib/waitlist"

const roles: { value: WaitlistRole; label: string }[] = [
  { value: "learner", label: "Learner — student, graduate or career changer" },
  { value: "employer", label: "Employer — hire verified talent" },
  { value: "partner", label: "Partner — university, NGO or training institution" },
]

type FieldErrors = Partial<Record<"name" | "email" | "role" | "country", string>>

export function WaitlistForm({ defaultRole = "learner" }: { defaultRole?: WaitlistRole }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [role, setRole] = useState<WaitlistRole>(defaultRole)
  const [country, setCountry] = useState("The Gambia")
  const [organisation, setOrganisation] = useState("")
  const [message, setMessage] = useState("")
  const [errors, setErrors] = useState<FieldErrors>({})
  const [submitted, setSubmitted] = useState<string | null>(null)

  function validate(): FieldErrors {
    const next: FieldErrors = {}
    if (!name.trim()) next.name = "Please enter your name."
    if (!email.trim()) next.email = "An email is required."
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = "Enter a valid email address."
    }
    if (!role) next.role = "Choose how you want to join."
    if (!country) next.country = "Select a country."
    return next
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    saveWaitlistEntry({
      name: name.trim(),
      email: email.trim(),
      role,
      country,
      organisation: organisation.trim(),
      message: message.trim(),
    })
    setSubmitted(name.trim())
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-mist bg-mist px-6 py-8" role="status">
        <p className="font-display text-2xl text-forest">You’re on the list, {submitted}.</p>
        <p className="mt-3 max-w-xl text-ink-soft">
          We’ll be in touch as the career counselling MVP opens to its first cohort.
          If you need to reach the team sooner, write to{" "}
          <a className="text-forest" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>{" "}
          or call {contact.phone}.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <label className="grid gap-1.5 text-sm font-medium">
        Full name
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          className="rounded-xl border border-line bg-white px-3.5 py-3 font-normal"
        />
        {errors.name && <span className="font-normal text-clay">{errors.name}</span>}
      </label>
      <label className="grid gap-1.5 text-sm font-medium">
        Email
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          className="rounded-xl border border-line bg-white px-3.5 py-3 font-normal"
        />
        {errors.email && <span className="font-normal text-clay">{errors.email}</span>}
      </label>
      <label className="grid gap-1.5 text-sm font-medium">
        I am joining as
        <select
          value={role}
          onChange={(event) => setRole(event.target.value as WaitlistRole)}
          className="rounded-xl border border-line bg-white px-3.5 py-3 font-normal"
        >
          {roles.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </label>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-medium">
          Country
          <select
            value={country}
            onChange={(event) => setCountry(event.target.value)}
            className="rounded-xl border border-line bg-white px-3.5 py-3 font-normal"
          >
            {ecowasCountries.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-1.5 text-sm font-medium">
          Organisation <span className="font-normal text-ink-soft">(optional)</span>
          <input
            value={organisation}
            onChange={(event) => setOrganisation(event.target.value)}
            className="rounded-xl border border-line bg-white px-3.5 py-3 font-normal"
          />
        </label>
      </div>
      <label className="grid gap-1.5 text-sm font-medium">
        What are you hoping to do on Ed-Novate?{" "}
        <span className="font-normal text-ink-soft">(optional)</span>
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          rows={4}
          className="resize-y rounded-xl border border-line bg-white px-3.5 py-3 font-normal"
        />
      </label>
      <button type="submit" className="btn btn-primary mt-1 justify-self-start">
        Request early access
      </button>
      <p className="m-0 text-xs text-ink-soft">
        This form is stored on your device for this preview. In production it will
        reach the Ed-Novate team at Gomindz Academy.
      </p>
    </form>
  )
}
