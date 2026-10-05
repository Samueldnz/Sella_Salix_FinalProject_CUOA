import React from "react";

interface LogoProps {
  className?: string;
  variant?: "full" | "symbol" | "horizontal" | "monochrome";
  theme?: "light" | "dark";
  size?: "sm" | "md" | "lg" | "xl";
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  variant = "horizontal",
  theme = "light",
  size = "md",
}) => {
  const isDark = theme === "dark";
  const primaryColor = isDark ? "#ffffff" : "#0D5B56";
  const goldColor = "#C5A059";
  const textMuted = isDark ? "rgba(255,255,255,0.7)" : "#6B6760";

  const sizeClasses = {
    sm: "h-8",
    md: "h-11",
    lg: "h-14",
    xl: "h-20",
  }[size];

  // Standalone Crest Symbol
  if (variant === "symbol") {
    return (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeClasses} w-auto ${className}`}
        aria-label="Nexofarm Emblem"
      >
        {/* Outer Circular Ring with Roman ticks */}
        <circle cx="50" cy="50" r="46" stroke={primaryColor} strokeWidth="2.5" />
        <circle cx="50" cy="50" r="42" stroke={goldColor} strokeWidth="1" strokeDasharray="3 3" opacity="0.8" />
        <circle cx="50" cy="50" r="38" stroke={primaryColor} strokeWidth="1" opacity="0.3" />

        {/* Central Geometric Botanical Monogram: N + Willow Helix */}
        {/* Left vertical stem of N */}
        <path
          d="M34 28V72"
          stroke={primaryColor}
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* Serif accents on left stem */}
        <path d="M30 28H38" stroke={primaryColor} strokeWidth="2" strokeLinecap="round" />
        <path d="M30 72H38" stroke={primaryColor} strokeWidth="2" strokeLinecap="round" />

        {/* Diagonal bridge of N morphed into a botanical double helix (Salix) */}
        <path
          d="M34 30L66 70"
          stroke={goldColor}
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Right vertical stem of N */}
        <path
          d="M66 28V72"
          stroke={primaryColor}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path d="M62 28H70" stroke={primaryColor} strokeWidth="2" strokeLinecap="round" />
        <path d="M62 72H70" stroke={primaryColor} strokeWidth="2" strokeLinecap="round" />

        {/* Central Galenic Cross & Diamond Star Accent (Sella) */}
        <circle cx="50" cy="50" r="4" fill={goldColor} />
        <path d="M50 42V58M42 50H58" stroke={goldColor} strokeWidth="1.5" strokeLinecap="round" />

        {/* Micro Est. 1920 & 1998 Stars */}
        <polygon points="50,14 51.5,17.5 55,18 52.5,20.5 53,24 50,22 47,24 47.5,20.5 45,18 48.5,17.5" fill={goldColor} />
        <polygon points="50,86 51.5,82.5 55,82 52.5,79.5 53,76 50,78 47,76 47.5,79.5 45,82 48.5,82.5" fill={goldColor} />
      </svg>
    );
  }

  // Horizontal Header Variant (Clean, Prestigious, Balanced)
  return (
    <div className={`inline-flex items-center gap-3.5 ${className}`}>
      {/* Refined Crest Icon */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeClasses} aspect-square shrink-0`}
        aria-hidden="true"
      >
        <circle cx="50" cy="50" r="46" stroke={primaryColor} strokeWidth="2.5" />
        <circle cx="50" cy="50" r="42" stroke={goldColor} strokeWidth="1" strokeDasharray="3 3" opacity="0.8" />
        <circle cx="50" cy="50" r="38" stroke={primaryColor} strokeWidth="0.8" opacity="0.3" />

        {/* N Monogram */}
        <path d="M34 28V72" stroke={primaryColor} strokeWidth="3.5" strokeLinecap="round" />
        <path d="M30 28H38M30 72H38" stroke={primaryColor} strokeWidth="1.8" strokeLinecap="round" />
        <path d="M34 30L66 70" stroke={goldColor} strokeWidth="3" strokeLinecap="round" />
        <path d="M66 28V72" stroke={primaryColor} strokeWidth="3.5" strokeLinecap="round" />
        <path d="M62 28H70M62 72H70" stroke={primaryColor} strokeWidth="1.8" strokeLinecap="round" />

        {/* Center Star */}
        <circle cx="50" cy="50" r="3.5" fill={goldColor} />
        <polygon points="50,13 51.5,16.5 55,17 52.5,19.5 53,23 50,21 47,23 47.5,19.5 45,17 48.5,16.5" fill={goldColor} />
        <polygon points="50,87 51.5,83.5 55,83 52.5,80.5 53,77 50,79 47,77 47.5,80.5 45,83 48.5,83.5" fill={goldColor} />
      </svg>

      {/* Typographic Block */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-2">
          <span
            className="font-roman text-xl sm:text-2xl font-bold tracking-[0.14em]"
            style={{ color: primaryColor }}
          >
            NEXOFARM
          </span>
          <span
            className="hidden sm:inline-block h-3.5 w-px"
            style={{ backgroundColor: goldColor }}
          />
          <span
            className="hidden sm:inline-block text-[9px] font-semibold uppercase tracking-[0.25em]"
            style={{ color: goldColor }}
          >
            CDMO
          </span>
        </div>
        <span
          className="text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.22em] transition-colors"
          style={{ color: textMuted }}
        >
          Sella & Salix Synergy · Vicenza
        </span>
      </div>
    </div>
  );
};
