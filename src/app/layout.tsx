import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { ThemeProvider } from 'next-themes'

export const metadata = {
    title: 'Diyorbek Kholmirzaev | Portfolio',
    description: 'Web Developer & Computer Vision Enthusiast',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-500">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />
            <main className="container mx-auto px-4 py-8">{children}</main>
            <Footer />
        </ThemeProvider>
        </body>
        </html>
    )
}
