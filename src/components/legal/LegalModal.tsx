import { useEffect } from "react";
import { X, Printer, Shield, Cookie, FileText, ArrowRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { legalDocuments } from "../../translations/legalContent";
import { Logo } from "../brand/Logo";

export type LegalDocType = "privacy" | "cookies" | "terms";

interface LegalModalProps {
  isOpen: boolean;
  activeDoc: LegalDocType;
  onClose: () => void;
  onSelectDoc: (doc: LegalDocType) => void;
}

export function LegalModal({ isOpen, activeDoc, onClose, onSelectDoc }: LegalModalProps) {
  const { language, t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const doc = legalDocuments[language][activeDoc];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
      {/* Dimmed Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 animate-in fade-in"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 flex max-w-full pl-6 sm:pl-10">
        {/* Slide-Over Off-Canvas Reading Drawer */}
        <div className="w-screen max-w-4xl sm:max-w-5xl bg-surface shadow-2xl border-l border-border flex flex-col md:flex-row overflow-hidden animate-in slide-in-from-right duration-300">
          {/* Left Navigation Sidebar (Desktop) */}
          <aside className="w-full md:w-80 shrink-0 border-b md:border-b-0 md:border-r border-border bg-background p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
            <div>
              {/* Brand Header */}
              <div className="flex items-center justify-between pb-6 border-b border-border/80">
                <Logo variant="horizontal" size="sm" />
                <button
                  onClick={onClose}
                  className="rounded-full p-2 text-text-secondary hover:bg-surface hover:text-accent transition-colors md:hidden"
                  aria-label={t.legal.close}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Document Selector Pills */}
              <div className="mt-8 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted block mb-3">
                  Document Register
                </span>

                <button
                  onClick={() => onSelectDoc("privacy")}
                  className={`w-full flex items-center justify-between rounded-2xl p-3.5 text-xs font-semibold tracking-wider transition-all text-left cursor-pointer ${
                    activeDoc === "privacy"
                      ? "bg-primary text-white shadow-xs"
                      : "bg-surface border border-border text-text hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <Shield size={16} />
                    <span>{t.footer.privacyPolicy}</span>
                  </span>
                  <ArrowRight size={14} className={activeDoc === "privacy" ? "opacity-100" : "opacity-0"} />
                </button>

                <button
                  onClick={() => onSelectDoc("cookies")}
                  className={`w-full flex items-center justify-between rounded-2xl p-3.5 text-xs font-semibold tracking-wider transition-all text-left cursor-pointer ${
                    activeDoc === "cookies"
                      ? "bg-primary text-white shadow-xs"
                      : "bg-surface border border-border text-text hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <Cookie size={16} />
                    <span>{t.footer.cookiePolicy}</span>
                  </span>
                  <ArrowRight size={14} className={activeDoc === "cookies" ? "opacity-100" : "opacity-0"} />
                </button>

                <button
                  onClick={() => onSelectDoc("terms")}
                  className={`w-full flex items-center justify-between rounded-2xl p-3.5 text-xs font-semibold tracking-wider transition-all text-left cursor-pointer ${
                    activeDoc === "terms"
                      ? "bg-primary text-white shadow-xs"
                      : "bg-surface border border-border text-text hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <FileText size={16} />
                    <span>{t.footer.termsOfUse}</span>
                  </span>
                  <ArrowRight size={14} className={activeDoc === "terms" ? "opacity-100" : "opacity-0"} />
                </button>
              </div>

              {/* Table of Contents for Current Document */}
              <div className="mt-8 pt-6 border-t border-border/80 hidden md:block">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted block mb-3">
                  Articles in View
                </span>
                <ul className="space-y-2 text-xs text-text-secondary">
                  {doc.sections.map((sec, sIdx) => (
                    <li key={sIdx} className="line-clamp-1 hover:text-primary transition-colors">
                      {sec.heading}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar Bottom Controls */}
            <div className="pt-6 border-t border-border/80 hidden md:flex items-center justify-between">
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-text-secondary hover:text-primary transition-colors cursor-pointer"
              >
                <Printer size={15} />
                <span>Print Dossier</span>
              </button>

              <button
                onClick={onClose}
                className="rounded-full bg-surface border border-border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-text hover:bg-accent hover:text-white hover:border-accent transition-all cursor-pointer"
              >
                {t.legal.close}
              </button>
            </div>
          </aside>

          {/* Right Main Reading Pane */}
          <main className="flex-1 overflow-y-auto p-6 sm:p-10 lg:p-12 space-y-8 bg-surface">
            {/* Top Bar with Close button */}
            <div className="flex items-center justify-between pb-6 border-b border-border">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                  Official Legal Archive · Foro di Vicenza
                </span>
                <p className="text-xs text-text-muted mt-0.5">
                  Regolamento UE 2016/679 (GDPR) & Garante Privacy
                </p>
              </div>

              <button
                onClick={onClose}
                className="hidden md:flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-text-secondary hover:bg-accent hover:text-white hover:border-accent transition-all cursor-pointer"
                aria-label={t.legal.close}
              >
                <X size={18} />
              </button>
            </div>

            {/* Document Header */}
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-text tracking-tight">
                {doc.title}
              </h1>
              <p className="mt-3 text-sm sm:text-base text-text-secondary italic leading-relaxed">
                {doc.subtitle}
              </p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary/5 border border-primary/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
                {t.legal.lastUpdated}
              </div>
            </div>

            {/* Document Sections */}
            <div className="space-y-8 border-t border-border pt-8">
              {doc.sections.map((section, idx) => (
                <section key={idx} className="space-y-3.5">
                  <h2 className="font-serif text-xl sm:text-2xl font-medium text-text">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-sm leading-relaxed text-text-secondary">
                      {p}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="space-y-2.5 pl-2 pt-1">
                      {section.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-text-secondary leading-relaxed">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            {/* Corporate Attribution Bottom Box */}
            <div className="rounded-2xl border border-border bg-background p-6 space-y-2 mt-12">
              <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted">
                Corporate Domicile & Legal Governance
              </span>
              <p className="text-xs text-text-secondary leading-relaxed">
                Laboratorio Chimico Farmaceutico A. Sella S.r.l. (Via Vicenza 67, 36015 Schio, VI) & Salix S.r.l. (36030 Monte di Malo, VI). Competent Supervisory Authority: Garante per la protezione dei dati personali, Piazza Venezia 11, 00187 Roma, Italia.
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
