// Infographics for the federal solar tax credit post. Plain HTML so the text
// stays crisp on phones and readable by search engines.

const stackRows = [
    {
        label: 'Base credit',
        total: '30%',
        dollars: '$30,000',
        segments: ['base'],
    },
    {
        label: '+ U.S.-made equipment',
        total: '40%',
        dollars: '$40,000',
        segments: ['base', 'domestic'],
    },
    {
        label: '+ Energy community',
        total: '50%',
        dollars: '$50,000',
        segments: ['base', 'domestic', 'energy'],
    },
]

const segmentStyle: Record<string, { width: string; className: string }> = {
    base: { width: '60%', className: 'bg-blue-600 text-white' },
    domestic: { width: '20%', className: 'bg-amber-400 text-slate-900' },
    energy: { width: '20%', className: 'bg-emerald-500 text-white' },
}

const segmentLabel: Record<string, string> = {
    base: '30%',
    domestic: '+10%',
    energy: '+10%',
}

export function CreditStackInfographic() {
    return (
        <figure className="border-foreground/20 my-8 rounded-xl border p-5 md:p-6">
            <p className="text-sm font-bold tracking-wide uppercase opacity-70">
                How the credit stacks up
            </p>
            <p className="mt-1 text-lg font-bold">
                Example: a $100,000 commercial solar project
            </p>
            <div className="mt-5 space-y-4">
                {stackRows.map((row) => (
                    <div key={row.label}>
                        <div className="mb-1 flex items-baseline justify-between gap-3 text-sm md:text-base">
                            <span className="font-bold">{row.label}</span>
                            <span>
                                <span className="font-bold">{row.total}</span> ={' '}
                                {row.dollars} back
                            </span>
                        </div>
                        <div className="bg-foreground/10 flex h-9 w-full overflow-hidden rounded-md">
                            {row.segments.map((s) => (
                                <div
                                    key={s}
                                    style={{ width: segmentStyle[s].width }}
                                    className={`flex items-center justify-center text-sm font-bold ${segmentStyle[s].className}`}
                                >
                                    {segmentLabel[s]}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <figcaption className="mt-5 space-y-1 text-sm opacity-80">
                <p>
                    Bar scale runs to 50% of project cost. Adders depend on the
                    project and need documentation.
                </p>
                <p>
                    Businesses that pay taxes can also use accelerated
                    depreciation on top of the credit.
                </p>
            </figcaption>
        </figure>
    )
}

const solarTimeline = [
    {
        years: '2026 to 2027',
        value: '30%',
        note: 'Must be running by Dec 31, 2027',
        active: true,
    },
    {
        years: '2028 and later',
        value: 'No credit',
        note: 'New solar no longer qualifies',
        active: false,
    },
]

const batteryTimeline = [
    { years: '2026 to 2033', value: '30%', note: 'Full credit', active: true },
    { years: '2034', value: '22.5%', note: 'Step down', active: true },
    { years: '2035', value: '15%', note: 'Step down', active: true },
    { years: '2036 and later', value: 'No credit', note: '', active: false },
]

function TimelineLane({
    title,
    subtitle,
    items,
    activeClassName,
}: {
    title: string
    subtitle: string
    items: { years: string; value: string; note: string; active: boolean }[]
    activeClassName: string
}) {
    return (
        <div>
            <p className="font-bold">{title}</p>
            <p className="text-sm opacity-70">{subtitle}</p>
            <ol className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4">
                {items.map((item) => (
                    <li
                        key={item.years}
                        className={`rounded-md p-3 ${
                            item.active
                                ? activeClassName
                                : 'bg-foreground/10 border-foreground/30 border border-dashed'
                        }`}
                    >
                        <p className="text-sm">{item.years}</p>
                        <p className="text-2xl font-bold">{item.value}</p>
                        {item.note && <p className="text-sm">{item.note}</p>}
                    </li>
                ))}
            </ol>
        </div>
    )
}

export function DeadlineTimelineInfographic() {
    return (
        <figure className="border-foreground/20 my-8 rounded-xl border p-5 md:p-6">
            <p className="text-sm font-bold tracking-wide uppercase opacity-70">
                Key deadlines
            </p>
            <p className="mt-1 text-lg font-bold">
                Solar ends soon. Batteries run years longer.
            </p>
            <div className="mt-5 space-y-6">
                <TimelineLane
                    title="Solar"
                    subtitle="Based on when the system is placed in service"
                    items={solarTimeline}
                    activeClassName="bg-blue-600 text-white"
                />
                <TimelineLane
                    title="Battery storage"
                    subtitle="Based on when construction starts"
                    items={batteryTimeline}
                    activeClassName="bg-emerald-600 text-white"
                />
            </div>
            <figcaption className="mt-5 text-sm opacity-80">
                Commercial solar projects usually take 6 to 12 months from
                signed agreement to turn-on.
            </figcaption>
        </figure>
    )
}
