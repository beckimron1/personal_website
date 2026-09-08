import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { work } from '@/data/work'
import { portfolioData } from '@/data/portfolio'
import ProjectCover from '@/components/project-cover'

type Props = { params: Promise<{ slug: string }> }
export const dynamicParams = false
export function generateStaticParams() { return work.map(({ slug }) => ({ slug })) }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = work.find((item) => item.slug === slug)
  if (!project) notFound()
  return {
    title: project.name,
    description: project.summary,
    alternates: { canonical: `/work/${slug}` },
    openGraph: { title: `${project.name} | Imronbek Abduvaliev`, description: project.summary, url: `/work/${slug}`, images: ['/opengraph-image'] },
  }
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params
  const index = work.findIndex((item) => item.slug === slug)
  const project = work[index]
  if (!project) notFound()
  const nextProject = work[(index + 1) % work.length]
  return (
    <article className="case-study page-width">
      <Link className="text-link back-link" href="/#projects"><ArrowLeft size={17} aria-hidden="true" />Back to selected work</Link>
      <header className="case-header"><p className="eyebrow">Project notes / {project.category}</p><h1>{project.name}</h1><p className="case-summary">{project.summary}</p><dl className="case-meta"><div><dt>My contribution</dt><dd>{project.role}</dd></div><div><dt>Toolkit</dt><dd>{project.stack.join(' · ')}</dd></div></dl></header>
      <ProjectCover project={project} index={index} />
      <div className="case-body">
        <section><h2>The challenge</h2><p>{project.challenge}</p></section>
        <section><h2>What I built</h2><p>{project.approach}</p><ul>{project.highlights.map((line) => <li key={line}>{line}</li>)}</ul></section>
        <section><h2>{project.color === 'fit' ? 'Where it stands' : 'The outcome'}</h2><p>{project.outcome}</p><p className="case-note">{project.notes}</p></section>
        <a className="text-link" href={portfolioData.contact.email ? `mailto:${portfolioData.contact.email}` : portfolioData.contact.linkedin}>Ask me about this project <ArrowUpRight size={17} aria-hidden="true" /></a>
      </div>
      <div className="next-project"><p className="eyebrow">Keep exploring</p><Link href={`/work/${nextProject.slug}`}>{nextProject.name}<ArrowUpRight aria-hidden="true" /></Link></div>
    </article>
  )
}
