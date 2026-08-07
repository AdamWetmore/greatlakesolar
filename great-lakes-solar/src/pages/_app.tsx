import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '@/components/layout/layout'

const siteUrl = 'https://greatlakesolar.com'
const title = "Great Lakes Solar | Minnesota's Local Commercial Solar Expert"
const description =
    'Great Lakes Solar helps businesses, non-profits, schools, and institutions across the Midwest install solar and battery systems that cut energy costs, add resiliency, and make a lasting difference.'
const ogImage = `${siteUrl}/og-image.png`

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />

                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Great Lakes Solar" />
                <meta property="og:url" content={siteUrl} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={ogImage} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={ogImage} />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}
