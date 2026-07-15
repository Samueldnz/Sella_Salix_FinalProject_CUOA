import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const navigation = [
  {
    title: "Navigation",
    links: [
      { label: "Home", href: "#" },
      { label: "About", href: "#about" },
      { label: "Expertise", href: "#expertise" },
      { label: "Technology", href: "#technology" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[2fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-md">
            <img
              src="/logo.svg"
              alt="Nexofarm"
              className="h-14 w-auto"
            />

            <p className="mt-8 text-lg leading-8 text-text-secondary">
              High-Tech Biotechnology focused on transforming
              scientific knowledge into innovative solutions for
              biotechnology and cosmetic industries.
            </p>

            <div className="mt-8 flex gap-3">
              <a
                href="#"
                className="
                  flex h-11 w-11 items-center justify-center
                  rounded-full border border-border bg-white
                  transition hover:border-primary hover:text-primary
                "
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="#"
                className="
                  flex h-11 w-11 items-center justify-center
                  rounded-full border border-border bg-white
                  transition hover:border-primary hover:text-primary
                "
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Navigation
            </h3>

            <ul className="mt-8 space-y-4">
              {navigation[0].links.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="
                      text-text-secondary
                      transition
                      hover:text-primary
                    "
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Contact
            </h3>

            <div className="mt-8 space-y-5">
              <a
                href="mailto:contact@nexofarm.com"
                className="flex items-start gap-3 text-text-secondary transition hover:text-primary"
              >
                <Mail size={18} className="mt-1 shrink-0" />
                <span>contact@nexofarm.com</span>
              </a>

              <a
                href="tel:+41000000000"
                className="flex items-start gap-3 text-text-secondary transition hover:text-primary"
              >
                <Phone size={18} className="mt-1 shrink-0" />
                <span>+41 00 000 0000</span>
              </a>

              <div className="flex items-start gap-3 text-text-secondary">
                <MapPin size={18} className="mt-1 shrink-0" />
                <span>Switzerland</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-border pt-8 text-sm text-text-secondary md:flex-row">
          <p>© 2026 Nexofarm. All rights reserved.</p>

          <div className="flex items-center gap-8">
            <a
              href="#"
              className="transition hover:text-primary"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition hover:text-primary"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}