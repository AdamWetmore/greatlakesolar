import Link from 'next/link'
import Image from 'next/image'
import { Home, Users, Building, Ellipsis, ChevronRight } from 'lucide-react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from './ui/card'
import { Button } from './ui/button'
import IntakeForm from './forms/intake'

export default function HeroCard() {
    return (
        <Card className="mx-auto w-full max-w-md md:max-w-xl lg:max-w-2xl">
            <Image
                src="/PrimaryLogo.svg"
                alt="placeholder for GLS logo"
                width={1000}
                height={1000}
                className="mx-auto w-40 md:w-56 lg:w-64 xl:w-72"
            />
            <CardHeader className="text-center">
                <CardTitle className="text-xl">
                    Minnesota's Local Commercial Solar Expert
                </CardTitle>
                <CardDescription className="text-md">
                    Great Lakes Solar helps businesses, non-profits, schools,
                    and institutions across the Midwest install solar and
                    battery systems that cut energy costs, add resiliency, and
                    make a lasting difference. You'll work directly with founder
                    Jacob Bechtold from day one.
                </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-evenly">
                <IntakeForm />
                <Link href="/resources#process">
                    <Button size="lg" variant="outline">
                        See how it works
                    </Button>
                </Link>
            </CardContent>
        </Card>
    )
}
