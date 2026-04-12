import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
    const pathname = usePathname()

    const navLinkStyle = (path: string) =>
        `px-3 py-2 text-md font-medium transition-colors ${
            pathname === path
                ? 'text-blue-600'
                : 'text-gray-700 hover:text-blue-600'
        }`

    return (
        <div className="flex items-center justify-between px-3 py-2">
            <Link href="/" className="flex items-center space-x-2">
                <Image
                    src="/vercel.svg"
                    alt="Company logo placeholder"
                    width={50}
                    height={50}
                    priority
                />
                <div>Great Lakes Solar</div>
            </Link>
            <nav>
                <Link href="/" className={navLinkStyle('/')}>
                    Home
                </Link>
                <Link href="/about" className={navLinkStyle('/about')}>
                    About
                </Link>
                <Link href="/resources" className={navLinkStyle('/resources')}>
                    Resources
                </Link>
                <Link href="/contact" className={navLinkStyle('/contact')}>
                    Contact
                </Link>
            </nav>
        </div>
    )
}
