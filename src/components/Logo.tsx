/**
 * Jai Civil lockup: excavator mark plus wordmark.
 *
 * Drawn as inline SVG rather than an exported image so it stays sharp at every
 * size, costs about a kilobyte, and picks up the palette directly.
 *
 * The mark is a side-on digger reduced to the four shapes that still read at
 * 38px: tracks, cab, a boom and arm as one stroked path, and a bucket. Detail
 * beyond that turns to mush at nav size, so there is none.
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
        {/* boom and arm, one stroke from the cab up to the knuckle and back down */}
        <path
          d="M17.4 20.2 L26.6 13.2 L30.2 19.0"
          fill="none"
          stroke="#FFAE68"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* bucket, hung off the arm tip in the same tone so they read as one */}
        <path
          d="M27.2 17.6 L34.2 17.6 L33.6 21.2 C33.3 23.3 31.5 24.7 29.7 24.2 C28.2 23.8 27.3 21.6 27.2 19.4 Z"
          fill="#FFAE68"
        />
        {/* cab */}
        <rect x="7.6" y="17.4" width="10.4" height="9.4" rx="2.4" fill="#F26A0F" />
        {/* tracks */}
        <rect x="5.4" y="27.4" width="19.4" height="6" rx="3" fill="#FF8A2B" />
      </svg>
      <span className="leading-none">
        <span className="block text-lg sm:text-xl font-semibold tracking-tight">JAI CIVIL</span>
        <span className="mt-1 block text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] text-white">
          LIMITED
        </span>
      </span>
    </span>
  );
}
