import React, { useState } from "react";
import {
  Activity, ArrowRight, CalendarDays, CheckCircle2, Clock3, Dna,
  Droplet, FlaskConical, HeartPulse, Menu, Microscope, ShieldCheck,
  Stethoscope, TestTube2, X
} from "lucide-react";

const services = [
  { icon: Droplet, title: "Pathology Tests", desc: "रक्त, लघवी आणि इतर नमुन्यांच्या तपासण्यांसाठी." },
  { icon: FlaskConical, title: "Biochemistry", desc: "शरीरातील विविध घटकांचे मोजमाप व विश्लेषण." },
  { icon: Dna, title: "Specialized Tests", desc: "विशेष तपासण्यांची माहिती आणि मार्गदर्शन." },
  { icon: HeartPulse, title: "Health Check-up", desc: "नियमित आरोग्य तपासणीसाठी पर्याय." },
  { icon: Microscope, title: "Microscopy", desc: "नमुने सूक्ष्मदर्शकाखाली तपासण्याची सुविधा." },
  { icon: TestTube2, title: "Sample Collection", desc: "नमुना संकलनाच्या उपलब्ध पर्यायांसाठी चौकशी करा." },
];

const benefits = [
  { icon: ShieldCheck, title: "विश्वासार्ह प्रक्रिया", desc: "नमुना हाताळणी आणि रिपोर्टिंगमध्ये काळजीपूर्वक प्रक्रिया." },
  { icon: Clock3, title: "वेळेची स्पष्ट माहिती", desc: "तपासणी आणि रिपोर्टच्या अपेक्षित वेळेबद्दल आधीच माहिती." },
  { icon: Stethoscope, title: "रुग्णकेंद्रित सेवा", desc: "तपासणीपूर्वी आवश्यक सूचना आणि मदतीसाठी मार्गदर्शन." },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [{ label: "मुख्यपृष्ठ", href: "#home" }, { label: "आमच्याबद्दल", href: "#about" }, { label: "तपासण्या", href: "#services" }, { label: "का MOTi?", href: "#why-us" }, { label: "संपर्क", href: "#contact" }];

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased">
      <div className="bg-[#092b50] px-4 py-2 text-center text-xs font-medium tracking-wide text-white sm:text-sm">
        MOTi Diagnostics Centre <span className="mx-2 text-teal-300">•</span> आरोग्याची काळजी, विश्वासाने
      </div>
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3" aria-label="MOTi Diagnostics home">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0b4778] to-[#08a9c4] text-white shadow-md"><Activity size={25} strokeWidth={2.5} /></span>
            <span><span className="block font-display text-2xl font-extrabold leading-none tracking-tight text-[#092b50]">MOT<span className="text-[#079bb7]">i</span></span><span className="mt-1 block text-[10px] font-bold uppercase tracking-[.2em] text-slate-500">Diagnostics Centre</span></span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {links.map(link => <a key={link.href} href={link.href} className="text-sm font-semibold text-slate-600 transition hover:text-[#079bb7]">{link.label}</a>)}
          </nav>
          <a href="#contact" className="hidden rounded-full bg-[#079bb7] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-900/10 transition hover:-translate-y-0.5 hover:bg-[#087f9a] md:inline-flex">चौकशी करा <ArrowRight size={16} className="ml-2" /></a>
          <button className="rounded-xl p-2 text-[#092b50] md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav className="border-t border-slate-100 bg-white px-5 py-3 md:hidden">{links.map(link => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="block rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">{link.label}</a>)}</nav>}
      </header>

      <main>
        <section id="home" className="relative isolate overflow-hidden bg-[#f1f8fc]">
          <div className="absolute -right-32 -top-24 -z-10 h-[32rem] w-[32rem] rounded-full bg-cyan-200/40 blur-3xl" />
          <div className="absolute -bottom-40 -left-24 -z-10 h-[28rem] w-[28rem] rounded-full bg-blue-200/40 blur-3xl" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-4 py-2 text-xs font-bold text-[#0788a5]"><span className="h-2 w-2 rounded-full bg-teal-500" /> ACCURATE • RELIABLE • CARING</div>
              <h1 className="max-w-2xl font-display text-4xl font-extrabold leading-[1.12] tracking-tight text-[#092b50] sm:text-5xl lg:text-[3.65rem]">MOTi Diagnostics<br /><span className="text-[#079bb7]">Your Health, Our Priority.</span></h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">तुमच्या आरोग्याविषयी योग्य माहिती मिळवण्यासाठी तपासणी, स्पष्ट मार्गदर्शन आणि रुग्णकेंद्रित सेवा—एकाच ठिकाणी.</p>
              <div className="mt-9 flex flex-wrap gap-3"><a href="#services" className="inline-flex items-center rounded-full bg-[#092b50] px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-blue-950/15 transition hover:-translate-y-0.5 hover:bg-[#10436f]">आमच्या तपासण्या <ArrowRight size={17} className="ml-2" /></a><a href="#about" className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-[#092b50] transition hover:border-cyan-500">अधिक जाणून घ्या</a></div>
              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-slate-600"><span className="flex items-center gap-2"><CheckCircle2 className="text-teal-600" size={17} /> काळजीपूर्वक तपासणी</span><span className="flex items-center gap-2"><CheckCircle2 className="text-teal-600" size={17} /> स्पष्ट माहिती</span></div>
            </div>
            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-cyan-300/50 to-blue-300/30 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0c5b89] via-[#0b355e] to-[#071f3b] p-7 shadow-2xl sm:p-10">
                <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10" /><div className="absolute -right-4 -top-4 h-40 w-40 rounded-full border border-cyan-200/20" />
                <div className="relative flex min-h-[310px] flex-col items-center justify-center text-center text-white">
                  <div className="mb-7 flex h-32 w-32 items-center justify-center rounded-[2rem] border border-cyan-200/30 bg-white/10 shadow-[0_0_60px_rgba(0,190,220,.2)]"><Activity size={76} strokeWidth={1.4} className="text-cyan-300" /></div>
                  <div className="font-display text-5xl font-extrabold tracking-tight">MOT<span className="text-cyan-300">i</span></div><div className="mt-2 text-xs font-bold uppercase tracking-[.35em] text-cyan-100">Diagnostics Centre</div>
                  <p className="mt-7 max-w-xs text-sm leading-6 text-blue-100">विश्वास, अचूकता आणि आरोग्याची काळजी यांना समर्पित.</p>
                </div>
                <div className="relative flex items-center justify-between border-t border-white/15 pt-5 text-xs font-semibold text-blue-100"><span>Care in every test</span><span className="text-cyan-300">MOTi Diagnostics</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center"><p className="text-xs font-extrabold uppercase tracking-[.22em] text-[#079bb7]">OUR SERVICES</p><h2 className="mt-3 font-display text-3xl font-extrabold text-[#092b50] sm:text-4xl">तपासणी सेवा</h2><p className="mt-4 text-slate-600">तुमच्या गरजेनुसार उपलब्ध तपासण्या आणि नमुना संकलनाबद्दल माहिती मिळवा.</p></div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{services.map(({icon: Icon,title,desc}) => <article key={title} className="group rounded-2xl border border-slate-100 bg-white p-7 shadow-[0_8px_35px_-25px_rgba(9,43,80,.25)] transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl"><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf8fb] text-[#078eaa] transition group-hover:bg-[#079bb7] group-hover:text-white"><Icon size={27} /></div><h3 className="mt-5 font-display text-xl font-bold text-[#092b50]">{title}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{desc}</p></article>)}</div>
            <p className="mt-7 text-center text-xs text-slate-500">टीप: प्रत्यक्ष उपलब्ध तपासण्या, किंमत आणि रिपोर्टची वेळ केंद्राकडून निश्चित करून घ्या.</p>
          </div>
        </section>

        <section id="about" className="bg-[#f3f8fb] py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div className="rounded-[2rem] bg-gradient-to-br from-[#0c527f] to-[#092b50] p-8 text-white sm:p-12"><div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-cyan-300"><Microscope size={34} /></div><p className="mt-8 text-xs font-bold uppercase tracking-[.22em] text-cyan-200">ABOUT MOTi</p><h2 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl">आरोग्य समजून घेण्याची सुरुवात योग्य तपासणीतून.</h2><p className="mt-5 text-sm leading-7 text-blue-100">MOTi Diagnostics Centre मध्ये तपासणी प्रक्रियेबद्दल स्पष्ट माहिती, नमुन्यांची काळजीपूर्वक हाताळणी आणि रुग्णांना आवश्यक मार्गदर्शन यांना महत्त्व दिले जाते.</p></div>
            <div><p className="text-xs font-extrabold uppercase tracking-[.22em] text-[#079bb7]">A BETTER TESTING EXPERIENCE</p><h2 className="mt-3 font-display text-3xl font-extrabold text-[#092b50] sm:text-4xl">तुमच्या सोयीचा विचार करून</h2><p className="mt-5 leading-8 text-slate-600">तपासणीपूर्वी काय तयारी आवश्यक आहे, नमुना कसा द्यायचा आणि रिपोर्ट कधी मिळेल—या महत्त्वाच्या प्रश्नांची उत्तरे तुम्हाला समजेल अशा पद्धतीने देण्याचा आमचा प्रयत्न आहे.</p><div className="mt-8 space-y-5">{["तपासणीपूर्व सूचना समजावून सांगणे","नमुना संकलन व प्रक्रियेबद्दल माहिती","रिपोर्ट आणि पुढील मार्गदर्शनाबाबत स्पष्ट संवाद"].map(item=><div key={item} className="flex items-start gap-3"><CheckCircle2 className="mt-1 shrink-0 text-teal-600" size={20}/><span className="font-semibold text-slate-700">{item}</span></div>)}</div></div>
          </div>
        </section>

        <section id="why-us" className="py-20 sm:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mx-auto mb-12 max-w-2xl text-center"><p className="text-xs font-extrabold uppercase tracking-[.22em] text-[#079bb7]">WHY MOTi</p><h2 className="mt-3 font-display text-3xl font-extrabold text-[#092b50] sm:text-4xl">काळजी प्रत्येक टप्प्यावर</h2></div><div className="grid gap-8 md:grid-cols-3">{benefits.map(({icon:Icon,title,desc},i)=><div key={title} className="text-center"><div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#eaf8fb] text-[#078eaa]"><Icon size={30}/></div><div className="mt-5 text-xs font-extrabold tracking-widest text-cyan-700">0{i+1}</div><h3 className="mt-2 font-display text-xl font-bold text-[#092b50]">{title}</h3><p className="mx-auto mt-3 max-w-xs text-sm leading-7 text-slate-600">{desc}</p></div>)}</div></div></section>

        <section id="contact" className="bg-[#092b50] py-16 text-white sm:py-20"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 sm:px-6 md:flex-row md:items-center lg:px-8"><div><p className="text-xs font-extrabold uppercase tracking-[.22em] text-cyan-300">GET IN TOUCH</p><h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">तपासणीबद्दल काही प्रश्न आहेत?</h2><p className="mt-4 max-w-xl text-sm leading-7 text-blue-100">उपलब्ध तपासण्या, आवश्यक तयारी आणि रिपोर्टच्या वेळेबद्दल अधिक माहितीसाठी MOTi Diagnostics Centre शी संपर्क साधा.</p></div><a href="#services" className="inline-flex shrink-0 items-center rounded-full bg-[#08a6c0] px-7 py-4 text-sm font-extrabold text-white transition hover:bg-[#0791aa]">तपासण्या पहा <ArrowRight size={17} className="ml-2"/></a></div></section>
      </main>

      <footer className="bg-[#061d35] py-8 text-blue-100"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:px-6 sm:text-left lg:px-8"><div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-cyan-300"><Activity size={22}/></span><div><div className="font-display text-lg font-extrabold">MOT<span className="text-cyan-300">i</span> Diagnostics</div><div className="text-[10px] uppercase tracking-[.2em] text-blue-300">Diagnostics Centre</div></div></div><p className="text-xs text-blue-300">© {new Date().getFullYear()} MOTi Diagnostics Centre. सर्व हक्क राखीव.</p><a href="#home" className="text-xs font-bold text-cyan-300 hover:text-white">वर जा ↑</a></div></footer>
    </div>
  );
}
