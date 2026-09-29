import { Link } from "react-router-dom"

export function NotFoundPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">404</p>
      <h1 className="font-display mt-3 text-4xl text-forest">This page is not on the pathway.</h1>
      <p className="mt-4 text-ink-soft">
        The address may be mistyped, or the page may have moved.
      </p>
      <Link to="/" className="btn btn-dark mt-8">
        Back to Ed-Novate Africa
      </Link>
    </section>
  )
}
