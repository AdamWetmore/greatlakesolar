import FAQ from '@/models/faq'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '../ui/accordion'

export default function FAQSection({ faqs }: { faqs: FAQ[] }) {
    // Group FAQs by category
    const groupedFAQs = faqs.reduce(
        (groups, faq) => {
            if (!groups[faq.category]) {
                groups[faq.category] = []
            }
            groups[faq.category].push(faq)
            return groups
        },
        {} as Record<string, FAQ[]>
    )

    return (
        <>
            <h2 className="text-center text-2xl font-bold">
                Frequently Asked Questions
            </h2>
            <Accordion type="multiple" defaultValue={['category-0']}>
                {Object.entries(groupedFAQs).map(
                    ([category, faqs], categoryIndex) => (
                        <AccordionItem
                            key={categoryIndex}
                            value={`category-${categoryIndex}`}
                        >
                            <AccordionTrigger>{category}</AccordionTrigger>
                            <AccordionContent className="border-l pl-3">
                                <Accordion
                                    type="multiple"
                                    defaultValue={
                                        categoryIndex === 0
                                            ? [`faq-${categoryIndex}-0`]
                                            : []
                                    }
                                >
                                    {faqs.map((faq, faqIndex) => (
                                        <AccordionItem
                                            key={faqIndex}
                                            value={`faq-${categoryIndex}-${faqIndex}`}
                                        >
                                            <AccordionTrigger>
                                                {faq.question}
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                {faq.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </AccordionContent>
                        </AccordionItem>
                    )
                )}
            </Accordion>
        </>
    )
}
