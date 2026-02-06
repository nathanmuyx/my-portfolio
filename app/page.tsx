"use client";

import { useState, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import CardSwap from "@/components/ui/CardSwap";
import GradualBlur from "@/components/ui/GradualBlur";
import BubbleMenu from "@/components/ui/BubbleMenu";
import { IconType } from "react-icons";
import { SiFlutter, SiNextdotjs, SiSupabase, SiReact, SiExpo, SiAdobexd, SiClaude } from "react-icons/si";
import { HiOutlineColorSwatch, HiOutlinePencil, HiOutlineClipboardList, HiOutlineSparkles, HiOutlineSwitchHorizontal } from "react-icons/hi";

function FigmaIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 38 57" className={className}>
      <path d="M19 57c-5.247 0-9.5-4.253-9.5-9.5S13.753 38 19 38v19z" fill="#0ACF83" />
      <path d="M9.5 38C4.253 38 0 33.747 0 28.5S4.253 19 9.5 19H19v19H9.5z" fill="#A259FF" />
      <path d="M9.5 19C4.253 19 0 14.747 0 9.5S4.253 0 9.5 0H19v19H9.5z" fill="#F24E1E" />
      <path d="M19 0h9.5C33.747 0 38 4.253 38 9.5S33.747 19 28.5 19H19V0z" fill="#FF7262" />
      <path d="M38 28.5c0 5.247-4.253 9.5-9.5 9.5S19 33.747 19 28.5s4.253-9.5 9.5-9.5 9.5 4.253 9.5 9.5z" fill="#1ABCFE" />
    </svg>
  );
}

function CursorIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="80 60 360 400" fill="currentColor" className={className} style={style}>
      <path d="m415.035 156.35-151.503-87.4695c-4.865-2.8094-10.868-2.8094-15.733 0l-151.4969 87.4695c-4.0897 2.362-6.6146 6.729-6.6146 11.459v176.383c0 4.73 2.5249 9.097 6.6146 11.458l151.5039 87.47c4.865 2.809 10.868 2.809 15.733 0l151.504-87.47c4.089-2.361 6.614-6.728 6.614-11.458v-176.383c0-4.73-2.525-9.097-6.614-11.459zm-9.516 18.528-146.255 253.32c-.988 1.707-3.599 1.01-3.599-.967v-165.872c0-3.314-1.771-6.379-4.644-8.044l-143.645-82.932c-1.707-.988-1.01-3.599.968-3.599h292.509c4.154 0 6.75 4.503 4.673 8.101h-.007z" />
    </svg>
  );
}

function WeWebIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="20 20 220 160" fill="currentColor" className={className} style={style}>
      <path d="M67.17 99.46C48.52 99.46 32.96 113.72 31.35 132.3L28.05 170.32H67.53L73.69 99.45H67.18L67.17 99.46Z" />
      <path d="M219.09 28.6C197.91 28.6 181.32 46.82 183.29 67.91L192.88 170.33H232.36L219.09 28.6Z" />
      <path d="M150.79 59.63C125.97 59.63 103.74 74.97 94.93 98.17L67.53 170.33H107.01L130.21 109.74L153.41 170.33H192.89L150.8 59.63H150.79Z" />
    </svg>
  );
}

const pillData: Record<string, { icon: IconType | typeof WeWebIcon | typeof FigmaIcon; color: string; multicolor?: boolean }> = {
  "Flutter": { icon: SiFlutter, color: "#54C5F8" },
  "Next.js": { icon: SiNextdotjs, color: "#ffffff" },
  "Supabase": { icon: SiSupabase, color: "#3ECF8E" },
  "React": { icon: SiReact, color: "#61DAFB" },
  "Expo": { icon: SiExpo, color: "#ffffff" },
  "Figma": { icon: FigmaIcon, color: "", multicolor: true },
  "WeWeb": { icon: WeWebIcon, color: "#6251A2" },
  "Adobe XD": { icon: SiAdobexd, color: "#FF61F6" },
  "Design Systems": { icon: HiOutlineColorSwatch, color: "#A78BFA" },
  "Design System": { icon: HiOutlineColorSwatch, color: "#A78BFA" },
  "XD Migration": { icon: HiOutlineSwitchHorizontal, color: "#FF61F6" },
  "UI/UX": { icon: HiOutlineSparkles, color: "#FBBF24" },
  "PM": { icon: HiOutlineClipboardList, color: "#60A5FA" },
  "Design": { icon: HiOutlinePencil, color: "#F472B6" },
  "Cursor": { icon: CursorIcon, color: "#ffffff" },
  "Claude Code": { icon: SiClaude, color: "#D97757" },
};

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  pills: string[];
  bgColor: string;
}

