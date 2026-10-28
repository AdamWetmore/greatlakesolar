import Script from 'next/script'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const PORTAL_ID = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID

declare global {
    interface Window {
        _hsq?: unknown[][]
    }
}

// HubSpot tracking code: page views and lead source for every visitor, so form
// submissions arrive in HubSpot with where they came from. The script records
// the first page itself; client-side route changes are reported manually.
export default function HubSpotTracking() {
    const router = useRouter()

    useEffect(() => {
        const onRouteChange = (url: string) => {
            const hsq = (window._hsq = window._hsq ?? [])
            hsq.push(['setPath', url])
            hsq.push(['trackPageView'])
        }
        router.events.on('routeChangeComplete', onRouteChange)
        return () => router.events.off('routeChangeComplete', onRouteChange)
    }, [router.events])

    if (!PORTAL_ID) return null
    return (
        <Script
            id="hs-script-loader"
            src={`https://js-na2.hs-scripts.com/${PORTAL_ID}.js`}
            strategy="afterInteractive"
        />
    )
}
