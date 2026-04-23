import Image from 'next/image'

export default function About() {
    return (
        <div className="space-y-5">
            <section
                id="mission"
                className="relative h-screen md:h-[70vh] lg:h-[80vh]"
            >
                <Image
                    src="/andrew-ling--8_P8KwKDlM-unsplash.jpg"
                    alt="Aerial view of solar panels on a roof"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 z-40 object-cover brightness-75"
                />
                <div className="relative flex h-full flex-col px-4 py-10">
                    <div className="text-background grid h-full place-content-center space-y-3">
                        <h1>Our Mission</h1>
                        <p className="mx-auto max-w-4xl text-center text-2xl">
                            To bring affordable, sustainable, and resilient
                            solar energy to businesses, non-profits, and
                            religious and public institutions across the
                            midwest.
                        </p>
                    </div>
                    <div className="text-accent relative mt-auto text-center text-sm">
                        Photo by{' '}
                        <a
                            className="underline"
                            href="https://unsplash.com/@linginit?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                        >
                            Andrew Ling
                        </a>{' '}
                        on{' '}
                        <a
                            className="underline"
                            href="https://unsplash.com/photos/high-angle-photo-of-forest--8_P8KwKDlM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                        >
                            Unsplash
                        </a>
                    </div>
                </div>
            </section>
            <section id="jacob-bechtold" className="space-y-3 py-6">
                <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                    <div>
                        <Image
                            src="/jacob-bechtold-headshot.jpg"
                            alt="Headshot of Jacob Bechtold, founder of Great Lakes Solar"
                            width={817}
                            height={1224}
                            className="m-auto h-auto w-4/5"
                        />
                        <h2 className="mt-3">Jacob Bechtold | Founder</h2>
                    </div>
                    <div className="my-auto mr-3 space-y-12">
                        <p>
                            With a B.S in Industrial and Systems Engineering
                            from the University of Minnesota and a track record
                            of executing an over 10 million dollar renewable
                            energy portfolio, Jacob Bechtold founded
                            <i> Great Lakes Solar </i>
                            to ensure that midwest businesses, non-profits, and
                            religious and state institutions have access to
                            solar and BESS to improve their organization's
                            operations.
                        </p>
                        <p>
                            Jacob has successfully delivered dozens of solar and
                            battery storage projects totaling over 6 megawatts
                            across the Twin Cities, including high-profile
                            installations for Target Corporation, Minneapolis
                            Public Schools, and the City of Saint Paul. Jacob's
                            deep-rooted understanding of the local landscape and
                            industry and strong partnerships allow him to
                            navigate the technical and bureaucratic hurdles that
                            often stall C&I projects.
                        </p>
                        <p>
                            Jacob will personally work with each client from
                            sale to design to construction of the solar system
                            providing project management supervision the entire
                            way.
                            <i> Great Lakes Solar </i>
                            will rely on strong partnership with trusted
                            electrical and structural engineers and installation
                            contractors. As
                            <i> Great Lakes Solar </i>
                            grows, Jacob will bring on experienced and talented
                            partners that will either focus on sales and
                            marketing or solar project management.
                        </p>
                    </div>
                </div>
            </section>
            <section id="great-lakes-solar" className="space-y-3">
                <h2>Great Lakes Solar</h2>
                <p className="mx-auto max-w-7xl">
                    <i>Great Lakes Solar </i> (GLS) helps businesses, nonprofits
                    and religious and state institutions save money on their
                    energy costs by installing solar energy and battery energy
                    storage systems (BESS). Solar and BESS are teh most
                    affordable sources of energy, allowing businesses to combat
                    rising energy prices and finflation, while providing backup
                    power for key loads. GLS' goal is to use solar and BESS
                    systems as a foundational tool to empower its clients to
                    succeed in their mission and grow their impact. Commercial
                    solar and BESS helps combat larger societal issues like
                    energy security, resiliency, climate change, and electrical
                    load growth.
                </p>
                <p className="mx-auto max-w-7xl">
                    GLS is a Limited Liability Company led and owned by Jacob
                    Bechtold, who has years of experience managing commerical
                    and industrial (C&I) solar and BESS projects. GLS is based
                    in Minneapolis, Minnesota and serves the Great Lakes region
                    of the Midwest. GLS manages a project from start to finish
                    and leverages strong relationships with engineering firms,
                    installation contractors, and solar equipment providers to
                    execute high quality C&I solar projects on the fastest
                    timeline. With a small, local team, GLS is able to build
                    relationships with each individual client and find a
                    personalized renewable energy solution for their
                    organization. GLS' top priority is customer success and
                    experience. With a small team, and strong relationships
                    across the market, GLS can provide ccustomized solar
                    solutions at the best price.
                </p>
            </section>
        </div>
    )
}
