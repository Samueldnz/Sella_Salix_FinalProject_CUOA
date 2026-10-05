import { Building2, CheckCircle2, Factory, GraduationCap, MapPin, Sparkles } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function HeritageSynergy() {
  const { t } = useLanguage();

  return (
    <section id="heritage" className="relative bg-surface py-28 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            <Building2 size={14} className="text-primary" />
            <span>{t.heritage.eyebrow}</span>
          </div>

          <h2 className="mt-5 font-serif text-4xl font-normal tracking-tight text-text sm:text-5xl">
            {t.heritage.title}
          </h2>

          <p className="mt-6 text-base sm:text-lg leading-relaxed text-text-secondary">
            {t.heritage.subtitle}
          </p>
        </div>

        {/* The Two Pillars Comparison Grid */}
        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {/* Sella Card */}
          <div className="relative rounded-3xl border border-border bg-background p-8 lg:p-10 shadow-xs transition-all duration-300 hover:shadow-md hover:border-primary/30">
            <div className="absolute top-0 left-8 -translate-y-1/2 rounded-full border border-accent/30 bg-accent px-4 py-1 text-[11px] font-semibold uppercase tracking-wider text-white shadow-2xs">
              Heritage Pillar · Est. 1920
            </div>

            <div className="flex items-start justify-between pt-2">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-text">
                  {t.heritage.sellaTitle}
                </h3>
                <div className="mt-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
                  <MapPin size={14} />
                  <span>{t.heritage.sellaSubtitle}</span>
                </div>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <Building2 size={24} />
              </div>
            </div>

            <p className="mt-6 text-sm sm:text-base leading-relaxed text-text-secondary">
              {t.heritage.sellaDesc}
            </p>

            <div className="mt-8 pt-6 border-t border-border/80">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-text mb-4">
                Core Strengths & Credentials
              </h4>
              <ul className="space-y-3">
                {t.heritage.sellaPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" />
                    <span className="text-xs sm:text-sm text-text-secondary">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Salix Card */}
          <div className="relative rounded-3xl border border-border bg-background p-8 lg:p-10 shadow-xs transition-all duration-300 hover:shadow-md hover:border-primary/30">
            <div className="absolute top-0 left-8 -translate-y-1/2 rounded-full border border-primary/30 bg-primary px-4 py-1 text-[11px] font-semibold uppercase tracking-wider text-white shadow-2xs">
              High-Tech CDMO · Est. 1998
            </div>

            <div className="flex items-start justify-between pt-2">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-text">
                  {t.heritage.salixTitle}
                </h3>
                <div className="mt-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                  <MapPin size={14} />
                  <span>{t.heritage.salixSubtitle}</span>
                </div>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Factory size={24} />
              </div>
            </div>

            <p className="mt-6 text-sm sm:text-base leading-relaxed text-text-secondary">
              {t.heritage.salixDesc}
            </p>

            <div className="mt-8 pt-6 border-t border-border/80">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-text mb-4">
                Core Strengths & Credentials
              </h4>
              <ul className="space-y-3">
                {t.heritage.salixPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-primary" />
                    <span className="text-xs sm:text-sm text-text-secondary">{point}</span>
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
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <Sparkles size={16} className="text-accent" />
                <span>{t.heritage.synergySubtitle}</span>
              </div>
              <h3 className="mt-3 font-serif text-2xl sm:text-3xl font-normal text-text">
                {t.heritage.synergyTitle}
              </h3>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-text-secondary">
                {t.heritage.synergyDesc}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
              <div className="inline-flex items-center gap-2.5 rounded-2xl border border-primary/25 bg-surface px-5 py-3.5 shadow-xs">
                <GraduationCap size={20} className="text-primary" />
                <span className="text-xs font-semibold text-text">
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
