import { CtaBand, PageIntro, SectionHeading } from "../components/PageBits"
import { phases, pathway } from "../data"

export function PathwayPage() {
  return (
    <>
      <PageIntro
        kicker="The pathway"
        title="Discover. Learn. Build. Prove. Get hired."
        body="Five connected phases turn Gomindz Academy’s in-person model into a scalable, AI-enabled platform — without splitting career guidance, learning, and work into separate products."
      />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <ol className="m-0 grid list-none gap-6 p-0">
          {pathway.map((item, index) => (
            <li
              key={item.step}
              className="grid gap-6 rounded-[1.75rem] border border-line p-6 md:grid-cols-[8rem_1fr] md:p-8"
            >
              <div>
                <p className="font-display m-0 text-5xl text-gold">{item.step}</p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-clay">
                  {item.title}
                </p>
              </div>
              <div>
                <h2 className="font-display m-0 text-3xl text-forest">{item.question}</h2>
                <p className="mt-4 mb-0 max-w-3xl text-lg text-ink-soft">{item.body}</p>
                {index < pathway.length - 1 && (
                  <p className="mt-6 mb-0 text-sm font-medium text-forest">
                    Then → {pathway[index + 1].title}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <SectionHeading
            kicker="Technology"
            title="Built in five phases, used as one journey."
            body="Each phase adds a capability. Together they create a feedback loop from labour-market need to learning to verified talent."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {phases.map((item) => (
              <article key={item.phase} className="rounded-3xl bg-paper p-6">
                <p className="m-0 text-xs font-semibold uppercase tracking-[0.16em] text-clay">
                  {item.phase}
                </p>
                <h3 className="font-display mt-2 text-2xl text-forest">{item.title}</h3>
                <p className="mt-3 mb-0 text-ink-soft">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
