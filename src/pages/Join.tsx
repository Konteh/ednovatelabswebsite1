import { Mail, MapPin, Phone } from "lucide-react"
import { useSearchParams } from "react-router-dom"
import { PageIntro } from "../components/PageBits"
import { WaitlistForm } from "../components/WaitlistForm"
import { contact } from "../data"
import type { WaitlistRole } from "../lib/waitlist"

function roleFromQuery(value: string | null): WaitlistRole {
  if (value === "employer" || value === "partner" || value === "learner") return value
  return "learner"
}

export function JoinPage() {
  const [params] = useSearchParams()
  const defaultRole = roleFromQuery(params.get("role"))

  return (
    <>
      <PageIntro
        kicker="Join"
        title="Request early access."
        body="The next milestone is an AI career-counselling MVP, tested with a first cohort, then competency-based learning, portfolios, and the first verified talent pipeline. Tell us whether you are a learner, an employer, or a partner."
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="font-display m-0 text-2xl text-forest">Waitlist</h2>
          <p className="mt-3 mb-8 text-ink-soft">
            We already have the community and the proof of need. Ed-Novate is the
            technology that lets us scale the impact.
          </p>
          <WaitlistForm key={defaultRole} defaultRole={defaultRole} />
        </div>
        <aside className="h-fit rounded-[1.75rem] bg-sand p-6">
          <h2 className="font-display m-0 text-2xl text-forest">Talk to the team</h2>
          <p className="mt-3 text-ink-soft">
            Ed-Novate Africa is an initiative of Gomindz Academy in The Gambia.
          </p>
          <ul className="mt-6 mb-0 flex list-none flex-col gap-4 p-0 text-sm">
            <li className="flex gap-3">
              <Mail size={18} className="mt-0.5 text-clay" />
              <a className="text-forest" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="mt-0.5 text-clay" />
              <div>
                <a className="text-forest" href={`tel:${contact.phone.replace(/\s/g, "")}`}>
                  {contact.phone}
                </a>
                <span className="block text-ink-soft">{contact.phoneAlt}</span>
              </div>
            </li>
            <li className="flex gap-3">
              <MapPin size={18} className="mt-0.5 text-clay" />
              <span>{contact.address}</span>
            </li>
          </ul>
        </aside>
      </section>
    </>
  )
}
