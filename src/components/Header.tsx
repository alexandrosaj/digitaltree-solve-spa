import { Link } from 'react-router-dom'

type HeaderProps = {
  variant?: 'light' | 'dark'
  className?: string
}

export default function Header({ variant = 'dark', className = '' }: HeaderProps) {
  const isLight = variant === 'light'
  const tone = isLight ? 'text-white' : 'text-ink'
  const line = isLight ? 'bg-white' : 'bg-ink'
  const cartTone = isLight ? 'bg-white text-ink' : 'bg-ink text-white'

  return (
    <header
      className={`absolute left-0 top-0 z-30 w-full px-4 pt-5 sm:px-8 sm:pt-8 lg:px-[60px] lg:pt-16 ${tone} ${className}`}
    >
      <div className="mx-auto flex max-w-[1800px] items-start justify-between gap-4 lg:grid lg:grid-cols-[1fr_auto_1fr]">
        <Link
          to="/"
          className="hidden font-body text-[13px] uppercase leading-none tracking-[1px] transition-opacity hover:opacity-70 sm:block lg:text-base"
        >
          Lookbook
        </Link>

        <Link
          to="/"
          aria-label="Sølve homepage"
          className="font-display text-[22px] uppercase leading-[1.1] transition-opacity hover:opacity-80 sm:text-[28px] lg:text-[32px]"
        >
          Sølve
        </Link>

        <nav className="ml-auto flex items-center justify-end gap-4 sm:gap-8 lg:gap-12" aria-label="Primary navigation">
          <Link
            to="/"
            className="hidden font-body text-[13px] uppercase leading-none tracking-[1px] transition-opacity hover:opacity-70 sm:inline lg:text-base"
          >
            Shop
          </Link>
          <Link
            to="/"
            className="hidden items-center gap-2 font-body text-[13px] uppercase leading-none tracking-[1px] transition-opacity hover:opacity-70 sm:flex lg:text-base"
          >
            Cart
            <span className={`grid h-[22px] w-[22px] place-items-center rounded-full text-xs ${cartTone}`}>0</span>
          </Link>
          <button
            type="button"
            aria-label="Open menu"
            className="group flex h-5 w-[50px] shrink-0 flex-col items-end justify-between sm:w-[56px]"
          >
            <span className={`block h-px w-[44px] ${line} transition-transform group-hover:-translate-x-1 sm:w-[50px]`} />
            <span className={`block h-px w-9 ${line} transition-transform group-hover:translate-x-1 sm:w-10`} />
          </button>
        </nav>
      </div>
    </header>
  )
}
