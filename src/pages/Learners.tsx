import { Link } from "react-router-dom"
import { CtaBand, PageIntro, SectionHeading } from "../components/PageBits"
import { disciplines } from "../data"

const needs = [
  {
    title: "Career clarity",
    body: "Many complete a programme without knowing which path fits their strengths, interests, and the jobs actually available around them.",
  },
  {
    title: "Skills that travel",
    body: "Learning is mapped to global capabilities and practised on African industries, businesses, datasets, and local challenges.",
  },
  {
    title: "Proof you can show",
    body: "Projects, assessments, and a Skills Passport replace a folder of certificates that employers cannot interpret.",
  },
  {
    title: "A way into work",
    body: "Verified learners are matched to internships, jobs, freelance briefs, and entrepreneurship support — not left to hunt alone.",
  },
]

export function LearnersPage() {
  return (
    <>
      <PageIntro
        kicker="For learners"
        title="Find a career. Close the gaps. Walk in with evidence."
        body="Ed-Novate Africa is for young people aged 18 to 35 — students, graduates, unemployed youth, early-career professionals, and career changers — starting with 1,000+ young Gambians before expanding across ECOWAS."
      />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <SectionHeading
          kicker="What you get"
          title="A guided route out of the skills-to-employment gap."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {needs.map((item) => (
            <article key={item.title} className="rounded-3xl bg-sand p-6">
              <h3 className="font-display text-xl text-forest">{item.title}</h3>
              <p className="mt-3 mb-0 text-ink-soft">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-mist/80">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <SectionHeading
            kicker="What you can learn"
            title="Disciplines already proven inside Gomindz Academy."
            body="Ed-Novate productizes programmes the academy has already delivered — then personalizes the sequence around your gaps and goals."
          />
          <ul className="mt-8 mb-0 flex list-none flex-wrap gap-3 p-0">
            {disciplines.map((item) => (
              <li
                key={item}
                className="rounded-full bg-paper px-4 py-2 text-sm font-medium text-forest"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-2xl text-ink-soft">
            Flexible, accessible learning sits alongside the personalization,
            practical work, mentorship, and accountability people expect from a
            campus — without being locked to one room and one timetable.
          </p>
              <Link to="/join?role=learner" className="btn btn-dark mt-8">
            Join as a learner
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
