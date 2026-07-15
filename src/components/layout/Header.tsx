import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  { label: "Home", href: "#" },
  { label: "Expertise", href: "#expertise" },
  { label: "Technology", href: "#technology" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50
        transition-all duration-300
        ${
          scrolled
            ? "border-b border-border bg-white/80 shadow-sm backdrop-blur-xl"
            : "bg-transparent"
        }
      `}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-3"
        >
          <img
            src="logo.svg"
            alt="Nexofarm"
            className="h-15 w-auto"
          />

          <div className="hidden md:block">
            <p className="text-xl font-light tracking-wide text-primary">
              NEXOFARM
            </p>

            <p className="text-xs uppercase tracking-[0.28em] text-text-secondary">
              High-Tech Biotechnology
            </p>
          </div>
        </a>

        {/* Desktop */}
        <nav className="hidden items-center gap-10 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="
                text-sm
                font-medium
                text-text-secondary
                transition-colors
                hover:text-primary
              "
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <button
            className="
              rounded-full
              bg-primary
              px-6
              py-3
              text-sm
              font-medium
              text-white
              transition-all
              hover:bg-primary-hover
            "
          >
            Contact Us
          </button>
        </div>

        {/* Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
          aria-label="Toggle Menu"
        >
          {open ? (
            <X className="h-6 w-6 text-primary" />
          ) : (
            <Menu className="h-6 w-6 text-primary" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}

      {open && (
        <div className="border-t border-border bg-white lg:hidden">
          <nav className="flex flex-col p-6">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="py-4 text-text-secondary transition hover:text-primary"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <button className="mt-6 rounded-full bg-primary py-3 text-white">
              Contact Us
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}