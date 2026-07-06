import { aboutParagraphs } from '../data/catalog'
import Button from './Button'

export default function AboutSection() {
  return (
    <section className="border-t border-line bg-page px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 className="font-display text-[clamp(4.5rem,6.7vw,8rem)] leading-[1.1] text-ink">
            Lorem
            <br />
            ipsum
          </h2>
        </div>

        <div className="flex flex-col items-start gap-12 lg:gap-24">
          <div className="space-y-8 font-body text-base leading-[1.8] text-ink sm:text-lg lg:text-xl">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Button href="#rooms">Shop now</Button>
        </div>
      </div>
    </section>
  )
}
