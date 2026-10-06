import { useLanguage } from "../../context/LanguageContext";

const romanNumerals = ["I", "II", "III", "IV"];

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-background py-24 sm:py-28 border-b border-border">
      <div className="mx-auto grid max-w-7xl gap-12 sm:gap-16 px-6 lg:grid-cols-2 lg:px-8 items-center">
        {/* Left Column: Narrative & Mission */}
        <div>
          {/* Eyebrow: Hidden on mobile to avoid clutter */}
          <div className="hidden sm:inline-block">
            <span className="rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-xs font-serif italic text-primary">
              {t.about.eyebrow}
            </span>
          </div>

          <h2 className="mt-4 sm:mt-5 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.15] text-text">
            {t.about.title}
          </h2>

          <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-5 text-base sm:text-lg leading-relaxed text-text-secondary font-serif">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </div>
        </div>

        {/* Right Column: 4 Pillars Cards with Traditional Roman Numerals */}
        <div className="grid gap-5 sm:grid-cols-2">
          {t.about.pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-md"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-accent/80 transition-transform duration-300 group-hover:scale-x-105" />

              <div className="flex items-center justify-between pb-3 border-b border-border/70">
                <span className="font-serif text-2xl font-normal text-accent tracking-wide">
                  {romanNumerals[index]}
                </span>
                <span className="text-[10px] font-serif uppercase tracking-widest text-text-muted">
                  Pillar
                </span>
              </div>

              <h3 className="mt-4 font-serif text-xl font-medium text-text">
                {pillar.title}
              </h3>

              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-text-secondary font-serif">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}