import type { Metadata } from 'next'
import { Manrope, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const headingFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['500', '700'],
})

const bodyFont = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Imronbek Abduvaliev | Full-Stack Developer',
  description:
    'Portfolio of Imronbek Abduvaliev - full-stack developer, builder, and startup-minded computer science student at the University of Arizona.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <div className="site-backdrop" aria-hidden />
        <Navbar />
        <main className="site-main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
