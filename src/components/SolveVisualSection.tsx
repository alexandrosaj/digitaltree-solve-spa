import { images } from '../data/catalog'

export default function SolveVisualSection() {
  return (
    <section className="relative h-[520px] overflow-hidden bg-ink sm:h-[760px] lg:h-[1200px]">
      <h2 className="sr-only">Sølve visual moodboard</h2>
      <img
        src={images.solveBackground}
        alt="Sølve editorial furniture moodboard with circular room detail images"
        className="h-full w-full object-cover object-center"
        loading="lazy"
      />
    </section>
  )
}
