"use client";

import { useRef, useState, useCallback } from "react";
import { LazyImage } from "@/components/ui/LazyImage";
import { CaseStudyLayout } from "@/components/case-study/CaseStudyLayout";
import { MoreProjects } from "@/components/case-study/MoreProjects";
import { TechIcon } from "@/components/case-study/TechIcon";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "mockup", label: "Mockup" },
  { id: "overview", label: "Overview" },
  { id: "the-mess", label: "The Mess" },
  { id: "what-i-fixed", label: "What I Fixed" },
  { id: "design-system", label: "Design System" },
  { id: "screens", label: "Key Screens" },
  { id: "outcome", label: "Outcome" },
  { id: "stack", label: "Stack" },
];

const oldScreens = [
  { src: "/images/retriever/old-screen-1.webp", alt: "Old login screen" },
  { src: "/images/retriever/old-screen-2.webp", alt: "Old signup screen" },
  { src: "/images/retriever/old-screen-3.webp", alt: "Old food dashboard" },
  { src: "/images/retriever/old-screen-4.webp", alt: "Old restaurant page" },
  { src: "/images/retriever/old-screen-5.webp", alt: "Old menu page" },
  { src: "/images/retriever/old-screen-6.webp", alt: "Old wallet screen" },
];

const slides = [oldScreens.slice(0, 4), oldScreens.slice(4)];

function OldScreensCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="relative rounded-2xl overflow-hidden bg-[#0a0a0a]">
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-400 ease-out"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {slides.map((slide, si) => (
            <div key={si} className="flex gap-3 justify-center shrink-0 w-full px-3 py-10 md:px-4">
              {slide.map((screen) => (
                <div key={screen.src} className="relative shrink-0 rounded-sm overflow-hidden" style={{ width: "min(28%, 160px)", aspectRatio: "9 / 16" }}>
                  <LazyImage src={screen.src} alt={screen.alt} fill className="object-cover" loading="lazy" sizes="160px" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Arrow buttons */}
      {activeSlide > 0 && (
        <button
          onClick={() => setActiveSlide(0)}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
          aria-label="Previous slide"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
        </button>
      )}
      {activeSlide < slides.length - 1 && (
        <button
          onClick={() => setActiveSlide(1)}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
          aria-label="Next slide"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
        </button>
      )}

      {/* Dot indicators — 2 slides */}
      <div className="flex justify-center gap-2 pb-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveSlide(i)}
            className="w-2 h-2 rounded-full transition-colors"
            style={{ backgroundColor: i === activeSlide ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.2)" }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function RetrieverPage() {
  return (
    <CaseStudyLayout
      projectTitle="Retriever PH"
      sections={sections}
      accentColor="#06b6d4"
    >
      {/* Hero */}
      <section id="hero" className="pt-32 md:pt-44 pb-16 md:pb-20 px-6 md:px-12 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-wrap gap-2 mb-8">
            {["Product Designer", "Redesign", "54 Screens", "2 Months", "2022"].map((tag) => (
              <span key={tag} className="text-[11px] px-3 py-1.5 rounded-full bg-cream text-foreground/60">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-medium leading-[0.92] tracking-tight max-w-3xl mb-8">
            Scrapped and rebuilt 54 screens to unblock development.
          </h1>

          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl leading-relaxed">
            Retriever PH is a food delivery app for Davao City. The previous designer&apos;s work was unusable — wrong dimensions, no system, broken prototypes. I rebuilt everything from scratch in two months.
          </p>
        </div>
      </section>

      {/* Mockup */}
      <section id="mockup" className="px-6 md:px-12 pb-16 md:pb-20 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="relative w-full rounded-2xl overflow-hidden bg-[#0a0a0a] flex items-center justify-center py-12" style={{ aspectRatio: "16 / 7" }}>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <div className="bg-[#ff5411]/30 blur-[80px] rounded-full w-[300px] h-[300px]" />
            </div>
            <div className="relative w-[60%] max-w-[500px]" style={{ aspectRatio: "236 / 175" }}>
              <LazyImage src="/images/retriever/mockup.webp" alt="Retriever app screens" fill className="object-contain" priority sizes="(max-width: 768px) 90vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12"><div className="h-px bg-border" /></div>

      {/* Overview */}
      <section id="overview" className="px-6 md:px-12 py-20 md:py-24 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-6">Overview</p>
          <p className="text-2xl md:text-3xl font-medium leading-snug tracking-tight max-w-3xl mb-16">
            A local food delivery startup needed their app redesigned after the first designer&apos;s work couldn&apos;t be implemented. I rebuilt the entire mobile experience across three user types — buyer, seller, and rider.
          </p>

          <div className="grid md:grid-cols-3 gap-x-12 gap-y-8">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-3">Role</p>
              <p className="text-sm text-foreground/70 leading-relaxed">Sole product designer. Responsible for audit, design system, all screens, prototyping, and developer handoff.</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-3">Timeline</p>
              <p className="text-sm text-foreground/70 leading-relaxed">June — August 2022. Two months from audit to complete handoff of 54 screens.</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-3">Platform</p>
              <p className="text-sm text-foreground/70 leading-relaxed">Mobile app (iOS & Android). Three user types: Buyer, Merchant, Rider.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12"><div className="h-px bg-border" /></div>

      {/* The Mess */}
      <section id="the-mess" className="px-6 md:px-12 py-20 md:py-24 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-6">What I inherited</p>
          <h2 className="text-3xl md:text-4xl font-medium leading-tight tracking-tight max-w-2xl mb-16">
            The existing file was unusable.
          </h2>

          {/* Annotated Figma screenshot — old file */}
          <div className="relative rounded-2xl overflow-hidden bg-[#0a0a0a] mb-6" style={{ aspectRatio: "2334 / 931" }}>
            <LazyImage src="/images/retriever/old-figma-file.webp" alt="Previous designer's Figma file showing 1080x1920 frames, confusing flow lines, and no brand guidelines" fill className="object-cover" loading="lazy" sizes="(max-width: 768px) 90vw, 1100px" />
          </div>
          <p className="text-sm text-foreground/50 mb-16">The previous designer&apos;s Figma file: 1080x1920 frames (not a real device), no brand guidelines, tangled prototype connections, and inconsistent layouts across every screen.</p>

          {/* Old screens carousel */}
          <OldScreensCarousel />
          <p className="text-sm text-foreground/50 mt-4">Sample screens from the previous designer. Orange-outlined inputs confused users, illustrations were inconsistent, and spacing varied on every screen.</p>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12"><div className="h-px bg-border" /></div>

      {/* What I Fixed */}
      <section id="what-i-fixed" className="px-6 md:px-12 py-20 md:py-24 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-6">What I fixed</p>
          <h2 className="text-3xl md:text-4xl font-medium leading-tight tracking-tight max-w-2xl mb-16">
            Started fresh. Built the system first.
          </h2>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-6">Broken</p>
              <ul className="space-y-3">
                {[
                  "1080x1920 frames — not a real device size",
                  "No color palette, type scale, or components",
                  "Tangled prototype connections",
                  "Inconsistent spacing across every screen",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-foreground/60 leading-relaxed">
                    <span className="text-red-400 shrink-0">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-6">Rebuilt</p>
              <ul className="space-y-3">
                {[
                  "iPhone 13 Pro frames (390x844) with safe areas",
                  "Full design system: colors, type, components",
                  "Organized flows per persona (Buyer, Seller, Rider)",
                  "8px spacing grid with consistent margins",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-foreground/60 leading-relaxed">
                    <span className="text-green-500 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Improved Figma file screenshot */}
          <div className="relative rounded-2xl overflow-hidden bg-[#0a0a0a] mt-16" style={{ aspectRatio: "2334 / 943" }}>
            <LazyImage src="/images/retriever/new-figma-file.webp" alt="Rebuilt Figma file with Design Guidelines page, organized persona sections, and proper 390x844 frames" fill className="object-cover" loading="lazy" sizes="(max-width: 768px) 90vw, 1100px" />
          </div>
          <p className="text-sm text-foreground/50 mt-4">Rebuilt file: Design Guidelines page, organized persona sections (Buyer, Merchant, Rider, Fetch), proper 390x844 frames, and clean layer naming.</p>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12"><div className="h-px bg-border" /></div>

      {/* Design System */}
      <section id="design-system" className="px-6 md:px-12 py-20 md:py-24 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-6">Design system</p>
          <h2 className="text-3xl md:text-4xl font-medium leading-tight tracking-tight max-w-2xl mb-16">
            Typography, colors, and components — defined before any screen.
          </h2>

          {/* Typography + Colors */}
          <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "2334 / 1247" }}>
            <LazyImage src="/images/retriever/typography-colors.webp" alt="Typography specimens (HK RTVR primary, Criteria CF secondary) and color palette with grays, primary orange, secondary peach, and tertiary teal" fill className="object-cover" loading="lazy" sizes="(max-width: 768px) 90vw, 1100px" />
          </div>
          <p className="text-sm text-foreground/50 mt-4">HK RTVR (primary) and Criteria CF (secondary). Client-specified color palette with proper contrast ratios across all interface elements.</p>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12"><div className="h-px bg-border" /></div>

      {/* Key Screens */}
      <section id="screens" className="px-6 md:px-12 py-20 md:py-24 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-6">Key screens</p>
          <h2 className="text-3xl md:text-4xl font-medium leading-tight tracking-tight max-w-2xl mb-16">
            Four areas that show the biggest improvements.
          </h2>

          <div className="space-y-24">
            {/* Sign Up / Sign In */}
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="rounded-2xl overflow-hidden bg-[#0a0a0a] p-6 md:p-10">
                <div className="relative w-full" style={{ aspectRatio: "634 / 625" }}>
                  <LazyImage src="/images/retriever/screens-signin.webp" alt="Sign In and Create Account screens" fill className="object-contain" loading="lazy" sizes="(max-width: 768px) 90vw, 500px" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3">Sign Up / Sign In</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">Removed orange-outlined inputs that looked like error states. Cleaned up unnecessary illustrations. Added proper validation hints and password visibility toggles.</p>
              </div>
            </div>

            {/* Food Dashboard */}
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="md:order-2 rounded-2xl overflow-hidden bg-[#0a0a0a] p-6 md:p-10">
                <div className="relative w-full" style={{ aspectRatio: "946 / 933" }}>
                  <LazyImage src="/images/retriever/screens-dashboard.webp" alt="Food Dashboard and Story preview screens" fill className="object-contain" loading="lazy" sizes="(max-width: 768px) 90vw, 500px" />
                </div>
              </div>
              <div className="md:order-1">
                <h3 className="text-xl font-medium mb-3">Food Dashboard</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">Established clear hierarchy: stories first, then offers and discounts, then food. Added viewed/unviewed indicators to stories. Reorganized restaurant cards with consistent distance and rating placement.</p>
              </div>
            </div>

            {/* Product Details + Wallet */}
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="rounded-2xl overflow-hidden bg-[#0a0a0a] p-6 md:p-10">
                <div className="relative w-full" style={{ aspectRatio: "980 / 933" }}>
                  <LazyImage src="/images/retriever/screens-wallet.webp" alt="Wallet and transaction receipt screens" fill className="object-contain" loading="lazy" sizes="(max-width: 768px) 90vw, 500px" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3">Product Details & Wallet</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">Removed text overlays on food images for a cleaner, consistent look. Redesigned wallet with clear balance visibility, proper transaction history, and a new receipt confirmation screen.</p>
              </div>
            </div>

            {/* Order Tracking */}
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="md:order-2 rounded-2xl overflow-hidden bg-[#0a0a0a] p-6 md:p-10">
                <div className="relative w-full" style={{ aspectRatio: "980 / 933" }}>
                  <LazyImage src="/images/retriever/screens-tracking.webp" alt="Order tracking map and in-app messaging screens" fill className="object-contain" loading="lazy" sizes="(max-width: 768px) 90vw, 500px" />
                </div>
              </div>
              <div className="md:order-1">
                <h3 className="text-xl font-medium mb-3">Order Tracking</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">Designed from scratch — this screen didn&apos;t exist before. Live map with driver location, estimated delivery time, and in-app messaging. Kept it minimal since users check briefly then leave.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12"><div className="h-px bg-border" /></div>

      {/* Outcome */}
      <section id="outcome" className="px-6 md:px-12 py-20 md:py-24 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-6">Outcome</p>
          <p className="text-2xl md:text-3xl font-medium leading-snug tracking-tight max-w-3xl mb-16">
            Development was unblocked. The team shipped with a clean, consistent design system across all three user types.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { value: "54", label: "Screens redesigned" },
              { value: "3", label: "User types (Buyer, Seller, Rider)" },
              { value: "2 mo", label: "Audit to complete handoff" },
            ].map((metric) => (
              <div key={metric.label} className="p-6 rounded-2xl bg-[#0a0a0a]">
                <p className="text-2xl font-medium mb-1 text-white">{metric.value}</p>
                <p className="text-sm text-white/60">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12"><div className="h-px bg-border" /></div>

      {/* Stack */}
      <section id="stack" className="px-6 md:px-12 py-24 md:py-32 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-6">Stack</p>
          <div className="space-y-4 max-w-md">
            {[
              { name: "Figma", role: "Design & prototyping" },
              { name: "React", role: "React Native (mobile)" },
              { name: "Firebase", role: "Backend services" },
            ].map((tech) => (
              <div key={tech.name} className="flex items-center justify-between pb-4 border-b border-border">
                <span className="text-sm font-medium flex items-center gap-2"><TechIcon name={tech.name} />{tech.name}</span>
                <span className="text-sm text-foreground/60">{tech.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MoreProjects currentSlug="retriever" />
    </CaseStudyLayout>
  );
}
