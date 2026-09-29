import { CtaBand, PageIntro, SectionHeading } from "../components/PageBits"
import { impactGoals, sdgs } from "../data"

const measures = [
  "Learners reached",
  "Career pathways created",
  "Competencies verified",
  "Portfolios developed",
  "Employers engaged",
  "Interviews and placements",
  "Jobs and income generated",
]

export function ImpactPage() {
  return (
    <>
      <PageIntro
        kicker="Impact"
        title="Convert a young population into economic opportunity."
        body="Nearly 65% of West Africa is under 25. That strength has not fully become work. In The Gambia, 39.8% of young people were not in education, employment, or training in 2023 — 41.3% in 2024 World Bank figures."
      />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <SectionHeading
          kicker="Three-year aim"
          title="Scale a proven academy model across ECOWAS."
          body="Ed-Novate Africa takes Gomindz’s hands-on training, industry exposure, and career support and removes the limits of rooms, timetables, and instructor capacity."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {impactGoals.map((item) => (
            <article key={item.label} className="rounded-3xl bg-sand p-6">
              <p className="font-display m-0 text-4xl text-forest">{item.value}</p>
              <p className="mt-3 mb-0 text-ink-soft">{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-mist/80">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <SectionHeading
            kicker="Who benefits first"
            title="Young Gambians, then the region."
            body="The first beneficiaries are students, graduates, unemployed youth, and early-career professionals aged 18 to 35 who need practical skills and a stronger path into work. From there the platform expands through universities, youth organisations, and employer partnerships."
          />
          <p className="mt-8 max-w-2xl text-ink-soft">
            Success is not enrolment. It is competencies verified, portfolios
            created, employers connected, and jobs and income opportunities
            generated.
          </p>
          <ul className="mt-8 mb-0 flex list-none flex-wrap gap-2 p-0">
            {measures.map((item) => (
              <li
                key={item}
                className="rounded-full border border-line bg-paper px-4 py-2 text-sm text-forest"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <SectionHeading
          kicker="Regional priorities"
          title="Aligned with ECOWAS and the SDGs."
          body="The work supports youth empowerment, human-capital development, digital transformation, innovation, and employment — and contributes to a more skilled, inclusive West African workforce."
        />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-5">
          {sdgs.map((sdg) => (
            <article key={sdg.code} className="rounded-2xl border border-line p-4">
              <p className="font-display m-0 text-3xl text-gold">{sdg.code}</p>
              <p className="mt-2 mb-0 text-sm font-medium text-forest">{sdg.name}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  )
}
