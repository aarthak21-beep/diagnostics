import React, { useState } from "react";
import { BrandLogoSvg, BrandEmblemSvg } from "./BrandLogoSvg";
import { CheckCircle2, MessageCircle, Instagram, Phone, Clock, MapPin, Grid, Bookmark, User, Share2, Sparkles } from "lucide-react";

type ProfileTab = "instagram" | "whatsapp" | "avatars";

export const ProfileBranding: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ProfileTab>("instagram");
  const [selectedAvatarTheme, setSelectedAvatarTheme] = useState<"royal" | "teal" | "ceramic" | "midnight">("royal");

  const highlightStories = [
    { title: "3T MRI & CT", icon: "MRI" },
    { title: "Health Plans", icon: "PACK" },
    { title: "Home Blood", icon: "HOME" },
    { title: "Our Doctors", icon: "DOC" },
    { title: "ISO Certified", icon: "CERT" },
    { title: "Test Prep", icon: "PREP" },
  ];

  const instagramPosts = [
    { title: "3.0 Tesla Silent MRI", sub: "Wide 70cm Bore Comfort", type: "Radiology" },
    { title: "128-Slice Low Dose CT", sub: "Cardiac Angio in 4 Secs", type: "Cardio" },
    { title: "Robotic Immunoassay", sub: "Zero Contamination Closed Track", type: "Pathology" },
    { title: "Genomic Oncology Panel", sub: "104 Hereditary Cancer Genes", type: "Genomics" },
    { title: "Complimentary Home Care", sub: "NABL Vaccutainer Phlebotomy", type: "Service" },
    { title: "Executive Health Suite", sub: "VIP Private Waiting Lounge", type: "Facility" },
  ];

  return (
    <section id="profile-branding" className="py-12 md:py-16 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-semibold tracking-wider uppercase text-teal-600 dark:text-teal-400 mb-1">
              Deliverable 07 · Digital Footprint &amp; Social Authority
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Instagram &amp; WhatsApp Business Profile
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
              Cohesive digital profile ecosystems tailored for high patient conversion, verified credibility badges,
              and seamless appointment booking.
            </p>
          </div>

          {/* Profile Switcher Tabs */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg shrink-0">
            <button
              onClick={() => setActiveTab("instagram")}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeTab === "instagram"
                  ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
              }`}
            >
              <Instagram className="w-3.5 h-3.5 text-pink-500" />
              <span>Instagram Profile</span>
            </button>
            <button
              onClick={() => setActiveTab("whatsapp")}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeTab === "whatsapp"
                  ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
              }`}
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
              <span>WhatsApp Business</span>
            </button>
            <button
              onClick={() => setActiveTab("avatars")}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeTab === "avatars"
                  ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-teal-400" />
              <span>1:1 Avatar Kit</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Instagram Profile Mockup */}
        {activeTab === "instagram" && (
          <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
            {/* Instagram Mobile App Header */}
            <div className="px-5 py-3 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="font-semibold text-sm text-slate-900 dark:text-white flex items-center gap-1">
                motidiagnostics
                <CheckCircle2 className="w-4 h-4 fill-sky-500 text-white" />
              </span>
              <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                <Share2 className="w-4 h-4" />
              </div>
            </div>

            {/* Profile Bio Section */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                {/* Profile Picture with Story Ring */}
                <div className="relative p-1 rounded-full bg-gradient-to-tr from-teal-400 via-blue-600 to-indigo-600">
                  <div className="w-20 h-20 rounded-full bg-[#0B2545] flex items-center justify-center p-2 border-2 border-white dark:border-slate-900">
                    <BrandEmblemSvg sizePx={56} theme="full-color-dark" />
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-6 sm:gap-8 text-center">
                  <div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">142</div>
                    <div className="text-[11px] text-slate-500">Posts</div>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">28.4K</div>
                    <div className="text-[11px] text-slate-500">Followers</div>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">18</div>
                    <div className="text-[11px] text-slate-500">Following</div>
                  </div>
                </div>
              </div>

              {/* Bio Text */}
              <div className="space-y-1 text-xs">
                <div className="font-bold text-slate-900 dark:text-white text-sm">
                  MOTi DIAGNOSTICS CENTRE
                </div>
                <div className="text-slate-500 dark:text-slate-400">Medical Laboratory &amp; Diagnostic Centre</div>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed pt-1">
                  &bull; World-Class Diagnostic Excellence &middot; 2026 Innovation<br />
                  &bull; 3.0T Silent MRI &middot; 128-Slice Low-Dose CT &middot; Robotic Pathology<br />
                  &bull; Free Home Blood Sample Collection across Metro<br />
                  &bull; ISO 15189:2022 &middot; NABL &middot; CAP Certified
                </p>
                <div className="text-teal-600 dark:text-teal-400 font-medium pt-1">
                  linktr.ee/motidiagnostics
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2 mt-4">
                <button className="py-1.5 px-3 bg-[#0B2545] hover:bg-[#081B33] text-white text-xs font-semibold rounded-lg transition-colors text-center">
                  Book Diagnostic Test
                </button>
                <button className="py-1.5 px-3 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold rounded-lg transition-colors text-center">
                  Contact Helpline
                </button>
              </div>

              {/* Story Highlights Circles */}
              <div className="flex items-center gap-4 overflow-x-auto py-5 border-b border-slate-100 dark:border-slate-800">
                {highlightStories.map((story, i) => (
                  <div key={i} className="flex flex-col items-center gap-1 shrink-0">
                    <div className="w-14 h-14 rounded-full p-0.5 border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-[#081B33] flex items-center justify-center text-[10px] font-mono font-bold text-teal-300">
                        {story.icon}
                      </div>
                    </div>
                    <span className="text-[10px] text-slate-600 dark:text-slate-400 whitespace-nowrap">
                      {story.title}
                    </span>
                  </div>
                ))}
              </div>

              {/* 3x3 Photo Feed Grid */}
              <div className="pt-3">
                <div className="flex items-center justify-center py-2 text-xs font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 mb-3 gap-1">
                  <Grid className="w-3.5 h-3.5 text-teal-500" />
                  <span>Curated Clinical Feed</span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {instagramPosts.map((post, idx) => (
                    <div
                      key={idx}
                      className="aspect-square rounded-lg bg-gradient-to-br from-[#0B2545] to-[#040D1A] p-2.5 flex flex-col justify-between text-white border border-teal-500/20 group hover:border-teal-400 transition-colors"
                    >
                      <span className="text-[9px] font-mono text-teal-300 uppercase tracking-wider">
                        {post.type}
                      </span>
                      <div>
                        <div className="text-[11px] font-bold leading-tight">{post.title}</div>
                        <div className="text-[9px] text-slate-300 line-clamp-1">{post.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: WhatsApp Business Profile Mockup */}
        {activeTab === "whatsapp" && (
          <div className="max-w-md mx-auto bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
            {/* WhatsApp App Green Bar */}
            <div className="bg-[#075E54] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-emerald-300" />
                <span className="text-sm font-semibold">WhatsApp Business Info</span>
              </div>
              <span className="text-xs bg-emerald-700/60 px-2 py-0.5 rounded text-emerald-200 font-mono">
                Official Account
              </span>
            </div>

            <div className="p-6">
              {/* Profile Avatar & Verified Title */}
              <div className="text-center pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="w-24 h-24 mx-auto rounded-full bg-[#0B2545] border-4 border-slate-100 dark:border-slate-800 flex items-center justify-center shadow-lg mb-3">
                  <BrandEmblemSvg sizePx={64} theme="full-color-dark" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center justify-center gap-1.5">
                  MOTi DIAGNOSTICS CENTRE
                  <CheckCircle2 className="w-4 h-4 fill-emerald-500 text-white" />
                </h3>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Official Medical Diagnostic Laboratory
                </div>
                <div className="text-xs font-mono text-teal-600 dark:text-teal-400 mt-1">
                  +91 1800 200 6684
                </div>
              </div>

              {/* Business Details */}
              <div className="py-4 space-y-3 text-xs border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                  <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">Facility Address</div>
                    <div>Tower 4, Horizon Health Boulevard, Metro District</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                  <Clock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">Working Hours</div>
                    <div>Open 24/7 for Emergency MRI, CT &amp; STAT Pathology</div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Catalog Showcase */}
              <div className="pt-4">
                <div className="text-xs font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-wide">
                  Official Test Catalog
                </div>

                <div className="space-y-2">
                  {[
                    { name: "Executive Master Health Package", desc: "85 Tests + 3D Echo + HbA1c", price: "$149" },
                    { name: "Whole-Body 3T Silent MRI Screening", desc: "Zero Radiation Comprehensive", price: "$299" },
                    { name: "Genomic Preventive Oncology Screen", desc: "104 Hereditary Cancer Genes", price: "$399" },
                  ].map((pkg, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/70 border border-slate-100 dark:border-slate-700 flex items-center justify-between"
                    >
                      <div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white">{pkg.name}</div>
                        <div className="text-[11px] text-slate-500">{pkg.desc}</div>
                      </div>
                      <button className="px-2.5 py-1 text-xs bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded">
                        Book
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: 1:1 Avatar Kit */}
        {activeTab === "avatars" && (
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Square 1:1 Brand Insignia &amp; App Icon Variations
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              Precision 1:1 avatars optimized for retina displays, mobile notifications, social icons, and favicons.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                {
                  id: "royal",
                  label: "Imperial Royal Blue",
                  bg: "bg-gradient-to-br from-[#0B2545] to-[#040D1A] border-teal-500/30",
                  theme: "full-color-dark",
                  desc: "Primary official app icon & social avatar",
                },
                {
                  id: "teal",
                  label: "Luminous Bio-Teal",
                  bg: "bg-gradient-to-br from-[#00B4D8] to-[#0284C7] border-white/30",
                  theme: "monochrome-white",
                  desc: "High-energy campaigns & mobile push",
                },
                {
                  id: "ceramic",
                  label: "Clinical Pure Ceramic",
                  bg: "bg-white border-slate-200 shadow-sm",
                  theme: "full-color-light",
                  desc: "Light mode interface & partner widgets",
                },
                {
                  id: "midnight",
                  label: "Obsidian Deep Stealth",
                  bg: "bg-slate-950 border-slate-800",
                  theme: "full-color-dark",
                  desc: "Executive investor & luxury collateral",
                },
              ].map((avatar) => (
                <div
                  key={avatar.id}
                  className="flex flex-col items-center p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800 text-center"
                >
                  <div
                    className={`w-28 h-28 rounded-2xl flex items-center justify-center p-4 border shadow-xl ${avatar.bg} mb-3`}
                  >
                    <BrandEmblemSvg sizePx={72} theme={avatar.theme} />
                  </div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">{avatar.label}</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">{avatar.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
