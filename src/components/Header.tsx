import { Menu, X } from "lucide-react"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Logo } from "./Logo"

const links = [
  { to: "/pathway", label: "Pathway" },
  { to: "/learners", label: "Learners" },
  { to: "/employers", label: "Employers" },
  { to: "/impact", label: "Impact" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5">
        <Logo />
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium no-underline transition-colors ${
                  isActive ? "text-clay" : "text-ink-soft hover:text-forest"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/join" className="btn btn-dark !py-2.5 !px-4 text-sm">
            Join the waitlist
          </NavLink>
        </nav>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-line px-5 py-4 md:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-2.5 no-underline ${
                    isActive ? "bg-mist text-forest" : "text-ink"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/join"
              onClick={() => setOpen(false)}
              className="btn btn-dark mt-1"
            >
              Join the waitlist
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  )
}
