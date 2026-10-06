import React from "react";

interface LogoProps {
  className?: string;
  variant?: "full" | "symbol" | "horizontal" | "mark-only";
  theme?: "light" | "dark";
  size?: "sm" | "md" | "lg" | "xl";
  withSubtitle?: boolean;
}

interface EmblemProps {
  dimension?: number;
  withCream?: boolean;
  svgClass?: string;
  strokeColor: string;
  creamLight: string;
  creamShadow: string;
  isDark: boolean;
  theme: "light" | "dark";
}

// Pure Fibonacci Golden Ratio Circular Emblem declared outside render
// Exact geometric realization matching authentic Nexofarm identity (media_1791307447538)
const FibonacciEmblem: React.FC<EmblemProps> = ({
  dimension = 100,
  withCream = true,
  svgClass = "",
  strokeColor,
  creamLight,
  creamShadow,
  isDark,
  theme,
}) => (
  <svg
    viewBox="0 0 100 100"
    width={dimension}
    height={dimension}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={svgClass}
    aria-label="Nexofarm Golden Ratio Fibonacci Emblem"
  >
    <defs>
      {/* Soft Organic Cosmetic Cream Swirl Gradient */}
      <linearGradient
        id={`creamGrad-${theme}-${dimension}`}
        x1="16"
        y1="24"
        x2="48"
        y2="82"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor={creamLight} stopOpacity={isDark ? "0.3" : "0.95"} />
        <stop offset="60%" stopColor={creamLight} stopOpacity={isDark ? "0.2" : "0.85"} />
        <stop offset="100%" stopColor={creamShadow} stopOpacity={isDark ? "0.1" : "0.6"} />
      </linearGradient>
    </defs>

    {/* Outer Boundary Circle */}
    <circle
      cx="50"
      cy="50"
      r="46"
      stroke={strokeColor}
      strokeWidth="3.2"
      className="transition-colors duration-300"
    />

    {/* Left Hemisphere Cosmetic Cream Drop / Organic Swirl */}
    {withCream && (
      <path
        d="M 50 10 C 30 10 12 28 12 50 C 12 72 30 90 50 90 C 42 78 35 65 35 50 C 35 34 42 22 50 10 Z"
        fill={`url(#creamGrad-${theme}-${dimension})`}
        stroke={strokeColor}
        strokeWidth="0.8"
        strokeOpacity="0.25"
      />
    )}

    {/* Center Vertical Axis (Splits Circle from Top to Bottom) */}
    <line
      x1="50"
      y1="4"
      x2="50"
      y2="96"
      stroke={strokeColor}
      strokeWidth="2.8"
      strokeLinecap="round"
    />

    {/* Horizontal Axis in Right Hemisphere (Equator) */}
    <line
      x1="50"
      y1="50"
      x2="96"
      y2="50"
      stroke={strokeColor}
      strokeWidth="2.2"
      strokeLinecap="round"
    />

    {/* Golden Rectangle Subdivisions in Lower-Right Quadrant */}
    {/* 1. Vertical Golden Cut at x=68 */}
    <line
      x1="68"
      y1="50"
      x2="68"
      y2="92"
      stroke={strokeColor}
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* 2. Horizontal Golden Cut at y=74 */}
    <line
      x1="50"
      y1="74"
      x2="68"
      y2="74"
      stroke={strokeColor}
      strokeWidth="1.8"
      strokeLinecap="round"
    />

    {/* 3. Vertical Golden Cut at x=58 */}
    <line
      x1="58"
      y1="50"
      x2="58"
      y2="74"
      stroke={strokeColor}
      strokeWidth="1.5"
      strokeLinecap="round"
    />

    {/* 4. Inner Micro-Cut at y=60 */}
    <line
      x1="58"
      y1="60"
      x2="68"
      y2="60"
      stroke={strokeColor}
      strokeWidth="1.2"
      strokeLinecap="round"
    />

    {/* Authentic Green Fibonacci Logarithmic Spiral - Sweeping downwards inside lower-right quadrant to (96, 50) */}
    <path
      d="M 62 60 A 4 4 0 0 1 68 64 A 10 10 0 0 1 58 74 A 18 18 0 0 1 50 64 A 28 28 0 0 0 68 92 A 44 44 0 0 0 96 50"
      fill="none"
      stroke={strokeColor}
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Logo: React.FC<LogoProps> = ({
  className = "",
  variant = "horizontal",
  theme = "light",
  size = "md",
  withSubtitle = true,
}) => {
  const isDark = theme === "dark";
  const strokeColor = isDark ? "#ffffff" : "#0D5B56";
  const creamLight = isDark ? "rgba(255, 255, 255, 0.22)" : "#FFFFFF";
  const creamShadow = isDark ? "rgba(255, 255, 255, 0.08)" : "#EAE6DC";
  const textMuted = isDark ? "rgba(255,255,255,0.7)" : "#6B6760";
  const accentColor = isDark ? "#E5C378" : "#C5A059";

  const sizeClasses = {
    sm: "h-7",
    md: "h-10",
    lg: "h-13",
    xl: "h-18",
  }[size];

  // Standalone Fibonacci Symbol Variant
  if (variant === "symbol") {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <FibonacciEmblem
          withCream={true}
          svgClass={`${sizeClasses} w-auto aspect-square`}
          strokeColor={strokeColor}
          creamLight={creamLight}
          creamShadow={creamShadow}
          isDark={isDark}
          theme={theme}
        />
      </div>
    );
  }

  // Full / Horizontal Brand Identity (with NEX[O]FARM typographic integration)
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Emblem Crest */}
      <div className="shrink-0 flex items-center justify-center">
        <FibonacciEmblem
          withCream={true}
          svgClass={`${sizeClasses} w-auto aspect-square`}
          strokeColor={strokeColor}
          creamLight={creamLight}
          creamShadow={creamShadow}
          isDark={isDark}
          theme={theme}
        />
      </div>

      {/* Wordmark with integrated Fibonacci 'O' */}
      <div className="flex flex-col justify-center select-none">
        <div className="flex items-center tracking-[0.15em] font-serif font-bold text-lg sm:text-xl lg:text-[1.35rem] leading-none">
          <span style={{ color: strokeColor }} className="tracking-[0.16em]">
            NEX
          </span>

          {/* Inline miniature Fibonacci circle replacing the letter O with exact matching green spiral */}
          <span className="inline-flex items-center justify-center px-[2px]">
            <svg
              viewBox="0 0 100 100"
              className="h-[0.88em] w-[0.88em] aspect-square"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle
                cx="50"
                cy="50"
                r="46"
                stroke={strokeColor}
                strokeWidth="7"
              />
              <line
                x1="50"
                y1="4"
                x2="50"
                y2="96"
                stroke={strokeColor}
                strokeWidth="6"
              />
              <line
                x1="50"
                y1="50"
                x2="96"
                y2="50"
                stroke={strokeColor}
                strokeWidth="5"
              />
              <line
                x1="68"
                y1="50"
                x2="68"
                y2="92"
                stroke={strokeColor}
                strokeWidth="4.5"
              />
              <line
                x1="50"
                y1="74"
                x2="68"
                y2="74"
                stroke={strokeColor}
                strokeWidth="4"
              />
              {/* Green spiral sweeping downwards inside lower-right quadrant to (96, 50) */}
              <path
                d="M 62 60 A 4 4 0 0 1 68 64 A 10 10 0 0 1 58 74 A 18 18 0 0 1 50 64 A 28 28 0 0 0 68 92 A 44 44 0 0 0 96 50"
                fill="none"
                stroke={strokeColor}
                strokeWidth="5.5"
                strokeLinecap="round"
              />
            </svg>
          </span>

          <span style={{ color: strokeColor }} className="tracking-[0.16em]">
            FARM
          </span>
        </div>

        {withSubtitle && (
          <div className="flex items-center gap-2 mt-1">
            <span
              className="text-[9px] sm:text-[10px] uppercase font-medium tracking-[0.24em]"
              style={{ color: textMuted }}
            >
              Pharmaceutical CDMO · Veneto
            </span>
            <span className="inline-block h-1 w-1 rounded-full bg-accent/70" />
            <span
              className="text-[9px] sm:text-[10px] uppercase font-semibold tracking-[0.18em]"
              style={{ color: accentColor }}
            >
              Sella & Salix
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
