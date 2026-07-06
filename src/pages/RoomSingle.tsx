import type { MouseEvent } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HelpSection from '../components/HelpSection'
import { aboutParagraphs, images, roomSinglePages } from '../data/catalog'

type RoomPageSlug = keyof typeof roomSinglePages

export default function RoomSingle() {
  const params = useParams()
  const slug = params.slug ?? 'oslo'

  const roomExists = Object.prototype.hasOwnProperty.call(roomSinglePages, slug)

  if (!roomExists) {
    return <Navigate to="/" replace />
  }

  const page = roomSinglePages[slug as RoomPageSlug]
  const shouldShowSofaHotspot = slug === 'oslo'

  const handleTopClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if ((page.nextRoute as string) === '#top') {
      event.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <main className="bg-page text-ink">
      <section className="relative px-5 pb-16 pt-28 sm:px-8 sm:pt-36 lg:px-12 lg:pb-28 lg:pt-40">
        <Header variant="dark" />

        <div className="mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <h1 className="font-display text-[clamp(5.5rem,11.67vw,14rem)] leading-[0.9] text-ink">
              {page.title}
            </h1>

            <p className="mt-8 max-w-[620px] font-body text-sm leading-[1.8] sm:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed faucibus turpis in eu mi bibendum neque.
            </p>
          </div>

          <Link
            to="/#rooms"
            className="justify-self-start font-body text-xs uppercase tracking-[0.1em] transition-opacity hover:opacity-60 sm:text-sm lg:justify-self-end"
          >
            Rooms
          </Link>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img src={page.heroImage} alt={page.heroAlt} className="h-auto w-full" />

        {shouldShowSofaHotspot && (
          <a
            href="#"
            className="absolute left-1/2 top-[58%] flex h-14 -translate-x-1/2 -translate-y-1/2 items-center gap-3 rounded-full bg-white px-4 text-ink shadow-sm transition-transform hover:scale-105 hover:!text-ink sm:h-20 sm:gap-4 sm:px-5 lg:top-[58%]"
          >
            <img src={images.roomHeroButton} alt="" className="h-10 w-10 rounded-full sm:h-14 sm:w-14" />
            <span className="font-body text-[10px] uppercase leading-tight tracking-[1px] sm:text-sm">
              Single sofa
              <br />
              $ 0.00 USD
            </span>
            <span aria-hidden="true">→</span>
          </a>
        )}
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-2 lg:gap-20">
          <h2 className="font-display text-[clamp(4.25rem,6.7vw,8rem)] leading-[1.1]">
            Norwegian
            <br />
            Interior
            <br />
            Design
          </h2>

          <div className="space-y-8 font-body text-base leading-[1.8] sm:text-lg lg:text-xl">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 text-center sm:px-8 lg:px-12 lg:pb-32">
        <Link to={page.nextRoute as string} onClick={handleTopClick} className="group inline-block" aria-label="View next room">
          <span className="relative z-10 block font-display text-[clamp(6rem,13.5vw,16rem)] uppercase leading-[0.75] transition-opacity group-hover:opacity-80">
            Next
          </span>

          <img
            src={page.nextImage}
            alt={page.nextAlt}
            className="relative mx-auto -mt-3 aspect-square w-[min(74vw,750px)] rounded-full object-cover transition-transform duration-500 group-hover:scale-[1.02] lg:-mt-8"
          />
        </Link>
      </section>

      <HelpSection />
      <Footer />
    </main>
  )
}

