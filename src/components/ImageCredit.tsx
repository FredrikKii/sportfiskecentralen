import { useEffect, useId, useRef, useState } from 'react'
import type { ImageCreditData } from '../data/imageCredits'

type ImageCreditProps = Pick<
  ImageCreditData,
  'author' | 'sourceName' | 'sourceUrl' | 'license' | 'licenseUrl'
>

export default function ImageCredit({
  author,
  sourceName,
  sourceUrl,
  license,
  licenseUrl,
}: ImageCreditProps) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const tooltipId = useId()

  useEffect(() => {
    if (!open) return

    const close = (event: MouseEvent | TouchEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', close)
    document.addEventListener('touchstart', close)
    return () => {
      document.removeEventListener('mousedown', close)
      document.removeEventListener('touchstart', close)
    }
  }, [open])

  return (
    <div ref={rootRef} className="group/credit absolute right-3 bottom-3 z-10">
      <button
        type="button"
        aria-label={`Bildkredit: Foto av ${author}`}
        aria-expanded={open}
        aria-describedby={tooltipId}
        onClick={(event) => {
          event.stopPropagation()
          setOpen((value) => !value)
        }}
        className="flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-black/50 text-[11px] font-semibold text-cream/90 backdrop-blur-sm transition-colors hover:bg-black/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-sand/60"
      >
        i
      </button>

      <div
        id={tooltipId}
        role="tooltip"
        className={`absolute right-0 bottom-full mb-2 w-max max-w-[min(16rem,calc(100vw-2rem))] rounded-sm border border-white/10 bg-black/80 px-2.5 py-1.5 text-[10px] leading-relaxed text-cream/85 shadow-lg backdrop-blur-sm transition-opacity duration-150 ${
          open
            ? 'pointer-events-auto visible opacity-100'
            : 'pointer-events-none invisible opacity-0'
        } md:group-hover/credit:pointer-events-auto md:group-hover/credit:visible md:group-hover/credit:opacity-100 md:group-focus-within/credit:pointer-events-auto md:group-focus-within/credit:visible md:group-focus-within/credit:opacity-100`}
      >
        Foto: {author} /{' '}
        <a
          href={sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sand underline decoration-sand/40 underline-offset-2 transition-colors hover:text-cream hover:decoration-cream/60"
        >
          {sourceName}
        </a>{' '}
        ·{' '}
        <a
          href={licenseUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sand underline decoration-sand/40 underline-offset-2 transition-colors hover:text-cream hover:decoration-cream/60"
        >
          {license}
        </a>
      </div>
    </div>
  )
}
