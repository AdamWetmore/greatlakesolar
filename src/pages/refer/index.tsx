import Head from 'next/head'
import Image from 'next/image'
import {
    ArrowDown,
    ArrowRight,
    ChevronRight,
    Handshake,
    Sun,
    UserRound,
} from 'lucide-react'
import HubSpotEmbed from '@/components/forms/hubspot-embed'
import { Container } from '@/components/layout/container'
import { Button } from '@/components/ui/button'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/contact'

// HubSpot form "Refer a Friend" (created 2026-11-08). Form IDs are public; env var can override.
const FORM_ID =
    process.env.NEXT_PUBLIC_HUBSPOT_REFER_FORM_ID ??
    'b0c74a6b-bc90-4d16-ad14-6d984470e611'
const FALLBACK_URL =
    'mailto:jbechtold@greatlakesolar.com?subject=A%20referral%20for%20Great%20Lakes%20Solar'

const steps = [
    {
        icon: UserRound,
        title: 'You introduce us',
        body: 'A friend, neighbor, business or church.',
    },
    {
        icon: Handshake,
        title: 'Jacob reaches out',
        body: 'A free, honest look at their bills.',
    },
    {
        icon: Sun,
        title: 'They go solar',
        body: '$500 off for them. $500 for you.',
    },
]

const faqs = [
    {
        q: 'When do I get my thank-you?',
        a: "As soon as your friend's contract is signed, their deposit is in and the 3-day cancellation window has passed. We'll let you know it's on the way.",
    },
    {
        q: 'What if I refer a business?',
        a: 'Businesses, nonprofits, farms and schools get $1,000 off, and you get $1,000.',
    },
    {
        q: 'Can I donate it instead?',
        a: "Yes. We'll donate $600 ($1,200 for a business) to the nonprofit, church or school you choose. We ask which you'd like when they sign.",
    },
    {
        q: 'Who can refer?',
        a: "Anyone: past clients, friends, neighbors, newsletter readers. There's no limit on how many people you refer.",
    },
    {
        q: 'The fine print',
        a: 'One referrer per project, named before your friend signs. Adding to an existing system later (like a battery) does not earn a second thank-you. Bank and public employees, and staff referring their own organization, receive a donation to the organization instead of cash.',
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

            <Container className="grid grid-cols-1 items-center gap-8 py-8 md:grid-cols-2 md:py-12">
                <div className="space-y-4 text-center md:text-left">
                    <p className="text-sm font-semibold tracking-wide text-blue-600 uppercase">
                        Refer a friend
                    </p>
                    <h1 className="md:text-left">
                        <span className="whitespace-nowrap">Give $500.</span>{' '}
                        <span className="whitespace-nowrap">Get $500.</span>
                    </h1>
                    <p>
                        Know someone who should go solar? Introduce us. They get
                        $500 off, and you get $500 or a $600 donation to a
                        nonprofit you pick.
                    </p>
                    <p className="text-muted-foreground text-sm">
                        Referring a business? It&apos;s $1,000 each.
                    </p>
                    <Button asChild size="lg">
                        <a href="#refer-form">
                            Introduce someone <ChevronRight />
                        </a>
                    </Button>
                </div>
                <figure className="space-y-2">
                    <Image
                        src="/blog/jacob-on-nghias-auto-roof.jpg"
                        alt="Jacob Bechtold on the roof of Nghia's Auto during the solar install"
                        width={1600}
                        height={1200}
                        priority
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="h-auto w-full rounded-lg object-cover shadow-sm"
                    />
                    <figcaption className="text-muted-foreground text-center text-xs">
                        Jacob on the roof at Nghia&apos;s Auto, North
                        Minneapolis
                    </figcaption>
                </figure>
            </Container>

            <section className="bg-muted/40 border-y py-8">
                <Container>
                    <h2 className="sr-only">How it works</h2>
                    <ol className="mx-auto flex max-w-4xl flex-col items-center gap-2 md:flex-row md:items-start md:gap-0">
                        {steps.map((s, i) => (
                            <li
                                key={s.title}
                                className="flex flex-col items-center md:flex-1 md:flex-row md:items-start"
                            >
                                <div className="flex max-w-56 flex-col items-center space-y-2 text-center md:flex-1">
                                    <span className="flex size-14 items-center justify-center rounded-full bg-blue-600 text-white">
                                        <s.icon
                                            className="size-7"
                                            aria-hidden
                                        />
                                    </span>
                                    <p className="font-semibold">
                                        {i + 1}. {s.title}
                                    </p>
                                    <p className="text-muted-foreground text-sm">
                                        {s.body}
                                    </p>
                                </div>
                                {i < steps.length - 1 && (
                                    <>
                                        <ArrowRight
                                            aria-hidden
                                            className="mt-4 hidden size-6 shrink-0 text-blue-600 md:block"
                                        />
                                        <ArrowDown
                                            aria-hidden
                                            className="my-1 size-5 text-blue-600 md:hidden"
                                        />
                                    </>
                                )}
                            </li>
                        ))}
                    </ol>
                </Container>
            </section>

            <section id="refer-form" className="scroll-mt-24">
                <Container className="grid grid-cols-1 items-start gap-8 py-8 md:py-12 lg:grid-cols-[3fr_2fr]">
                    <div className="hubspot-card w-full min-w-0 overflow-hidden rounded-lg border bg-white shadow-sm">
                        <HubSpotEmbed
                            formId={FORM_ID}
                            title="Great Lakes Solar refer a friend form"
                            fallbackUrl={FALLBACK_URL}
                            fallbackLabel="Or email Jacob instead"
                            controlsClassName="px-4 pb-6 sm:px-6"
                        />
                    </div>
                    <div className="flex items-center gap-4 rounded-lg border bg-white p-5 shadow-sm">
                        <Image
                            src="/jacob-bechtold-headshot.jpg"
                            alt="Jacob Bechtold"
                            width={1200}
                            height={1798}
                            className="size-20 shrink-0 rounded-full object-cover object-top"
                        />
                        <div className="space-y-1 text-sm">
                            <p className="font-semibold">
                                I&apos;ll reach out personally.
                            </p>
                            <p>
                                And I&apos;ll keep you posted. Rather talk? Call
                                or text{' '}
                                <a
                                    href={PHONE_HREF}
                                    className="font-semibold whitespace-nowrap underline decoration-blue-500 decoration-2 underline-offset-4 hover:opacity-80"
                                >
                                    {PHONE_DISPLAY}
                                </a>
                                .
                            </p>
                            <p className="text-muted-foreground">
                                Jacob Bechtold, Founder
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            <Container className="max-w-2xl pb-12">
                <h2 className="mb-2 text-center text-2xl">Questions</h2>
                <Accordion type="single" collapsible>
                    {faqs.map((f) => (
                        <AccordionItem key={f.q} value={f.q}>
                            <AccordionTrigger>{f.q}</AccordionTrigger>
                            <AccordionContent>{f.a}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Container>
        </>
    )
}
