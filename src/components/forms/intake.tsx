'use client'

import { useEffect, useState } from 'react'
import { ChevronRight } from 'lucide-react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTrigger,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

// Keep field definitions and validation in HubSpot; configure IDs at build time.
const PORTAL_ID = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID
const FORM_ID = process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID
const SCRIPT_ID = 'hubspot-intake-embed'
const FORM_URL = 'https://41zjvy.share-na2.hsforms.com/2yC6G23nvQQKx2rEWyqrnPg'

function HubSpotEmbed() {
    const [status, setStatus] = useState<'loading' | 'ready' | 'error'>(
        PORTAL_ID && FORM_ID ? 'loading' : 'error'
    )

    useEffect(() => {
        if (!PORTAL_ID || !FORM_ID) return
        let ready = false
        const onReady = (event: Event) => {
            if (
                (event as CustomEvent<{ formId: string }>).detail?.formId ===
                FORM_ID
            ) {
                ready = true
                window.clearTimeout(timeout)
                setStatus('ready')
            }
        }
        const onError = () => setStatus('error')
        const timeout = window.setTimeout(() => {
            if (!ready) setStatus('error')
        }, 15000)

        // Register before loading the script so a fast response is not missed.
        window.addEventListener('hs-form-event:on-ready', onReady)
        let script = document.getElementById(
            SCRIPT_ID
        ) as HTMLScriptElement | null
        if (!script) {
            script = document.createElement('script')
            script.id = SCRIPT_ID
            script.src = `https://js-na2.hsforms.net/forms/embed/${PORTAL_ID}.js`
            script.async = true
            script.addEventListener('error', () => script?.remove(), {
                once: true,
            })
            script.addEventListener('error', onError)
            document.body.appendChild(script)
        } else {
            // HubSpot observes newly mounted form containers, including on reopen.
            script.addEventListener('error', onError)
        }

        return () => {
            window.clearTimeout(timeout)
            window.removeEventListener('hs-form-event:on-ready', onReady)
            script?.removeEventListener('error', onError)
        }
    }, [])

    return (
        <>
            {status === 'loading' && (
                <p role="status" className="text-muted-foreground text-sm">
                    Loading your assessment form…
                </p>
            )}
            {status === 'error' && (
                <p role="alert" className="text-sm">
                    The form is taking longer than expected. You can retry below
                    or open it in a new tab.
                </p>
            )}
            {/* Let HubSpot own the form's spacing, surface, and responsive height. */}
            <div
                className="hs-form-frame"
                data-region="na2"
                data-form-id={FORM_ID}
                data-portal-id={PORTAL_ID}
                title="Great Lakes Solar assessment form"
            />
        </>
    )
}

export default function IntakeForm() {
    const [attempt, setAttempt] = useState(0)

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size="lg">
                    Schedule Your<strong>Free</strong>Assessment
                    <ChevronRight />
                </Button>
            </DialogTrigger>
            <DialogContent
                overlayClassName="z-[100]"
                className="z-[101] max-h-[95dvh] w-[calc(100%-1rem)] max-w-[calc(100%-1rem)] overflow-y-auto p-0 sm:max-w-2xl"
            >
                <DialogHeader className="px-4 pt-6 pr-10 sm:px-6 sm:pr-10">
                    <DialogTitle>Start Your Project</DialogTitle>
                    <DialogDescription>
                        Tell us about your project to schedule a free
                        assessment.
                    </DialogDescription>
                </DialogHeader>
                <HubSpotEmbed key={attempt} />
                <div className="flex flex-wrap items-center justify-between gap-3 px-4 pb-6 text-sm sm:px-6">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setAttempt(attempt + 1)}
                    >
                        Reload form
                    </Button>
                    <a
                        href={FORM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4"
                    >
                        Open form in a new tab
                    </a>
                </div>
            </DialogContent>
        </Dialog>
    )
}
