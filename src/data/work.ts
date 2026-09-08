import { portfolioData } from './portfolio'

// Project descriptions are based on the existing portfolio, not invented metrics.
// Add screenshots and external links only after their source and permission are verified.
const caseStudies = [
  {
    slug: 'barbershop-booking',
    category: 'Full-stack application',
    discipline: 'Product engineering',
    coverWords: ['A better', 'way to', 'book.'],
    color: 'booking',
    role: 'Full-stack development',
    challenge: 'Appointment booking connects several moving parts: customers, staff schedules, access permissions, and day-to-day operations. The platform brings those workflows into one application.',
    approach: 'I worked across the customer-facing interface and the backend: authentication, role-aware booking flows, scheduling, dashboards, CRUD APIs, and media uploads. The architecture connects a React and Next.js frontend with Node.js, Express, and MongoDB.',
    outcome: 'The implementation brings appointment operations and management tools together, with a backend structured for maintainability and deployment. The emphasis is on reliable workflows rather than a booking screen in isolation.',
    notes: 'Implementation overview. Screenshots, a public demo, and usage metrics are not included in this portfolio yet.',
  },
  {
    slug: 'ttlk-virtual-try-on',
    category: 'AI / Computer vision',
    discipline: 'Co-founder · TTLK',
    coverWords: ['Better fit.', 'Less', 'guesswork.'],
    color: 'fit',
    role: 'Co-founder · Product direction and technical architecture',
    challenge: 'Choosing a size online involves uncertainty. TTLK explores how smart sizing and virtual try-on could give customers more confidence while addressing return friction for e-commerce brands.',
    approach: 'As co-founder, I connect product direction with technical architecture and early-stage execution. The work explores fit prediction, computer-vision workflows, and visual try-on experiences using Python and FastAPI.',
    outcome: 'This is an ongoing product initiative, not a claim of measured return reduction. The focus is translating ML experimentation into a practical experience under real product and business constraints.',
    notes: 'Product initiative in development. No commercial performance or model-accuracy results are claimed here.',
  },
  {
    slug: 'lab-data-workflows',
    category: 'Data / Workflow automation',
    discipline: 'Research operations',
    coverWords: ['Clear data.', 'Better', 'decisions.'],
    color: 'lab',
    role: 'Database management and operational reporting',
    challenge: 'Research operations depend on consistent records and reports that people can actually use. Disconnected data and difficult-to-read summaries add friction to everyday work.',
    approach: 'My work in the Aquaculture Pathology Lab spans database systems, record maintenance, Excel dashboards, and reporting workflows. I organize information so it is easier to track, summarize, and communicate.',
    outcome: 'The work improved record consistency and made dashboard outputs easier to read for day-to-day analysis. Internal research records and operational data are deliberately not published here.',
    notes: 'Workflow overview only. Internal laboratory data and private operational details are not displayed.',
  },
] as const

export const work = caseStudies.map((study, index) => ({ ...portfolioData.projects[index], ...study }))
export type Work = (typeof work)[number]
export const siteUrl = 'https://personal-website-imronbek.vercel.app'
