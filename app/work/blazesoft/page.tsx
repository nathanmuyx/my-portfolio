"use client";

import { LazyImage } from "@/components/ui/LazyImage";
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
      accentColor="#FF6B35"
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

          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl leading-relaxed">
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
                <LazyImage src="/images/blazesoft/screenshot-1.webp" alt="Sportzino design" fill className="object-cover" priority sizes="(max-width: 768px) 90vw, 45vw" />
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden bg-[#0a0a0a]" style={{ aspectRatio: "4 / 3" }}>
              <div className="absolute left-[6%] top-[8%] w-[88%] rounded-lg overflow-hidden" style={{ aspectRatio: "197 / 152" }}>
                <LazyImage src="/images/blazesoft/screenshot-2.webp" alt="Blazesoft Figma file" fill className="object-cover" priority sizes="(max-width: 768px) 90vw, 45vw" />
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
              <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-6">What I did</p>
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
                    <span className="text-foreground/40 shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-6">Outcome</p>
              <div className="space-y-6 mb-10">
                {[
                  { value: "100+", label: "Components built" },
                  { value: "50%", label: "Faster design-to-dev" },
                  { value: "1", label: "Unified design system" },
                ].map((metric) => (
                  <div key={metric.label} className="flex items-baseline justify-between pb-4 border-b border-border">
                    <span className="text-2xl font-medium">{metric.value}</span>
                    <span className="text-sm text-foreground/60">{metric.label}</span>
                  </div>
                ))}
              </div>

              <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-4">Stack</p>
              <div className="space-y-4">
                {[
                  { name: "Figma", role: "Design & prototyping" },
                  { name: "Design Tokens", role: "Systematic theming" },
                  { name: "Adobe XD", role: "Legacy design files" },
                  { name: "React", role: "Component development" },
                ].map((tech) => (
                  <div key={tech.name} className="flex items-center justify-between pb-4 border-b border-border">
                    <span className="text-sm font-medium flex items-center gap-2"><TechIcon name={tech.name} />{tech.name}</span>
                    <span className="text-sm text-foreground/60">{tech.role}</span>
                  </div>
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
          <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-6">Design System</p>

          {/* Panel 1 — Component Library (full-width) */}
          <div className="rounded-2xl bg-[#141414] p-6 md:p-8 mb-4 pointer-events-none select-none">
            <p className="text-[11px] uppercase tracking-wider text-white/40 mb-5">Components</p>

            <div className="grid md:grid-cols-3 gap-4">
              {/* Game card */}
              <div className="rounded-xl bg-[#0F0F0F] border border-white/[0.06] overflow-hidden">
                <div className="h-28 bg-gradient-to-br from-[#FF6B35]/30 to-[#1A1A2E] flex items-end p-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold text-white">Blazing Sevens</span>
                      <span className="rounded-full bg-[#22C55E]/20 px-1.5 py-0.5 text-[9px] font-medium text-[#22C55E]">Live</span>
                    </div>
                    <span className="text-[10px] text-white/40">$2,450 pot</span>
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <span className="text-xs text-white/50">Min $0.50</span>
                  <span className="rounded-md bg-[#FF6B35] px-3 py-1.5 text-xs font-medium text-white">Play Now</span>
                </div>
              </div>

              {/* Deposit card */}
              <div className="rounded-xl bg-[#0F0F0F] border border-white/[0.06] p-4 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-medium text-white mb-3">Quick Deposit</p>
                  <div className="flex gap-2 mb-3">
                    {["$10", "$25", "$50"].map((amt) => (
                      <span key={amt} className={`rounded-md px-3 py-1.5 text-xs font-medium ${amt === "$25" ? "bg-[#FF6B35] text-white" : "bg-white/[0.06] text-white/50"}`}>{amt}</span>
                    ))}
                  </div>
                  <div className="rounded-lg bg-white/[0.04] border border-white/[0.06] px-3 py-2 mb-3">
                    <span className="text-xs text-white/30">Enter amount...</span>
                  </div>
                </div>
                <span className="rounded-md bg-[#FF6B35] px-4 py-2 text-xs font-medium text-white text-center">Deposit</span>
              </div>

              {/* Player stats card */}
              <div className="rounded-xl bg-[#0F0F0F] border border-white/[0.06] p-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FFB088]" />
                  <div>
                    <p className="text-xs font-medium text-white">Player_92</p>
                    <p className="text-[10px] text-white/40">Gold Tier</p>
                  </div>
                </div>
                <div className="space-y-2.5">
                  {[
                    { label: "Balance", value: "$1,240.00" },
                    { label: "Wagered", value: "$8,300" },
                    { label: "Win Rate", value: "47.2%" },
                  ].map((stat) => (
                    <div key={stat.label} className="flex items-center justify-between">
                      <span className="text-[11px] text-white/40">{stat.label}</span>
                      <span className="text-xs font-medium text-white/80">{stat.value}</span>
                    </div>
                  ))}
                </div>
                <div className="h-px bg-white/[0.06] my-3" />
                <div className="flex gap-2">
                  <span className="rounded-full bg-[#FF6B35]/15 px-2 py-0.5 text-[9px] font-medium text-[#FF6B35]">VIP</span>
                  <span className="rounded-full bg-white/[0.06] px-2 py-0.5 text-[9px] font-medium text-white/40">Verified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Color Tokens + Typography/Spacing */}
          <div className="grid md:grid-cols-2 gap-4">

            {/* Panel 2 — Color Palette & Tokens */}
            <div className="rounded-2xl bg-[#141414] p-6 md:p-8 pointer-events-none select-none">
              <p className="text-[11px] uppercase tracking-wider text-white/40 mb-5">Tokens</p>
              <div className="grid grid-cols-3 gap-x-3 gap-y-4">
                {[
                  { name: "brand-orange", hex: "#FF6B35", color: "#FF6B35" },
                  { name: "bg-elevated", hex: "#1A1A2E", color: "#1A1A2E" },
                  { name: "brand-peach", hex: "#FFB088", color: "#FFB088" },
                  { name: "bg-base", hex: "#0F0F0F", color: "#0F0F0F" },
                  { name: "status-win", hex: "#22C55E", color: "#22C55E" },
                  { name: "status-loss", hex: "#EF4444", color: "#EF4444" },
                ].map((swatch) => (
                  <div key={swatch.name}>
                    <div
                      className="aspect-[4/3] rounded-lg border border-white/[0.06] mb-2"
                      style={{ backgroundColor: swatch.color }}
                    />
                    <p className="text-[10px] font-medium text-white/50 mb-0.5">{swatch.name}</p>
                    <p className="text-[10px] font-mono text-white/30">{swatch.hex}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Panel 3 — Typography & Spacing Scale */}
            <div className="rounded-2xl bg-[#141414] p-6 md:p-8 pointer-events-none select-none">
              <p className="text-[11px] uppercase tracking-wider text-white/40 mb-5">Type Scale</p>

              <div className="space-y-3 mb-7">
                {[
                  { sample: "Jackpot Winners", note: "display/24 semi", className: "text-2xl font-semibold text-white" },
                  { sample: "Account Settings", note: "heading/18 med", className: "text-lg font-medium text-white/80" },
                  { sample: "Your session has ended.", note: "body/14 reg", className: "text-sm text-white/60" },
                  { sample: "Last updated 2 min ago", note: "caption/12", className: "text-xs text-white/40" },
                ].map((t) => (
                  <div key={t.sample} className="flex items-baseline justify-between gap-4">
                    <span className={t.className}>{t.sample}</span>
                    <span className="text-[10px] font-mono text-white/25 shrink-0">{t.note}</span>
                  </div>
                ))}
              </div>

              <div className="h-px bg-white/[0.06] mb-5" />

              <p className="text-[11px] uppercase tracking-wider text-white/40 mb-4">Spacing</p>
              <div className="space-y-2.5">
                {[
                  { label: "xs", px: "4", w: "8%" },
                  { label: "sm", px: "8", w: "16%" },
                  { label: "md", px: "16", w: "32%" },
                  { label: "lg", px: "24", w: "48%" },
                  { label: "xl", px: "32", w: "64%" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-3">
                    <span className="text-[10px] font-mono text-white/30 w-5 shrink-0">{s.label}</span>
                    <div className="h-2 rounded-sm bg-[#FF6B35]/50" style={{ width: s.w }} />
                    <span className="text-[10px] font-mono text-white/20">{s.px}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <MoreProjects currentSlug="blazesoft" />
    </CaseStudyLayout>
  );
}
