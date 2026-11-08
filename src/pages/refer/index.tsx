import Head from 'next/head'
import HubSpotEmbed from '@/components/forms/hubspot-embed'
import { Container } from '@/components/layout/container'
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/contact'

// HubSpot form "Refer a Friend" (created 2026-11-08). Form IDs are public; env var can override.
const FORM_ID =
    process.env.NEXT_PUBLIC_HUBSPOT_REFER_FORM_ID ??
    'b0c74a6b-bc90-4d16-ad14-6d984470e611'
const FALLBACK_URL =
    'mailto:jbechtold@greatlakesolar.com?subject=A%20referral%20for%20Great%20Lakes%20Solar'

const steps = [
    {
        title: 'Introduce us',
        body: 'Tell us who to talk to. A neighbor, a friend, a business owner, your church or school: anyone can refer.',
    },
    {
        title: 'We take it from there',
        body: 'Jacob reaches out, looks at their bills for free, and tells them honestly whether solar makes sense. We keep you posted.',
    },
    {
        title: 'You both get thanked',
        body: 'If they go solar with us, they get money off their project and your thank-you goes out as soon as they sign.',
    },
]

export default function Refer() {
    return (
        <>
            <Head>
                <title>Refer a Friend | Great Lakes Solar</title>
                <meta
                    name="description"
                    content="Know someone who should go solar? Introduce them to Great Lakes Solar. They get $500 off, and you get $500 or a donation to a nonprofit you choose."
                />
            </Head>
            <Container className="space-y-10 py-6 md:py-10">
                <div className="mx-auto max-w-2xl space-y-4 text-center">
                    <h1>Know someone who should go solar?</h1>
                    <p>
                        Most of our projects come from people like you
                        mentioning us to a friend. Here&apos;s how we say thank
                        you.
                    </p>
                </div>

                <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="rounded-lg border bg-white p-5 text-center shadow-sm">
                        <p className="text-muted-foreground text-sm">
                            Your friend gets
                        </p>
                        <p className="text-3xl font-semibold">$500 off</p>
                        <p className="text-muted-foreground text-sm">
                            $1,000 off for a business, nonprofit or farm
                        </p>
                    </div>
                    <div className="rounded-lg border bg-white p-5 text-center shadow-sm">
                        <p className="text-muted-foreground text-sm">You get</p>
                        <p className="text-3xl font-semibold">$500</p>
                        <p className="text-muted-foreground text-sm">
                            $1,000 when you refer a business
                        </p>
                    </div>
                    <div className="rounded-lg border bg-white p-5 text-center shadow-sm">
                        <p className="text-muted-foreground text-sm">
                            Or give it forward
                        </p>
                        <p className="text-3xl font-semibold">$600</p>
                        <p className="text-muted-foreground text-sm">
                            to a nonprofit you choose ($1,200 for a business)
                        </p>
                    </div>
                </div>

                <div className="mx-auto max-w-4xl">
                    <h2 className="mb-4 text-center">How it works</h2>
                    <ol className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        {steps.map((s, i) => (
                            <li key={s.title} className="space-y-1">
                                <p className="font-semibold">
                                    {i + 1}. {s.title}
                                </p>
                                <p className="text-sm">{s.body}</p>
                            </li>
                        ))}
                    </ol>
                </div>

                <div className="hubspot-card mx-auto w-full max-w-2xl overflow-hidden rounded-lg border bg-white shadow-sm">
                    <HubSpotEmbed
                        formId={FORM_ID}
                        title="Great Lakes Solar refer a friend form"
                        fallbackUrl={FALLBACK_URL}
                        controlsClassName="px-4 pb-6 sm:px-6"
                    />
                </div>

                <div className="text-muted-foreground mx-auto max-w-2xl space-y-2 text-center text-sm">
                    <p>
                        Rather talk it through? Call or text Jacob at{' '}
                        <a
                            href={PHONE_HREF}
                            className="font-semibold whitespace-nowrap underline decoration-blue-500 decoration-2 underline-offset-4 hover:opacity-80"
                        >
                            {PHONE_DISPLAY}
                        </a>
                        .
                    </p>
                    <p>
                        The fine print: the thank-you is paid once your
                        friend&apos;s contract is signed, their deposit is in
                        and the 3-day cancellation window has passed. One
                        referrer per project, named before they sign. No limit
                        on how many people you refer.
                    </p>
                </div>
            </Container>
        </>
    )
}
