import { Link } from 'react-router-dom'
import { rooms } from '../data/catalog'
import ArrowLink from './ArrowLink'

export default function RoomsSection() {
  return (
    <section id="rooms" className="bg-page px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1400px] text-center">
        <h2 className="font-display text-[clamp(4.25rem,6.7vw,8rem)] leading-[1.1] text-ink">Rooms</h2>
        <ArrowLink href="#rooms" className="mt-5 justify-center text-[11px] sm:text-sm">
          See all
        </ArrowLink>

        <div className="mt-14 grid gap-10 sm:grid-cols-3 lg:mt-20 lg:gap-24">
          {rooms.map((room) => (
            <Link
              key={room.slug}
              to={`/rooms/${room.slug}`}
              className="group relative mx-auto block aspect-square w-full max-w-[320px] overflow-hidden rounded-full lg:max-w-[390px]"
              aria-label={`View ${room.title} room`}
            >
              <img
                src={room.image}
                alt={room.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <span className="absolute inset-0 bg-ink/20 transition-colors group-hover:bg-ink/30" aria-hidden="true" />
              <span className="absolute inset-0 grid place-items-center px-6 text-center font-display text-[32px] uppercase leading-[0.95] text-white sm:text-[34px] lg:text-5xl">
                {room.title === 'New York' ? (
                  <>
                    New
                    <br />
                    York
                  </>
                ) : (
                  room.title
                )}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
