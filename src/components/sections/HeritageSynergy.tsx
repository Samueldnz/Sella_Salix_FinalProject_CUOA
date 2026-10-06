import { useLanguage } from "../../context/LanguageContext";

export function HeritageSynergy() {
  const { t } = useLanguage();

  return (
    <section id="heritage" className="relative bg-surface py-24 sm:py-28 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow: Hidden on mobile to avoid clutter */}
          <div className="hidden sm:inline-block">
            <span className="rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-xs font-serif italic text-primary">
              {t.heritage.eyebrow}
            </span>
          </div>

          <h2 className="mt-4 sm:mt-5 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-text">
            {t.heritage.title}
          </h2>

          <p className="mt-5 text-base sm:text-lg leading-relaxed text-text-secondary font-serif">
            {t.heritage.subtitle}
          </p>
        </div>

        {/* The Two Pillars Comparison Grid */}
        <div className="mt-14 sm:mt-16 grid gap-8 lg:grid-cols-2">
          {/* Sella Card */}
          <div className="relative rounded-3xl border border-border bg-background p-8 lg:p-10 shadow-xs transition-all duration-300 hover:border-primary/30">
            <div className="absolute top-0 left-8 -translate-y-1/2 rounded-full border border-accent/30 bg-accent px-4 py-1 text-[11px] font-serif font-bold uppercase tracking-wider text-white shadow-2xs">
              Heritage Pillar · Est. 1920
            </div>

            <div className="flex items-start justify-between pt-2">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-text">
                  {t.heritage.sellaTitle}
                </h3>
                <div className="mt-2 text-xs font-serif font-semibold uppercase tracking-wider text-accent">
                  {t.heritage.sellaSubtitle}
                </div>
              </div>
              <div className="font-serif text-3xl font-light text-accent">
                1920
              </div>
            </div>

            <p className="mt-6 text-sm sm:text-base leading-relaxed text-text-secondary font-serif">
              {t.heritage.sellaDesc}
            </p>

            <div className="mt-8 pt-6 border-t border-border/80">
              <h4 className="text-xs font-serif font-bold uppercase tracking-wider text-text mb-4">
                Core Strengths & Credentials
              </h4>
              <ul className="space-y-3">
                {t.heritage.sellaPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-accent mt-0.5">•</span>
                    <span className="text-xs sm:text-sm text-text-secondary font-serif">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Salix Card */}
          <div className="relative rounded-3xl border border-border bg-background p-8 lg:p-10 shadow-xs transition-all duration-300 hover:border-primary/30">
            <div className="absolute top-0 left-8 -translate-y-1/2 rounded-full border border-primary/30 bg-primary px-4 py-1 text-[11px] font-serif font-bold uppercase tracking-wider text-white shadow-2xs">
              High-Tech CDMO · Est. 1998
            </div>

            <div className="flex items-start justify-between pt-2">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-text">
                  {t.heritage.salixTitle}
                </h3>
                <div className="mt-2 text-xs font-serif font-semibold uppercase tracking-wider text-primary">
                  {t.heritage.salixSubtitle}
                </div>
              </div>
              <div className="font-serif text-3xl font-light text-primary">
                1998
              </div>
            </div>

            <p className="mt-6 text-sm sm:text-base leading-relaxed text-text-secondary font-serif">
              {t.heritage.salixDesc}
            </p>

            <div className="mt-8 pt-6 border-t border-border/80">
              <h4 className="text-xs font-serif font-bold uppercase tracking-wider text-text mb-4">
                Core Strengths & Credentials
              </h4>
              <ul className="space-y-3">
                {t.heritage.salixPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary mt-0.5">•</span>
                    <span className="text-xs sm:text-sm text-text-secondary font-serif">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Central Synergy Banner */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-primary/20 bg-linear-to-br from-primary/5 via-background to-accent/5 p-8 sm:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="text-xs font-serif font-bold uppercase tracking-widest text-primary">
                {t.heritage.synergySubtitle}
              </div>
              <h3 className="mt-3 font-serif text-2xl sm:text-3xl font-normal text-text">
                {t.heritage.synergyTitle}
              </h3>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-text-secondary font-serif">
                {t.heritage.synergyDesc}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
              <div className="inline-flex items-center rounded-2xl border border-primary/25 bg-surface px-5 py-3.5 shadow-xs">
                <span className="text-xs font-serif font-semibold text-text">
                  {t.heritage.cuoaBadge}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
