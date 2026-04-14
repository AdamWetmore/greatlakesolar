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
                    className="absolute inset-0 z-40 object-cover brightness-90"
                />
                <div className="relative flex h-full flex-col justify-evenly px-4 py-10">
                    <div>
                        <h1>Great Lakes Solar</h1>
                        <h2>The Lakes are Great, the Solar is Better!</h2>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
                        <Image
                            src="/next.svg"
                            alt="placeholder for GLS logo"
                            width={400}
                            height={400}
                            className="mx-auto"
                        />
                        <HeroCard />
                    </div>
                </div>
            </section>
            <ContactCard />
        </div>
    )
}
