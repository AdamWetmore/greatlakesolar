import {
    CreditStackInfographic,
    DeadlineTimelineInfographic,
} from '@/components/blog/itc-infographics'
import IntakeForm from '@/components/forms/intake'
import { Container } from '@/components/layout/container'
import { blogPosts } from '@/models/blog'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const post = blogPosts.find((p) => p.slug === 'federal-solar-tax-credit')!
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
    publisher: {
        '@type': 'Organization',
        name: 'Great Lakes Solar',
        logo: { '@type': 'ImageObject', url: `${siteUrl}/PrimaryLogo.svg` },
    },
    mainEntityOfPage: url,
}

const linkStyle =
    'underline decoration-blue-500 decoration-2 underline-offset-4 hover:opacity-80'

function ExternalLink({
    href,
    children,
}: {
    href: string
    children: React.ReactNode
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={linkStyle}
        >
            {children}
        </a>
    )
}

export default function FederalSolarTaxCreditPost() {
    return (
        <>
            <Head>
                <title>{`${post.title} | Great Lakes Solar`}</title>
                <meta name="description" content={post.description} />
                <link rel="canonical" href={url} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={url} />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.description} />
                <meta property="og:image" content={`${siteUrl}${post.image}`} />
                <meta property="og:image:width" content="1920" />
                <meta property="og:image:height" content="1280" />
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
                <div className="relative h-40 w-full md:h-64">
                    <Image
                        src={post.image}
                        alt={post.imageAlt}
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover"
                    />
                    <div className="absolute right-2 bottom-1 text-xs text-white/90">
                        Photo by{' '}
                        <a
                            href="https://unsplash.com/@chuttersnap?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                            className="underline"
                        >
                            CHUTTERSNAP
                        </a>{' '}
                        on{' '}
                        <a
                            href="https://unsplash.com/photos/blue-solar-panels-s_7BE4D2va0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                            className="underline"
                        >
                            Unsplash
                        </a>
                    </div>
                </div>
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
                            By Jacob Bechtold, Founder · Updated{' '}
                            {post.dateLabel}
                        </p>

                        <div className="mt-8 space-y-5 text-base leading-relaxed md:text-lg [&_h2]:pt-6 [&_h2]:text-left [&_h2]:text-2xl [&_li]:pl-1 [&_ul]:list-disc [&_ul]:space-y-3 [&_ul]:pl-6">
                            <p>
                                Right now, the federal tax credit for solar has
                                been a huge interest driver for businesses,
                                farms, and nonprofit organizations we&apos;ve
                                been speaking with. It is also changing fast.
                                The credit for solar panels now has a firm end
                                date, the credit for batteries runs for years
                                longer, and some projects can earn extra bonus
                                credits on top. Here are straight answers to the
                                questions we hear most.
                            </p>

                            <h2>The short version</h2>
                            <ul>
                                <li>
                                    <strong>Solar: </strong> businesses and
                                    nonprofits can still get 30% of the project
                                    cost back, but the system has to be{' '}
                                    <strong>
                                        up and running by December 31, 2027.
                                    </strong>
                                </li>
                                <li>
                                    <strong>Batteries: </strong> the 30% credit
                                    for battery storage stays in place through
                                    2033, then it decreases.
                                </li>
                                <li>
                                    <strong>Bonus adders: </strong> the tax
                                    credit can increase by 10% for using
                                    U.S.-made equipment on a project, and also
                                    increase by 10% for being in a qualifying
                                    &quot;energy community.&quot;
                                </li>
                            </ul>

                            <h2>What is the federal solar tax credit?</h2>
                            <p>
                                It is a federal tax credit, officially an{' '}
                                <ExternalLink href="https://www.irs.gov/forms-pubs/about-form-3468">
                                    Investment Tax Credit
                                </ExternalLink>{' '}
                                or &quot;ITC.&quot; Investment tax credits help
                                businesses cover the upfront cost of new
                                equipment. The{' '}
                                <ExternalLink href="https://www.irs.gov/credits-deductions/clean-electricity-investment-credit">
                                    Clean Electricity Investment Credit
                                </ExternalLink>{' '}
                                reduces your tax bill by a percentage of what
                                you spend on a qualifying solar or battery
                                system (baseline is 30%). A tax credit is better
                                than a deduction: it reduces your tax bill
                                dollar for dollar. If your business owes $40,000
                                in federal income tax and earns a $30,000
                                credit, you now owe $10,000.
                            </p>

                            <h2>How much is it worth?</h2>
                            <p>
                                The base credit is 30% of the total eligible
                                project cost. On a $100,000 commercial system,
                                that is a $30,000 credit. Eligible costs include
                                the panels, inverters, racking, batteries,
                                wiring, labor, engineering, and permitting.
                            </p>
                            <p>
                                Businesses can usually stack a second federal
                                benefit on top:{' '}
                                <strong>accelerated depreciation</strong>. This
                                allows you to write off the cost of the system
                                on your taxes much faster than most equipment
                                will actually depreciate. Under current law,
                                many businesses can deduct the full depreciable
                                amount in the first year. Together, the credit
                                and depreciation often cover around 40% to 50%
                                of the project&apos;s cost for a business that
                                pays taxes. Non-tax-paying entities cannot use
                                the accelerated depreciation incentive.
                            </p>

                            <h2>Who can use it?</h2>
                            <ul>
                                <li>
                                    <strong>Businesses of any size </strong>{' '}
                                    that own their system, including LLCs, S
                                    corps, farms, and landlords.
                                </li>
                                <li>
                                    <strong>
                                        Nonprofits, churches, schools, cities,
                                        and tribes.
                                    </strong>{' '}
                                    Even though they owe no income tax, they can
                                    receive the 30% as a direct cash payment
                                    from the IRS (called &quot;direct pay&quot;
                                    or{' '}
                                    <ExternalLink href="https://www.irs.gov/credits-deductions/elective-pay-and-transferability">
                                        &quot;elective pay&quot;
                                    </ExternalLink>
                                    ).
                                </li>
                            </ul>

                            <figure className="py-4">
                                <Image
                                    src="/blog/nghias-auto-racking-rows.jpg"
                                    alt="Rows of solar racking ready for panels on a flat commercial roof"
                                    width={1600}
                                    height={1200}
                                    sizes="(min-width: 768px) 768px, 100vw"
                                    className="h-auto w-full rounded-xl"
                                />
                                <figcaption className="mt-2 text-sm opacity-70">
                                    Racking going up on a Great Lakes Solar
                                    commercial project at Nghia&apos;s Auto in
                                    Minneapolis.
                                </figcaption>
                            </figure>

                            <h2>Is the credit really going away?</h2>
                            <p>
                                For solar, yes. The federal tax law passed in
                                July 2025 set an end date. In plain terms:
                            </p>
                            <ul>
                                <li>
                                    A new commercial solar project needs to be{' '}
                                    <strong>
                                        placed in service by December 31, 2027
                                    </strong>{' '}
                                    to get the credit. &quot;Placed in
                                    service&quot; means installed, inspected,
                                    and approved by your utility to turn on.
                                </li>
                                <li>
                                    Projects that officially started
                                    construction on or before July 4, 2026 have
                                    a longer runway to finish. That date has
                                    passed, so for anyone starting a project
                                    today,{' '}
                                    <strong>
                                        the end of 2027 is the line.
                                    </strong>
                                </li>
                                <li>
                                    Starting in 2028, new solar systems no
                                    longer qualify.
                                </li>
                            </ul>

                            <h2>How much time do I actually have?</h2>
                            <p>
                                Commercial solar projects usually take{' '}
                                <strong>six to 12 months </strong> from signed
                                agreement to the day the system turns on. That
                                time covers design, engineering, permits,
                                ordering equipment, installation, and the
                                utility&apos;s approval to connect to the grid,
                                which is often the slowest step.
                            </p>
                            <p>
                                The deadline is{' '}
                                <strong>December 31, 2027</strong>, and it is a
                                finish line, not a starting line. Signing a
                                contract or breaking ground by that date is not
                                enough: the system has to be fully installed and
                                approved by your utility to operate.
                            </p>

                            <DeadlineTimelineInfographic />

                            <h2>Are there any incentives for batteries?</h2>
                            <p>
                                Good news here. Commercial battery storage,
                                unlike commercial solar, is on a separate, much
                                longer track. The full 30% credit stays in place
                                for battery projects that start construction
                                through 2033, then drops to 22.5% in 2034 and
                                15% in 2035.
                            </p>
                            <ul>
                                <li>
                                    A battery can qualify paired with solar,
                                    added to solar you already have, or on its
                                    own.
                                </li>
                                <li>
                                    Batteries can cut demand charges, keep
                                    critical equipment running during outages,
                                    and store solar power for later in the day.
                                </li>
                                <li>
                                    Because the solar credit ends sooner, the
                                    smartest plan for many businesses is to get
                                    solar in by 2027 and add or expand storage
                                    on their own timeline after that.
                                </li>
                            </ul>

                            <h2>Can I earn additional credit beyond 30%?</h2>
                            <p>
                                Yes, if the project meets certain conditions.
                                Each credit adder is worth 10% of the project
                                cost, and they can stack.
                            </p>
                            <ul>
                                <li>
                                    <strong>Domestic content (+10%). </strong>{' '}
                                    If a high enough share of the equipment cost
                                    comes from U.S.-made components, the project
                                    earns an extra 10%. The bar is 50% for
                                    projects starting in 2026 and rises to 55%
                                    after that. This is harder to hit than it
                                    sounds, because many &quot;American&quot;
                                    panels still use imported parts, so it takes
                                    careful documentation from each
                                    manufacturer. Great Lakes Solar has secured
                                    the 10% domestic content adder for previous
                                    clients and handles all of the paperwork for
                                    you.
                                </li>
                                <li>
                                    <strong>Energy community (+10%).</strong>{' '}
                                    Projects located in certain areas tied to
                                    the fossil fuel industry qualify: near a
                                    closed coal mine or coal power plant, on a
                                    brownfield site, or in an area with high
                                    fossil fuel employment and higher
                                    unemployment. The Department of Energy
                                    publishes a map you can check by address.
                                </li>
                                <li>
                                    <strong>
                                        Low-income communities (+10% or +20%).
                                    </strong>{' '}
                                    A limited, competitive program for projects
                                    in low-income areas or that serve low-income
                                    residents. It requires an application and is
                                    not guaranteed. Great Lakes Solar has
                                    secured the 10% low-income community adder
                                    for previous clients and handles all of the
                                    paperwork for you.
                                </li>
                            </ul>
                            <p>
                                So a project that hits both the domestic content
                                and energy community adders could reach{' '}
                                <strong>50% </strong> instead of 30%. We check
                                every project for every adder we can find, and
                                we will tell you plainly when one is out of
                                reach rather than count on it in your numbers
                                prematurely.
                            </p>

                            <CreditStackInfographic />

                            <h2>
                                Are there rules about where the equipment comes
                                from?
                            </h2>
                            <p>
                                Yes. Starting in 2026, projects must limit how
                                much of their equipment comes from companies
                                tied to certain foreign governments, often
                                called{' '}
                                <ExternalLink href="https://www.energy.gov/cmei/manufacturing/foreign-entity-concern-interpretive-guidance">
                                    the &quot;FEOC&quot; rules
                                </ExternalLink>
                                . In practice, this means your developer needs
                                written documentation from manufacturers on
                                where key components are made. We collect that
                                paperwork for every project so you have it if
                                the IRS ever asks.
                            </p>

                            <h2>
                                My business doesn&apos;t owe much tax. Can I
                                still benefit?
                            </h2>
                            <p>
                                Yes you can, and here are some of the routes to
                                get the most out of the solar tax credit:
                            </p>
                            <ul>
                                <li>
                                    <strong>Use it over several years.</strong>{' '}
                                    If the credit is bigger than your tax bill,
                                    the unused part can be carried back to the
                                    previous 3 tax years (to get a refund of
                                    taxes already paid, but not for years before
                                    2023) or carried forward for up to 22 years
                                    to reduce future taxes.
                                </li>
                                <li>
                                    <strong>Sell it. </strong> Businesses can
                                    sell (&quot;transfer&quot;) the credit to
                                    another company for cash, typically around
                                    90 cents on the dollar.
                                </li>
                                <li>
                                    <strong>Direct pay </strong> for nonprofits
                                    and public entities, as described above.
                                </li>
                                <li>
                                    <strong>Third-party ownership. </strong> A
                                    financing partner owns the system, claims
                                    the credit, and passes the savings to you
                                    through a lower lease or power price.
                                </li>
                            </ul>
                            <p>
                                Every situation is different, so talk with your
                                tax advisor about which option fits you.
                            </p>

                            <h2>
                                Do I need to pay prevailing wages to get the
                                full credit?
                            </h2>
                            <p>
                                Not for most rooftop projects. Federal
                                prevailing wage rules require contractors to pay
                                local market-standard rates and benefits to
                                construction workers on a project. Solar systems{' '}
                                <strong>under 1 megawatt </strong> (which covers
                                nearly every business rooftop) qualify for the
                                full 30% tax credit without the federal
                                prevailing wage and apprenticeship rules. Larger
                                projects must meet those rules or the credit
                                drops sharply.
                            </p>

                            <h2>What should I do next?</h2>
                            <ul>
                                <li>
                                    <strong>Get real numbers. </strong> We will
                                    model your actual building, your utility
                                    bills, the credit, depreciation, and any
                                    adders or local grants you qualify for.
                                </li>
                                <li>
                                    <strong>Loop in your tax advisor</strong>{' '}
                                    early so the credit lands where it should.
                                </li>
                                <li>
                                    <strong>Start soon. </strong> With
                                    solar&apos;s end date set, the projects that
                                    finish comfortably are the ones that start
                                    in the next few months.
                                </li>
                            </ul>
                            <p>
                                Have more questions about solar and batteries?
                                See our{' '}
                                <Link
                                    href="/resources#faq"
                                    className={linkStyle}
                                >
                                    frequently asked questions
                                </Link>
                                .
                            </p>
                        </div>

                        <aside className="border-foreground/20 mt-12 flex flex-col gap-6 rounded-xl border p-5 md:flex-row md:items-center md:p-6">
                            <Image
                                src="/blog/jacob-on-nghias-auto-roof.jpg"
                                alt="Jacob Bechtold, founder of Great Lakes Solar, on a commercial rooftop project"
                                width={1600}
                                height={1200}
                                sizes="(min-width: 768px) 280px, 100vw"
                                className="h-auto w-full shrink-0 rounded-lg md:w-[280px]"
                            />
                            <div className="space-y-3">
                                <p>
                                    Great Lakes Solar is a commercial and
                                    residential solar developer. We design,
                                    finance, and build solar-and-storage systems
                                    for businesses, nonprofits, schools, farms,
                                    and homes, managing every step from energy
                                    analysis through permitting, utility
                                    approval, and construction. We focus on
                                    getting solar built quickly and correctly so
                                    our customers can put their money toward
                                    their mission instead of their electric
                                    bill.
                                </p>
                                <IntakeForm label="Contact us" />
                            </div>
                        </aside>

                        <p className="mt-10 text-sm italic opacity-70">
                            This article is general information, not tax or
                            legal advice. Tax credit rules change, and
                            eligibility depends on your specific project and tax
                            situation. Please consult a qualified tax
                            professional before making decisions.
                        </p>
                    </div>
                </Container>
            </article>
        </>
    )
}
