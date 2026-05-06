import FAQ from '@/models/faq'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '../ui/accordion'

export default function FAQSection({ faqs }: { faqs: FAQ[] }) {
    return (
        <>
            <h2 className="text-center text-2xl font-bold">
                Frequently Asked Questions
            </h2>
            <Accordion type="multiple" defaultValue={['item-0']}>
                {faqs.map((faq, index) => (
                    <AccordionItem value={`item-${index}`}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    )
}
