/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { LogoShowcase3D } from "./components/LogoShowcase3D";
import { ExteriorSignboard } from "./components/ExteriorSignboard";
import { ReceptionInterior } from "./components/ReceptionInterior";
import { VisitingCard } from "./components/VisitingCard";
import { LetterheadPrescription } from "./components/LetterheadPrescription";
import { SocialMediaTemplates } from "./components/SocialMediaTemplates";
import { ProfileBranding } from "./components/ProfileBranding";
import { MedicalReportCover } from "./components/MedicalReportCover";
import { StaffIdUniform } from "./components/StaffIdUniform";
import { BrandIdentityManual } from "./components/BrandIdentityManual";
import { Footer } from "./components/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("moti-theme") === "dark" ||
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("moti-theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("moti-theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 selection:bg-teal-500 selection:text-white transition-colors duration-200">
      {/* Top Bar Navigation */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Content Sections */}
      <main>
        {/* Brand Philosophy Hero */}
        <Hero />

        {/* Deliverable 01: 3D Logo Architecture & WebGL Viewport */}
        <LogoShowcase3D />

        {/* Deliverable 02: Luxury Exterior Signboard (Day / Dusk / Midnight) */}
        <ExteriorSignboard />

        {/* Deliverable 03: Modern Reception & Interior Branding + Touch Kiosk */}
        <ReceptionInterior />

        {/* Deliverable 04: Professional Visiting Card with 3D Flip */}
        <VisitingCard />

        {/* Deliverable 05: Letterhead & Prescription Pad (Printable A4) */}
        <LetterheadPrescription />

        {/* Deliverable 06: Social Media Templates (9:16 Stories & 1:1 Posts) */}
        <SocialMediaTemplates />

        {/* Deliverable 07: Instagram & WhatsApp Business Profile Ecosystem */}
        <ProfileBranding />

        {/* Deliverable 08: Premium Medical Report Cover & Clinical Lab Dossier */}
        <MedicalReportCover />

        {/* Deliverable 09: Staff ID Card (3D RFID Badge) & Uniform Standards */}
        <StaffIdUniform />

        {/* Deliverable 10: Complete Corporate Brand Identity Manual */}
        <BrandIdentityManual />
      </main>

      {/* Quiet Footer */}
      <Footer />
    </div>
  );
}
