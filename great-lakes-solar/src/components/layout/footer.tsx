import Link from 'next/link'
import Image from 'next/image'
import { Container } from './container'
import { Mail, Phone } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-background border-border border-t py-6">
            <Container>
                <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-between">
                    <Link href="/" className="flex items-center space-x-2">
                        <Image
                            src="/SecondaryLogo.svg"
                            alt="Great Lakes Solar Logo"
                            width={150}
                            height={150}
                            priority
                        />
                    </Link>
                    <div className="flex items-center gap-6">
                        <Link
                            href="https://www.linkedin.com/companygreat-lakes-solar"
                            target="_blank"
                        >
                            <Image
                                src="/LI-In-Bug.png"
                                alt="LinkedIn Logo"
                                width={32}
                                height={32}
                            />
                        </Link>

                        <Link
                            href="https://facebook.com/people/Great-Lake-Solar/61574343611604"
                            target="_blank"
                        >
                            <Image
                                src="/Facebook_Logo_Primary.png"
                                alt="Facebook Logo"
                                width={32}
                                height={32}
                            />
                        </Link>
                    </div>
                    <div className="text-muted-foreground flex flex-col items-center justify-center">
                        <Link
                            className="flex items-center gap-2"
                            href="tel:+19522227912"
                        >
                            952-222-7912
                            <Phone className="h-4 w-4" />
                        </Link>
                        <Link
                            href="mailto:info@greatlakesolar.com"
                            className="flex items-center gap-2"
                        >
                            info@greatlakesolar.com
                            <Mail className="h-4 w-4" />
                        </Link>
                    </div>
                    <div className="flex space-x-4">
                        <Link
                            href="/about"
                            className="text-muted-foreground hover:text-foreground text-sm"
                        >
                            About
                        </Link>
                        <Link
                            href="/resources"
                            className="text-muted-foreground hover:text-foreground text-sm"
                        >
                            Resources
                        </Link>
                        <Link
                            href="/contact"
                            className="text-muted-foreground hover:text-foreground text-sm"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
                <div className="text-muted-foreground mt-4 text-center text-sm">
                    &copy; {new Date().getFullYear()} Great Lakes Solar. All
                    rights reserved.
                </div>
            </Container>
        </footer>
    )
}
