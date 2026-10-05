import { useState, useEffect } from "react";
import { Cookie, Settings2, ShieldCheck, X } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

interface CookieBannerProps {
  forceOpen?: boolean;
  onCloseForceOpen?: () => void;
  onOpenCookiePolicy?: () => void;
}

export interface CookiePreferences {
  technical: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

const STORAGE_KEY = "nexofarm_cookie_consent_v1";

export function CookieBanner({ forceOpen, onCloseForceOpen, onOpenCookiePolicy }: CookieBannerProps) {
  const { t } = useLanguage();
  const [internalVisible, setInternalVisible] = useState(false);
  const [internalPreferences, setInternalPreferences] = useState(false);

  const [preferences, setPreferences] = useState<CookiePreferences>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          // ignore error
        }
      }
    }
    return {
      technical: true,
      analytics: false,
      marketing: false,
      timestamp: "",
    };
  });

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      const timer = setTimeout(() => setInternalVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const isVisible = forceOpen || internalVisible;
  const showPreferences = forceOpen || internalPreferences;

  const saveAndClose = (prefs: CookiePreferences) => {
    const updated = { ...prefs, timestamp: new Date().toISOString() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setPreferences(updated);
    setInternalVisible(false);
    setInternalPreferences(false);
    if (onCloseForceOpen) onCloseForceOpen();
  };

  const handleAcceptAll = () => {
    saveAndClose({
      technical: true,
      analytics: true,
      marketing: true,
      timestamp: "",
    });
  };

  const handleRejectNonEssential = () => {
    saveAndClose({
      technical: true,
      analytics: false,
      marketing: false,
      timestamp: "",
    });
  };

  const handleSaveCustom = () => {
    saveAndClose(preferences);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6 animate-in slide-in-from-bottom duration-300">
      <div className="mx-auto max-w-5xl rounded-3xl border border-border bg-surface/98 p-6 sm:p-8 shadow-2xl backdrop-blur-md">
        {!showPreferences ? (
          /* Main Consent Banner */
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Cookie size={24} />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-serif text-lg font-medium text-text">
                  {t.cookieBanner.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-text-secondary max-w-3xl">
                  {t.cookieBanner.description}{" "}
                  {onOpenCookiePolicy && (
                    <button
                      type="button"
                      onClick={onOpenCookiePolicy}
                      className="font-medium text-primary underline underline-offset-2 hover:text-accent cursor-pointer"
                    >
                      {t.footer.cookiePolicy}
                    </button>
                  )}
                </p>
              </div>
            </div>

            {/* Equal Visual Weight Action Buttons (Garante Privacy Compliant) */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={handleRejectNonEssential}
                className="w-full sm:w-auto rounded-full border border-border-strong bg-background px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-text transition-all hover:border-accent hover:text-accent cursor-pointer"
              >
                {t.cookieBanner.rejectNonEssential}
              </button>

              <button
                type="button"
                onClick={() => setInternalPreferences(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-full border border-border-strong bg-background px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-text-secondary transition-all hover:text-primary hover:border-primary cursor-pointer"
              >
                <Settings2 size={14} />
                <span>{t.cookieBanner.customize}</span>
              </button>

              <button
                type="button"
                onClick={handleAcceptAll}
                className="w-full sm:w-auto rounded-full bg-primary px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-xs transition-all hover:bg-primary-hover hover:shadow-md cursor-pointer"
              >
                {t.cookieBanner.acceptAll}
              </button>
            </div>
          </div>
        ) : (
          /* Granular Preferences Modal Center */
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div className="flex items-center gap-2.5">
                <ShieldCheck size={20} className="text-primary" />
                <h3 className="font-serif text-xl font-medium text-text">
                  {t.cookieBanner.customize}
                </h3>
              </div>
              <button
                onClick={() => {
                  setInternalPreferences(false);
                  if (onCloseForceOpen) onCloseForceOpen();
                }}
                className="rounded-full p-1.5 text-text-secondary hover:bg-surface-secondary hover:text-text"
              >
                <X size={18} />
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {/* Technical / Essential (Locked) */}
              <div className="rounded-2xl border border-border bg-background p-4.5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-text">
                    {t.cookieBanner.technicalTitle}
                  </span>
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold text-primary">
                    {t.cookieBanner.technicalAlways}
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-text-secondary">
                  {t.cookieBanner.technicalDesc}
                </p>
              </div>

              {/* Analytical (Toggleable) */}
              <div className="rounded-2xl border border-border bg-background p-4.5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-text">
                    {t.cookieBanner.analyticsTitle}
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) =>
                        setPreferences({ ...preferences, analytics: e.target.checked })
                      }
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                <p className="text-xs leading-relaxed text-text-secondary">
                  {t.cookieBanner.analyticsDesc}
                </p>
              </div>

              {/* Marketing (Toggleable) */}
              <div className="rounded-2xl border border-border bg-background p-4.5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-text">
                    {t.cookieBanner.marketingTitle}
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) =>
                        setPreferences({ ...preferences, marketing: e.target.checked })
                      }
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                <p className="text-xs leading-relaxed text-text-secondary">
                  {t.cookieBanner.marketingDesc}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <p className="text-[11px] text-text-muted">
                Linee Guida Garante Privacy 10 giugno 2021 · Regolamento UE 2016/679 (GDPR)
              </p>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleRejectNonEssential}
                  className="flex-1 sm:flex-none rounded-full border border-border px-5 py-2 text-xs font-semibold uppercase tracking-wider text-text hover:border-accent hover:text-accent"
                >
                  {t.cookieBanner.rejectNonEssential}
                </button>
                <button
                  type="button"
                  onClick={handleSaveCustom}
                  className="flex-1 sm:flex-none rounded-full bg-primary px-6 py-2 text-xs font-semibold uppercase tracking-wider text-white hover:bg-primary-hover shadow-xs"
                >
                  {t.cookieBanner.savePreferences}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
