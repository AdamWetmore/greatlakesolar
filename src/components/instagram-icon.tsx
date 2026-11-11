import { cn } from '@/lib/utils'

/** Official Instagram glyph; the mask preserves its geometry and uses currentColor. */
export default function InstagramIcon({ className }: { className?: string }) {
    return (
        <span
            aria-hidden="true"
            className={cn('inline-block shrink-0 bg-current', className)}
            style={{
                mask: 'url("/Instagram_Glyph.svg") center / contain no-repeat',
                WebkitMask: 'url("/Instagram_Glyph.svg") center / contain no-repeat',
            }}
        />
    )
}
