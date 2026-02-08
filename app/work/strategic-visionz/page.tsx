"use client";

import Image from "next/image";
import { CaseStudyLayout } from "@/components/case-study/CaseStudyLayout";
import { MoreProjects } from "@/components/case-study/MoreProjects";
import { TechIcon } from "@/components/case-study/TechIcon";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "overview", label: "Overview" },
  { id: "responsibilities", label: "Responsibilities" },
  { id: "valet-waste", label: "Valet Waste" },
  { id: "franchise-social", label: "Franchise Social" },
  { id: "sv-website", label: "SV Website" },
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
            {["Product Designer", "Enterprise", "2024"].map((tag) => (
              <span key={tag} className="text-[11px] px-3 py-1.5 rounded-full bg-cream text-foreground/60">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-medium leading-[0.92] tracking-tight max-w-3xl mb-8">
            Product design at a software studio.
          </h1>

          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl leading-relaxed">
            I design production interfaces at Strategic Visionz — from Figma through WeWeb for no-code delivery, and Next.js and Expo with AI-assisted development for custom builds.
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
              <Image src="/images/strategic-visionz/homepage.webp" alt="Strategic Visionz platform" fill className="object-cover object-top" priority sizes="(max-width: 768px) 90vw, 84vw" />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Grid */}
      <section id="overview" className="px-6 md:px-12 pb-24 md:pb-32 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-3">Platforms</p>
              <p className="text-sm leading-relaxed">WeWeb for no-code builds. React and Next.js for custom projects. Figma for all design work.</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-3">Scope</p>
              <p className="text-sm leading-relaxed">Enterprise client in field services (Trash Butler) and an internal platform for the franchise (College Hunks). Complex operational requirements, strict technical constraints.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12"><div className="h-px bg-border" /></div>

      {/* Responsibilities */}
      <section id="responsibilities" className="px-6 md:px-12 py-24 md:py-32 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-6">Responsibilities</p>
          <h2 className="text-3xl md:text-4xl font-medium leading-tight tracking-tight max-w-2xl mb-16">
            End-to-end, from concept to shipped product.
          </h2>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            {[
              { title: "Design systems", desc: "Building component libraries and design tokens that scale across enterprise applications. Consistency at scale." },
              { title: "Design to delivery", desc: "Shipping real interfaces — not just mockups. WeWeb for no-code delivery, Next.js and Expo with AI-assisted development for custom builds." },
              { title: "Cross-functional work", desc: "Working directly with developers, PMs, and stakeholders. Reducing handoff friction by understanding both sides." },
              { title: "Technical feasibility", desc: "Assessing what's buildable during the design phase, not after. Preventing redesigns before they happen." },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="text-base font-medium mb-2">{item.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12"><div className="h-px bg-border" /></div>

      {/* Project 1: Valet Waste */}
      <section id="valet-waste" className="px-6 md:px-12 py-24 md:py-32 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span className="text-[11px] uppercase tracking-wider text-foreground/60">Completed and turned over</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium leading-tight tracking-tight max-w-2xl mb-4">
            Valet Waste Operations Dashboard
          </h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {["Figma", "WeWeb"].map((t) => (
              <span key={t} className="text-[11px] px-3 py-1.5 rounded-full bg-cream text-foreground/60 inline-flex items-center gap-1.5"><TechIcon name={t} className="w-3 h-3" />{t}</span>
            ))}
          </div>
          <p className="text-sm text-foreground/70 leading-relaxed max-w-2xl mb-12">
            An operations dashboard for a nationwide doorstep waste collection service managing multifamily communities. I designed the full UI in Figma and built the entire frontend in WeWeb.
          </p>

          {/* Dashboard screenshots */}
          <div className="relative rounded-2xl bg-[#0a0a0a] overflow-hidden mb-16" style={{ aspectRatio: "4 / 3" }}>
            <div className="absolute left-1/2 top-[-10%] -translate-x-1/2 pointer-events-none" style={{ width: "85%", aspectRatio: "1 / 1" }}>
              <div className="w-full h-full bg-[#0a4299] blur-[50px] rounded-full rotate-[131deg]" />
            </div>
            <div className="absolute border-[3px] border-white/20 rounded-lg overflow-hidden" style={{ left: "15%", top: "11%", width: "69.5%", aspectRatio: "504 / 282" }}>
              <Image src="/images/strategic-visionz/valet-waste-back.webp" alt="Valet Waste dashboard overview" fill className="object-cover" loading="lazy" sizes="(max-width: 768px) 70vw, 50vw" />
            </div>
            <div className="absolute border-[3px] border-[#adadad]/40 rounded-lg overflow-hidden shadow-[0px_-10px_27px_rgba(0,0,0,0.25)]" style={{ left: "10%", top: "20.5%", width: "80%", aspectRatio: "581 / 419" }}>
              <Image src="/images/strategic-visionz/valet-waste-front.webp" alt="Valet Waste community detail page" fill className="object-cover object-top" loading="lazy" sizes="(max-width: 768px) 80vw, 60vw" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            <div>
              <h3 className="text-base font-medium mb-4">What I designed</h3>
              <ul className="space-y-3">
                {[
                  "Community management dashboards and service detail modals",
                  "Filter-first interface for managing large community lists — multi-filter selection across service ID, shift, status, and more",
                  "Sticky navigation banners, community info cards, and responsive page layouts",
                  "A component system with consistent naming conventions",
                ].map((item) => (
                  <li key={item} className="text-sm text-foreground/70 leading-relaxed flex gap-2">
                    <span className="text-foreground/40 shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-base font-medium mb-4">What I built</h3>
              <ul className="space-y-3">
                {[
                  "Implemented all Figma designs into WeWeb components",
                  "Created reusable component structures with custom CSS classes",
                  "Built responsive layouts that worked across desktop and mobile",
                  "Handled complex data displays — pagination, search, and filtering for large datasets",
                ].map((item) => (
                  <li key={item} className="text-sm text-foreground/70 leading-relaxed flex gap-2">
                    <span className="text-foreground/40 shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12"><div className="h-px bg-border" /></div>

      {/* Project 2: Franchise Social */}
      <section id="franchise-social" className="px-6 md:px-12 py-24 md:py-32 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span className="text-[11px] uppercase tracking-wider text-foreground/60">MVP completed</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium leading-tight tracking-tight max-w-2xl mb-4">
            Franchise Internal Social Platform
          </h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {["Figma", "Claude Code", "Expo", "Next.js"].map((t) => (
              <span key={t} className="text-[11px] px-3 py-1.5 rounded-full bg-cream text-foreground/60 inline-flex items-center gap-1.5"><TechIcon name={t} className="w-3 h-3" />{t}</span>
            ))}
          </div>
          <p className="text-sm text-foreground/70 leading-relaxed max-w-2xl mb-12">
            An internal social platform for a national franchise company. I designed the UI in Figma and built the MVP in Next.js.
          </p>

          {/* Flex app phone mockups */}
          <div className="relative rounded-2xl bg-[#0a0a0a] overflow-hidden mb-16" style={{ aspectRatio: "725 / 360" }}>
            <div className="absolute left-1/2 top-[28%] -translate-x-1/2 pointer-events-none" style={{ width: "85%", aspectRatio: "1 / 1" }}>
              <div className="w-full h-full bg-[#0a4299] blur-[50px] rounded-full rotate-[131deg]" />
            </div>
            <div className="absolute z-10" style={{ left: "11.3%", top: "-1.3%", width: "40.7%", height: "131%" }}>
              <Image src="/images/strategic-visionz/flex-portrait.webp" alt="Flex app login screen" fill className="object-cover object-top" loading="lazy" sizes="(max-width: 768px) 35vw, 30vw" quality={75} />
            </div>
            <div className="absolute z-10" style={{ left: "52.8%", top: "-45%", width: "37.1%", height: "119%" }}>
              <Image src="/images/strategic-visionz/flex-landscape.webp" alt="Flex app social feed" fill className="object-cover object-bottom" loading="lazy" sizes="(max-width: 768px) 30vw, 25vw" quality={75} />
            </div>
          </div>

          <div>
            <h3 className="text-base font-medium mb-4">What I designed and built</h3>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-3">
              {[
                "Photo-level location tagging",
                "Job connection workflows",
                "Notification systems",
                "Social feed and engagement features",
              ].map((item) => (
                <p key={item} className="text-sm text-foreground/70 leading-relaxed flex gap-2">
                  <span className="text-foreground/40 shrink-0">•</span>
                  {item}
                </p>
              ))}
            </div>
          </div>

        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12"><div className="h-px bg-border" /></div>

      {/* Project 3: SV Website */}
      <section id="sv-website" className="px-6 md:px-12 py-24 md:py-32 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span className="text-[11px] uppercase tracking-wider text-foreground/60">Concept</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium leading-tight tracking-tight max-w-2xl mb-4">
            Strategic Visionz Website Concept
          </h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {["Claude Code", "Next.js"].map((t) => (
              <span key={t} className="text-[11px] px-3 py-1.5 rounded-full bg-cream text-foreground/60 inline-flex items-center gap-1.5"><TechIcon name={t} className="w-3 h-3" />{t}</span>
            ))}
          </div>
          <p className="text-sm text-foreground/70 leading-relaxed max-w-2xl mb-12">
            Designed and developed the studio's own website concept — moving away from generic agency positioning toward showcasing the actual tech stack and operational focus of the studio.
          </p>

          {/* Website screenshots — two offset columns */}
          <div className="relative rounded-2xl bg-[#0a0a0a] overflow-hidden mb-8" style={{ aspectRatio: "4 / 3" }}>
            <div className="absolute left-1/2 top-[40%] -translate-x-1/2 pointer-events-none" style={{ width: "85%", aspectRatio: "1 / 1" }}>
              <div className="w-full h-full bg-[#0a4299] blur-[50px] rounded-full rotate-[131deg]" />
            </div>
            <div className="absolute border-[2.5px] border-white/20 rounded-lg overflow-hidden" style={{ left: "3.7%", top: "12%", width: "45.4%", height: "200%" }}>
              <Image src="/images/strategic-visionz/sv-website.webp" alt="Strategic Visionz website — homepage" fill className="object-cover object-top" loading="lazy" sizes="(max-width: 768px) 45vw, 35vw" />
            </div>
            <div className="absolute border-[2.5px] border-white/20 rounded-[4px] overflow-hidden" style={{ left: "51.1%", top: "-68%", width: "45.4%", height: "200%" }}>
              <Image src="/images/strategic-visionz/sv-website.webp" alt="Strategic Visionz website — scrolled sections" fill className="object-cover object-bottom" loading="lazy" sizes="(max-width: 768px) 45vw, 35vw" />
            </div>
          </div>

          <div className="flex gap-4 mb-12">
            <a href="https://strategic-visionz.vercel.app" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/60 hover:text-foreground transition-colors underline underline-offset-4">
              View website
            </a>
            <a href="https://strategic-visionz.vercel.app/brand" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/60 hover:text-foreground transition-colors underline underline-offset-4">
              View branding
            </a>
          </div>

        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12"><div className="h-px bg-border" /></div>

      {/* Stack */}
      <section id="stack" className="px-6 md:px-12 py-24 md:py-32 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-6">Stack</p>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-6">No-Code</p>
              <div className="space-y-4">
                {[
                  { name: "WeWeb", role: "Visual frontend builder" },
                  { name: "Figma", role: "Design & prototyping" },
                ].map((tech) => (
                  <div key={tech.name} className="flex items-center justify-between pb-4 border-b border-border">
                    <span className="text-sm font-medium flex items-center gap-2"><TechIcon name={tech.name} />{tech.name}</span>
                    <span className="text-sm text-foreground/60">{tech.role}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-6">AI-Assisted Code</p>
              <div className="space-y-4">
                {[
                  { name: "Claude Code", role: "AI-assisted development" },
                  { name: "GitHub", role: "Version control" },
                  { name: "React / Next.js", role: "Web applications" },
                  { name: "Expo", role: "Mobile applications" },
                  { name: "TypeScript", role: "Type safety" },
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

      <MoreProjects currentSlug="strategic-visionz" />
    </CaseStudyLayout>
  );
}
