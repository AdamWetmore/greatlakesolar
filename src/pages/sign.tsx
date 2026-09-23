import Head from 'next/head'
import { useEffect } from 'react'

// Lawn sign QR code points here. Change SURVEY_URL to retarget the signs without reprinting.
const SURVEY_URL =
    'https://41zjvy.share-na2.hsforms.com/2fs8F2a9SR-epEdfEwDVeHg?utm_source=lawn_sign&utm_medium=qr'

export default function Sign() {
    useEffect(() => {
        window.location.replace(SURVEY_URL)
    }, [])

    return (
        <>
            <Head>
                <meta httpEquiv="refresh" content={`0; url=${SURVEY_URL}`} />
                <meta name="robots" content="noindex" />
            </Head>
            <div className="py-24 text-center">
                <p>
                    Taking you to our survey. <a href={SURVEY_URL}>Click here</a> if it doesn&apos;t open.
                </p>
            </div>
        </>
    )
}
