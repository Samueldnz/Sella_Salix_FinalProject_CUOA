import { ArrowRight, Award, Building2, CheckCircle2, Sparkles } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import standImage from "../../assets/images/stand.png";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-16 lg:pt-28 lg:pb-24 border-b border-border">
      {/* Subtle ambient lighting */}
      <div className="absolute -top-40 right-0 h-[36rem] w-[36rem] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-40 h-[30rem] w-[30rem] rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main 2-Column Split: Editorial Copy + Trade Fair Exhibition Showcase */}
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Vision, Identity & Actions (Col 1-7) */}
          <div className="text-center lg:text-left lg:col-span-7">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2">
              <span
                className="
                  inline-flex items-center
                  rounded-full
                  border
                  border-primary/25
                  bg-primary/10
                  px-4
                  py-1.5
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-primary
                  shadow-2xs
                "
              >
                <span className="flex items-center gap-1.5">
                  <span className="inline-block h-2 w-2 rounded-full bg-[#009246]" />
                  <span className="inline-block h-2 w-2 rounded-full bg-white border border-border" />
                  <span className="inline-block h-2 w-2 rounded-full bg-[#CE2B37]" />
                </span>
                <span className="ml-2.5">{t.hero.eyebrow}</span>
              </span>
            </div>

            {/* Main Title - Italian Serif Elegance */}
            <h1
              className="
                mt-6
                font-serif
                text-4xl
                font-normal
                leading-[1.12]
                tracking-tight
                text-text
                sm:text-5xl
                md:text-6xl
                xl:text-[4rem]
              "
            >
              {t.hero.titleLine1}{" "}
              <span className="block italic text-primary font-serif font-light">
                {t.hero.titleLine2}
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-base
                leading-relaxed
                text-text-secondary
                sm:text-lg
                lg:mx-0
              "
            >
              {t.hero.subtitle}
            </p>

            {/* Action Buttons */}
            <div
              className="
                mt-9
                flex
                flex-col
                gap-4
                sm:flex-row
                sm:justify-center
                lg:justify-start
              "
            >
              <a
                href="#expertise"
                className="
                  w-full sm:w-auto
                  inline-flex
                  items-center
                  justify-center
                  gap-2.5
                  rounded-full
                  bg-primary
                  px-8
                  py-4
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-white
                  shadow-sm
                  transition-all
                  duration-300
                  hover:bg-primary-hover
                  hover:shadow-md
                  hover:-translate-y-0.5
                "
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight size={16} />
              </a>

              <a
                href="#contact"
                className="
                  w-full sm:w-auto
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-border-strong
                  bg-surface
                  px-8
                  py-4
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-primary
                  transition-all
                  duration-300
                  hover:border-accent
                  hover:text-accent
                  hover:shadow-2xs
                "
              >
                <span>{t.hero.ctaSecondary}</span>
              </a>
            </div>

            {/* Micro Reassurances */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-text-muted">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-primary" />
                <span>EU GMP & AIFA Authorized Facilities</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Building2 size={14} className="text-accent" />
                <span>Plants in Schio (VI) & Ivrea (TO)</span>
              </span>
            </div>
          </div>

          {/* Right Column: High-Res 3D Trade Fair Stand Showcase (Col 8-12) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-lg lg:max-w-none">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1.5 rounded-[2rem] bg-gradient-to-tr from-primary/20 via-accent/20 to-primary/10 blur-xl opacity-70" />

              {/* Showcase Frame */}
              <div className="relative overflow-hidden rounded-[1.75rem] border border-border/80 bg-surface shadow-xl">
                {/* Stand Image */}
                <div className="aspect-[4/3] w-full overflow-hidden bg-background">
                  <img
                    src={standImage}
                    alt="Nexofarm Exhibition Stand - Trade Fair Showcase"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="eager"
                  />
                </div>

                {/* Editorial Caption Bar */}
                <div className="border-t border-border/80 bg-surface/95 px-5 py-4 backdrop-blur-xs flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Sparkles size={16} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-text tracking-wide uppercase">
                        Nexofarm Pavilion · CPHI Milan
                      </p>
                      <p className="text-[11px] text-text-muted">
                        High-Tech Biotechnology & Sterile CDMO Showcase
                      </p>
                    </div>
                  </div>

                  <span className="hidden sm:inline-flex items-center gap-1 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent">
                    <Award size={12} />
                    Italian CDMO
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Repositioned & Elevated Industry Metrics Ribbon (Full Width, Architectural Breathing Room) */}
        <div className="mt-16 w-full rounded-2xl border border-border/90 bg-surface/85 shadow-sm backdrop-blur-md">
          <div className="grid grid-cols-2 divide-y divide-border/60 sm:grid-cols-4 sm:divide-y-0 sm:divide-x sm:divide-border/60">
            {/* Metric 1 */}
            <div className="p-6 sm:p-7 text-center">
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-accent tracking-tight">
                {t.hero.stat1Value}
              </div>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-text">
                {t.hero.stat1Label}
              </p>
              <p className="mt-1 text-[11px] text-text-muted">
                Sella Farmaceutici (1920) Heritage
              </p>
            </div>

            {/* Metric 2 */}
            <div className="p-6 sm:p-7 text-center">
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary tracking-tight">
                {t.hero.stat2Value}
              </div>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-text">
                {t.hero.stat2Label}
              </p>
              <p className="mt-1 text-[11px] text-text-muted">
                Automated Veneto Cleanroom Surface
              </p>
            </div>

            {/* Metric 3 */}
            <div className="p-6 sm:p-7 text-center">
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-accent tracking-tight">
                {t.hero.stat3Value}
              </div>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-text">
                {t.hero.stat3Label}
              </p>
              <p className="mt-1 text-[11px] text-text-muted">
                Total Annual Single-Dose Throughput
              </p>
            </div>

            {/* Metric 4 */}
            <div className="p-6 sm:p-7 text-center">
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary tracking-tight">
                {t.hero.stat4Value}
              </div>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-text">
                {t.hero.stat4Label}
              </p>
              <p className="mt-1 text-[11px] text-text-muted">
                AIFA, ISO 22716 & EU GMP Certified
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}