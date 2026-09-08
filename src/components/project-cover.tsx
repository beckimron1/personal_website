import type { Work } from '@/data/work'

export default function ProjectCover({ project, index }: { project: Work; index: number }) {
  return (
    <div className={`project-cover cover-${project.color}`} aria-hidden="true">
      <div className="cover-top eyebrow"><span>{project.discipline}</span><span>0{index + 1}</span></div>
      <div className="cover-lettering">{project.coverWords.map((word, i) => <span key={word} className={i === 1 ? 'serif-line' : ''}>{word}</span>)}</div>
      <div className="cover-bottom eyebrow"><span>Project notes</span><span>Imronbek Abduvaliev</span></div>
    </div>
  )
}
