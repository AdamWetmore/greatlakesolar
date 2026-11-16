import { cn } from '@/lib/utils'

/** Unmodified official glyphs: black on light surfaces, white on dark pages. */
export default function InstagramIcon({
    className,
    followSystemTheme = false,
}: {
    className?: string
    followSystemTheme?: boolean
}) {
    return (
        <span
            aria-hidden="true"
            className={cn(
                'block shrink-0 bg-[url(/Instagram_Glyph_Black.svg)] bg-contain bg-center bg-no-repeat',
                followSystemTheme &&
                    '[@media(prefers-color-scheme:dark)]:bg-[url(/Instagram_Glyph.svg)]',
                className
            )}
        />
    )
}
