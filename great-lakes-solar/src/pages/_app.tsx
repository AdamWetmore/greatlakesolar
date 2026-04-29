import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '@/components/layout/layout'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Great Lakes Solar</title>
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}