const projects: Project[] = [
  {
    id: "typid",
    title: "Typid",
    subtitle: "Founder",
    description: "Finance app shipped to stores. Then pivoted to events platform.",
    pills: ["Flutter", "Next.js", "Supabase", "Figma", "Cursor", "Claude Code"],
    bgColor: "bg-[#0a0a0a]",
  },
  {
    id: "strategic-visionz",
    title: "Strategic Visionz",
    subtitle: "Current",
    description: "Enterprise client work. Full stack design engineering.",
    pills: ["WeWeb", "React", "Next.js", "Expo", "Figma", "Claude Code"],
    bgColor: "bg-[#0a0a0a]",
  },
  {
    id: "blazesoft",
    title: "Blazesoft",
    subtitle: "6 Months",
    description: "Design systems for casino products. Migrated XD to Figma.",
    pills: ["Figma", "Design Systems", "XD Migration"],
    bgColor: "bg-[#0a0a0a]",
  },
  {
    id: "retriever",
    title: "Retriever PH",
    subtitle: "Redesign",
    description: "54 screens redesigned. Fixed broken foundations.",
    pills: ["Figma", "UI/UX", "Design System"],
    bgColor: "bg-[#0a0a0a]",
  },
  {
    id: "gotrabaho",
    title: "GoTrabaho",
    subtitle: "Full Stack",
    description: "Job matching app. Designed and built end-to-end.",
    pills: ["Flutter", "Supabase", "Figma"],
    bgColor: "bg-[#0a0a0a]",
  },
  {
    id: "tactiv-studios",
    title: "Tactiv Studios",
    subtitle: "3 Years",
    description: "PM + Designer. Shipped 6+ products.",
    pills: ["Figma", "PM", "Design"],
    bgColor: "bg-[#0a0a0a]",
  },
];

