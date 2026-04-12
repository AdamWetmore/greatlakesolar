import ContactCard from '@/components/contact-card'
import HeroCard from '@/components/hero-card'

export default function Home() {
    return (
        <div className="space-y-5">
            <h2>The Lakes are Great, the Solar is Better!</h2>
            <HeroCard />
            <ContactCard />
        </div>
    )
}
