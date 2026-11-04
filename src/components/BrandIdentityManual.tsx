import React, { useState } from "react";
import { BRAND_COLORS, BRAND_FULL_NAME } from "../data/brandData";
import { BrandLogoSvg, BrandEmblemSvg } from "./BrandLogoSvg";
import { Copy, Check, Download, ShieldCheck, XCircle, CheckCircle, FileText, Sparkles } from "lucide-react";

export const BrandIdentityManual: React.FC = () => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const handleDownloadBrandKit = () => {
    const brandKitJson = JSON.stringify(
      {
        brandName: BRAND_FULL_NAME,
        established: 2026,
        tagline: "Precision Diagnostics · Advanced Care · Trusted Results",
        colorSystem: BRAND_COLORS,
        typography: {
          display: "Outfit (Weights: 600, 700, 800)",
          body: "Plus Jakarta Sans (Weights: 400, 500, 600)",
          telemetry: "Space Grotesk (Tabular Figures)",
        },
        accreditations: ["ISO 15189:2022", "NABL Certified", "CAP Accredited"],
      },
      null,
      2
    );

    const blob = new Blob([brandKitJson], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "MOTi_DIAGNOSTICS_CENTRE_Brand_Tokens.json";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="brand-manual" className="py-12 md:py-16 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-semibold tracking-wider uppercase text-teal-600 dark:text-teal-400 mb-1">
              Deliverable 10 · Design System &amp; Brand Constitution
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Corporate Brand Identity Manual
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
              Strict visual guidelines governing corporate color systems, typography scale, clear-space boundaries,
              and logo application rules for MOTi DIAGNOSTICS CENTRE.
            </p>
          </div>

          <button
            onClick={handleDownloadBrandKit}
            className="flex items-center gap-2 px-4 py-2 bg-[#0B2545] hover:bg-[#081B33] text-white text-xs font-semibold rounded-lg shadow-sm transition-all shrink-0"
          >
            <Download className="w-4 h-4 text-teal-400" />
            <span>Download Brand Tokens (.JSON)</span>
          </button>
        </div>

        {/* 1. COLOR SYSTEM SWATCHES */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-200 dark:border-slate-800">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              01. Official Color Matrix (60-30-10 Distribution)
            </h3>
            <span className="text-xs text-slate-500 font-mono">Click code to copy</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BRAND_COLORS.map((c) => (
              <div
                key={c.name}
                className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Color Swatch Block */}
                <div
                  className="h-28 w-full p-4 flex flex-col justify-between relative"
                  style={{ backgroundColor: c.hex }}
                >
                  <span
                    className={`text-xs font-bold uppercase tracking-wider ${
                      c.isLight ? "text-slate-800" : "text-white"
                    }`}
                  >
                    {c.role}
                  </span>
                  <div
                    className={`text-xl font-mono font-bold flex items-center justify-between ${
                      c.isLight ? "text-slate-900" : "text-white"
                    }`}
                  >
                    <span>{c.hex}</span>
                    <button
                      onClick={() => handleCopy(c.hex)}
                      className="p-1.5 rounded bg-black/10 hover:bg-black/20 backdrop-blur-xs transition-colors"
                      title="Copy HEX"
                    >
                      {copiedHex === c.hex ? (
                        <Check className="w-4 h-4 text-emerald-300" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Technical Specs */}
                <div className="p-4 space-y-2">
                  <div className="font-bold text-sm text-slate-900 dark:text-white">{c.name}</div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    {c.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] font-mono grid grid-cols-2 gap-2 text-slate-500 dark:text-slate-400">
                    <div>
                      <span className="text-slate-400 block text-[9px]">RGB:</span>
                      <span>{c.rgb}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[9px]">CMYK:</span>
                      <span>{c.cmyk}</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-slate-400 block text-[9px]">PANTONE:</span>
                      <span className="font-bold text-teal-600 dark:text-teal-400">{c.pantone}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. TYPOGRAPHIC HIERARCHY */}
        <div className="mb-12 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
          <div className="pb-4 border-b border-slate-100 dark:border-slate-800 mb-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              02. Typographic Scale &amp; Font Pairings
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Engineered with modern geometric display type paired with hyper-legible body prose and tabular numbers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
              <div className="text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-2">
                Brand &amp; Display Typeface
              </div>
              <div className="text-2xl font-display font-extrabold text-slate-900 dark:text-white">
                Outfit / Plus Jakarta Sans
              </div>
              <div className="text-xs text-slate-500 mt-1">Weights: Bold 700, Extrabold 800</div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
                Applied for the primary MOTi DIAGNOSTICS CENTRE wordmark, billboards, hospital signage, and section headlines.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
              <div className="text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-2">
                Clinical Prose &amp; Navigation
              </div>
              <div className="text-2xl font-sans font-semibold text-slate-900 dark:text-white">
                Plus Jakarta Sans
              </div>
              <div className="text-xs text-slate-500 mt-1">Weights: Regular 400, Medium 500</div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
                Applied across patient reports, patient education brochures, website copy, and clinical instructions.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
              <div className="text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-2">
                Diagnostic Telemetry &amp; Lab Data
              </div>
              <div className="text-2xl font-mono font-bold text-slate-900 dark:text-white tabular-nums">
                Space Grotesk
              </div>
              <div className="text-xs text-slate-500 mt-1">Weights: Medium 500, Tabular Figures</div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
                Ensures vertical digit alignment for blood biomarkers, reference intervals, timestamps, and barcodes.
              </p>
            </div>
          </div>
        </div>

        {/* 3. LOGO USAGE & MISUSE RULES (DO'S AND DON'TS) */}
        <div>
          <div className="pb-4 border-b border-slate-200 dark:border-slate-800 mb-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              03. Logo Governance · Do&apos;s &amp; Don&apos;ts
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Strict rules to prevent distortion, altered spelling, or substandard reproduction of the brand mark.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Rule 1: DO */}
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-emerald-500/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-3">
                  <CheckCircle className="w-4 h-4" />
                  <span>DO: Official Contrast</span>
                </div>
                <div className="p-4 rounded-lg bg-[#0B2545] flex items-center justify-center mb-3">
                  <BrandLogoSvg size="sm" theme="monochrome-white" />
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Use the official monochrome white or full-color dark logo on deep navy and obsidian surfaces.
                </p>
              </div>
            </div>

            {/* Rule 2: DON'T Distort */}
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-rose-500/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-rose-600 dark:text-rose-400 mb-3">
                  <XCircle className="w-4 h-4" />
                  <span>DON&apos;T: Distort Aspect Ratio</span>
                </div>
                <div className="p-4 rounded-lg bg-slate-100 dark:bg-slate-950 flex items-center justify-center mb-3 scale-x-125 scale-y-75 opacity-75">
                  <BrandLogoSvg size="sm" theme="full-color-light" />
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Never stretch, squeeze, or skew the proportions of the emblem or the MOTi wordmark.
                </p>
              </div>
            </div>

            {/* Rule 3: DON'T Alter Colors */}
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-rose-500/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-rose-600 dark:text-rose-400 mb-3">
                  <XCircle className="w-4 h-4" />
                  <span>DON&apos;T: Alter Palette</span>
                </div>
                <div className="p-4 rounded-lg bg-slate-100 dark:bg-slate-950 flex items-center justify-center mb-3 filter hue-rotate-90 opacity-75">
                  <BrandLogoSvg size="sm" theme="full-color-light" />
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Never substitute brand colors with random unapproved greens, oranges, or purple gradients.
                </p>
              </div>
            </div>

            {/* Rule 4: DON'T Misspell */}
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-rose-500/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-rose-600 dark:text-rose-400 mb-3">
                  <XCircle className="w-4 h-4" />
                  <span>DON&apos;T: Alter Spelling</span>
                </div>
                <div className="p-4 rounded-lg bg-slate-100 dark:bg-slate-950 flex flex-col items-center justify-center mb-3 text-center">
                  <span className="font-display font-extrabold text-sm line-through text-rose-500">
                    MOTTI DIAGNOSTIC CENTER
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 mt-1">Incorrect Spelling</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Always maintain the exact spelling: &quot;MOTi DIAGNOSTICS CENTRE&quot;.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
