import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout from '@/components/layout/layout'

const siteUrl = 'https://greatlakesolar.com'
const title = "Great Lakes Solar | Minnesota's Local Commercial Solar Expert"
const description =
    'Great Lakes Solar helps businesses, non-profits, schools, and institutions across the Midwest install solar and battery systems that cut energy costs, add resiliency, and make a lasting difference.'
const ogImage = `${siteUrl}/og-image.png`

// Keep public, indexable routes in sync with public/sitemap.xml.
const pageMetadata: Record<string, { title: string; description: string }> = {
    '/': {
        title: 'Commercial Rooftop Solar Twin Cities | Great Lakes Solar',
        description:
            'Great Lakes Solar helps businesses across Minneapolis, Saint Paul, and the Twin Cities metro install rooftop solar. Explore options for your commercial building.',
    },
    '/about': {
        title: 'About Our Minnesota Solar Team | Great Lakes Solar',
        description:
            'Meet Great Lakes Solar and founder Jacob Bechtold. Learn about our experience helping Minnesota businesses and institutions develop commercial solar projects.',
    },
    '/resources': {
        title: 'Minnesota Commercial Solar Resources | Great Lakes Solar',
        description:
            'Explore commercial solar benefits, battery storage, and common questions for Minnesota businesses considering rooftop solar with Great Lakes Solar.',
    },
    '/contact': {
        title: 'Contact a Twin Cities Commercial Solar Expert | Great Lakes Solar',
        description:
            'Talk with Great Lakes Solar about commercial rooftop solar and battery storage for your business in Minneapolis, Saint Paul, or the greater Twin Cities metro.',
    },
    '/projects': {
        title: 'Solar Projects | Great Lakes Solar',
        description:
            'The Great Lakes Solar project portfolio is under development.',
    },
    '/sign': {
        title: 'Solar Interest Survey | Great Lakes Solar',
        description:
            'Connect with Great Lakes Solar through our solar interest survey.',
    },
}

export default function App({ Component, pageProps }: AppProps) {
    const { pathname } = useRouter()
    const metadata = pageMetadata[pathname] ?? { title, description }
    const isIndexable =
        pathname in pageMetadata && !['/projects', '/sign'].includes(pathname)
    const canonicalUrl = `${siteUrl}${pathname === '/' ? '/' : pathname}`

    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                {isIndexable ? (
                    <link rel="canonical" href={canonicalUrl} />
                ) : (
                    <meta name="robots" content="noindex" key="robots" />
                )}

                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Great Lakes Solar" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:title" content={metadata.title} />
                <meta
                    property="og:description"
                    content={metadata.description}
                />
                <meta property="og:image" content={ogImage} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={metadata.title} />
                <meta
                    name="twitter:description"
                    content={metadata.description}
                />
                <meta name="twitter:image" content={ogImage} />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}
