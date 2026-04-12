import FAQItem from './faq-item'
import FAQ from '@/models/faq'

export default function FAQSection({ faqs }: { faqs: FAQ[] }) {
    return (
        <section
            id="faq"
            aria-label="frequently asked questions"
            className="mx-auto max-w-2xl space-y-4"
        >
            {faqs.map((faq, index) => (
                <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    defaultOpen={index === 0}
                />
            ))}
        </section>
    )
}
