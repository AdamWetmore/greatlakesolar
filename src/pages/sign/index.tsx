import Head from 'next/head'
import { useEffect } from 'react'

// Lawn sign QR code points here. Change SURVEY_URL to retarget the signs without reprinting. Points to the Customer Intake Form.
const SURVEY_URL =
    'https://41zjvy.share-na2.hsforms.com/2yC6G23nvQQKx2rEWyqrnPg?utm_source=lawn_sign&utm_medium=qr'

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
                    Taking you to our survey.{' '}
                    <a
                        href={SURVEY_URL}
                        className="font-medium underline underline-offset-4 hover:decoration-2 focus-visible:outline-2 focus-visible:outline-offset-4"
                    >
                        Click here
                    </a>{' '}
                    if it doesn&apos;t open.
                </p>
            </div>
        </>
    )
}
