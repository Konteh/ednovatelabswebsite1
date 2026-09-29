export function DownloadPage() {
  return (
    <section className="mx-auto max-w-2xl px-5 py-16 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">
        Project files
      </p>
      <h1 className="font-display mt-3 text-4xl text-forest">Download the website</h1>
      <p className="mt-4 text-ink-soft">
        Get the full source as a zip. Unzip it, install Node.js, then run it on
        your computer — no GitHub or Origin login required.
      </p>
      <a href="/ednovate-web.zip" download="ednovate-web.zip" className="btn btn-primary mt-8">
        Download ednovate-web.zip
      </a>
      <ol className="mt-10 list-decimal px-4 text-left text-ink-soft">
        <li>Install Node.js LTS from nodejs.org</li>
        <li>Unzip the folder</li>
        <li>
          In that folder run <code className="rounded bg-sand px-1">npm install</code> then{" "}
          <code className="rounded bg-sand px-1">npm run dev</code>
        </li>
        <li>Open http://127.0.0.1:4327</li>
      </ol>
    </section>
  )
}
