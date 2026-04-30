import ContactCard from '@/components/contact-card'
import HeroCard from '@/components/hero-card'
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
            <div className="py-0 md:px-2 md:py-10">
                <ContactCard />
            </div>
        </div>
    )
}
