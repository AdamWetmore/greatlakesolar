import { BlogPost } from '@/models/blog'
import Image from 'next/image'
import Link from 'next/link'

export default function BlogPostCard({ post }: { post: BlogPost }) {
    return (
        <Link
            href={`/resources/blog/${post.slug}`}
            className="group border-foreground/20 block overflow-hidden rounded-xl border text-left transition-shadow hover:shadow-lg"
        >
            <div className="relative aspect-[16/9] w-full">
                <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                />
            </div>
            <div className="space-y-2 p-5">
                <p className="text-sm opacity-70">{post.dateLabel}</p>
                <h3 className="text-xl font-bold group-hover:underline">
                    {post.title}
                </h3>
                <p className="opacity-90">{post.description}</p>
                <p className="font-bold underline decoration-blue-500 decoration-2 underline-offset-4">
                    Read more
                </p>
            </div>
        </Link>
    )
}
