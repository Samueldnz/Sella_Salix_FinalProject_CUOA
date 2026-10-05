import { useState } from "react";
import type { FormEvent } from "react";
import {
  Building,
  CheckCircle2,
  Factory,
  GraduationCap,
  Mail,
  Phone,
  Send,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

interface ContactProps {
  onOpenPrivacy?: () => void;
}

export function Contact({ onOpenPrivacy }: ContactProps) {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    interest: "",
    message: "",
    consent: false,
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message || !formData.consent) {
      setStatus("error");
      setErrorMessage(t.contact.form.errorRequired);
      return;
    }

    setStatus("submitting");

    // Simulate reliable API submission
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        company: "",
        email: "",
        interest: "",
        message: "",
        consent: false,
      });
    }, 1000);
  };

  return (
    <section id="contact" className="bg-surface py-28 border-b border-border">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:px-8">
        {/* Left Column: Localized Corporate Information */}
        <div className="lg:col-span-5">
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            {t.contact.eyebrow}
          </span>

          <h2 className="mt-5 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.15] text-text">
            {t.contact.title}
          </h2>

          <p className="mt-6 text-base sm:text-lg leading-relaxed text-text-secondary">
            {t.contact.subtitle}
          </p>

          <div className="mt-10 space-y-6">
            {/* Sella Pharma Facility */}
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-background p-4.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Building size={20} />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-accent">
                  {t.contact.info.r_and_d}
                </p>
                <p className="mt-1 text-sm font-medium text-text">
                  {t.contact.info.r_and_d_val}
                </p>
              </div>
            </div>

            {/* Salix Industrial CDMO Plant */}
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-background p-4.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Factory size={20} />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                  {t.contact.info.plant}
                </p>
                <p className="mt-1 text-sm font-medium text-text">
                  {t.contact.info.plant_val}
                </p>
              </div>
            </div>

            {/* Academic Roots CUOA */}
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-background p-4.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold-hover">
                <GraduationCap size={20} />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-gold-hover">
                  {t.contact.info.academic}
                </p>
                <p className="mt-1 text-sm font-medium text-text">
                  {t.contact.info.academic_val}
                </p>
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <a
                href="mailto:contact@nexofarm.com"
                className="flex items-center gap-3 rounded-xl border border-border bg-background p-4 transition-colors hover:border-primary/40"
              >
                <Mail size={18} className="text-primary" />
                <span className="text-xs font-semibold text-text">contact@nexofarm.com</span>
              </a>

              <a
                href="tel:+390445670088"
                className="flex items-center gap-3 rounded-xl border border-border bg-background p-4 transition-colors hover:border-primary/40"
              >
                <Phone size={18} className="text-primary" />
                <span className="text-xs font-semibold text-text">+39 0445 670088</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Consultation Request Form */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-border bg-background p-8 sm:p-10 shadow-sm">
            {status === "success" ? (
              <div className="py-12 text-center animate-in fade-in duration-300">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="mt-6 font-serif text-2xl sm:text-3xl font-medium text-text">
                  {t.contact.form.successTitle}
                </h3>
                <p className="mx-auto mt-4 max-w-md text-sm text-text-secondary leading-relaxed">
                  {t.contact.form.successDesc}
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-8 rounded-full bg-primary px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-primary-hover"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-text">
                      {t.contact.form.name} *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.contact.form.namePlaceholder}
                      className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-text">
                      {t.contact.form.company}
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder={t.contact.form.companyPlaceholder}
                      className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-text">
                      {t.contact.form.email} *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.contact.form.emailPlaceholder}
                      className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                    />
                  </div>

                  <div>
                    <label htmlFor="interest" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-text">
                      {t.contact.form.interest}
                    </label>
                    <select
                      id="interest"
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                    >
                      <option value="">{t.contact.form.interestOptions.placeholder}</option>
                      <option value="biotech">{t.contact.form.interestOptions.biotech}</option>
                      <option value="dermo">{t.contact.form.interestOptions.dermo}</option>
                      <option value="nutra">{t.contact.form.interestOptions.nutra}</option>
                      <option value="galenic">{t.contact.form.interestOptions.galenic}</option>
                      <option value="cdmo">{t.contact.form.interestOptions.cdmo}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-text">
                    {t.contact.form.message} *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.contact.form.messagePlaceholder}
                    className="w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                  />
                </div>

                {/* Explicit GDPR Consent Checkbox */}
                <div className="flex items-start gap-3 pt-2">
                  <input
                    id="consent"
                    type="checkbox"
                    required
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
                  />
                  <label htmlFor="consent" className="text-xs text-text-secondary leading-relaxed">
                    {t.contact.form.privacyConsent}{" "}
                    {onOpenPrivacy && (
                      <button
                        type="button"
                        onClick={onOpenPrivacy}
                        className="font-semibold text-primary underline underline-offset-2 hover:text-accent cursor-pointer"
                      >
                        {t.contact.form.privacyLink}
                      </button>
                    )}
                  </label>
                </div>

                {status === "error" && (
                  <p className="text-xs font-medium text-accent">{errorMessage}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-primary px-8 py-4 text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition-all duration-300 hover:bg-primary-hover hover:shadow-md disabled:opacity-60 cursor-pointer"
                >
                  <Send size={15} />
                  <span>{status === "submitting" ? t.contact.form.sending : t.contact.form.send}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}