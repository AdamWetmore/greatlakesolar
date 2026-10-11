import { BlogPost } from '@/models/blog'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

export default function BlogPostCard({ post }: { post: BlogPost }) {
    return (
        <Link
            href={`/resources/blog/${post.slug}`}
            className="group focus-visible:outline-ring block h-full min-w-0 rounded-xl text-left focus-visible:outline-2 focus-visible:outline-offset-4"
        >
            <Card className="h-full overflow-hidden pt-0 transition-shadow group-hover:shadow-lg">
                <div className="relative aspect-[16/9] w-full">
                    <Image
                        src={post.image}
                        alt={post.imageAlt}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                    />
                </div>
                <CardContent className="space-y-2">
                    <p className="text-muted-foreground text-sm">
                        {post.dateLabel}
                    </p>
                    <h3 className="text-xl font-semibold group-hover:underline group-focus-visible:underline">
                        {post.title}
                    </h3>
                    <p>{post.description}</p>
                    <p className="font-bold underline decoration-blue-500 decoration-2 underline-offset-4">
                        Read more
                    </p>
                </CardContent>
            </Card>
        </Link>
    )
}
