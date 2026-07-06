import ArrowLink from './ArrowLink'

const items = [
  {
    title: 'Local Stores',
    text: 'Proin fermentum leo vel orci porta non pulvinar. Diam phasellus vestibulum lorem sed risus ultricies.',
    cta: 'Find a store',
  },
  {
    title: 'Questions?',
    text: 'Proin fermentum leo vel orci porta non pulvinar. Diam phasellus vestibulum lorem sed risus ultricies.',
    cta: 'Read the FAQ',
  },
]

export default function HelpSection() {
  return (
    <section className="border-t border-line bg-page px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
        <h2 className="font-display text-[clamp(4rem,5vw,6rem)] leading-[1.1] text-ink">Help?</h2>
        <div className="grid gap-12 md:grid-cols-2 lg:gap-24">
          {items.map((item) => (
            <article key={item.title} className="flex flex-col items-start gap-8 lg:gap-12">
              <h3 className="font-display text-[34px] leading-[1.1] text-ink lg:text-4xl">{item.title}</h3>
              <p className="max-w-[400px] font-body text-base leading-[1.8] text-ink lg:text-lg">{item.text}</p>
              <ArrowLink href="#">{item.cta}</ArrowLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
