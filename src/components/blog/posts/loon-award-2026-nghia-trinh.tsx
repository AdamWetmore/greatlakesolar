import { Container } from '@/components/layout/container'
import { blogPosts } from '@/models/blog'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const post = blogPosts.find((p) => p.slug === 'loon-award-2026-nghia-trinh')!
const siteUrl = 'https://greatlakesolar.com'
const url = `${siteUrl}/resources/blog/${post.slug}`

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: `${siteUrl}${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Person', name: 'Jacob Bechtold' },
    editor: { '@type': 'Person', name: 'Naomi Thomson' },
    publisher: {
        '@type': 'Organization',
        name: 'Great Lakes Solar',
        logo: { '@type': 'ImageObject', url: `${siteUrl}/PrimaryLogo.svg` },
    },
    mainEntityOfPage: url,
}

const linkStyle =
    'underline decoration-blue-500 decoration-2 underline-offset-4 hover:opacity-80'

function Photo({
    src,
    alt,
    width,
    height,
    caption,
    className = '',
}: {
    src: string
    alt: string
    width: number
    height: number
    caption?: string
    className?: string
}) {
    return (
        <figure className={`pt-1 ${className}`}>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                sizes="(min-width: 768px) 768px, 100vw"
                className="h-auto w-full rounded-xl"
            />
            {caption && (
                <figcaption className="mt-2 text-sm opacity-70">
                    {caption}
                </figcaption>
            )}
        </figure>
    )
}

export default function LoonAward2026Post() {
    return (
        <>
            <Head>
                <title>{`${post.title} | Great Lakes Solar`}</title>
                <meta name="description" content={post.description} />
                <link rel="canonical" key="canonical" href={url} />
                <meta property="og:type" key="og:type" content="article" />
                <meta property="og:url" key="og:url" content={url} />
                <meta property="og:title" key="og:title" content={post.title} />
                <meta property="og:description" key="og:description" content={post.description} />
                <meta property="og:image" key="og:image" content={`${siteUrl}${post.image}`} />
                <meta property="og:image:width" key="og:image:width" content="1920" />
                <meta property="og:image:height" key="og:image:height" content="640" />
                <meta name="twitter:title" content={post.title} />
                <meta name="twitter:description" content={post.description} />
                <meta
                    name="twitter:image"
                    content={`${siteUrl}${post.image}`}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(articleSchema),
                    }}
                />
            </Head>
            <article>
                <Container className="pt-6 md:pt-8">
                    <figure className="mx-auto max-w-4xl">
                        <Image
                            src={post.image}
                            alt={post.imageAlt}
                            width={1920}
                            height={640}
                            priority
                            sizes="(min-width: 896px) 896px, 100vw"
                            className="h-auto w-full rounded-xl"
                        />
                        <figcaption className="mt-2 text-sm opacity-70">
                            The new solar array on Nghia&apos;s Auto Service.
                        </figcaption>
                    </figure>
                </Container>
                <Container className="py-6 md:py-8">
                    <div className="mx-auto max-w-3xl">
                        <nav className="mb-6 text-sm">
                            <Link href="/resources" className={linkStyle}>
                                Resources
                            </Link>
                            <span className="px-2 opacity-60">/</span>
                            <Link href="/resources/blog" className={linkStyle}>
                                Blog
                            </Link>
                        </nav>
                        <h1 className="text-left text-3xl leading-tight md:text-5xl">
                            {post.title}
                        </h1>
                        <p className="mt-3 text-sm opacity-70">
                            By Jacob Bechtold, Founder · Edited by Naomi
                            Thomson · {post.dateLabel}
                        </p>

                        <div className="mt-8 space-y-5 text-base leading-relaxed md:text-lg [&_blockquote]:border-l-4 [&_blockquote]:border-blue-500 [&_blockquote]:pl-5 [&_blockquote]:italic [&_h2]:pt-3 [&_h2]:text-left [&_h2]:text-2xl">
                            <p>
                                On Wednesday, October 28, as rain clouds rolled
                                in, a crowd of customers, neighbors, friends and
                                family packed into Nghia&apos;s Auto Service on
                                42nd Avenue North. Everyone gathered to
                                celebrate not only the completed solar
                                installation, but Nghia Trinh&apos;s 25 years as
                                the staple mechanic of the Camden neighborhood.
                                Great Lakes Solar also had the honor of
                                presenting Nghia with our very first Loon Award.
                            </p>

                            <Photo
                                src="/blog/loon-award/camden-drone.jpg"
                                alt="Aerial view of the Camden neighborhood in North Minneapolis with the downtown skyline in the distance"
                                width={1920}
                                height={1080}
                                caption="Camden, Nghia's corner of North Minneapolis."
                            />

                            <h2>About Nghia Trinh</h2>
                            <p>
                                Nghia came to Minnesota as a refugee at 15. His
                                first job in the U.S. was a paper route for the
                                Star Tribune. While the other kids delivered a
                                few dozen papers, he delivered hundreds, up at 3
                                a.m. in the freezing cold, all through high
                                school and later mechanic school. He became a
                                Toyota Master Mechanic, bought his current
                                building, and fixed it up at night after a full
                                day of work.
                            </p>
                            <Photo
                                src="/blog/loon-award/jacob-nghia-shop.jpg"
                                alt="Jacob Bechtold and Nghia Trinh smiling inside Nghia's Auto Service"
                                width={1600}
                                height={900}
                                caption="Jacob and Nghia at the shop during the install."
                            />

                            <p>
                                He estimates he&apos;s serviced 90,000 cars
                                since opening shop, but the amazing thing about
                                Nghia is that somehow everyone who walks in knows
                                him personally.
                            </p>
                            <p>
                                Throughout this solar project, our founder Jacob
                                spent a lot of time at Nghia&apos;s. What stood
                                out to him most during these visits was that
                                people nearly always left Nghia&apos;s shop in a
                                better mood than when they walked in, which is
                                pretty rare for a place you take your car to get
                                fixed.
                            </p>

                            <Photo
                                src="/blog/loon-award/nghia-loon-award-plaque-trio.jpg"
                                alt="Jacob Bechtold, Nghia Trinh holding the first Loon Award plaque, and Council Member LaTrisha Vetaw in front of the Great Lakes Solar banner"
                                width={1920}
                                height={1440}
                                caption="Jacob, Nghia and Council Member Vetaw with the first Loon Award."
                            />

                            <h2>Presenting the Award</h2>
                            <p>
                                Minneapolis Council Member LaTrisha Vetaw, who
                                has known Nghia for years, joined us in
                                presenting the Loon Award. She spoke about how
                                Nghia shines in Camden:
                            </p>
                            <blockquote>
                                &quot;If you have a car problem, he will fix
                                your car. He will let you make payment. He will
                                have an emergency fix done for you so you can
                                get to work, so you can get your kids to
                                daycare. He is exactly the type of business
                                owner we need in this community.&quot;
                            </blockquote>
                            <p>
                                She also pointed out Nghia&apos;s vegetable
                                garden out back, where customers can pick
                                tomatoes and cucumbers while they wait, and the
                                teenagers from the neighborhood he is always
                                training. &quot;Anytime I come here,
                                someone&apos;s teenager is here learning how to
                                fix cars.&quot;
                            </p>

                            <Photo
                                src="/blog/loon-award/nghia-latrisha-ceremony.jpg"
                                alt="Jacob Bechtold, Nghia Trinh and Council Member LaTrisha Vetaw laughing during the ceremony"
                                width={1600}
                                height={1068}
                                caption="Jacob, Nghia and Council Member Vetaw during the ceremony."
                            />

                            <h2>Why a loon</h2>
                            <p>
                                On a Boundary Waters trip in high school, I took
                                a canoe out alone one evening, and right around
                                sunset a loon popped up next to me. I spent a
                                calm moment floating across from that loon and
                                felt a strong calling to protect the
                                environment.
                            </p>

                            <Photo
                                src="/blog/loon-award/boundary-waters-canoe-sunset.jpg"
                                alt="A canoe on a calm Boundary Waters lake at sunset"
                                width={1920}
                                height={1080}
                                caption="A photo from Jacob's Boundary Waters trip in high school."
                            />

                            <p>
                                That loon is my reason for pursuing a career in
                                renewable energy and ultimately starting Great
                                Lakes Solar. Working with Nghia and seeing his
                                positive impact on the community inspired me to
                                honor that energy in others with the Loon Award.
                            </p>
                            <p>
                                Nghia spent the weeks before the event telling
                                everyone I was giving him the &quot;Loonatic
                                Award,&quot; so at the ceremony I had to shed
                                light on some loon facts that felt fitting.
                            </p>
                            <p>
                                It happens that loons are extremely hard
                                workers. Unlike most birds, they dive underwater
                                for all of their food, all day long. Nghia is the
                                hardest working person I know: he&apos;ll work
                                late for customers that need their car back in a
                                pinch and offer payment plans to those who need
                                it.
                            </p>
                            <p>
                                Loons are also loyal. They come back to the same
                                lake year after year. With 25 years committed to
                                the same corner of North Minneapolis, it&apos;s
                                nice to see Nghia&apos;s loyalty to the
                                neighborhood is well reciprocated. The award
                                just fit.
                            </p>

                            <Photo
                                src="/blog/loon-award/nghia-laughing-award.jpg"
                                alt="Nghia Trinh laughing while holding the Loon Award plaque next to Jacob Bechtold"
                                width={1068}
                                height={1600}
                                caption="Jacob and Nghia with the Loon Award."
                                className="mx-auto max-w-sm"
                            />

                            <h2>What the Loon Award means to me</h2>
                            <p>
                                Building Nghia&apos;s project taught me what it
                                looks like to build a business that matters:
                                know your customers, treat them right, and show
                                up for your neighborhood. The Loon Award is our
                                way of saying thank you to the people already
                                doing that, the ones making their corner of the
                                world a better place while also choosing a
                                sustainable future.
                            </p>
                            <p>
                                The award reads: for his dedication to the North
                                Minneapolis community and his commitment to
                                building a sustainable future.
                            </p>

                            <h2>Every year, a new loon</h2>
                            <p>
                                This is now an annual tradition. Every year
                                Great Lakes Solar will recognize a person,
                                business or organization that makes their
                                community a better place and is committed to a
                                sustainable future. Nghia set the bar high.
                            </p>

                            <Photo
                                src="/blog/loon-award/jacob-solarpod-team.jpg"
                                alt="Jacob Bechtold with two members of the SolarPod installation team in front of the Great Lakes Solar banner"
                                width={1200}
                                height={801}
                                caption="Jacob with the SolarPod team, who installed the system."
                            />

                            <h2>Thank you</h2>
                            <p>
                                Thank you to Council Member LaTrisha Vetaw for
                                joining us, to SolarPod for installing the
                                system, to Naomi Thomson for planning the whole
                                event, to Ethan Dorn and G2 Perspectives for the
                                photos and drone footage, and to the friends and
                                family who grilled, ran the booth and stayed to
                                clean up. Most of all, thank you, Nghia, for
                                opening your shop and your yard to all of us, and
                                for everything you have taught me.
                            </p>

                            <Photo
                                src="/blog/loon-award/loon-award-crowd.jpg"
                                alt="A large group of guests posing together in front of the Great Lakes Solar banner outside Nghia's Auto Service"
                                width={1600}
                                height={1068}
                                caption="Friends, family, neighbors and customers at the first Loon Award, outside Nghia's Auto Service."
                            />
                            <p className="text-sm opacity-70">
                                Drone photos by G2 Perspectives. Event photos by
                                Ethan Dorn.
                            </p>
                        </div>
                    </div>
                </Container>
            </article>
        </>
    )
}
