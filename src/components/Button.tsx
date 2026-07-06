type ButtonProps = {
  children: string
  href?: string
  variant?: 'default' | 'primary' | 'inverse'
  className?: string
}

const variants = {
  default:
    'border-ink bg-transparent text-ink hover:bg-ink hover:!text-white focus-visible:bg-ink focus-visible:!text-white',
  primary:
    'border-ink bg-ink text-white hover:bg-transparent hover:!text-ink focus-visible:bg-transparent focus-visible:!text-ink',
  inverse:
    'border-white bg-transparent text-white hover:bg-white hover:!text-ink focus-visible:bg-white focus-visible:!text-ink',
}

export default function Button({ children, href = '#', variant = 'default', className = '' }: ButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex h-[52px] items-center justify-center rounded-[500px] border px-7 font-body text-[11px] font-medium uppercase leading-none tracking-[0.1em] transition-[background-color,color,border-color,transform] duration-300 hover:scale-[1.015] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink sm:h-[68px] sm:px-10 sm:text-base ${variants[variant]} ${className}`}
    >
      <span className="relative z-10">{children}</span>
    </a>
  )
}
