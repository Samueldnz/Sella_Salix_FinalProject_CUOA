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
            {/* Traditional Minimal Eyebrow (Hidden on mobile as requested to prevent clutter) */}
            <div className="hidden sm:inline-flex items-center">
              <span className="rounded-full border border-primary/25 bg-primary/5 px-4 py-1 text-xs font-serif italic text-primary tracking-wide">
                Vicenza, Veneto · Est. 1920 & 1998 · Italian Life Sciences
              </span>
            </div>

            {/* Main Title - Pure Italian Bodoni / Garamond Elegance */}
            <h1 className="mt-4 sm:mt-6 font-serif text-3xl sm:text-5xl md:text-6xl xl:text-[4rem] font-normal leading-[1.14] tracking-tight text-text">
              {t.hero.titleLine1}{" "}
              <span className="block italic text-primary font-serif font-light">
                {t.hero.titleLine2}
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-text-secondary font-sans lg:mx-0">
              {t.hero.subtitle}
            </p>

            {/* Action Buttons (Clean traditional styling without generic icons) */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#expertise"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white shadow-sm transition-all duration-300 hover:bg-primary-hover hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
              >
                {t.hero.ctaPrimary}
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-border-strong bg-surface px-8 py-4 text-xs font-semibold uppercase tracking-widest text-primary transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-2xs cursor-pointer"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>

            {/* Micro Reassurances (Typographic without noisy icons) */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-1 text-xs text-text-muted font-serif italic">
              <span>EU GMP & AIFA Authorized Facilities</span>
              <span className="text-border-strong hidden sm:inline">•</span>
              <span>Production Plants in Schio (VI) & Ivrea (TO)</span>
            </div>
          </div>

          {/* Right Column: High-Res 3D Trade Fair Stand Showcase (Col 8-12) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-lg lg:max-w-none">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1.5 rounded-[2rem] bg-gradient-to-tr from-primary/15 via-accent/15 to-primary/10 blur-xl opacity-70" />

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

                {/* Editorial Caption Bar (Clean, no noisy icons) */}
                <div className="border-t border-border/80 bg-surface/95 px-6 py-4 backdrop-blur-xs flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-text font-serif">
                      Nexofarm Pavilion · CPHI Milan
                    </p>
                    <p className="text-[11px] text-text-muted font-serif italic">
                      High-Tech Biotechnology & Sterile CDMO Showcase
                    </p>
                  </div>

                  <span className="hidden sm:inline-block rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-accent">
                    Italian CDMO
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Elevated Industry Metrics: Vertical Stack on Mobile, 4 Columns on Desktop */}
        <div className="mt-14 sm:mt-16 w-full rounded-2xl border border-border/90 bg-surface/85 shadow-sm backdrop-blur-md overflow-hidden">
          {/* Stacks vertically on mobile/tablet (1 column) to provide ample space, and 4 columns on lg */}
          <div className="flex flex-col divide-y divide-border/60 lg:grid lg:grid-cols-4 lg:divide-y-0 lg:divide-x">
            {/* Metric 1 */}
            <div className="py-6 px-6 sm:py-7 sm:px-8 text-center">
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-accent tracking-tight">
                {t.hero.stat1Value}
              </div>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-text font-serif">
                {t.hero.stat1Label}
              </p>
              <p className="mt-1 text-xs text-text-muted font-serif italic">
                Sella Farmaceutici (1920) Heritage
              </p>
            </div>

            {/* Metric 2 */}
            <div className="py-6 px-6 sm:py-7 sm:px-8 text-center">
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-primary tracking-tight">
                {t.hero.stat2Value}
              </div>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-text font-serif">
                {t.hero.stat2Label}
              </p>
              <p className="mt-1 text-xs text-text-muted font-serif italic">
                Automated Veneto Cleanroom Surface
              </p>
            </div>

            {/* Metric 3 */}
            <div className="py-6 px-6 sm:py-7 sm:px-8 text-center">
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-accent tracking-tight">
                {t.hero.stat3Value}
              </div>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-text font-serif">
                {t.hero.stat3Label}
              </p>
              <p className="mt-1 text-xs text-text-muted font-serif italic">
                Total Annual Single-Dose Throughput
              </p>
            </div>

            {/* Metric 4 */}
            <div className="py-6 px-6 sm:py-7 sm:px-8 text-center">
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-primary tracking-tight">
                {t.hero.stat4Value}
              </div>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-text font-serif">
                {t.hero.stat4Label}
              </p>
              <p className="mt-1 text-xs text-text-muted font-serif italic">
                AIFA, ISO 22716 & EU GMP Certified
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}