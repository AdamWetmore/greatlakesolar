import FAQSection from '@/components/faq/faq-section'
import { Container } from '@/components/layout/container'
import FAQ from '@/models/faq'

export const getStaticProps = async () => {
    // simulate a half second load time for now
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Fetch FAQ data from your CMS or API
    const faqs: FAQ[] = [
        new FAQ(
            'How long do solar panels last?',
            'Most quality solar panels are designed to last 35-40 years, Manufacturers typically offer a 25-year performance warranty, guaranteeing that the panels will produce at least 80% of their original output after 25 years. In practice, most systems continue procuding well beyond that.'
        ),
        new FAQ(
            'What is net metering?',
            'Net metering is a billing arrangement with your utility company that credits you for the excess electricity your solar system sends back to the grid. When your panels produce more than you need (during sunny hours), the surplus flows to the grid and you earn credits. Wehn you need more power than your panels produce (at night or on cloudy days), you draw from the grid and use those credits. Essentially, this equates to the grid acting as a giant battery. All utilities in Minnesota are required to offer net metering.'
        ),
    ]

    // Convert FAQ instances to plain objects
    const faqsAsObjects = faqs.map((faq) => ({
        question: faq.question,
        answer: faq.answer,
    }))

    return {
        props: {
            faqs: faqsAsObjects,
        },
    }
}
export default function Resources({ faqs }: { faqs: FAQ[] }) {
    return (
        <div className="space-y-3 py-3 md:py-10">
            <Container>
                <FAQSection faqs={faqs} />
            </Container>
            <section id="our-process">
                <Container className="space-y-3">
                    <h2>Great Lakes Solar's Process</h2>
                    <p className="text-center text-red-500">
                        let's get this into a nice easy-to-scan roadmap graphic
                    </p>
                </Container>
            </section>
        </div>
    )
}
