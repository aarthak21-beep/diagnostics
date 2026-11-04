import React, { useState } from "react";
import { BrandLogoSvg } from "./BrandLogoSvg";
import { QrCode, UserCheck, Clock, MapPin, Compass, Sparkles, Building2, ChevronRight } from "lucide-react";

export const ReceptionInterior: React.FC = () => {
  const [kioskStep, setKioskStep] = useState<"welcome" | "registered" | "wayfinding">("welcome");
  const [patientId, setPatientId] = useState<string>("MOTI-8941");
  const [tokenNo, setTokenNo] = useState<number>(104);

  const handleSimulateCheckIn = () => {
    setKioskStep("registered");
  };

  return (
    <section id="reception-interior" className="py-12 md:py-16 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-semibold tracking-wider uppercase text-teal-600 dark:text-teal-400 mb-1">
              Deliverable 03 · Patient Experience &amp; Spatial Ambiance
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Modern Reception &amp; Interior Branding
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
              A serene, world-class 2026 healthcare hospitality environment fusing Italian Calacatta marble,
              fluted privacy glass, and a monumental illuminated 3D acoustic feature wall.
            </p>
          </div>
        </div>

        {/* Interior Render & Digital Kiosk Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Main Reception Photo Showcase (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-slate-950 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl group">
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <img
                src="/src/assets/images/moti_reception_interior_1793794893555.jpg"
                alt="MOTi DIAGNOSTICS CENTRE Futuristic Reception Lobby and 3D Backlit Wall Logo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <div className="bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/10 text-xs">
                  <span className="text-teal-400 font-semibold">Architectural Feature:</span> Midnight Royal 3D Wall
                </div>
                <div className="text-[11px] font-mono text-slate-300 hidden sm:block">
                  Acoustic NRC 0.85 · Zero Echo Design
                </div>
              </div>
            </div>

            {/* Interior Material Palette Bar */}
            <div className="p-4 sm:p-5 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
              <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                Architectural Material Specifications
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
                  <div className="text-xs font-bold text-slate-900 dark:text-white">Calacatta Terrazzo</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">High-gloss anti-microbial floor</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
                  <div className="text-xs font-bold text-slate-900 dark:text-white">Fluted Privacy Glass</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Sound-dampening acoustic desk</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
                  <div className="text-xs font-bold text-slate-900 dark:text-white">Titanium 3D Wall Mark</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Soft teal halo backlighting</div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Self-Service Patient Kiosk (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm justify-between">
            <div>
              {/* Kiosk Bezel Header */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300">
                    Smart Touch Kiosk UI · Terminal #02
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">Sync: Realtime</span>
              </div>

              {/* Kiosk Screen Simulated Interface */}
              <div className="p-5 bg-gradient-to-b from-[#0B2545] to-[#081B33] rounded-xl text-white shadow-inner border border-teal-500/20">
                <div className="flex items-center justify-between mb-4">
                  <BrandLogoSvg size="sm" theme="monochrome-white" />
                  <div className="text-right">
                    <div className="text-[11px] font-mono text-teal-300">Queue Status</div>
                    <div className="text-xs font-bold text-white">Wait Time: 4 Mins</div>
                  </div>
                </div>

                {kioskStep === "welcome" && (
                  <div className="space-y-4">
                    <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-lg border border-white/10">
                      <div className="text-xs font-medium text-teal-200">Welcome to MOTi Diagnostics</div>
                      <div className="text-sm font-bold text-white mt-0.5">Fast Patient Check-In</div>
                      <p className="text-[11px] text-slate-300 mt-1">
                        Scan your appointment QR code or enter your 10-digit registered mobile number.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-medium text-slate-300 block">
                        Registered Mobile Number / Booking ID:
                      </label>
                      <input
                        type="text"
                        defaultValue="+91 98200 12345"
                        className="w-full px-3 py-2 bg-white/15 border border-white/20 rounded-lg text-white text-xs font-mono focus:outline-none focus:ring-1 focus:ring-teal-400"
                      />
                    </div>

                    <button
                      onClick={handleSimulateCheckIn}
                      className="w-full py-2.5 px-4 bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-300 hover:to-cyan-400 text-slate-950 font-bold text-xs rounded-lg transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <UserCheck className="w-4 h-4" />
                      <span>Confirm Arrival &amp; Generate Token</span>
                    </button>
                  </div>
                )}

                {kioskStep === "registered" && (
                  <div className="space-y-4">
                    <div className="bg-teal-500/20 border border-teal-400/40 p-4 rounded-lg text-center">
                      <div className="text-xs text-teal-300 font-semibold uppercase tracking-wider">
                        Check-in Confirmed
                      </div>
                      <div className="text-3xl font-display font-extrabold text-white mt-1">
                        TOKEN #{tokenNo}
                      </div>
                      <div className="text-xs text-teal-100 mt-1 font-mono">
                        Patient ID: {patientId} · MR. ARUN KAPOOR
                      </div>
                    </div>

                    <div className="bg-white/10 p-3 rounded-lg text-xs space-y-1.5">
                      <div className="flex justify-between text-slate-300">
                        <span>Assigned Station:</span>
                        <span className="font-bold text-white">Phlebotomy Suite 3 (1st Floor)</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>Scheduled Tests:</span>
                        <span className="font-bold text-teal-300">CBC + Fasting Lipid + HbA1c</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>Estimated Call Time:</span>
                        <span className="font-bold text-white">08:42 AM (in 3 mins)</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => setKioskStep("wayfinding")}
                        className="flex-1 py-2 px-3 bg-white/20 hover:bg-white/30 text-white font-medium text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5"
                      >
                        <Compass className="w-3.5 h-3.5 text-teal-300" />
                        <span>Interactive Clinic Map</span>
                      </button>

                      <button
                        onClick={() => {
                          setTokenNo((prev) => prev + 1);
                          setKioskStep("welcome");
                        }}
                        className="py-2 px-3 bg-white/10 hover:bg-white/15 text-slate-300 text-xs rounded-lg"
                      >
                        Reset
                      </button>
                    </div>
                  </div>
                )}

                {kioskStep === "wayfinding" && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-teal-300">Centre Wayfinding Directory</span>
                      <button
                        onClick={() => setKioskStep("registered")}
                        className="text-[11px] text-slate-400 hover:text-white underline"
                      >
                        Back to Token
                      </button>
                    </div>

                    <div className="space-y-2 text-xs">
                      {[
                        { wing: "Wing A · Ground Floor", name: "3T MRI & 128 CT Diagnostic Suites", icon: "MRI" },
                        { wing: "Wing B · Ground Floor", name: "Executive Health Check Lounge & Ultrasound", icon: "USG" },
                        { wing: "Wing C · 1st Floor", name: "Molecular Pathology & Phlebotomy Suites", icon: "LAB" },
                        { wing: "Wing D · 1st Floor", name: "Senior Doctor Consultation & Counseling", icon: "DR" },
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="p-2.5 bg-white/10 rounded-lg flex items-center justify-between border border-white/5"
                        >
                          <div>
                            <div className="text-white font-semibold">{item.name}</div>
                            <div className="text-[10px] text-teal-200">{item.wing}</div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-400" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Reception Wayfinding Guidance Notice */}
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-teal-500 shrink-0" />
              <span>Complies with ADA Accessibility &amp; Hospital Infection Control standards.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
