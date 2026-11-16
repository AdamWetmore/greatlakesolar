import Link from 'next/link'
import { ChevronDownIcon } from 'lucide-react'
import FAQ from '@/models/faq'

// Native <details>/<summary> instead of the Radix accordion: every answer is
// in the static HTML (Radix only renders open panels), so search engines and
// AI answer engines can read the same text as the FAQPage JSON-LD on the page.
const summaryClassName =
    'focus-visible:ring-ring/50 flex cursor-pointer list-none items-start justify-between gap-4 rounded-md py-4 text-left text-xl font-bold outline-none focus-visible:ring-[3px] [&::-webkit-details-marker]:hidden'
const chevronClassName =
    'text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200'

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
            <div>
                {Object.entries(groupedFAQs).map(
                    ([category, faqs], categoryIndex) => (
                        <details
                            key={category}
                            open={categoryIndex === 0}
                            className="group/category border-b last:border-b-0"
                        >
                            <summary className={summaryClassName}>
                                <h3>{category}</h3>
                                <ChevronDownIcon
                                    aria-hidden="true"
                                    className={`${chevronClassName} group-open/category:rotate-180`}
                                />
                            </summary>
                            <div className="border-l pt-0 pb-4 pl-3 text-sm">
                                {faqs.map((faq, faqIndex) => (
                                    <details
                                        key={faq.question}
                                        open={
                                            categoryIndex === 0 &&
                                            faqIndex === 0
                                        }
                                        className="group/question border-b last:border-b-0"
                                    >
                                        <summary className={summaryClassName}>
                                            <h4>{faq.question}</h4>
                                            <ChevronDownIcon
                                                aria-hidden="true"
                                                className={`${chevronClassName} group-open/question:rotate-180`}
                                            />
                                        </summary>
                                        <p className="pt-0 pb-4">
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
                                        </p>
                                    </details>
                                ))}
                            </div>
                        </details>
                    )
                )}
            </div>
        </>
    )
}
