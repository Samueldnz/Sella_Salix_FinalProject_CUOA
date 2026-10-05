import React from "react";
import {
  ArrowLeft,
  FileText,
  GraduationCap,
  ShieldAlert,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import labPhoto from "../../assets/images/nexofarm_lab_editorial.jpg";
import facilityPhoto from "../../assets/images/nexofarm_facility_editorial.jpg";

interface ScientificDossierPageProps {
  onBackToHome: () => void;
}

export const ScientificDossierPage: React.FC<ScientificDossierPageProps> = ({
  onBackToHome,
}) => {
  const { t } = useLanguage();
  const d = t.dossierPage;

  return (
    <article className="min-h-screen bg-background pt-28 pb-24 text-text">
      {/* Top Breadcrumb & Back Navigation */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <button
          onClick={onBackToHome}
          className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary transition-colors hover:text-accent cursor-pointer"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          <span>{d.backHome}</span>
        </button>
      </div>

      {/* Header Banner */}
      <header className="mx-auto max-w-7xl px-6 pt-8 pb-16 lg:px-8">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold-subtle px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-hover shadow-2xs">
            <GraduationCap size={15} />
            <span>{d.badge}</span>
          </div>

          <h1 className="mt-6 font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] tracking-tight text-text">
            {d.title}
          </h1>

          <p className="mt-6 text-base sm:text-xl leading-relaxed text-text-secondary font-light">
            {d.subtitle}
          </p>
        </div>

        {/* Academic Disclaimer Callout Box */}
        <aside className="mt-10 rounded-2xl border-l-4 border-l-accent border-y border-r border-border bg-surface p-6 shadow-xs">
          <div className="flex items-start gap-3.5">
            <ShieldAlert size={22} className="mt-0.5 shrink-0 text-accent" />
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-accent">
                Nota di Trasparenza Accademica / Academic Transparency Notice
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-text-secondary">
                {d.conceptualDisclaimer}
              </p>
            </div>
          </div>
        </aside>
      </header>

      {/* Editorial Split: Academic Context & Visuals */}
      <section className="border-y border-border bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                {d.academicContextBadge}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-text">
                {d.academicContextTitle}
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-text-secondary">
                {d.academicContextText}
              </p>

              <div className="pt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-background p-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent">Pillar I · 1920</span>
                  <h3 className="font-serif text-lg font-medium text-text mt-1">Laboratorio Farmaceutico Sella</h3>
                  <p className="text-xs text-text-secondary mt-1.5 leading-relaxed">
                    Centennial galenic mastery, AIFA pharmaceutical cleanrooms, OTC medicine authority in Schio (VI).
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-background p-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">Pillar II · 1998</span>
                  <h3 className="font-serif text-lg font-medium text-text mt-1">Salix S.r.l.</h3>
                  <p className="text-xs text-text-secondary mt-1.5 leading-relaxed">
                    10,000+ m² automated CDMO facility, microencapsulation, nutraceutical and dietary health scale in Monte di Malo (VI).
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-border shadow-lg">
                <img
                  src={labPhoto}
                  alt="Nexofarm Historical Laboratory in Vicenza"
                  className="aspect-4/3 w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                  <p className="text-xs font-medium text-white/90">
                    Historical Botanical & Galenic R&D Suite · Province of Vicenza
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Strategic Objectives */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Strategic Thesis
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-normal text-text">
            {d.objectivesTitle}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {d.objectives.map((obj) => (
            <div
              key={obj.num}
              className="rounded-3xl border border-border bg-surface p-7 shadow-2xs hover:shadow-md transition-shadow"
            >
              <span className="font-serif text-3xl font-bold text-accent">{obj.num}</span>
              <h3 className="mt-4 font-serif text-xl font-medium text-text">{obj.title}</h3>
              <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-text-secondary">
                {obj.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparative Synergy Matrix Table */}
      <section className="border-t border-border bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Operational Synergy
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-normal text-text">
              {d.synergyMatrixTitle}
            </h2>
          </div>

          <div className="mt-10 overflow-x-auto rounded-3xl border border-border bg-background shadow-xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-border bg-surface-secondary/70">
                  <th className="p-4 sm:p-5 font-semibold text-text uppercase tracking-wider text-[11px]">
                    {d.synergyMatrixHeaders.dimension}
                  </th>
                  <th className="p-4 sm:p-5 font-semibold text-accent uppercase tracking-wider text-[11px]">
                    {d.synergyMatrixHeaders.sella}
                  </th>
                  <th className="p-4 sm:p-5 font-semibold text-primary uppercase tracking-wider text-[11px]">
                    {d.synergyMatrixHeaders.salix}
                  </th>
                  <th className="p-4 sm:p-5 font-semibold text-gold-hover uppercase tracking-wider text-[11px]">
                    {d.synergyMatrixHeaders.nexofarm}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {d.synergyRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-surface transition-colors">
                    <td className="p-4 sm:p-5 font-medium text-text">{row.dimension}</td>
                    <td className="p-4 sm:p-5 text-text-secondary">{row.sella}</td>
                    <td className="p-4 sm:p-5 text-text-secondary">{row.salix}</td>
                    <td className="p-4 sm:p-5 font-medium text-primary bg-primary/5">{row.nexofarm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* European & Italian Market Dynamics with Facility Visual */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-lg">
              <img
                src={facilityPhoto}
                alt="Automated CDMO Manufacturing Facility in Monte di Malo"
                className="aspect-4/3 w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <p className="text-xs font-medium text-white/90">
                  Automated Cleanroom Lines & Robotics · Monte di Malo (VI)
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Market Grounding
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-text">
              {d.marketAnalysisTitle}
            </h2>

            <div className="space-y-4 pt-2">
              {d.marketPoints.map((pt, idx) => (
                <div key={idx} className="rounded-2xl border border-border bg-surface p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-lg font-medium text-text">{pt.title}</h3>
                    <span className="font-serif text-base font-bold text-accent">{pt.stat}</span>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Architecture & Academic Conclusions */}
      <section className="border-t border-border bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="rounded-3xl border border-border bg-background p-8 sm:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <FileText size={24} />
              </div>
              <h2 className="mt-6 font-serif text-2xl sm:text-3xl font-medium text-text">
                {d.regulatoryTitle}
              </h2>
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-text-secondary">
                {d.regulatoryText}
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-background p-8 sm:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 text-gold-hover">
                <GraduationCap size={24} />
              </div>
              <h2 className="mt-6 font-serif text-2xl sm:text-3xl font-medium text-text">
                {d.conclusionsTitle}
              </h2>
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-text-secondary">
                {d.conclusionsText}
              </p>
            </div>
          </div>

          <div className="mt-14 text-center">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-white shadow-sm hover:bg-primary-hover transition-all cursor-pointer"
            >
              <ArrowLeft size={16} />
              <span>{d.backHome}</span>
            </button>
          </div>
        </div>
      </section>
    </article>
  );
};
