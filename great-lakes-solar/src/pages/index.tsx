import ContactCard from '@/components/contact-card'
import HeroCard from '@/components/hero-card'
import { Container } from '@/components/layout/container'
import Image from 'next/image'
import {
    Heart,
    Church,
    GraduationCap,
    Landmark,
    Factory,
    Building2,
} from 'lucide-react'

export default function Home() {
    return (
        <div>
            <section className="relative md:h-[70vh] lg:h-[80vh]">
                <Image
                    src="/chuttersnap-s_7BE4D2va0-unsplash.jpg"
                    alt="Aerial view of solar panels on a roof"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 z-40 object-cover brightness-75"
                />
                <Container className="relative flex h-full flex-col gap-5 py-10">
                    <HeroCard />
                    <div className="text-accent relative mt-auto text-center text-sm">
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
                </Container>
            </section>
            <section className="py-10">
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
                        <div className="bg-primary text-accent border-2 p-3">
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
                                projects. Including installations for fortune
                                500 companies, public schools, and cities. We
                                deliver.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>
            <section>
                <Container>
                    <div className="space-y-3 text-center">
                        <h2>Who We Serve</h2>
                        <p>
                            Great Lakes Solar works with commercial building
                            owners accross the Midwest, including:
                        </p>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            <div className="flex items-start gap-3 rounded-lg border p-4 shadow-sm">
                                <Building2 />
                                <h3 className="font-semibold">
                                    Businesses &amp; corporate offices
                                </h3>
                            </div>
                            <div className="flex items-start gap-3 rounded-lg border p-4 shadow-sm">
                                <Heart />
                                <h3 className="font-semibold">
                                    Non-profits &amp; foundations
                                </h3>
                            </div>
                            <div className="flex items-start gap-3 rounded-lg border p-4 shadow-sm">
                                <Church />
                                <h3 className="font-semibold">
                                    Churches &amp; religious institutions
                                </h3>
                            </div>
                            <div className="flex items-start gap-3 rounded-lg border p-4 shadow-sm">
                                <GraduationCap />
                                <h3 className="font-semibold">
                                    Schools &amp; universities
                                </h3>
                            </div>
                            <div className="flex items-start gap-3 rounded-lg border p-4 shadow-sm">
                                <Landmark />
                                <h3 className="font-semibold">
                                    Cities, counties, &amp; public agencies
                                </h3>
                            </div>
                            <div className="flex items-start gap-3 rounded-lg border p-4 shadow-sm">
                                <Factory />
                                <h3 className="font-semibold">
                                    Industrial &amp; warehouse facilities
                                </h3>
                            </div>
                        </div>
                        <p>
                            If your building has a commercial roof and an energy
                            bill, let's talk!
                        </p>
                    </div>
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
