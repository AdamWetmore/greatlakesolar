import { Container } from '@/components/layout/container'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { HousePlug, TrendingUp, BatteryPlus, Earth } from 'lucide-react'

export default function ResidentialSection() {
    return (
        <section
            id="residential"
            aria-labelledby="residential-heading"
            className="scroll-mt-36"
        >
            <section className="py-10">
                <Container className="space-y-3 text-center">
                    <h2 id="residential-heading" className="text-3xl">
                        Residential Solar
                    </h2>
                    <p>
                        Solar for your home, cabin, or lake home, with personal
                        guidance from first call to first kilowatt.
                    </p>
                </Container>
            </section>

            <section id="residential-why-solar" className="py-10">
                <Container className="space-y-3">
                    <h2>4 Reasons to Go Solar at Home</h2>
                    <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between gap-3">
                                    Lower or Eliminate Your Electric Bill
                                    <HousePlug className="shrink-0" />
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                Adding solar will dramatically reduce or even
                                completely eliminate your electricity bill in
                                your home. There may even be some months where
                                the utility pays you money for the electricity
                                you generated!
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between gap-3">
                                    Protect Against Rising Rates
                                    <TrendingUp className="shrink-0" />
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
                                <CardTitle className="flex items-center justify-between gap-3">
                                    Keep the Lights On with Battery Storage
                                    <BatteryPlus className="shrink-0" />
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                Become energy independent and give your home
                                resiliency during power outages with battery
                                storage.
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between gap-3">
                                    Fight Climate Change
                                    <Earth className="shrink-0" />
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                Going solar is a visible, measurable commitment
                                to reducing your carbon footprint. You can make
                                the world a battery place by adding renewable
                                energy to your home.
                            </CardContent>
                        </Card>
                    </div>
                </Container>
            </section>
        </section>
    )
}
