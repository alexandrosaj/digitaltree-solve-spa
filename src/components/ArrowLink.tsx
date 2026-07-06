type ArrowLinkProps = {
  children: string
  href?: string
  className?: string
}

export default function ArrowLink({ children, href = '#', className = '' }: ArrowLinkProps) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-6 font-body text-[13px] font-medium uppercase tracking-[0.1em] text-ink transition-opacity hover:opacity-70 sm:text-base ${className}`}
    >
      <span>{children}</span>
      <span className="relative block h-px w-[30px] bg-current transition-transform duration-300 group-hover:translate-x-1">
        <span className="absolute -right-px -top-[3px] h-[7px] w-[7px] rotate-45 border-r border-t border-current" />
      </span>
    </a>
  )
}
