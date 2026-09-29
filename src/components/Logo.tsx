import { Link } from "react-router-dom"

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 text-inherit no-underline">
      <svg
        viewBox="0 0 48 48"
        className="h-10 w-10 shrink-0"
        aria-hidden="true"
      >
        <rect width="48" height="48" rx="14" fill="currentColor" className="text-forest" />
        <path
          d="M12 32c6-11 11-15.5 24-18.5"
          fill="none"
          stroke="#E8C36A"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <path
          d="M13.5 35c7.5-6 14-8.5 21-9"
          fill="none"
          stroke="#F4EDE0"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="36.5" cy="13.5" r="3.1" fill="#C45C26" />
      </svg>
      <span className="leading-tight">
        <span className="font-display block text-[1.15rem] font-semibold tracking-tight">
          Ed-Novate
        </span>
        {!compact && (
          <span className="block text-[0.68rem] font-medium uppercase tracking-[0.18em] text-current/70">
            Africa
          </span>
        )}
      </span>
    </Link>
  )
}
