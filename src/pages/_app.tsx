import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout from '@/components/layout/layout'
import HubSpotTracking from '@/components/hubspot-tracking'
import { EMAIL, PHONE_HREF } from '@/lib/contact'
import { blogPosts } from '@/models/blog'

const siteUrl = 'https://greatlakesolar.com'
const title = "Great Lakes Solar | Minnesota's Local Solar Expert"
const description =
    'Great Lakes Solar helps businesses, non-profits, homeowners, schools, and institutions across the Midwest install solar and battery systems that cut energy costs, add resiliency, and make a lasting difference.'
const ogImage = `${siteUrl}/og-image.png`

// LocalBusiness structured data so Google can show phone, hours and service
// area. Service-area business: no street address (matches the Google Business Profile).
const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}/#business`,
    name: 'Great Lakes Solar',
    description,
    url: siteUrl,
    logo: `${siteUrl}/og-image.png`,
    image: ogImage,
    telephone: PHONE_HREF.replace('tel:', ''),
    email: EMAIL,
    founder: { '@type': 'Person', name: 'Jacob Bechtold' },
    address: {
        '@type': 'PostalAddress',
        addressRegion: 'MN',
        addressCountry: 'US',
    },
    areaServed: [
        { '@type': 'State', name: 'Minnesota' },
        { '@type': 'State', name: 'Wisconsin' },
    ],
    openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
    },
    sameAs: [
        'https://www.linkedin.com/company/great-lakes-solar',
        'https://facebook.com/people/Great-Lake-Solar/61574343611604',
    ],
}

// Keep public, indexable routes in sync with public/sitemap.xml.
const pageMetadata: Record<string, { title: string; description: string }> = {
    '/': {
        title: 'Residential & Commercial Solar Twin Cities | Great Lakes Solar',
        description:
            'Great Lakes Solar helps homeowners and businesses across Minneapolis, Saint Paul, and the Twin Cities metro install rooftop solar. Explore solar for your home or commercial building.',
    },
    '/about': {
        title: 'About Our Minnesota Solar Team | Great Lakes Solar',
        description:
            'Meet Great Lakes Solar and founder Jacob Bechtold. Learn about our experience helping Minnesota businesses and institutions develop commercial solar projects.',
    },
    '/resources': {
        title: 'Minnesota Solar Resources | Great Lakes Solar',
        description:
            'Explore residential and commercial solar benefits, installation, battery storage, and common questions for Minnesota homeowners and businesses.',
    },
    '/resources/blog': {
        title: 'Blog | Great Lakes Solar',
        description:
            'Plain-language articles from Great Lakes Solar on solar and battery incentives, tax credits, and planning a commercial solar project in Minnesota and the Midwest.',
    },
    '/contact': {
        title: 'Contact a Twin Cities Solar Expert | Free Assessment | Great Lakes Solar',
        description:
            'Request a free solar assessment or call 952-222-7912. Great Lakes Solar designs and builds solar and battery storage for homes and businesses in Minneapolis, Saint Paul, and across Minnesota and western Wisconsin.',
    },
    '/newsletter': {
        title: 'Newsletter | Great Lakes Solar',
        description:
            'Get one email a month from Great Lakes Solar: real local solar projects, policy and incentive changes in plain English, and the occasional story. Unsubscribe anytime.',
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
    const post =
        pathname === '/resources/blog/[slug]'
            ? blogPosts.find(({ slug }) => slug === pageProps.post?.slug)
            : undefined
    const metadata = post
        ? {
              title: post.title + ' | Great Lakes Solar',
              description: post.description,
          }
        : (pageMetadata[pathname] ?? { title, description })
    const isIndexable =
        Boolean(post) ||
        (pathname in pageMetadata && !['/projects', '/sign'].includes(pathname))
    const canonicalPath = post ? '/resources/blog/' + post.slug : pathname
    const canonicalUrl = `${siteUrl}${canonicalPath}`

    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                {isIndexable ? (
                    <link rel="canonical" key="canonical" href={canonicalUrl} />
                ) : (
                    <meta name="robots" content="noindex" key="robots" />
                )}

                <meta property="og:type" key="og:type" content="website" />
                <meta
                    property="og:site_name"
                    key="og:site_name"
                    content="Great Lakes Solar"
                />
                <meta property="og:url" key="og:url" content={canonicalUrl} />
                <meta
                    property="og:title"
                    key="og:title"
                    content={metadata.title}
                />
                <meta
                    property="og:description"
                    key="og:description"
                    content={metadata.description}
                />
                <meta property="og:image" key="og:image" content={ogImage} />
                <meta
                    property="og:image:width"
                    key="og:image:width"
                    content="1200"
                />
                <meta
                    property="og:image:height"
                    key="og:image:height"
                    content="630"
                />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={metadata.title} />
                <meta
                    name="twitter:description"
                    content={metadata.description}
                />
                <meta name="twitter:image" content={ogImage} />
                {['/', '/contact'].includes(pathname) && (
                    <script
                        type="application/ld+json"
                        key="local-business"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify(localBusinessJsonLd),
                        }}
                    />
                )}
            </Head>
            <HubSpotTracking />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}
