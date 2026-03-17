'use client'

import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Cpu,
  Github,
  GraduationCap,
  Linkedin,
  MapPin,
  Rocket,
  Sparkles,
} from 'lucide-react'
import { portfolioData } from '@/data/portfolio'

const sectionTransition = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.22 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
}

const heroMetrics = [
  { label: 'Primary Focus', value: 'Full-Stack Product Engineering' },
  { label: 'Domain Blend', value: 'Backend, Vision, Data Systems' },
  { label: 'Current Path', value: 'Startup and Real-World Tools' },
]

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl space-y-9 pb-12 pt-6 md:space-y-12 md:pt-8">
      <motion.section
        id="home"
        className="section-shell p-6 md:p-10"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="grid items-start gap-8 lg:grid-cols-[1.25fr_0.95fr]">
          <div className="space-y-5">
            <span className="pill floating-pill">
              <Sparkles className="h-3.5 w-3.5" />
              {portfolioData.availability}
            </span>

            <div className="space-y-3">
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
                {portfolioData.name}
              </h1>
              <p className="max-w-3xl text-lg text-slate-700">{portfolioData.headline}</p>
              <p className="max-w-3xl section-copy">{portfolioData.mission}</p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a href="#projects" className="primary-button">
                View Projects
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={portfolioData.contact.resume}
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                Resume
              </a>
              <a
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                Connect on LinkedIn
              </a>
            </div>

            <div className="soft-divider" />

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="metric-card">
                <p className="metric-label">Education</p>
                <p className="metric-value flex items-center gap-2 text-sm sm:text-base">
                  <GraduationCap className="h-4 w-4 text-[var(--color-brand-strong)]" />
                  {portfolioData.education}
                </p>
              </div>
              <div className="metric-card">
                <p className="metric-label">Location</p>
                <p className="metric-value flex items-center gap-2 text-sm sm:text-base">
                  <MapPin className="h-4 w-4 text-[var(--color-brand-strong)]" />
                  {portfolioData.location}
                </p>
              </div>
            </div>
          </div>

          <div className="card-grid">
            {heroMetrics.map((item) => (
              <div key={item.label} className="metric-card">
                <p className="metric-label">{item.label}</p>
                <p className="metric-value">{item.value}</p>
              </div>
            ))}
            <div className="rounded-2xl border border-[var(--color-line)] bg-white px-4 py-4">
              <p className="metric-label">Current Roles</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <BriefcaseBusiness className="mt-0.5 h-4 w-4 text-[var(--color-brand)]" />
                  Co-Founder at TTLK
                </li>
                <li className="flex items-start gap-2">
                  <BriefcaseBusiness className="mt-0.5 h-4 w-4 text-[var(--color-brand)]" />
                  Student Ambassador + Undergraduate TA
                </li>
                <li className="flex items-start gap-2">
                  <Cpu className="mt-0.5 h-4 w-4 text-[var(--color-brand)]" />
                  Backend and Computer Vision Internship Experience
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section id="about" className="section-shell p-6 md:p-10" {...sectionTransition}>
        <div className="space-y-5">
          <h2 className="section-heading">About</h2>
          <div className="grid gap-6 lg:grid-cols-[1.25fr_1fr]">
            <div className="space-y-4">
              {portfolioData.about.map((paragraph) => (
                <p key={paragraph.slice(0, 25)} className="section-copy">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="card-grid">
              {portfolioData.highlights.map((item) => (
                <div key={item.slice(0, 24)} className="timeline-card">
                  <p className="text-sm leading-relaxed text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section id="experience" className="section-shell p-6 md:p-10" {...sectionTransition}>
        <div className="space-y-5">
          <h2 className="section-heading">Experience</h2>
          <div className="card-grid lg:grid-cols-2">
            {portfolioData.experiences.map((experience) => (
              <article key={`${experience.role}-${experience.organization}`} className="timeline-card space-y-3">
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-brand-strong)]">
                    {experience.period}
                  </p>
                  <h3 className="text-xl font-semibold">{experience.role}</h3>
                  <p className="text-sm text-slate-700">{experience.organization}</p>
                </div>
                <ul className="space-y-2 text-sm text-slate-700">
                  {experience.description.map((line) => (
                    <li key={line.slice(0, 20)} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section id="projects" className="section-shell p-6 md:p-10" {...sectionTransition}>
        <div className="space-y-5">
          <h2 className="section-heading">Selected Projects</h2>
          <div className="card-grid lg:grid-cols-3">
            {portfolioData.projects.map((project) => (
              <article key={project.name} className="project-card space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold leading-tight">{project.name}</h3>
                  <p className="text-sm leading-relaxed text-slate-700">{project.summary}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((skill) => (
                    <span key={skill} className="chip">
                      {skill}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2 text-sm text-slate-700">
                  {project.highlights.map((item) => (
                    <li key={item.slice(0, 26)} className="flex items-start gap-2">
                      <Rocket className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-brand)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section id="skills" className="section-shell p-6 md:p-10" {...sectionTransition}>
        <div className="space-y-5">
          <h2 className="section-heading">Technical Stack</h2>
          <div className="card-grid md:grid-cols-2">
            {portfolioData.skills.map((group) => (
              <article key={group.title} className="timeline-card space-y-3">
                <h3 className="text-lg font-semibold">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section id="contact" className="section-shell p-6 md:p-10" {...sectionTransition}>
        <div className="space-y-5">
          <h2 className="section-heading">Contact</h2>
          <p className="section-copy max-w-3xl">
            I am always open to connecting with people working on interesting products, startups, and technical
            challenges.
          </p>

          <div className="card-grid md:grid-cols-4">
            <a href={portfolioData.contact.github} target="_blank" rel="noreferrer" className="contact-card p-4">
              <div className="flex items-center gap-3">
                <Github className="h-5 w-5 text-[var(--color-brand-strong)]" />
                <div>
                  <p className="text-sm font-semibold">GitHub</p>
                  <p className="text-xs text-slate-600">{portfolioData.contact.github.replace('https://', '')}</p>
                </div>
              </div>
            </a>

            <a
              href={portfolioData.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="contact-card p-4"
            >
              <div className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 text-[var(--color-brand-strong)]" />
                <div>
                  <p className="text-sm font-semibold">LinkedIn</p>
                  <p className="text-xs text-slate-600">imronbek-abduvaliyev</p>
                </div>
              </div>
            </a>

            <a
              href={portfolioData.contact.resume}
              target="_blank"
              rel="noreferrer"
              className="contact-card p-4"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-[var(--color-accent-soft)] p-2 text-[var(--color-brand-strong)]">
                  CV
                </div>
                <div>
                  <p className="text-sm font-semibold">Resume</p>
                  <p className="text-xs text-slate-600">Download PDF</p>
                </div>
              </div>
            </a>

            {portfolioData.contact.email ? (
              <a href={`mailto:${portfolioData.contact.email}`} className="contact-card p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-[var(--color-accent-soft)] p-2">
                    <span className="text-[var(--color-brand-strong)]">@</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Email</p>
                    <p className="text-xs text-slate-600">{portfolioData.contact.email}</p>
                  </div>
                </div>
              </a>
            ) : (
              <div className="contact-card p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-[var(--color-accent-soft)] p-2">
                    <span className="text-[var(--color-brand-strong)]">@</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Email</p>
                    <p className="text-xs text-slate-600">Share preferred email to add a direct mail link.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div>
            <a
              href={portfolioData.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="external-link"
            >
              Start a Conversation
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
