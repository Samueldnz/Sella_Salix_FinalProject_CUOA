import { Beaker, PackageCheck, Search, ShieldCheck, TestTube } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const processIcons = [Search, Beaker, ShieldCheck, TestTube, PackageCheck];

export function Process() {
  const { t } = useLanguage();

  return (
    <section id="process" className="bg-surface py-28 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            {t.process.eyebrow}
          </span>

          <h2 className="mt-5 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-text">
            {t.process.title}
          </h2>

          <p className="mt-6 text-base sm:text-lg leading-relaxed text-text-secondary">
            {t.process.subtitle}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-20">
          <div className="absolute left-6 top-0 h-full w-px bg-border lg:left-1/2 lg:-translate-x-1/2" />

          <div className="space-y-12 sm:space-y-16">
            {t.process.steps.map((step, index) => {
              const Icon = processIcons[index % processIcons.length];
              const reverse = index % 2 === 1;

              return (
                <div
                  key={step.number}
                  className={`relative grid items-center gap-8 lg:grid-cols-2 ${
                    reverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Step Card */}
                  <div
                    className={`rounded-3xl border border-border bg-background p-8 sm:p-9 shadow-xs transition-all duration-300 hover:shadow-md hover:border-primary/30 ${
                      reverse ? "lg:text-right" : ""
                    }`}
                  >
                    <div className={`flex items-center gap-3 ${reverse ? "lg:justify-end" : ""}`}>
                      <span className="font-serif text-2xl font-bold text-accent">
                        {step.number}
                      </span>
                      <span className="text-[11px] font-semibold uppercase tracking-widest text-text-muted">
                        CDMO Stage
                      </span>
                    </div>

                    <h3 className="mt-3 font-serif text-2xl font-medium text-text">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-text-secondary">
                      {step.description}
                    </p>

                    <div className={`mt-5 pt-4 border-t border-border/70 ${reverse ? "lg:flex lg:justify-end" : ""}`}>
                      <span className="inline-block rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
                        {step.deliverable}
                      </span>
                    </div>
                  </div>

                  {/* Node Circle on timeline */}
                  <div className="absolute left-6 hidden h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border-2 border-primary/20 bg-surface shadow-xs md:flex lg:left-1/2 text-primary">
                    <Icon size={22} />
                  </div>

                  {/* Empty Spacer */}
                  <div className="hidden lg:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
