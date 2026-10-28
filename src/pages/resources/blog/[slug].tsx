import type { GetStaticPaths, GetStaticProps } from 'next'
import dynamic from 'next/dynamic'
import { Container } from '@/components/layout/container'
import NewsletterBand from '@/components/newsletter-band'
import { blogPosts, type BlogPost } from '@/models/blog'

const articleComponents = {
    'federal-solar-tax-credit': dynamic(
        () => import('@/components/blog/posts/federal-solar-tax-credit')
    ),
}

export const getStaticPaths: GetStaticPaths = async () => ({
    paths: blogPosts.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
})

export const getStaticProps: GetStaticProps<{ post: BlogPost }> = async ({
    params,
}) => {
    const post = blogPosts.find(({ slug }) => slug === params?.slug)
    if (!post) return { notFound: true }
    if (!Object.prototype.hasOwnProperty.call(articleComponents, post.slug)) {
        throw new Error('Missing article component for blog post: ' + post.slug)
    }
    return { props: { post } }
}

export default function BlogArticle({ post }: { post: BlogPost }) {
    const Article =
        articleComponents[post.slug as keyof typeof articleComponents]
    return (
        <>
            <Article />
            <section className="pb-10 md:pb-14">
                <Container>
                    <NewsletterBand />
                </Container>
            </section>
        </>
    )
}
