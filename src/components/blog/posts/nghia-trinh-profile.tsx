import { Container } from '@/components/layout/container'
import { blogPosts } from '@/models/blog'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'

const post = blogPosts.find(
    (p) => p.slug === 'nghia-trinh-north-minneapolis-mechanic'
)!
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
    author: { '@type': 'Person', name: 'Naomi Thomson' },
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

// Big pull quote for the few lines we want to stand out.
function PullQuote({ children }: { children: ReactNode }) {
    return (
        <figure className="my-4 border-y-2 border-blue-500 py-6">
            <blockquote className="!border-l-0 !pl-0 text-center font-sans text-2xl font-semibold !not-italic leading-snug md:text-3xl">
                {children}
            </blockquote>
            <figcaption className="mt-3 text-center text-sm uppercase tracking-wide opacity-70">
                Nghia Trinh
            </figcaption>
        </figure>
    )
}

export default function NghiaTrinhProfilePost() {
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
                <meta property="og:image:width" key="og:image:width" content="1600" />
                <meta property="og:image:height" key="og:image:height" content="900" />
                <meta name="twitter:title" content={post.title} />
                <meta name="twitter:description" content={post.description} />
                <meta name="twitter:image" content={`${siteUrl}${post.image}`} />
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
                            width={1600}
                            height={900}
                            priority
                            sizes="(min-width: 896px) 896px, 100vw"
                            className="h-auto max-h-[60vh] w-full rounded-xl object-cover object-[50%_20%]"
                        />
                        <figcaption className="mt-2 text-sm opacity-70">
                            Nghia and Jacob inside Nghia&apos;s Auto Service in
                            North Minneapolis.
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
                            By Naomi Thomson · {post.dateLabel}
                        </p>

                        <div className="mt-8 space-y-5 text-base leading-relaxed md:text-lg [&_blockquote]:border-l-4 [&_blockquote]:border-blue-500 [&_blockquote]:pl-5 [&_blockquote]:italic [&_h2]:pt-3 [&_h2]:text-left [&_h2]:text-2xl">
                            <p>
                                Ask anyone around the neighborhood and
                                you&apos;ll quickly learn Nghia does way more
                                than affordable oil changes.
                            </p>
                            <p>
                                Across the street, the baristas at the local
                                coffee shop have stories of Nghia shoveling
                                their snow. When you walk inside his shop,
                                you&apos;ll see his walls are covered nearly
                                floor to ceiling in notes from customers, some
                                with simple thank-yous, others funny quips or
                                borderline inappropriate jokes. (In all
                                fairness, Nghia does have a pretty large sign on
                                display warning that jokes may be at your
                                offense, so his customers know exactly what to
                                expect.)
                            </p>

                            <Photo
                                src="/blog/nghia-profile/nghia-office-notes-wall.jpg"
                                alt="A wall inside Nghia's Auto Service covered in handwritten sticky notes from customers"
                                width={1200}
                                height={1600}
                                caption="Customer notes cover the walls of Nghia's office."
                                className="mx-auto max-w-sm"
                            />

                            <p>
                                During Nghia&apos;s solar installation, we sat
                                down to get to know him on a personal level
                                because, frankly, we were curious how he came to
                                cultivate the unique atmosphere of his shop. Was
                                it even on purpose? What about Nghia&apos;s life
                                shaped him into both a mechanic and a
                                lighthearted neighborhood jokester?
                            </p>

                            <Photo
                                src="/blog/nghia-profile/nghias-auto-solar-drone.jpg"
                                alt="Aerial view of Nghia's Auto Service with its finished rooftop solar array"
                                width={1920}
                                height={1080}
                                caption="Nghia's Auto Service with its finished solar array."
                            />

                            <p>
                                In a single afternoon, as customers called and
                                auto parts sales reps shuffled in and out of the
                                shop, Nghia let us in on his story.
                            </p>

                            <h2>Growing up in Vietnam</h2>
                            <p>
                                Nghia was born in Vietnam and lost both of his
                                parents at a young age. Raised by his
                                grandmother, he worked at a sugarcane plantation as a
                                child, which provided him a meal a day and a
                                place to sleep. By the time he was eleven years
                                old, he switched to working in the jungle at a
                                rubber tree farm.
                            </p>
                            <blockquote>
                                &quot;When I worked there, I always wanted to
                                buy a pair of rubber rain boots, because you
                                walk in the jungle with the tall grass and your
                                feet are always wet in the morning with the fog.
                                To buy a pair of rain boots, it would take two
                                months of my wages.&quot;
                            </blockquote>
                            <p>
                                He described to us the limited sizes available
                                and how he didn&apos;t end up buying the boots
                                after all, because they were too expensive.
                                <a
                                    href="#rain-boots"
                                    className="no-underline"
                                    aria-label="Jump to the rain boots note at the end"
                                >
                                    *
                                </a>
                            </p>

                            <h2>Three attempts to leave the country</h2>
                            <p>
                                When he was fifteen years old, Nghia began his
                                journey to the United States. It took three
                                tries to escape. The boat that finally made it
                                was only supposed to be a short ride out to a
                                bigger ship. Nghia described the obstacles to us
                                in detail and how he and the other refugees
                                pushed through.
                            </p>
                            <p>
                                First, their boat sprang a leak that they had to
                                patch with mud. &quot;That boat had so many
                                holes that if you didn&apos;t bail the water out
                                every five minutes, it got heavy.&quot;
                            </p>
                            <p>
                                Then came massive waves. &quot;People talk about
                                ocean waves as big as a house. You think
                                they&apos;re lying, until you get out there.
                                It&apos;s huge.&quot; Nghia gestured to show the
                                size of the wave, far above his head.
                                &quot;Every time a wave hit, it covered the
                                whole boat. The sides were leaking. My body was
                                wet the entire trip. My brother and I had one
                                piece of tarp to cover ourselves to keep warm,
                                and we still had to stay hidden.&quot;
                            </p>
                            <p>
                                Their engine also ran out of oil. &quot;We were
                                floating on the ocean. We had a little blanket
                                and held it up as a sail. One of the people on
                                the boat was a military police officer, and he
                                said diesel has oil properties in it. So he
                                poured diesel into the crankcase, and we kept
                                going. Smoke everywhere, knocking, but it kept
                                going. Besides that, we didn&apos;t have enough
                                fuel. We only had 60 liters, about 20 gallons of
                                diesel, because we thought the boat was just for
                                taxiing out.&quot;
                            </p>
                            <p>
                                By multiple miracles, Nghia survived the journey
                                alongside thirty-one other refugees, including
                                his brother. He recounted the kindness shown to
                                him along the way, starting just before the
                                refugee camp island.
                            </p>

                            <PullQuote>
                                &quot;I remember standing in a holding cell, and
                                a guy walked by eating a donut. He ate half of
                                it and gave the other half to me. It tasted very
                                good,&quot; he said, tearing up.
                            </PullQuote>

                            <p>
                                &quot;Right now, every chance I have, I buy
                                donuts. When I was young, I&apos;d
                                eat a dozen filled donuts. Every time I had
                                money, I bought them.&quot;
                            </p>

                            <Photo
                                src="/blog/nghia-profile/nghia-jacob-joey-laughing.jpg"
                                alt="Nghia Trinh, Jacob Bechtold and Joey of SolarPod laughing in the open garage door of Nghia's Auto Service"
                                width={1920}
                                height={1080}
                                caption="Nghia, Jacob and Joey from SolarPod sharing a laugh at the shop before the project started."
                            />

                            <h2>Paper routes and pilot school</h2>
                            <p>
                                So now he&apos;s in the United States, but how
                                did he become the staple neighborhood mechanic?
                                At this point in the story, he&apos;s still only
                                fifteen years old.
                            </p>
                            <blockquote>
                                &quot;I thought in America you got everything
                                free. Free housing, no taxes, they give you a
                                car. Then I got my paper route, and my uncle
                                made me pay taxes on my first paper route. So I
                                got my first three months free in America, and
                                I&apos;ve paid ever since. My first paper route
                                was 230 papers. Most American kids had maybe 20
                                or 30, and they had parents and a wagon. Here I
                                am, no wagon. I had a bike.&quot;
                            </blockquote>
                            <p>
                                He kept up his paper route for nine years, into
                                college, where he was in school to
                                become... a pilot.
                            </p>
                            <p>
                                Back on the rubber plantation, Nghia had dreamed
                                of driving a Caterpillar, because the operators
                                clearing the jungle made good money, or a bus,
                                because in Vietnam everybody travels by bus.
                                &quot;Then I came to America and everybody can
                                drive.&quot; So he took to flying.
                            </p>
                            <p>
                                He even trained himself out of motion sickness.
                                &quot;I made myself ride rides over and over so
                                I could overcome the motion sickness. I went to
                                school to be a pilot for the first two years,
                                and every dollar from the paper route, I burned
                                in the sky with an airplane. I made a lot of
                                mistakes up there. I could have been killed so
                                many times.&quot;
                            </p>
                            <p>
                                In 1993, Northwest Airlines laid off a lot of
                                pilots, which led Nghia to reconsider flying.
                                &quot;If I continued as a pilot, when I got done
                                I&apos;d owe a lot of money and might not have a
                                job, because I&apos;d have to compete with
                                experienced pilots. So I decided to become a
                                mechanic. At least I could fix my own car.&quot;
                            </p>

                            <Photo
                                src="/blog/loon-award/nghia-latrisha-ceremony.jpg"
                                alt="Nghia Trinh joking with Council Member LaTrisha Vetaw while Jacob Bechtold laughs at the Loon Award ceremony"
                                width={1600}
                                height={1068}
                                caption="Nghia trading jokes with Council Member LaTrisha Vetaw and Jacob at the Loon Award ceremony."
                            />

                            <h2>Learning to fix cars</h2>
                            <p>
                                By then, Nghia was driving his paper route, and
                                his car broke down a lot. He depended on a
                                mechanic who could only come after his own
                                workday, at six or seven at night.
                                &quot;Sometimes he showed up and sometimes he
                                didn&apos;t, and I had no car to deliver papers.
                                That really put me in a scramble.&quot;
                            </p>
                            <p>
                                Well before opening his own shop, Nghia learned
                                how much a reliable mechanic matters.
                            </p>

                            <PullQuote>
                                &quot;When you come in, I know you need your
                                car. That means if I stay here until midnight,
                                or until the next morning, to get your car
                                going, you will remember that.&quot;
                            </PullQuote>

                            <p>
                                As he sees it, that customer walks away
                                thinking: &quot;Last time I had a problem,
                                he&apos;s the one who bailed me out. He&apos;s
                                the one who stayed late and stuck his neck out
                                to help me. So next time I have a problem,
                                I&apos;ll go to him.&quot;
                            </p>
                            <p>
                                At the start of mechanic school, a teacher told
                                Nghia to work as a mechanic during his studies,
                                promising he&apos;d learn &quot;10 times
                                faster&quot; than if he only went to school.
                                Alongside his coursework and paper route, he
                                took a mechanic job for $5 an hour, about half
                                of what he had been making at his previous job.
                                &quot;I set my goal to learn. In 30 days I got a
                                50-cent raise.&quot;
                            </p>
                            <p>
                                But that routine didn&apos;t last long. &quot;I
                                went to full-time mechanic and full-time school.
                                Two full-times plus the paper route. Then in
                                college I started falling asleep in class. Every
                                day I drank two liters of Mountain Dew. So I
                                said, okay, I&apos;m paying for school; the
                                paper route has to go.&quot;
                            </p>
                            <p>
                                After graduating, he enrolled in the Toyota
                                master mechanic program and kept learning and
                                working. &quot;During the day I worked at a
                                Toyota dealership, and at night I worked at a
                                limousine company as a mechanic. Each day I
                                worked between 14 and 18 hours.&quot; As Nghia
                                said this, a customer listening in pointed out
                                that he still works that many hours today.
                            </p>

                            <h2>Building the shop</h2>
                            <p>
                                After seven years at the limousine company,
                                Nghia set his sights on running his own shop.
                                &quot;In South Minneapolis, all the shops were
                                expensive, $200,000 up to $300,000 or $400,000.
                                I found this place for $50,000, this place right
                                here. It was all run down. I renovated and fixed
                                this place for six months. During the day I
                                worked, then at 10 o&apos;clock at night I came
                                here and worked until 3 or 4 in the morning,
                                then went back to work. For six months.&quot;
                            </p>

                            <Photo
                                src="/blog/loon-award/camden-drone.jpg"
                                alt="Aerial view of Nghia's Auto Service and its new solar array in the Camden neighborhood, with the downtown Minneapolis skyline in the distance"
                                width={1920}
                                height={1080}
                                caption="Nghia's Auto Service in Camden, North Minneapolis, with downtown on the horizon."
                            />

                            <p>
                                &quot;So how I became a mechanic? Because I
                                failed at aviation,&quot; he says with a
                                chuckle, before telling us about his dream of
                                flying around Vietnam someday. He also hopes to
                                teach mechanics, but only to people who are
                                genuinely interested in learning.
                            </p>

                            <h2>Customers for life</h2>
                            <p>
                                Nghia has a natural gift for bringing light to
                                what is often a dreadful and expensive
                                experience: taking your car to get fixed. He
                                needs no marketing; his honest work does all the
                                selling. His customers trust him and pay him
                                back in loyalty.
                            </p>

                            <blockquote>
                                &quot;A customer came in, I did the oil change,
                                and his AC didn&apos;t work. I fixed his AC. I
                                wasn&apos;t even supposed to work on that, and I
                                didn&apos;t charge him anything. He&apos;s been
                                my customer ever since. He said, &apos;Nghia,
                                you fixed my AC. [Another shop] charged me and
                                it didn&apos;t work. You fixed it, it worked,
                                and you didn&apos;t charge me a penny.&apos; So
                                he started coming in, all his kids, everybody.
                                Now you&apos;ve got a customer for life. Just
                                that alone.&quot;
                            </blockquote>
                            <p>
                                He pauses. &quot;I do care about my work. I do
                                care about my clients. I do care about my
                                business. Even when a car goes bad, something not
                                working right, I make sure it works right for
                                the customer. Not just take your money and
                                go.&quot;
                            </p>

                            <h2>His advice: go beyond</h2>
                            <p>
                                When we asked Nghia for his advice on running a
                                small business, he said:
                            </p>

                            <PullQuote>
                                &quot;Just do your best... no, go beyond.
                                Don&apos;t just do your best. You can do your
                                best and still fail people. Your best could
                                suck. Your best might not be equal to what I do.
                                Do all you can do. Don&apos;t stop at what you
                                can do. Do more. That&apos;s the only way you
                                succeed. If you only do enough, you just stay
                                there. You cannot excel.&quot;
                            </PullQuote>

                            <p>
                                He continued: &quot;So you go beyond. People will see how
                                hard you work. Then if there&apos;s a mistake or
                                anything less than perfect, they&apos;ll still
                                have a chance to forgive. Same thing with my
                                work here. I do as much as I can, beyond what I
                                can do, so I don&apos;t give them a chance to
                                have a complaint or a concern.&quot;
                            </p>

                            <h2>The first Loon Award</h2>
                            <p>
                                Nghia is a beloved member of the North
                                Minneapolis community. Great Lakes Solar had the
                                honor of celebrating his impact with the{' '}
                                <Link
                                    href="/resources/blog/loon-award-2026-nghia-trinh"
                                    className={linkStyle}
                                >
                                    first Great Lakes Solar Loon Award
                                </Link>{' '}
                                at the ribbon cutting in Nghia&apos;s lot on
                                Wednesday, Oct. 28.
                            </p>

                            <Photo
                                src="/blog/nghia-profile/jacob-nghia-vetaw.jpg"
                                alt="Jacob Bechtold, Nghia Trinh and Council Member LaTrisha Vetaw smiling in front of the Great Lakes Solar banner"
                                width={1920}
                                height={1282}
                                caption="Jacob Bechtold, Nghia Trinh and Council Member LaTrisha Vetaw at the Loon Award ceremony."
                            />

                            <p>
                                Just as a simple encounter with a loon led our
                                founder Jacob to start Great Lakes Solar,
                                Nghia&apos;s honest and lighthearted presence in
                                the community brightens people&apos;s days. He
                                reminds us why we want to make the world a
                                positive and inclusive place for all.
                            </p>


                            <p
                                id="rain-boots"
                                className="scroll-mt-24 border-t pt-6 text-lg md:text-xl"
                            >
                                *If you&apos;re wondering, today Nghia owns two
                                pairs of rain boots. He doesn&apos;t wear them
                                often, but with watery eyes he told us how much
                                they mean to him, because they represent just
                                how far he&apos;s come.
                            </p>

                            <p className="text-sm opacity-70">
                                Event photos by Ethan Dorn. Drone and
                                pre-project photos by G2 Perspectives.
                            </p>
                        </div>
                    </div>
                </Container>
            </article>
        </>
    )
}
