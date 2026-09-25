import type { NextConfig } from 'next'
import { PHASE_PRODUCTION_BUILD } from 'next/constants'

const nextConfig: NextConfig = {
    /* config options here */
    reactStrictMode: true,
    output: 'export',
    images: {
        unoptimized: true,
    },
}

export default function config(phase: string): NextConfig {
    if (phase === PHASE_PRODUCTION_BUILD) {
        const required = {
            NEXT_PUBLIC_HUBSPOT_PORTAL_ID: /^\d+$/,
            NEXT_PUBLIC_HUBSPOT_FORM_ID:
                /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
        }
        for (const [name, pattern] of Object.entries(required)) {
            if (!pattern.test(process.env[name] ?? '')) {
                throw new Error(`Set a valid ${name} before building the site.`)
            }
        }
    }
    return nextConfig
}
