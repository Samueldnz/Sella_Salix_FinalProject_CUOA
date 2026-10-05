import { Dna, FlaskConical, Microscope, ShieldCheck } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const techIcons = [Microscope, Dna, FlaskConical, ShieldCheck];

export function Technology() {
  const { t } = useLanguage();

  return (
    <section id="technology" className="bg-background py-28 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            {t.technology.eyebrow}
          </span>

          <h2 className="mt-5 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-text">
            {t.technology.title}
          </h2>

          <p className="mt-6 text-base sm:text-lg leading-relaxed text-text-secondary">
            {t.technology.subtitle}
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative mt-24">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-border lg:block" />

          <div className="grid gap-10 lg:grid-cols-4">
            {t.technology.steps.map((step, index) => {
              const Icon = techIcons[index % techIcons.length];

              return (
                <article
                  key={step.title}
                  className="group relative rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:shadow-md hover:border-primary/30"
                >
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary/15 bg-background text-primary shadow-xs transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon size={26} />
                  </div>

                  <span className="mt-6 block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    Step {step.number}
                  </span>

                  <h3 className="mt-2 font-serif text-xl font-medium text-text">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-text-secondary">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}