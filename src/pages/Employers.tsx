import { Link } from "react-router-dom"
import { CtaBand, PageIntro } from "../components/PageBits"

const benefits = [
  {
    title: "Hire on demonstrated skill",
    body: "See competencies, project evidence, assessment results, and a job-readiness profile — not a CV padded with course names.",
  },
  {
    title: "A first-hand talent pipeline",
    body: "Engage verified learners whose pathways already include industry-style challenges, not a public job board of untested applicants.",
  },
  {
    title: "Tell the platform what you need",
    body: "Your skill requirements feed back into learning journeys and practical projects, so the next cohort is closer to your workforce reality.",
  },
  {
    title: "Built with a known academy",
    body: "Gomindz Academy already works with training partners, youth organisations, technology stakeholders, and employers. Ed-Novate is the scale layer.",
  },
]

export function EmployersPage() {
  return (
    <>
      <PageIntro
        kicker="For employers"
        title="A pipeline of verified, portfolio-backed talent."
        body="SMEs, startups, institutions, and hiring teams across ECOWAS can identify people based on what they can do. The three-year aim is 500+ employers inside a regional talent network."
      />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-4 md:grid-cols-2">
          {benefits.map((item) => (
            <article key={item.title} className="rounded-3xl border border-line p-6">
              <h2 className="font-display text-2xl text-forest">{item.title}</h2>
              <p className="mt-3 mb-0 text-ink-soft">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-forest grain text-[#f6f1e7]">
        <div className="relative mx-auto max-w-6xl px-5 py-16">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
              The pipeline
            </p>
            <h2 className="font-display mt-2 text-3xl font-medium md:text-[2.15rem]">
              How matching works
            </h2>
          </div>
          <ol className="mt-8 grid list-decimal gap-4 p-0 md:grid-cols-3 md:list-none">
            <li className="rounded-3xl bg-white/8 p-6">
              <p className="m-0 text-xs font-semibold uppercase tracking-[0.16em] text-gold-soft">
                01
              </p>
              <h3 className="font-display mt-2 text-xl">Share the requirement</h3>
              <p className="mt-3 mb-0 text-[#d8e6df]">
                Roles, competencies, and the kind of evidence you need to see
                before an interview.
              </p>
            </li>
            <li className="rounded-3xl bg-white/8 p-6">
              <p className="m-0 text-xs font-semibold uppercase tracking-[0.16em] text-gold-soft">
                02
              </p>
              <h3 className="font-display mt-2 text-xl">Review Skills Passports</h3>
              <p className="mt-3 mb-0 text-[#d8e6df]">
                Shortlist people whose projects and verified competencies already
                map to the work.
              </p>
            </li>
            <li className="rounded-3xl bg-white/8 p-6">
              <p className="m-0 text-xs font-semibold uppercase tracking-[0.16em] text-gold-soft">
                03
              </p>
              <h3 className="font-display mt-2 text-xl">Hire, intern, or brief</h3>
              <p className="mt-3 mb-0 text-[#d8e6df]">
                Engage for jobs, internships, freelance work, or entrepreneurship
                collaborations — then let outcomes improve the next pathway.
              </p>
            </li>
          </ol>
          <Link to="/join?role=employer" className="btn btn-gold mt-10">
            Onboard your organisation
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
