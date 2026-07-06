import Badge from './Badge'
import { products } from '../data/catalog'

export default function FeaturedProducts() {
  return (
    <section id="featured" className="bg-page px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1600px]">
        <h2 className="text-center font-display text-[clamp(4.25rem,6.7vw,8rem)] leading-[1.1] text-ink">
          Featured
        </h2>

        <div className="mt-14 grid gap-14 md:grid-cols-3 md:gap-8 lg:mt-20 lg:justify-between lg:gap-16">
          {products.map((product) => (
            <article key={product.id} className="group mx-auto w-full max-w-[484px] text-center">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="h-auto w-full rounded-[500px] object-cover transition-transform duration-500 group-hover:scale-[1.015]"
                  loading="lazy"
                />
                {product.badge ? (
                  <Badge className="absolute right-0 top-8 sm:top-7 lg:top-[30px]">
                    {product.badge}
                  </Badge>
                ) : null}
              </div>
              <div className="mt-8 flex flex-col items-center gap-2 text-ink">
                <h3 className="font-body text-base font-medium uppercase leading-none tracking-[1px] sm:text-xl">
                  {product.title}
                </h3>
                <p className="font-body text-[12px] uppercase leading-none tracking-[1px] sm:text-sm">
                  {product.price}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

