type WaveDividerProps = {
  className?: string
}

export function WaveDivider({ className = '' }: WaveDividerProps) {
  return (
    <img
      className={className ? `wave-divider ${className}` : 'wave-divider'}
      src="/assets/supplemental/decorations/transparent-wave-divider.png"
      alt=""
      width={2172}
      height={724}
    />
  )
}
