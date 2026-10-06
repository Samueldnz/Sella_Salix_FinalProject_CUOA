import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

const stageMeta = [
  {
    romanNumeral: "Phase I",
    phaseTag: "Discovery & Blueprint",
    compliance: "Target Product Profile (TPP)",
    timeline: "Weeks 1–3",
  },
  {
    romanNumeral: "Phase II",
    phaseTag: "Formulation Science",
    compliance: "HPLC & Organoleptic Assay",
    timeline: "Weeks 4–8",
  },
  {
    romanNumeral: "Phase III",
    phaseTag: "Clinical Verification",
    compliance: "ICH Q1A Stability Protocols",
    timeline: "Weeks 9–16",
  },
  {
    romanNumeral: "Phase IV",
    phaseTag: "Cleanroom Compounding",
    compliance: "EU GMP / ISO 22716 Cleanroom",
    timeline: "Weeks 17–20",
  },
  {
    romanNumeral: "Phase V",
    phaseTag: "European Commercial Release",
    compliance: "Qualified Person (QP) Release",
    timeline: "Weeks 21–24",
  },
];

export function Process() {
  const { t } = useLanguage();
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const steps = t.process.steps;
  const activeStep = steps[activeStepIndex] || steps[0];
  const activeMeta = stageMeta[activeStepIndex] || stageMeta[0];

  return (
    <section id="process" className="bg-surface py-24 sm:py-28 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow: Hidden on mobile to avoid clutter */}
          <div className="hidden sm:inline-block">
            <span className="rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-xs font-serif italic text-primary">
              {t.process.eyebrow}
            </span>
          </div>

          <h2 className="mt-4 sm:mt-5 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-text">
            {t.process.title}
          </h2>

          <p className="mt-5 text-base sm:text-lg leading-relaxed text-text-secondary font-serif">
            {t.process.subtitle}
          </p>
        </div>

        {/* Traditional Horizontal Phase Stepper (Desktop) */}
        <div className="mt-14 hidden lg:block">
          <div className="grid grid-cols-5 gap-3 border-b border-border pb-4">
            {steps.map((step, idx) => {
              const isActive = idx === activeStepIndex;
              const meta = stageMeta[idx];

              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`text-left p-3.5 rounded-xl transition-all cursor-pointer ${
                    isActive
                      ? "bg-background border border-primary/30 shadow-2xs"
                      : "hover:bg-background/60"
                  }`}
                >
                  <span
                    className={`text-xs font-serif font-bold uppercase tracking-wider block ${
                      isActive ? "text-primary" : "text-text-muted"
                    }`}
                  >
                    {meta.romanNumeral}
                  </span>
                  <p
                    className={`font-serif text-sm mt-1 truncate ${
                      isActive ? "text-text font-semibold" : "text-text-secondary"
                    }`}
                  >
                    {step.title}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Focused Phase Dossier Card - Architectural, Framed & Spacious */}
        <div className="mt-8 sm:mt-12 rounded-3xl border border-border/90 bg-background p-6 sm:p-10 lg:p-12 shadow-sm transition-all duration-300">
          {/* Top Meta Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-6 border-b border-border/70">
            <div className="flex items-center gap-3">
              <span className="font-serif text-2xl sm:text-3xl font-normal text-accent tracking-wide">
                {activeMeta.romanNumeral}
              </span>
              <span className="text-border-strong">•</span>
              <span className="text-xs font-serif uppercase tracking-widest text-text-muted font-semibold">
                {activeMeta.phaseTag}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-serif text-text-muted">
                Timeline: <strong>{activeMeta.timeline}</strong>
              </span>
              <span className="text-xs font-serif text-text-muted ml-2">
                Step {activeStepIndex + 1} of {steps.length}
              </span>
            </div>
          </div>

          {/* Phase Title & Narrative Description */}
          <div className="mt-6 sm:mt-8 space-y-4">
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-text leading-snug">
              {activeStep.title}
            </h3>

            <p className="text-base sm:text-lg leading-relaxed text-text-secondary font-serif max-w-4xl">
              {activeStep.description}
            </p>
          </div>

          {/* Formal Industrial Output Box (Framed Deliverable Sheet) */}
          <div className="mt-8 rounded-2xl border border-primary/25 bg-surface p-6 sm:p-8 shadow-2xs">
            <span className="text-[11px] font-serif font-bold uppercase tracking-[0.2em] text-primary block">
              Formal Industrial Output & Regulatory Dossier
            </span>

            <p className="mt-2 text-base sm:text-lg font-serif font-medium text-text">
              {activeStep.deliverable}
            </p>

            <div className="mt-5 pt-4 border-t border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-text-muted font-serif">
              <span>
                Regulatory Compliance Standard: <strong className="text-text">{activeMeta.compliance}</strong>
              </span>
              <span>
                Authorized Facilities: <strong className="text-text">Schio (VI) & Ivrea (TO)</strong>
              </span>
            </div>
          </div>

          {/* Stage Progression Controls */}
          <div className="mt-8 pt-6 border-t border-border/70 flex items-center justify-between">
            <button
              disabled={activeStepIndex === 0}
              onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
              className="text-xs font-serif font-semibold uppercase tracking-widest text-text-muted hover:text-text disabled:opacity-25 disabled:pointer-events-none cursor-pointer transition-colors"
            >
              ← Previous Phase
            </button>

            <button
              disabled={activeStepIndex === steps.length - 1}
              onClick={() =>
                setActiveStepIndex((prev) => Math.min(steps.length - 1, prev + 1))
              }
              className="text-xs font-serif font-semibold uppercase tracking-widest text-primary hover:text-accent disabled:opacity-25 disabled:pointer-events-none cursor-pointer transition-colors"
            >
              Next Phase →
            </button>
          </div>
        </div>

        {/* 5-Phase Architectural Grid Overview (Clean, Framed Sequential Overview) */}
        <div className="mt-10 sm:mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => {
            const isCurrent = index === activeStepIndex;
            const meta = stageMeta[index];

            return (
              <div
                key={step.number}
                onClick={() => setActiveStepIndex(index)}
                className={`rounded-2xl border p-5 transition-all duration-300 cursor-pointer ${
                  isCurrent
                    ? "border-primary bg-primary/5 shadow-xs"
                    : "border-border bg-surface hover:border-primary/40 hover:bg-background"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-lg font-normal text-accent">
                    {meta.romanNumeral}
                  </span>
                  <span className="text-[11px] font-serif text-text-muted">
                    {meta.timeline}
                  </span>
                </div>

                <h4 className="mt-3 font-serif text-base font-medium text-text leading-snug">
                  {step.title}
                </h4>

                <p className="mt-2 text-xs text-text-secondary line-clamp-2 leading-relaxed font-serif">
                  {step.description}
                </p>

                <div className="mt-4 pt-3 border-t border-border/60 text-[11px] font-serif text-primary font-semibold">
                  View Specifications →
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
