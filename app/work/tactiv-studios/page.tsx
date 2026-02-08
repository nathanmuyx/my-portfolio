"use client";

import Image from "next/image";
import { CaseStudyLayout } from "@/components/case-study/CaseStudyLayout";
import { MoreProjects } from "@/components/case-study/MoreProjects";
import { TechIcon } from "@/components/case-study/TechIcon";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "overview", label: "Overview" },
  { id: "how-i-worked", label: "How I Worked" },
  { id: "products", label: "Products" },
  { id: "growth", label: "Growth" },
  { id: "stack", label: "Stack" },
];

export default function TactivStudiosPage() {
  return (
    <CaseStudyLayout
      projectTitle="Tactiv Studios"
      sections={sections}
      accentColor="#8b5cf6"
    >
      {/* Hero */}
      <section id="hero" className="pt-32 md:pt-44 pb-16 md:pb-20 px-6 md:px-12 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-wrap gap-2 mb-8">
            {["Intern to Lead", "3 Years", "6+ Products", "2020 - 2023"].map((tag) => (
              <span key={tag} className="text-[11px] px-3 py-1.5 rounded-full bg-cream text-foreground/60">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-medium leading-[0.92] tracking-tight max-w-3xl mb-8">
            Intern to design lead, six products shipped.
          </h1>

          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl leading-relaxed">
            Design, project management, QA, and frontend. Agency pace across fintech, government, health, and enterprise clients. I learned why designs fail in development — and how to prevent it.
          </p>
        </div>
      </section>

      {/* Hero Thumbnail */}
      <section className="px-6 md:px-12 pb-16 md:pb-20 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="relative rounded-[14px] overflow-hidden bg-[#0a0a0a]" style={{ aspectRatio: "943 / 460" }}>
            {/* Red glow */}
            <div className="absolute pointer-events-none" style={{ left: "60%", top: "15%", width: "50%", aspectRatio: "1 / 1" }}>
              <div className="w-full h-full bg-[#990a0a] blur-[50px] rounded-full rotate-[131deg]" />
            </div>
            {/* HRMS Dashboard — top left */}
            <div className="absolute border-[3px] border-white/20 rounded-[4px] overflow-hidden" style={{ left: "0%", top: "18%", width: "32.5%", height: "41%" }}>
              <Image src="/images/tactiv-studios/hrms-dashboard.webp" alt="HRMS dashboard" fill className="object-cover" priority sizes="(max-width: 768px) 90vw, 33vw" />
            </div>
            {/* Login Form — top right */}
            <div className="absolute rounded-[4px] overflow-hidden" style={{ left: "42.5%", top: "-8%", width: "31%", height: "40%" }}>
              <Image src="/images/tactiv-studios/login-form.webp" alt="Application login screen" fill className="object-cover" priority sizes="(max-width: 768px) 90vw, 31vw" />
            </div>
            {/* Schedule — right */}
            <div className="absolute overflow-hidden" style={{ left: "64%", top: "41%", width: "36%", height: "42%" }}>
              <Image src="/images/tactiv-studios/schedule.webp" alt="Schedule calendar view" fill className="object-cover object-top" priority sizes="(max-width: 768px) 90vw, 36vw" />
            </div>
            {/* HRMS People — bottom center, bleeds past edge */}
            <div className="absolute border-[3px] border-white/20 rounded-[5px] overflow-hidden" style={{ left: "25%", top: "66%", width: "36%", height: "42%" }}>
              <Image src="/images/tactiv-studios/hrms-people.webp" alt="HRMS employee profiles" fill className="object-cover object-top" priority sizes="(max-width: 768px) 90vw, 36vw" />
            </div>
            {/* Tactiv Logo — centered */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10" style={{ width: "17%", height: "7.5%" }}>
              <Image src="/images/tactiv-studios/tactiv-logo.webp" alt="Tactiv Studios" fill className="object-contain" priority sizes="170px" />
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
            Tactiv Studios is a software agency in the Philippines. I joined as an intern and left as the design lead — shipping across mobile, web, and enterprise.
          </p>

          <div className="grid md:grid-cols-3 gap-x-12 gap-y-8">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-3">What I did</p>
              <p className="text-sm text-foreground/70 leading-relaxed">UI/UX design, design systems, component libraries, developer handoff, project management, QA testing, and Webflow development.</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-3">Industries</p>
              <p className="text-sm text-foreground/70 leading-relaxed">Fintech, government, health & fitness, HR enterprise, real estate, and marketplace platforms.</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-3">Clients</p>
              <p className="text-sm text-foreground/70 leading-relaxed">Local and international — from General Santos City to Melbourne, Australia. Most work under NDA.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12"><div className="h-px bg-border" /></div>

      {/* How I Worked */}
      <section id="how-i-worked" className="px-6 md:px-12 py-20 md:py-24 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-6">How I worked</p>
          <h2 className="text-3xl md:text-4xl font-medium leading-tight tracking-tight max-w-2xl mb-16">
            Design system first. Ship with confidence.
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mb-16">
            {/* Design system */}
            <div className="relative rounded-xl overflow-hidden bg-[#0a0a0a]" style={{ aspectRatio: "4 / 3" }}>
              <div className="absolute pointer-events-none" style={{ left: "-8%", top: "-1%", width: "107%", height: "107%" }}>
                <div className="flex items-center justify-center w-full h-full">
                  <div className="bg-[#990a0a] blur-[50px] rounded-full" style={{ width: "76%", height: "76%" }} />
                </div>
              </div>
              {/* Payment card — top left */}
              <div className="absolute overflow-hidden" style={{ left: "14%", top: "7%", width: "26%", height: "49%" }}>
                <Image src="/images/tactiv-studios/design-payment-card.webp" alt="Payment method component" fill className="object-cover" loading="lazy" sizes="(max-width: 768px) 26vw, 14vw" />
              </div>
              {/* Color picker — top right */}
              <div className="absolute overflow-hidden" style={{ left: "45%", top: "10%", width: "33%", height: "46%" }}>
                <Image src="/images/tactiv-studios/design-color-picker.webp" alt="Color picker component" fill className="object-cover" loading="lazy" sizes="(max-width: 768px) 33vw, 17vw" />
              </div>
              {/* Email input — bottom center */}
              <div className="absolute overflow-hidden" style={{ left: "17%", top: "58%", width: "45%", height: "41%" }}>
                <Image src="/images/tactiv-studios/design-email-input.webp" alt="Email input component" fill className="object-cover" loading="lazy" sizes="(max-width: 768px) 45vw, 23vw" />
              </div>
            </div>
            {/* Sprint board */}
            <div className="relative rounded-xl overflow-hidden bg-[#0a0a0a]" style={{ aspectRatio: "4 / 3" }}>
              <div className="absolute pointer-events-none" style={{ left: "-8%", top: "-1%", width: "107%", height: "107%" }}>
                <div className="flex items-center justify-center w-full h-full">
                  <div className="bg-[#990a0a] blur-[50px] rounded-full" style={{ width: "76%", height: "76%" }} />
                </div>
              </div>
              <div className="absolute overflow-hidden" style={{ left: "-5%", top: "-10%", width: "110%", height: "110%", transform: "rotate(15deg) skewX(-10deg)" }}>
                <Image src="/images/tactiv-studios/sprint-board.webp" alt="Jira sprint board" fill className="object-cover" loading="lazy" sizes="(max-width: 768px) 90vw, 50vw" />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            {[
              { title: "Design system before code", desc: "Every project started with a component library — tokens, variants, auto layout. Consistent from first screen to last." },
              { title: "Jira sprints and ticket management", desc: "I created dev tickets from approved designs, managed sprints, and ran planning and retro meetings weekly." },
              { title: "QA on staging", desc: "After dev completed tickets, I tested on staging — pixel accuracy, edge cases, responsive behavior. Caught issues before clients did." },
              { title: "Developer handoff", desc: "Clean Figma files with proper naming, spacing specs, and interaction notes. Developers never had to guess." },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="text-base font-medium mb-2">{item.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12"><div className="h-px bg-border" /></div>

      {/* Products Shipped */}
      <section id="products" className="px-6 md:px-12 py-20 md:py-24 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-6">Products shipped</p>
          <h2 className="text-3xl md:text-4xl font-medium leading-tight tracking-tight max-w-2xl mb-4">
            6+ products across mobile and web.
          </h2>
          <p className="text-sm text-foreground/50 mb-16">Most work under NDA. Descriptions reflect my contributions without disclosing proprietary details.</p>

          <div className="space-y-16">
            {/* 01 — Home Loan Application */}
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: "460 / 235", background: "linear-gradient(135deg, #171a22 19%, #000 87%)" }}>
                <p className="absolute top-3 left-4 text-[10px] text-white/40 italic z-10">Design excellence under NDA.*</p>
                {/* Red glow */}
                <div className="absolute pointer-events-none" style={{ left: "1%", top: "0%", width: "56%", height: "100%" }}>
                  <div className="w-full h-full bg-[#990a0a] blur-[40px] rounded-full opacity-80" />
                </div>
                {/* Bank dashboard — left */}
                <div className="absolute rounded-[3px] overflow-hidden" style={{ left: "3.9%", top: "37.6%", width: "50%", aspectRatio: "230.259 / 143.912" }}>
                  <Image src="/images/tactiv-studios/homeloan-dashboard.webp" alt="Bank dashboard login" fill className="object-contain" loading="lazy" sizes="(max-width: 768px) 50vw, 25vw" />
                </div>
                {/* Phone 1 — applications list */}
                <div className="absolute rounded-[5px] overflow-hidden" style={{ left: "56.9%", top: "5.8%", width: "18.4%", aspectRatio: "84.78 / 183.799" }}>
                  <Image src="/images/tactiv-studios/homeloan-phone1.webp" alt="Applications list screen" fill className="object-contain" loading="lazy" sizes="(max-width: 768px) 19vw, 10vw" />
                </div>
                {/* Phone 2 — income details */}
                <div className="absolute rounded-[5px] overflow-hidden" style={{ left: "78.3%", top: "5.8%", width: "18.4%", aspectRatio: "84.78 / 183.799" }}>
                  <Image src="/images/tactiv-studios/homeloan-phone2.webp" alt="Income details screen" fill className="object-contain" loading="lazy" sizes="(max-width: 768px) 19vw, 10vw" />
                </div>
              </div>
              <div>
                <span className="text-[11px] text-foreground/40 mb-3 block">Mobile App, Fintech</span>
                <h3 className="text-xl font-medium mb-3">Home Loan Application</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">Housing marketplace with loan application flow. Designed the mobile app, onboarding questions, and a bank dashboard for processing approvals.</p>
              </div>
            </div>

            {/* 02 — HRMS */}
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="md:order-2 relative rounded-xl overflow-hidden" style={{ aspectRatio: "440 / 224", background: "linear-gradient(138deg, #171a22 19%, #000 87%)" }}>
                <p className="absolute top-3 left-4 text-[10px] text-white/40 italic z-10">Design excellence under NDA.*</p>
                {/* Red glow */}
                <div className="absolute pointer-events-none" style={{ left: "1%", top: "0%", width: "56%", height: "100%" }}>
                  <div className="w-full h-full bg-[#990a0a] blur-[40px] rounded-full opacity-80" />
                </div>
                {/* People/profiles — left */}
                <div className="absolute rounded-[3px] overflow-hidden" style={{ left: "4%", top: "38%", width: "50.4%", aspectRatio: "221.711 / 138.57" }}>
                  <Image src="/images/tactiv-studios/hrms-people-full.webp" alt="HRMS employee profiles" fill className="object-contain" loading="lazy" sizes="(max-width: 768px) 50vw, 25vw" />
                </div>
                {/* Detail view — right */}
                <div className="absolute rounded-[3px] overflow-hidden" style={{ left: "57.2%", top: "8.5%", width: "42.5%", aspectRatio: "187.117 / 116.997" }}>
                  <Image src="/images/tactiv-studios/hrms-detail.webp" alt="HRMS employee detail" fill className="object-contain" loading="lazy" sizes="(max-width: 768px) 43vw, 22vw" />
                </div>
              </div>
              <div className="md:order-1">
                <span className="text-[11px] text-foreground/40 mb-3 block">Enterprise SaaS</span>
                <h3 className="text-xl font-medium mb-3">HRMS</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">Human resource management system for a General Santos City client. Attendance tracking, leave management, incident reporting, and employee onboarding. Served as both designer and PM.</p>
              </div>
            </div>

            {/* 03 — Emergency Monitoring System */}
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: "522 / 235", background: "linear-gradient(135deg, #171a22 19%, #000 87%)" }}>
                <p className="absolute top-3 left-4 text-[10px] text-white/40 italic z-10">Design excellence under NDA.*</p>
                {/* Red glow */}
                <div className="absolute pointer-events-none" style={{ left: "1%", top: "0%", width: "56%", height: "100%" }}>
                  <div className="w-full h-full bg-[#990a0a] blur-[40px] rounded-full opacity-80" />
                </div>
                {/* Schedule/calendar — left */}
                <div className="absolute rounded-[3px] overflow-hidden" style={{ left: "3.2%", top: "34.9%", width: "58%", aspectRatio: "2880 / 1640" }}>
                  <Image src="/images/tactiv-studios/emergency-schedule.webp" alt="Schedule calendar dark UI" fill className="object-contain" loading="lazy" sizes="(max-width: 768px) 58vw, 29vw" />
                </div>
                {/* Map/satellite — right */}
                <div className="absolute rounded-[8px] overflow-hidden" style={{ left: "56.6%", top: "9.8%", width: "43%", aspectRatio: "2881 / 1640" }}>
                  <Image src="/images/tactiv-studios/emergency-map.webp" alt="Satellite map monitoring view" fill className="object-contain" loading="lazy" sizes="(max-width: 768px) 43vw, 22vw" />
                </div>
              </div>
              <div>
                <span className="text-[11px] text-foreground/40 mb-3 block">Web Dashboard, Government</span>
                <h3 className="text-xl font-medium mb-3">Emergency Monitoring System</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">Real-time monitoring for emergency situations in Australia. Live camera feeds from body cams, cars, and drones. Converted client wireframes into high-fidelity UI with role-based views.</p>
              </div>
            </div>

            {/* 04 — Wealth Management Dashboards */}
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="md:order-2 relative rounded-xl overflow-hidden" style={{ aspectRatio: "500 / 235", background: "linear-gradient(138deg, #171a22 19%, #000 87%)" }}>
                <p className="absolute top-3 left-4 text-[10px] text-white/40 italic z-10">Not the actual design.*</p>
                {/* Red glow */}
                <div className="absolute pointer-events-none" style={{ left: "1%", top: "0%", width: "56%", height: "100%" }}>
                  <div className="w-full h-full bg-[#990a0a] blur-[40px] rounded-full opacity-80" />
                </div>
                {/* Profile/form — left */}
                <div className="absolute rounded-[3px] overflow-hidden" style={{ left: "4%", top: "15%", width: "42%", aspectRatio: "1292 / 1606" }}>
                  <Image src="/images/tactiv-studios/wealth-profile.webp" alt="Profile form screenshot" fill className="object-contain" loading="lazy" sizes="(max-width: 768px) 42vw, 21vw" />
                </div>
                {/* KPI donut chart — bottom right */}
                <div className="absolute rounded-[3px] overflow-hidden" style={{ left: "55%", top: "25%", width: "40%", aspectRatio: "544 / 692" }}>
                  <Image src="/images/tactiv-studios/wealth-donut.webp" alt="KPI donut chart" fill className="object-contain" loading="lazy" sizes="(max-width: 768px) 40vw, 20vw" />
                </div>
              </div>
              <div className="md:order-1">
                <span className="text-[11px] text-foreground/40 mb-3 block">Fintech</span>
                <h3 className="text-xl font-medium mb-3">Wealth Management Dashboards</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">Data visualization dashboards for a health-focused investment company. KPIs, charts, and multi-brand identity system. Also converted paper forms to digital and built pitch decks.</p>
              </div>
            </div>

            {/* 05 — iOS Fitness App */}
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: "490 / 253", background: "linear-gradient(135deg, #171a22 19%, #000 87%)" }}>
                <p className="absolute top-3 left-4 text-[10px] text-white/40 italic z-10">Not the actual design.*</p>
                {/* Red glow */}
                <div className="absolute pointer-events-none" style={{ left: "30%", top: "0%", width: "56%", height: "100%" }}>
                  <div className="w-full h-full bg-[#990a0a] blur-[40px] rounded-full opacity-80" />
                </div>
                {/* Wireframes — extends past left edge */}
                <div className="absolute overflow-hidden" style={{ left: "-18%", top: "8%", width: "118%", height: "88%" }}>
                  <Image src="/images/tactiv-studios/fitness-wireframes.webp" alt="iOS fitness app wireframes" fill className="object-contain object-left" loading="lazy" sizes="(max-width: 768px) 100vw, 55vw" />
                </div>
              </div>
              <div>
                <span className="text-[11px] text-foreground/40 mb-3 block">Mobile, Health</span>
                <h3 className="text-xl font-medium mb-3">iOS Fitness App</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">All-in-one fitness app: workouts, breathwork, meditation, fasting, nutrition. Designed the full UX, app navigation, workout thumbnails, and Play Store screenshots. Webflow for landing page.</p>
              </div>
            </div>

            {/* 06 — Rideshare Marketplace */}
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="md:order-2 relative rounded-xl overflow-hidden" style={{ aspectRatio: "430 / 282", background: "linear-gradient(139deg, #171a22 19%, #000 87%)" }}>
                {/* Two text lines */}
                <div className="absolute left-4 top-3 z-10">
                  <p className="text-[10px] text-white/40 italic leading-relaxed">Design excellence under NDA.*</p>
                  <p className="text-[10px] text-white/40 italic leading-relaxed">Not the actual design</p>
                </div>
                {/* Glow — top right */}
                <div className="absolute pointer-events-none rounded-full" style={{ left: "130%", top: "-30%", width: "52%", height: "52%", background: "radial-gradient(circle, rgba(30,20,60,0.6) 0%, transparent 70%)", filter: "blur(40px)" }} />
                {/* Glow — bottom left */}
                <div className="absolute pointer-events-none rounded-full" style={{ left: "-10%", top: "45%", width: "56%", height: "56%", background: "radial-gradient(circle, rgba(30,20,60,0.5) 0%, transparent 70%)", filter: "blur(40px)" }} />
                {/* Map — positioned lower, bleeds past bottom */}
                <div className="absolute rounded-[10px] overflow-hidden" style={{ left: "5.8%", top: "23.8%", width: "82.8%", height: "76.2%" }}>
                  <Image src="/images/tactiv-studios/rideshare-map.webp" alt="Rideshare map view" fill className="object-cover" loading="lazy" sizes="(max-width: 768px) 90vw, 45vw" />
                </div>
                {/* Route overlay — positioned on map */}
                <div className="absolute" style={{ left: "46.8%", top: "45%", width: "26.2%", height: "22.1%" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/tactiv-studios/rideshare-route.svg" alt="Route overlay" className="w-full h-full" />
                </div>
              </div>
              <div className="md:order-1">
                <span className="text-[11px] text-foreground/40 mb-3 block">Web App, Marketplace</span>
                <h3 className="text-xl font-medium mb-3">Job & Rideshare Marketplace</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">Online job booking platform with rideshare and marketplace features. Served as PM — creating tickets, testing, and assisting with design.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12"><div className="h-px bg-border" /></div>

      {/* Growth */}
      <section id="growth" className="px-6 md:px-12 py-20 md:py-24 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-6">Growth</p>
          <h2 className="text-3xl md:text-4xl font-medium leading-tight tracking-tight max-w-2xl mb-16">
            Intern to lead in three years.
          </h2>

          <div className="space-y-0">
            {[
              { year: "2020", role: "Intern", desc: "Design fundamentals, client communication, learning handoff processes." },
              { year: "2021", role: "Junior Designer", desc: "Owned screens and features. Started building design systems." },
              { year: "2022", role: "Designer + PM", desc: "Managed sprints, wrote dev tickets, tested implementations, bridged design and engineering." },
              { year: "2023", role: "Lead", desc: "Led design direction, mentored juniors, established team processes." },
            ].map((item, i) => (
              <div key={item.year} className="grid grid-cols-[60px_1fr] md:grid-cols-[80px_140px_1fr] gap-4 py-6 border-b border-border items-baseline">
                <span className="text-sm text-foreground/50">{item.year}</span>
                <span className="text-sm font-medium hidden md:block">{item.role}</span>
                <div className="md:hidden">
                  <p className="text-sm font-medium">{item.role}</p>
                  <p className="text-sm text-foreground/60">{item.desc}</p>
                </div>
                <p className="text-sm text-foreground/60 hidden md:block">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12"><div className="h-px bg-border" /></div>

      {/* Stack */}
      <section id="stack" className="px-6 md:px-12 py-20 md:py-24 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-6">Stack</p>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-6">Design</p>
              <div className="space-y-4">
                {[
                  { name: "Figma", role: "Primary design tool" },
                  { name: "Adobe XD", role: "Legacy projects" },
                  { name: "Webflow", role: "Marketing sites & CMS" },
                ].map((tech) => (
                  <div key={tech.name} className="flex items-center justify-between pb-4 border-b border-border">
                    <span className="text-sm font-medium flex items-center gap-2"><TechIcon name={tech.name} />{tech.name}</span>
                    <span className="text-sm text-foreground/60">{tech.role}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-6">Project management</p>
              <div className="space-y-4">
                {[
                  { name: "Jira", role: "Sprints & tickets" },
                  { name: "Trello", role: "Early-stage projects" },
                  { name: "Asana", role: "Task tracking" },
                  { name: "Slack", role: "Team communication" },
                  { name: "Loom", role: "Async walkthroughs" },
                ].map((tech) => (
                  <div key={tech.name} className="flex items-center justify-between pb-4 border-b border-border">
                    <span className="text-sm font-medium flex items-center gap-2"><TechIcon name={tech.name} />{tech.name}</span>
                    <span className="text-sm text-foreground/60">{tech.role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <MoreProjects currentSlug="tactiv-studios" />
    </CaseStudyLayout>
  );
}
