"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CardSwap from "@/components/ui/CardSwap";

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
    pills: ["Flutter", "Next.js", "Supabase"],
    bgColor: "bg-[#0a0a0a]",
  },
  {
    id: "strategic-visionz",
    title: "Strategic Visionz",
    subtitle: "Current",
    description: "Enterprise client work. Full stack design engineering.",
    pills: ["Xano", "WeWeb", "React", "Next.js", "Expo", "Figma"],
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
    pills: ["Flutter", "Supabase"],
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

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white relative">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 bg-white/80 backdrop-blur-sm animate-fade-in">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <Link href="/" className="text-sm font-medium text-foreground">
            Nathaniel Muyco
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a href="#work" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
              Work
            </a>
            <a href="#about" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
              About
            </a>
            <a href="mailto:nathanmuyx@gmail.com" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
              Contact
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-sm text-foreground"
          >
            {mobileMenuOpen ? "Close" : "Menu"}
          </button>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[220px] animate-fade-in-up animation-delay-200">
            {/* Typid - Large */}
            <Link href="/work/typid" className="col-span-2 row-span-2 block group">
              <div className={`relative h-full rounded-[20px] overflow-hidden ${projects[0].bgColor} transition-transform duration-300 ease-out group-hover:scale-[0.98]`}>
                {/* Cyan glow */}
                <div className="absolute left-[-35%] top-[-5%] w-[170%] aspect-square flex items-center justify-center pointer-events-none">
                  <div className="flex-none rotate-[131.17deg]">
                    <div className="bg-[#17bff9] blur-[50px] rounded-full w-[786px] h-[786px]" />
                  </div>
                </div>
                {/* White glow */}
                <div className="absolute left-1/2 -translate-x-1/2 top-[-1%] w-[90%] aspect-square flex items-center justify-center pointer-events-none">
                  <div className="flex-none rotate-[131.17deg]">
                    <div className="bg-white blur-[50px] rounded-full w-[414px] h-[414px]" />
                  </div>
                </div>

                {/* Swappable Cards - triggers on hover */}
                <CardSwap
                  images={[
                    { src: "/images/typid/aisen-3.png", alt: "Aisen Fest" },
                    { src: "/images/typid/Himaya-2.png", alt: "Himaya" },
                    { src: "/images/typid/homepage-1.png", alt: "Typid Homepage" },
                  ]}
                />

                {/* Always-visible pills */}
                <div className="absolute top-0 left-0 right-0 p-6 z-[2]">
                  <div className="flex flex-wrap gap-1.5">
                    {projects[0].pills.map((pill) => (
                      <span key={pill} className="text-[10px] px-2 py-1 rounded-full bg-white/10 text-white/70">
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover dark gradient + text */}
                <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent rounded-[20px]" />
                  <div className="relative h-full p-6 flex flex-col justify-end">
                    <h3 className="text-2xl md:text-3xl font-medium text-white mb-2">
                      {projects[0].title}
                    </h3>
                    <p className="text-sm text-white/60 max-w-xs">
                      {projects[0].description}
                    </p>
                    <p className="text-sm text-white/50 mt-3">
                      View project →
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Strategic Visionz - Large */}
            <Link href="/work/strategic-visionz" className="col-span-2 row-span-2 block group">
              <div className={`relative h-full rounded-[20px] overflow-hidden ${projects[1].bgColor} transition-transform duration-300 ease-out group-hover:scale-[0.98]`}>
                {/* Blue glow */}
                <div className="absolute left-1/2 -translate-x-1/2 top-[2%] w-[88%] aspect-square flex items-center justify-center pointer-events-none">
                  <div className="flex-none rotate-[131.17deg]">
                    <div className="bg-[#0a4299] blur-[50px] rounded-full w-[390px] h-[414px]" />
                  </div>
                </div>

                {/* Screenshot */}
                <div className="absolute left-1/2 -translate-x-1/2 top-[26%] w-[89%] border-[7px] border-white/20 rounded-[19px] overflow-hidden shadow-[0px_7px_7px_rgba(0,0,0,0.25)]" style={{ aspectRatio: '576 / 360' }}>
                  <Image
                    src="/images/strategic-visionz/homepage.png"
                    alt="Strategic Visionz Homepage"
                    fill
                    className="object-cover object-top"
                  />
                </div>

                {/* Always-visible pills */}
                <div className="absolute top-0 left-0 right-0 p-6 z-[2]">
                  <div className="flex flex-wrap gap-1.5">
                    {projects[1].pills.map((pill) => (
                      <span key={pill} className="text-[10px] px-2 py-1 rounded-full bg-white/10 text-white/70">
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover dark gradient + text */}
                <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent rounded-[20px]" />
                  <div className="relative h-full p-6 flex flex-col justify-end">
                    <h3 className="text-2xl md:text-3xl font-medium text-white mb-2">
                      {projects[1].title}
                    </h3>
                    <p className="text-sm text-white/60 max-w-xs">
                      {projects[1].description}
                    </p>
                    <p className="text-sm text-white/50 mt-3">
                      View project →
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Retriever */}
            <Link href="/work/retriever" className="col-span-1 row-span-1 block group">
              <div className={`relative h-full rounded-[20px] overflow-hidden ${projects[3].bgColor} transition-transform duration-300 ease-out group-hover:scale-[0.96]`}>
                {/* Orange glow */}
                <div className="absolute left-1/2 -translate-x-1/2 top-[22%] w-[46%] aspect-square flex items-center justify-center pointer-events-none">
                  <div className="flex-none rotate-[131.17deg]">
                    <div className="bg-[#ff5411] blur-[50px] rounded-full w-[102px] h-[108px]" />
                  </div>
                </div>

                {/* Phone mockups */}
                <div className="absolute left-1/2 -translate-x-1/2 top-[22%] w-[73%]" style={{ aspectRatio: '236 / 175' }}>
                  <Image src="/images/retriever/mockup.png" alt="Retriever app screens" fill className="object-contain" />
                </div>

                {/* Always-visible pills */}
                <div className="absolute top-0 left-0 right-0 p-4 z-[2]">
                  <div className="flex flex-wrap gap-1">
                    {projects[3].pills.map((pill) => (
                      <span key={pill} className="text-[9px] px-1.5 py-0.5 rounded-full bg-white/10 text-white/70">
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover dark gradient + text */}
                <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent rounded-[20px]" />
                  <div className="relative h-full p-4 flex flex-col justify-end">
                    <h3 className="text-lg font-medium text-white mb-1">
                      {projects[3].title}
                    </h3>
                    <p className="text-[10px] text-white/50 leading-snug">{projects[3].description}</p>
                    <p className="text-[10px] text-white/40 mt-2">View project →</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Blazesoft */}
            <Link href="/work/blazesoft" className="col-span-1 row-span-1 block group">
              <div className={`relative h-full rounded-[20px] overflow-hidden ${projects[2].bgColor} transition-transform duration-300 ease-out group-hover:scale-[0.96]`}>
                {/* Screenshot 1 - Back */}
                <div className="absolute left-[23%] top-[22%] w-[61%] border-none outline-none" style={{ aspectRatio: '198 / 152' }}>
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[11px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/blazesoft/screenshot-1.png" alt="Sportzino design" className="absolute h-[112.27%] left-[-3.15%] top-[-5.45%] w-[109.79%] max-w-none border-none outline-none" />
                  </div>
                </div>

                {/* Screenshot 2 - Front */}
                <div className="absolute left-[12%] top-[35%] w-[61%] border-none outline-none" style={{ aspectRatio: '197 / 152' }}>
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/blazesoft/screenshot-2.png" alt="Sportzino Figma" className="absolute h-[111.76%] left-[-2.1%] top-[-4.98%] w-[104.9%] max-w-none border-none outline-none" />
                  </div>
                </div>

                {/* Always-visible pills */}
                <div className="absolute top-0 left-0 right-0 p-4 z-[2]">
                  <div className="flex flex-wrap gap-1">
                    {projects[2].pills.map((pill) => (
                      <span key={pill} className="text-[9px] px-1.5 py-0.5 rounded-full bg-white/10 text-white/70">
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover dark gradient + text */}
                <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent rounded-[20px]" />
                  <div className="relative h-full p-4 flex flex-col justify-end">
                    <h3 className="text-lg font-medium text-white mb-1">
                      {projects[2].title}
                    </h3>
                    <p className="text-[10px] text-white/50 leading-snug">{projects[2].description}</p>
                    <p className="text-[10px] text-white/40 mt-2">View project →</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* GoTrabaho */}
            <Link href="/work/gotrabaho" className="col-span-1 row-span-1 block group">
              <div className={`relative h-full rounded-[20px] overflow-hidden ${projects[4].bgColor} transition-transform duration-300 ease-out group-hover:scale-[0.96]`}>
                {/* Yellow swoosh */}
                <div className="absolute bottom-[18%] right-[7%] w-[65%] h-[84%] pointer-events-none">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/gotrabaho/swoosh.svg" alt="" className="w-full h-full" />
                </div>

                {/* Phone mockups */}
                <div className="absolute left-1/2 top-[calc(50%+17.5%)] -translate-x-1/2 -translate-y-1/2 w-[62%]" style={{ aspectRatio: '201 / 233' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/gotrabaho/mockup.png" alt="GoTrabaho app screens" className="absolute inset-0 w-full h-full object-contain border-none outline-none" />
                </div>

                {/* Always-visible pills */}
                <div className="absolute top-0 left-0 right-0 p-4 z-[2]">
                  <div className="flex flex-wrap gap-1">
                    {projects[4].pills.map((pill) => (
                      <span key={pill} className="text-[9px] px-1.5 py-0.5 rounded-full bg-white/10 text-white/70">
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover dark gradient + text */}
                <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent rounded-[20px]" />
                  <div className="relative h-full p-4 flex flex-col justify-end">
                    <h3 className="text-lg font-medium text-white mb-1">
                      {projects[4].title}
                    </h3>
                    <p className="text-[10px] text-white/50 leading-snug">{projects[4].description}</p>
                    <p className="text-[10px] text-white/40 mt-2">View project →</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Tactiv */}
            <Link href="/work/tactiv-studios" className="col-span-1 row-span-1 block group">
              <div className={`relative h-full rounded-[20px] overflow-hidden ${projects[5].bgColor} transition-transform duration-300 ease-out group-hover:scale-[0.96]`}>
                {/* Screenshot 1 - Back */}
                <div className="absolute left-[14.4%] top-[24%] w-[65.6%] border-4 border-white/20 rounded-[4px] overflow-hidden border-none outline-none" style={{ aspectRatio: '214 / 133' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/tactiv-studios/screenshot-1.png" alt="Tactiv Studios dashboard" className="absolute inset-0 w-full h-full object-cover border-none outline-none" />
                </div>

                {/* Screenshot 2 - Front */}
                <div className="absolute left-[7.4%] top-[35%] w-[79.1%] border-4 border-white/20 rounded-[3px] overflow-hidden border-none outline-none" style={{ aspectRatio: '258 / 159' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/tactiv-studios/screenshot-2.png" alt="Tactiv Studios app" className="absolute inset-0 w-full h-full object-cover border-none outline-none" />
                </div>

                {/* Always-visible pills */}
                <div className="absolute top-0 left-0 right-0 p-4 z-[2]">
                  <div className="flex flex-wrap gap-1">
                    {projects[5].pills.map((pill) => (
                      <span key={pill} className="text-[9px] px-1.5 py-0.5 rounded-full bg-white/10 text-white/70">
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover dark gradient + text */}
                <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent rounded-[20px]" />
                  <div className="relative h-full p-4 flex flex-col justify-end">
                    <h3 className="text-lg font-medium text-white mb-1">
                      {projects[5].title}
                    </h3>
                    <p className="text-[10px] text-white/50 leading-snug">{projects[5].description}</p>
                    <p className="text-[10px] text-white/40 mt-2">View project →</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Footer Info */}
          <div className="mt-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 animate-fade-in animation-delay-400">
            <p className="text-sm text-foreground/50 max-w-md">
              Product designer. Sometimes I code the frontend too.
            </p>
            <div className="flex gap-6">
              <a
                href="mailto:nathanmuyx@gmail.com"
                className="text-sm underline underline-offset-4 hover:text-foreground/60 transition-colors"
              >
                Get in touch
              </a>
              <a
                href="https://linkedin.com/in/nathanielmuyco"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline underline-offset-4 hover:text-foreground/60 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white animate-fade-in">
          <div className="px-6 py-6 flex justify-between items-center">
            <span className="text-sm font-medium">Nathaniel Muyco</span>
            <button onClick={() => setMobileMenuOpen(false)} className="text-sm">
              Close
            </button>
          </div>
          <div className="px-6 py-12 space-y-8">
            <a href="#work" onClick={() => setMobileMenuOpen(false)} className="block text-4xl font-medium">
              Work
            </a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-4xl font-medium">
              About
            </a>
            <a href="mailto:nathanmuyx@gmail.com" onClick={() => setMobileMenuOpen(false)} className="block text-4xl font-medium">
              Contact
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
