import { ArrowRight, Check, Dna, FlaskConical, Pill, Sparkles } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const disciplineIcons = [Dna, Sparkles, Pill, FlaskConical];

export function Expertise() {
  const { t } = useLanguage();

  return (
    <section id="expertise" className="bg-surface py-28 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="hidden sm:inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            {t.expertise.eyebrow}
          </span>

          <h2 className="mt-5 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-text">
            {t.expertise.title}
          </h2>

          <p className="mt-6 text-base sm:text-lg leading-relaxed text-text-secondary">
            {t.expertise.subtitle}
          </p>
        </div>

        {/* 4 Disciplines Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {t.expertise.items.map((item, index) => {
            const Icon = disciplineIcons[index % disciplineIcons.length];

            return (
              <article
                key={item.title}
                className="group relative flex flex-col justify-between rounded-3xl border border-border bg-background p-8 sm:p-10 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <Icon size={28} />
                    </div>
                    <span className="rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-text-secondary">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="mt-7 font-serif text-2xl sm:text-3xl font-medium text-text">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-text-secondary">
                    {item.description}
                  </p>

                  <div className="mt-8 pt-6 border-t border-border/80">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3.5">
                      Technical Capabilities:
                    </h4>
                    <ul className="space-y-3">
                      {item.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <Check size={12} />
                          </div>
                          <span className="text-xs sm:text-sm text-text-secondary font-medium">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary transition-all duration-200 group-hover:text-accent group-hover:gap-3"
                  >
                    <span>Request Formulation Specs</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}