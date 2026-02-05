"use client";

import Image from "next/image";
import Link from "next/link";

export default function RetrieverPage() {
  return (
    <div className="bg-white text-foreground min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 bg-white/80 backdrop-blur-sm">
        <div className="max-w-[1100px] mx-auto flex justify-between items-center">
          <Link href="/" className="text-sm text-foreground/40 hover:text-foreground transition-colors flex items-center gap-2">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </Link>
          <span className="text-sm text-foreground/40">Retriever PH</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-16 md:pb-20 px-6 md:px-12">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-wrap gap-2 mb-8">
            {["Product Designer", "Redesign", "54 Screens", "2023"].map((tag) => (
              <span key={tag} className="text-[11px] px-3 py-1.5 rounded-full bg-cream text-foreground/60">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-medium leading-[0.92] tracking-tight max-w-3xl mb-8">
            Scrapped and rebuilt 54 screens to unblock development.
          </h1>

          <p className="text-lg md:text-xl text-foreground/50 max-w-2xl leading-relaxed">
            The previous designer used wrong dimensions, had no design system, and created inconsistent spacing across every screen. Development was completely blocked. I rebuilt the entire mobile experience from scratch.
          </p>
        </div>
      </section>

      {/* Mockup */}
      <section className="px-6 md:px-12 pb-16 md:pb-20">
        <div className="max-w-[1100px] mx-auto">
          <div className="relative w-full rounded-2xl overflow-hidden bg-[#0a0a0a] flex items-center justify-center py-12" style={{ aspectRatio: "16 / 7" }}>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <div className="bg-[#ff5411]/30 blur-[80px] rounded-full w-[300px] h-[300px]" />
            </div>
            <div className="relative w-[60%] max-w-[500px]" style={{ aspectRatio: "236 / 175" }}>
              <Image src="/images/retriever/mockup.png" alt="Retriever app screens" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12"><div className="h-px bg-border" /></div>

      {/* Problem → Solution */}
      <section className="px-6 md:px-12 py-20 md:py-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-foreground/40 mb-6">What was broken</p>
              <ul className="space-y-3">
                {[
                  "Screens designed at 1080x1920 instead of proper iPhone dimensions (390x844)",
                  "No color palette, typography system, or component library",
                  "Prototype connections were tangled — impossible to follow user journeys",
                  "Spacing varied wildly across every screen",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-foreground/60 leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-foreground/30 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-foreground/40 mb-6">What I built</p>
              <ul className="space-y-3">
                {[
                  "Correct iPhone 13 Pro device frames with safe areas",
                  "Reusable component library — buttons, inputs, cards, navigation",
                  "8px spacing grid with consistent margins and padding",
                  "Typography scale with clear heading and body hierarchy",
                  "Brand colors with proper contrast ratios",
                  "Clean prototypes with organized user flows per persona",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-foreground/60 leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-foreground/30 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12"><div className="h-px bg-border" /></div>

      {/* Outcome + Placeholders */}
      <section className="px-6 md:px-12 py-20 md:py-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { value: "54", label: "Screens redesigned" },
              { value: "3", label: "User personas (Buyer, Seller, Rider)" },
              { value: "0", label: "Design debt remaining" },
            ].map((metric) => (
              <div key={metric.label} className="p-6 rounded-2xl bg-cream/50">
                <p className="text-2xl font-medium mb-1">{metric.value}</p>
                <p className="text-sm text-foreground/40">{metric.label}</p>
              </div>
            ))}
          </div>

          {/* TODO: Replace placeholders with before/after screens, component library, or flow screenshots */}
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Before vs After comparison",
              "Component library & design tokens",
            ].map((label) => (
              <div key={label} className="rounded-2xl bg-cream/50 border border-border flex items-center justify-center" style={{ aspectRatio: "16 / 10" }}>
                <p className="text-sm text-foreground/30 px-8 text-center">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="px-6 md:px-12 py-20 border-t border-border">
        <Link href="/work/gotrabaho" className="group block max-w-[1100px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-foreground/40 mb-3">Next Project</p>
              <h3 className="text-3xl md:text-4xl font-medium group-hover:text-foreground/60 transition-colors">GoTrabaho</h3>
            </div>
            <svg className="w-8 h-8 text-foreground/20 group-hover:text-foreground/60 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </div>
        </Link>
      </section>

      <footer className="py-12 px-6 md:px-12 border-t border-border">
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-foreground/40">&copy; {new Date().getFullYear()} Nathaniel Muyco</p>
          <div className="flex gap-8">
            <a href="https://linkedin.com/in/nathanielmuyco" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/40 hover:text-foreground transition-colors">LinkedIn</a>
            <a href="mailto:nathanmuyx@gmail.com" className="text-sm text-foreground/40 hover:text-foreground transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
