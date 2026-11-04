import React, { useState } from "react";
import { BrandLogoSvg, BrandEmblemSvg } from "./BrandLogoSvg";
import { FileCheck, Shield, QrCode, Download, Printer, CheckCircle, AlertCircle, Sparkles } from "lucide-react";

export const MedicalReportCover: React.FC = () => {
  const [reportView, setReportView] = useState<"cover-mockup" | "clinical-data">("cover-mockup");

  const labResults = [
    { test: "Hemoglobin (Hb)", value: "14.2", unit: "g/dL", range: "13.0 - 17.0", status: "normal" },
    { test: "Fasting Blood Glucose", value: "92", unit: "mg/dL", range: "70 - 99", status: "optimal" },
    { test: "Glycated Hemoglobin (HbA1c)", value: "5.4", unit: "%", range: "< 5.7", status: "optimal" },
    { test: "Total Cholesterol", value: "188", unit: "mg/dL", range: "< 200", status: "normal" },
    { test: "HDL Good Cholesterol", value: "54", unit: "mg/dL", range: "> 40", status: "optimal" },
    { test: "LDL Bad Cholesterol", value: "108", unit: "mg/dL", range: "< 100", status: "attention" },
    { test: "Serum Creatinine", value: "0.92", unit: "mg/dL", range: "0.70 - 1.20", status: "normal" },
    { test: "Thyroid Stimulating Hormone (TSH)", value: "2.18", unit: "uIU/mL", range: "0.45 - 4.50", status: "optimal" },
    { test: "Vitamin D3 (25-OH Cholecalciferol)", value: "48.5", unit: "ng/mL", range: "30.0 - 100.0", status: "optimal" },
  ];

  return (
    <section id="report-cover" className="py-12 md:py-16 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-semibold tracking-wider uppercase text-teal-600 dark:text-teal-400 mb-1">
              Deliverable 08 · Clinical Documentation &amp; Deliverables
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Premium Medical Report Cover Design
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
              An executive-grade diagnostic test dossier engineered with tactile blind debossing, metallic teal hot foil,
              and tamper-proof security holograms for patient confidentiality.
            </p>
          </div>

          {/* View Switcher */}
          <div className="flex items-center gap-1 p-1 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm shrink-0">
            <button
              onClick={() => setReportView("cover-mockup")}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                reportView === "cover-mockup"
                  ? "bg-[#0B2545] text-white shadow-xs font-semibold"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
              }`}
            >
              Executive Folder Showcase
            </button>
            <button
              onClick={() => setReportView("clinical-data")}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                reportView === "clinical-data"
                  ? "bg-[#0B2545] text-white shadow-xs font-semibold"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
              }`}
            >
              Digital Test Report Inside
            </button>
          </div>
        </div>

        {/* View 1: Cover Mockup */}
        {reportView === "cover-mockup" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* High-res generated photo (7 Cols) */}
            <div className="lg:col-span-7 bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative group">
              <div className="relative aspect-[3/4] sm:aspect-[4/3] w-full overflow-hidden">
                <img
                  src="/src/assets/images/moti_report_cover_mockup_1793794895628.jpg"
                  alt="MOTi DIAGNOSTICS CENTRE Executive Report Folder and Security Hologram"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div className="bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/10 text-xs">
                    <span className="text-teal-400 font-semibold">Finish:</span> Metallic Teal Foil on Imperial Navy
                  </div>
                  <div className="text-[11px] font-mono text-slate-300 hidden sm:block">
                    Tamper-Proof Holographic Seal
                  </div>
                </div>
              </div>
            </div>

            {/* Folder Specifications (5 Cols) */}
            <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-6">
              <div>
                <span className="text-[10px] font-mono text-teal-600 dark:text-teal-400 uppercase tracking-widest block mb-1">
                  Physical Packaging Standards
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Executive Patient Dossier Specifications
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  Engineered to offer patients a luxurious and reassuring medical experience. Each report binder
                  protects multi-parameter lab sheets and high-resolution radiologic scan film packets.
                </p>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
                  <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-500" />
                    <span>350 GSM Textured Natural Linen Cardstock</span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                    Heavyweight tactile paper dyed in customized Imperial Royal Blue with matte anti-scuff lamination.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
                  <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-500" />
                    <span>Hot Metallic Teal Foil &amp; Blind Debossing</span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                    Precision 0.8mm deep strike debossing with heat-fused Kurz metallic cyan-teal foil gilding.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
                  <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-500" />
                    <span>Cryptographic Tamper-Evident Hologram</span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                    Destructible silver-teal hologram sticker with unique serialized 128-bit authentication QR.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setReportView("clinical-data")}
                className="w-full py-2.5 px-4 bg-[#0B2545] hover:bg-[#081B33] text-white text-xs font-bold rounded-lg shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <FileCheck className="w-4 h-4 text-teal-400" />
                <span>Inspect Inside: Digital Clinical Lab Report</span>
              </button>
            </div>
          </div>
        )}

        {/* View 2: Clinical Data Sheet */}
        {reportView === "clinical-data" && (
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden p-6 sm:p-8">
            {/* Report Header Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-800 gap-4">
              <BrandLogoSvg size="md" theme="full-color-light" />
              <div className="text-left sm:text-right text-xs">
                <div className="font-bold text-slate-900 dark:text-white uppercase font-mono">
                  REF NO: REP-2026-88192
                </div>
                <div className="text-teal-600 dark:text-teal-400 font-semibold">
                  Comprehensive Metabolic &amp; Biochemical Panel
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                  Sample Collected: 12 Nov 2026 07:15 AM · Released: 12 Nov 2026 10:45 AM
                </div>
              </div>
            </div>

            {/* Patient Meta Strip */}
            <div className="my-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Patient Name:</span>
                <span className="font-bold text-slate-900 dark:text-white">Mr. Jonathan Wright</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Age / Sex / Blood:</span>
                <span className="font-bold text-slate-900 dark:text-white">42 Y / M / O+</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Referred By:</span>
                <span className="font-bold text-slate-900 dark:text-white">Dr. Sarah J. Reed</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Quality Standard:</span>
                <span className="font-bold text-teal-600 dark:text-teal-400">ISO 15189:2022</span>
              </div>
            </div>

            {/* Test Results Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 font-mono text-[11px]">
                    <th className="py-3 px-4 font-semibold uppercase">Investigation Parameter</th>
                    <th className="py-3 px-4 font-semibold uppercase text-right">Observed Value</th>
                    <th className="py-3 px-4 font-semibold uppercase">Unit</th>
                    <th className="py-3 px-4 font-semibold uppercase">Biological Reference Interval</th>
                    <th className="py-3 px-4 font-semibold uppercase text-center">Status Flag</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-mono">
                  {labResults.map((r, i) => (
                    <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                      <td className="py-3 px-4 font-medium text-slate-900 dark:text-white font-sans">
                        {r.test}
                      </td>
                      <td className="py-3 px-4 text-right font-bold text-sm text-slate-900 dark:text-white tabular-nums">
                        {r.value}
                      </td>
                      <td className="py-3 px-4 text-slate-500 dark:text-slate-400">{r.unit}</td>
                      <td className="py-3 px-4 text-slate-600 dark:text-slate-300">{r.range}</td>
                      <td className="py-3 px-4 text-center">
                        {r.status === "optimal" && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-teal-600 dark:text-teal-400">
                            <CheckCircle className="w-3.5 h-3.5" />
                            <span>Optimal</span>
                          </span>
                        )}
                        {r.status === "normal" && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-600 dark:text-slate-300">
                            <span>Normal</span>
                          </span>
                        )}
                        {r.status === "attention" && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-600 dark:text-amber-400">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>Borderline</span>
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table Footer with Digital Signatures */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-3">
                <QrCode className="w-10 h-10 text-slate-700 dark:text-slate-300 shrink-0" />
                <div className="text-[11px] text-slate-500 font-mono">
                  <div>Digital Signoff Hash: SHA256:4a8b...99e1</div>
                  <div>Report authenticated on blockchain healthcare registry</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 bg-[#0B2545] hover:bg-[#081B33] text-white text-xs font-semibold rounded-lg flex items-center gap-2 shadow-sm"
                >
                  <Printer className="w-3.5 h-3.5 text-teal-400" />
                  <span>Print Clinical Report</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
