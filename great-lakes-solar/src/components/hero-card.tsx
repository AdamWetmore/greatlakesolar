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

export default function HeroCard() {
    return (
        <Card className="mx-auto sm:w-full md:w-xl lg:w-2xl xl:w-3xl">
            <Image
                src="/PrimaryLogo.svg"
                alt="placeholder for GLS logo"
                width={1000}
                height={1000}
                className="mx-auto"
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
                    <p className="text-red-500">
                        How should someone claim the free assessment?
                    </p>
                </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
                <Link href="">
                    <Button>
                        Schedule your<strong>FREE</strong>Assessment
                        <ChevronRight />
                    </Button>
                </Link>
            </CardContent>
        </Card>
    )
}
