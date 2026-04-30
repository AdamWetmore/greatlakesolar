import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, ChevronRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

export default function ContactCard() {
    return (
        <Card className="mx-auto w-full max-w-md md:max-w-xl">
            <CardHeader>
                <CardTitle className="text-center">Get in touch!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                {/* Phone */}
                <Link
                    href="tel:+19522227912"
                    className="group block w-full rounded-xl p-2 transition hover:bg-gray-100"
                >
                    <div className="flex items-center gap-5">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gray-100 shadow-sm transition-all duration-300 group-hover:bg-blue-600 group-hover:shadow-md">
                            <Phone className="h-10 w-10 text-gray-700 transition-colors duration-300 group-hover:text-white" />
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="font-semibold text-gray-900">
                                Phone
                            </span>
                            <span className="text-gray-600">952-222-7912</span>
                        </div>
                        <ChevronRight className="ml-auto opacity-0 group-hover:opacity-100" />
                    </div>
                </Link>
                {/* Email */}
                <Link
                    href="mailto:info@greatlakesolar.com"
                    className="group block w-full rounded-xl p-2 transition hover:bg-gray-100"
                >
                    <div className="flex items-center gap-5">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gray-100 shadow-sm transition-all duration-300 group-hover:bg-blue-600 group-hover:shadow-md">
                            <Mail className="h-10 w-10 text-gray-700 transition-colors duration-300 group-hover:text-white" />
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="font-semibold text-gray-900">
                                Email
                            </span>
                            <span className="text-gray-600">
                                info@greatlakesolar.com
                            </span>
                        </div>
                        <ChevronRight className="ml-auto opacity-0 group-hover:opacity-100" />
                    </div>
                </Link>
                {/* LinkedIn */}
                <Link
                    href="https://www.linkedin.com/companygreat-lakes-solar"
                    target="_blank"
                    className="group block w-full rounded-xl p-2 transition hover:bg-gray-100"
                >
                    <div className="flex items-center gap-5">
                        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gray-100 shadow-sm transition-all duration-300 group-hover:bg-blue-600 group-hover:shadow-md">
                            {/* Default logo */}
                            <Image
                                src="/LI-In-Bug.png"
                                alt="LinkedIn logo"
                                height={40}
                                width={40}
                                className="absolute transition-opacity duration-300 group-hover:opacity-0"
                            />

                            {/* White logo for hover state*/}
                            <Image
                                src="/InBug-White.png"
                                alt="LinkedIn logo white"
                                height={40}
                                width={40}
                                className="absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            />
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="font-semibold text-gray-900">
                                LinkedIn
                            </span>
                            <span className="text-gray-600">
                                @greatlakesolar
                            </span>
                        </div>
                        <ChevronRight className="ml-auto opacity-0 group-hover:opacity-100" />
                    </div>
                </Link>
                {/* Facebook */}
                <Link
                    href="https://facebook.com/people/Great-Lake-Solar/61574343611604"
                    target="_blank"
                    className="group block w-full rounded-xl p-2 transition hover:bg-gray-100"
                >
                    <div className="flex items-center gap-5">
                        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gray-100 shadow-sm transition-all duration-300 group-hover:bg-blue-600 group-hover:shadow-md">
                            {/* Default logo */}
                            <Image
                                src="/Facebook_Logo_Primary.png"
                                alt="Facebook logo"
                                height={40}
                                width={40}
                                className="absolute transition-opacity duration-300 group-hover:opacity-0"
                            />

                            {/* White logo for hover state*/}
                            <Image
                                src="/Facebook_Logo_Secondary.png"
                                alt="Facebook logo white"
                                height={40}
                                width={40}
                                className="absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            />
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="font-semibold text-gray-900">
                                Facebook
                            </span>
                            <span className="text-gray-600">
                                Great Lake Solar
                            </span>
                        </div>
                        <ChevronRight className="ml-auto opacity-0 group-hover:opacity-100" />
                    </div>
                </Link>
            </CardContent>
        </Card>
    )
}
