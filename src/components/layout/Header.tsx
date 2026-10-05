import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/80 bg-surface/90 shadow-sm backdrop-blur-md"
          : "bg-surface/50 backdrop-blur-xs"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Brand Logo & Synergy Subtitle */}
        <a href="#" className="group flex items-center gap-3.5 focus:outline-none">
          <img
            src="/logo.svg"
            alt="Nexofarm Logo"
            className="h-11 w-auto transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-roman text-xl font-bold tracking-wider text-primary">
              NEXOFARM
            </span>
            <span className="text-[10px] uppercase tracking-[0.24em] text-text-secondary font-medium">
              Sella & Salix Synergy · Vicenza
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-semibold uppercase tracking-wider text-text-secondary transition-colors duration-200 hover:text-accent cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions: Language Toggle & CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          {/* Bilingual Switcher */}
          <div
            className="inline-flex items-center rounded-full border border-border bg-surface-secondary/80 p-1 text-xs font-semibold shadow-2xs"
            role="group"
            aria-label="Language selection"
          >
            <button
              onClick={() => setLanguage("en")}
              className={`rounded-full px-2.5 py-1 transition-all duration-200 ${
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
              className={`rounded-full px-2.5 py-1 transition-all duration-200 ${
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
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-primary-hover hover:shadow-md"
          >
            <span>{t.nav.ctaContact}</span>
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Mobile Controls (Language Switcher + Hamburger) */}
        <div className="flex items-center gap-3 lg:hidden">
          {/* Quick Language Toggle on Mobile */}
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
          <nav className="flex flex-col space-y-3.5">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-1.5 text-sm font-medium text-text-secondary transition-colors hover:text-accent"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-border">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-primary py-3 text-xs font-semibold uppercase tracking-wider text-white hover:bg-primary-hover shadow-sm"
              >
                <span>{t.nav.ctaContact}</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}