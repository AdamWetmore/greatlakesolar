import Link from 'next/link'
import { Home, Users, Building, Ellipsis, ChevronRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'

export default function HeroCard() {
    return (
        <Card className="mx-auto max-w-xl">
            <CardHeader>
                <CardTitle className="flex justify-center gap-1">
                    <span>What can Great Lakes Solar do for a</span>
                    <Ellipsis />
                </CardTitle>
            </CardHeader>

            <CardContent className="flex justify-center space-x-3">
                {/* Homeowner */}
                <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="group flex w-40 flex-col p-12"
                >
                    <Link
                        href="/resources/residential"
                        className="flex flex-row items-center"
                    >
                        <ChevronRight className="opacity-0" />
                        <div className="mr-auto flex flex-col items-center gap-2">
                            <Home />
                            <span className="text-lg">Homeowner</span>
                        </div>
                        <ChevronRight className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </Link>
                </Button>

                {/* Non-Profit */}
                <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="group flex w-40 flex-col p-12"
                >
                    <Link
                        href="/resources/non-profit"
                        className="flex flex-row items-center"
                    >
                        <ChevronRight className="opacity-0" />
                        <div className="mr-auto flex flex-col items-center gap-2">
                            <Users />
                            <span className="text-lg">Non-Profit</span>
                        </div>
                        <ChevronRight className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </Link>
                </Button>

                {/* Business */}
                <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="group flex w-40 flex-col p-12"
                >
                    <Link
                        href="/resources/commercial"
                        className="flex flex-row items-center"
                    >
                        <ChevronRight className="opacity-0" />
                        <div className="mr-auto flex flex-col items-center gap-2">
                            <Building />
                            <span className="text-lg">Business</span>
                        </div>
                        <ChevronRight className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </Link>
                </Button>
            </CardContent>
        </Card>
    )
}
