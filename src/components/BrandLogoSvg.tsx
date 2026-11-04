import React from "react";

interface BrandLogoProps {
  variant?: "horizontal" | "vertical" | "emblem-only" | "wordmark-only";
  theme?: "full-color-light" | "full-color-dark" | "monochrome-white" | "monochrome-dark" | "teal-accent";
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showTagline?: boolean;
}

export const BrandEmblemSvg: React.FC<{ sizePx?: number; theme?: string }> = ({
  sizePx = 48,
  theme = "full-color-light",
}) => {
  const isWhite = theme === "monochrome-white";
  const isDarkMono = theme === "monochrome-dark";
  const isDarkBg = theme === "full-color-dark";

  return (
    <svg
      width={sizePx}
      height={sizePx}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 drop-shadow-md select-none"
    >
      <defs>
        {/* Royal Blue Gradients */}
        <linearGradient id="motiRoyalGrad" x1="10" y1="10" x2="110" y2="110" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1E40AF" />
          <stop offset="50%" stopColor="#0B2545" />
          <stop offset="100%" stopColor="#081B33" />
        </linearGradient>

        {/* Luminous Teal Gradients */}
        <linearGradient id="motiTealGrad" x1="20" y1="10" x2="100" y2="110" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#67E8F9" />
          <stop offset="45%" stopColor="#00B4D8" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>

        {/* Pulse / Core Gradient */}
        <radialGradient id="motiCoreGlow" cx="60" cy="60" r="50" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#A5F3FC" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#00B4D8" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#0B2545" stopOpacity="0" />
        </radialGradient>

        {/* Metallic Bevel Filter */}
        <filter id="motiShadow3D" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#0B2545" floodOpacity="0.28" />
        </filter>
      </defs>

      {/* Outer Precision Diagnostic Ring */}
      <circle
        cx="60"
        cy="60"
        r="54"
        stroke={isWhite ? "#FFFFFF" : isDarkMono ? "#0F172A" : isDarkBg ? "#38BDF8" : "#00B4D8"}
        strokeWidth="3.5"
        strokeOpacity={isDarkBg ? "0.4" : "0.5"}
        strokeDasharray="90 12 18 12"
      />

      {/* Optical Alignment Calibrators (4 cardinal ticks) */}
      <circle cx="60" cy="5" r="2.5" fill={isWhite ? "#FFF" : "#00B4D8"} />
      <circle cx="115" cy="60" r="2.5" fill={isWhite ? "#FFF" : "#00B4D8"} />
      <circle cx="60" cy="115" r="2.5" fill={isWhite ? "#FFF" : "#00B4D8"} />
      <circle cx="5" cy="60" r="2.5" fill={isWhite ? "#FFF" : "#00B4D8"} />

      {/* Internal Subtle Diagnostic Glow Shield */}
      <circle
        cx="60"
        cy="60"
        r="44"
        fill={isWhite ? "rgba(255,255,255,0.08)" : isDarkBg ? "url(#motiCoreGlow)" : "rgba(0,180,216,0.06)"}
      />

      {/* 3D Medical Cross Shape with Beveled Curvature */}
      <path
        d="M50 24C50 20.6863 52.6863 18 56 18H64C67.3137 18 70 20.6863 70 24V46H96C99.3137 46 102 48.6863 102 52V60C102 63.3137 99.3137 66 96 66H70V96C70 99.3137 67.3137 102 64 102H56C52.6863 102 50 99.3137 50 96V66H24C20.6863 66 18 63.3137 18 60V52C18 48.6863 20.6863 46 24 46H50V24Z"
        fill={isWhite ? "#FFFFFF" : isDarkMono ? "#0F172A" : "url(#motiRoyalGrad)"}
        filter="url(#motiShadow3D)"
      />

      {/* Intertwined 3D Genomic DNA Helix Curve across the Medical Cross */}
      <path
        d="M26 66C36 66 42 46 60 46C78 46 84 66 94 66"
        stroke={isWhite ? "rgba(255,255,255,0.7)" : "url(#motiTealGrad)"}
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M26 46C36 46 42 66 60 66C78 66 84 46 94 46"
        stroke={isWhite ? "rgba(255,255,255,0.4)" : "#38BDF8"}
        strokeWidth="5"
        strokeLinecap="round"
        strokeOpacity="0.85"
      />

      {/* DNA Helix Base-Pair Bridge Connectors */}
      <line x1="42" y1="52" x2="42" y2="60" stroke={isWhite ? "#FFF" : "#A5F3FC"} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="60" y1="46" x2="60" y2="66" stroke={isWhite ? "#FFF" : "#FFFFFF"} strokeWidth="3" strokeLinecap="round" />
      <line x1="78" y1="60" x2="78" y2="52" stroke={isWhite ? "#FFF" : "#A5F3FC"} strokeWidth="2.5" strokeLinecap="round" />

      {/* Center Precision Diagnostic Pulse Node */}
      <circle
        cx="60"
        cy="56"
        r="7.5"
        fill={isWhite ? "#FFFFFF" : "#00B4D8"}
        stroke={isWhite ? "#0B2545" : "#FFFFFF"}
        strokeWidth="2.5"
      />
      <circle cx="60" cy="56" r="3" fill={isWhite ? "#0B2545" : "#FFFFFF"} />
    </svg>
  );
};

