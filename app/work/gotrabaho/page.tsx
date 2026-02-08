"use client";

import Image from "next/image";
import { CaseStudyLayout } from "@/components/case-study/CaseStudyLayout";
import { MoreProjects } from "@/components/case-study/MoreProjects";
import { TechIcon } from "@/components/case-study/TechIcon";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "mockup", label: "Mockup" },
  { id: "details", label: "Details" },
];

export default function GoTrabahoPage() {
  return (
    <CaseStudyLayout
      projectTitle="GoTrabaho"
      sections={sections}
      accentColor="#10b981"
    >
      {/* Hero */}
      <section id="hero" className="pt-32 md:pt-44 pb-16 md:pb-20 px-6 md:px-12 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-wrap gap-2 mb-8">
            {["Capstone Project", "Product Design", "Flutter", "2023"].map((tag) => (
              <span key={tag} className="text-[11px] px-3 py-1.5 rounded-full bg-cream text-foreground/60">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-medium leading-[0.92] tracking-tight max-w-3xl mb-8">
            Solving the trust gap in blue-collar hiring.
          </h1>

          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl leading-relaxed">
            A capstone thesis project tackling a real problem — hiring blue-collar workers in the Philippines has no trust layer. GoTrabaho was my answer: a two-sided marketplace with identity verification and skill validation baked into the core experience.
          </p>
        </div>
      </section>

      {/* Mockup */}
      <section id="mockup" className="px-6 md:px-12 pb-16 md:pb-20 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="relative w-full rounded-2xl overflow-hidden bg-[#0a0a0a] flex items-center justify-center" style={{ aspectRatio: "16 / 9" }}>
            {/* Swoosh */}
            <div className="absolute bottom-[10%] right-[5%] w-[50%] h-[70%] pointer-events-none opacity-60">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/gotrabaho/swoosh.svg" alt="" className="w-full h-full" />
            </div>
            <div className="relative w-[40%] max-w-[300px]" style={{ aspectRatio: "201 / 233" }}>
              <Image src="/images/gotrabaho/mockup.webp" alt="GoTrabaho app screens" fill className="object-contain" priority sizes="(max-width: 768px) 80vw, 40vw" />
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
              <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-6">What I designed</p>
              <ul className="space-y-3">
                {[
                  "Identity verification onboarding — added friction intentionally to build trust",
                  "Two-sided marketplace: clients post jobs, workers browse and apply",
                  "Skills and experience validation with verification badges",
                  "In-app messaging between clients and workers",
                  "Review and rating system after job completion",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-foreground/60 leading-relaxed">
                    <span className="text-foreground/40 shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-4">Stack</p>
                <div className="space-y-4">
                  {[
                    { name: "Flutter", role: "Cross-platform app" },
                    { name: "Firebase", role: "Auth, database, functions" },
                    { name: "Figma", role: "Design & prototyping" },
                  ].map((tech) => (
                    <div key={tech.name} className="flex items-center justify-between pb-4 border-b border-border">
                      <span className="text-sm font-medium flex items-center gap-2"><TechIcon name={tech.name} />{tech.name}</span>
                      <span className="text-sm text-foreground/60">{tech.role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-6">Key insight</p>
              <p className="text-base leading-relaxed mb-6">
                I chose to add friction during onboarding — identity verification, skill validation — even though it would increase drop-off. For a platform where strangers show up at your home, trust isn't a feature. It's the product.
              </p>

              <div className="grid grid-cols-2 gap-3 mt-8">
                {/* Card 1: ID verification — two stacked phones */}
                <div className="relative rounded-xl bg-[#0a0a0a] overflow-hidden" style={{ aspectRatio: "253 / 540" }}>
                  <div className="absolute left-1/2 top-[32%] -translate-x-1/2 pointer-events-none w-[130%] aspect-square">
                    <div className="w-full h-full bg-[#fc8505] blur-[50px] rounded-full rotate-[131deg]" />
                  </div>
                  <div className="absolute z-0" style={{ left: "18.2%", top: "5.6%", width: "63.6%", height: "62.8%" }}>
                    <Image src="/images/gotrabaho/onboard-back.webp" alt="GoOnboard step 1" fill className="object-cover" loading="lazy" sizes="25vw" />
                  </div>
                  <div className="absolute z-10 shadow-[0px_-10px_33px_rgba(0,0,0,0.25)]" style={{ left: "9.1%", top: "14.4%", width: "81.8%", height: "80.7%" }}>
                    <Image src="/images/gotrabaho/onboard-front.webp" alt="NBI Clearance verification" fill className="object-cover" loading="lazy" sizes="25vw" />
                  </div>
                </div>

                {/* Card 2: Profile with portfolio */}
                <div className="relative rounded-xl bg-[#0a0a0a] overflow-hidden" style={{ aspectRatio: "253 / 540" }}>
                  <div className="absolute left-1/2 top-[32%] -translate-x-1/2 pointer-events-none w-[130%] aspect-square">
                    <div className="w-full h-full bg-[#fc8505] blur-[50px] rounded-full rotate-[131deg]" />
                  </div>
                  <div className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ width: "80%", height: "80%" }}>
                    <Image src="/images/gotrabaho/profile-portfolio.webp" alt="Verified worker profile with portfolio" fill className="object-cover" loading="lazy" sizes="25vw" />
                  </div>
                </div>

                {/* Card 3: Profile with reviews */}
                <div className="relative rounded-xl bg-[#0a0a0a] overflow-hidden" style={{ aspectRatio: "253 / 540" }}>
                  <div className="absolute left-1/2 top-[32%] -translate-x-1/2 pointer-events-none w-[130%] aspect-square">
                    <div className="w-full h-full bg-[#fc8505] blur-[50px] rounded-full rotate-[131deg]" />
                  </div>
                  <div className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-[5px] border-white/50 rounded-[14px] overflow-hidden" style={{ width: "80%", height: "80%" }}>
                    <Image src="/images/gotrabaho/profile-reviews.webp" alt="Worker profile with feedback and ratings" fill className="object-cover" loading="lazy" sizes="25vw" />
                  </div>
                </div>

                {/* Card 4: Jobs listing with unverified banner */}
                <div className="relative rounded-xl bg-[#0a0a0a] overflow-hidden" style={{ aspectRatio: "253 / 540" }}>
                  <div className="absolute left-1/2 top-[32%] -translate-x-1/2 pointer-events-none w-[130%] aspect-square">
                    <div className="w-full h-full bg-[#fc8505] blur-[50px] rounded-full rotate-[131deg]" />
                  </div>
                  <div className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-[5px] border-white/50 rounded-[14px] overflow-hidden" style={{ width: "78%", height: "79%" }}>
                    <Image src="/images/gotrabaho/jobs-unverified.webp" alt="Jobs listing with unverified warning" fill className="object-cover" loading="lazy" sizes="25vw" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MoreProjects currentSlug="gotrabaho" />
    </CaseStudyLayout>
  );
}
