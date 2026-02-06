"use client";

import Image from "next/image";
import { CaseStudyLayout } from "@/components/case-study/CaseStudyLayout";
import { MoreProjects } from "@/components/case-study/MoreProjects";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "mockup", label: "Mockup" },
  { id: "problem-solution", label: "Problem & Solution" },
  { id: "outcome", label: "Outcome" },
];

export default function RetrieverPage() {
  return (
    <CaseStudyLayout
      projectTitle="Retriever PH"
      sections={sections}
      accentColor="#06b6d4"
    >
      {/* Hero */}
      <section id="hero" className="pt-32 md:pt-44 pb-16 md:pb-20 px-6 md:px-12 scroll-mt-24">
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

          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl leading-relaxed">
            The previous designer used wrong dimensions, had no design system, and created inconsistent spacing across every screen. Development was completely blocked. I rebuilt the entire mobile experience from scratch.
          </p>
        </div>
      </section>

      {/* Mockup */}
      <section id="mockup" className="px-6 md:px-12 pb-16 md:pb-20 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="relative w-full rounded-2xl overflow-hidden bg-[#0a0a0a] flex items-center justify-center py-12" style={{ aspectRatio: "16 / 7" }}>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <div className="bg-[#ff5411]/30 blur-[80px] rounded-full w-[300px] h-[300px]" />
            </div>
            <div className="relative w-[60%] max-w-[500px]" style={{ aspectRatio: "236 / 175" }}>
              <Image src="/images/retriever/mockup.png" alt="Retriever app screens" fill className="object-contain" priority sizes="(max-width: 768px) 90vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12"><div className="h-px bg-border" /></div>

      {/* Problem + Solution */}
      <section id="problem-solution" className="px-6 md:px-12 py-20 md:py-24 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-6">What was broken</p>
              <ul className="space-y-3">
                {[
                  "Screens designed at 1080x1920 instead of proper iPhone dimensions (390x844)",
                  "No color palette, typography system, or component library",
                  "Prototype connections were tangled, impossible to follow user journeys",
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
              <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-6">What I built</p>
              <ul className="space-y-3">
                {[
                  "Correct iPhone 13 Pro device frames with safe areas",
                  "Reusable component library: buttons, inputs, cards, navigation",
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

      {/* Outcome */}
      <section id="outcome" className="px-6 md:px-12 py-20 md:py-24 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { value: "54", label: "Screens redesigned" },
              { value: "3", label: "User personas (Buyer, Seller, Rider)" },
              { value: "0", label: "Design debt remaining" },
            ].map((metric) => (
              <div key={metric.label} className="p-6 rounded-2xl bg-[#0a0a0a]">
                <p className="text-2xl font-medium mb-1 text-white">{metric.value}</p>
                <p className="text-sm text-white/60">{metric.label}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Before vs After comparison",
              "Component library & design tokens",
            ].map((label) => (
              <div key={label} className="rounded-2xl bg-[#0a0a0a] flex items-center justify-center" style={{ aspectRatio: "16 / 10" }}>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MoreProjects currentSlug="retriever" />
    </CaseStudyLayout>
  );
}
