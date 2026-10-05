import { ArrowRight } from "lucide-react";
import { HeroArtwork } from "../layout/Artwork";
import { useLanguage } from "../../context/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-background pt-20 lg:min-h-screen">
      {/* Background Hero Artwork (Animated Rings & 3D Stand) */}
      <div className="absolute inset-0 hidden overflow-hidden pointer-events-none lg:block">
        <HeroArtwork />
      </div>

      <div
        className="
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          px-6
          pt-20
          pb-16
          lg:min-h-[calc(100vh-5rem)]
          lg:flex-row
          lg:items-center
          lg:px-8
          lg:pt-16
          lg:pb-20
        "
      >
        <div
          className="
            relative
            z-20
            max-w-3xl
            text-center
            lg:text-left
          "
        >
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2">
            <span
              className="
                inline-flex flex-wrap justify-center lg:justify-start
                items-center
                rounded-full
                border
                border-primary/25
                bg-primary/10
                px-4
                py-1.5
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-primary
                shadow-2xs
              "
            >
              <span className="flex items-center gap-1.5">
                <span className="inline-block h-2 w-2 rounded-full bg-[#009246]" />
                <span className="inline-block h-2 w-2 rounded-full bg-white border border-border" />
                <span className="inline-block h-2 w-2 rounded-full bg-[#CE2B37]" />
              </span>
              <span className="ml-2.5">{t.hero.eyebrow}</span>
            </span>
          </div>

          {/* Main Title - Italian Serif Elegance */}
          <h1
            className="
              mt-6
              font-serif
              text-4xl
              font-normal
              leading-[1.12]
              tracking-tight
              text-text
              sm:text-5xl
              md:text-6xl
              xl:text-[4.25rem]
            "
          >
            {t.hero.titleLine1}{" "}
            <span className="block italic text-primary font-serif font-light">
              {t.hero.titleLine2}
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-relaxed
              text-text-secondary
              sm:text-lg
              lg:mx-0
            "
          >
            {t.hero.subtitle}
          </p>

          {/* Actions */}
          <div
            className="
              mt-9
              flex
              flex-col
              gap-4
              sm:flex-row
              sm:justify-center
              lg:justify-start
            "
          >
            <a
              href="#expertise"
              className="
                w-full sm:w-auto
                inline-flex
                items-center
                justify-center
                gap-2.5
                rounded-full
                bg-primary
                px-8
                py-4
                text-xs
                font-semibold
                uppercase
                tracking-wider
                text-white
                shadow-sm
                transition-all
                duration-300
                hover:bg-primary-hover
                hover:shadow-md
                hover:-translate-y-0.5
              "
            >
              <span>{t.hero.ctaPrimary}</span>
              <ArrowRight size={16} />
            </a>

            <a
              href="#contact"
              className="
                w-full sm:w-auto
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-border-strong
                bg-surface
                px-8
                py-4
                text-xs
                font-semibold
                uppercase
                tracking-wider
                text-primary
                transition-all
                duration-300
                hover:border-accent
                hover:text-accent
                hover:shadow-2xs
              "
            >
              <span>{t.hero.ctaSecondary}</span>
            </a>
          </div>

          {/* Real-World Industry Metrics */}
          <div
            className="
              mt-14
              grid
              w-full
              grid-cols-2
              gap-6
              pt-8
              border-t
              border-border/80
              sm:grid-cols-4
              lg:gap-8
            "
          >
            <div>
              <div className="font-serif text-3xl font-semibold text-accent sm:text-4xl">
                {t.hero.stat1Value}
              </div>
              <p className="mt-1 text-xs uppercase tracking-wider text-text-secondary font-medium">
                {t.hero.stat1Label}
              </p>
            </div>

            <div>
              <div className="font-serif text-3xl font-semibold text-primary sm:text-4xl">
                {t.hero.stat2Value}
              </div>
              <p className="mt-1 text-xs uppercase tracking-wider text-text-secondary font-medium">
                {t.hero.stat2Label}
              </p>
            </div>

            <div>
              <div className="font-serif text-3xl font-semibold text-accent sm:text-4xl">
                {t.hero.stat3Value}
              </div>
              <p className="mt-1 text-xs uppercase tracking-wider text-text-secondary font-medium">
                {t.hero.stat3Label}
              </p>
            </div>

            <div>
              <div className="font-serif text-3xl font-semibold text-primary sm:text-4xl">
                {t.hero.stat4Value}
              </div>
              <p className="mt-1 text-xs uppercase tracking-wider text-text-secondary font-medium">
                {t.hero.stat4Label}
              </p>
            </div>
          </div>

          {/* Mobile Illustration view */}
          <div
            className="
              relative
              mt-10
              h-[22rem]
              overflow-hidden
              lg:hidden
            "
          >
            <HeroArtwork mobile />
          </div>
        </div>
      </div>
    </section>
  );
}