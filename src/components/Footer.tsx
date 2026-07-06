import { footerColumns } from '../data/catalog'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-page px-5 py-16 sm:px-8 lg:px-12 lg:pb-20 lg:pt-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 text-center sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {footerColumns.map((column) => (
            <div key={column.title} className="flex flex-col items-center gap-8 lg:gap-12">
              <h2 className="font-display text-[30px] uppercase leading-[1.1] text-ink sm:text-[32px]">
                {column.title}
              </h2>
              <ul className="flex flex-col gap-4 lg:gap-6">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link}`}>
                    <a
                      href="#"
                      className="font-body text-[12px] uppercase leading-none tracking-[1px] text-ink transition-opacity hover:opacity-60 sm:text-base"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-16 text-center font-body text-sm text-ink/80 lg:mt-32">
          © 2022 Made by Pawel Gola. Powered by Webflow.
        </p>
      </div>
    </footer>
  )
}
