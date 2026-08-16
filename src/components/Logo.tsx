/**
 * Jai Civil lockup: mark plus wordmark.
 *
 * The mark is three stepped bars reading as a benched cut, which is the
 * company's actual trade, in the site's safety orange. Drawn as inline SVG
 * rather than an exported image so it stays sharp at every size, costs about
 * a kilobyte, and picks up the palette directly.
 */
export default function Logo({
  markSize = 38,
  className = '',
}: {
  markSize?: number;
  className?: string;
}) {
  return (
    <span className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
      <svg
        width={markSize}
        height={markSize}
        viewBox="0 0 40 40"
        className="shrink-0"
        aria-hidden="true"
        focusable="false"
      >
        <rect
          x="0.9"
          y="0.9"
          width="38.2"
          height="38.2"
          rx="9.4"
          fill="rgba(28,19,10,0.55)"
          stroke="rgba(246,240,228,0.2)"
          strokeWidth="1.8"
        />
        <rect x="9" y="10.5" width="9" height="4.2" rx="1.4" fill="#FFAE68" />
        <rect x="9" y="17.9" width="15.5" height="4.2" rx="1.4" fill="#FF8A2B" />
        <rect x="9" y="25.3" width="22" height="4.2" rx="1.4" fill="#F26A0F" />
      </svg>
      <span className="leading-none">
        <span className="block text-lg sm:text-xl font-semibold tracking-tight">JAI CIVIL</span>
        {/* sand-200 not sand-400, and less tracking: at this size the muted
            tone and the wide letter spacing together made it unreadable. */}
        <span className="mt-1 block text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] text-sand-200">
          LIMITED
        </span>
      </span>
    </span>
  );
}