/* ——— Experience section with hover previews ——— */
function ExpSvMockup() {
  return (
    <>
      <div className="absolute left-1/2 -translate-x-1/2 top-[40px] w-[88%] aspect-square flex items-center justify-center pointer-events-none">
        <div className="flex-none rotate-[131deg]"><div className="bg-[#0a4299] blur-[30px] rounded-full w-[200px] h-[210px]" /></div>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 top-[26%] w-[85%] border-[3px] border-white/20 rounded-[10px] overflow-hidden shadow-[0_4px_4px_rgba(0,0,0,0.25)]" style={{ aspectRatio: "576/360" }}>
        <Image src="/images/strategic-visionz/homepage.png" alt="" fill className="object-cover object-top" />
      </div>
    </>
  );
}
function ExpBlazeMockup() {
  return (
    <>
      <div className="absolute left-[23%] top-[22%] w-[61%] rounded-[8px] overflow-hidden" style={{ aspectRatio: "198/152" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/blazesoft/screenshot-1.png" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute left-[12%] top-[35%] w-[61%] rounded-[8px] overflow-hidden" style={{ aspectRatio: "197/152" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/blazesoft/screenshot-2.png" alt="" className="w-full h-full object-cover" />
      </div>
    </>
  );
}
function ExpRetrieverMockup() {
  return (
    <>
      <div className="absolute left-1/2 -translate-x-1/2 top-[22%] w-[46%] aspect-square flex items-center justify-center pointer-events-none">
        <div className="flex-none rotate-[131deg]"><div className="bg-[#ff5411] blur-[30px] rounded-full w-[80px] h-[85px]" /></div>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 top-[22%] w-[55%]" style={{ aspectRatio: "236/175" }}>
        <Image src="/images/retriever/mockup.png" alt="" fill className="object-contain" />
      </div>
    </>
  );
}
function ExpTactivMockup() {
  return (
    <>
      <div className="absolute left-1/2 -translate-x-[45%] top-[20%] w-[60%] rounded-[5px] overflow-hidden" style={{ aspectRatio: "214/133" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/tactiv-studios/screenshot-1.png" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute left-1/2 -translate-x-[52%] top-[33%] w-[72%] rounded-[5px] overflow-hidden" style={{ aspectRatio: "258/159" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/tactiv-studios/screenshot-2.png" alt="" className="w-full h-full object-cover" />
      </div>
    </>
  );
}

const expMockups: Record<string, React.FC> = {
  "strategic-visionz": ExpSvMockup,
  blazesoft: ExpBlazeMockup,
  retriever: ExpRetrieverMockup,
  "tactiv-studios": ExpTactivMockup,
};

const experienceData = [
  { place: "Strategic Visionz", slug: "strategic-visionz", role: "UI/UX Designer", period: "Nov 2024 - Present" },
  { place: "Blazesoft", slug: "blazesoft", role: "UI/UX Designer", period: "Apr 2024 - Nov 2024" },
  { place: "Retriever Tech PH", slug: "retriever", role: "UI/UX Designer", period: "Jun 2022 - Aug 2022" },
  { place: "Tactiv Studios", slug: "tactiv-studios", role: "UI/UX Designer", period: "Oct 2020 - Dec 2023" },
];

function ExperienceColumn() {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const colRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!colRef.current) return;
    const rect = colRef.current.getBoundingClientRect();
    setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  return (
    <div className="flex flex-col justify-between" ref={colRef} onMouseMove={handleMouseMove}>
      <div>
        <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-6">Experience</p>
        <div className="mb-12">
          {experienceData.map((exp) => (
            <div key={exp.slug} className="border-b border-border">
              <Link
                href={`/work/${exp.slug}`}
                className="group flex items-baseline justify-between py-4 px-4 -mx-4 rounded-xl transition-all duration-200 hover:bg-[#0a0a0a]"
                onMouseEnter={() => setHoveredSlug(exp.slug)}
                onMouseLeave={() => setHoveredSlug(null)}
              >
                <div>
                  <p className="text-sm font-medium group-hover:text-white transition-colors">{exp.place}</p>
                  <p className="text-[12px] text-foreground/60 group-hover:text-white/50 transition-colors">{exp.role}</p>
                </div>
                <span className="text-[11px] text-foreground/50 group-hover:text-white/40 shrink-0 ml-4 transition-colors">{exp.period}</span>
              </Link>
            </div>
          ))}
        </div>

        <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-5">Tools I prefer</p>
        <div className="flex flex-wrap gap-2 mb-12">
          {[
            { name: "Figma", icon: FigmaIcon, color: "", multicolor: true },
            { name: "Claude Code", icon: SiClaude, color: "#D97757" },
            { name: "Cursor", icon: CursorIcon, color: "#000000" },
            { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
            { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
          ].map((tool) => {
            const Icon = tool.icon;
            return (
              <span
                key={tool.name}
                className="text-[12px] px-3 py-1.5 rounded-full bg-[#f5f5f5] text-foreground/70 inline-flex items-center gap-1.5"
              >
                <Icon className="w-3 h-3" style={tool.multicolor ? undefined : { color: tool.color }} />
                {tool.name}
              </span>
            );
          })}
        </div>
      </div>

      <div className="text-[15px] text-foreground/60 leading-relaxed">
        <p>
          5+ years across SaaS, enterprise software, gaming, and event platforms. Open to full-time product design roles, contract work, or collaboration.
        </p>
        <a
          href="mailto:nathanmuyx@gmail.com"
          className="inline-block mt-5 text-sm font-medium text-foreground hover:text-foreground/70 transition-colors"
        >
          nathanmuyx@gmail.com &rarr;
        </a>
      </div>

      {/* Cursor-following preview — desktop only */}
      <div
        className="hidden lg:block fixed pointer-events-none z-[60] rounded-2xl overflow-hidden bg-[#0a0a0a] shadow-2xl shadow-black/40"
        style={{
          width: 280,
          height: 200,
          left: cursorPos.x + (colRef.current?.getBoundingClientRect().left ?? 0) - 140,
          top: cursorPos.y + (colRef.current?.getBoundingClientRect().top ?? 0) - 220,
          opacity: hoveredSlug ? 1 : 0,
          transform: `scale(${hoveredSlug ? 1 : 0.9})`,
          transition: "opacity 200ms ease-out, transform 200ms ease-out",
        }}
      >
        {experienceData.map((exp) => {
          const Mockup = expMockups[exp.slug];
          return (
            <div
              key={exp.slug}
              className="absolute inset-0 transition-opacity duration-150"
              style={{ opacity: hoveredSlug === exp.slug ? 1 : 0 }}
            >
              {Mockup && <Mockup />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Mobile BubbleMenu */}
      <div className="md:hidden">
        <BubbleMenu
          logo={
            <svg width="14" height="19" viewBox="0 0 23 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="4" height="31" rx="2" fill="#ffffff" />
              <rect x="18" y="7.82532" width="4.26835" height="18.4962" rx="2.13417" fill="#ffffff" />
              <rect x="6" y="5" width="2" height="16" rx="1" fill="#ffffff" />
              <rect x="10" y="9" width="2" height="14" rx="1" fill="#ffffff" />
              <rect x="14" y="14" width="2" height="8" rx="1" fill="#ffffff" />
            </svg>
          }
          items={[
            {
              label: "Work",
              href: "#work",
              ariaLabel: "Work",
              rotation: -6,
              hoverStyles: { bgColor: "#0a0a0a", textColor: "#ffffff" },
              onClick: () => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }),
            },
            {
              label: "About",
              href: "#about",
              ariaLabel: "About",
              rotation: 5,
              hoverStyles: { bgColor: "#0a0a0a", textColor: "#ffffff" },
              onClick: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }),
            },
            {
              label: "Contact",
              href: "mailto:nathanmuyx@gmail.com",
              ariaLabel: "Contact",
              rotation: -4,
              hoverStyles: { bgColor: "#0a0a0a", textColor: "#ffffff" },
            },
          ]}
          menuBg="#0a0a0a"
          menuContentColor="#ffffff"
          useFixedPosition={true}
          animationEase="back.out(1.5)"
          animationDuration={0.5}
          staggerDelay={0.12}
        />
      </div>

      {/* Desktop Capsule Nav */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 px-12 py-4 animate-fade-in">
        <div className="max-w-[1400px] mx-auto flex justify-end items-center">
          <div className="flex items-center gap-1 bg-[#0a0a0a] rounded-full px-1.5 py-1.5">
            <Link href="/" className="px-3 shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" alt="Logo" className="h-5" />
            </Link>
            <a href="#work" className="text-sm text-white/60 hover:text-white px-4 py-1.5 rounded-full hover:bg-white/10 transition-all">
              Work
            </a>
            <a href="#about" className="text-sm text-white/60 hover:text-white px-4 py-1.5 rounded-full hover:bg-white/10 transition-all">
              About
            </a>
            <a href="mailto:nathanmuyx@gmail.com" className="text-sm font-medium text-[#0a0a0a] bg-white hover:bg-white/90 px-5 py-1.5 rounded-full transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="px-6 md:px-12 pt-24 pb-12">
        <div className="max-w-[1400px] mx-auto">
          {/* Hero Text */}
          <div className="py-12 md:py-20 animate-fade-in-up">
            <p className="text-foreground/60 mb-4">
              Product Designer
            </p>

            <h1 className="text-[clamp(2rem,6vw,4.5rem)] font-medium leading-[0.95] tracking-tight max-w-4xl">
              Made real.
            </h1>
          </div>

          {/* Bento Grid */}
          <div id="work" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:auto-rows-[220px] animate-fade-in-up animation-delay-200 scroll-mt-24">
            {/* Typid - Large */}
            <Link href="/work/typid" className="md:col-span-2 lg:col-span-2 lg:row-span-2 block group">
              <div className="md:flex md:flex-row lg:block rounded-[20px] overflow-hidden bg-[#0a0a0a] lg:relative lg:h-full transition-transform duration-300 ease-out group-hover:scale-[0.98]">
                {/* Visual */}
                <div className="relative aspect-[4/3] md:w-[60%] md:aspect-[3/2] lg:w-auto lg:aspect-auto lg:absolute lg:inset-0 overflow-hidden">
                  {/* Cyan glow */}
                  <div className="absolute left-[-35%] top-[25%] w-[170%] aspect-square flex items-center justify-center pointer-events-none">
                    <div className="flex-none rotate-[131.17deg]">
                      <div className="bg-[#17bff9] blur-[50px] rounded-full w-[786px] h-[786px]" />
                    </div>
                  </div>
                  {/* White glow */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-[25%] w-[90%] aspect-square flex items-center justify-center pointer-events-none">
                    <div className="flex-none rotate-[131.17deg]">
                      <div className="bg-white blur-[50px] rounded-full w-[414px] h-[414px]" />
                    </div>
                  </div>
                  <CardSwap
                    images={[
                      { src: "/images/typid/aisen-3.png", alt: "Aisen Fest" },
                      { src: "/images/typid/Himaya-2.png", alt: "Himaya" },
                      { src: "/images/typid/homepage-1.png", alt: "Typid Homepage" },
                    ]}
                  />
                  {/* Top gradient for pill readability */}
                  <div className="absolute top-0 left-0 right-0 h-[35%] bg-gradient-to-b from-black/50 to-transparent pointer-events-none z-[1]" />
                  {/* Bottom dissolve into text area */}
                  <GradualBlur position="bottom" height="4rem" strength={2} divCount={5} curve="bezier" exponential opacity={1} zIndex={1} className="md:hidden" />
                  {/* Pills */}
                  <div className="absolute top-0 left-0 right-0 p-4 md:p-6 z-[2]">
                    <div className="flex flex-wrap gap-1.5">
                      {projects[0].pills.map((pill) => {
                        const data = pillData[pill];
                        const Icon = data?.icon;
                        return (
                          <span key={pill} className="text-[10px] px-2 py-1 rounded-full bg-white/10 text-white/70 inline-flex items-center gap-1">
                            {Icon && <Icon className="w-2.5 h-2.5" style={data.multicolor ? undefined : { color: data.color }} />}
                            {pill}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
                {/* Details (mobile + tablet) */}
                <div className="p-5 md:p-6 md:w-[40%] md:flex md:flex-col md:justify-center lg:hidden">
                  <h3 className="text-xl md:text-2xl font-medium text-white mb-2">{projects[0].title}</h3>
                  <p className="text-sm text-white/60 max-w-xs">{projects[0].description}</p>
                  <p className="text-sm text-white/50 mt-3">View project &rarr;</p>
                </div>
                {/* Desktop hover overlay */}
                <div className="hidden lg:block absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/20 rounded-[20px]" />
                  <div className="relative h-full p-6 flex flex-col justify-end z-[2]">
                    <h3 className="text-2xl lg:text-3xl font-medium text-white mb-2">{projects[0].title}</h3>
                    <p className="text-sm text-white/60 max-w-xs">{projects[0].description}</p>
                    <p className="text-sm text-white/50 mt-3">View project →</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Strategic Visionz - Large */}
            <Link href="/work/strategic-visionz" className="md:col-span-2 lg:col-span-2 lg:row-span-2 block group">
              <div className="md:flex md:flex-row lg:block rounded-[20px] overflow-hidden bg-[#0a0a0a] lg:relative lg:h-full transition-transform duration-300 ease-out group-hover:scale-[0.98]">
                {/* Visual */}
                <div className="relative aspect-[4/3] md:w-[60%] md:aspect-[3/2] lg:w-auto lg:aspect-auto lg:absolute lg:inset-0 overflow-hidden">
                  {/* Blue glow */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-[60px] w-[88%] aspect-square flex items-center justify-center pointer-events-none">
                    <div className="flex-none rotate-[131.17deg]">
                      <div className="bg-[#0a4299] blur-[50px] rounded-full w-[390px] h-[414px]" />
                    </div>
                  </div>
                  {/* Screenshot */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-[26%] w-[89%] border-[3px] md:border-[4px] xl:border-[7px] border-white/20 rounded-[10px] md:rounded-[12px] xl:rounded-[19px] overflow-hidden shadow-[0px_4px_4px_rgba(0,0,0,0.25)] md:shadow-[0px_7px_7px_rgba(0,0,0,0.25)]" style={{ aspectRatio: '576 / 360' }}>
                    <Image src="/images/strategic-visionz/homepage.png" alt="Strategic Visionz Homepage" fill className="object-cover object-top" />
                  </div>
                  {/* Bottom dissolve into text area */}
                  <GradualBlur position="bottom" height="4rem" strength={2} divCount={5} curve="bezier" exponential opacity={1} zIndex={1} className="md:hidden" />
                  {/* Pills */}
                  <div className="absolute top-0 left-0 right-0 p-4 md:p-6 z-[2]">
                    <div className="flex flex-wrap gap-1.5">
                      {projects[1].pills.map((pill) => {
                        const data = pillData[pill];
                        const Icon = data?.icon;
                        return (
                          <span key={pill} className="text-[10px] px-2 py-1 rounded-full bg-white/10 text-white/70 inline-flex items-center gap-1">
                            {Icon && <Icon className="w-2.5 h-2.5" style={data.multicolor ? undefined : { color: data.color }} />}
                            {pill}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
                {/* Details (mobile + tablet) */}
                <div className="p-5 md:p-6 md:w-[40%] md:flex md:flex-col md:justify-center lg:hidden">
                  <h3 className="text-xl md:text-2xl font-medium text-white mb-2">{projects[1].title}</h3>
                  <p className="text-sm text-white/60 max-w-xs">{projects[1].description}</p>
                  <p className="text-sm text-white/50 mt-3">View project &rarr;</p>
                </div>
                {/* Desktop hover overlay */}
                <div className="hidden lg:block absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/20 rounded-[20px]" />
                  <div className="relative h-full p-6 flex flex-col justify-end z-[2]">
                    <h3 className="text-2xl lg:text-3xl font-medium text-white mb-2">{projects[1].title}</h3>
                    <p className="text-sm text-white/60 max-w-xs">{projects[1].description}</p>
                    <p className="text-sm text-white/50 mt-3">View project →</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Retriever */}
            <Link href="/work/retriever" className="col-span-1 block group">
              <div className="rounded-[20px] overflow-hidden bg-[#0a0a0a] lg:relative lg:h-full transition-transform duration-300 ease-out group-hover:scale-[0.96]">
                <div className="relative aspect-[4/3] lg:aspect-auto lg:absolute lg:inset-0 overflow-hidden">
                  {/* Orange glow */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-[22%] w-[46%] aspect-square flex items-center justify-center pointer-events-none">
                    <div className="flex-none rotate-[131.17deg]">
                      <div className="bg-[#ff5411] blur-[50px] rounded-full w-[102px] h-[108px]" />
                    </div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 top-[22%] w-[73%]" style={{ aspectRatio: '236 / 175' }}>
                    <Image src="/images/retriever/mockup.png" alt="Retriever app screens" fill className="object-contain" />
                  </div>
                  <GradualBlur position="bottom" height="3rem" strength={2} divCount={5} curve="bezier" exponential opacity={1} zIndex={1} className="lg:hidden" />
                  <div className="absolute top-0 left-0 right-0 p-4 z-[2]">
                    <div className="flex flex-wrap gap-1">
                      {projects[3].pills.map((pill) => {
                        const data = pillData[pill];
                        const Icon = data?.icon;
                        return (
                          <span key={pill} className="text-[9px] px-1.5 py-0.5 rounded-full bg-white/10 text-white/70 inline-flex items-center gap-1">
                            {Icon && <Icon className="w-2 h-2" style={data.multicolor ? undefined : { color: data.color }} />}
                            {pill}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="p-4 lg:hidden">
                  <h3 className="text-base font-medium text-white mb-1">{projects[3].title}</h3>
                  <p className="text-xs text-white/50 leading-snug">{projects[3].description}</p>
                  <p className="text-xs text-white/40 mt-2">View project &rarr;</p>
                </div>
                <div className="hidden lg:block absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/20 rounded-[20px]" />
                  <div className="relative h-full p-4 flex flex-col justify-end z-[2]">
                    <h3 className="text-lg font-medium text-white mb-1">{projects[3].title}</h3>
                    <p className="text-[10px] text-white/50 leading-snug">{projects[3].description}</p>
                    <p className="text-[10px] text-white/40 mt-2">View project →</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Blazesoft */}
            <Link href="/work/blazesoft" className="col-span-1 block group">
              <div className="rounded-[20px] overflow-hidden bg-[#0a0a0a] lg:relative lg:h-full transition-transform duration-300 ease-out group-hover:scale-[0.96]">
                <div className="relative aspect-[4/3] lg:aspect-auto lg:absolute lg:inset-0 overflow-hidden">
                  <div className="absolute left-[23%] top-[22%] w-[61%] border-none outline-none" style={{ aspectRatio: '198 / 152' }}>
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[11px]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/images/blazesoft/screenshot-1.png" alt="Sportzino design" className="absolute h-[112.27%] left-[-3.15%] top-[-5.45%] w-[109.79%] max-w-none border-none outline-none" />
                    </div>
                  </div>
                  <div className="absolute left-[12%] top-[35%] w-[61%] border-none outline-none" style={{ aspectRatio: '197 / 152' }}>
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/images/blazesoft/screenshot-2.png" alt="Sportzino Figma" className="absolute h-[111.76%] left-[-2.1%] top-[-4.98%] w-[104.9%] max-w-none border-none outline-none" />
                    </div>
                  </div>
                  <GradualBlur position="bottom" height="3rem" strength={2} divCount={5} curve="bezier" exponential opacity={1} zIndex={1} className="lg:hidden" />
                  <div className="absolute top-0 left-0 right-0 p-4 z-[2]">
                    <div className="flex flex-wrap gap-1">
                      {projects[2].pills.map((pill) => {
                        const data = pillData[pill];
                        const Icon = data?.icon;
                        return (
                          <span key={pill} className="text-[9px] px-1.5 py-0.5 rounded-full bg-white/10 text-white/70 inline-flex items-center gap-1">
                            {Icon && <Icon className="w-2 h-2" style={data.multicolor ? undefined : { color: data.color }} />}
                            {pill}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="p-4 lg:hidden">
                  <h3 className="text-base font-medium text-white mb-1">{projects[2].title}</h3>
                  <p className="text-xs text-white/50 leading-snug">{projects[2].description}</p>
                  <p className="text-xs text-white/40 mt-2">View project &rarr;</p>
                </div>
                <div className="hidden lg:block absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/20 rounded-[20px]" />
                  <div className="relative h-full p-4 flex flex-col justify-end z-[2]">
                    <h3 className="text-lg font-medium text-white mb-1">{projects[2].title}</h3>
                    <p className="text-[10px] text-white/50 leading-snug">{projects[2].description}</p>
                    <p className="text-[10px] text-white/40 mt-2">View project →</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* GoTrabaho */}
            <Link href="/work/gotrabaho" className="col-span-1 block group">
              <div className="rounded-[20px] overflow-hidden bg-[#0a0a0a] lg:relative lg:h-full transition-transform duration-300 ease-out group-hover:scale-[0.96]">
                <div className="relative aspect-[4/3] lg:aspect-auto lg:absolute lg:inset-0 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-b from-black/60 to-transparent pointer-events-none z-[1]" />
                  <div className="absolute bottom-[18%] right-[7%] w-[65%] h-[84%] pointer-events-none">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/gotrabaho/swoosh.svg" alt="" className="w-full h-full" />
                  </div>
                  <div className="absolute left-1/2 top-[calc(50%+17.5%)] -translate-x-1/2 -translate-y-1/2 w-[62%]" style={{ aspectRatio: '201 / 233' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/gotrabaho/mockup.png" alt="GoTrabaho app screens" className="absolute inset-0 w-full h-full object-contain border-none outline-none" />
                  </div>
                  <GradualBlur position="bottom" height="3rem" strength={2} divCount={5} curve="bezier" exponential opacity={1} zIndex={1} className="lg:hidden" />
                  <div className="absolute top-0 left-0 right-0 p-4 z-[2]">
                    <div className="flex flex-wrap gap-1">
                      {projects[4].pills.map((pill) => {
                        const data = pillData[pill];
                        const Icon = data?.icon;
                        return (
                          <span key={pill} className="text-[9px] px-1.5 py-0.5 rounded-full bg-white/10 text-white/70 inline-flex items-center gap-1">
                            {Icon && <Icon className="w-2 h-2" style={data.multicolor ? undefined : { color: data.color }} />}
                            {pill}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="p-4 lg:hidden">
                  <h3 className="text-base font-medium text-white mb-1">{projects[4].title}</h3>
                  <p className="text-xs text-white/50 leading-snug">{projects[4].description}</p>
                  <p className="text-xs text-white/40 mt-2">View project &rarr;</p>
                </div>
                <div className="hidden lg:block absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/20 rounded-[20px]" />
                  <div className="relative h-full p-4 flex flex-col justify-end z-[2]">
                    <h3 className="text-lg font-medium text-white mb-1">{projects[4].title}</h3>
                    <p className="text-[10px] text-white/50 leading-snug">{projects[4].description}</p>
                    <p className="text-[10px] text-white/40 mt-2">View project →</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Tactiv */}
            <Link href="/work/tactiv-studios" className="col-span-1 block group">
              <div className="rounded-[20px] overflow-hidden bg-[#0a0a0a] lg:relative lg:h-full transition-transform duration-300 ease-out group-hover:scale-[0.96]">
                <div className="relative aspect-[4/3] lg:aspect-auto lg:absolute lg:inset-0 overflow-hidden">
                  <div className="absolute left-1/2 -translate-x-[45%] top-[24%] w-[65%] border-none outline-none" style={{ aspectRatio: '214 / 133' }}>
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[6px]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/images/tactiv-studios/screenshot-1.png" alt="Tactiv Studios dashboard" className="absolute inset-0 w-full h-full object-cover border-none outline-none" />
                    </div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-[52%] top-[36%] w-[78%] border-none outline-none" style={{ aspectRatio: '258 / 159' }}>
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[6px]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/images/tactiv-studios/screenshot-2.png" alt="Tactiv Studios app" className="absolute inset-0 w-full h-full object-cover border-none outline-none" />
                    </div>
                  </div>
                  <GradualBlur position="bottom" height="3rem" strength={2} divCount={5} curve="bezier" exponential opacity={1} zIndex={1} className="lg:hidden" />
                  <div className="absolute top-0 left-0 right-0 p-4 z-[2]">
                    <div className="flex flex-wrap gap-1">
                      {projects[5].pills.map((pill) => {
                        const data = pillData[pill];
                        const Icon = data?.icon;
                        return (
                          <span key={pill} className="text-[9px] px-1.5 py-0.5 rounded-full bg-white/10 text-white/70 inline-flex items-center gap-1">
                            {Icon && <Icon className="w-2 h-2" style={data.multicolor ? undefined : { color: data.color }} />}
                            {pill}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="p-4 lg:hidden">
                  <h3 className="text-base font-medium text-white mb-1">{projects[5].title}</h3>
                  <p className="text-xs text-white/50 leading-snug">{projects[5].description}</p>
                  <p className="text-xs text-white/40 mt-2">View project &rarr;</p>
                </div>
                <div className="hidden lg:block absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/20 rounded-[20px]" />
                  <div className="relative h-full p-4 flex flex-col justify-end z-[2]">
                    <h3 className="text-lg font-medium text-white mb-1">{projects[5].title}</h3>
                    <p className="text-[10px] text-white/50 leading-snug">{projects[5].description}</p>
                    <p className="text-[10px] text-white/40 mt-2">View project →</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* About */}
          <section id="about" className="mt-32 md:mt-44 scroll-mt-24">
            <div className="h-px bg-border mb-16 md:mb-20" />

            <div className="grid md:grid-cols-2 gap-12 md:gap-20">
              {/* Left column — story */}
              <div>
                <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-6">About</p>
                <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-medium leading-[1.05] tracking-tight mb-8">
                  Designing Experience.
                </h2>
                <div className="space-y-5 text-[15px] text-foreground/60 leading-relaxed">
                  <p>
                    Growing up in the Philippines, most software I saw felt like afterthoughts. Very ugly. Government portals, local business sites, digital products. Built to function just enough, never to feel good.
                  </p>
                  <p>
                    Then I watched my brother make a fluorescent glow effect in CSS, and something clicked. If things could look and feel better, someone just had to care enough to do it.
                  </p>
                  <p>
                    That&apos;s been the thread through my career since. Designing software that works well and feels intentional. Not decoration. Not trends. Just clear, considered decisions that make a product easier to use.
                  </p>
                </div>
              </div>

              {/* Right column — details */}
              <ExperienceColumn />
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] px-6 md:px-12 py-10">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-white/30">&copy; {new Date().getFullYear()} Nathaniel Muyco</p>
          <div className="flex gap-6">
            <a href="mailto:nathanmuyx@gmail.com" className="text-xs text-white/30 hover:text-white/50 transition-colors">Email</a>
            <a href="https://linkedin.com/in/nathanielmuyco" target="_blank" rel="noopener noreferrer" className="text-xs text-white/30 hover:text-white/50 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
