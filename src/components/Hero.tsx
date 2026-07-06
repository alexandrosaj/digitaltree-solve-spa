import Button from './Button'
import Header from './Header'
import { images } from '../data/catalog'

export default function Hero() {
  return (
    <section className="relative h-[560px] overflow-hidden bg-ink text-white sm:h-[720px] md:h-[900px] lg:h-[1330px]">
      <img
        src={images.heroChairs}
        alt="Designer chairs photographed against a warm neutral wall"
        className="absolute inset-0 h-full w-full object-cover object-[58%_center] sm:object-center"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-ink/40" aria-hidden="true" />
      <Header variant="light" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 pt-16 text-center sm:px-6 sm:pt-24 lg:pt-36">
        <h1 className="max-w-[1291px] font-display text-[clamp(3.25rem,15.6vw,16.25rem)] uppercase leading-[0.9] tracking-normal text-white sm:text-[clamp(5.5rem,12vw,16.25rem)]">
          Design
          <br />
          Furniture
        </h1>
        <Button href="#featured" variant="inverse" className="mt-6 sm:mt-10 lg:mt-12">
          Shop now
        </Button>
      </div>
    </section>
  )
}
