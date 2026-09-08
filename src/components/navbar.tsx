'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const links = [
  { href: '/#projects', label: 'Selected work' },
  { href: '/#about', label: 'About' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#contact', label: 'Let’s talk' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    // Reset hidden mobile state when moving back to a desktop viewport.
    const desktop = window.matchMedia('(min-width: 801px)')
    const resize = () => { if (desktop.matches) setOpen(false) }
    document.addEventListener('keydown', escape)
    desktop.addEventListener('change', resize)
    return () => {
      document.removeEventListener('keydown', escape)
      desktop.removeEventListener('change', resize)
    }
  }, [open])

  return (
    <>
      <a href="#main-content" className="skip-link" onClick={() => setOpen(false)}>Skip to content</a>
      <header className="site-header">
        <div className="nav-inner page-width">
          <Link href="/" className="wordmark" onClick={() => setOpen(false)}><span className="logo-mark" aria-hidden="true">ia</span>Imronbek Abduvaliev</Link>
          <nav className="desktop-nav" aria-label="Main navigation">{links.map((link) => <Link key={link.href} href={link.href} className={link.href === '/#contact' ? 'nav-contact' : ''}>{link.label}{link.href === '/#contact' && <ArrowUpRight size={15} aria-hidden="true" />}</Link>)}</nav>
          <button className="menu-toggle" ref={toggleRef} type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}Menu</button>
        </div>
        {open && <nav id="mobile-navigation" className="mobile-nav page-width" aria-label="Mobile navigation">{links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}</nav>}
      </header>
    </>
  )
}
