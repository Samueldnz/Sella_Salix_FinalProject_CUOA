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
  ShieldCheck,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import biotechPhoto from "../../assets/images/formulation_biotech.jpg";
import dermoPhoto from "../../assets/images/formulation_dermo.jpg";
import nutraPhoto from "../../assets/images/formulation_nutra.jpg";
import galenicsPhoto from "../../assets/images/formulation_galenics.jpg";

const tabIcons = {
  biotech: Dna,
  dermo: Sparkles,
  nutra: Pill,
  galenics: FlaskConical,
};

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
                  className={`relative flex items-center gap-2 rounded-xl px-5 py-3 text-xs font-semibold tracking-wider transition-all cursor-pointer ${
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

        {/* Interactive Specimen Console with Generous Spacing */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-surface shadow-md">
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
              <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between space-y-10">
                {/* Header Row: Generous Spacing for Eyebrow & Facility Origin */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-3">
                    <span className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-primary w-fit shadow-2xs">
                      {activeTab.category}
                    </span>

                    <span className="inline-flex items-center gap-2 text-xs font-medium text-text-secondary bg-surface-alt/80 px-3.5 py-1.5 rounded-full border border-border/70 w-fit">
                      <MapPin size={13} className="text-accent shrink-0" />
                      <span>{activeTab.facilityOrigin}</span>
                    </span>
                  </div>

                  <h3 className="mt-5 font-serif text-2xl sm:text-3xl lg:text-[2.25rem] font-normal leading-[1.22] text-text">
                    {activeTab.tagline}
                  </h3>

                  <p className="mt-5 text-sm sm:text-base leading-relaxed text-text-secondary max-w-2xl">
                    {activeTab.description}
                  </p>
                </div>

                {/* Technical Parameters Matrix (2x2 Grid with generous padding) */}
                <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 pt-8 border-t border-border/80">
                  <div className="rounded-2xl border border-border bg-background p-5 sm:p-6 transition-all duration-300 hover:border-accent/40">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-accent flex items-center gap-2">
                      <Dna size={14} />
                      Active Molecule
                    </span>
                    <p className="mt-2 text-xs sm:text-sm font-semibold text-text leading-snug">
                      {activeTab.activeMolecule}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border bg-background p-5 sm:p-6 transition-all duration-300 hover:border-primary/40">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary flex items-center gap-2">
                      <Layers size={14} />
                      Delivery System
                    </span>
                    <p className="mt-2 text-xs sm:text-sm font-semibold text-text leading-snug">
                      {activeTab.deliverySystem}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border bg-background p-5 sm:p-6 transition-all duration-300 hover:border-accent/40">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gold-hover flex items-center gap-2">
                      <Activity size={14} />
                      Clinical Purity
                    </span>
                    <p className="mt-2 text-xs sm:text-sm font-semibold text-text leading-snug">
                      {activeTab.clinicalPurity}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border bg-background p-5 sm:p-6 transition-all duration-300 hover:border-text/30">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-text-muted flex items-center gap-2">
                      <Clock size={14} />
                      Stability Profile
                    </span>
                    <p className="mt-2 text-xs sm:text-sm font-semibold text-text leading-snug">
                      {activeTab.stabilityProfile}
                    </p>
                  </div>
                </div>

                {/* Bottom Bar: Generous Breathing Room & Clean Wrapped Alignment */}
                <div className="pt-6 border-t border-border/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                  <div className="text-xs sm:text-sm text-text-secondary">
                    <span className="text-text-muted mr-1.5">Batch Capacity:</span>
                    <strong className="text-text font-semibold">{activeTab.batchSpecs}</strong>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-primary hover:bg-primary hover:text-white transition-all shadow-2xs shrink-0"
                  >
                    <span>Request Spec Dossier</span>
                    <FileCheck size={14} />
                  </a>
                </div>
              </div>

              {/* Right Column: Unique Editorial High-Res Laboratory Photography per Topic */}
              <div className="lg:col-span-5 relative min-h-[360px] lg:min-h-full overflow-hidden bg-black">
                <img
                  src={currentPhoto}
                  alt={activeTab.label}
                  className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-transparent flex items-end p-8 sm:p-10">
                  <div className="space-y-2 text-white">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                        <ShieldCheck size={12} />
                        Verified Formulation Asset
                      </span>
                      <span className="text-[11px] text-white/80 font-medium">
                        {activeTab.category}
                      </span>
                    </div>

                    <p className="font-serif text-lg sm:text-xl font-light text-white/95">
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
