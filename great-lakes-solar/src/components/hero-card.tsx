import Link from 'next/link'
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
        <Card className="mx-auto max-w-xl">
            <CardHeader>
                <CardTitle>Minnesota's Local Commercial Solar Expert</CardTitle>
                <CardDescription>
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
            <CardContent className="flex space-x-3">
                <Link href="">
                    <Button>
                        Schedule your<strong>FREE</strong>Assessment
                        <ChevronRight />
                    </Button>
                </Link>
                <Link href="/resources#our-process">
                    <Button variant="secondary">Our Process</Button>
                </Link>
            </CardContent>
        </Card>
    )
}
