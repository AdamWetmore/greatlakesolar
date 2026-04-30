import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
    const pathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navLinkStyle = (path: string) =>
        `px-3 py-2 transition-colors ${
            pathname === path ? 'text-blue-600' : 'hover:text-blue-600'
        }`

    return (
        <div className="bg-background border-border sticky top-0 z-60 border-b px-3 py-2 text-lg">
            <div className="mx-auto flex max-w-7xl items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src="/Bug.svg"
                        alt="Great Lakes Solar Logo"
                        width={100}
                        height={100}
                        priority
                    />
                    <div>Great Lakes Solar</div>
                </Link>
                <div className="hidden md:block">
                    <nav>
                        <Link href="/" className={navLinkStyle('/')}>
                            Home
                        </Link>
                        <Link href="/about" className={navLinkStyle('/about')}>
                            About
                        </Link>
                        <Link
                            href="/resources"
                            className={navLinkStyle('/resources')}
                        >
                            Resources
                        </Link>
                        <Link
                            href="/contact"
                            className={navLinkStyle('/contact')}
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
                <button
                    className="block md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            {isMenuOpen && (
                <div className="mt-2 space-y-2 md:hidden">
                    <nav className="flex flex-col items-start">
                        <Link
                            href="/"
                            className={navLinkStyle('/')}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className={navLinkStyle('/about')}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            href="/resources"
                            className={navLinkStyle('/resources')}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Resources
                        </Link>
                        <Link
                            href="/contact"
                            className={navLinkStyle('/contact')}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
            )}
        </div>
    )
}
