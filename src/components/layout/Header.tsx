import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { Logo } from "../brand/Logo";

interface HeaderProps {
  currentPage: "home" | "dossier";
  onNavigateHome: () => void;
  onNavigateDossier: () => void;
}

export function Header({
  currentPage,
  onNavigateHome,
  onNavigateDossier,
}: HeaderProps) {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/80 bg-surface/95 shadow-xs backdrop-blur-md"
          : "bg-surface/75 backdrop-blur-xs"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Brand Logo & Wordmark (Without Subtitle in Nav as requested) */}
        <button
          onClick={onNavigateHome}
          className="group flex items-center text-left focus:outline-none cursor-pointer"
          aria-label="Nexofarm - Back to Overview"
        >
          <Logo variant="horizontal" size="md" withSubtitle={false} />
        </button>

        {/* Streamlined Desktop Navigation Links (Clean text without icons for maximum breathing room) */}
        <nav className="hidden items-center gap-9 lg:flex">
          <button
            onClick={onNavigateHome}
            className={`text-xs font-semibold uppercase tracking-widest transition-colors duration-200 cursor-pointer ${
              currentPage === "home"
                ? "text-primary border-b-2 border-primary pb-1"
                : "text-text-secondary hover:text-accent"
            }`}
          >
            {t.nav.home}
          </button>

          <a
            href="#expertise"
            onClick={() => {
              if (currentPage !== "home") onNavigateHome();
            }}
            className="text-xs font-semibold uppercase tracking-widest text-text-secondary transition-colors duration-200 hover:text-accent cursor-pointer"
          >
            {t.nav.expertise}
          </a>

          <a
            href="#heritage"
            onClick={() => {
              if (currentPage !== "home") onNavigateHome();
            }}
            className="text-xs font-semibold uppercase tracking-widest text-text-secondary transition-colors duration-200 hover:text-accent cursor-pointer"
          >
            {t.nav.heritage}
          </a>

          <button
            onClick={onNavigateDossier}
            className={`text-xs font-semibold uppercase tracking-widest transition-colors duration-200 cursor-pointer ${
              currentPage === "dossier"
                ? "text-primary border-b-2 border-primary pb-1"
                : "text-text-secondary hover:text-accent"
            }`}
          >
            {t.nav.dossier}
          </button>
        </nav>

        {/* Desktop Right Controls: Compact Language Switcher + Prominent CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          {/* Sleek Compact Bilingual Switcher */}
          <div
            className="inline-flex items-center rounded-full border border-border/90 bg-surface-alt/80 p-0.5 text-[11px] font-bold shadow-2xs"
            role="group"
            aria-label="Language selection"
          >
            <button
              onClick={() => setLanguage("en")}
              className={`rounded-full px-2.5 py-1 transition-all duration-200 cursor-pointer ${
                language === "en"
                  ? "bg-primary text-white shadow-2xs font-bold"
                  : "text-text-muted hover:text-text"
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("it")}
              className={`rounded-full px-2.5 py-1 transition-all duration-200 cursor-pointer ${
                language === "it"
                  ? "bg-primary text-white shadow-2xs font-bold"
                  : "text-text-muted hover:text-text"
              }`}
              aria-label="Passa all'italiano"
            >
              IT
            </button>
          </div>

          {/* Contact Consultation CTA Button */}
          <a
            href="#contact"
            onClick={() => {
              if (currentPage !== "home") onNavigateHome();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-primary-hover hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
          >
            {t.nav.ctaContact}
          </a>
        </div>

        {/* Mobile Controls (Compact Language Switcher + Hamburger) */}
        <div className="flex items-center gap-3 lg:hidden">
          <div className="inline-flex items-center rounded-full border border-border bg-surface-alt p-0.5 text-[11px] font-bold">
            <button
              onClick={() => setLanguage("en")}
              className={`rounded-full px-2 py-0.5 transition-all ${
                language === "en" ? "bg-primary text-white font-bold" : "text-text-muted"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("it")}
              className={`rounded-full px-2 py-0.5 transition-all ${
                language === "it" ? "bg-primary text-white font-bold" : "text-text-muted"
              }`}
            >
              IT
            </button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {open && (
        <div className="border-b border-border bg-surface px-6 py-6 shadow-xl lg:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-4">
            <button
              onClick={() => {
                onNavigateHome();
                setOpen(false);
              }}
              className="py-1.5 text-left text-sm font-semibold text-text-secondary hover:text-primary cursor-pointer"
            >
              {t.nav.home}
            </button>

            <a
              href="#expertise"
              onClick={() => {
                if (currentPage !== "home") onNavigateHome();
                setOpen(false);
              }}
              className="py-1.5 text-sm font-semibold text-text-secondary hover:text-primary cursor-pointer"
            >
              {t.nav.expertise}
            </a>

            <a
              href="#heritage"
              onClick={() => {
                if (currentPage !== "home") onNavigateHome();
                setOpen(false);
              }}
              className="py-1.5 text-sm font-semibold text-text-secondary hover:text-primary cursor-pointer"
            >
              {t.nav.heritage}
            </a>

            <button
              onClick={() => {
                onNavigateDossier();
                setOpen(false);
              }}
              className="py-1.5 text-left text-sm font-semibold text-primary cursor-pointer"
            >
              {t.nav.dossier}
            </button>

            <div className="pt-4 border-t border-border">
              <a
                href="#contact"
                onClick={() => {
                  if (currentPage !== "home") onNavigateHome();
                  setOpen(false);
                }}
                className="flex items-center justify-center rounded-full bg-primary py-3 text-xs font-semibold uppercase tracking-wider text-white hover:bg-primary-hover shadow-sm"
              >
                {t.nav.ctaContact}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}