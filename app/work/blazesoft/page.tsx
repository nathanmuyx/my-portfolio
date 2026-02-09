"use client";

import { LazyImage } from "@/components/ui/LazyImage";
import { CaseStudyLayout } from "@/components/case-study/CaseStudyLayout";
import { MoreProjects } from "@/components/case-study/MoreProjects";
import { TechIcon } from "@/components/case-study/TechIcon";
import { SkeletonCard } from "@/components/ui/SkeletonCard";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "mockup", label: "Mockup" },
  { id: "story", label: "Story" },
  { id: "products", label: "Products" },
  { id: "stack", label: "Stack" },
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
            {["Product Designer", "NDA", "6 Months", "2023 - 2024"].map((tag) => (
              <span key={tag} className="text-[11px] px-3 py-1.5 rounded-full bg-cream text-foreground/60">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-medium leading-[0.92] tracking-tight max-w-3xl mb-8">
            Cleaning up design chaos across casino products.
          </h1>

          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl leading-relaxed">
            Blazesoft had multiple casino products living in messy Adobe XD files with no structure. I migrated everything to Figma, introduced best practices, and trained the junior designer to maintain it.
          </p>
        </div>
      </section>

      {/* Mockup */}
      <section id="mockup" className="px-6 md:px-12 pb-16 md:pb-20 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <SkeletonCard className="relative w-full rounded-2xl overflow-hidden bg-[#0a0a0a]" style={{ aspectRatio: "894 / 620" }}>
            {/* Blazesoft logo */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[6%] w-[23%] pointer-events-none" style={{ aspectRatio: "454 / 80" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/blazesoft/blazesoft-logo.png" alt="Blazesoft" className="w-full h-full object-contain" />
            </div>
            {/* Back screenshot — YayCasino */}
            <div className="absolute border-[clamp(3px,0.5vw,7px)] border-white/20 rounded-[clamp(6px,1vw,16px)] overflow-hidden" style={{ left: "8.3%", top: "18%", width: "83.4%", aspectRatio: "746 / 479" }}>
              <LazyImage src="/images/blazesoft/yaycasino.webp" alt="YayCasino homepage" fill className="object-cover" priority sizes="(max-width: 768px) 90vw, 84vw" />
            </div>
            {/* Front screenshot — Sportzino */}
            <div className="absolute border-[clamp(3px,0.5vw,7px)] border-white/20 rounded-[clamp(6px,1vw,16px)] overflow-hidden shadow-[0px_-10px_33px_rgba(0,0,0,0.25)]" style={{ left: "15.3%", top: "31.5%", width: "69.5%", aspectRatio: "621 / 414" }}>
              <LazyImage src="/images/blazesoft/sportzino.webp" alt="Sportzino homepage" fill className="object-cover" priority sizes="(max-width: 768px) 70vw, 60vw" />
            </div>
          </SkeletonCard>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12"><div className="h-px bg-border" /></div>

      {/* Story */}
      <section id="story" className="px-6 md:px-12 py-20 md:py-24 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-6">The problem</p>
          <h2 className="text-3xl md:text-4xl font-medium leading-tight tracking-tight max-w-2xl mb-6">
            Every file was a maze.
          </h2>
          <p className="text-base text-foreground/70 max-w-2xl leading-relaxed mb-16">
            When I joined, all design work lived in Adobe XD. Files were massive, unorganized, and hard to navigate. There was no component structure — just flattened screens duplicated across files. Every new version meant downloading the entire file again. There was no way to share a link and get live updates. If you wanted to see the latest version, you had to ask someone to export and send it.
          </p>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12 mb-16">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-6">What I did</p>
              <ul className="space-y-3">
                {[
                  "Migrated all casino product files from Adobe XD to Figma",
                  "Introduced shareable links with live thumbnails — no more downloading files for version control",
                  "Built proper components, variants, and auto layouts across all product files",
                  "Established naming conventions and page organization for multi-product files",
                  "Trained the junior designer on Figma best practices — components, variants, auto layouts, and file structure",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-foreground/60 leading-relaxed">
                    <span className="text-foreground/40 shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-6">The shift</p>
              <div className="space-y-6">
                <p className="text-base leading-relaxed">
                  The XD workflow was download-based. Every review cycle meant someone exporting, sending a file, and hoping everyone was on the same version.
                </p>
                <p className="text-base leading-relaxed">
                  Figma changed that overnight. One link, always up to date, with thumbnails so you could see what changed without opening anything. Version history built in. Comments in context instead of over Slack.
                </p>
                <p className="text-base leading-relaxed">
                  But the tool switch alone wasn't enough. The files needed structure — real components instead of copied frames, variants instead of duplicated artboards, auto layout instead of manually resizing everything. That's what I spent most of my time building.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12"><div className="h-px bg-border" /></div>

      {/* Products */}
      <section id="products" className="px-6 md:px-12 py-20 md:py-24 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-6">Products I worked on</p>
          <p className="text-base text-foreground/70 max-w-2xl leading-relaxed mb-10">
            Blazesoft operated multiple casino brands. I edited and maintained design files across all of them — not just one product.
          </p>
          <div className="space-y-4">
            {[
              { name: "Sportzino", desc: "Sports betting and casino platform" },
              { name: "YeyCasino", desc: "Online casino product" },
              { name: "Fortune Coins", desc: "Social casino gaming" },
            ].map((product) => (
              <div key={product.name} className="flex items-center justify-between pb-4 border-b border-border">
                <span className="text-sm font-medium">{product.name}</span>
                <span className="text-sm text-foreground/60">{product.desc}</span>
              </div>
            ))}
            <div className="flex items-center justify-between pb-4 border-b border-border">
              <span className="text-sm font-medium text-foreground/50">+ others</span>
              <span className="text-sm text-foreground/40">Under NDA</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12"><div className="h-px bg-border" /></div>

      {/* Stack */}
      <section id="stack" className="px-6 md:px-12 py-20 md:py-24 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-4">Stack</p>
          <div className="max-w-md space-y-4">
            {[
              { name: "Figma", role: "Design, components & prototyping" },
              { name: "Adobe XD", role: "Legacy files (migrated from)" },
            ].map((tech) => (
              <div key={tech.name} className="flex items-center justify-between pb-4 border-b border-border">
                <span className="text-sm font-medium flex items-center gap-2"><TechIcon name={tech.name} />{tech.name}</span>
                <span className="text-sm text-foreground/60">{tech.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MoreProjects currentSlug="blazesoft" />
    </CaseStudyLayout>
  );
}
