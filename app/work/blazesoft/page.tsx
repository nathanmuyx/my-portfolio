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
          <SkeletonCard className="relative w-full rounded-2xl overflow-hidden bg-[#0a0a0a]" style={{ aspectRatio: "16 / 9" }}>
            {/* Blazesoft logo */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[5%] w-[23%] z-20 pointer-events-none" style={{ aspectRatio: "454 / 80" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/blazesoft/blazesoft-logo.png" alt="Blazesoft" className="w-full h-full object-contain" />
            </div>
            {/* Back screenshot — YayCasino */}
            <div className="absolute border-[clamp(2px,0.35vw,4px)] border-white/15 rounded-[clamp(6px,0.8vw,12px)] overflow-hidden left-[18%] top-[18%] w-[62%]" style={{ aspectRatio: "1440 / 926" }}>
              <LazyImage src="/images/blazesoft/yaycasino.webp" alt="YayCasino homepage" fill className="object-cover object-top" priority sizes="(max-width: 768px) 90vw, 62vw" />
            </div>
            {/* Front screenshot — Sportzino */}
            <div className="absolute border-[clamp(2px,0.35vw,4px)] border-white/15 rounded-[clamp(6px,0.8vw,12px)] overflow-hidden shadow-[0px_-10px_33px_rgba(0,0,0,0.25)] left-[12%] top-[38%] w-[74%]" style={{ aspectRatio: "1440 / 951" }}>
              <LazyImage src="/images/blazesoft/sportzino.webp" alt="Sportzino homepage" fill className="object-cover object-top" priority sizes="(max-width: 768px) 90vw, 74vw" />
            </div>
          </SkeletonCard>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12"><div className="h-px bg-border" /></div>

      {/* Story */}
      <section id="story" className="px-6 md:px-12 py-20 md:py-24 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-6">The shift</p>
          <h2 className="text-3xl md:text-4xl font-medium leading-tight tracking-tight max-w-2xl mb-6">
            From XD chaos to Figma structure.
          </h2>
          <p className="text-base text-foreground/70 max-w-2xl leading-relaxed mb-12">
            Design files were scattered across Adobe XD — no components, no naming, no version control. Every review meant downloading the latest file and hoping it was current. I migrated everything to Figma and built real structure into the files.
          </p>

          {/* Before / After illustration */}
          <div className="grid md:grid-cols-2 gap-4 mb-16 pointer-events-none select-none">

            {/* BEFORE — Google Drive with XD files */}
            <div className="rounded-2xl overflow-hidden border border-[#e0e0e0]">
              <p className="text-[11px] uppercase tracking-wider text-foreground/40 px-6 pt-5 pb-3">Before</p>
              {/* Drive header */}
              <div className="bg-white px-4 pt-3 pb-2 flex items-center gap-3 border-b border-[#e0e0e0]">
                {/* Drive logo */}
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 87.3 78" xmlns="http://www.w3.org/2000/svg">
                  <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da" />
                  <path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-20.4 35.3c-.8 1.4-1.2 2.95-1.2 4.5h27.5z" fill="#00ac47" />
                  <path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.5l5.85 13.95z" fill="#ea4335" />
                  <path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d" />
                  <path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc" />
                  <path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00" />
                </svg>
                <span className="text-[13px] text-[#5f6368]">Blazesoft Design Files</span>
              </div>
              {/* Drive table header */}
              <div className="bg-white px-4 py-2 flex items-center text-[10px] text-[#5f6368] border-b border-[#e0e0e0]">
                <span className="flex-1">Name</span>
                <span className="w-20 text-right hidden sm:block">Size</span>
              </div>
              {/* File rows */}
              <div className="bg-white">
                {[
                  { name: "Sportzino_FINAL_v3_copy.xd", size: "248 MB" },
                  { name: "YeyCasino_homepage_OLD.xd", size: "189 MB" },
                  { name: "Sportzino_FINAL_FINAL.xd", size: "312 MB" },
                  { name: "FC_update_feb_NEW(2).xd", size: "201 MB" },
                  { name: "YeyCasino_v2_backup.xd", size: "156 MB" },
                  { name: "Sportzino_landing_DONT_EDIT.xd", size: "274 MB" },
                ].map((file) => (
                  <div key={file.name} className="px-4 py-2.5 flex items-center border-b border-[#f1f3f4] hover:bg-[#f8f9fa]">
                    <div className="flex items-center gap-2.5 flex-1 min-w-0">
                      {/* XD file icon */}
                      <div className="w-5 h-5 rounded-[3px] bg-[#FF61F6]/15 flex items-center justify-center shrink-0">
                        <span className="text-[7px] font-bold text-[#FF61F6]">XD</span>
                      </div>
                      <span className="text-[11px] text-[#3c4043] truncate">{file.name}</span>
                    </div>
                    <span className="text-[10px] text-[#5f6368] w-20 text-right shrink-0 hidden sm:block">{file.size}</span>
                  </div>
                ))}
              </div>
              {/* Footer hint */}
              <div className="bg-[#f8f9fa] px-4 py-2.5 border-t border-[#e0e0e0]">
                <span className="text-[10px] text-[#80868b]">Download .xd to view — no preview, no version history</span>
              </div>
            </div>

            {/* AFTER — Figma file browser */}
            <div className="rounded-2xl overflow-hidden bg-[#1e1e1e]">
              <p className="text-[11px] uppercase tracking-wider text-white/40 px-6 pt-5 pb-3">After</p>
              {/* Figma header bar */}
              <div className="px-4 pt-2 pb-3 flex items-center gap-2.5 border-b border-white/[0.06]">
                <TechIcon name="Figma" className="w-4 h-4" />
                <span className="text-[12px] text-white/60">Blazesoft</span>
                <span className="text-[10px] text-white/25 ml-auto">3 files</span>
              </div>
              {/* File cards grid */}
              <div className="p-4 grid grid-cols-2 gap-3">
                {[
                  { name: "Sportzino", edited: "Edited 2h ago", thumb: "/images/blazesoft/sportzino.webp" },
                  { name: "YeyCasino", edited: "Edited today", thumb: "/images/blazesoft/yaycasino.webp" },
                ].map((file) => (
                  <div key={file.name} className="rounded-lg overflow-hidden bg-white/[0.04] border border-white/[0.06]">
                    {/* Thumbnail */}
                    <div className="relative w-full bg-[#2c2c2c]" style={{ aspectRatio: "16 / 10" }}>
                      <LazyImage src={file.thumb} alt={file.name} fill className="object-cover object-top" loading="lazy" sizes="200px" />
                    </div>
                    {/* File info */}
                    <div className="px-3 py-2.5">
                      <p className="text-[11px] text-white/70 font-medium">{file.name}</p>
                      <p className="text-[9px] text-white/30 mt-0.5">{file.edited}</p>
                    </div>
                  </div>
                ))}
                {/* Fortune Coins — placeholder since no screenshot */}
                <div className="rounded-lg overflow-hidden bg-white/[0.04] border border-white/[0.06] col-span-2">
                  <div className="flex items-center gap-3 px-3 py-3">
                    <div className="w-8 h-6 rounded-[3px] bg-[#8B5CF6]/15 border border-[#8B5CF6]/20 flex items-center justify-center shrink-0">
                      <div className="w-3 h-2 rounded-[1px] bg-[#8B5CF6]/40" />
                    </div>
                    <div>
                      <p className="text-[11px] text-white/70 font-medium">Fortune Coins</p>
                      <p className="text-[9px] text-white/30 mt-0.5">Edited 1d ago</p>
                    </div>
                    <span className="text-[9px] text-white/20 ml-auto">+ others</span>
                  </div>
                </div>
              </div>
              {/* Bottom bar */}
              <div className="px-4 py-3 border-t border-white/[0.06] flex items-center gap-4">
                {["Components", "Variants", "Auto layout"].map((tag) => (
                  <span key={tag} className="text-[9px] px-2 py-0.5 rounded-full bg-white/[0.06] text-white/30">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* What I did — simplified */}
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-6">What I did</p>
              <ul className="space-y-3">
                {[
                  "Migrated all product files from Adobe XD to Figma",
                  "Built components, variants, and auto layouts for every product",
                  "Set up shareable links — no more downloading files to review",
                  "Trained junior designer on Figma best practices",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-foreground/60 leading-relaxed">
                    <span className="text-foreground/40 shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-6">What changed</p>
              <ul className="space-y-3">
                {[
                  "One link per product — always current, with thumbnails",
                  "Version history replaced file-naming chaos",
                  "Structured files across Sportzino, YeyCasino, Fortune Coins, and more",
                  "Junior designer became self-sufficient in Figma",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-foreground/60 leading-relaxed">
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

      {/* Products */}
      <section id="products" className="px-6 md:px-12 py-20 md:py-24 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-6">Products</p>
          <div className="max-w-lg space-y-4">
            {[
              { name: "Sportzino", desc: "Sports betting & casino" },
              { name: "YeyCasino", desc: "Online casino" },
              { name: "Fortune Coins", desc: "Social casino" },
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
