import { useEffect } from "react";
import { X, Printer, Shield, Cookie, FileText } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { legalDocuments } from "../../translations/legalContent";

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div
        className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col rounded-3xl border border-border bg-surface shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-title"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-border bg-background px-6 py-4.5 sm:px-8">
          <div className="flex items-center gap-2">
            <span className="font-roman text-sm font-bold tracking-wider text-primary">
              NEXOFARM
            </span>
            <span className="text-border-strong">•</span>
            <span className="text-xs uppercase tracking-wider text-text-secondary font-medium">
              Legal Compliance Center
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="rounded-full p-2 text-text-secondary hover:bg-surface-secondary hover:text-primary transition-colors"
              title="Print Document"
              aria-label="Print Document"
            >
              <Printer size={18} />
            </button>
            <button
              onClick={onClose}
              className="rounded-full p-2 text-text-secondary hover:bg-surface-secondary hover:text-accent transition-colors"
              aria-label={t.legal.close}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-border bg-surface px-6 sm:px-8 overflow-x-auto">
          <button
            onClick={() => onSelectDoc("privacy")}
            className={`flex items-center gap-2 border-b-2 py-3 px-3 text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
              activeDoc === "privacy"
                ? "border-primary text-primary"
                : "border-transparent text-text-secondary hover:text-text"
            }`}
          >
            <Shield size={15} />
            <span>{t.footer.privacyPolicy}</span>
          </button>

          <button
            onClick={() => onSelectDoc("cookies")}
            className={`flex items-center gap-2 border-b-2 py-3 px-3 text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
              activeDoc === "cookies"
                ? "border-primary text-primary"
                : "border-transparent text-text-secondary hover:text-text"
            }`}
          >
            <Cookie size={15} />
            <span>{t.footer.cookiePolicy}</span>
          </button>

          <button
            onClick={() => onSelectDoc("terms")}
            className={`flex items-center gap-2 border-b-2 py-3 px-3 text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
              activeDoc === "terms"
                ? "border-primary text-primary"
                : "border-transparent text-text-secondary hover:text-text"
            }`}
          >
            <FileText size={15} />
            <span>{t.footer.termsOfUse}</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto px-6 py-8 sm:px-10 space-y-8 text-text">
          <div>
            <h2 id="legal-title" className="font-serif text-3xl sm:text-4xl font-normal text-text">
              {doc.title}
            </h2>
            <p className="mt-2 text-sm text-text-secondary italic">
              {doc.subtitle}
            </p>
            <div className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-accent">
              {t.legal.lastUpdated}
            </div>
          </div>

          <div className="space-y-7 border-t border-border pt-6">
            {doc.sections.map((section, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="font-serif text-xl font-medium text-text">
                  {section.heading}
                </h3>
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-sm leading-relaxed text-text-secondary">
                    {p}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="space-y-2 pl-2 pt-1">
                    {section.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between border-t border-border bg-background px-6 py-4 sm:px-8">
          <p className="text-xs text-text-muted">
            Nexofarm S.r.l. · Schio & Monte di Malo (Vicenza, Italy)
          </p>
          <button
            onClick={onClose}
            className="rounded-full bg-primary px-6 py-2 text-xs font-semibold uppercase tracking-wider text-white hover:bg-primary-hover transition-colors"
          >
            {t.legal.close}
          </button>
        </div>
      </div>
    </div>
  );
}
