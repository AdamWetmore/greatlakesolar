import ContactCard from '@/components/contact-card'
import HeroCard from '@/components/hero-card'
import { Container } from '@/components/layout/container'
import Image from 'next/image'

export default function Home() {
    return (
        <div>
            <section className="relative min-h-[70vh] md:min-h-[80vh]">
                <Image
                    src="/chuttersnap-s_7BE4D2va0-unsplash.jpg"
                    alt="Aerial view of solar panels on a roof"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 z-40 object-cover brightness-75"
                />
                <div className="relative flex h-full flex-col gap-6 px-4 py-12 md:px-6 md:py-16">
                    <HeroCard />
                    <div className="text-accent mt-auto text-center text-sm">
                        Photo by{' '}
                        <a
                            className="underline"
                            href="https://unsplash.com/@chuttersnap?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                        >
                            Chuttersnap
                        </a>{' '}
                        on{' '}
                        <a
                            className="underline"
                            href="https://unsplash.com/photos/blue-solar-panels-s_7BE4D2va0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                        >
                            Unsplash
                        </a>
                    </div>
                </div>
            </section>
            <section className="md:py-10">
                <Container>
                    <h2>The GLS Difference</h2>
                    <div className="pt-3 md:flex">
                        <div className="border-2 p-3">
                            <h2 className="text-left">Personal. Always.</h2>
                            <p className="pt-1">
                                Jacob works directly with every client from the
                                first call to the day your system goes live.
                                You’ll never get handed off to someone who
                                doesn’t know your project.
                            </p>
                        </div>
                        <div className="bg-primary text-accent border-t-2 border-b-2 p-3">
                            <h2 className="text-left">Local. Connected.</h2>
                            <p className="pt-1">
                                We know Minnesota’s utilities, permitting
                                agencies, and engineering firms. That local
                                knowledge means faster timelines and fewer
                                surprises on your project.
                            </p>
                        </div>
                        <div className="border-2 p-3">
                            <h2 className="text-left">Proven. End-to-End.</h2>
                            <p className="pt-1">
                                Jacob has managed over $10 million in C&I solar
                                projects. Including installations for Target,
                                Minneapolis Public Schools, and the City of
                                Saint Paul. We deliver.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>
            <section className="md:py-10">
                <Container>
                    <div className="space-y-3">
                        <h2>Who We Serve</h2>
                        <p>
                            Great Lakes Solar works with commercial building
                            owners accross the Midwest, including:
                        </p>
                        <ul className="list-disc pl-5">
                            <li>Businesses &amp; corporate offices</li>
                            <li>Non-profits &amp; foundations</li>
                            <li>Churches &amp; religious institutions</li>
                            <li>Schools &amp; universities</li>
                            <li>Cities, counties, &amp; public agencies</li>
                            <li>Industrial &amp; warehouse facilities</li>
                        </ul>
                        <p>
                            If your building has a commercial roof and an energy
                            bill, let's talk!
                        </p>
                    </div>
                </Container>
            </section>
            <section className="md:py-10">
                <Container>
                    <ContactCard />
                </Container>
            </section>
        </div>
    )
}
