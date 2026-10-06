import { useLanguage } from "../../context/LanguageContext";

const romanNumerals = ["I", "II", "III", "IV"];

export function Expertise() {
  const { t } = useLanguage();

  return (
    <section id="expertise" className="bg-surface py-24 sm:py-28 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow: Hidden on mobile to avoid clutter */}
          <div className="hidden sm:inline-block">
            <span className="rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-xs font-serif italic text-primary">
              {t.expertise.eyebrow}
            </span>
          </div>

          <h2 className="mt-4 sm:mt-5 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-text">
            {t.expertise.title}
          </h2>

          <p className="mt-5 text-base sm:text-lg leading-relaxed text-text-secondary font-serif">
            {t.expertise.subtitle}
          </p>
        </div>

        {/* 4 Disciplines Grid */}
        <div className="mt-14 sm:mt-16 grid gap-6 sm:gap-8 md:grid-cols-2">
          {t.expertise.items.map((item, index) => (
            <article
              key={item.title}
              className="group relative flex flex-col justify-between rounded-3xl border border-border bg-background p-8 sm:p-10 transition-all duration-300 hover:border-primary/40 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-border/70">
                  <span className="font-serif text-3xl font-normal text-accent tracking-wide">
                    {romanNumerals[index]}
                  </span>
                  <span className="rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-serif uppercase tracking-wider text-text-secondary">
                    {item.category}
                  </span>
                </div>

                <h3 className="mt-6 font-serif text-2xl sm:text-3xl font-normal text-text">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm sm:text-base leading-relaxed text-text-secondary font-serif">
                  {item.description}
                </p>

                <div className="mt-8 pt-6 border-t border-border/80">
                  <h4 className="text-xs font-serif font-bold uppercase tracking-wider text-text-muted mb-3.5">
                    Technical Capabilities:
                  </h4>
                  <ul className="space-y-2.5">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm text-text font-serif">
                        <span className="text-accent mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <a
                  href="#contact"
                  className="inline-flex items-center text-xs font-serif font-semibold uppercase tracking-widest text-primary hover:text-accent transition-colors cursor-pointer"
                >
                  Consult Formulation Team →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}