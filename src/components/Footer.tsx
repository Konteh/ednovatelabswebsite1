import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import { contact, sdgs } from "../data"
import { Logo } from "./Logo"

export function Footer() {
  return (
    <footer className="bg-forest-deep text-[#f6f1e7]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="text-[#f6f1e7]">
            <Logo />
          </div>
          <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-gold-soft/90">
            An education-to-employment platform for West Africa. Discover a career,
            learn what matters, prove competence, and get hired — built on Gomindz
            Academy’s work with 1,500+ learners.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-soft">
            Explore
          </p>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <Link className="text-[#f6f1e7] no-underline hover:text-gold-soft" to="/pathway">
              The pathway
            </Link>
            <Link className="text-[#f6f1e7] no-underline hover:text-gold-soft" to="/learners">
              For learners
            </Link>
            <Link className="text-[#f6f1e7] no-underline hover:text-gold-soft" to="/employers">
              For employers
            </Link>
            <Link className="text-[#f6f1e7] no-underline hover:text-gold-soft" to="/impact">
              Impact
            </Link>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-soft">
            Contact
          </p>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <a className="text-[#f6f1e7] no-underline hover:text-gold-soft" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
            <a className="text-[#f6f1e7] no-underline hover:text-gold-soft" href={`tel:${contact.phone.replace(/\s/g, "")}`}>
              {contact.phone}
            </a>
            <p className="m-0 text-[#d8e6df]">{contact.address}</p>
            <a
              className="inline-flex items-center gap-1 text-gold-soft no-underline"
              href={contact.academy}
              target="_blank"
              rel="noreferrer"
            >
              Gomindz Academy <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-6 md:flex-row md:items-center md:justify-between">
          <p className="m-0 text-xs text-[#c5d6cd]">
            © 2026 Ed-Novate Africa · An initiative of Gomindz Academy
          </p>
          <div className="flex flex-wrap gap-2">
            {sdgs.map((sdg) => (
              <span
                key={sdg.code}
                className="rounded-full border border-white/15 px-2.5 py-1 text-[0.68rem] tracking-wide"
              >
                SDG {sdg.code}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
