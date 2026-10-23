import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ChevronDown, Menu, Phone, X } from 'lucide-react'
import { Container } from './container'
import IntakeForm from '@/components/forms/intake'
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/contact'
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
        (pathname?.startsWith('/resources') ?? false) ||
        pathname === '/newsletter'

    return (
        <div className="bg-background border-border sticky top-0 z-60 border-b">
            <Container className="grid grid-cols-[1fr_auto_auto] items-center gap-3 py-3 sm:flex sm:justify-between">
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
                <div className="hidden lg:block">
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
                {/* Tap-to-call: icon only on phones, full number from md up. */}
                <a
                    href={PHONE_HREF}
                    aria-label={`Call Great Lakes Solar at ${PHONE_DISPLAY}`}
                    className="focus-visible:outline-ring flex size-11 items-center justify-center gap-2 rounded-md transition-colors hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 sm:ml-auto md:w-auto md:px-2 lg:ml-0 lg:w-11 lg:px-0 xl:w-auto xl:px-2"
                >
                    <Phone size={20} aria-hidden="true" />
                    <span className="hidden text-sm whitespace-nowrap md:inline lg:hidden xl:inline">
                        {PHONE_DISPLAY}
                    </span>
                </a>
                <IntakeForm
                    label="Free Assessment"
                    triggerClassName="order-last col-span-3 w-full border border-primary-foreground/30 sm:order-none sm:w-auto"
                />
                <button
                    type="button"
                    className="focus-visible:outline-ring flex size-11 items-center justify-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 lg:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </Container>
            {isMenuOpen && (
                <div className="border-border mt-3 border-t pt-3 lg:hidden">
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
