'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function Navbar() {
    const pathname = usePathname()
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/experience', label: 'Experience' },
        { href: '/skills', label: 'Skills' },
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' },
    ]

    return (
        <nav className="sticky top-0 z-50 nav-blur backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
            <div className="container mx-auto flex items-center justify-between px-4 py-3">
                <Link href="/" className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                    Diyorbek Kholmirzaev
                </Link>

                {/* Navigation Links */}
                <div className="flex items-center gap-6">
                    {navLinks.map(link => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`transition-colors duration-200 ${
                                pathname === link.href
                                    ? 'text-indigo-600 dark:text-indigo-400 font-semibold'
                                    : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}

                    {mounted && (
                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? (
                                <Sun className="w-5 h-5 text-yellow-400" />
                            ) : (
                                <Moon className="w-5 h-5 text-indigo-500" />
                            )}
                        </button>
                    )}
                </div>
            </div>
        </nav>
    )
}
