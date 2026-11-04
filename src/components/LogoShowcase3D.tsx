import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { BrandEmblemSvg, BrandLogoSvg } from "./BrandLogoSvg";
import { RotateCw, Sparkles, Layers, Eye, Download, ShieldCheck, Check } from "lucide-react";

type MaterialPreset = "titanium" | "glass" | "ceramic" | "midnight";

export const LogoShowcase3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeMaterial, setActiveMaterial] = useState<MaterialPreset>("titanium");
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [wireframe, setWireframe] = useState<boolean>(false);
  const [lightIntensity, setLightIntensity] = useState<number>(1.2);
  const [copiedSvg, setCopiedSvg] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"3d" | "anatomy" | "clearspace">("3d");

  // Keep references to Three.js objects
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const logoGroupRef = useRef<THREE.Group | null>(null);
  const materialsRef = useRef<{ [key: string]: THREE.MeshStandardMaterial | THREE.MeshPhysicalMaterial }>({});

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight || 460;

    // 1. Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 9);

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    rendererRef.current = renderer;

    container.replaceChildren(renderer.domElement);

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    keyLight.position.set(5, 6, 8);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const tealRimLight = new THREE.PointLight(0x00b4d8, 4.0, 20);
    tealRimLight.position.set(-6, -3, 3);
    scene.add(tealRimLight);

    const blueBackLight = new THREE.DirectionalLight(0x0b2545, 2.0);
    blueBackLight.position.set(0, -6, -5);
    scene.add(blueBackLight);

    // 5. Build 3D MOTi Medical Cross & Helix
    const logoGroup = new THREE.Group();
    logoGroupRef.current = logoGroup;
    scene.add(logoGroup);

    // Create Medical Cross 2D shape with rounded chamfers
    const crossShape = new THREE.Shape();
    const w = 0.8;
    const l = 2.4;
    // Cross contour
    crossShape.moveTo(-w, l);
    crossShape.lineTo(w, l);
    crossShape.lineTo(w, w);
    crossShape.lineTo(l, w);
    crossShape.lineTo(l, -w);
    crossShape.lineTo(w, -w);
    crossShape.lineTo(w, -l);
    crossShape.lineTo(-w, -l);
    crossShape.lineTo(-w, -w);
    crossShape.lineTo(-l, -w);
    crossShape.lineTo(-l, w);
    crossShape.lineTo(-w, w);
    crossShape.closePath();

    const extrudeSettings = {
      steps: 2,
      depth: 0.5,
      bevelEnabled: true,
      bevelThickness: 0.12,
      bevelSize: 0.08,
      bevelOffset: 0,
      bevelSegments: 5,
    };

    const crossGeometry = new THREE.ExtrudeGeometry(crossShape, extrudeSettings);
    crossGeometry.center();

    // Material variations
    const titaniumMat = new THREE.MeshStandardMaterial({
      color: 0x0b2545,
      metalness: 0.85,
      roughness: 0.22,
    });

    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x00b4d8,
      metalness: 0.1,
      roughness: 0.1,
      transmission: 0.7,
      thickness: 1.2,
      ior: 1.45,
      transparent: true,
      opacity: 0.85,
    });

    const ceramicMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      metalness: 0.1,
      roughness: 0.15,
    });

    const midnightMat = new THREE.MeshStandardMaterial({
      color: 0x081b33,
      metalness: 0.95,
      roughness: 0.1,
    });

    materialsRef.current = {
      titanium: titaniumMat,
      glass: glassMat,
      ceramic: ceramicMat,
      midnight: midnightMat,
    };

    const crossMesh = new THREE.Mesh(crossGeometry, titaniumMat);
    crossMesh.castShadow = true;
    crossMesh.receiveShadow = true;
    logoGroup.add(crossMesh);

    // Add Outer Diagnostic Precision Ring
    const ringGeom = new THREE.TorusGeometry(3.1, 0.08, 16, 100);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x00b4d8,
      metalness: 0.7,
      roughness: 0.2,
      emissive: 0x00b4d8,
      emissiveIntensity: 0.35,
    });
    const ringMesh = new THREE.Mesh(ringGeom, ringMat);
    logoGroup.add(ringMesh);

    // Add Cardinal Target Markers (4 nodes)
    const markerGeom = new THREE.SphereGeometry(0.12, 16, 16);
    const markerMat = new THREE.MeshStandardMaterial({
      color: 0x48cae4,
      emissive: 0x48cae4,
      emissiveIntensity: 0.8,
    });

    const topMarker = new THREE.Mesh(markerGeom, markerMat);
    topMarker.position.set(0, 3.1, 0);
    logoGroup.add(topMarker);

    const bottomMarker = new THREE.Mesh(markerGeom, markerMat);
    bottomMarker.position.set(0, -3.1, 0);
    logoGroup.add(bottomMarker);

    const leftMarker = new THREE.Mesh(markerGeom, markerMat);
    leftMarker.position.set(-3.1, 0, 0);
    logoGroup.add(leftMarker);

    const rightMarker = new THREE.Mesh(markerGeom, markerMat);
    rightMarker.position.set(3.1, 0, 0);
    logoGroup.add(rightMarker);

    // Add 3D DNA Helix Curvature (curved spiral tubes)
    const helixCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-2.2, 0.4, 0.35),
      new THREE.Vector3(-1.1, -0.6, 0.45),
      new THREE.Vector3(0, 0.5, 0.5),
      new THREE.Vector3(1.1, -0.6, 0.45),
      new THREE.Vector3(2.2, 0.4, 0.35),
    ]);
    const helixGeom = new THREE.TubeGeometry(helixCurve, 64, 0.09, 12, false);
    const helixMat = new THREE.MeshStandardMaterial({
      color: 0x00b4d8,
      metalness: 0.8,
      roughness: 0.15,
      emissive: 0x00b4d8,
      emissiveIntensity: 0.5,
    });
    const helixMesh = new THREE.Mesh(helixGeom, helixMat);
    logoGroup.add(helixMesh);

    // Counter helix strand
    const helixCurve2 = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-2.2, -0.4, 0.35),
      new THREE.Vector3(-1.1, 0.6, 0.45),
      new THREE.Vector3(0, -0.5, 0.5),
      new THREE.Vector3(1.1, 0.6, 0.45),
      new THREE.Vector3(2.2, -0.4, 0.35),
    ]);
    const helixGeom2 = new THREE.TubeGeometry(helixCurve2, 64, 0.08, 12, false);
    const helixMesh2 = new THREE.Mesh(helixGeom2, ringMat);
    logoGroup.add(helixMesh2);

    // Center illuminated diagnostic pulse sphere
    const pulseGeom = new THREE.SphereGeometry(0.3, 32, 32);
    const pulseMat = new THREE.MeshStandardMaterial({
      color: 0xa5f3fc,
      emissive: 0x00b4d8,
      emissiveIntensity: 1.0,
      metalness: 0.2,
      roughness: 0.1,
    });
    const pulseSphere = new THREE.Mesh(pulseGeom, pulseMat);
    pulseSphere.position.set(0, 0, 0.35);
    logoGroup.add(pulseSphere);

    // Subtle gentle floating tilt
    logoGroup.rotation.y = 0.35;
    logoGroup.rotation.x = 0.15;

    // Mouse drag interaction
    let isDragging = false;
    let prevMousePos = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging || !logoGroupRef.current) return;
      const deltaX = e.clientX - prevMousePos.x;
      const deltaY = e.clientY - prevMousePos.y;

      logoGroupRef.current.rotation.y += deltaX * 0.01;
      logoGroupRef.current.rotation.x += deltaY * 0.01;

      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    // Touch events for mobile
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || !logoGroupRef.current || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - prevMousePos.x;
      const deltaY = e.touches[0].clientY - prevMousePos.y;

      logoGroupRef.current.rotation.y += deltaX * 0.01;
      logoGroupRef.current.rotation.x += deltaY * 0.01;

      prevMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    const dom = renderer.domElement;
    dom.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    dom.addEventListener("touchstart", onTouchStart);
    dom.addEventListener("touchmove", onTouchMove);
    dom.addEventListener("touchend", onTouchEnd);

    // Animation loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      if (autoRotate && logoGroupRef.current && !isDragging) {
        logoGroupRef.current.rotation.y += 0.008;
        logoGroupRef.current.position.y = Math.sin(elapsed * 1.5) * 0.08;
      }

      // Pulse glow oscillation
      pulseMat.emissiveIntensity = 0.8 + Math.sin(elapsed * 3) * 0.3;

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight || 460;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      dom.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      dom.removeEventListener("touchstart", onTouchStart);
      dom.removeEventListener("touchmove", onTouchMove);
      dom.removeEventListener("touchend", onTouchEnd);
      renderer.dispose();
    };
  }, []);

  // Update material preset
  useEffect(() => {
    if (!logoGroupRef.current || !materialsRef.current[activeMaterial]) return;
    const selectedMat = materialsRef.current[activeMaterial];
    selectedMat.wireframe = wireframe;

    // First child is the cross mesh
    const crossMesh = logoGroupRef.current.children[0] as THREE.Mesh;
    if (crossMesh) {
      crossMesh.material = selectedMat;
    }
  }, [activeMaterial, wireframe]);

  // Copy SVG to clipboard
  const handleCopySvg = () => {
    const svgCode = `<svg width="240" height="80" viewBox="0 0 240 80" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="40" cy="40" r="32" stroke="#00B4D8" stroke-width="2.5" stroke-dasharray="40 8 10 8"/>
  <path d="M34 16H46V30H60V42H46V56H34V42H20V30H34V16Z" fill="#0B2545"/>
  <path d="M22 42C28 42 32 30 40 30C48 30 52 42 58 42" stroke="#00B4D8" stroke-width="3" stroke-linecap="round"/>
  <circle cx="40" cy="36" r="4" fill="#00B4D8"/>
  <text x="82" y="44" font-family="'Outfit', sans-serif" font-weight="800" font-size="28" fill="#0B2545">MOT<tspan fill="#00B4D8">i</tspan></text>
  <text x="84" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="9" letter-spacing="0.25em" fill="#0284C7">DIAGNOSTICS CENTRE</text>
</svg>`;

    navigator.clipboard.writeText(svgCode);
    setCopiedSvg(true);
    setTimeout(() => setCopiedSvg(false), 2500);
  };

  const handleDownloadSvg = () => {
    const svgCode = `<svg width="400" height="120" viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="none"/>
  <circle cx="60" cy="60" r="48" stroke="#00B4D8" stroke-width="3.5" stroke-dasharray="90 12 18 12"/>
  <circle cx="60" cy="12" r="2.5" fill="#00B4D8" />
  <circle cx="108" cy="60" r="2.5" fill="#00B4D8" />
  <circle cx="60" cy="108" r="2.5" fill="#00B4D8" />
  <circle cx="12" cy="60" r="2.5" fill="#00B4D8" />
  <path d="M50 24C50 20.6863 52.6863 18 56 18H64C67.3137 18 70 20.6863 70 24V46H96C99.3137 46 102 48.6863 102 52V60C102 63.3137 99.3137 66 96 66H70V96C70 99.3137 67.3137 102 64 102H56C52.6863 102 50 99.3137 50 96V66H24C20.6863 66 18 63.3137 18 60V52C18 48.6863 20.6863 46 24 46H50V24Z" fill="#0B2545"/>
  <path d="M26 66C36 66 42 46 60 46C78 46 84 66 94 66" stroke="#00B4D8" stroke-width="6" stroke-linecap="round"/>
  <circle cx="60" cy="56" r="6" fill="#00B4D8"/>
  <text x="130" y="66" font-family="'Outfit', sans-serif" font-weight="800" font-size="44" fill="#0B2545">MOT<tspan fill="#00B4D8">i</tspan></text>
  <text x="132" y="86" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="13" letter-spacing="0.28em" fill="#0284C7">DIAGNOSTICS CENTRE</text>
</svg>`;

    const blob = new Blob([svgCode], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "MOTi_DIAGNOSTICS_CENTRE_Master_Logo.svg";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="logo-design" className="py-12 md:py-16 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-semibold tracking-wider uppercase text-teal-600 dark:text-teal-400 mb-1">
              Deliverable 01 · Visual Mark & Symbolism
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Premium 3D Logo Architecture
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
              An internationally recognized medical insignia uniting the precision diagnostic optical ring,
              the clinical cross, and the intertwined genomic DNA double helix.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-900 rounded-lg shrink-0">
            <button
              onClick={() => setActiveTab("3d")}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                activeTab === "3d"
                  ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
              }`}
            >
              Interactive 3D Viewport
            </button>
            <button
              onClick={() => setActiveTab("anatomy")}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                activeTab === "anatomy"
                  ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
              }`}
            >
              Symbol Anatomy
            </button>
            <button
              onClick={() => setActiveTab("clearspace")}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                activeTab === "clearspace"
                  ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
              }`}
            >
              Grid & Clear Space
            </button>
          </div>
        </div>

        {/* Content Tabs */}
        {activeTab === "3d" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* 3D WebGL Viewport (8 Cols) */}
            <div className="lg:col-span-8 relative bg-gradient-to-b from-slate-950 via-[#0B2545]/90 to-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col min-h-[460px]">
              {/* Top Viewport Toolbar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/80 backdrop-blur-md border-b border-white/10 z-10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-400 shadow-sm shadow-teal-400/50" />
                  <span className="text-xs font-mono font-medium text-slate-200">
                    WebGL 3D Shader Viewport
                  </span>
                </div>
                <div className="text-[11px] font-mono text-teal-300">
                  Touch / Drag to Rotate in 360°
                </div>
              </div>

              {/* Three.js Canvas Container */}
              <div
                ref={mountRef}
                className="w-full h-full flex-1 cursor-grab active:cursor-grabbing select-none relative"
              />

              {/* Bottom Interactive Controls Strip */}
              <div className="p-3 sm:p-4 bg-slate-900/90 backdrop-blur-md border-t border-white/10 flex flex-wrap items-center justify-between gap-3 z-10">
                {/* Material Selectors */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                  <span className="text-xs text-slate-400 mr-1 hidden sm:inline">Material:</span>
                  {[
                    { id: "titanium", label: "Brushed Titanium" },
                    { id: "glass", label: "Frosted Glass" },
                    { id: "ceramic", label: "Pure Ceramic" },
                    { id: "midnight", label: "Imperial Chrome" },
                  ].map((mat) => (
                    <button
                      key={mat.id}
                      onClick={() => setActiveMaterial(mat.id as MaterialPreset)}
                      className={`px-2.5 py-1 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                        activeMaterial === mat.id
                          ? "bg-teal-500 text-slate-950 font-semibold shadow-sm"
                          : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                      }`}
                    >
                      {mat.label}
                    </button>
                  ))}
                </div>

                {/* Toggles */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setAutoRotate(!autoRotate)}
                    className={`flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-md border transition-colors ${
                      autoRotate
                        ? "bg-slate-800 border-teal-500/50 text-teal-300"
                        : "bg-slate-900 border-slate-700 text-slate-400 hover:text-white"
                    }`}
                  >
                    <RotateCw className="w-3.5 h-3.5" />
                    <span>{autoRotate ? "Auto-Spin On" : "Paused"}</span>
                  </button>

                  <button
                    onClick={() => setWireframe(!wireframe)}
                    className={`flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-md border transition-colors ${
                      wireframe
                        ? "bg-slate-800 border-teal-500/50 text-teal-300"
                        : "bg-slate-900 border-slate-700 text-slate-400 hover:text-white"
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Wireframe</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Logo Specifications & Quick Exports (4 Cols) */}
            <div className="lg:col-span-4 flex flex-col justify-between bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Official Brand Lockup
                  </div>
                  <span className="text-[11px] font-mono text-teal-600 dark:text-teal-400 font-medium">
                    v2026.1 Release
                  </span>
                </div>

                {/* Live SVG Vector Rendering */}
                <div className="p-4 bg-slate-50 dark:bg-slate-950/70 rounded-xl border border-slate-200/80 dark:border-slate-800 flex items-center justify-center mb-6">
                  <BrandLogoSvg size="md" showTagline={true} />
                </div>

                {/* Architectural Design Pillars */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-md bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-800 flex items-center justify-center shrink-0 mt-0.5 text-teal-600 dark:text-teal-400 text-xs font-bold">
                      01
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-slate-900 dark:text-white">
                        Precision Optical Calibrator
                      </h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                        Surrounding ring with 4 cardinal targeting nodes signifying sub-millimeter diagnostic precision.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-md bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 flex items-center justify-center shrink-0 mt-0.5 text-blue-600 dark:text-blue-400 text-xs font-bold">
                      02
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-slate-900 dark:text-white">
                        Genomic DNA Helix & Medical Cross
                      </h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                        Intertwined helix seamlessly fused through the beveled medical cross for molecular excellence.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-md bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center shrink-0 mt-0.5 text-indigo-600 dark:text-indigo-400 text-xs font-bold">
                      03
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-slate-900 dark:text-white">
                        Stylized &quot;MOTi&quot; Wordmark
                      </h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                        Geometric display letterforms with an active diagnostic pulse node on the lower-case &quot;i&quot;.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={handleDownloadSvg}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#0B2545] hover:bg-[#081B33] text-white text-xs font-semibold rounded-lg shadow-sm transition-all active:scale-[0.98]"
                >
                  <Download className="w-4 h-4 text-teal-400" />
                  <span>Download Master Vector Logo (.SVG)</span>
                </button>

                <button
                  onClick={handleCopySvg}
                  className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-medium rounded-lg transition-colors"
                >
                  {copiedSvg ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span>Vector Code Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Layers className="w-4 h-4 text-slate-400" />
                      <span>Copy Inline SVG Code</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Anatomy & Meaning */}
        {activeTab === "anatomy" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                number: "01",
                title: "Diagnostic Crosshair Ring",
                subtitle: "Accuracy & Optical Calibration",
                body: "Engineered with 4 precision nodes at 90° intervals, echoing the crosshairs of MRI and CT laser positioning.",
                color: "teal",
              },
              {
                number: "02",
                title: "Architectural Medical Cross",
                subtitle: "Trust, Stability & Emergency Readiness",
                body: "Deep royal blue cross with 8° beveled chamfers conveying unwavering clinical trust and emergency-grade readiness.",
                color: "blue",
              },
              {
                number: "03",
                title: "Double DNA Helix Weave",
                subtitle: "Molecular Pathology & Genetics",
                body: "Flowing through the horizontal arm of the cross, reflecting next-gen sequencing and personalized healthcare.",
                color: "cyan",
              },
              {
                number: "04",
                title: "Luminous &apos;i&apos; Pulse Node",
                subtitle: "Human Empathy & Digital Innovation",
                body: "The teal dot on the 'i' glows as a beacon of clinical hope, digital test reports, and patient-first care.",
                color: "indigo",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xl font-mono font-bold text-teal-600 dark:text-teal-400">
                      {item.number}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest">
                      Element
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                    {item.title}
                  </h3>
                  <div className="text-xs text-teal-600 dark:text-teal-400 font-medium mb-3">
                    {item.subtitle}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.body}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-500" />
                  <span>ISO 15189 Standard Alignment</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Grid & Clear Space */}
        {activeTab === "clearspace" && (
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 bg-slate-950 p-8 rounded-xl border border-slate-800 relative flex items-center justify-center min-h-[300px]">
                {/* Construction Grid Pattern Overlay */}
                <div
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(#00B4D8 1px, transparent 1px), linear-gradient(90deg, #00B4D8 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />

                {/* Clear Space Exclusion Boundary Box */}
                <div className="relative border-2 border-dashed border-teal-400/60 p-10 rounded-lg">
                  <span className="absolute -top-3 left-4 px-2 bg-slate-950 text-[10px] font-mono text-teal-400">
                    EXCLUSION ZONE (1.5X HEIGHT)
                  </span>
                  <span className="absolute -left-3 top-1/2 -translate-y-1/2 -rotate-90 px-1 bg-slate-950 text-[10px] font-mono text-teal-400">
                    X = 36px
                  </span>
                  <BrandLogoSvg size="lg" theme="full-color-dark" />
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Clear Space &amp; Minimum Scale Rules
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  To preserve the iconic legibility of MOTi DIAGNOSTICS CENTRE, maintain an isolation
                  perimeter equal to 1.5 times the cap height of the capital letter &quot;M&quot; (marked as &quot;X&quot;).
                </p>

                <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                  <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-slate-800">
                    <span className="font-semibold text-slate-900 dark:text-white">Minimum Digital Display:</span>
                    <span className="font-mono">140px width (horizontal) / 36px (emblem)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-slate-800">
                    <span className="font-semibold text-slate-900 dark:text-white">Minimum Print Scale:</span>
                    <span className="font-mono">25mm width (visiting cards / Rx pads)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-slate-800">
                    <span className="font-semibold text-slate-900 dark:text-white">Signboard Channel Depth:</span>
                    <span className="font-mono">100mm - 150mm fabricated 3D returns</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="font-semibold text-slate-900 dark:text-white">Aspect Ratio Ratio (&Phi;):</span>
                    <span className="font-mono">1 : 3.2 horizontal lockup</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
