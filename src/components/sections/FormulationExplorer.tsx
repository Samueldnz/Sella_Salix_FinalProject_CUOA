import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Activity,
  Clock,
  Dna,
  FileCheck,
  FlaskConical,
  Layers,
  MapPin,
  Pill,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import labPhoto from "../../assets/images/nexofarm_lab_editorial.jpg";
import facilityPhoto from "../../assets/images/nexofarm_facility_editorial.jpg";

const tabIcons = {
  biotech: Dna,
  dermo: Sparkles,
  nutra: Pill,
  galenics: FlaskConical,
};

export const FormulationExplorer: React.FC = () => {
  const { t } = useLanguage();
  const [activeTabId, setActiveTabId] = useState<string>("biotech");

  const activeTab =
    t.explorer.tabs.find((tab) => tab.id === activeTabId) || t.explorer.tabs[0];

  const currentPhoto =
    activeTabId === "biotech" || activeTabId === "dermo" ? labPhoto : facilityPhoto;

  return (
    <section className="bg-background py-28 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            <FlaskConical size={14} />
            <span>{t.explorer.eyebrow}</span>
          </span>

          <h2 className="mt-5 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-text">
            {t.explorer.title}
          </h2>

          <p className="mt-6 text-base sm:text-lg leading-relaxed text-text-secondary">
            {t.explorer.subtitle}
          </p>
        </div>

        {/* Segmented Interactive Italian Tabs */}
        <div className="mt-14 flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-border bg-surface p-1.5 shadow-xs">
            {t.explorer.tabs.map((tab) => {
              const Icon = tabIcons[tab.id as keyof typeof tabIcons] || FlaskConical;
              const isActive = tab.id === activeTabId;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`relative flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                    isActive
                      ? "text-white"
                      : "text-text-secondary hover:text-text hover:bg-background"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-explorer-tab"
                      className="absolute inset-0 rounded-xl bg-primary shadow-xs"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon size={15} />
                    <span>{tab.label}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Specimen Console */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-surface shadow-md">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-12 items-stretch"
            >
              {/* Left Column: Technical Specifications & Data */}
              <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-8">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
                      {activeTab.category}
                    </span>
                    <span className="text-border-strong">•</span>
                    <span className="text-xs text-text-muted flex items-center gap-1.5">
                      <MapPin size={13} className="text-accent" />
                      {activeTab.facilityOrigin}
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-2xl sm:text-3xl font-medium text-text">
                    {activeTab.tagline}
                  </h3>

                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-text-secondary">
                    {activeTab.description}
                  </p>
                </div>

                {/* Technical Parameters Matrix */}
                <div className="grid gap-4 sm:grid-cols-2 pt-6 border-t border-border/80">
                  <div className="rounded-2xl border border-border bg-background p-4.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent flex items-center gap-1.5">
                      <Dna size={12} />
                      Active Molecule
                    </span>
                    <p className="mt-1.5 text-xs font-semibold text-text leading-snug">
                      {activeTab.activeMolecule}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border bg-background p-4.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                      <Layers size={12} />
                      Delivery System
                    </span>
                    <p className="mt-1.5 text-xs font-semibold text-text leading-snug">
                      {activeTab.deliverySystem}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border bg-background p-4.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold-hover flex items-center gap-1.5">
                      <Activity size={12} />
                      Clinical Purity
                    </span>
                    <p className="mt-1.5 text-xs font-semibold text-text leading-snug">
                      {activeTab.clinicalPurity}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border bg-background p-4.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted flex items-center gap-1.5">
                      <Clock size={12} />
                      Stability Profile
                    </span>
                    <p className="mt-1.5 text-xs font-semibold text-text leading-snug">
                      {activeTab.stabilityProfile}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-text-secondary">
                    Batch Capacity: <strong className="text-text">{activeTab.batchSpecs}</strong>
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary hover:text-accent transition-colors"
                  >
                    <span>Request Spec Dossier</span>
                    <FileCheck size={14} />
                  </a>
                </div>
              </div>

              {/* Right Column: High-Res Editorial Photography with Overlay */}
              <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full overflow-hidden bg-black">
                <img
                  src={currentPhoto}
                  alt={activeTab.label}
                  className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent flex items-end p-8">
                  <div className="space-y-1.5 text-white">
                    <span className="inline-block rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                      Verified Laboratory Asset
                    </span>
                    <p className="font-serif text-lg font-light text-white/95">
                      {activeTab.facilityOrigin}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
