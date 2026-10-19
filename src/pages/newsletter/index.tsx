import HubSpotEmbed from '@/components/forms/hubspot-embed'
import { Container } from '@/components/layout/container'
import { blogPosts } from '@/models/blog'
import Link from 'next/link'

const FORM_ID = process.env.NEXT_PUBLIC_HUBSPOT_NEWSLETTER_FORM_ID
const FORM_URL = 'https://41zjvy.share-na2.hsforms.com/2Pxb7dJgvRQmm1IrS4Kw5hw'

const latestPost = blogPosts[0]

export default function Newsletter() {
    return (
        <section className="py-10 md:py-14">
            <Container className="space-y-8">
                <div className="mx-auto max-w-2xl space-y-4">
                    <h1>A monthly note from Great Lakes Solar</h1>
                    <p>
                        Once a month I send a short email about what we&apos;re
                        working on and what&apos;s changing in solar.
                        Here&apos;s what you&apos;ll get:
                    </p>
                    <ul className="list-disc space-y-1 pl-6">
                        <li>
                            Real projects we&apos;re building and how they came
                            together
                        </li>
                        <li>
                            Policy and incentive changes, explained in plain
                            English
                        </li>
                        <li>The occasional story from the road</li>
                    </ul>
                    <p className="font-semibold">Jacob Bechtold, Founder</p>
                    {latestPost && (
                        <p className="text-sm">
                            Want a feel for it first? Read our latest blog post:{' '}
                            <Link
                                href={`/resources/blog/${latestPost.slug}`}
                                className="underline decoration-blue-500 decoration-2 underline-offset-4 hover:opacity-80"
                            >
                                {latestPost.title}
                            </Link>
                        </p>
                    )}
                </div>
                <div className="hubspot-card mx-auto w-full max-w-2xl overflow-hidden rounded-lg border bg-white shadow-sm">
                    <HubSpotEmbed
                        formId={FORM_ID}
                        title="Great Lakes Solar newsletter signup form"
                        fallbackUrl={FORM_URL}
                        controlsClassName="px-4 pb-6 sm:px-6"
                    />
                </div>
            </Container>
        </section>
    )
}
