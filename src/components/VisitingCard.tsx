import React, { useState } from "react";
import { BrandLogoSvg, BrandEmblemSvg } from "./BrandLogoSvg";
import { Rotate3d, Download, Sparkles, Phone, Mail, MapPin, Globe, QrCode, Shield, Check } from "lucide-react";
import { SAMPLE_DOCTORS } from "../data/brandData";

type CardFinish = "spot-uv" | "teal-foil" | "minimal-white";

export const VisitingCard: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [selectedDoctorIndex, setSelectedDoctorIndex] = useState<number>(0);
  const [cardFinish, setCardFinish] = useState<CardFinish>("spot-uv");
  const [customName, setCustomName] = useState<string>(SAMPLE_DOCTORS[0].name);
  const [customDegrees, setCustomDegrees] = useState<string>(SAMPLE_DOCTORS[0].degrees);
  const [customRole, setCustomRole] = useState<string>(SAMPLE_DOCTORS[0].role);
  const [customPhone, setCustomPhone] = useState<string>(SAMPLE_DOCTORS[0].phone);
  const [customEmail, setCustomEmail] = useState<string>(SAMPLE_DOCTORS[0].email);

  const handleSelectDoctor = (idx: number) => {
    setSelectedDoctorIndex(idx);
    setCustomName(SAMPLE_DOCTORS[idx].name);
    setCustomDegrees(SAMPLE_DOCTORS[idx].degrees);
    setCustomRole(SAMPLE_DOCTORS[idx].role);
    setCustomPhone(SAMPLE_DOCTORS[idx].phone);
    setCustomEmail(SAMPLE_DOCTORS[idx].email);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="visiting-card" className="py-12 md:py-16 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-semibold tracking-wider uppercase text-teal-600 dark:text-teal-400 mb-1">
              Deliverable 04 · Executive Stationery &amp; Networking
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Professional Visiting Card Design
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
              Printed on 450gsm velvety soft-touch cardstock with dimensional Spot UV gloss, cold teal metallic
              foil edge gilding, and an embedded digital NFC / vCard QR code.
            </p>
          </div>

          {/* Interactive Flip Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsFlipped(!isFlipped)}
              className="flex items-center gap-2 px-4 py-2 bg-[#0B2545] hover:bg-[#081B33] text-white text-xs font-semibold rounded-lg shadow-sm transition-all"
            >
              <Rotate3d className="w-4 h-4 text-teal-400" />
              <span>Flip Card ({isFlipped ? "Viewing Back" : "Viewing Front"})</span>
            </button>
          </div>
        </div>

        {/* 3D Interactive Card & Customizer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* 3D Flip Card Viewport (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center p-6 sm:p-10 bg-slate-950 rounded-2xl border border-slate-800 min-h-[440px] relative overflow-hidden">
            {/* Ambient Lighting & Stage Glow */}
            <div className="absolute inset-0 bg-radial from-teal-500/10 via-transparent to-transparent pointer-events-none" />

            {/* 3D Card Container */}
            <div
              className="perspective-1000 w-full max-w-[480px] aspect-[1.75/1] cursor-pointer group"
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <div
                className={`relative w-full h-full duration-700 transform-style-3d transition-transform ${
                  isFlipped ? "rotate-y-180" : ""
                }`}
              >
                {/* ================= CARD FRONT ================= */}
                <div
                  className={`absolute inset-0 w-full h-full rounded-2xl backface-hidden p-6 sm:p-8 flex flex-col justify-between shadow-2xl transition-all ${
                    cardFinish === "minimal-white"
                      ? "bg-white text-slate-900 border border-slate-200"
                      : cardFinish === "teal-foil"
                      ? "bg-[#081B33] text-white border-2 border-teal-400/80 shadow-[0_0_35px_rgba(0,180,216,0.3)]"
                      : "bg-gradient-to-br from-[#0B2545] via-[#081B33] to-[#040D1A] text-white border border-teal-500/30"
                  }`}
                >
                  {/* Spot UV Light Reflection Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent rounded-2xl pointer-events-none" />

                  {/* Front Top: Logo */}
                  <div className="flex items-start justify-between relative z-10">
                    <BrandLogoSvg
                      size="sm"
                      theme={cardFinish === "minimal-white" ? "full-color-light" : "full-color-dark"}
                    />
                    <div className="text-right">
                      <span className="text-[10px] font-mono tracking-wider text-teal-400 font-semibold uppercase">
                        ISO 15189:2022
                      </span>
                    </div>
                  </div>

                  {/* Front Center: Holographic Foil Strip */}
                  <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-teal-400/60 to-transparent my-1" />

                  {/* Front Bottom: Doctor Name, Title, and Direct Contact */}
                  <div className="relative z-10 flex items-end justify-between">
                    <div>
                      <h3
                        className={`text-lg sm:text-xl font-bold font-display ${
                          cardFinish === "minimal-white" ? "text-slate-900" : "text-white"
                        }`}
                      >
                        {customName}
                      </h3>
                      <div className="text-xs text-teal-400 font-semibold">{customDegrees}</div>
                      <div
                        className={`text-[11px] mt-0.5 ${
                          cardFinish === "minimal-white" ? "text-slate-600" : "text-slate-300"
                        }`}
                      >
                        {customRole}
                      </div>
                    </div>

                    {/* Mini Smart Chip Indicator */}
                    <div className="w-8 h-6 rounded bg-amber-200/20 border border-amber-300/40 flex items-center justify-center">
                      <div className="w-5 h-4 border border-amber-300/60 rounded-xs flex items-center justify-center">
                        <div className="w-2.5 h-1.5 bg-amber-300/30 rounded-xs" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* ================= CARD BACK ================= */}
                <div
                  className={`absolute inset-0 w-full h-full rounded-2xl backface-hidden rotate-y-180 p-6 sm:p-7 flex flex-col justify-between shadow-2xl transition-all ${
                    cardFinish === "minimal-white"
                      ? "bg-slate-50 text-slate-900 border border-slate-200"
                      : "bg-gradient-to-tl from-[#040D1A] via-[#081B33] to-[#0B2545] text-white border border-teal-500/30"
                  }`}
                >
                  {/* Back Top: Centre Info & QR code */}
                  <div className="flex items-start justify-between">
                    <div className="space-y-1 text-[11px]">
                      <div className="font-bold text-teal-400 uppercase tracking-wider text-[10px]">
                        MOTi DIAGNOSTICS CENTRE
                      </div>
                      <div className="text-slate-300 flex items-center gap-1.5">
                        <MapPin className="w-3 h-3 text-teal-400 shrink-0" />
                        <span>Tower 4, Horizon Health Boulevard, Metro District</span>
                      </div>
                      <div className="text-slate-300 flex items-center gap-1.5">
                        <Phone className="w-3 h-3 text-teal-400 shrink-0" />
                        <span>{customPhone} · Toll-Free: 1800 200 6684</span>
                      </div>
                      <div className="text-slate-300 flex items-center gap-1.5">
                        <Mail className="w-3 h-3 text-teal-400 shrink-0" />
                        <span>{customEmail}</span>
                      </div>
                      <div className="text-slate-300 flex items-center gap-1.5">
                        <Globe className="w-3 h-3 text-teal-400 shrink-0" />
                        <span>www.motidiagnostics.com</span>
                      </div>
                    </div>

                    {/* Functional vCard QR Code */}
                    <div className="p-2 bg-white rounded-lg shadow-md shrink-0 text-center">
                      <div className="w-16 h-16 bg-slate-900 rounded p-1 flex items-center justify-center text-white">
                        <QrCode className="w-14 h-14 text-white" />
                      </div>
                      <span className="text-[9px] font-mono text-slate-800 font-bold block mt-1">
                        Scan for vCard
                      </span>
                    </div>
                  </div>

                  {/* Back Bottom: Accreditations */}
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white">Accredited:</span>
                      <span>ISO 15189</span>
                      <span>·</span>
                      <span>NABL Certified</span>
                      <span>·</span>
                      <span>CAP Audited</span>
                    </div>
                    <span className="font-mono text-teal-400">Click to Flip Back</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-xs text-slate-400 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-teal-400" />
              <span>Click on the card or use the button above to inspect 3D front &amp; back.</span>
            </div>
          </div>

          {/* Card Customization & Print Configuration (5 Cols) */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
              Live Visiting Card Customizer
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">
              Select an executive consultant profile or customize fields in real time.
            </p>

            {/* Doctor Profile Preset Switcher */}
            <div className="mb-4">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-2">
                Executive Profile Presets:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {SAMPLE_DOCTORS.map((doc, idx) => (
                  <button
                    key={doc.id}
                    onClick={() => handleSelectDoctor(idx)}
                    className={`p-2 rounded-lg text-left text-xs transition-all border ${
                      selectedDoctorIndex === idx
                        ? "bg-teal-50 dark:bg-teal-950/40 border-teal-500 text-teal-900 dark:text-teal-200 font-bold shadow-xs"
                        : "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400"
                    }`}
                  >
                    <div className="truncate">{doc.name}</div>
                    <div className="text-[10px] text-slate-400 dark:text-slate-400 truncate">
                      {doc.role.split("&")[0]}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Finish Selector */}
            <div className="mb-5">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-2">
                Special Print Finish:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "spot-uv", label: "Spot UV Gloss" },
                  { id: "teal-foil", label: "Teal Foil Gilding" },
                  { id: "minimal-white", label: "Pure Ceramic" },
                ].map((finish) => (
                  <button
                    key={finish.id}
                    onClick={() => setCardFinish(finish.id as CardFinish)}
                    className={`py-1.5 px-2 text-xs rounded-md transition-colors border text-center ${
                      cardFinish === finish.id
                        ? "bg-[#0B2545] text-white border-[#0B2545] font-semibold"
                        : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400"
                    }`}
                  >
                    {finish.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Edit Fields */}
            <div className="space-y-3 mb-6 text-xs">
              <div>
                <label className="text-slate-600 dark:text-slate-400 block mb-1">Doctor / Officer Name:</label>
                <input
                  type="text"
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-600 dark:text-slate-400 block mb-1">Degrees:</label>
                  <input
                    type="text"
                    value={customDegrees}
                    onChange={(e) => setCustomDegrees(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="text-slate-600 dark:text-slate-400 block mb-1">Role / Department:</label>
                  <input
                    type="text"
                    value={customRole}
                    onChange={(e) => setCustomRole(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-600 dark:text-slate-400 block mb-1">Direct Phone:</label>
                  <input
                    type="text"
                    value={customPhone}
                    onChange={(e) => setCustomPhone(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono"
                  />
                </div>
                <div>
                  <label className="text-slate-600 dark:text-slate-400 block mb-1">Direct Email:</label>
                  <input
                    type="text"
                    value={customEmail}
                    onChange={(e) => setCustomEmail(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono"
                  />
                </div>
              </div>
            </div>

            {/* Print Simulation Trigger */}
            <button
              onClick={handlePrint}
              className="w-full py-2.5 px-4 bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-bold rounded-lg shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Print Ready Export (3.5&quot; &times; 2&quot; Standard Die-Cut)</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
