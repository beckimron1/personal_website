export type ExperienceItem = {
  role: string
  organization: string
  period: string
  description: string[]
}

export type ProjectItem = {
  name: string
  summary: string
  stack: string[]
  highlights: string[]
  links?: { label: string; url: string }[]
}

export type SkillGroup = {
  title: string
  items: string[]
}

export type PortfolioData = {
  name: string
  shortName: string
  headline: string
  location: string
  availability: string
  education: string
  mission: string
  about: string[]
  highlights: string[]
  experiences: ExperienceItem[]
  projects: ProjectItem[]
  skills: SkillGroup[]
  contact: {
    email: string | null
    github: string
    linkedin: string
    resume: string
  }
}

export const portfolioData: PortfolioData = {
  name: 'Imronbek Abduvaliev',
  shortName: 'Imronbek',
  headline: 'Full-Stack Developer, Builder, and Startup-Minded Computer Science Student',
  location: 'University of Arizona, Tucson',
  availability: 'Open to software engineering internships, startup collaboration, and ambitious product teams.',
  education: 'B.S. in Computer Science, University of Arizona',
  mission:
    'I build practical software products that connect strong engineering with real user value, from startup prototypes to production-ready systems.',
  about: [
    'I am currently pursuing my B.S. in Computer Science at the University of Arizona, where I also serve as a Student Ambassador and Undergraduate Teaching Assistant in the Department of Computer Science.',
    'My background spans software engineering, backend development, computer vision, data systems, and product-building. I enjoy turning ideas into useful tools that people can rely on every day.',
  ],
  highlights: [
    'Built full-stack applications with TypeScript, JavaScript, Python, Java, React, Next.js, Node.js, Express, FastAPI, MongoDB, and Docker.',
    'Designed and implemented a full-stack barbershop booking platform with auth, booking workflows, dashboards, media upload, and CRUD APIs.',
    'Combines startup execution with technical depth through internships, teaching, and co-founding efforts.',
  ],
  experiences: [
    {
      role: 'Co-Founder',
      organization: 'TTLK',
      period: 'Current',
      description: [
        'Building an AI-powered smart sizing and virtual try-on product for e-commerce brands.',
        'Driving product direction, technical architecture, and early-stage execution.',
      ],
    },
    {
      role: 'Backend Developer Intern and Computer Vision Engineer',
      organization: 'OYStartech LLC',
      period: 'Current / Previous',
      description: [
        'Developed backend services and APIs to support internal product workflows.',
        'Worked on computer vision datasets, annotation pipelines, and model evaluation experiments.',
      ],
    },
    {
      role: 'Administrative Student Intern',
      organization: 'Aquaculture Pathology Lab',
      period: 'Current',
      description: [
        'Manages lab database systems and reporting workflows for operational visibility.',
        'Maintains Excel dashboards and data summaries used for decision-making and communication.',
      ],
    },
    {
      role: 'Student Ambassador and Undergraduate Teaching Assistant',
      organization: 'Department of Computer Science, University of Arizona',
      period: 'Current',
      description: [
        'Supports students through mentorship, communication, and community engagement.',
        'Assists instructional teams with coursework and technical learning support.',
      ],
    },
  ],
  projects: [
    {
      name: 'Barbershop Booking Platform',
      summary:
        'A full-stack booking platform focused on reliable appointment operations for barbershops and customers.',
      stack: ['TypeScript', 'React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Docker'],
      highlights: [
        'Implemented authentication and role-aware booking workflows.',
        'Built dashboards, scheduling logic, CRUD APIs, and media upload handling.',
        'Structured backend architecture for production-oriented deployment and maintainability.',
      ],
    },
    {
      name: 'TTLK Smart Sizing and Virtual Try-On',
      summary:
        'An AI product initiative for e-commerce brands to improve sizing confidence and reduce return friction.',
      stack: ['Python', 'FastAPI', 'Computer Vision', 'Data Pipelines', 'Product Strategy'],
      highlights: [
        'Explores fit prediction and visual try-on user experiences.',
        'Connects ML experimentation with practical product constraints and business goals.',
      ],
    },
    {
      name: 'Lab Data and Reporting Workflows',
      summary:
        'Internal systems and dashboards to improve data tracking and reporting quality in a research environment.',
      stack: ['Excel', 'Database Management', 'Workflow Automation', 'Reporting'],
      highlights: [
        'Improved consistency of lab records and operational reporting.',
        'Created easier-to-read dashboard outputs for day-to-day analysis.',
      ],
    },
  ],
  skills: [
    {
      title: 'Languages and Core',
      items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL'],
    },
    {
      title: 'Frontend',
      items: ['React', 'Next.js', 'Tailwind CSS', 'Responsive UI Architecture'],
    },
    {
      title: 'Backend and APIs',
      items: ['Node.js', 'Express', 'FastAPI', 'REST API Design', 'Authentication and Authorization'],
    },
    {
      title: 'Data and Deployment',
      items: ['MongoDB', 'Docker', 'Computer Vision Data Workflows', 'Model Evaluation'],
    },
  ],
  contact: {
    email: "abduvaliev@arizona.edu",
    github: 'https://github.com/beckimron1',
    linkedin: 'https://www.linkedin.com/in/imronbek-abduvaliyev',
    resume: '/resume-imronbek-abduvaliev.pdf',
  },
}
