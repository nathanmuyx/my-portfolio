"use client";

import Image from "next/image";
import { CaseStudyLayout } from "@/components/case-study/CaseStudyLayout";
import { MoreProjects } from "@/components/case-study/MoreProjects";
import { TechIcon } from "@/components/case-study/TechIcon";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "overview", label: "Overview" },
  { id: "responsibilities", label: "Responsibilities" },
  { id: "work-samples", label: "Work Samples" },
  { id: "stack", label: "Stack" },
];

export default function StrategicVisionzPage() {
  return (
    <CaseStudyLayout
      projectTitle="Strategic Visionz"
      sections={sections}
      accentColor="#3b82f6"
    >
      {/* Hero */}
      <section id="hero" className="pt-32 md:pt-44 pb-20 md:pb-28 px-6 md:px-12 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-wrap gap-2 mb-8">
            {["Current Role", "Design Engineer", "Enterprise", "2024 - Present"].map((tag) => (
              <span key={tag} className="text-[11px] px-3 py-1.5 rounded-full bg-cream text-foreground/60">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-medium leading-[0.92] tracking-tight max-w-3xl mb-8">
            Design engineering for enterprise clients.
          </h1>

          <p className="text-lg md:text-xl text-foreground/50 max-w-2xl leading-relaxed">
            I bridge design and development at Strategic Visionz, shipping production-ready interfaces across no-code and custom-coded platforms for enterprise clients.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 md:px-12 pb-24 md:pb-32">
        <div className="max-w-[1100px] mx-auto">
          <div className="relative w-full rounded-2xl overflow-hidden bg-[#0a0a0a]" style={{ aspectRatio: "16 / 9" }}>
            <div className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <div className="bg-[#0a4299]/40 blur-[100px] rounded-full w-[500px] h-[500px]" />
            </div>
            <div className="absolute border-[6px] border-white/15 rounded-xl overflow-hidden left-[8%] top-[10%] w-[84%]" style={{ aspectRatio: "576 / 360" }}>
              <Image src="/images/strategic-visionz/homepage.png" alt="Strategic Visionz platform" fill className="object-cover object-top" />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Grid */}
      <section id="overview" className="px-6 md:px-12 pb-24 md:pb-32 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid md:grid-cols-3 gap-x-12 gap-y-10">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-foreground/40 mb-3">Role</p>
              <p className="text-sm leading-relaxed">Design Engineer. I own the full design-to-code pipeline, from Figma concepts through production frontend across multiple client projects.</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-foreground/40 mb-3">Platforms</p>
              <p className="text-sm leading-relaxed">WeWeb for no-code builds. React, Next.js, and Expo for custom projects. Figma for all design work.</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-foreground/40 mb-3">Scope</p>
              <p className="text-sm leading-relaxed">Enterprise clients across industries. Complex requirements, multiple stakeholders, strict technical constraints.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12"><div className="h-px bg-border" /></div>

      {/* What I Do */}
      <section id="responsibilities" className="px-6 md:px-12 py-24 md:py-32 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] uppercase tracking-wider text-foreground/40 mb-6">Responsibilities</p>
          <h2 className="text-3xl md:text-4xl font-medium leading-tight tracking-tight max-w-2xl mb-16">
            End-to-end, from concept to shipped product.
          </h2>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            {[
              { title: "Design systems", desc: "Building component libraries and design tokens that scale across enterprise applications. Consistency at scale." },
              { title: "Production frontend", desc: "Shipping real code, not just mockups. React, Next.js, and Expo for custom builds. WeWeb for rapid delivery." },
              { title: "Cross-functional work", desc: "Working directly with developers, PMs, and stakeholders. Reducing handoff friction by speaking both languages." },
              { title: "Technical feasibility", desc: "Assessing what's buildable during the design phase, not after. Preventing redesigns before they happen." },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="text-base font-medium mb-2">{item.title}</h3>
                <p className="text-sm text-foreground/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12"><div className="h-px bg-border" /></div>

      {/* Project Screenshots — Placeholder */}
      <section id="work-samples" className="px-6 md:px-12 py-24 md:py-32 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] uppercase tracking-wider text-foreground/40 mb-6">Work Samples</p>
          <h2 className="text-3xl md:text-4xl font-medium leading-tight tracking-tight max-w-2xl mb-16">
            Selected screens
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Dashboard overview, client project",
              "Design system components",
              "Mobile app screens (Expo)",
              "WeWeb build, enterprise client",
            ].map((label) => (
              <div key={label} className="rounded-2xl bg-cream/50 border border-border flex items-center justify-center" style={{ aspectRatio: "4 / 3" }}>
                <p className="text-sm text-foreground/30 px-8 text-center">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12"><div className="h-px bg-border" /></div>

      {/* Stack */}
      <section id="stack" className="px-6 md:px-12 py-24 md:py-32 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] uppercase tracking-wider text-foreground/40 mb-6">Stack</p>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-foreground/40 mb-6">No-Code</p>
              <div className="space-y-4">
                {[
                  { name: "WeWeb", role: "Visual frontend builder" },
                  { name: "Figma", role: "Design & prototyping" },
                ].map((tech) => (
                  <div key={tech.name} className="flex items-center justify-between pb-4 border-b border-border">
                    <span className="text-sm font-medium flex items-center gap-2"><TechIcon name={tech.name} />{tech.name}</span>
                    <span className="text-sm text-foreground/40">{tech.role}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-foreground/40 mb-6">Custom Code</p>
              <div className="space-y-4">
                {[
                  { name: "React / Next.js", role: "Web applications" },
                  { name: "Expo", role: "Mobile applications" },
                  { name: "TypeScript", role: "Type safety" },
                  { name: "Claude Code", role: "AI-assisted development" },
                ].map((tech) => (
                  <div key={tech.name} className="flex items-center justify-between pb-4 border-b border-border">
                    <span className="text-sm font-medium flex items-center gap-2"><TechIcon name={tech.name} />{tech.name}</span>
                    <span className="text-sm text-foreground/40">{tech.role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <MoreProjects currentSlug="strategic-visionz" />
    </CaseStudyLayout>
  );
}
