import { Container } from '@/components/layout/container'

export default function ResidentialSection() {
    return (
        <section
            id="residential"
            aria-labelledby="residential-heading"
            className="scroll-mt-36 py-10"
        >
            <Container className="space-y-3 text-center">
                <h2 id="residential-heading" className="text-3xl">
                    Residential Solar
                </h2>
                <p className="mx-auto max-w-4xl">
                    Solar for your home, cabin, or lake home, with personal
                    guidance from first call to first kilowatt.
                </p>
                <p className="mx-auto max-w-4xl">
                    We review your household electricity use, roof or property,
                    and energy goals to size a system for your home. For a cabin
                    or lake home, that includes how your electricity use changes
                    throughout the year.
                </p>
                <p className="mx-auto max-w-4xl">
                    Find homeowner-specific answers about payback, battery
                    runtime, and equipment in the Residential Solar FAQ below.
                </p>
            </Container>
        </section>
    )
}
