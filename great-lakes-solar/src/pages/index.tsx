import ContactCard from '@/components/contact-card'
import HeroCard from '@/components/hero-card'
import Image from 'next/image'

export default function Home() {
    return (
        <div className="space-y-5">
            <section className="relative h-screen md:h-[70vh] lg:h-[80vh]">
                <Image
                    src="/chuttersnap-s_7BE4D2va0-unsplash.jpg"
                    alt="Aerial view of solar panels on a roof"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 z-40 object-cover brightness-75"
                />
                <div className="relative flex h-full flex-col px-4 py-10">
                    <div className="my-auto grid grid-cols-1 lg:grid-cols-2">
                        <Image
                            src="/next.svg"
                            alt="placeholder for GLS logo"
                            width={400}
                            height={400}
                            className="mx-auto"
                        />
                        <HeroCard />
                    </div>
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
            <ContactCard />
        </div>
    )
}
