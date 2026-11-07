// Hand-picked posts shown on the homepage ("Latest from Great Lakes Solar").
// Four fixed slots: one Instagram, one Facebook, one LinkedIn, one blog post.
// To swap a post, edit only that slot below. The label and link text are set
// automatically from the slot. Images live in /public; reuse blog photos where
// possible (no EXIF/GPS). Use the exact post URL when you have it, otherwise
// the profile page.

export const SOCIAL_LINKS = {
    instagram: 'https://www.instagram.com/greatlakesolar/',
    facebook: 'https://facebook.com/people/Great-Lake-Solar/61574343611604',
    linkedin: 'https://www.linkedin.com/company/great-lakes-solar',
}

type SlotContent = {
    title: string
    blurb: string
    image: string
    imageAlt: string
    href: string
}

export type SocialPost = SlotContent & {
    platform: 'Instagram' | 'Facebook' | 'LinkedIn' | 'Blog'
    cta: string
}

const SLOTS: {
    instagram: SlotContent
    facebook: SlotContent
    linkedin: SlotContent
    blog: SlotContent
} = {
    instagram: {
        title: 'Why we started Great Lakes Solar',
        blurb: 'A quiet moment with a loon in the Boundary Waters is where it all began.',
        image: '/blog/loon-award/boundary-waters-canoe-sunset.jpg',
        imageAlt: 'Canoe on a Boundary Waters lake at sunset',
        href: SOCIAL_LINKS.instagram,
    },
    facebook: {
        title: 'Thank you for celebrating with us',
        blurb: 'Friends, family and neighbors came out to celebrate Nghia at his shop in North Minneapolis.',
        image: '/blog/loon-award/loon-award-crowd.jpg',
        imageAlt:
            "Guests gathered at Nghia's Auto for the Loon Award celebration",
        href: SOCIAL_LINKS.facebook,
    },
    linkedin: {
        title: "Solar goes up at Nghia's Auto",
        blurb: 'Kicking off 43 panels on a North Minneapolis auto shop that has served the neighborhood for 20+ years.',
        image: '/blog/loon-award/nghias-auto-drone-header.jpg',
        imageAlt: "Drone view of solar panels on Nghia's Automotive Services",
        href: SOCIAL_LINKS.linkedin,
    },
    blog: {
        title: 'The federal solar tax credit, answered',
        blurb: 'What it is worth for businesses and nonprofits, and the December 31, 2027 deadline.',
        image: '/blog/commercial-rooftop-solar.jpg',
        imageAlt: 'Rows of solar panels on a large commercial rooftop',
        href: '/resources/blog/federal-solar-tax-credit',
    },
}

export const SOCIAL_POSTS: SocialPost[] = [
    { ...SLOTS.instagram, platform: 'Instagram', cta: 'See it on Instagram' },
    { ...SLOTS.facebook, platform: 'Facebook', cta: 'See it on Facebook' },
    { ...SLOTS.linkedin, platform: 'LinkedIn', cta: 'See it on LinkedIn' },
    { ...SLOTS.blog, platform: 'Blog', cta: 'Read the post' },
]
