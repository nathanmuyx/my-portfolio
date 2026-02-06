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
            {["Designer & Developer", "Flutter", "End-to-End", "2023"].map((tag) => (
              <span key={tag} className="text-[11px] px-3 py-1.5 rounded-full bg-cream text-foreground/60">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-medium leading-[0.92] tracking-tight max-w-3xl mb-8">
            Job matching app designed and built end-to-end.
          </h1>

          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl leading-relaxed">
            GoTrabaho connects blue-collar workers with clients in the Philippines. I designed the UI, built the Flutter app, and set up the Firebase backend. The full stack, solo.
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
              <Image src="/images/gotrabaho/mockup.png" alt="GoTrabaho app screens" fill className="object-contain" />
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
              <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-6">What I built</p>
              <ul className="space-y-3">
                {[
                  "Identity verification onboarding, added friction intentionally to build trust",
                  "Two-sided marketplace: recruiters post jobs, workers browse and apply",
                  "Skills and experience validation with verification badges",
                  "In-app messaging between clients and workers",
                  "Review and rating system after job completion",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-foreground/60 leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-foreground/30 mt-2 flex-shrink-0" />
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
              <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-6">Key decision</p>
              <p className="text-base leading-relaxed mb-6">
                I chose to add friction during onboarding (identity verification, skill validation) even though it increased initial drop-off. For a platform where strangers show up at your home, trust was the product.
              </p>

              <div className="grid grid-cols-2 gap-3 mt-8">
                {[
                  "Recruiter flow screens",
                  "Worker flow screens",
                  "Onboarding verification",
                  "Job posting & messaging",
                ].map((label) => (
                  <div key={label} className="rounded-xl bg-cream/50 border border-border flex items-center justify-center" style={{ aspectRatio: "3 / 4" }}>
                    <p className="text-[11px] text-foreground/30 px-3 text-center">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <MoreProjects currentSlug="gotrabaho" />
    </CaseStudyLayout>
  );
}
