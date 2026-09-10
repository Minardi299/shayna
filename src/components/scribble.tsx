export function Scribble({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 140"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
    >
      <path
        data-draw
        pathLength={1}
        strokeDasharray={1}
        d="M338 20 C 236 3, 92 6, 40 34 C -10 62, 26 108, 132 124 C 244 141, 402 133, 450 102 C 494 73, 452 32, 356 19 C 300 11, 246 12, 208 18"
        fill="none"
        stroke="var(--color-brand)"
        strokeWidth={2.2}
        strokeLinecap="round"
      />
    </svg>
  )
}
