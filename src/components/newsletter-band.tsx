import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Button } from './ui/button'

export default function NewsletterBand() {
    return (
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-4 rounded-lg border p-6 text-center shadow-sm md:flex-row md:justify-between md:text-left">
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
        </div>
    )
}
