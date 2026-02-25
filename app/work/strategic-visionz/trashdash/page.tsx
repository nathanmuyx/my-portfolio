"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { SkeletonCard } from "@/components/ui/SkeletonCard";

// --- Slide data ---

const slides = [
  { id: "hero", label: "Intro" },
  { id: "context", label: "Context" },
  { id: "problem", label: "Problem" },
  { id: "thinking", label: "Thinking" },
  { id: "filters", label: "Filters" },
  { id: "guide", label: "Guide" },
  { id: "team", label: "Team" },
  { id: "outcome", label: "Outcome" },
];

// --- Visual helpers ---

function Placeholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <SkeletonCard className={`relative w-full rounded-xl overflow-hidden bg-[#0a0a0a] ${className}`}>
      <div className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="bg-[#0a4299]/20 blur-[100px] rounded-full w-[400px] h-[400px]" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <span className="text-[11px] text-white/20 tracking-wide text-center leading-relaxed">{label}</span>
      </div>
    </SkeletonCard>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <p className="text-xs uppercase tracking-wider text-foreground/40 mb-4">{children}</p>;
}

// --- Slide components ---

function S01() {
  return (
    <div className="flex flex-col justify-center flex-1">
      <div className="flex flex-wrap gap-2 mb-6">
        {["Product Designer", "Operations Platform", "2024"].map((t) => (
          <span key={t} className="text-xs px-3 py-1.5 rounded-full bg-cream text-foreground/60">{t}</span>
        ))}
      </div>
      <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-medium leading-[0.92] tracking-tight max-w-4xl mb-6">
        Trash Dash 2.
      </h1>
      <p className="text-lg text-foreground/50 max-w-lg mb-12">
        Operations platform for Trash Butler, America&apos;s #1 doorstep valet trash service.
      </p>
      <div className="relative w-full aspect-[16/8] rounded-xl overflow-hidden">
        <Image
          src="/images/trashdash/hero-dashboard.png"
          alt="Trash Dash main dashboard"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1100px) 100vw, 1100px"
        />
      </div>
      <div className="grid grid-cols-4 gap-x-8 mt-10">
        {[
          { l: "Client", v: "Trash Butler" },
          { l: "Agency", v: "Strategic Visionz" },
          { l: "Stack", v: "Figma, WeWeb" },
          { l: "Role", v: "Product Designer" },
        ].map((s) => (
          <div key={s.l}>
            <p className="text-[11px] uppercase tracking-wider text-foreground/40 mb-0.5">{s.l}</p>
            <p className="text-sm font-medium">{s.v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function AudienceCard({ photos }: { photos: { src: string; position: string }[] }) {
  return (
    <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#0a0a0a]">
      <div className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="bg-[#0a4299]/40 blur-[50px] rounded-full w-[500px] h-[500px]" />
      </div>
      <div className="absolute inset-x-0 top-[3%] bottom-[5%] flex justify-center gap-[1.5%] px-[23%]">
        {photos.map((photo, i) => (
          <div key={i} className="relative flex-1 overflow-hidden">
            <Image
              src={photo.src}
              alt=""
              fill
              className="object-cover"
              style={{ objectPosition: photo.position }}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const audiences = [
  {
    user: "Internal staff",
    need: "Dashboards, filters, bulk ops across 1,000+ communities",
    photos: [
      { src: "/images/trashdash/audience-internal.png", position: "28% center" },
      { src: "/images/trashdash/audience-internal.png", position: "86% center" },
    ],
  },
  {
    user: "Field workers",
    need: "Mobile task management, route tracking, quick updates",
    photos: [
      { src: "/images/trashdash/audience-field-1.png", position: "center" },
      { src: "/images/trashdash/audience-field-2.png", position: "center" },
    ],
  },
  {
    user: "Community managers",
    need: "Service overviews, reports, support portal",
    photos: [
      { src: "/images/trashdash/audience-community.png", position: "91% center" },
      { src: "/images/trashdash/audience-community.png", position: "55% center" },
    ],
  },
];

function S02() {
  return (
    <div className="flex flex-col justify-center flex-1">
      <Label>Context</Label>
      <h2 className="text-3xl md:text-4xl font-medium leading-tight tracking-tight max-w-3xl mb-12">
        Three audiences. One platform.
      </h2>
      <div className="grid md:grid-cols-3 gap-4 mb-12">
        {audiences.map((item) => (
          <div key={item.user} className="flex flex-col">
            <AudienceCard photos={item.photos} />
            <p className="text-sm font-medium mt-4">{item.user}</p>
            <p className="text-sm text-foreground/50">{item.need}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function S03() {
  return (
    <div className="flex flex-col justify-center flex-1">
      <Label>The problem</Label>
      <h2 className="text-3xl md:text-4xl font-medium leading-tight tracking-tight max-w-3xl mb-12">
        No design structure.
      </h2>
      <div className="relative w-full aspect-[16/11] rounded-xl overflow-hidden">
        <Image
          src="/images/trashdash/old-ui.png"
          alt="Old Trash Dash UI — inconsistent design, no shared components"
          fill
          className="object-cover"
          sizes="(max-width: 1100px) 100vw, 1100px"
        />
      </div>
      <div className="grid md:grid-cols-4 gap-4 mt-4">
        {[
          "No shared palette",
          "Unstyled tables",
          "Nothing reusable",
          "No clear user flow",
        ].map((item) => (
          <div key={item} className="flex items-center gap-2 rounded-lg bg-red-500/5 border border-red-500/10 px-4 py-3">
            <span className="text-red-400 text-sm shrink-0">&#x2715;</span>
            <span className="text-sm text-foreground/60">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function S04() {
  return (
    <div className="flex flex-col flex-1">
      <Label>Design thinking</Label>
      <h2 className="text-3xl md:text-4xl font-medium leading-tight tracking-tight max-w-3xl mb-4">
        Aesthetics to user-value.
      </h2>
      <p className="text-base text-foreground/50 max-w-lg mb-8">
        &ldquo;Looking good isn&apos;t a reason. What does making it prominent do for the user?&rdquo;
      </p>
      <div className="flex flex-col gap-4">
        {[
          { src: "/images/trashdash/thinking-1.png", w: 3962, h: 1410 },
          { src: "/images/trashdash/thinking-2.png", w: 3962, h: 1410 },
          { src: "/images/trashdash/thinking-3.png", w: 3962, h: 1410 },
          { src: "/images/trashdash/thinking-4.png", w: 3962, h: 1410 },
          { src: "/images/trashdash/thinking-5.png", w: 3962, h: 1410 },
          { src: "/images/trashdash/thinking-6.png", w: 3962, h: 1944 },
        ].map((img, i) => (
          <div key={i} className="relative w-full rounded-xl overflow-hidden">
            <Image
              src={img.src}
              alt={`Table design iteration ${i + 1}`}
              width={img.w}
              height={img.h}
              className="w-full h-auto"
              sizes="(max-width: 1100px) 100vw, 1100px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function S05() {
  return (
    <div className="flex flex-col justify-center flex-1">
      <Label>Key decision</Label>
      <h2 className="text-3xl md:text-4xl font-medium leading-tight tracking-tight max-w-3xl mb-4">
        Filter-first interface.
      </h2>
      <p className="text-base text-foreground/50 max-w-lg mb-10">
        Ops teams don&apos;t browse. They hunt.
      </p>
      <div className="relative w-full rounded-2xl overflow-hidden bg-[#0a0a0a]">
        <div className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="bg-[#0a4299]/40 blur-[50px] rounded-full w-[600px] h-[600px]" />
        </div>
        <div className="relative px-[14%] py-[7%]">
          <Image
            src="/images/trashdash/filter-first.png"
            alt="Filter-first interface — community dashboard with filter bar"
            width={3622}
            height={2040}
            className="w-full h-auto rounded-lg"
            sizes="(max-width: 1100px) 100vw, 1100px"
          />
        </div>
      </div>
    </div>
  );
}

function S06() {
  return (
    <div className="flex flex-col justify-center flex-1">
      <Label>Design guide</Label>
      <h2 className="text-3xl md:text-4xl font-medium leading-tight tracking-tight max-w-3xl mb-10">
        Just enough structure to move fast.
      </h2>
      <div className="relative w-full rounded-xl overflow-hidden">
        <Image
          src="/images/trashdash/design-system.png"
          alt="Trash Dash design guide — components, colors, typography"
          width={4096}
          height={1910}
          className="w-full h-auto"
          sizes="(max-width: 1100px) 100vw, 1100px"
        />
      </div>
    </div>
  );
}

function S07() {
  return (
    <div className="flex flex-col justify-center flex-1">
      <Label>Collaboration</Label>
      <h2 className="text-3xl md:text-4xl font-medium leading-tight tracking-tight max-w-3xl mb-12">
        Working with the team.
      </h2>
      <div className="grid md:grid-cols-3 gap-x-8 gap-y-8">
        {[
          { who: "Chris", role: "Development & Product Lead", what: "Set the direction and coached my thinking. I took his vision and built it into a working product." },
          { who: "Josh & Kent", role: "Backend / Xano", what: "They handled the data layer. I knew the data well because I built the frontend, so I designed around real limits." },
          { who: "Me", role: "Design & No-Code Build", what: "I designed in Figma and built in WeWeb. No handoff needed — Figma and production always matched." },
        ].map((item) => (
          <div key={item.who} className="border border-border rounded-xl p-6">
            <p className="text-base font-medium">{item.who}</p>
            <p className="text-xs text-foreground/40 mb-4">{item.role}</p>
            <p className="text-sm text-foreground/50 leading-relaxed">{item.what}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function S08() {
  return (
    <div className="flex flex-col justify-center flex-1">
      <Label>Outcome</Label>
      <h2 className="text-3xl md:text-4xl font-medium leading-tight tracking-tight max-w-3xl mb-12">
        What shipped. What changed.
      </h2>
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {[
          { value: "Seconds", label: "Community lookup with filters", sub: "Was: scrolling through 1,000+ entries" },
          { value: "Mobile", label: "Card layouts for field workers", sub: "Was: broken tables on phones" },
          { value: "Reusable", label: "Components across every screen", sub: "Was: every feature built from scratch" },
        ].map((metric) => (
          <div key={metric.label} className="p-5 rounded-xl bg-[#0a0a0a]">
            <p className="text-2xl font-medium mb-1 text-white">{metric.value}</p>
            <p className="text-sm text-white/60 mb-2">{metric.label}</p>
            <p className="text-xs text-white/30">{metric.sub}</p>
          </div>
        ))}
      </div>
      <div className="relative w-full rounded-xl overflow-hidden mb-4">
        <Image
          src="/images/trashdash/old-ui.png"
          alt="Before — old Trash Dash interface"
          width={3962}
          height={2872}
          className="w-full h-auto"
          sizes="(max-width: 1100px) 100vw, 1100px"
        />
      </div>
      <div className="relative w-full rounded-xl overflow-hidden">
        <Image
          src="/images/trashdash/outcome-after.png"
          alt="After — redesigned Trash Dash interface"
          width={2136}
          height={1424}
          className="w-full h-auto"
          sizes="(max-width: 1100px) 100vw, 1100px"
        />
      </div>
    </div>
  );
}

const slideComponents = [S01, S02, S03, S04, S05, S06, S07, S08];

// --- Page ---

export default function TrashDashPage() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback((i: number) => {
    const clamped = Math.max(0, Math.min(i, slides.length - 1));
    if (clamped === index) return;
    setDirection(clamped > index ? 1 : -1);
    setIndex(clamped);
  }, [index]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        goTo(index + 1);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        goTo(index - 1);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, goTo]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const SlideContent = slideComponents[index];

  return (
    <div className="fixed inset-0 bg-white text-foreground flex flex-col">
      {/* Progress bar */}
      <div className="h-[3px] bg-border shrink-0">
        <motion.div
          className="h-full bg-foreground"
          animate={{ width: `${(index / (slides.length - 1)) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Slide */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            initial={{ opacity: 0, x: direction >= 0 ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction >= 0 ? -40 : 40 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute inset-0 overflow-y-auto"
          >
            <div className="max-w-[1100px] mx-auto w-full px-6 md:px-12 py-8 md:py-10 pb-24 min-h-full flex flex-col">
              <SlideContent />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Nav */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-3 bg-foreground rounded-full px-5 py-2.5 shadow-lg">
        <button
          onClick={() => goTo(index - 1)}
          disabled={index === 0}
          className="text-white/60 hover:text-white disabled:text-white/20 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>

        <div className="flex items-center gap-1.5">
          {slides.map((s, i) => (
            <button key={s.id} onClick={() => goTo(i)} className="group relative">
              <div className={`w-2 h-2 rounded-full transition-all ${i === index ? "bg-white scale-125" : "bg-white/25 hover:bg-white/50"}`} />
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-0.5 rounded bg-white text-foreground text-[10px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {s.label}
              </div>
            </button>
          ))}
        </div>

        <button
          onClick={() => goTo(index + 1)}
          disabled={index === slides.length - 1}
          className="text-white/60 hover:text-white disabled:text-white/20 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>

        <span className="text-[11px] text-white/40 ml-1 tabular-nums">{index + 1}/{slides.length}</span>
      </div>
    </div>
  );
}
