'use client'

import { useEffect, useId, useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

// Keep field definitions and validation in HubSpot; configure IDs at build time.
const PORTAL_ID = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID
const SCRIPT_ID = 'hubspot-forms-embed'

interface HubSpotEmbedProps {
    formId?: string
    title: string
    fallbackUrl: string
    controlsClassName?: string
}

function HubSpotFrame({
    formId,
    title,
    fallbackUrl,
    controlsClassName,
    onRetry,
}: HubSpotEmbedProps & { onRetry: () => void }) {
    const instanceId = useId()
    const [status, setStatus] = useState<'loading' | 'ready' | 'error'>(
        PORTAL_ID && formId ? 'loading' : 'error'
    )

    useEffect(() => {
        if (!PORTAL_ID || !formId) return
        let ready = false
        const onReady = (event: Event) => {
            const detail = (
                event as CustomEvent<{ formId: string; instanceId: string }>
            ).detail
            if (
                detail?.formId === formId &&
                detail.instanceId === instanceId
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
    }, [formId, instanceId])

    return (
        <>
            {status === 'loading' && (
                <p
                    role="status"
                    className="text-muted-foreground px-4 pt-4 text-sm sm:px-6"
                >
                    Loading the form…
                </p>
            )}
            {status === 'error' && (
                <p role="alert" className="px-4 pt-4 text-sm sm:px-6">
                    The form is taking longer than expected. You can retry below
                    or open it in a new tab.
                </p>
            )}
            {/* HubSpot owns field styling; keep its light form readable in both themes. */}
            <div
                className="hs-form-frame bg-white [color-scheme:light]"
                data-region="na2"
                data-form-id={formId}
                data-instance-id={instanceId}
                data-portal-id={PORTAL_ID}
                title={title}
            />
            <div
                className={cn(
                    'flex flex-wrap items-center justify-between gap-3 text-sm',
                    controlsClassName
                )}
            >
                {status === 'error' && (
                    <Button variant="outline" size="sm" onClick={onRetry}>
                        Reload form
                    </Button>
                )}
                <a
                    href={fallbackUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                    Open form in a new tab
                </a>
            </div>
        </>
    )
}

export default function HubSpotEmbed(props: HubSpotEmbedProps) {
    const [attempt, setAttempt] = useState(0)

    return (
        <HubSpotFrame
            key={attempt}
            {...props}
            onRetry={() => setAttempt((previous) => previous + 1)}
        />
    )
}
