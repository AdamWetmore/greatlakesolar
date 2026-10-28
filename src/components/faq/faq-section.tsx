import Link from 'next/link'
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
                                                {faq.link && (
                                                    <>
                                                        {' '}
                                                        <Link
                                                            href={faq.link.href}
                                                            className="underline decoration-blue-500 decoration-2 underline-offset-4 hover:opacity-80"
                                                        >
                                                            {faq.link.label}
                                                        </Link>
                                                    </>
                                                )}
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
