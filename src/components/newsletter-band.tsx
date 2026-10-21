import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Button } from './ui/button'
import { Card } from './ui/card'

export default function NewsletterBand() {
    return (
        <Card className="mx-auto w-full max-w-3xl items-center gap-4 px-6 text-center md:flex-row md:justify-between md:text-left">
            <div className="space-y-1">
                <h2 className="md:text-left">
                    Sign up for our monthly newsletter
                </h2>
                <p className="text-muted-foreground">
                    Local projects and solar news in plain English.
                </p>
            </div>
            <Button asChild size="lg" className="shrink-0">
                <Link href="/newsletter">
                    Sign up
                    <ChevronRight />
                </Link>
            </Button>
        </Card>
    )
}
