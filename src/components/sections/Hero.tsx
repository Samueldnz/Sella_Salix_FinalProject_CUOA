import { ArrowRight } from "lucide-react";
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
            {/* Eyebrow Badge (Hidden on mobile to reduce cognitive noise as requested) */}
            <div className="hidden sm:inline-flex items-center gap-2">
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

            {/* Main Title - Modern Italian Typography without heavy serifs */}
            <h1
              className="
                mt-4 sm:mt-6
                text-3xl
                font-bold
                leading-[1.15]
                tracking-tight
                text-text
                sm:text-5xl
                md:text-6xl
                xl:text-[3.8rem]
              "
            >
              {t.hero.titleLine1}{" "}
              <span className="block text-primary font-medium tracking-tight">
                {t.hero.titleLine2}
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mx-auto
                mt-5 sm:mt-6
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
                mt-8 sm:mt-9
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
                <ArrowRight size={15} />
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

            {/* Understated Sophisticated Reassurances (Without cluttered icons) */}
            <div className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-1.5 text-xs text-text-muted">
              <span>EU GMP & AIFA Authorized Facilities</span>
              <span className="hidden sm:inline text-border-strong">•</span>
              <span>Plants in Schio (VI) & Ivrea (TO)</span>
            </div>
          </div>

          {/* Right Column: High-Res 3D Trade Fair Stand Showcase (Col 8-12) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-lg lg:max-w-none">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1.5 rounded-[2rem] bg-gradient-to-tr from-primary/15 via-accent/10 to-primary/10 blur-xl opacity-70" />

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

                {/* Editorial Caption Bar (Clean, dignified typography without distracting icons) */}
                <div className="border-t border-border/80 bg-surface/95 px-5 py-3.5 backdrop-blur-xs flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-text tracking-wider uppercase">
                      Nexofarm Pavilion · CPHI Milan
                    </p>
                    <p className="text-[11px] text-text-muted mt-0.5">
                      High-Tech Biotechnology & Sterile CDMO Showcase
                    </p>
                  </div>

                  <span className="hidden sm:inline-block rounded-full border border-border bg-surface px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-text-secondary">
                    Italian CDMO
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Repositioned Industry Metrics: Vertical on Mobile, 4-Col Grid on Desktop */}
        <div className="mt-14 sm:mt-16 w-full rounded-2xl border border-border/90 bg-surface/85 shadow-sm backdrop-blur-md">
          <div className="grid grid-cols-1 divide-y divide-border/60 sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
            {/* Metric 1 */}
            <div className="p-6 sm:p-7 text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent tracking-tight">
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
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight">
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
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent tracking-tight">
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
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight">
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