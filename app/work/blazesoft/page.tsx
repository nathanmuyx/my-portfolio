"use client";

import Image from "next/image";
import { CaseStudyLayout } from "@/components/case-study/CaseStudyLayout";
import { MoreProjects } from "@/components/case-study/MoreProjects";
import { TechIcon } from "@/components/case-study/TechIcon";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "screenshots", label: "Screenshots" },
  { id: "details", label: "Details" },
  { id: "design-system", label: "Design System" },
];

export default function BlazesoftPage() {
  return (
    <CaseStudyLayout
      projectTitle="Blazesoft"
      sections={sections}
      accentColor="#ec4899"
    >
      {/* Hero */}
      <section id="hero" className="pt-32 md:pt-44 pb-16 md:pb-20 px-6 md:px-12 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-wrap gap-2 mb-8">
            {["Product Designer", "Design Systems", "6 Months", "2023 - 2024"].map((tag) => (
              <span key={tag} className="text-[11px] px-3 py-1.5 rounded-full bg-cream text-foreground/60">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-medium leading-[0.92] tracking-tight max-w-3xl mb-8">
            Design system for casino and fintech products.
          </h1>

          <p className="text-lg md:text-xl text-foreground/50 max-w-2xl leading-relaxed">
            Blazesoft had multiple products with inconsistent UI and no shared components. I built and maintained the design system that unified everything, and migrated the team from XD to Figma.
          </p>
        </div>
      </section>

      {/* Screenshots */}
      <section id="screenshots" className="px-6 md:px-12 pb-16 md:pb-20 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden bg-[#0a0a0a]" style={{ aspectRatio: "4 / 3" }}>
              <div className="absolute left-[6%] top-[8%] w-[88%] rounded-lg overflow-hidden" style={{ aspectRatio: "198 / 152" }}>
                <Image src="/images/blazesoft/screenshot-1.png" alt="Sportzino design" fill className="object-cover" />
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden bg-[#0a0a0a]" style={{ aspectRatio: "4 / 3" }}>
              <div className="absolute left-[6%] top-[8%] w-[88%] rounded-lg overflow-hidden" style={{ aspectRatio: "197 / 152" }}>
                <Image src="/images/blazesoft/screenshot-2.png" alt="Blazesoft Figma file" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12"><div className="h-px bg-border" /></div>

      {/* Details */}
      <section id="details" className="px-6 md:px-12 py-20 md:py-24 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-foreground/40 mb-6">What I did</p>
              <ul className="space-y-3">
                {[
                  "Audited all existing UI patterns across products and identified inconsistencies",
                  "Established design tokens: colors, typography, spacing, elevation",
                  "Built 100+ reusable components with multiple variants and states",
                  "Created documentation for both designers and developers",
                  "Migrated the entire design workflow from Adobe XD to Figma",
                  "Set up Figma-to-code handoff workflows that cut production time",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-foreground/60 leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-foreground/30 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-foreground/40 mb-6">Outcome</p>
              <div className="space-y-6 mb-10">
                {[
                  { value: "100+", label: "Components built" },
                  { value: "50%", label: "Faster design-to-dev" },
                  { value: "1", label: "Unified design system" },
                ].map((metric) => (
                  <div key={metric.label} className="flex items-baseline justify-between pb-4 border-b border-border">
                    <span className="text-2xl font-medium">{metric.value}</span>
                    <span className="text-sm text-foreground/40">{metric.label}</span>
                  </div>
                ))}
              </div>

              <p className="text-[11px] uppercase tracking-wider text-foreground/40 mb-4">Tools</p>
              <div className="flex flex-wrap gap-2">
                {["Figma", "Design Tokens", "Adobe XD", "React"].map((tool) => (
                  <span key={tool} className="text-[11px] px-3 py-1.5 rounded-full bg-cream text-foreground/60 inline-flex items-center gap-1.5"><TechIcon name={tool} className="w-3 h-3" />{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12"><div className="h-px bg-border" /></div>

      {/* Design System */}
      <section id="design-system" className="px-6 md:px-12 py-20 md:py-24 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] uppercase tracking-wider text-foreground/40 mb-6">Design System</p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              "Component library overview",
              "Design tokens & color palette",
              "Typography & spacing scale",
            ].map((label) => (
              <div key={label} className="rounded-2xl bg-cream/50 border border-border flex items-center justify-center" style={{ aspectRatio: "4 / 3" }}>
                <p className="text-sm text-foreground/30 px-6 text-center">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MoreProjects currentSlug="blazesoft" />
    </CaseStudyLayout>
  );
}
