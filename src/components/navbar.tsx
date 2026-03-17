'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

const socialLinks = [
  { href: portfolioData.contact.github, label: 'GitHub' },
  { href: portfolioData.contact.linkedin, label: 'LinkedIn' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 px-3 pt-4">
      <div className="mx-auto max-w-6xl rounded-2xl border border-[var(--color-line)] bg-white/90 px-4 py-3 shadow-[0_12px_28px_rgba(15,23,42,0.08)] backdrop-blur">
        <div className="flex items-center justify-between gap-3">
          <a
            href="#home"
            className="text-sm font-semibold tracking-wide text-[var(--color-brand-strong)] sm:text-base"
            onClick={() => setMenuOpen(false)}
          >
            {portfolioData.name}
          </a>

          <nav className="hidden items-center gap-2 md:flex">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
              >
                {item.label}
              </a>
            ))}
            <div className="ml-1 hidden items-center gap-2 lg:flex">
              {socialLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-[var(--color-line)] px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-[var(--color-brand)] hover:text-[var(--color-brand-strong)]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          <button
            type="button"
            className="rounded-lg border border-[var(--color-line)] p-2 text-slate-700 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen ? (
          <div className="mt-3 grid gap-2 border-t border-[var(--color-line)] pt-3 md:hidden">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 grid gap-2">
              {socialLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-[var(--color-line)] px-3 py-2 text-sm font-medium text-slate-700"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </header>
  )
}
