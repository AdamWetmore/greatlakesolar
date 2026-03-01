import ContactCard from '@/components/contact-card'
import HeroCard from '@/components/hero-card'

export default function Home() {
    return (
        <div>
            <h1>Great Lakes Solar</h1>
            <h2>Motto: The Lakes are Great, the Solar is Better!</h2>
            <HeroCard />
            <ContactCard />
        </div>
    )
}
