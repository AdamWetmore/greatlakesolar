'use client'

import { ChevronRight } from 'lucide-react'
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import HubSpotEmbed from '@/components/forms/hubspot-embed'

const FORM_ID = process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID
const FORM_URL = 'https://41zjvy.share-na2.hsforms.com/2yC6G23nvQQKx2rEWyqrnPg'

export default function IntakeForm({
    label,
    triggerClassName,
}: {
    label?: string
    triggerClassName?: string
}) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size="lg" className={triggerClassName}>
                    {label ?? (
                        <>
                            Schedule Your<strong>Free</strong>Assessment
                        </>
                    )}
                    <ChevronRight />
                </Button>
            </DialogTrigger>
            <DialogContent
                aria-describedby={undefined}
                overlayClassName="z-[100]"
                className="intake-dialog z-[101] max-h-[95dvh] w-[calc(100%-1rem)] max-w-[calc(100%-1rem)] overflow-y-auto p-0 sm:max-w-2xl"
            >
                <DialogTitle className="sr-only">
                    Start Your Project
                </DialogTitle>
                <HubSpotEmbed
                    formId={FORM_ID}
                    title="Great Lakes Solar assessment form"
                    fallbackUrl={FORM_URL}
                    controlsClassName="px-4 pb-6 sm:px-6"
                />
            </DialogContent>
        </Dialog>
    )
}
