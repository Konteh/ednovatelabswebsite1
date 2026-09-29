import { Link } from "react-router-dom"

export function PageIntro({
  kicker,
  title,
  body,
}: {
  kicker: string
  title: string
  body: string
}) {
  return (
    <section className="border-b border-line bg-sand">
      <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">{kicker}</p>
        <h1 className="font-display mt-3 max-w-3xl text-4xl leading-[1.12] font-medium text-forest md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-ink-soft">{body}</p>
      </div>
    </section>
  )
}

export function SectionHeading({
  kicker,
  title,
  body,
}: {
  kicker?: string
  title: string
  body?: string
}) {
  return (
    <div className="max-w-2xl">
      {kicker && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">{kicker}</p>
      )}
      <h2 className="font-display mt-2 text-3xl leading-tight font-medium text-forest md:text-[2.15rem]">
        {title}
      </h2>
      {body && <p className="mt-4 text-ink-soft">{body}</p>}
    </div>
  )
}

export function CtaBand() {
  return (
    <section className="bg-forest grain text-[#f6f1e7]">
      <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-5 py-16 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
            First cohort
          </p>
          <h2 className="font-display mt-3 text-3xl font-medium md:text-4xl">
            Start with career clarity. Finish with a job-ready Skills Passport.
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to="/join" className="btn btn-gold">
            Join the waitlist
          </Link>
          <Link to="/employers" className="btn btn-ghost">
            Hire verified talent
          </Link>
        </div>
      </div>
    </section>
  )
}
