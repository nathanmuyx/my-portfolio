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
            {/* BEFORE — XD */}
            <div className="rounded-2xl bg-[#141414] p-6 md:p-8">
              <div className="flex items-center gap-2 mb-5">
                <TechIcon name="Adobe XD" className="w-4 h-4" />
                <p className="text-[11px] uppercase tracking-wider text-white/40">Before</p>
              </div>
              {/* Messy file list */}
              <div className="space-y-2.5">
                {[
                  { name: "Sportzino_FINAL_v3_copy.xd", size: "248 MB", color: "text-red-400/60" },
                  { name: "YeyCasino_homepage_OLD.xd", size: "189 MB", color: "text-red-400/60" },
                  { name: "Sportzino_FINAL_FINAL.xd", size: "312 MB", color: "text-red-400/60" },
                  { name: "FC_update_feb_NEW(2).xd", size: "201 MB", color: "text-red-400/60" },
                  { name: "YeyCasino_v2_backup.xd", size: "156 MB", color: "text-red-400/60" },
                ].map((file) => (
                  <div key={file.name} className="flex items-center gap-3 rounded-lg bg-white/[0.03] px-3 py-2.5">
                    <svg className="w-3.5 h-3.5 text-white/20 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-[11px] text-white/40 truncate flex-1 font-mono">{file.name}</span>
                    <span className={`text-[10px] shrink-0 ${file.color}`}>{file.size}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2">
                <svg className="w-3 h-3 text-red-400/50" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span className="text-[10px] text-red-400/50">Download to view. No links. No version history.</span>
              </div>
            </div>

            {/* AFTER — Figma */}
            <div className="rounded-2xl bg-[#141414] p-6 md:p-8">
              <div className="flex items-center gap-2 mb-5">
                <TechIcon name="Figma" className="w-4 h-4" />
                <p className="text-[11px] uppercase tracking-wider text-white/40">After</p>
              </div>
              {/* Clean file list with thumbnails */}
              <div className="space-y-2.5">
                {[
                  { name: "Sportzino", pages: "32 pages", status: "Updated 2h ago", thumb: "#FF6B35" },
                  { name: "YeyCasino", pages: "28 pages", status: "Updated today", thumb: "#FBBF24" },
                  { name: "Fortune Coins", pages: "24 pages", status: "Updated 1d ago", thumb: "#8B5CF6" },
                ].map((file) => (
                  <div key={file.name} className="flex items-center gap-3 rounded-lg bg-white/[0.03] px-3 py-2.5">
                    <div className="w-8 h-6 rounded-[3px] shrink-0 flex items-center justify-center" style={{ backgroundColor: file.thumb + "20", border: `1px solid ${file.thumb}30` }}>
                      <div className="w-3 h-2 rounded-[1px]" style={{ backgroundColor: file.thumb + "60" }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[11px] text-white/60 font-medium block">{file.name}</span>
                      <span className="text-[10px] text-white/25">{file.pages}</span>
                    </div>
                    <span className="text-[10px] text-emerald-400/50 shrink-0">{file.status}</span>
                  </div>
                ))}
              </div>
              <div className="h-px bg-white/[0.06] my-4" />
              <div className="space-y-2">
                {[
                  { label: "Components", value: "Reusable with variants" },
                  { label: "Auto layout", value: "Responsive frames" },
                  { label: "Version control", value: "Live links + history" },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between">
                    <span className="text-[10px] text-white/30">{row.label}</span>
                    <span className="text-[10px] text-emerald-400/40">{row.value}</span>
                  </div>
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
