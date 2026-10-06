import { useLanguage } from "../../context/LanguageContext";

export function Certifications() {
  const { t } = useLanguage();

  return (
    <section id="certifications" className="bg-background py-24 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow: Hidden on mobile to avoid clutter */}
          <div className="hidden sm:inline-block">
            <span className="rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-xs font-serif italic text-primary">
              {t.certifications.eyebrow}
            </span>
          </div>

          <h2 className="mt-4 sm:mt-5 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-text">
            {t.certifications.title}
          </h2>

          <p className="mt-5 text-base sm:text-lg text-text-secondary font-serif">
            {t.certifications.subtitle}
          </p>
        </div>

        <div className="mt-14 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.certifications.badges.map((badge, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-md"
            >
              <div className="flex items-center justify-between pb-4 border-b border-border/70">
                <span className="font-serif text-2xl font-semibold text-primary tracking-wide">
                  {badge.name.split(" ")[0]}
                </span>
                <span className="rounded-full border border-border bg-background px-3 py-1 text-[10px] font-serif uppercase tracking-wider text-accent font-semibold">
                  Official Standard
                </span>
              </div>

              <h3 className="mt-4 font-serif text-lg font-medium text-text group-hover:text-primary transition-colors">
                {badge.name}
              </h3>

              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-text-secondary font-serif">
                {badge.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
