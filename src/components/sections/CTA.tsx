import { useLanguage } from "../../context/LanguageContext";

export function CTA() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-primary py-28 text-white">
      {/* Decorative subtle ambient circles */}
      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full border border-white/10 pointer-events-none" />
      <div className="absolute -left-24 -bottom-24 h-80 w-80 rounded-full border border-white/10 pointer-events-none" />

      {/* Stylized background watermark logo */}
      <img
        src="/logo.svg"
        alt=""
        aria-hidden="true"
        className="
          absolute
          right-6
          top-1/2
          w-[32rem]
          -translate-y-1/2
          opacity-5
          invert
          select-none
          pointer-events-none
        "
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <span className="hidden sm:inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-primary-light">
          {t.cta.badge}
        </span>

        <h2 className="mt-7 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight tracking-tight text-white">
          {t.cta.title}
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-white/80">
          {t.cta.subtitle}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="
              inline-flex
              items-center
              justify-center
              rounded-full
              bg-white
              px-8
              py-4
              text-xs
              font-semibold
              uppercase
              tracking-wider
              text-primary
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-background
              hover:shadow-xl
            "
          >
            <span>{t.cta.btnPrimary}</span>
          </a>

          <a
            href="#heritage"
            className="
              rounded-full
              border
              border-white/30
              px-8
              py-4
              text-xs
              font-semibold
              uppercase
              tracking-wider
              text-white
              transition-all
              duration-300
              hover:bg-white/10
            "
          >
            <span>{t.cta.btnSecondary}</span>
          </a>
        </div>
      </div>
    </section>
  );
}