export const BrandLogoSvg: React.FC<BrandLogoProps> = ({
  variant = "horizontal",
  theme = "full-color-light",
  className = "",
  size = "md",
  showTagline = false,
}) => {
  const isWhite = theme === "monochrome-white";
  const isDarkMono = theme === "monochrome-dark";
  const isDarkBg = theme === "full-color-dark";

  const sizeMap = {
    sm: { emblem: 34, title: "text-lg", sub: "text-[9px] tracking-[0.25em]" },
    md: { emblem: 46, title: "text-2xl", sub: "text-[10.5px] tracking-[0.28em]" },
    lg: { emblem: 64, title: "text-3xl", sub: "text-xs tracking-[0.32em]" },
    xl: { emblem: 90, title: "text-5xl", sub: "text-sm tracking-[0.38em]" },
  };

  const currentSize = sizeMap[size];

  if (variant === "emblem-only") {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <BrandEmblemSvg sizePx={currentSize.emblem} theme={theme} />
      </div>
    );
  }

  const primaryTextColor = isWhite
    ? "text-white"
    : isDarkMono
    ? "text-slate-950"
    : isDarkBg
    ? "text-white"
    : "text-[#0B2545] dark:text-white";

  const tealAccentColor = isWhite ? "text-cyan-200" : isDarkMono ? "text-slate-900" : "text-[#00B4D8]";

  const subTextColor = isWhite
    ? "text-white/80"
    : isDarkMono
    ? "text-slate-700"
    : isDarkBg
    ? "text-cyan-200"
    : "text-[#0284C7] dark:text-cyan-300";

  return (
    <div
      className={`inline-flex items-center select-none ${
        variant === "vertical" ? "flex-col text-center gap-3" : "flex-row gap-3.5"
      } ${className}`}
    >
      {/* 3D Emblem */}
      <BrandEmblemSvg sizePx={currentSize.emblem} theme={theme} />

      {/* MOTi DIAGNOSTICS CENTRE Wordmark */}
      <div className={`flex flex-col ${variant === "vertical" ? "items-center" : "items-start"}`}>
        <div className={`font-display font-extrabold tracking-tight leading-none ${currentSize.title} ${primaryTextColor}`}>
          <span>MOT</span>
          <span className="relative inline-block">
            <span className={tealAccentColor}>i</span>
            {/* Glowing dot on i */}
            <span
              className={`absolute top-0 right-0 w-1.5 h-1.5 rounded-full ${
                isWhite ? "bg-white" : "bg-[#00B4D8]"
              } animate-ping opacity-75`}
            />
          </span>
        </div>

        <div
          className={`font-display font-bold uppercase ${currentSize.sub} ${subTextColor} mt-1 whitespace-nowrap`}
        >
          DIAGNOSTICS CENTRE
        </div>

        {showTagline && (
          <div className="text-[10px] text-slate-400 dark:text-slate-400 font-medium tracking-wider mt-1">
            Precision Diagnostics · Trusted Care
          </div>
        )}
      </div>
    </div>
  );
};
