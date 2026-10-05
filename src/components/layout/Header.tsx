import { useEffect, useState } from "react";
import { Menu, X, ArrowRight, FileText } from "lucide-react";
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
          ? "border-b border-border/80 bg-surface/92 shadow-sm backdrop-blur-md"
          : "bg-surface/60 backdrop-blur-xs"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Brand Logo & Synergy Subtitle */}
        <button
          onClick={onNavigateHome}
          className="group flex items-center text-left focus:outline-none cursor-pointer"
          aria-label="Nexofarm - Back to Overview"
        >
          <Logo variant="horizontal" size="md" />
        </button>

        {/* Streamlined Desktop Navigation Links (Only 4 core destinations) */}
        <nav className="hidden items-center gap-8 lg:flex">
          <button
            onClick={onNavigateHome}
            className={`text-xs font-semibold uppercase tracking-widest transition-colors duration-200 cursor-pointer ${
              currentPage === "home"
                ? "text-primary border-b-2 border-primary pb-0.5"
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
            className={`inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest transition-colors duration-200 cursor-pointer ${
              currentPage === "dossier"
                ? "text-primary border-b-2 border-primary pb-0.5"
                : "text-text-secondary hover:text-accent"
            }`}
          >
            <FileText size={14} className="text-gold-hover" />
            <span>{t.nav.dossier}</span>
          </button>
        </nav>

        {/* Desktop Actions: Language Toggle & Contact Consultation */}
        <div className="hidden items-center gap-4 lg:flex">
          {/* Bilingual Switcher */}
          <div
            className="inline-flex items-center rounded-full border border-border bg-surface-secondary/80 p-1 text-xs font-semibold shadow-2xs"
            role="group"
            aria-label="Language selection"
          >
            <button
              onClick={() => setLanguage("en")}
              className={`rounded-full px-2.5 py-1 transition-all duration-200 cursor-pointer ${
                language === "en"
                  ? "bg-primary text-white shadow-xs font-bold"
                  : "text-text-secondary hover:text-primary"
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
            <span className="text-border-strong px-0.5">•</span>
            <button
              onClick={() => setLanguage("it")}
              className={`rounded-full px-2.5 py-1 transition-all duration-200 cursor-pointer ${
                language === "it"
                  ? "bg-primary text-white shadow-xs font-bold"
                  : "text-text-secondary hover:text-primary"
              }`}
              aria-label="Passa all'italiano"
            >
              IT
            </button>
          </div>

          {/* Contact Consultation CTA */}
          <a
            href="#contact"
            onClick={() => {
              if (currentPage !== "home") onNavigateHome();
            }}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-primary-hover hover:shadow-md cursor-pointer"
          >
            <span>{t.nav.contact}</span>
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Mobile Controls (Language Switcher + Hamburger) */}
        <div className="flex items-center gap-3 lg:hidden">
          <div className="inline-flex items-center rounded-full border border-border bg-surface-secondary p-0.5 text-xs font-semibold">
            <button
              onClick={() => setLanguage("en")}
              className={`rounded-full px-2 py-0.5 ${
                language === "en" ? "bg-primary text-white" : "text-text-secondary"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("it")}
              className={`rounded-full px-2 py-0.5 ${
                language === "it" ? "bg-primary text-white" : "text-text-secondary"
              }`}
            >
              IT
            </button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
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
              className="py-1.5 text-left text-sm font-medium text-text-secondary hover:text-primary"
            >
              {t.nav.home}
            </button>

            <a
              href="#expertise"
              onClick={() => {
                if (currentPage !== "home") onNavigateHome();
                setOpen(false);
              }}
              className="py-1.5 text-sm font-medium text-text-secondary hover:text-primary"
            >
              {t.nav.expertise}
            </a>

            <a
              href="#heritage"
              onClick={() => {
                if (currentPage !== "home") onNavigateHome();
                setOpen(false);
              }}
              className="py-1.5 text-sm font-medium text-text-secondary hover:text-primary"
            >
              {t.nav.heritage}
            </a>

            <button
              onClick={() => {
                onNavigateDossier();
                setOpen(false);
              }}
              className="flex items-center gap-2 py-1.5 text-left text-sm font-semibold text-primary"
            >
              <FileText size={16} className="text-gold-hover" />
              <span>{t.nav.dossier}</span>
            </button>

            <div className="pt-4 border-t border-border">
              <a
                href="#contact"
                onClick={() => {
                  if (currentPage !== "home") onNavigateHome();
                  setOpen(false);
                }}
                className="flex items-center justify-center gap-2 rounded-full bg-primary py-3 text-xs font-semibold uppercase tracking-wider text-white hover:bg-primary-hover shadow-sm"
              >
                <span>{t.nav.contact}</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}