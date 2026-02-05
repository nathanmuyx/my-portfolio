"use client";

import Image from "next/image";
import Link from "next/link";

export default function GoTrabahoPage() {
  return (
    <div className="bg-white text-foreground min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 bg-white/80 backdrop-blur-sm">
        <div className="max-w-[1100px] mx-auto flex justify-between items-center">
          <Link href="/" className="text-sm text-foreground/40 hover:text-foreground transition-colors flex items-center gap-2">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </Link>
          <span className="text-sm text-foreground/40">GoTrabaho</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-16 md:pb-20 px-6 md:px-12">
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

          <p className="text-lg md:text-xl text-foreground/50 max-w-2xl leading-relaxed">
            GoTrabaho connects blue-collar workers with clients in the Philippines. I designed the UI, built the Flutter app, and set up the Firebase backend — the full stack, solo.
          </p>
        </div>
      </section>

      {/* Mockup */}
      <section className="px-6 md:px-12 pb-16 md:pb-20">
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
      <section className="px-6 md:px-12 py-20 md:py-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-foreground/40 mb-6">What I built</p>
              <ul className="space-y-3">
                {[
                  "Identity verification onboarding — added friction intentionally to build trust",
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
                <p className="text-[11px] uppercase tracking-wider text-foreground/40 mb-4">Stack</p>
                <div className="space-y-4">
                  {[
                    { name: "Flutter", role: "Cross-platform app" },
                    { name: "Firebase", role: "Auth, database, functions" },
                    { name: "Figma", role: "Design & prototyping" },
                  ].map((tech) => (
                    <div key={tech.name} className="flex items-baseline justify-between pb-4 border-b border-border">
                      <span className="text-sm font-medium">{tech.name}</span>
                      <span className="text-sm text-foreground/40">{tech.role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-foreground/40 mb-6">Key decision</p>
              <p className="text-base leading-relaxed mb-6">
                I chose to add friction during onboarding — identity verification, skill validation — even though it increased initial drop-off. For a platform where strangers show up at your home, trust was the product.
              </p>

              {/* TODO: Replace placeholders with screen flows or user journey screenshots */}
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

      {/* Next Project */}
      <section className="px-6 md:px-12 py-20 border-t border-border">
        <Link href="/work/tactiv-studios" className="group block max-w-[1100px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-foreground/40 mb-3">Next Project</p>
              <h3 className="text-3xl md:text-4xl font-medium group-hover:text-foreground/60 transition-colors">Tactiv Studios</h3>
            </div>
            <svg className="w-8 h-8 text-foreground/20 group-hover:text-foreground/60 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </div>
        </Link>
      </section>

      <footer className="py-12 px-6 md:px-12 border-t border-border">
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-foreground/40">&copy; {new Date().getFullYear()} Nathaniel Muyco</p>
          <div className="flex gap-8">
            <a href="https://linkedin.com/in/nathanielmuyco" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/40 hover:text-foreground transition-colors">LinkedIn</a>
            <a href="mailto:nathanmuyx@gmail.com" className="text-sm text-foreground/40 hover:text-foreground transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
