import { portfolioData } from '@/data/portfolio'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="px-3 pb-8 pt-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 rounded-2xl border border-[var(--color-line)] bg-white/80 px-4 py-4 text-sm text-slate-600 shadow-[0_10px_22px_rgba(15,23,42,0.05)] sm:flex-row sm:items-center sm:justify-between">
        <p>
          {currentYear} {portfolioData.name}. Built with Next.js and Tailwind CSS.
        </p>
        <div className="flex items-center gap-3">
          <a
            href={portfolioData.contact.github}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-slate-700 transition hover:text-[var(--color-brand-strong)]"
          >
            GitHub
          </a>
          <a
            href={portfolioData.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-slate-700 transition hover:text-[var(--color-brand-strong)]"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
