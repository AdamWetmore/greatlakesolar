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
        slug: 'loon-award-2026-nghia-trinh',
        title: 'Nghia Trinh Receives the First Loon Award',
        description:
            "Great Lakes Solar gave its first annual Loon Award to Nghia Trinh of Nghia's Auto Service in North Minneapolis. Here's why he earned it and why the award is named for a loon.",
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
            'A plain-language FAQ on the federal solar tax credit for businesses and nonprofits: how much it is worth, the December 31, 2027 deadline, battery credits, bonus adders, and what to do if you owe little tax.',
        date: '2026-10-13',
        dateLabel: 'October 2026',
        image: '/blog/commercial-rooftop-solar.jpg',
        imageAlt: 'Rows of solar panels on a large commercial rooftop',
    },
]
