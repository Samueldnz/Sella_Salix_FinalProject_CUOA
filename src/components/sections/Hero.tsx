import { ArrowRight } from "lucide-react";
import LogoNexo from "../../assets/logo/logonexo.png";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-32 top-1/2 h-[42rem] w-[42rem] -translate-y-1/2 rounded-full border border-primary/10" />

        <div className="absolute -right-24 top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 rounded-full border border-primary/10" />

        <div className="absolute -right-16 top-1/2 h-[26rem] w-[26rem] -translate-y-1/2 rounded-full border border-primary/10" />

        <img
          src={LogoNexo}
          alt=""
          aria-hidden="true"
          className="
            absolute
            -right-32
            top-1/2
            w-[40rem]
            -translate-y-1/2
            opacity-[0.2]
            pointer-events-none
            select-none
          "
        />
      </div>

      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-32 pb-20 lg:px-8">
        <div className="max-w-3xl">
          {/* Eyebrow */}

          <span
            className="
              inline-flex
              rounded-full
              border
              border-primary/20
              bg-primary/5
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.28em]
              text-primary
            "
          >
            High-Tech Biotechnology • Cosmetics
          </span>

          {/* Title */}

          <h1
            className="
              mt-8
              text-5xl
              font-light
              leading-tight
              tracking-tight
              text-text
              md:text-6xl
              xl:text-7xl
            "
          >
            Science that transforms ideas into
            <span className="block text-primary">
              successful products.
            </span>
          </h1>

          {/* Description */}

          <p
            className="
              mt-8
              max-w-2xl
              text-lg
              leading-8
              text-text-secondary
            "
          >
            We combine biotechnology, cosmetic expertise and
            scientific innovation to help companies develop
            high-performance solutions with precision,
            sustainability and market vision.
          </p>

          {/* Actions */}

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <button
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                bg-primary
                px-7
                py-4
                font-medium
                text-white
                transition
                hover:bg-primary-hover
              "
            >
              Explore Our Expertise

              <ArrowRight size={18} />
            </button>

            <button
              className="
                rounded-full
                border
                border-border
                bg-white
                px-7
                py-4
                font-medium
                text-primary
                transition
                hover:border-primary
              "
            >
              Contact Us
            </button>
          </div>

          {/* Metrics */}

          <div className="mt-20 flex flex-wrap gap-12">
            <div>
              <h3 className="text-3xl font-light text-primary">2</h3>
              <p className="mt-2 text-sm uppercase tracking-widest text-text-secondary">
                Core Expertises
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-light text-primary">100%</h3>
              <p className="mt-2 text-sm uppercase tracking-widest text-text-secondary">
                Science Driven
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-light text-primary">∞</h3>
              <p className="mt-2 text-sm uppercase tracking-widest text-text-secondary">
                Innovation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}