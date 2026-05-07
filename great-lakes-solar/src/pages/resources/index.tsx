import FAQSection from '@/components/faq/faq-section'
import { Container } from '@/components/layout/container'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import FAQ from '@/models/faq'
import {
    BatteryPlus,
    ChartNoAxesCombined,
    CircleDollarSign,
    Clock,
    Earth,
    HandCoins,
    HousePlug,
    HousePlus,
    SolarPanel,
    TrendingUp,
    UtilityPole,
    Zap,
} from 'lucide-react'
import Image from 'next/image'

export const getStaticProps = async () => {
    // simulate a half second load time for now
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Fetch FAQ data from your CMS or API
    const faqs: FAQ[] = [
        new FAQ(
            'How long do solar panels last?',
            'Most quality solar panels are designed to last 35-40 years, Manufacturers typically offer a 25-year performance warranty, guaranteeing that the panels will produce at least 80% of their original output after 25 years. In practice, most systems continue procuding well beyond that.',
            'Basics'
        ),
        new FAQ(
            'What is net metering?',
            'Net metering is a billing arrangement with your utility company that credits you for the excess electricity your solar system sends back to the grid. When your panels produce more than you need (during sunny hours), the surplus flows to the grid and you earn credits. Wehn you need more power than your panels produce (at night or on cloudy days), you draw from the grid and use those credits. Essentially, this equates to the grid acting as a giant battery. All utilities in Minnesota are required to offer net metering.',
            'Basics'
        ),
        new FAQ(
            'What happens to my solar system during a power outage?',
            'A standard grid-tied solar system will automatically shut off during a grid outage, this is a safety requirement to protect utility workers. However, if you add a battery storage system, your home or business can continue running on stored solar energy even when the grid is down. This is one of the most popular reasons our commercial clients add batteries.',
            'Basics'
        ),
        new FAQ(
            'Do I need to clean or maintain my solar panels?',
            "Solar panels require very little maintenance. Rain does most of the cleaning work naturally. Occasionally, panels may benefit from a rinse with a garden hose if they accumulate significant dust or debris. We recommend an annual or bi-annual visual inspection and weekly monitoring of your system's performance data (which we can help you set up) to catch any unusual drops in output early.",
            'Basics'
        ),
        new FAQ(
            'Is commercial solar a good investment for my business?',
            'For most businesses, yes, especially those with high daytime energy consumption. Commercial solar typically reduces electricity costs by 20-30% or more, and most systems pay for themselves within 5-8 years. After that, you\-re generating essentially free electricity for 20+ years. Combined with federal tax credits and accelerated depreciation, the real out-of-pocket cost is often far lower than the sticker price.',
            'Commercial Solar'
        ),
        new FAQ(
            'How big of a solar system does my business need?',
            "System size depends on your energy consumption, available roof or ground space, and your goals. Commercial systems in the Great Lakes region typically range from 30 kilowatts (kW) to over 1 megawatt (MW). We start every project with a free energy assessment — we'll review your utility bills and propose a system sized specifically for your operation.",
            'Commercial Solar'
        ),
        new FAQ(
            'What if I lease my building instead of own it?',
            "You may still be able to go solar with the property owner's consent. We can help you navigate that conversation and structure a project that works for both parties. In some cases, the landlord benefits directly from the improved property value, which can make approval easier than you'd expect.",
            'Commercial Solar'
        ),
        new FAQ(
            'Will solar disrupt my business operations during installation?',
            'We design our installation process to minimize disruption. Most commercial installations are completed within a few weeks depending on system size. We coordinate timing with you and work efficiently to get your system up and running as quickly as possible.',
            'Commercial Solar'
        ),
        new FAQ(
            ' Can solar help reduce my demand charges?',
            "Yes, especially when paired with battery storage. Demand charges are fees utilities impose based on your peak power draw during a billing period. By generating your own solar power during high-use hours and drawing from batteries during demand spikes, many businesses significantly reduce or even eliminate these charges. We'll analyze your utility bills to show you exactly how much you could save.",
            'Commercial Solar'
        ),
        new FAQ(
            'How does battery storage work with solar?',
            "Battery storage systems store excess electricity generated by your solar panels during the day. That stored energy can then be used at night, during peak-rate hours, or when the grid goes down. Think of it as your own personal power reserve — you're generating energy when it's available and using it when you need it most.",
            'Battery Storage'
        ),
        new FAQ(
            'Do I need batteries to go solar?',
            "No, most solar installations are grid-tied systems that work without batteries. However, batteries add significant value if you want backup power during outages, want to reduce peak demand charges, or want to maximize your use of self-generated solar energy. We'll help you decide whether batteries make financial and practical sense for your situation.",
            'Battery Storage'
        ),
        new FAQ(
            'How long can a battery system power my business during an outage?',
            'It depends on the size of your battery system and your energy consumption. A well-sized battery can keep critical loads running - lighting, refrigeration, computers, security systems - for many hours or even through the night. For businesses where uptime is critical, we can design a system to cover your specific needs.',
            'Battery Storage'
        ),
        new FAQ(
            'What brands of batteries do you install?',
            "We work with leading commercial battery manufacturers and select products based on performance, warranty, and suitability for your application. We'll walk you through the options and make a recommendation based on your energy goals and budget.",
            'Battery Storage'
        ),
        new FAQ(
            'What is "peak shaving" and how does battery storage help?',
            'Peak shaving is the practice of reducing your highest power draw during a billing period to lower demand charges on your utility bill. Batteries enable peak shaving by supplying stored energy during high-demand moments — so your business never pulls a large spike from the grid. For businesses with significant demand charges, this alone can justify the cost of a battery system.',
            'Battery Storage'
        ),
        new FAQ(
            'What federal incentives are available for commercial solar?',
            "The federal Investment Tax Credit (ITC) currently allows businesses to deduct 30% of the total cost of a solar installation directly from their federal tax liability. This is a dollar-for-dollar reduction in taxes owed - not just a deduction from income. In addition, commercial solar systems qualify for accelerated depreciation under the Modified Accelerated Cost Recovery System (MACRS), which allows you to depreciate most of the system's value in the first year, generating additional tax savings.",
            'Financing & Incentives'
        ),
        new FAQ(
            'Are there state or local incentives in Minnesota?',
            "Minnesota and other states in the midwest offer additional incentives including net metering programs, grants, low interest loans, utility rebates, and property tax exemptions for solar installations. The available incentives change over time, so we always do a full incentive review for every client to make sure you're capturing every dollar available.",
            'Financing & Incentives'
        ),
        new FAQ(
            'How quickly will my solar system pay for itself?',
            'Most commercial solar systems have a payback period of 5-8 years, depending on system size, energy rates, financing structure, and available incentives. After payback, you continue to benefit from free or near-free electricity for the remaining life of the system — typically 25+ more years.',
            'Financing & Incentives'
        ),
        new FAQ(
            'Does going solar affect my property taxes?',
            "In Minnesota and other midwest states, solar energy systems are exempt from property tax assessment increases, meaning your property taxes won't go up as a result of adding solar, even though the system adds value to your property. This is a significant advantage compared to other capital improvements.",
            'Financing & Incentives'
        ),
        new FAQ(
            'Can nonprofits or tax-exempt organizations benefit from solar?',
            "Yes, even if your organization doesn't pay federal income tax, there are pathways to capture solar incentives. Direct pay provisions under recent federal legislation allow certain tax-exempt entities to receive the value of the ITC as a direct payment. We'll work with you to find the best financial structure for your situation.",
            'Financing & Incentives'
        ),
    ]

    // Convert FAQ instances to plain objects
    const faqsAsObjects = faqs.map((faq) => ({
        question: faq.question,
        answer: faq.answer,
        category: faq.category,
    }))

    return {
        props: {
            faqs: faqsAsObjects,
        },
    }
}
export default function Resources({ faqs }: { faqs: FAQ[] }) {
    return (
        <div>
            <section
                id="how-it-works"
                className="relative md:h-[70vh] lg:h-[80vh]"
            >
                <Image
                    src="/bernd-dittrich-fu1GHY5kq-g-unsplash.jpg"
                    alt="Aerial view of solar panels on a roof"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 z-40 object-cover brightness-75"
                />
                <Container className="text-accent relative flex h-full flex-col gap-5 py-10">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-center">
                                Great Lakes Solar's Process: From First Call to
                                First Kilowatt
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="pb-3 text-center">
                                Going solar with Great Lakes Solar is
                                straightforward. Here's what to expect:
                            </p>
                            <ol className="list-decimal space-y-4 pl-3">
                                <li>
                                    <h4 className="font-bold">
                                        Free Energy Assessment
                                    </h4>
                                    <p>
                                        We review your utility bills, your roof
                                        or property, and your energy goals. No
                                        pressure, no commitment.
                                    </p>
                                </li>
                                <li>
                                    <h4 className="font-bold">
                                        Custom System Design
                                    </h4>
                                    <p>
                                        We engineer a solar system sized
                                        specifically for your business —
                                        maximizing your savings without
                                        overbuilding.
                                    </p>
                                </li>
                                <li>
                                    <h4 className="font-bold">
                                        Incentive Review
                                    </h4>
                                    <p>
                                        We walk you through available federal
                                        tax credits, state programs, and utility
                                        rebates so you know exactly what your
                                        true cost will be.
                                    </p>
                                </li>
                                <li>
                                    <h4 className="font-bold">
                                        Permitting & Installation
                                    </h4>
                                    <p>
                                        We handle the paperwork and coordinate
                                        with your utility. Our certified
                                        installers complete most commercial jobs
                                        with minimal disruption to your
                                        operations.
                                    </p>
                                </li>
                                <li>
                                    <h4 className="font-bold">
                                        Monitoring & Support
                                    </h4>
                                    <p>
                                        After your system is live, we monitor
                                        its performance and are here when you
                                        need us. We stand behind every system we
                                        install.
                                    </p>
                                </li>
                            </ol>
                        </CardContent>
                    </Card>
                    <div className="text-accent mt-auto text-center text-sm">
                        Photo by{' '}
                        <a
                            href="https://unsplash.com/@hdbernd?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                            className="underline"
                        >
                            Bernd Dittrich
                        </a>{' '}
                        on{' '}
                        <a
                            href="https://unsplash.com/photos/two-rows-of-rows-of-blue-and-white-tiles-fu1GHY5kq-g?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                            className="underline"
                        >
                            Unsplash
                        </a>
                    </div>
                </Container>
            </section>
            <section id="why-solar" className="py-10">
                <Container className="space-y-3 text-center">
                    <h2>Why Solar?</h2>
                    <h3 className="text-xl">
                        Six Reasons Commercial Businesses Are Switching to Solar
                    </h3>
                    <p className="mx-auto max-w-4xl">
                        Whether you own a small retail shop or manage a large
                        industrial facility, solar and battery systems deliver
                        real, measurable value. Here's what our commercial
                        clients tell us matters most:
                    </p>
                    <div className="grid grid-cols-1 gap-2 text-left md:grid-cols-2">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                    Cut Your Energy Bills
                                    <HousePlug />
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                Solar dramatically reduces what you pay for
                                electricity — often by 20-30% or more. For
                                businesses running equipment, lighting, HVAC, or
                                refrigeration, those savings add up fast. Most
                                commercial systems pay for themselves within 5-8
                                years and continue generating free power for 25+
                                years after that.
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                    Protect Against Rising Rates
                                    <TrendingUp />
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                Utility rates have increased an average of 2-5%
                                per year. Once your solar system is installed,
                                your cost of generation stays flat. You're no
                                longer at the mercy of your utility company, and
                                you can plan your energy budget with confidence.
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                    Keep the Lights On with Battery Storage
                                    <BatteryPlus />
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                Add battery storage and your business stays
                                operational during outages - no lost revenue, no
                                spoiled inventory, no production downtime.
                                Batteries also let you store cheap solar energy
                                and use it during peak-rate hours, which can
                                mean even bigger savings.
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                    Take Advantage of Tax Incentives
                                    <CircleDollarSign />
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                The federal Investment Tax Credit (ITC)
                                currently allows businesses to deduct 30% of
                                their solar system cost directly from their
                                federal taxes. Combined with accelerated
                                depreciation (MACRS), the real out-of-pocket
                                cost is often far less than the sticker price.
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                    Meet Your Sustainability Goals
                                    <Earth />
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                More customers, employees, and partners care
                                about environmental responsibility than ever
                                before. Going solar is a visible, measurable
                                commitment to reducing your carbon footprint -
                                and a great story to tell.
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                    Increase Property Value
                                    <HousePlus />
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                Commercial properties with solar systems
                                consistently appraise higher and attract more
                                buyers and tenants. It's an upgrade that pays
                                you back in more ways than one.
                            </CardContent>
                        </Card>
                    </div>
                </Container>
            </section>
            <section id="why-battery" className="py-10">
                <Container className="space-y-3">
                    <h2>Why Add Battery Storage?</h2>
                    <div className="grid grid-cols-1 justify-center gap-2 md:grid-cols-2">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                    Backup power during outages
                                    <Zap />
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                Keep critical operations running without a
                                noisy, fuel-hungry generator
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                    Peak demand shaving
                                    <ChartNoAxesCombined />
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                Reduce or eliminate expensive demand charges
                                from your utility bill
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                    Time-of-use savings
                                    <Clock />
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                Store solar energy and use it when utility rates
                                are highest
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                    Energy independence
                                    <SolarPanel />
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                Rely less on the grid and insulate yourself from
                                rate volatility
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                    Grid services
                                    <UtilityPole />
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                In some areas, your battery can earn credits by
                                sending power back to the grid
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                    Lower Costs with Rebates
                                    <HandCoins />
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                We can help you find out how available incentive
                                programs can make your upgrade more affordable
                            </CardContent>
                        </Card>
                    </div>
                    <p className="mx-auto max-w-4xl text-center">
                        Modern commercial battery systems are quiet, compact,
                        and designed to last. We'll help you figure out whether
                        batteries make financial sense for your specific
                        situation - and if they do, how to size them right.
                    </p>
                </Container>
            </section>
            <section id="faq" aria-label="frequently asked questions">
                <Container>
                    <FAQSection faqs={faqs} />
                </Container>
            </section>
        </div>
    )
}
