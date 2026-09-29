import { ArrowRight, Briefcase, Compass, GraduationCap } from "lucide-react"
import { Link } from "react-router-dom"
import { CtaBand, SectionHeading } from "../components/PageBits"
import {
  barriers,
  differentiators,
  pathway,
  stats,
  testimonials,
} from "../data"

function PassportCard() {
  return (
    <article className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-[#fbf7f0] p-6 text-ink shadow-2xl shadow-black/20">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-clay">
            Skills Passport
          </p>
          <h3 className="font-display mt-1 text-2xl text-forest">Awa Jallow</h3>
          <p className="m-0 text-sm text-ink-soft">Data Analytics pathway · The Gambia</p>
        </div>
        <span className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-forest">
          Verified
        </span>
      </div>
      <dl className="mt-6 grid grid-cols-3 gap-3 border-y border-line py-4 text-center">
        <div>
          <dt className="text-[0.65rem] uppercase tracking-wider text-ink-soft">Projects</dt>
          <dd className="font-display m-0 mt-1 text-2xl text-forest">4</dd>
        </div>
        <div>
          <dt className="text-[0.65rem] uppercase tracking-wider text-ink-soft">Competencies</dt>
          <dd className="font-display m-0 mt-1 text-2xl text-forest">12</dd>
        </div>
        <div>
          <dt className="text-[0.65rem] uppercase tracking-wider text-ink-soft">Job-ready</dt>
          <dd className="font-display m-0 mt-1 text-2xl text-forest">82%</dd>
        </div>
      </dl>
      <ul className="mt-5 m-0 flex list-none flex-wrap gap-2 p-0">
        {["SQL", "Power BI", "Python", "Stakeholder reporting"].map((skill) => (
          <li
            key={skill}
            className="rounded-full bg-sand px-3 py-1 text-xs font-medium text-forest"
          >
            {skill}
          </li>
        ))}
      </ul>
      <p className="mt-5 mb-0 text-sm text-ink-soft">
        Evidence from industry challenges, not a certificate stack. Employers see
        what Awa can actually do.
      </p>
    </article>
  )
}

export function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest-deep grain text-[#f6f1e7]">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-clay/25 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-gold/15 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[1.15fr_0.85fr] md:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-soft">
              Ed-Novate Africa · Built by Gomindz Academy
            </p>
            <h1 className="font-display mt-5 text-4xl leading-[1.08] font-medium md:text-6xl">
              From learning to earning — a pathway West Africa has been missing.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#dce8e2]">
              Young people can take courses and still leave without a career, a
              portfolio, or a job. Ed-Novate Africa connects discovery, skills,
              proof, and opportunity in one platform, launching from The Gambia
              across ECOWAS.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/join" className="btn btn-gold">
                Join the first cohort <ArrowRight size={16} />
              </Link>
              <Link to="/pathway" className="btn btn-ghost">
                See the pathway
              </Link>
            </div>
            <p className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-sm text-gold-soft">
              {pathway.map((item, index) => (
                <span key={item.title} className="inline-flex items-center gap-2">
                  {item.title}
                  {index < pathway.length - 1 && (
                    <span className="text-white/35" aria-hidden>
                      →
                    </span>
                  )}
                </span>
              ))}
            </p>
          </div>
          <PassportCard />
        </div>
      </section>

      <section className="border-b border-line bg-sand">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-10 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display m-0 text-3xl text-forest md:text-4xl">{stat.value}</p>
              <p className="mt-1 mb-0 text-sm text-ink-soft">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHeading
          kicker="The problem"
          title="Access to education is not the same as a path into work."
          body="Across West Africa, young people can sit in classrooms or complete online courses and still not know which career fits them, what they are missing, or how to prove they are ready."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <article className="rounded-3xl bg-sand p-6">
            <h3 className="font-display text-xl text-forest">Traditional education</h3>
            <p className="mt-3 mb-0 text-ink-soft">
              Offers structure, mentorship, and human interaction — but is limited
              by location, cost, classroom capacity, and fixed schedules.
            </p>
          </article>
          <article className="rounded-3xl bg-sand p-6">
            <h3 className="font-display text-xl text-forest">Online learning</h3>
            <p className="mt-3 mb-0 text-ink-soft">
              Improves access, then often stops at courses and certificates, with
              little career guidance, practice, verification, or employer connection.
            </p>
          </article>
          <article className="rounded-3xl border border-clay/30 bg-white p-6">
            <h3 className="font-display text-xl text-clay">The result</h3>
            <p className="mt-3 mb-0 text-ink-soft">
              Employers still hire on paper qualifications. Learners still cannot
              show what they can do. The labour market stays disconnected from
              demonstrated skill.
            </p>
          </article>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {barriers.map((item) => (
            <article key={item.label} className="rounded-2xl border border-line p-4">
              <p className="font-display m-0 text-2xl text-forest">{item.value}</p>
              <p className="mt-2 mb-0 text-sm text-ink-soft">{item.label}</p>
            </article>
          ))}
        </div>
        <p className="mt-4 text-xs text-ink-soft">
          NEET figure from World Bank reporting for 2024. Barrier figures from the
          2024 Afrobarometer survey on youth employment in The Gambia.
        </p>
      </section>

      <section className="bg-mist/70">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <SectionHeading
            kicker="The solution"
            title="One continuous pathway from “what career?” to “where can I work?”"
            body="Ed-Novate Africa is an EdTech and talent platform. It does not treat counselling, learning, assessment, and hiring as separate products."
          />
          <div className="mt-10 grid gap-4">
            {pathway.map((item) => (
              <article
                key={item.step}
                className="grid gap-3 rounded-3xl bg-paper p-5 md:grid-cols-[5.5rem_1fr] md:items-start"
              >
                <p className="font-display m-0 text-3xl text-gold">{item.step}</p>
                <div>
                  <p className="m-0 text-xs font-semibold uppercase tracking-[0.16em] text-clay">
                    {item.title}
                  </p>
                  <h3 className="font-display mt-1 text-2xl text-forest">{item.question}</h3>
                  <p className="mt-2 mb-0 max-w-3xl text-ink-soft">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHeading
          kicker="Why this is different"
          title="The distinction is integration."
          body="Unlike institutions tied to a campus timetable, or platforms that mainly sell courses, Ed-Novate Africa holds the whole journey — and feeds employer demand back into what people learn next."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {differentiators.map((item) => (
            <article key={item.title} className="rounded-3xl border border-line p-6">
              <h3 className="font-display text-xl text-forest">{item.title}</h3>
              <p className="mt-3 mb-0 text-ink-soft">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <SectionHeading
            kicker="Who it is for"
            title="Young people who need a way in. Employers who need talent they can trust."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <article className="flex flex-col rounded-[1.75rem] bg-paper p-7">
              <GraduationCap className="text-clay" />
              <h3 className="font-display mt-4 text-2xl text-forest">Learners, 18–35</h3>
              <p className="mt-3 flex-1 text-ink-soft">
                University students, graduates, unemployed youth, early-career
                professionals, and career changers who need practical skills, a
                portfolio, and a clearer route into work.
              </p>
              <Link to="/learners" className="btn btn-outline mt-6 self-start">
                For learners <ArrowRight size={16} />
              </Link>
            </article>
            <article className="flex flex-col rounded-[1.75rem] bg-forest p-7 text-[#f6f1e7]">
              <Briefcase className="text-gold-soft" />
              <h3 className="font-display mt-4 text-2xl">SMEs, startups and institutions</h3>
              <p className="mt-3 flex-1 text-[#d8e6df]">
                Hire from a pipeline of verified, portfolio-backed candidates.
                Tell the platform what you need, and watch those requirements
                shape the next round of learning.
              </p>
              <Link to="/employers" className="btn btn-gold mt-6 self-start">
                For employers <ArrowRight size={16} />
              </Link>
            </article>
          </div>
          <p className="mt-8 flex items-start gap-2 text-sm text-ink-soft">
            <Compass size={16} className="mt-0.5 shrink-0 text-forest" />
            The Gambia is the launch market. Expansion follows through universities,
            training partners, youth organisations, and employers across ECOWAS.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHeading
          kicker="Already proven"
          title="Ed-Novate is built on four years of Gomindz Academy, not a slide deck."
          body="Since 2022 the academy has trained 1,500+ learners, supported 100+ people into employment, and delivered programmes in data, marketing, design, cybersecurity, and digital foundations. Ed-Novate is how that model scales beyond a classroom."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote key={item.name} className="m-0 rounded-3xl bg-mist p-6">
              <p className="font-display text-[1.05rem] leading-relaxed text-forest">
                “{item.quote}”
              </p>
              <footer className="mt-5 text-sm">
                <strong>{item.name}</strong>
                <span className="block text-ink-soft">{item.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  )
}
