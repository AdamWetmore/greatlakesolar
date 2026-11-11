'use client'

import { useEffect, useId, useState } from 'react'

// For HubSpot forms created through the API, which are "V3" forms. The V4 frame embed
// (hubspot-embed.tsx) renders them blank, so these use HubSpot's v2.js script instead.
const PORTAL_ID = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID ?? '245203054'
const SCRIPT_SRC = 'https://js-na2.hsforms.net/forms/embed/v2.js'

type Hbspt = {
    forms: { create: (opts: Record<string, unknown>) => void }
}

function loadScript(): Promise<Hbspt> {
    const w = window as unknown as { hbspt?: Hbspt }
    if (w.hbspt) return Promise.resolve(w.hbspt)
    return new Promise((resolve, reject) => {
        let s = document.querySelector<HTMLScriptElement>(
            `script[src="${SCRIPT_SRC}"]`
        )
        if (!s) {
            s = document.createElement('script')
            s.src = SCRIPT_SRC
            s.async = true
            document.body.appendChild(s)
        }
        s.addEventListener('load', () =>
            w.hbspt ? resolve(w.hbspt) : reject(new Error('no hbspt'))
        )
        s.addEventListener('error', () => reject(new Error('load failed')))
    })
}

export default function HubSpotLegacyForm({
    formId,
    fallbackUrl,
    fallbackLabel,
}: {
    formId: string
    fallbackUrl: string
    fallbackLabel: string
}) {
    const targetId = `hs-${useId().replace(/[^a-zA-Z0-9]/g, '')}`
    const [status, setStatus] = useState<'loading' | 'ready' | 'error'>(
        'loading'
    )

    useEffect(() => {
        let cancelled = false
        const timeout = window.setTimeout(() => {
            if (!cancelled) setStatus((s) => (s === 'ready' ? s : 'error'))
        }, 15000)
        loadScript()
            .then((hbspt) => {
                if (cancelled) return
                const target = document.getElementById(targetId)
                if (target) target.innerHTML = ''
                hbspt.forms.create({
                    region: 'na2',
                    portalId: PORTAL_ID,
                    formId,
                    target: `#${targetId}`,
                    onFormReady: () => {
                        window.clearTimeout(timeout)
                        if (!cancelled) setStatus('ready')
                    },
                })
            })
            .catch(() => !cancelled && setStatus('error'))
        return () => {
            cancelled = true
            window.clearTimeout(timeout)
        }
    }, [formId, targetId])

    return (
        <div className="px-4 py-5 sm:px-6">
            {status === 'loading' && (
                <p role="status" className="text-muted-foreground text-sm">
                    Loading the form…
                </p>
            )}
            {status === 'error' && (
                <p role="alert" className="text-sm">
                    The form didn&apos;t load. You can still email Jacob
                    directly.
                </p>
            )}
            <div id={targetId} className="[color-scheme:light]" />
            <a
                href={fallbackUrl}
                className="mt-3 inline-block text-sm underline underline-offset-4"
            >
                {fallbackLabel}
            </a>
        </div>
    )
}
