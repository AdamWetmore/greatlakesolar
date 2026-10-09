import BlogPostCard from '@/components/blog/blog-post-card'
import { Container } from '@/components/layout/container'
import { blogPosts } from '@/models/blog'
import Head from 'next/head'
import Link from 'next/link'

const description =
    'Plain-language articles from Great Lakes Solar on solar and battery incentives, tax credits, and planning a commercial solar project in Minnesota and the Midwest.'

export default function Blog() {
    return (
        <>
            <Head>
                <title>Blog | Great Lakes Solar</title>
                <meta name="description" content={description} />
                <link
                    rel="canonical"
                    href="https://greatlakesolar.com/resources/blog"
                />
                <meta property="og:title" content="Blog | Great Lakes Solar" />
                <meta property="og:description" content={description} />
            </Head>
            <section className="py-10 md:py-14">
                <Container className="space-y-6">
                    <nav className="text-sm">
                        <Link
                            href="/resources"
                            className="underline decoration-blue-500 decoration-2 underline-offset-4"
                        >
                            Resources
                        </Link>
                        <span className="px-2 opacity-60">/</span>
                        <span>Blog</span>
                    </nav>
                    <h1>Blog</h1>
                    <p className="mx-auto max-w-3xl text-center">
                        Straight answers on solar, batteries, and the incentives
                        that pay for them.
                    </p>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {blogPosts.map((post) => (
                            <BlogPostCard key={post.slug} post={post} />
                        ))}
                    </div>
                </Container>
            </section>
        </>
    )
}
