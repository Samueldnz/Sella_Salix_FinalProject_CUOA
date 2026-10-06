import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

const stageMeta = [
  {
    phaseTag: "Discovery & Blueprint",
    compliance: "Target Product Profile (TPP)",
    timeline: "Weeks 1–3",
    site: "Schio (VI)",
  },
  {
    phaseTag: "Formulation Science",
    compliance: "HPLC & Organoleptic Assay",
    timeline: "Weeks 4–8",
    site: "Ivrea (TO)",
  },
  {
    phaseTag: "Clinical Verification",
    compliance: "ICH Q1A Stability Protocols",
    timeline: "Weeks 9–16",
    site: "Schio (VI)",
  },
  {
    phaseTag: "Cleanroom Compounding",
    compliance: "EU GMP / ISO 22716 Cleanroom",
    timeline: "Weeks 17–20",
    site: "Schio (VI) & Ivrea (TO)",
  },
  {
    phaseTag: "European Commercial Release",
    compliance: "Qualified Person (QP) Release",
    timeline: "Weeks 21–24",
    site: "Monte di Malo (VI)",
  },
];

export function Process() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<number>(0);

  const steps = t.process.steps;

  return (
    <section id="process" className="bg-surface py-20 sm:py-28 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header (Eyebrow hidden on mobile to eliminate clutter) */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="hidden sm:inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            {t.process.eyebrow}
          </span>

          <h2 className="mt-3 sm:mt-5 text-3xl font-bold tracking-tight text-text sm:text-4xl lg:text-5xl">
            {t.process.title}
          </h2>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed text-text-secondary">
            {t.process.subtitle}
          </p>
        </div>

        {/* Phase Quick Selector (Clean, minimal, horizontal tabs on desktop & mobile) */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <div className="inline-flex w-full sm:w-auto overflow-x-auto no-scrollbar items-center gap-1.5 rounded-2xl border border-border bg-background p-1.5 shadow-xs">
            {steps.map((step, idx) => {
              const isSelected = idx === activeTab;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveTab(idx)}
                  className={`shrink-0 rounded-xl px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    isSelected
                      ? "bg-primary text-white shadow-xs font-bold"
                      : "text-text-secondary hover:text-text hover:bg-surface"
                  }`}
                >
                  <span>Phase {step.number}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Highlighted Spotlight Phase Card - Impeccable Framing without Cramped Nesting */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-border bg-background p-6 sm:p-10 lg:p-12 shadow-sm">
          {(() => {
            const currentStep = steps[activeTab] || steps[0];
            const currentMeta = stageMeta[activeTab] || stageMeta[0];

            return (
              <div className="space-y-7">
                {/* Header Row: Phase Tag & Estimated Timeline */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-5 border-b border-border/80">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl sm:text-3xl font-bold text-accent">
                      Phase {currentStep.number}
                    </span>
                    <span className="rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                      {currentMeta.phaseTag}
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-text-secondary bg-surface px-3.5 py-1.5 rounded-full border border-border w-fit">
                    <span className="text-text-muted">Turnaround:</span>
                    <span className="text-text">{currentMeta.timeline}</span>
                  </div>
                </div>

                {/* Main Phase Title & Narrative Description */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-text">
                    {currentStep.title}
                  </h3>
                  <p className="mt-4 text-base sm:text-lg leading-relaxed text-text-secondary max-w-3xl">
                    {currentStep.description}
                  </p>
                </div>

                {/* Formally Framed Industrial Output Box (Zero collisions, comfortable padding) */}
                <div className="rounded-2xl border border-primary/25 bg-primary/5 p-5 sm:p-7">
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary block">
                    Formal Industrial Output
                  </span>
                  <p className="mt-2 text-sm sm:text-base font-semibold text-text leading-snug">
                    {currentStep.deliverable}
                  </p>
                </div>

                {/* Key Technical Parameters Row (Clearly separated into distinct columns) */}
                <div className="grid gap-4 sm:grid-cols-2 pt-2">
                  <div className="rounded-xl border border-border bg-surface p-4 sm:p-5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted block">
                      Quality & Regulatory Benchmark
                    </span>
                    <p className="mt-1.5 text-xs sm:text-sm font-semibold text-text">
                      {currentMeta.compliance}
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-surface p-4 sm:p-5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted block">
                      Manufacturing Plant Allocation
                    </span>
                    <p className="mt-1.5 text-xs sm:text-sm font-semibold text-text">
                      {currentMeta.site}
                    </p>
                  </div>
                </div>

                {/* Navigation Controls between phases */}
                <div className="flex items-center justify-between pt-4 border-t border-border/80">
                  <button
                    disabled={activeTab === 0}
                    onClick={() => setActiveTab((prev) => Math.max(0, prev - 1))}
                    className="text-xs font-bold uppercase tracking-wider text-text-muted hover:text-text disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                  >
                    ← Previous Phase
                  </button>

                  <span className="text-xs font-medium text-text-muted">
                    Step {activeTab + 1} of {steps.length}
                  </span>

                  <button
                    disabled={activeTab === steps.length - 1}
                    onClick={() => setActiveTab((prev) => Math.min(steps.length - 1, prev + 1))}
                    className="text-xs font-bold uppercase tracking-wider text-primary hover:text-accent disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                  >
                    Next Phase →
                  </button>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Complete Overview of all 5 Phases - Clean Framed Cards Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => {
            const isCurrent = index === activeTab;
            const meta = stageMeta[index] || stageMeta[0];

            return (
              <div
                key={step.number}
                onClick={() => setActiveTab(index)}
                className={`rounded-2xl border p-5 sm:p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isCurrent
                    ? "border-primary bg-primary/5 shadow-xs ring-1 ring-primary/20"
                    : "border-border bg-background hover:border-primary/40 hover:bg-surface"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-accent">
                      {step.number}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-text-muted">
                      {meta.timeline}
                    </span>
                  </div>

                  <h4 className="mt-3 text-sm sm:text-base font-semibold text-text leading-snug">
                    {step.title}
                  </h4>

                  <p className="mt-2 text-xs text-text-secondary line-clamp-3 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-border/70 flex items-center justify-between text-[11px]">
                  <span className="text-text-muted font-medium">{meta.phaseTag}</span>
                  <span className="font-semibold text-primary">Select →</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
