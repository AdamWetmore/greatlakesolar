import { Card, CardContent } from '@/components/ui/card'
import { SOCIAL_LINKS, SOCIAL_POSTS } from '@/data/social-posts'
import Image from 'next/image'
import Link from 'next/link'

export default function SocialPostsBand() {
    return (
        <div className="space-y-6">
            <div className="space-y-2 text-center">
                <h2>Latest from Great Lakes Solar</h2>
                <p className="text-muted-foreground">
                    Projects, people, and what we&apos;re up to. Follow along on{' '}
                    <Link
                        href={SOCIAL_LINKS.linkedin}
                        target="_blank"
                        className="underline underline-offset-4"
                    >
                        LinkedIn
                    </Link>
                    ,{' '}
                    <Link
                        href={SOCIAL_LINKS.instagram}
                        target="_blank"
                        className="underline underline-offset-4"
                    >
                        Instagram
                    </Link>
                    , and{' '}
                    <Link
                        href={SOCIAL_LINKS.facebook}
                        target="_blank"
                        className="underline underline-offset-4"
                    >
                        Facebook
                    </Link>
                    .
                </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                {SOCIAL_POSTS.map((post) => {
                    const external = post.href.startsWith('http')
                    return (
                        <Link
                            key={post.title}
                            href={post.href}
                            target={external ? '_blank' : undefined}
                            className="group focus-visible:outline-ring block h-full min-w-0 rounded-xl text-left focus-visible:outline-2 focus-visible:outline-offset-4"
                        >
                            <Card className="h-full overflow-hidden pt-0 transition-shadow group-hover:shadow-lg">
                                <div className="relative aspect-[4/3] w-full">
                                    <Image
                                        src={post.image}
                                        alt={post.imageAlt}
                                        fill
                                        sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                                        className="object-cover"
                                    />
                                </div>
                                <CardContent className="space-y-2">
                                    <p className="text-muted-foreground text-sm">
                                        {post.platform}
                                    </p>
                                    <h3 className="text-lg font-semibold group-hover:underline group-focus-visible:underline">
                                        {post.title}
                                    </h3>
                                    <p>{post.blurb}</p>
                                    <p className="font-bold underline decoration-blue-500 decoration-2 underline-offset-4">
                                        {post.cta}
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
