import React, { useState } from "react";
import { BrandLogoSvg, BrandEmblemSvg } from "./BrandLogoSvg";
import { Rotate3d, Shield, QrCode, Sparkles, CheckCircle2, User, Award, Radio } from "lucide-react";

interface StaffMember {
  id: string;
  name: string;
  role: string;
  department: string;
  bloodGroup: string;
  badgeId: string;
  expiry: string;
  colorBand: string;
}

export const StaffIdUniform: React.FC = () => {
  const [selectedStaffIndex, setSelectedStaffIndex] = useState<number>(0);
  const [isBadgeFlipped, setIsBadgeFlipped] = useState<boolean>(false);

  const staffMembers: StaffMember[] = [
    {
      id: "staff-1",
      name: "Dr. Sarah J. Reed",
      role: "Senior Lab Technologist",
      department: "Molecular Genetics & NGS",
      bloodGroup: "O+",
      badgeId: "MOTI-EMP-45091",
      expiry: "12/2028",
      colorBand: "bg-teal-500",
    },
    {
      id: "staff-2",
      name: "Dr. Alok Vardhan",
      role: "Chief Pathologist & Director",
      department: "Clinical Pathology & Bio-Chem",
      bloodGroup: "B+",
      badgeId: "MOTI-EMP-10024",
      expiry: "12/2028",
      colorBand: "bg-blue-600",
    },
    {
      id: "staff-3",
      name: "Karan Singhania",
      role: "Lead Phlebotomy Specialist",
      department: "Express Home Care & STAT",
      bloodGroup: "A+",
      badgeId: "MOTI-EMP-88320",
      expiry: "08/2027",
      colorBand: "bg-cyan-500",
    },
  ];

  const currentStaff = staffMembers[selectedStaffIndex];

  return (
    <section id="staff-uniform" className="py-12 md:py-16 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-semibold tracking-wider uppercase text-teal-600 dark:text-teal-400 mb-1">
              Deliverable 09 · Corporate Apparel &amp; Security Badges
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Staff ID Card &amp; Uniform Branding
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
              Professional identity system uniting antimicrobial clinical scrubs, embroidered physician lab coats,
              and contactless encrypted RFID smart access credentials.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsBadgeFlipped(!isBadgeFlipped)}
              className="flex items-center gap-2 px-4 py-2 bg-[#0B2545] hover:bg-[#081B33] text-white text-xs font-semibold rounded-lg shadow-sm transition-all"
            >
              <Rotate3d className="w-4 h-4 text-teal-400" />
              <span>Flip ID Badge ({isBadgeFlipped ? "Viewing Back" : "Viewing Front"})</span>
            </button>
          </div>
        </div>

        {/* Studio Photo & Interactive Badge Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Photorealistic Apparel Photo (6 Cols) */}
          <div className="lg:col-span-6 bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-xl group">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <img
                src="/src/assets/images/moti_uniform_staff_id_1793794894408.jpg"
                alt="MOTi DIAGNOSTICS CENTRE Uniform Scrubs, Doctor Coat and Lanyard ID Badge"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <div className="bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/10 text-xs">
                  <span className="text-teal-400 font-semibold">Standard:</span> Antimicrobial Thread Embroidery
                </div>
                <div className="text-[11px] font-mono text-slate-300 hidden sm:block">
                  20mm Jacquard Lanyard
                </div>
              </div>
            </div>

            {/* Apparel Specs Strip */}
            <div className="p-5 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 space-y-2">
              <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Clinical Apparel Standards
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs text-slate-600 dark:text-slate-400">
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
                  <span className="font-semibold text-slate-900 dark:text-white block">Navy Blue Scrub Suit</span>
                  <span className="text-[11px]">4-way stretch with fluid-repellent Teflon finish</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
                  <span className="font-semibold text-slate-900 dark:text-white block">Physician Lab Coat</span>
                  <span className="text-[11px]">Breathable twill with silver-ion sanitize coating</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive 3D Staff Smart Badge (6 Cols) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center p-6 sm:p-10 bg-slate-950 rounded-2xl border border-slate-800 shadow-xl relative overflow-hidden">
            {/* Lanyard Attachment Graphic */}
            <div className="w-8 h-12 bg-gradient-to-b from-[#0B2545] to-slate-900 rounded-t-md border-t-2 border-teal-400 flex flex-col items-center justify-end pb-1 shadow-md mb-2">
              <div className="w-3 h-3 rounded-full border border-teal-400/80 bg-slate-800" />
            </div>

            {/* 3D Flip Badge Container */}
            <div
              className="perspective-1000 w-full max-w-[320px] aspect-[1/1.55] cursor-pointer group"
              onClick={() => setIsBadgeFlipped(!isBadgeFlipped)}
            >
              <div
                className={`relative w-full h-full duration-700 transform-style-3d transition-transform ${
                  isBadgeFlipped ? "rotate-y-180" : ""
                }`}
              >
                {/* ================= BADGE FRONT ================= */}
                <div className="absolute inset-0 w-full h-full rounded-2xl backface-hidden p-6 bg-white text-slate-900 shadow-2xl border border-slate-200 flex flex-col justify-between">
                  {/* Top Security & Logo */}
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <BrandLogoSvg size="sm" theme="full-color-light" />
                      <div className="flex items-center gap-1 text-[10px] font-mono text-teal-700 font-bold">
                        <Radio className="w-3 h-3 text-teal-500 animate-pulse" />
                        <span>NFC</span>
                      </div>
                    </div>

                    {/* Department Color Band */}
                    <div className={`h-1.5 w-full ${currentStaff.colorBand} rounded-full mt-2`} />
                  </div>

                  {/* Staff Photo & Credentials */}
                  <div className="text-center py-2">
                    <div className="relative inline-block mx-auto mb-3">
                      <div className="w-24 h-28 rounded-xl bg-slate-100 border-2 border-teal-500/40 p-1 flex items-center justify-center shadow-md overflow-hidden">
                        <User className="w-16 h-16 text-slate-400" />
                      </div>
                      {/* Holographic Seal on Photo corner */}
                      <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full bg-gradient-to-tr from-teal-400 to-blue-500 border border-white flex items-center justify-center shadow">
                        <Sparkles className="w-3.5 h-3.5 text-white" />
                      </div>
                    </div>

                    <h4 className="text-base font-bold text-slate-900">{currentStaff.name}</h4>
                    <div className="text-xs font-semibold text-teal-700">{currentStaff.role}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{currentStaff.department}</div>
                  </div>

                  {/* ID Meta & Barcode */}
                  <div className="pt-3 border-t border-slate-100">
                    <div className="flex justify-between text-[11px] font-mono text-slate-500 mb-2">
                      <span>ID: {currentStaff.badgeId}</span>
                      <span>EXP: {currentStaff.expiry}</span>
                    </div>

                    {/* Barcode Graphic */}
                    <div className="h-7 w-full bg-slate-900 rounded p-1 flex items-center justify-center">
                      <div className="w-full h-full bg-white flex items-center justify-around px-2">
                        {[4, 2, 6, 1, 3, 5, 2, 4, 1, 6, 3, 2, 5, 1, 4, 2, 6, 3, 5].map((w, i) => (
                          <div key={i} className="bg-slate-900 h-full" style={{ width: `${w * 1.5}px` }} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* ================= BADGE BACK ================= */}
                <div className="absolute inset-0 w-full h-full rounded-2xl backface-hidden rotate-y-180 p-6 bg-[#081B33] text-white shadow-2xl border border-teal-500/30 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-2">
                      Official Security Credential
                    </div>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      This smart badge remains the property of MOTi DIAGNOSTICS CENTRE. Authorization permits
                      access to designated clinical chambers and robotic pathology suites.
                    </p>
                  </div>

                  {/* Blood Group & Emergency Info */}
                  <div className="p-3 rounded-lg bg-white/10 text-xs font-mono space-y-1">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Emergency Blood:</span>
                      <span className="font-bold text-teal-300">{currentStaff.bloodGroup}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Emergency Desk:</span>
                      <span className="font-bold text-white">+91 1800 200 6684</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Security Clearance:</span>
                      <span className="font-bold text-teal-300">Level 4 · Biomarker</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/10 text-[10px] text-slate-400 font-mono">
                    <div className="flex items-center gap-2">
                      <QrCode className="w-8 h-8 text-white" />
                      <span>Scan to Verify Staff Credentials</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Staff Selector */}
            <div className="flex items-center gap-2 mt-6">
              {staffMembers.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedStaffIndex(idx)}
                  className={`px-3 py-1.5 text-xs rounded-lg transition-all ${
                    selectedStaffIndex === idx
                      ? "bg-teal-500 text-slate-950 font-bold shadow-sm"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  }`}
                >
                  {s.name.split(" ")[1]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
