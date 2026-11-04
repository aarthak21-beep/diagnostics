import React, { useState } from "react";
import { Sun, Sunset, Moon, Info, CheckCircle2, Shield, Sparkles } from "lucide-react";

type LightingMode = "day" | "dusk" | "midnight";

export const ExteriorSignboard: React.FC = () => {
  const [lightingMode, setLightingMode] = useState<LightingMode>("dusk");
  const [activeSpecTab, setActiveSpecTab] = useState<"fabrication" | "illumination" | "installation">("fabrication");

  // Lighting overlay styles
  const lightingEffects = {
    day: {
      filter: "brightness(1.05) contrast(1.02) saturate(1.05)",
      bgLabel: "Daylight Natural Visibility (12:00 PM)",
      signGlow: "shadow-none",
      taglineGlow: "text-slate-800",
    },
    dusk: {
      filter: "brightness(0.95) contrast(1.1) saturate(1.15)",
      bgLabel: "Twilight Golden Hour & Ambient Activation (7:30 PM)",
      signGlow: "drop-shadow-[0_0_25px_rgba(0,180,216,0.85)]",
      taglineGlow: "text-cyan-300 drop-shadow-[0_0_12px_rgba(72,202,228,0.9)]",
    },
    midnight: {
      filter: "brightness(0.82) contrast(1.2) hue-rotate(-5deg)",
      bgLabel: "Midnight Ultra-Vibrant LED Radiance (11:00 PM)",
      signGlow: "drop-shadow-[0_0_40px_rgba(0,180,216,1)] drop-shadow-[0_0_15px_rgba(255,255,255,0.9)]",
      taglineGlow: "text-cyan-200 drop-shadow-[0_0_20px_rgba(6,214,160,1)]",
    },
  };

  const currentLighting = lightingEffects[lightingMode];

  return (
    <section id="exterior-signboard" className="py-12 md:py-16 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-semibold tracking-wider uppercase text-teal-600 dark:text-teal-400 mb-1">
              Deliverable 02 · Architectural Facade Presence
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Luxury 3D Clinic Exterior Signboard
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
              Engineered with monumental dimensional channel letters, dual-temperature LED halo backlighting,
              and weather-resistant architectural materials for instant landmark recognition.
            </p>
          </div>

          {/* Day / Dusk / Midnight Switcher */}
          <div className="flex items-center gap-1.5 p-1 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm shrink-0">
            <span className="text-[11px] font-medium text-slate-400 px-2 hidden sm:inline">Lighting:</span>
            <button
              onClick={() => setLightingMode("day")}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                lightingMode === "day"
                  ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30 font-semibold shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
              <span>Daylight</span>
            </button>
            <button
              onClick={() => setLightingMode("dusk")}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                lightingMode === "dusk"
                  ? "bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/30 font-semibold shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
              }`}
            >
              <Sunset className="w-3.5 h-3.5" />
              <span>Dusk (Recommended)</span>
            </button>
            <button
              onClick={() => setLightingMode("midnight")}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                lightingMode === "midnight"
                  ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 font-semibold shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
              }`}
            >
              <Moon className="w-3.5 h-3.5" />
              <span>Midnight Glow</span>
            </button>
          </div>
        </div>

        {/* Photorealistic Signboard Hero Showcase */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-slate-950">
          {/* Main Architectural Exterior Image */}
          <div className="relative aspect-[16/9] w-full overflow-hidden transition-all duration-700">
            <img
              src="/src/assets/images/moti_exterior_signboard_1793794893488.jpg"
              alt="MOTi DIAGNOSTICS CENTRE Luxury 3D Exterior Signboard Facade"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-all duration-700"
              style={{ filter: currentLighting.filter }}
            />

            {/* Dimensional LED Glow Emulation Overlay */}
            <div
              className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${
                lightingMode === "day" ? "opacity-0" : lightingMode === "dusk" ? "opacity-60" : "opacity-90"
              }`}
              style={{
                background:
                  "radial-gradient(circle at 62% 35%, rgba(0, 180, 216, 0.45) 0%, rgba(11, 37, 69, 0.2) 30%, transparent 65%)",
              }}
            />

            {/* Interactive Engineering Hotspots */}
            <div className="absolute top-[32%] left-[58%] group cursor-pointer z-10">
              <div className="relative">
                <span className="flex h-6 w-6">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-6 w-6 bg-teal-500 text-slate-950 font-bold text-[10px] items-center justify-center shadow-lg">
                    1
                  </span>
                </span>
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-56 p-2.5 bg-slate-950/95 backdrop-blur-md rounded-lg text-white border border-teal-500/40 text-xs shadow-2xl pointer-events-none">
                  <div className="font-bold text-teal-400">3D Dimensional MOTi Channel Letters</div>
                  <div className="text-[11px] text-slate-300 mt-1">
                    1400mm letter height with 120mm fabricated returns and high-transmittance optical acrylic face.
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-[42%] left-[64%] group cursor-pointer z-10">
              <div className="relative">
                <span className="flex h-6 w-6">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-6 w-6 bg-cyan-400 text-slate-950 font-bold text-[10px] items-center justify-center shadow-lg">
                    2
                  </span>
                </span>
                {/* Tooltip */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block w-56 p-2.5 bg-slate-950/95 backdrop-blur-md rounded-lg text-white border border-cyan-400/40 text-xs shadow-2xl pointer-events-none">
                  <div className="font-bold text-cyan-300">DIAGNOSTICS CENTRE Subtitle</div>
                  <div className="text-[11px] text-slate-300 mt-1">
                    420mm height, CNC precision laser-cut aluminum with dual 480nm teal edge backlighting.
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-6 left-6 z-10">
              <div className="bg-slate-950/85 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10 text-white shadow-xl flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-teal-400">
                    Live Simulation State
                  </div>
                  <div className="text-[11px] text-slate-300">{currentLighting.bgLabel}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Engineering & Fabrication Specifications Tabs */}
        <div className="mt-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 gap-3">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Architectural Signage Engineering Standards
            </h3>

            {/* Spec Sub-Tabs */}
            <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
              <button
                onClick={() => setActiveSpecTab("fabrication")}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                  activeSpecTab === "fabrication"
                    ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
                }`}
              >
                Materials &amp; Structure
              </button>
              <button
                onClick={() => setActiveSpecTab("illumination")}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                  activeSpecTab === "illumination"
                    ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
                }`}
              >
                LED Illumination
              </button>
              <button
                onClick={() => setActiveSpecTab("installation")}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                  activeSpecTab === "installation"
                    ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
                }`}
              >
                Safety &amp; Compliance
              </button>
            </div>
          </div>

          <div className="mt-6">
            {activeSpecTab === "fabrication" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-slate-50 dark:bg-slate-950/50 rounded-xl border border-slate-100 dark:border-slate-800">
                  <div className="text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-1">
                    01. Face Panel Construction
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                    Cast Optical Grade Acrylic
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    6mm thick impact-resistant UV-stabilized cast acrylic face with 92% light diffusion rate.
                    Coated with anti-glare scratch protection to maintain pristine clinical gloss.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-950/50 rounded-xl border border-slate-100 dark:border-slate-800">
                  <div className="text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-1">
                    02. Dimensional Returns
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                    Marine Grade 316 Stainless Steel
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    120mm deep channel letter returns fabricated from 1.5mm brushed 316 stainless steel with
                    anodized Royal Blue (#0B2545) electro-deposition powder coating.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-950/50 rounded-xl border border-slate-100 dark:border-slate-800">
                  <div className="text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-1">
                    03. Mounting Substructure
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                    Floating Stand-Off Studs
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Letters mounted on 35mm concealed architectural stand-offs to permit 360° volumetric halo
                    light diffusion across the textured natural stone facade.
                  </p>
                </div>
              </div>
            )}

            {activeSpecTab === "illumination" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-slate-50 dark:bg-slate-950/50 rounded-xl border border-slate-100 dark:border-slate-800">
                  <div className="text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-1">
                    Front-Lit Face
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                    Samsung SMD 2835 6500K White
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    High CRI (&gt;90) clinical white diodes delivering 1,800 Lumens/sq.ft for razor-sharp day and night
                    legibility up to 850 meters distance.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-950/50 rounded-xl border border-slate-100 dark:border-slate-800">
                  <div className="text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-1">
                    Halo Backlight
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                    480nm Cyan-Teal Luminous Diode
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Signature secondary backlighting throwing an ethereal cyan-teal halo onto the building exterior,
                    reaffirming the futuristic 2026 medical identity.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-950/50 rounded-xl border border-slate-100 dark:border-slate-800">
                  <div className="text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-1">
                    Power &amp; Control
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                    Mean Well IP67 DALI-2 Driver
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Integrated astronomical timer and ambient photocell automatically ramping between day (100%),
                    dusk (80%), and night energy conservation modes (60%).
                  </p>
                </div>
              </div>
            )}

            {activeSpecTab === "installation" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-slate-50 dark:bg-slate-950/50 rounded-xl border border-slate-100 dark:border-slate-800">
                  <div className="text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-1">
                    Ingress Protection
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                    IP68 Weather Sealed
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Hermetically sealed modules resistant to monsoon rain, saline coastal air, and extreme thermal
                    swings from -15°C to +55°C.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-950/50 rounded-xl border border-slate-100 dark:border-slate-800">
                  <div className="text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-1">
                    Wind Load Rating
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                    Category 4 Hurricane Tested
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Engineered to withstand gust velocities up to 160 km/h with stainless Hilti anchor bolts
                    embedded directly into reinforced structural concrete.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-950/50 rounded-xl border border-slate-100 dark:border-slate-800">
                  <div className="text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-1">
                    Warranty &amp; Service
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                    10-Year Structural / 5-Yr LED
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Zero-maintenance brushless power modules with remote IoT telemetry diagnosing diode health
                    and operating temperatures.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
