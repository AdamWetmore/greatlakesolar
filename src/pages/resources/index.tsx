import ResidentialSection from '@/components/resources/residential-section'
import FAQSection from '@/components/faq/faq-section'
import { Container } from '@/components/layout/container'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import resourcesFaqs from '@/data/resources-faqs'
import ContactCard from '@/components/contact-card'
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

export default function Resources() {
    return (
        <div>
            <section id="how-it-works" className="relative scroll-mt-36">
                <Image
                    src="/bernd-dittrich-fu1GHY5kq-g-unsplash.jpg"
                    alt="Aerial view of solar panels on a roof"
                    fill
                    sizes="100vw"
                    className="absolute inset-0 z-40 object-cover brightness-75"
                />
                <Container className="text-accent relative flex h-full flex-col gap-5 py-10">
                    <Card>
                        <CardHeader>
                            <h1 className="text-center text-base leading-none font-semibold">
                                Great Lakes Solar&apos;s Process: From First
                                Call to First Kilowatt
                            </h1>
                        </CardHeader>
                        <CardContent>
                            <p className="pb-3 text-center">
                                Going solar with Great Lakes Solar is
                                straightforward. Here&apos;s what to expect:
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
                                        specifically for your home or business —
                                        maximizing your savings without
                                        overbuilding.
                                    </p>
                                </li>
                                <li>
                                    <h4 className="font-bold">
                                        Incentive Review
                                    </h4>
                                    <p>
                                        We walk you through available
                                        incentives, state programs, and utility
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
                                        installers complete installations with
                                        minimal disruption to your home or
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
            <section
                id="commercial"
                aria-labelledby="commercial-heading"
                className="scroll-mt-36 py-10"
            >
                <Container className="space-y-3 text-center">
                    <h2 id="commercial-heading" className="text-3xl">
                        Commercial Solar
                    </h2>
                    <h3 className="text-xl">
                        Six Reasons Commercial Businesses Are Switching to Solar
                    </h3>
                    <p className="mx-auto max-w-4xl">
                        Whether you own a small retail shop or manage a large
                        industrial facility, solar and battery systems deliver
                        real, measurable value. Here&apos;s what our commercial
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
                                your cost of generation stays flat. You&apos;re
                                no longer at the mercy of your utility company,
                                and you can plan your energy budget with
                                confidence.
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
                                buyers and tenants. It&apos;s an upgrade that
                                pays you back in more ways than one.
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
                        and designed to last. We&apos;ll help you figure out
                        whether batteries make financial sense for your specific
                        situation - and if they do, how to size them right.
                    </p>
                </Container>
            </section>
            <ResidentialSection />
            <section
                id="faq"
                aria-label="frequently asked questions"
                className="scroll-mt-36 py-10"
            >
                <Container>
                    <FAQSection faqs={resourcesFaqs} />
                </Container>
            </section>
            <section className="py-10">
                <Container>
                    <ContactCard />
                </Container>
            </section>
        </div>
    )
}
