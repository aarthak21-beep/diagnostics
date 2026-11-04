import React, { useState } from "react";
import { BrandLogoSvg, BrandEmblemSvg } from "./BrandLogoSvg";
import { Smartphone, Square, Download, Sparkles, Check, Phone, ArrowUpRight } from "lucide-react";
import { SOCIAL_CAMPAIGNS } from "../data/brandData";

type AspectFormat = "9:16" | "1:1";

export const SocialMediaTemplates: React.FC = () => {
  const [selectedCampaignIndex, setSelectedCampaignIndex] = useState<number>(0);
  const [format, setFormat] = useState<AspectFormat>("9:16");
  const [customTitle, setCustomTitle] = useState<string>(SOCIAL_CAMPAIGNS[0].title);
  const [customSubtitle, setCustomSubtitle] = useState<string>(SOCIAL_CAMPAIGNS[0].subtitle);
  const [customCallout, setCustomCallout] = useState<string>(SOCIAL_CAMPAIGNS[0].callout);
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);

  const campaign = SOCIAL_CAMPAIGNS[selectedCampaignIndex];

  const handleSelectCampaign = (idx: number) => {
    setSelectedCampaignIndex(idx);
    setCustomTitle(SOCIAL_CAMPAIGNS[idx].title);
    setCustomSubtitle(SOCIAL_CAMPAIGNS[idx].subtitle);
    setCustomCallout(SOCIAL_CAMPAIGNS[idx].callout);
  };

  const handleDownloadAsset = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 2500);
  };

  return (
    <section id="social-branding" className="py-12 md:py-16 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-semibold tracking-wider uppercase text-teal-600 dark:text-teal-400 mb-1">
              Deliverable 06 · Digital Campaigns &amp; Omnichannel Social
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Social Media Branding Templates
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
              High-converting social templates rendered in vertical 9:16 story/reel format and square 1:1 feed
              format with glassmorphic cards and large readable medical typography.
            </p>
          </div>

          {/* Aspect Ratio Switcher */}
          <div className="flex items-center gap-1.5 p-1 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm shrink-0">
            <span className="text-xs font-medium text-slate-400 px-2 hidden sm:inline">Format:</span>
            <button
              onClick={() => setFormat("9:16")}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                format === "9:16"
                  ? "bg-[#0B2545] text-white shadow-xs font-semibold"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
              }`}
            >
              <Smartphone className="w-3.5 h-3.5 text-teal-400" />
              <span>Vertical 9:16 (Story/Reel)</span>
            </button>
            <button
              onClick={() => setFormat("1:1")}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                format === "1:1"
                  ? "bg-[#0B2545] text-white shadow-xs font-semibold"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
              }`}
            >
              <Square className="w-3.5 h-3.5 text-teal-400" />
              <span>Square 1:1 (Feed/Ad)</span>
            </button>
          </div>
        </div>

        {/* Campaign Customizer and Live Template Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Live Mobile/Social Preview Frame (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center p-6 sm:p-8 bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl relative overflow-hidden">
            {/* Ambient Background Light */}
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 via-transparent to-blue-600/15 pointer-events-none" />

            {/* Template Card Container */}
            <div
              className={`relative rounded-3xl overflow-hidden shadow-2xl border border-teal-500/30 transition-all duration-500 select-none ${
                format === "9:16"
                  ? "w-full max-w-[340px] aspect-[9/16] bg-gradient-to-b from-[#081B33] via-[#0B2545] to-[#040D1A]"
                  : "w-full max-w-[440px] aspect-square bg-gradient-to-br from-[#0B2545] via-[#081B33] to-[#040D1A]"
              } p-6 sm:p-7 flex flex-col justify-between text-white`}
            >
              {/* Top Bar: Brand Logo & Verified Tag */}
              <div className="flex items-center justify-between relative z-10">
                <BrandLogoSvg size="sm" theme="monochrome-white" />
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30">
                  {campaign.badge}
                </span>
              </div>

              {/* Decorative Subtle Diagnostic Ring & Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-teal-400/10 pointer-events-none animate-pulse" />

              {/* Center Content: Title, Subtitle & Key Highlights */}
              <div className="relative z-10 space-y-4 my-auto">
                <div className="inline-block px-2.5 py-1 rounded bg-teal-400/15 border border-teal-300/30 text-[11px] font-bold text-teal-200">
                  {customCallout}
                </div>

                <h3
                  className={`font-display font-extrabold text-white leading-tight tracking-tight ${
                    format === "9:16" ? "text-2xl" : "text-2xl sm:text-3xl"
                  }`}
                >
                  {customTitle}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {customSubtitle}
                </p>

                {/* Highlights Grid */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  {campaign.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 text-[11px] text-teal-100 flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                      <span className="truncate">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA Strip */}
              <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">
                    24/7 Helpline
                  </div>
                  <div className="text-xs font-bold font-mono text-white flex items-center gap-1">
                    <Phone className="w-3 h-3 text-teal-400" />
                    <span>{campaign.phone}</span>
                  </div>
                </div>

                <div className="px-3.5 py-1.5 rounded-lg bg-teal-400 text-slate-950 font-bold text-xs flex items-center gap-1 shadow-lg shadow-teal-500/20">
                  <span>Book Now</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            <div className="mt-4 text-[11px] text-slate-400 font-mono">
              Render Aspect: {format === "9:16" ? "1080 x 1920 px (9:16 Vertical)" : "1080 x 1080 px (1:1 Square)"}
            </div>
          </div>

          {/* Campaign Selector & Copy Editor (5 Cols) */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
              Social Campaign Customizer
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">
              Select one of the 4 clinical campaign presets and tailor copy for immediate omnichannel export.
            </p>

            {/* Campaign Buttons */}
            <div className="space-y-2 mb-6">
              {SOCIAL_CAMPAIGNS.map((c, idx) => (
                <button
                  key={c.id}
                  onClick={() => handleSelectCampaign(idx)}
                  className={`w-full p-3 rounded-xl text-left transition-all border ${
                    selectedCampaignIndex === idx
                      ? "bg-teal-50 dark:bg-teal-950/40 border-teal-500 text-slate-900 dark:text-white shadow-xs"
                      : "bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-100"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold">{c.title}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200">
                      {c.badge}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 truncate">
                    {c.subtitle}
                  </div>
                </button>
              ))}
            </div>

            {/* Editable Inputs */}
            <div className="space-y-3 mb-6 text-xs">
              <div>
                <label className="text-slate-700 dark:text-slate-300 font-semibold block mb-1">
                  Campaign Headline:
                </label>
                <input
                  type="text"
                  value={customTitle}
                  onChange={(e) => setCustomTitle(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="text-slate-700 dark:text-slate-300 font-semibold block mb-1">
                  Subtitle / Clinical Promise:
                </label>
                <input
                  type="text"
                  value={customSubtitle}
                  onChange={(e) => setCustomSubtitle(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="text-slate-700 dark:text-slate-300 font-semibold block mb-1">
                  Offer / Special Privilege Callout:
                </label>
                <input
                  type="text"
                  value={customCallout}
                  onChange={(e) => setCustomCallout(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>
            </div>

            {/* Download / Export Button */}
            <button
              onClick={handleDownloadAsset}
              className="w-full py-2.5 px-4 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs rounded-lg shadow-sm transition-all flex items-center justify-center gap-2"
            >
              {downloadSuccess ? (
                <>
                  <Check className="w-4 h-4 text-emerald-950" />
                  <span>Ultra-HD Graphic Ready for Publishing!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Export Social Asset ({format})</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
