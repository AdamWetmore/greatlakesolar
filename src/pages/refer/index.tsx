import Image from 'next/image'
import { ChevronRight, Handshake, Sun, UserRound } from 'lucide-react'
import HubSpotLegacyForm from '@/components/forms/hubspot-legacy-form'
import { Container } from '@/components/layout/container'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/contact'

const FORM_ID = process.env.NEXT_PUBLIC_HUBSPOT_REFER_FORM_ID
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
            <Container className="grid grid-cols-1 items-center gap-8 py-8 md:grid-cols-2 md:py-12">
                <div className="space-y-4 text-center md:text-left">
                    <p className="text-foreground text-sm font-semibold tracking-wide uppercase">
                        Refer a friend
                    </p>
                    <h1 className="md:text-left">
                        <span className="whitespace-nowrap">Give $500.</span>{' '}
                        <span className="whitespace-nowrap">Get $500.</span>
                    </h1>
                    <p>
                        Know someone who should go solar? Introduce us. They get
                        $500 off their project, and you get $500 as a thank-you.
                    </p>
                    <p className="text-foreground text-sm">
                        Referring a business? It&apos;s $1,000 each.
                    </p>
                    <Button
                        asChild
                        size="lg"
                        className="border-primary-foreground/30 border"
                    >
                        <a href="#refer-form">
                            Introduce someone <ChevronRight />
                        </a>
                    </Button>
                </div>
                <figure className="space-y-2">
                    <Image
                        src="/refer-jacob-nghia-laughing.jpg"
                        alt="Jacob Bechtold and Nghia Trinh laughing at the Nghia's Auto solar celebration"
                        width={953}
                        height={715}
                        priority
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="h-auto w-full rounded-lg object-cover shadow-sm"
                    />
                    <figcaption className="text-center text-sm opacity-70">
                        Jacob and Nghia Trinh at the Nghia&apos;s Auto solar
                        celebration, North Minneapolis
                    </figcaption>
                </figure>
            </Container>

            <section className="py-8" aria-labelledby="referral-steps-heading">
                <Container>
                    <h2 id="referral-steps-heading" className="sr-only">
                        How it works
                    </h2>
                    <ol className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
                        {steps.map((step, index) => (
                            <li key={step.title}>
                                <Card className="h-full">
                                    <CardContent className="flex flex-col items-center gap-3 text-center">
                                        <step.icon
                                            className="size-8"
                                            aria-hidden="true"
                                        />
                                        <h3 className="font-semibold">
                                            {index + 1}. {step.title}
                                        </h3>
                                        <p className="text-sm">{step.body}</p>
                                    </CardContent>
                                </Card>
                            </li>
                        ))}
                    </ol>
                </Container>
            </section>

            <section id="refer-form" className="scroll-mt-24">
                <Container className="grid grid-cols-1 items-start gap-8 py-8 md:py-12 lg:grid-cols-[3fr_2fr]">
                    <div className="hubspot-card w-full min-w-0 overflow-hidden rounded-lg border bg-white shadow-sm">
                        <HubSpotLegacyForm
                            formId={FORM_ID}
                            fallbackUrl={FALLBACK_URL}
                            fallbackLabel="Or email Jacob instead"
                        />
                    </div>
                    <div className="bg-card text-card-foreground flex items-center gap-4 rounded-lg border p-5 shadow-sm">
                        <Image
                            src="/jacob-bechtold-headshot-square.jpg"
                            alt="Jacob Bechtold"
                            width={400}
                            height={400}
                            className="size-20 shrink-0 rounded-full object-cover"
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
