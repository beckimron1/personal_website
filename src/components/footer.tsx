import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="site-footer page-width"><Link href="/" className="footer-name">Imronbek Abduvaliev<span aria-hidden="true">.</span></Link><p>Thoughtfully built with Next.js.</p><a href="#main-content" className="back-top">Back to top <span aria-hidden="true">↑</span></a></footer>
  )
}
