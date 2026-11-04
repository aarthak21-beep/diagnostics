import React from "react";
import { BrandLogoSvg, BrandEmblemSvg } from "./BrandLogoSvg";
import { ShieldCheck, Sparkles, ArrowRight, Layers, Eye } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-14 md:pt-14 md:pb-20 border-b border-slate-200 dark:border-slate-800">
      {/* Background Decorative Gradient Field */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-40 right-0 w-96 h-96 bg-teal-400/10 dark:bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute top-40 -left-20 w-80 h-80 bg-blue-600/10 dark:bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Unboxed Metadata Header (No pills, quiet typographic separators) */}
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 mb-4">
          <span className="text-teal-600 dark:text-teal-400 font-semibold">2026 Brand Identity Release</span>
          <span aria-hidden="true">&middot;</span>
          <span>Ultra-Premium Healthcare System</span>
          <span aria-hidden="true">&middot;</span>
          <span>ISO 15189:2022 Validated</span>
        </div>

        {/* 2-Column Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Column 1: Typography & Value Proposition (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] text-balance">
              Ultra-Premium 3D Medical Brand Identity
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              Engineered for <strong className="text-slate-900 dark:text-white font-semibold">MOTi DIAGNOSTICS CENTRE</strong>.
              A futuristic 2026 design language harmonizing clinical authority, genomic science, and executive luxury
              in Royal Blue, Clinical White, and Luminous Teal.
            </p>

            {/* Core Action & Secondary Link */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#logo-design"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-[#0B2545] hover:bg-[#081B33] dark:bg-teal-500 dark:hover:bg-teal-400 dark:text-slate-950 rounded-xl shadow-md transition-all active:scale-[0.98]"
              >
                <span>Explore 3D Medical Logo</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#exterior-signboard"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-800 transition-colors"
              >
                <Eye className="w-4 h-4 text-teal-500" />
                <span>View Signboard &amp; Interiors</span>
              </a>
            </div>
          </div>

          {/* Column 2: 3D Holographic Card Carrier (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="relative p-6 sm:p-8 bg-gradient-to-br from-[#0B2545] via-[#081B33] to-[#040D1A] rounded-3xl border border-teal-500/30 shadow-2xl overflow-hidden group">
              {/* Glass Reflection Sheen */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent rounded-3xl pointer-events-none" />

              {/* Central 3D Emblem Showcase */}
              <div className="py-8 flex flex-col items-center justify-center text-center relative z-10">
                <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-teal-400/40 via-blue-500/20 to-transparent flex items-center justify-center mb-6 shadow-inner">
                  <div className="w-28 h-28 rounded-full bg-[#081B33] flex items-center justify-center shadow-2xl border border-teal-400/40">
                    <BrandEmblemSvg sizePx={80} theme="full-color-dark" />
                  </div>
                </div>

                <div className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                  <span>MOT</span>
                  <span className="text-[#00B4D8]">i</span>
                </div>
                <div className="font-display font-bold text-xs uppercase tracking-[0.32em] text-teal-300 mt-1">
                  DIAGNOSTICS CENTRE
                </div>
                <div className="text-[11px] text-slate-400 mt-2 font-mono">
                  Royal Blue &middot; Clinical White &middot; Luminous Teal
                </div>
              </div>

              {/* Bottom Card Accreditation Strip */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400 relative z-10">
                <div className="flex items-center gap-1.5 text-teal-300 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>ISO 15189 Certified</span>
                </div>
                <span>2026 Master Brand</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Item Proof & Trust Strip (Below 2-column split) */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-slate-700 dark:text-slate-300">
          <div>
            <div className="text-xl sm:text-2xl font-mono-numbers font-bold text-slate-900 dark:text-white">
              100%
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Consistent Master Spelling
            </div>
          </div>

          <div>
            <div className="text-xl sm:text-2xl font-mono-numbers font-bold text-slate-900 dark:text-white">
              10 Deliverables
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Exterior, Interior &amp; Print Ready
            </div>
          </div>

          <div>
            <div className="text-xl sm:text-2xl font-mono-numbers font-bold text-slate-900 dark:text-white">
              3T MRI &middot; 128 CT
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Next-Gen Diagnostic Suite
            </div>
          </div>

          <div>
            <div className="text-xl sm:text-2xl font-mono-numbers font-bold text-slate-900 dark:text-white">
              60-30-10
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Color Palette System Discipline
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
