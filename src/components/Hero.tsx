import React from "react";
import { BrandEmblemSvg } from "./BrandLogoSvg";
import { ArrowRight, Eye, Sparkles } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#f5f9fc] dark:bg-[#071626]">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-32 -top-40 h-[32rem] w-[32rem] rounded-full bg-cyan-300/25 blur-3xl dark:bg-cyan-500/10" />
        <div className="absolute -bottom-48 -left-32 h-[30rem] w-[30rem] rounded-full bg-blue-300/25 blur-3xl dark:bg-blue-500/10" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#0b2545_1px,transparent_1px),linear-gradient(90deg,#0b2545_1px,transparent_1px)] [background-size:42px_42px] dark:opacity-[0.08]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/80 px-4 py-2 text-xs font-semibold tracking-wide text-[#087e8b] shadow-sm dark:border-teal-900 dark:bg-slate-900/70 dark:text-teal-300">
              <Sparkles className="h-4 w-4" />
              THE MOTi BRAND EXPERIENCE
            </div>
            <h1 className="text-balance font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-[#0b2545] dark:text-white sm:text-5xl lg:text-6xl">
              A distinctive identity for
              <span className="mt-2 block bg-gradient-to-r from-[#087e8b] to-[#24b7c8] bg-clip-text text-transparent">
                modern diagnostics.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
              Discover the visual world of MOTi Diagnostics Centre — a cohesive brand system spanning its logo, spaces, stationery, digital presence and more.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#logo-design" className="inline-flex items-center gap-2 rounded-xl bg-[#0b2545] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-950/15 transition hover:-translate-y-0.5 hover:bg-[#12365f] dark:bg-teal-400 dark:text-[#071626] dark:hover:bg-teal-300">
                Explore the brand <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#exterior-signboard" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/80 px-6 py-3.5 text-sm font-semibold text-[#0b2545] transition hover:border-teal-400 hover:bg-white dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:border-teal-500">
                <Eye className="h-4 w-4 text-teal-600 dark:text-teal-400" /> View applications
              </a>
            </div>
            <div className="mt-12 grid max-w-lg grid-cols-3 gap-5 border-t border-slate-200 pt-6 dark:border-slate-700">
              <div><div className="font-display text-2xl font-bold text-[#0b2545] dark:text-white">01</div><div className="mt-1 text-xs text-slate-500 dark:text-slate-400">Core identity</div></div>
              <div><div className="font-display text-2xl font-bold text-[#0b2545] dark:text-white">10</div><div className="mt-1 text-xs text-slate-500 dark:text-slate-400">Brand touchpoints</div></div>
              <div><div className="font-display text-2xl font-bold text-[#0b2545] dark:text-white">360°</div><div className="mt-1 text-xs text-slate-500 dark:text-slate-400">Brand experience</div></div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-teal-300/30 via-blue-300/10 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-br from-[#123b63] via-[#0b2545] to-[#061426] p-7 shadow-[0_30px_90px_-30px_rgba(5,35,67,0.55)] sm:p-10">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-teal-300/20" />
              <div className="absolute -right-5 -top-5 h-36 w-36 rounded-full border border-teal-300/15" />
              <div className="relative flex min-h-[22rem] flex-col items-center justify-center text-center">
                <div className="mb-7 flex h-36 w-36 items-center justify-center rounded-full border border-teal-300/40 bg-gradient-to-br from-white/15 to-white/5 shadow-[0_0_60px_rgba(0,180,216,0.18)]">
                  <BrandEmblemSvg sizePx={104} theme="full-color-dark" />
                </div>
                <div className="font-display text-5xl font-extrabold tracking-tight text-white">MOT<span className="text-[#35c5d5]">i</span></div>
                <div className="mt-2 text-xs font-bold uppercase tracking-[0.34em] text-teal-200">Diagnostics Centre</div>
                <div className="mt-8 h-px w-24 bg-gradient-to-r from-transparent via-teal-300/70 to-transparent" />
                <p className="mt-5 text-xs tracking-[0.18em] text-slate-300">ROYAL BLUE · CLINICAL WHITE · TEAL</p>
              </div>
              <div className="relative flex items-center justify-between border-t border-white/15 pt-5 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-300">
                <span>One unified identity</span><span className="text-teal-300">MOTi / 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
