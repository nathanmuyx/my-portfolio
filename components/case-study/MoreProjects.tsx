"use client";

import { useState, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const allProjects = [
  {
    slug: "strategic-visionz",
    title: "Strategic Visionz",
    tag: "Design Lead",
    glow: "#0a4299",
  },
  {
    slug: "typid",
    title: "Typid",
    tag: "Founding Designer",
    glow: "#17bff9",
  },
  {
    slug: "blazesoft",
    title: "Blazesoft",
    tag: "Product Designer",
    glow: "#0a0a0a",
  },
  {
    slug: "retriever",
    title: "Retriever PH",
    tag: "Designer & Developer",
    glow: "#ff5411",
  },
  {
    slug: "gotrabaho",
    title: "GoTrabaho",
    tag: "Designer & Developer",
    glow: "#0a0a0a",
  },
  {
    slug: "tactiv-studios",
    title: "Tactiv Studios",
    tag: "Intern \u2192 Lead",
    glow: "#0a0a0a",
  },
];

/* ——— Per-project mockup visuals (mirrors homepage treatment, no pills) ——— */

function StrategicVisionzMockup() {
  return (
    <>
      <div className="absolute left-1/2 -translate-x-1/2 top-[40px] w-[88%] aspect-square flex items-center justify-center pointer-events-none">
        <div className="flex-none rotate-[131deg]">
          <div className="bg-[#0a4299] blur-[30px] rounded-full w-[200px] h-[210px]" />
        </div>
      </div>
      <div
        className="absolute left-1/2 -translate-x-1/2 top-[26%] w-[85%] border-[3px] border-white/20 rounded-[10px] overflow-hidden shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
        style={{ aspectRatio: "576 / 360" }}
      >
        <Image src="/images/strategic-visionz/homepage.png" alt="" fill className="object-cover object-top" />
      </div>
    </>
  );
}

function TypidMockup() {
  return (
    <>
      <div className="absolute left-[-20%] top-[20%] w-[140%] aspect-square flex items-center justify-center pointer-events-none">
        <div className="flex-none rotate-[131deg]">
          <div className="bg-[#17bff9] blur-[40px] rounded-full w-[300px] h-[300px]" />
        </div>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 top-[20%] w-[70%] aspect-square flex items-center justify-center pointer-events-none">
        <div className="flex-none rotate-[131deg]">
          <div className="bg-white blur-[30px] rounded-full w-[160px] h-[160px]" />
        </div>
      </div>
      {/* Back card */}
      <div className="absolute border-[3px] border-white/20 rounded-[8px] overflow-hidden" style={{ left: "18.5%", top: "21%", width: "62.3%", aspectRatio: "404 / 226", zIndex: 1 }}>
        <Image src="/images/typid/aisen-3.png" alt="" fill className="object-cover object-top" />
      </div>
      {/* Middle card */}
      <div className="absolute border-[3px] border-white/20 rounded-[8px] overflow-hidden" style={{ left: "15.4%", top: "30%", width: "69.1%", aspectRatio: "448 / 250", zIndex: 2 }}>
        <Image src="/images/typid/Himaya-2.png" alt="" fill className="object-cover object-top" />
      </div>
      {/* Front card */}
      <div className="absolute border-[3px] border-white/20 rounded-[8px] overflow-hidden" style={{ left: "12.3%", top: "41%", width: "75.3%", aspectRatio: "488 / 274", zIndex: 3 }}>
        <Image src="/images/typid/homepage-1.png" alt="" fill className="object-cover object-top" />
      </div>
    </>
  );
}

function BlazesoftMockup() {
  return (
    <>
      <div className="absolute left-[23%] top-[18%] w-[58%]" style={{ aspectRatio: "198 / 152" }}>
        <div className="absolute inset-0 overflow-hidden rounded-[8px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/blazesoft/screenshot-1.png" alt="" className="absolute h-[112%] left-[-3%] top-[-5%] w-[110%] max-w-none border-none outline-none" />
        </div>
      </div>
      <div className="absolute left-[12%] top-[32%] w-[58%]" style={{ aspectRatio: "197 / 152" }}>
        <div className="absolute inset-0 overflow-hidden rounded-[8px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/blazesoft/screenshot-2.png" alt="" className="absolute h-[112%] left-[-2%] top-[-5%] w-[105%] max-w-none border-none outline-none" />
        </div>
      </div>
    </>
  );
}

function RetrieverMockup() {
  return (
    <>
      <div className="absolute left-1/2 -translate-x-1/2 top-[20%] w-[40%] aspect-square flex items-center justify-center pointer-events-none">
        <div className="flex-none rotate-[131deg]">
          <div className="bg-[#ff5411] blur-[30px] rounded-full w-[80px] h-[85px]" />
        </div>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 top-[18%] w-[65%]" style={{ aspectRatio: "236 / 175" }}>
        <Image src="/images/retriever/mockup.png" alt="" fill className="object-contain" />
      </div>
    </>
  );
}

function GoTrabahoMockup() {
  return (
    <>
      <div className="absolute bottom-[15%] right-[5%] w-[55%] h-[70%] pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/gotrabaho/swoosh.svg" alt="" className="w-full h-full" />
      </div>
      <div className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 w-[50%]" style={{ aspectRatio: "201 / 233" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/gotrabaho/mockup.png" alt="" className="w-full h-full object-contain" />
      </div>
    </>
  );
}

function TactivMockup() {
  return (
    <>
      <div className="absolute left-1/2 -translate-x-[45%] top-[20%] w-[60%]" style={{ aspectRatio: "214 / 133" }}>
        <div className="absolute inset-0 overflow-hidden rounded-[5px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/tactiv-studios/screenshot-1.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
      <div className="absolute left-1/2 -translate-x-[52%] top-[33%] w-[72%]" style={{ aspectRatio: "258 / 159" }}>
        <div className="absolute inset-0 overflow-hidden rounded-[5px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/tactiv-studios/screenshot-2.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </>
  );
}

const mockupComponents: Record<string, React.FC> = {
  "strategic-visionz": StrategicVisionzMockup,
  typid: TypidMockup,
  blazesoft: BlazesoftMockup,
  retriever: RetrieverMockup,
  gotrabaho: GoTrabahoMockup,
  "tactiv-studios": TactivMockup,
};

interface MoreProjectsProps {
  currentSlug: string;
}

export function MoreProjects({ currentSlug }: MoreProjectsProps) {
  const projects = allProjects.filter((p) => p.slug !== currentSlug);
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0a0a0a] px-6 md:px-12 py-20 md:py-28"
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-[1100px] mx-auto">
        <p className="text-[11px] uppercase tracking-wider text-white/30 mb-10">
          More Projects
        </p>

        <div className="relative">
          {/* Project list */}
          <div>
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group flex items-center justify-between py-5 border-b border-white/[0.06] first:border-t first:border-white/[0.06] transition-colors"
                onMouseEnter={() => setHoveredSlug(project.slug)}
                onMouseLeave={() => setHoveredSlug(null)}
              >
                <div className="flex items-baseline gap-4 min-w-0">
                  <h3 className="text-2xl md:text-3xl font-medium text-white/50 group-hover:text-white transition-colors duration-200">
                    {project.title}
                  </h3>
                  <span className="hidden md:inline text-sm text-white/20 group-hover:text-white/40 transition-colors duration-200">
                    {project.tag}
                  </span>
                </div>
                <svg
                  className="w-5 h-5 text-white/15 group-hover:text-white/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0 ml-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M7 17L17 7M17 7H7M17 7v10"
                  />
                </svg>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-white/30">&copy; {new Date().getFullYear()} Nathaniel Muyco</p>
          <div className="flex gap-8">
            <a href="https://linkedin.com/in/nathanielmuyco" target="_blank" rel="noopener noreferrer" className="text-sm text-white/30 hover:text-white transition-colors">LinkedIn</a>
            <a href="mailto:nathanmuyx@gmail.com" className="text-sm text-white/30 hover:text-white transition-colors">Email</a>
          </div>
        </div>
      </div>

      {/* Cursor-following preview — desktop only */}
      <div
        className="hidden lg:block fixed pointer-events-none z-[60] rounded-2xl overflow-hidden bg-[#141414] shadow-2xl shadow-black/50"
        style={{
          width: 320,
          height: 220,
          left: cursorPos.x + (sectionRef.current?.getBoundingClientRect().left ?? 0) - 160,
          top: cursorPos.y + (sectionRef.current?.getBoundingClientRect().top ?? 0) - 240,
          opacity: hoveredSlug ? 1 : 0,
          transform: `scale(${hoveredSlug ? 1 : 0.9})`,
          transition: "opacity 200ms ease-out, transform 200ms ease-out",
        }}
      >
        {projects.map((project) => {
          const Mockup = mockupComponents[project.slug];
          return (
            <div
              key={project.slug}
              className="absolute inset-0 transition-opacity duration-150"
              style={{ opacity: hoveredSlug === project.slug ? 1 : 0 }}
            >
              {Mockup && <Mockup />}
            </div>
          );
        })}
      </div>
    </section>
  );
}
