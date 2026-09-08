import Link from 'next/link'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'
import { work } from '@/data/work'
import ProjectCover from '@/components/project-cover'

export default function Home() {
  return (
    <>
      <section id="home" className="hero page-width" aria-labelledby="hero-heading">
        <div className="hero-topline eyebrow">
          <span>Independent thinking. Practical engineering.</span>
          <span className="location">Tucson, Arizona <span aria-hidden="true">↗</span></span>
        </div>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="intro-label">Hello, I’m Imronbek <span className="quiet">— you can call me Beck.</span></p>
            <h1 id="hero-heading">Ideas into<br /><em>useful</em> software<span className="accent-period">.</span></h1>
            <p className="hero-description">Full-stack developer and computer science student. I build products that connect thoughtful engineering with the way people actually work.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#projects">Explore my work <ArrowDown size={17} aria-hidden="true" /></a>
              <a className="text-link" href={portfolioData.contact.resume} target="_blank" rel="noreferrer">Download résumé <ArrowUpRight size={18} aria-hidden="true" /></a>
            </div>
            <p className="availability"><span className="status-dot" aria-hidden="true" />Open to internships &amp; startup collaborations</p>
          </div>
          <div className="identity-panel" aria-label="Personal mark: IA. Engineering with a product mindset.">
            <div className="identity-top eyebrow"><span>Personal portfolio</span><span>IA / 01</span></div>
            <div className="monogram" aria-hidden="true">i<span>a</span><span className="monogram-dot" /></div>
            <div className="identity-bottom"><p>Engineering with<br /><em>a product mindset.</em></p><span className="identity-star" aria-hidden="true">✳</span></div>
          </div>
        </div>
        <div className="context-strip">
          <p><span className="eyebrow">Learning</span>Computer Science · University of Arizona</p>
          <p><span className="eyebrow">Building</span>Full-stack products &amp; AI experiences</p>
          <p><span className="eyebrow">Connecting</span>Engineering, research &amp; startups</p>
        </div>
      </section>

      <section id="projects" className="work-section page-width" aria-labelledby="work-heading">
        <div className="section-topline"><span className="eyebrow">01 / Selected work</span><span className="eyebrow quiet">From interface to infrastructure</span></div>
        <div className="section-intro"><h2 id="work-heading">Built for <em>real life.</em></h2><p>Booking workflows, computer vision, and research operations. Different problems. The same practical mindset.</p></div>
        <div className="project-list">
          {work.map((project, index) => (
            <article className={`work-card ${index === 0 ? 'work-featured' : ''}`} key={project.slug}>
              <Link href={`/work/${project.slug}`} className="cover-link" aria-label={`Read case study: ${project.name}`}>
                <ProjectCover project={project} index={index} />
                <span className="cover-action" aria-hidden="true"><ArrowUpRight size={23} /></span>
              </Link>
              <div className="work-info">
                <p className="eyebrow work-category">{project.category}</p>
                <h3><Link href={`/work/${project.slug}`}>{project.name}</Link></h3>
                <p>{project.summary}</p>
                <ul className="tags" aria-label={`${project.name} technologies`}>{project.stack.slice(0, 4).map((item) => <li key={item}>{item}</li>)}</ul>
                <Link className="text-link case-link" href={`/work/${project.slug}`}>Read project notes <ArrowUpRight size={17} aria-hidden="true" /><span className="sr-only">: {project.name}</span></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="about-section" aria-labelledby="about-heading">
        <div className="page-width about-grid">
          <div><p className="eyebrow">02 / A little about me</p><h2 id="about-heading">Curious by nature.<br /><em>Builder by choice.</em></h2><div className="about-signature" aria-hidden="true">Imronbek.</div></div>
          <div className="about-copy">
            <p className="about-lede">I like the space between<br className="desktop-break" /> “what if” and <em>“it works.”</em></p>
            <p>{portfolioData.about[0]}</p><p>{portfolioData.about[1]}</p>
            <a href={portfolioData.contact.linkedin} className="text-link" target="_blank" rel="noreferrer">More about my background <ArrowUpRight size={17} aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section id="experience" className="experience-section page-width" aria-labelledby="experience-heading">
        <div className="section-topline"><span className="eyebrow">03 / Experience</span></div>
        <div className="section-intro"><h2 id="experience-heading">A few places<br />I’ve <em>contributed.</em></h2><p>From early-stage products to research labs and the classroom.</p></div>
        <div className="experience-list">
          {portfolioData.experiences.map((experience, index) => (
            <article className="experience-row" key={experience.organization}>
              <span className="experience-number eyebrow" aria-hidden="true">0{index + 1}</span>
              <div className="experience-title"><h3>{experience.organization}</h3><p>{experience.role}</p></div>
              <ul>{experience.description.map((line) => <li key={line}>{line}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="skills-section page-width" aria-labelledby="skills-heading">
        <div className="skills-intro"><p className="eyebrow">04 / The toolkit</p><h2 id="skills-heading">The right tools.<br /><em>Not just more tools.</em></h2><p>Across the interface, the API, and the data behind it.</p></div>
        <div className="skill-list">{portfolioData.skills.map((group) => <div className="skill-row" key={group.title}><h3>{group.title}</h3><p>{group.items.join(' / ')}</p></div>)}</div>
      </section>

      <section id="contact" className="contact-section" aria-labelledby="contact-heading">
        <div className="page-width">
          <div className="contact-top eyebrow"><span>05 / Let’s connect</span><span className="contact-availability"><span className="status-dot" aria-hidden="true" /> Open to opportunities</span></div>
          <div className="contact-grid"><h2 id="contact-heading">Have something<br /><em>worth building?</em></h2><div><p>I’m interested in software engineering internships, thoughtful product teams, and people turning ambitious ideas into useful things.</p><a className="button button-lime" href={portfolioData.contact.email ? `mailto:${portfolioData.contact.email}` : portfolioData.contact.linkedin}>Let’s talk <ArrowUpRight size={20} aria-hidden="true" /></a></div></div>
          <div className="contact-bottom"><a className="contact-email" href={portfolioData.contact.email ? `mailto:${portfolioData.contact.email}` : portfolioData.contact.linkedin}>{portfolioData.contact.email || 'Connect on LinkedIn'}</a><div className="social-links"><a href={portfolioData.contact.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={16} aria-hidden="true" /></a><a href={portfolioData.contact.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={16} aria-hidden="true" /></a></div></div>
        </div>
      </section>
    </>
  )
}
