import { Mail, Phone, Building2, Factory, GraduationCap, Cookie, FileText } from "lucide-react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { useLanguage } from "../../context/LanguageContext";
import type { LegalDocType } from "../legal/LegalModal";
import { Logo } from "../brand/Logo";

interface FooterProps {
  onOpenLegal: (doc: LegalDocType) => void;
  onOpenCookiePreferences: () => void;
  onNavigateHome: () => void;
  onNavigateDossier: () => void;
}

export function Footer({
  onOpenLegal,
  onOpenCookiePreferences,
  onNavigateHome,
  onNavigateDossier,
}: FooterProps) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* Brand Info & Mission (Col 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            <button
              onClick={onNavigateHome}
              className="group flex items-center text-left focus:outline-none cursor-pointer"
            >
              <Logo variant="horizontal" size="md" />
            </button>

            <p className="text-sm leading-relaxed text-text-secondary max-w-md">
              {t.footer.description}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-text transition-colors hover:border-primary hover:text-primary"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedinIn size={16} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-text transition-colors hover:border-primary hover:text-primary"
                aria-label="Instagram Profile"
              >
                <FaInstagram size={16} />
              </a>

              {/* Language Switcher in Footer */}
              <div className="ml-4 inline-flex items-center rounded-full border border-border bg-surface p-1 text-xs font-semibold">
                <button
                  onClick={() => setLanguage("en")}
                  className={`rounded-full px-2.5 py-0.5 transition-colors cursor-pointer ${
                    language === "en" ? "bg-primary text-white" : "text-text-secondary hover:text-text"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage("it")}
                  className={`rounded-full px-2.5 py-0.5 transition-colors cursor-pointer ${
                    language === "it" ? "bg-primary text-white" : "text-text-secondary hover:text-text"
                  }`}
                >
                  IT
                </button>
              </div>
            </div>
          </div>

          {/* Quick Navigation (Col 6-8) */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-lg font-medium text-text">
              {t.footer.navTitle}
            </h3>

            <ul className="mt-5 space-y-3 text-xs sm:text-sm">
              <li>
                <button
                  onClick={onNavigateHome}
                  className="text-text-secondary transition-colors hover:text-accent cursor-pointer text-left"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <a
                  href="#expertise"
                  onClick={onNavigateHome}
                  className="text-text-secondary transition-colors hover:text-accent"
                >
                  {t.nav.expertise}
                </a>
              </li>
              <li>
                <a
                  href="#heritage"
                  onClick={onNavigateHome}
                  className="text-text-secondary transition-colors hover:text-accent"
                >
                  {t.nav.heritage}
                </a>
              </li>
              <li>
                <button
                  onClick={onNavigateDossier}
                  className="inline-flex items-center gap-1.5 font-medium text-primary hover:text-accent transition-colors cursor-pointer text-left"
                >
                  <FileText size={14} className="text-gold-hover" />
                  <span>{t.nav.dossier}</span>
                </button>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={onNavigateHome}
                  className="text-text-secondary transition-colors hover:text-accent"
                >
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Headquarters & Facilities (Col 9-12) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-serif text-lg font-medium text-text">
              {t.footer.contactTitle}
            </h3>

            <div className="space-y-3.5 text-xs sm:text-sm text-text-secondary pt-1">
              <div className="flex items-start gap-2.5">
                <Building2 size={16} className="mt-0.5 text-accent shrink-0" />
                <div>
                  <span className="font-semibold text-text">Sella Pharma R&D (Est. 1920):</span>
                  <p>Via Vicenza 67, 36015 Schio (VI), Italy</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Factory size={16} className="mt-0.5 text-primary shrink-0" />
                <div>
                  <span className="font-semibold text-text">Salix Industrial CDMO (Est. 1998):</span>
                  <p>Via dell'Artigianato, 36030 Monte di Malo (VI), Italy</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-2">
                <Mail size={16} className="text-primary shrink-0" />
                <a href="mailto:contact@nexofarm.com" className="hover:text-primary transition-colors">
                  contact@nexofarm.com
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-primary shrink-0" />
                <a href="tel:+390445670088" className="hover:text-primary transition-colors">
                  +39 0445 670088
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Academic & Conceptual Disclaimer Banner - As requested by user */}
        <div className="mt-14 rounded-2xl border border-gold/40 bg-gold-subtle p-6 shadow-2xs">
          <div className="flex items-start gap-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/20 text-gold-hover">
              <GraduationCap size={20} />
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gold-hover">
                CUOA Business School · Academic Capstone Disclosure
              </span>
              <p className="text-xs sm:text-sm leading-relaxed text-text-secondary">
                {t.footer.cuoaNote}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Compliance Strip */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-border pt-8 text-xs text-text-secondary md:flex-row">
          <p>{t.footer.rights}</p>

          <div className="flex flex-wrap items-center gap-6">
            <button
              onClick={() => onOpenLegal("privacy")}
              className="transition-colors hover:text-primary underline-offset-4 hover:underline cursor-pointer"
            >
              {t.footer.privacyPolicy}
            </button>

            <button
              onClick={() => onOpenLegal("cookies")}
              className="transition-colors hover:text-primary underline-offset-4 hover:underline cursor-pointer"
            >
              {t.footer.cookiePolicy}
            </button>

            <button
              onClick={() => onOpenLegal("terms")}
              className="transition-colors hover:text-primary underline-offset-4 hover:underline cursor-pointer"
            >
              {t.footer.termsOfUse}
            </button>

            <button
              onClick={onOpenCookiePreferences}
              className="flex items-center gap-1.5 font-medium text-primary hover:text-accent transition-colors cursor-pointer"
            >
              <Cookie size={13} />
              <span>{t.footer.cookieSettings}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}