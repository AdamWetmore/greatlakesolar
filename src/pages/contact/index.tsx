import ContactCard from '@/components/contact-card'
import HubSpotEmbed from '@/components/forms/hubspot-embed'
import { Container } from '@/components/layout/container'
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/contact'

const FORM_ID = process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID
const FORM_URL = 'https://41zjvy.share-na2.hsforms.com/2yC6G23nvQQKx2rEWyqrnPg'

export default function Contact() {
    return (
        <Container className="space-y-8 py-6 md:py-10">
            <div className="mx-auto max-w-2xl space-y-3 text-center">
                <h1>Get your free solar assessment</h1>
                <p>
                    Tell us a little about your home or building and Jacob will
                    reach out, usually the same business day. Prefer to talk
                    now? Call{' '}
                    <a
                        href={PHONE_HREF}
                        className="font-semibold whitespace-nowrap underline decoration-blue-500 decoration-2 underline-offset-4 hover:opacity-80"
                    >
                        {PHONE_DISPLAY}
                    </a>
                    .
                </p>
            </div>
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[3fr_2fr]">
                <div className="hubspot-card w-full min-w-0 overflow-hidden rounded-lg border bg-white shadow-sm">
                    <HubSpotEmbed
                        formId={FORM_ID}
                        title="Great Lakes Solar assessment form"
                        fallbackUrl={FORM_URL}
                        controlsClassName="px-4 pb-6 sm:px-6"
                    />
                </div>
                <div className="min-w-0">
                    <ContactCard />
                </div>
            </div>
        </Container>
    )
}
