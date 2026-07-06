type BadgeProps = {
  children: string
  className?: string
}

export default function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`flex h-16 w-16 items-center justify-center rounded-full bg-ink p-2 font-body text-[11px] font-bold uppercase leading-none text-white sm:h-[100px] sm:w-[100px] sm:text-base ${className}`}
    >
      {children}
    </span>
  )
}
