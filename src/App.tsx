import { useState } from "react";
import "./App.css";
import { LanguageProvider } from "./context/LanguageContext";
import { Header } from "./components/layout/Header";
import { Hero } from "./components/sections/Hero";
import { HeritageSynergy } from "./components/sections/HeritageSynergy";
import { Certifications } from "./components/sections/Certifications";
import { InstitutionalVideo } from "./components/sections/InstitutionalVideo";
import { About } from "./components/sections/About";
import { Expertise } from "./components/sections/Expertise";
import { FormulationExplorer } from "./components/sections/FormulationExplorer";
import { Technology } from "./components/sections/Technology";
import { Process } from "./components/sections/Process";
import { CTA } from "./components/sections/CTA";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/layout/Footer";
import { LegalModal } from "./components/legal/LegalModal";
import type { LegalDocType } from "./components/legal/LegalModal";
import { CookieBanner } from "./components/legal/CookieBanner";
import { ScientificDossierPage } from "./components/pages/ScientificDossierPage";

function MainContent() {
  const [currentPage, setCurrentPage] = useState<"home" | "dossier">("home");
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [activeLegalDoc, setActiveLegalDoc] = useState<LegalDocType>("privacy");
  const [forceCookiePreferences, setForceCookiePreferences] = useState(false);

  const handleOpenLegal = (doc: LegalDocType) => {
    setActiveLegalDoc(doc);
    setLegalModalOpen(true);
  };

  const handleNavigateHome = () => {
    setCurrentPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigateDossier = () => {
    setCurrentPage("dossier");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Header
        currentPage={currentPage}
        onNavigateHome={handleNavigateHome}
        onNavigateDossier={handleNavigateDossier}
      />

      {currentPage === "home" ? (
        <main>
          <Hero />
          <HeritageSynergy />
          <Certifications />
          <InstitutionalVideo />
          <About />
          <Expertise />
          <FormulationExplorer />
          <Technology />
          <Process />
          <CTA />
          <Contact onOpenPrivacy={() => handleOpenLegal("privacy")} />
        </main>
      ) : (
        <ScientificDossierPage onBackToHome={handleNavigateHome} />
      )}

      <Footer
        onOpenLegal={handleOpenLegal}
        onOpenCookiePreferences={() => setForceCookiePreferences(true)}
        onNavigateHome={handleNavigateHome}
        onNavigateDossier={handleNavigateDossier}
      />

      {/* Accessible Comprehensive Legal Slide-Over Drawer (GDPR & Terms) */}
      <LegalModal
        isOpen={legalModalOpen}
        activeDoc={activeLegalDoc}
        onClose={() => setLegalModalOpen(false)}
        onSelectDoc={setActiveLegalDoc}
      />

      {/* Interactive Italian Garante Privacy & GDPR Compliant Cookie Banner */}
      <CookieBanner
        forceOpen={forceCookiePreferences}
        onCloseForceOpen={() => setForceCookiePreferences(false)}
        onOpenCookiePolicy={() => handleOpenLegal("cookies")}
      />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}

export default App;
