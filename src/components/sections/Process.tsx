import { useState } from "react";
import {
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Factory,
  FileCheck2,
  FlaskConical,
  PackageCheck,
  Search,
  ShieldCheck,
  TestTube,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const processIcons = [Search, FlaskConical, TestTube, Factory, PackageCheck];

const stageMeta = [
  {
    phaseTag: "Discovery & Blueprint",
    compliance: "Target Product Profile (TPP)",
    timeline: "Weeks 1–3",
    icon: Search,
  },
  {
    phaseTag: "Formulation Science",
    compliance: "HPLC & Organoleptic Assay",
    timeline: "Weeks 4–8",
    icon: FlaskConical,
  },
  {
    phaseTag: "Clinical Verification",
    compliance: "ICH Q1A Stability Protocols",
    timeline: "Weeks 9–16",
    icon: TestTube,
  },
  {
    phaseTag: "Cleanroom Compounding",
    compliance: "EU GMP / ISO 22716 Cleanroom",
    timeline: "Weeks 17–20",
    icon: Factory,
  },
  {
    phaseTag: "European Commercial Release",
    compliance: "Qualified Person (QP) Release",
    timeline: "Weeks 21–24",
    icon: PackageCheck,
  },
];

export function Process() {
  const { t } = useLanguage();
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const steps = t.process.steps;
  const activeStep = steps[activeStepIndex] || steps[0];
  const ActiveIcon = processIcons[activeStepIndex % processIcons.length];
  const activeMeta = stageMeta[activeStepIndex] || stageMeta[0];

  return (
    <section id="process" className="bg-surface py-28 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            <ClipboardCheck size={14} />
            <span>{t.process.eyebrow}</span>
          </span>

          <h2 className="mt-5 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-text">
            {t.process.title}
          </h2>

          <p className="mt-6 text-base sm:text-lg leading-relaxed text-text-secondary">
            {t.process.subtitle}
          </p>
        </div>

        {/* Connected Interactive Stepper (Desktop Horizontal Pipeline) */}
        <div className="mt-16 hidden lg:block">
          <div className="relative">
            {/* Connecting Track Line */}
            <div className="absolute top-7 left-12 right-12 h-0.5 bg-border -z-0" />
            <div
              className="absolute top-7 left-12 h-0.5 bg-primary transition-all duration-500 -z-0"
              style={{
                width: `${(activeStepIndex / (steps.length - 1)) * 88}%`,
              }}
            />

            {/* Stepper Node Buttons */}
            <div className="relative z-10 flex justify-between">
              {steps.map((step, idx) => {
                const Icon = processIcons[idx % processIcons.length];
                const isActive = idx === activeStepIndex;
                const isPassed = idx < activeStepIndex;

                return (
                  <button
                    key={step.number}
                    onClick={() => setActiveStepIndex(idx)}
                    className="group flex flex-col items-center focus:outline-none cursor-pointer"
                  >
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                        isActive
                          ? "border-primary bg-primary text-white shadow-md scale-110"
                          : isPassed
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border bg-surface text-text-muted hover:border-primary/40 hover:text-text"
                      }`}
                    >
                      {isPassed ? <CheckCircle2 size={22} /> : <Icon size={20} />}
                    </div>

                    <span
                      className={`mt-3 text-xs font-bold uppercase tracking-wider transition-colors ${
                        isActive ? "text-primary" : "text-text-muted group-hover:text-text"
                      }`}
                    >
                      Phase {step.number}
                    </span>

                    <span className="text-[11px] text-text-secondary max-w-[130px] text-center truncate mt-0.5 font-medium">
                      {step.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Active Stage Spotlight Feature Card (Academic Dossier Quality) */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-background p-8 sm:p-12 shadow-sm transition-all duration-500">
          <div className="grid gap-10 lg:grid-cols-12 items-center">
            {/* Left Column: Stage Detail & Deliverable (Col 1-7) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-accent">
                  Phase {activeStep.number}
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                  {activeMeta.phaseTag}
                </span>
                <span className="text-xs font-medium text-text-muted bg-surface px-3 py-1 rounded-full border border-border">
                  Timeline: {activeMeta.timeline}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-text">
                {activeStep.title}
              </h3>

              <p className="text-base sm:text-lg leading-relaxed text-text-secondary">
                {activeStep.description}
              </p>

              {/* Deliverable Pill with Academic Rigor */}
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5 sm:p-6">
                <div className="flex items-start gap-3.5">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <FileCheck2 size={16} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
                      Formal Industrial Output
                    </span>
                    <p className="mt-1 text-sm sm:text-base font-semibold text-text">
                      {activeStep.deliverable}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quality & Regulatory Checkpoint */}
              <div className="flex items-center gap-2 pt-2 text-xs text-text-muted">
                <ShieldCheck size={15} className="text-accent" />
                <span>Regulatory Standard: <strong>{activeMeta.compliance}</strong></span>
              </div>
            </div>

            {/* Right Column: Visual Stage Badge & Overview Matrix (Col 8-12) */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-border/80 bg-surface p-7 sm:p-8 space-y-5">
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <span className="text-xs font-bold uppercase tracking-wider text-text-muted">
                    CDMO Turnkey Pipeline
                  </span>
                  <span className="text-xs font-semibold text-accent">
                    Step {activeStepIndex + 1} of {steps.length}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20">
                    <ActiveIcon size={30} />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted uppercase font-bold tracking-wider">
                      Stage Milestone
                    </p>
                    <p className="font-serif text-lg font-medium text-text mt-0.5">
                      {activeMeta.phaseTag}
                    </p>
                  </div>
                </div>

                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center justify-between text-xs py-1.5 border-t border-border/60">
                    <span className="text-text-muted">Standard Turnaround</span>
                    <span className="font-semibold text-text">{activeMeta.timeline}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-1.5 border-t border-border/60">
                    <span className="text-text-muted">Documentation</span>
                    <span className="font-semibold text-primary">Audit-Ready Technical File</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-1.5 border-t border-border/60">
                    <span className="text-text-muted">Industrial Plants</span>
                    <span className="font-semibold text-text">Schio (VI) & Ivrea (TO)</span>
                  </div>
                </div>

                {/* Quick Next Stage Trigger */}
                <div className="pt-4 flex justify-between items-center">
                  <button
                    disabled={activeStepIndex === 0}
                    onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                    className="text-xs font-semibold uppercase tracking-wider text-text-muted hover:text-text disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                  >
                    Previous Phase
                  </button>

                  <button
                    disabled={activeStepIndex === steps.length - 1}
                    onClick={() =>
                      setActiveStepIndex((prev) => Math.min(steps.length - 1, prev + 1))
                    }
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary hover:text-accent disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                  >
                    <span>Next Phase</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Complete Sequential Pipeline Overview (All 5 Steps Summary Grid) */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => {
            const Icon = processIcons[index % processIcons.length];
            const isCurrent = index === activeStepIndex;

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
                  <span className="font-serif text-xl font-bold text-accent">
                    {step.number}
                  </span>
                  <div className="text-primary">
                    <Icon size={18} />
                  </div>
                </div>

                <h4 className="mt-3 font-serif text-base font-medium text-text leading-snug">
                  {step.title}
                </h4>

                <p className="mt-2 text-xs text-text-secondary line-clamp-2 leading-relaxed">
                  {step.description}
                </p>

                <div className="mt-4 pt-3 border-t border-border/70 flex items-center justify-between text-[11px]">
                  <span className="text-text-muted font-medium">Phase {step.number}</span>
                  <span className="font-semibold text-primary">View Specs →</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
