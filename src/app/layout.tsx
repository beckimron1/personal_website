import type { Metadata } from 'next'
import { Manrope, Instrument_Serif } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { siteUrl } from '@/data/work'

const bodyFont = Manrope({ subsets: ['latin'], variable: '--font-body', weight: ['400', '500', '600', '700', '800'], display: 'swap' })
const editorialFont = Instrument_Serif({ subsets: ['latin'], variable: '--font-editorial', weight: '400', style: ['normal', 'italic'], display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website', locale: 'en_US', url: '/', siteName: 'Imronbek Abduvaliev',
    title: 'Imronbek Abduvaliev | Ideas into useful software.',
    description: 'Full-stack development, computer vision, and practical products. Explore selected work by Imronbek Abduvaliev.',
  },
  twitter: { card: 'summary_large_image', title: 'Imronbek Abduvaliev | Full-Stack Developer', images: ['/opengraph-image'] },
  title: { default: 'Imronbek Abduvaliev | Full-Stack Developer', template: '%s | Imronbek Abduvaliev' },
  description: 'Full-stack developer and computer science student at the University of Arizona. Explore my work in web applications, computer vision, and research operations.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${bodyFont.variable} ${editorialFont.variable}`}>
        <Navbar />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
