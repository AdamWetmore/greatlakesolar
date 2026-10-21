import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Container } from './container'
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from '@/components/ui/dropdown-menu'

export default function Header() {
    const pathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navLinkStyle = (path: string) =>
        `px-3 py-2 text-sm md:text-base transition-colors ${
            pathname === path ? 'text-blue-600' : 'hover:text-blue-600'
        }`
    const resourcesActive =
        (pathname?.startsWith('/resources') ?? false) || pathname === '/newsletter'

    return (
        <div className="bg-background border-border sticky top-0 z-60 border-b">
            <Container className="flex items-center justify-between py-3">
                <Link
                    href="/"
                    aria-label="Great Lakes Solar home"
                    className="flex items-center space-x-2"
                >
                    <Image
                        src="/Bug.svg"
                        alt=""
                        width={100}
                        height={100}
                        priority
                        className="hidden md:block"
                    />
                    <span
                        aria-hidden="true"
                        className="text-sm whitespace-nowrap"
                    >
                        <span className="text-base">G</span>REAT{' '}
                        <span className="text-base">L</span>AKES{' '}
                        <span className="text-base">S</span>OLAR
                    </span>
                </Link>
                <div className="hidden md:block">
                    <nav>
                        <Link href="/" className={navLinkStyle('/')}>
                            Home
                        </Link>
                        <Link href="/about" className={navLinkStyle('/about')}>
                            About
                        </Link>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button
                                    type="button"
                                    className={`${navLinkStyle('/resources')} focus-visible:outline-ring inline-flex items-center gap-1 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 ${resourcesActive ? 'text-blue-600' : ''}`}
                                >
                                    Resources
                                    <ChevronDown size={16} aria-hidden="true" />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                align="start"
                                className="bg-background text-foreground z-70 min-w-40"
                            >
                                <DropdownMenuItem asChild>
                                    <Link href="/resources">All</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/resources/blog">Blog</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/newsletter">Newsletter</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/resources#commercial">
                                        Commercial
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/resources#residential">
                                        Residential
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
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
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </Container>
            {isMenuOpen && (
                <div className="border-border mt-3 border-t pt-3 md:hidden">
                    <nav className="flex flex-col gap-2">
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
                        <div
                            role="group"
                            aria-label="Resources"
                            className="flex flex-col gap-2"
                        >
                            <span className="px-3 py-2 text-sm font-semibold">
                                Resources
                            </span>
                            <Link
                                href="/resources"
                                className={`${navLinkStyle('/resources')} ml-3`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                All
                            </Link>
                            <Link
                                href="/resources/blog"
                                className={`${navLinkStyle('/resources/blog')} ml-3`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Blog
                            </Link>
                            <Link
                                href="/newsletter"
                                className={`${navLinkStyle('/newsletter')} ml-3`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Newsletter
                            </Link>
                            <Link
                                href="/resources#commercial"
                                className={`${navLinkStyle('/resources')} ml-3`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Commercial
                            </Link>
                            <Link
                                href="/resources#residential"
                                className={`${navLinkStyle('/resources')} ml-3`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Residential
                            </Link>
                        </div>
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
