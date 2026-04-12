import React from 'react'
import FAQ from '@/models/faq'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '../ui/collapsible'
import { ChevronDown } from 'lucide-react'

export interface FAQItemProps extends FAQ {
    defaultOpen?: boolean
}

export default function FAQItem({
    question,
    answer,
    defaultOpen,
}: FAQItemProps) {
    const [isOpen, setIsOpen] = React.useState(defaultOpen || false)

    return (
        <Collapsible
            open={isOpen}
            onOpenChange={(newIsOpen) => setIsOpen(newIsOpen)}
        >
            <CollapsibleTrigger className="flex w-full cursor-pointer items-center justify-between rounded-lg bg-gray-100 p-4 text-left">
                <span className="font-medium">{question}</span>
                <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
            </CollapsibleTrigger>
            <CollapsibleContent className="px-4 py-2 text-gray-700">
                {answer}
            </CollapsibleContent>
        </Collapsible>
    )
}
