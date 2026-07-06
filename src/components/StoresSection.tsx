import { stores } from '../data/catalog'
import ArrowLink from './ArrowLink'

export default function StoresSection() {
  return (
    <section className="bg-page px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1600px]">
        <h2 className="font-display text-[clamp(4rem,5vw,6rem)] leading-[1.1] text-ink">Our Stores</h2>

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-2 lg:gap-24">
          {stores.map((store) => (
            <article key={store.city} className="grid gap-8 sm:grid-cols-[220px_1fr] sm:items-center lg:grid-cols-[300px_1fr] lg:gap-12">
              <img
                src={store.image}
                alt={store.alt}
                className="mx-auto h-[220px] w-[220px] rounded-full object-cover sm:mx-0 lg:h-[300px] lg:w-[300px]"
                loading="lazy"
              />
              <div className="text-center sm:text-left">
                <h3 className="font-display text-[34px] leading-[1.1] text-ink lg:text-4xl">{store.city}</h3>
                <p className="mt-5 whitespace-pre-line font-body text-base leading-[1.6] text-ink lg:text-lg">
                  {store.address}
                </p>
                <ArrowLink href="#" className="mt-6 justify-center sm:justify-start">
                  Get directions
                </ArrowLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
