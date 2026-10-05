import { Mail, Phone, Building2, Factory, GraduationCap, Cookie } from "lucide-react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { useLanguage } from "../../context/LanguageContext";
import type { LegalDocType } from "../legal/LegalModal";

interface FooterProps {
  onOpenLegal: (doc: LegalDocType) => void;
  onOpenCookiePreferences: () => void;
}

export function Footer({ onOpenLegal, onOpenCookiePreferences }: FooterProps) {
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { label: t.nav.home, href: "#" },
    { label: t.nav.heritage, href: "#heritage" },
    { label: t.nav.expertise, href: "#expertise" },
    { label: t.nav.certifications, href: "#certifications" },
    { label: t.nav.technology, href: "#technology" },
    { label: t.nav.process, href: "#process" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* Brand Info & Mission (Col 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            <a href="#" className="flex items-center gap-3.5">
              <img
                src="/logo.svg"
                alt="Nexofarm Logo"
                className="h-12 w-auto"
              />
              <div>
                <span className="font-roman text-2xl font-bold tracking-wider text-primary">
                  NEXOFARM
                </span>
                <p className="text-[10px] uppercase tracking-[0.24em] text-text-secondary font-medium">
                  Sella & Salix Synergy · Vicenza
                </p>
              </div>
            </a>

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
                  className={`rounded-full px-2.5 py-0.5 transition-colors ${
                    language === "en" ? "bg-primary text-white" : "text-text-secondary hover:text-text"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage("it")}
                  className={`rounded-full px-2.5 py-0.5 transition-colors ${
                    language === "it" ? "bg-primary text-white" : "text-text-secondary hover:text-text"
                  }`}
                >
                  IT
                </button>
              </div>
            </div>

            {/* Academic Roots Badge */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 rounded-xl border border-primary/15 bg-primary/5 px-3.5 py-2 text-xs text-text-secondary">
                <GraduationCap size={16} className="text-primary shrink-0" />
                <span>{t.footer.cuoaNote}</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation (Col 6-8) */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-lg font-medium text-text">
              {t.footer.navTitle}
            </h3>

            <ul className="mt-5 space-y-2.5">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-xs sm:text-sm text-text-secondary transition-colors hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
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

        {/* Bottom Legal & Compliance Strip */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-border pt-8 text-xs text-text-secondary md:flex-row">
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