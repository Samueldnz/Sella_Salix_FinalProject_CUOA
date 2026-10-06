import { Atom, FlaskConical, Leaf, ShieldCheck } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const icons = [ShieldCheck, FlaskConical, Atom, Leaf];

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-background py-28 border-b border-border">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-8 items-center">
        {/* Left Column: Narrative & Mission */}
        <div>
          <span className="hidden sm:inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            {t.about.eyebrow}
          </span>

          <h2 className="mt-5 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.15] text-text">
            {t.about.title}
          </h2>

          <div className="mt-8 space-y-5 text-base sm:text-lg leading-relaxed text-text-secondary">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </div>
        </div>

        {/* Right Column: 4 Pillars Cards */}
        <div className="grid gap-5 sm:grid-cols-2">
          {t.about.pillars.map((pillar, index) => {
            const Icon = icons[index % icons.length];

            return (
              <article
                key={pillar.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-accent transition-transform duration-300 group-hover:scale-x-105" />
                
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon size={24} />
                </div>

                <h3 className="mt-6 font-serif text-xl font-medium text-text">
                  {pillar.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-text-secondary">
                  {pillar.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}