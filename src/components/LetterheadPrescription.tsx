import React, { useState } from "react";
import { BrandLogoSvg, BrandEmblemSvg } from "./BrandLogoSvg";
import { Printer, CheckSquare, Square, QrCode, FileText, Sparkles, ShieldCheck } from "lucide-react";
import { SAMPLE_DOCTORS } from "../data/brandData";

export const LetterheadPrescription: React.FC = () => {
  const [activeDoctor, setActiveDoctor] = useState(SAMPLE_DOCTORS[0]);
  const [patientName, setPatientName] = useState("Mr. Rajesh Sharma");
  const [patientAgeGender, setPatientAgeGender] = useState("48 Y / Male");
  const [refId, setRefId] = useState("MOTI-2026-98124");
  const [selectedTests, setSelectedTests] = useState<string[]>([
    "Complete Blood Count (CBC) with Automated Differential",
    "Lipid Profile & Cardiac Risk Panel",
    "Fasting Plasma Glucose & Glycated HbA1c",
    "3.0 Tesla MRI Spine & Contrast",
  ]);

  const allAvailableTests = [
    "Complete Blood Count (CBC) with Automated Differential",
    "Lipid Profile & Cardiac Risk Panel",
    "Fasting Plasma Glucose & Glycated HbA1c",
    "Liver & Renal Function Extended Panel (LFT + KFT)",
    "Thyroid Profile Total & Ultra-Sensitive TSH",
    "Vitamin D3 (25-OH) & Vitamin B12 Electro-chemiluminescence",
    "3.0 Tesla MRI Spine & Contrast",
    "128-Slice Low-Dose CT Pulmonary Angiography",
    "Next-Gen Genomic Hereditary Oncology Screen",
    "High-Resolution 4D Doppler Abdominal Sonography",
  ];

  const toggleTest = (test: string) => {
    if (selectedTests.includes(test)) {
      setSelectedTests(selectedTests.filter((t) => t !== test));
    } else {
      setSelectedTests([...selectedTests, test]);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="letterhead-rx" className="py-12 md:py-16 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-semibold tracking-wider uppercase text-teal-600 dark:text-teal-400 mb-1">
              Deliverable 05 · Clinical Stationery &amp; Legal Documentation
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Letterhead &amp; Prescription Pad
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
              Official institutional medical stationery featuring anti-counterfeit micro-line borders,
              authentic Rx symbols, structured patient vitals, and cryptographic QR verification.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 bg-[#0B2545] hover:bg-[#081B33] text-white text-xs font-semibold rounded-lg shadow-sm transition-all"
            >
              <Printer className="w-4 h-4 text-teal-400" />
              <span>Print Pad / Save PDF (A4 Sheet)</span>
            </button>
          </div>
        </div>

        {/* Prescription Pad Container (A4 Proportions) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Printable Letterhead Document (8 Cols) */}
          <div className="lg:col-span-8 bg-white text-slate-900 rounded-2xl border border-slate-300 shadow-2xl p-6 sm:p-10 relative overflow-hidden print:border-none print:shadow-none print:p-0">
            {/* Subtle Anti-Counterfeit Background Security Watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.035] pointer-events-none select-none">
              <BrandEmblemSvg sizePx={380} theme="monochrome-dark" />
            </div>

            {/* Micro-line Geometric Security Border */}
            <div className="border border-slate-200/90 rounded-xl p-5 sm:p-6 relative">
              {/* Header: Brand Identity & Accreditations */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between pb-4 border-b-2 border-[#0B2545] gap-4">
                <div>
                  <BrandLogoSvg size="md" theme="full-color-light" showTagline={false} />
                  <div className="text-[11px] text-slate-500 font-medium mt-1.5">
                    Horizon Health Boulevard, Tower 4, Suite 100 · Metro District
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono">
                    Toll-Free: 1800 200 6684 · reports@motidiagnostics.com
                  </div>
                </div>

                <div className="text-right sm:text-right">
                  <div className="text-xs font-bold text-[#0B2545] uppercase">
                    Department of Advanced Clinical Diagnostics
                  </div>
                  <div className="text-xs font-semibold text-teal-700 mt-0.5">
                    {activeDoctor.name}
                  </div>
                  <div className="text-[11px] text-slate-600 font-medium">
                    {activeDoctor.degrees}
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                    Reg. No: {activeDoctor.regNo}
                  </div>
                </div>
              </div>

              {/* Patient Vitals & UHID Bar */}
              <div className="my-4 p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase">Patient Name:</span>
                  <span className="font-bold text-slate-900">{patientName}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase">Age / Gender:</span>
                  <span className="font-bold text-slate-900">{patientAgeGender}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase">Lab Ref / UHID:</span>
                  <span className="font-bold text-teal-700">{refId}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase">Prescription Date:</span>
                  <span className="font-bold text-slate-900">12 Nov 2026 · 09:30 AM</span>
                </div>
              </div>

              {/* Clinical Rx Symbol & Prescription Body */}
              <div className="min-h-[380px] flex flex-col justify-between py-2">
                <div>
                  {/* Classical Rx Glyphic Symbol */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-3xl font-display font-extrabold text-[#0B2545] italic">
                      &#8478;
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Diagnostic Investigation Request &amp; Clinical Orders
                    </span>
                  </div>

                  {/* Diagnostic Test Checklist Ordered */}
                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-bold text-slate-800 uppercase tracking-wide border-b border-slate-100 pb-1">
                      Ordered Investigations:
                    </div>
                    {selectedTests.length === 0 ? (
                      <div className="text-xs text-slate-400 italic py-4">
                        No tests selected. Check items on the right panel to populate.
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {selectedTests.map((t, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 p-1.5 rounded bg-teal-50/60 border border-teal-100 text-slate-800 font-medium"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                            <span>{t}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Doctor Clinical Notes Lines */}
                  <div className="space-y-4 pt-2">
                    <div className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                      Clinical Notes / Fasting Instructions:
                    </div>
                    <div className="border-b border-dashed border-slate-300 pb-1 text-xs text-slate-700">
                      &bull; Patient requires 10-12 hours mandatory overnight fasting for lipid &amp; glucose evaluation.
                    </div>
                    <div className="border-b border-dashed border-slate-300 pb-1 text-xs text-slate-700">
                      &bull; In vivo MRI contrast screening checklist completed; normal serum creatinine confirmed.
                    </div>
                    <div className="border-b border-dashed border-slate-300 pb-1 text-xs text-slate-400">
                      &bull; Digital reports will be encrypted and dispatched via WhatsApp and secure patient portal.
                    </div>
                  </div>
                </div>

                {/* Footer: Digital Signature & Tamper-Proof Cryptographic Barcode */}
                <div className="pt-6 border-t border-slate-200 mt-6 flex flex-col sm:flex-row items-end justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 bg-slate-900 rounded-md text-white">
                      <QrCode className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono">
                      <div>AUTH-KEY: 9B4F-2026-MOTI-SEC</div>
                      <div>Scan to verify digital clinical authenticity</div>
                      <div className="text-teal-700 font-bold">NABL &amp; ISO 15189 Validated</div>
                    </div>
                  </div>

                  <div className="text-center sm:text-right">
                    {/* Simulated Stylized Digital Sign */}
                    <div className="font-serif italic text-lg text-[#0B2545] font-bold select-none pr-2">
                      Dr. A. Vardhan
                    </div>
                    <div className="w-44 border-t border-slate-400 mt-1" />
                    <div className="text-[11px] font-bold text-slate-900 mt-0.5">
                      Authorized Medical Signatory
                    </div>
                    <div className="text-[10px] text-slate-400">
                      MOTi DIAGNOSTICS CENTRE
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Test Order Configurator (4 Cols) */}
          <div className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
              Stationery &amp; Test Configurator
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
              Select doctor credentials and check off clinical tests to simulate live prescription generation.
            </p>

            {/* Consultant Selector */}
            <div className="mb-4">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                Signing Consultant:
              </label>
              <select
                value={activeDoctor.id}
                onChange={(e) => {
                  const doc = SAMPLE_DOCTORS.find((d) => d.id === e.target.value);
                  if (doc) setActiveDoctor(doc);
                }}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              >
                {SAMPLE_DOCTORS.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.name} ({d.degrees})
                  </option>
                ))}
              </select>
            </div>

            {/* Patient Name */}
            <div className="mb-4">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                Patient Full Name:
              </label>
              <input
                type="text"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>

            {/* Test Checklist */}
            <div className="mb-6">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-2">
                Order Diagnostic Tests:
              </label>
              <div className="space-y-1.5 max-h-60 overflow-y-auto pr-1">
                {allAvailableTests.map((test, idx) => {
                  const isChecked = selectedTests.includes(test);
                  return (
                    <button
                      key={idx}
                      onClick={() => toggleTest(test)}
                      className={`w-full flex items-center gap-2 p-2 rounded-lg text-left text-xs transition-colors border ${
                        isChecked
                          ? "bg-teal-50 dark:bg-teal-950/40 border-teal-500 text-teal-900 dark:text-teal-200 font-semibold"
                          : "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400"
                      }`}
                    >
                      {isChecked ? (
                        <CheckSquare className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                      ) : (
                        <Square className="w-4 h-4 text-slate-400 shrink-0" />
                      )}
                      <span className="truncate">{test}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-teal-500 shrink-0" />
              <span>Certified ISO 15189 legal evidence format for international clinical trials.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
