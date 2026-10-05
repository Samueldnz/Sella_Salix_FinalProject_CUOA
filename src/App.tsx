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
import { Technology } from "./components/sections/Technology";
import { Process } from "./components/sections/Process";
import { CTA } from "./components/sections/CTA";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/layout/Footer";
import { LegalModal } from "./components/legal/LegalModal";
import type { LegalDocType } from "./components/legal/LegalModal";
import { CookieBanner } from "./components/legal/CookieBanner";

function MainContent() {
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [activeLegalDoc, setActiveLegalDoc] = useState<LegalDocType>("privacy");
  const [forceCookiePreferences, setForceCookiePreferences] = useState(false);

  const handleOpenLegal = (doc: LegalDocType) => {
    setActiveLegalDoc(doc);
    setLegalModalOpen(true);
  };

  return (
    <>
      <Header />

      <main>
        <Hero />
        <HeritageSynergy />
        <Certifications />
        <InstitutionalVideo />
        <About />
        <Expertise />
        <Technology />
        <Process />
        <CTA />
        <Contact onOpenPrivacy={() => handleOpenLegal("privacy")} />
      </main>

      <Footer
        onOpenLegal={handleOpenLegal}
        onOpenCookiePreferences={() => setForceCookiePreferences(true)}
      />

      {/* Accessible Comprehensive Legal Modal (GDPR, Garante Privacy & Terms) */}
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
