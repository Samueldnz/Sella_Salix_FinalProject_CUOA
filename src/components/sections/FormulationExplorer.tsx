import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../../context/LanguageContext";
import biotechPhoto from "../../assets/images/formulation_biotech.jpg";
import dermoPhoto from "../../assets/images/formulation_dermo.jpg";
import nutraPhoto from "../../assets/images/formulation_nutra.jpg";
import galenicsPhoto from "../../assets/images/formulation_galenics.jpg";

const formulationPhotos: Record<string, string> = {
  biotech: biotechPhoto,
  dermo: dermoPhoto,
  nutra: nutraPhoto,
  galenics: galenicsPhoto,
};

export const FormulationExplorer: React.FC = () => {
  const { t } = useLanguage();
  const [activeTabId, setActiveTabId] = useState<string>("biotech");

  const activeTab =
    t.explorer.tabs.find((tab) => tab.id === activeTabId) || t.explorer.tabs[0];

  const currentPhoto = formulationPhotos[activeTabId] || biotechPhoto;

  return (
    <section className="bg-background py-20 sm:py-28 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header (Eyebrow hidden on mobile to eliminate clutter) */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="hidden sm:inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            <span>{t.explorer.eyebrow}</span>
          </span>

          <h2 className="mt-3 sm:mt-5 text-3xl font-bold tracking-tight text-text sm:text-4xl lg:text-5xl">
            {t.explorer.title}
          </h2>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed text-text-secondary">
            {t.explorer.subtitle}
          </p>
        </div>

        {/* Segmented Interactive Tabs (Clean typography without redundant icons) */}
        <div className="mt-12 sm:mt-14 flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 rounded-2xl border border-border bg-surface p-1.5 shadow-xs">
            {t.explorer.tabs.map((tab) => {
              const isActive = tab.id === activeTabId;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`relative flex items-center rounded-xl px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
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
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Specimen Console with Generous Spacing and Zero Text Collisions */}
        <div className="mt-10 sm:mt-12 overflow-hidden rounded-3xl border border-border bg-surface shadow-md">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="grid lg:grid-cols-12 items-stretch"
            >
              {/* Left Column: Technical Specifications & Data */}
              <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-8 sm:space-y-10">
                {/* Header Row: Generous Spacing for Eyebrow & Facility Origin */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-3">
                    <span className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-primary w-fit shadow-2xs">
                      {activeTab.category}
                    </span>

                    <span className="inline-flex items-center text-xs font-medium text-text-secondary bg-surface-alt/80 px-3.5 py-1.5 rounded-full border border-border/70 w-fit">
                      <span>{activeTab.facilityOrigin}</span>
                    </span>
                  </div>

                  <h3 className="mt-4 sm:mt-5 text-2xl sm:text-3xl lg:text-[2.2rem] font-semibold leading-[1.2] text-text">
                    {activeTab.tagline}
                  </h3>

                  <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed text-text-secondary max-w-2xl">
                    {activeTab.description}
                  </p>
                </div>

                {/* Technical Parameters Matrix (Sophisticated Typography without cluttered icons) */}
                <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 pt-6 sm:pt-8 border-t border-border/80">
                  <div className="rounded-2xl border border-border bg-background p-5 sm:p-6 transition-all duration-300 hover:border-accent/40">
                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-accent block">
                      Active Molecule
                    </span>
                    <p className="mt-2 text-xs sm:text-sm font-semibold text-text leading-snug">
                      {activeTab.activeMolecule}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border bg-background p-5 sm:p-6 transition-all duration-300 hover:border-primary/40">
                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-primary block">
                      Delivery System
                    </span>
                    <p className="mt-2 text-xs sm:text-sm font-semibold text-text leading-snug">
                      {activeTab.deliverySystem}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border bg-background p-5 sm:p-6 transition-all duration-300 hover:border-accent/40">
                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-gold-hover block">
                      Clinical Purity
                    </span>
                    <p className="mt-2 text-xs sm:text-sm font-semibold text-text leading-snug">
                      {activeTab.clinicalPurity}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border bg-background p-5 sm:p-6 transition-all duration-300 hover:border-text/30">
                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-text-muted block">
                      Stability Profile
                    </span>
                    <p className="mt-2 text-xs sm:text-sm font-semibold text-text leading-snug">
                      {activeTab.stabilityProfile}
                    </p>
                  </div>
                </div>

                {/* Bottom Bar: Generous Breathing Room & Clean Wrapped Alignment */}
                <div className="pt-6 border-t border-border/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="text-xs sm:text-sm text-text-secondary">
                    <span className="text-text-muted mr-1.5">Batch Capacity:</span>
                    <strong className="text-text font-semibold">{activeTab.batchSpecs}</strong>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-primary/5 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-primary hover:bg-primary hover:text-white transition-all shadow-2xs shrink-0"
                  >
                    <span>Request Spec Dossier</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Unique Editorial High-Res Laboratory Photography per Topic */}
              <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full overflow-hidden bg-black">
                <img
                  src={currentPhoto}
                  alt={activeTab.label}
                  className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-transparent flex items-end p-8 sm:p-10">
                  <div className="space-y-1.5 text-white">
                    <span className="inline-block rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                      Verified Formulation Asset
                    </span>
                    <p className="text-lg sm:text-xl font-light text-white/95">
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
