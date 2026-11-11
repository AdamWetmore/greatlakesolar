export interface BlogPost {
    slug: string
    title: string
    description: string
    date: string
    dateLabel: string
    image: string
    imageAlt: string
}

// Newest first. Register each article component in pages/resources/blog/[slug].tsx.
// Keep public/sitemap.xml in sync when adding a post.
export const blogPosts: BlogPost[] = [
    {
        slug: 'nghia-trinh-north-minneapolis-mechanic',
        title: "Nghia's Auto Service: The Story Behind Camden's Most Loved Mechanic",
        description:
            "Meet Nghia Trinh, the North Minneapolis mechanic who fled Vietnam as a refugee at 15 and built a neighborhood shop where customers stay for life.",
        date: '2026-11-10',
        dateLabel: 'November 2026',
        image: '/blog/loon-award/jacob-nghia-shop.jpg',
        imageAlt: "Nghia Trinh and Jacob Bechtold smiling inside Nghia's Auto Service in North Minneapolis",
    },
    {
        slug: 'loon-award-2026-nghia-trinh',
        title: 'Nghia Trinh Receives the First Loon Award',
        description:
            "Great Lakes Solar gave its first Loon Award to Nghia Trinh of Nghia's Auto Service in North Minneapolis. Why he earned it, and why it's named for a loon.",
        date: '2026-11-04',
        dateLabel: 'November 2026',
        image: '/blog/loon-award/nghias-auto-drone-header.jpg',
        imageAlt:
            "Aerial view of Nghia's Auto Service in North Minneapolis with the new solar array on the roof",
    },
    {
        slug: 'federal-solar-tax-credit',
        title: 'The Federal Solar Tax Credit: Your Questions, Answered',
        description:
            'The federal solar tax credit for businesses and nonprofits: what it is worth, the Dec. 31, 2027 deadline, battery credits, bonus adders and low tax bills.',
        date: '2026-10-13',
        dateLabel: 'October 2026',
        image: '/blog/commercial-rooftop-solar.jpg',
        imageAlt: 'Rows of solar panels on a large commercial rooftop',
    },
]
