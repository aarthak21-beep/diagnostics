import React from "react";
import { BrandLogoSvg } from "./BrandLogoSvg";
import { Phone, Mail, MapPin, ShieldCheck, ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-100 dark:border-slate-800">
          {/* Brand Info (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            <BrandLogoSvg size="md" showTagline={true} />
            <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400 max-w-sm">
              World-class clinical pathology, advanced 3T MRI, 128-slice CT scan, and molecular genomic diagnostics.
              Committed to sub-millimeter diagnostic precision and compassionate human healthcare.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-teal-600 dark:text-teal-400">
              <ShieldCheck className="w-4 h-4 text-teal-500" />
              <span>Accredited: ISO 15189:2022 &middot; NABL &middot; CAP</span>
            </div>
          </div>

          {/* Quick Nav Anchors (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white font-mono">
              Identity Deliverables
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#logo-design" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  01. Premium 3D Logo Design
                </a>
              </li>
              <li>
                <a href="#exterior-signboard" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  02. Luxury Exterior Signboard
                </a>
              </li>
              <li>
                <a href="#reception-interior" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  03. Modern Reception &amp; Interiors
                </a>
              </li>
              <li>
                <a href="#visiting-card" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  04. Professional Visiting Cards
                </a>
              </li>
              <li>
                <a href="#letterhead-rx" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                  05. Letterhead &amp; Prescription Pad
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours (4 Cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white font-mono">
              Clinical Headquarters
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                <span>Tower 4, Horizon Health Boulevard, Metro District</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-500 shrink-0" />
                <span>24/7 Helpline: 1800 200 6684 &middot; +91 98200 45120</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-500 shrink-0" />
                <span>clinical.desk@motidiagnostics.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quiet Legal & Scroll to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            &copy; 2026 MOTi DIAGNOSTICS CENTRE. All brand visual trademarks, 3D insignias, and design assets reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
