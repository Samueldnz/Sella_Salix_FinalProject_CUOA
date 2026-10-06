import { ShieldCheck } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function Certifications() {
  const { t } = useLanguage();

  return (
    <section id="certifications" className="bg-background py-24 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            <ShieldCheck size={14} />
            <span>{t.certifications.eyebrow}</span>
          </span>

          <h2 className="mt-5 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-text">
            {t.certifications.title}
          </h2>

          <p className="mt-5 text-base sm:text-lg text-text-secondary">
            {t.certifications.subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.certifications.badges.map((badge, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-medium text-text group-hover:text-primary transition-colors">
                    {badge.name}
                  </h3>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-accent">
                    Certified Standard
                  </span>
                </div>
              </div>
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-text-secondary">
                {badge.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
