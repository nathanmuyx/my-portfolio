"use client";

import Image from "next/image";
import { CaseStudyLayout } from "@/components/case-study/CaseStudyLayout";
import { MoreProjects } from "@/components/case-study/MoreProjects";
import { TechIcon } from "@/components/case-study/TechIcon";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "overview", label: "Overview" },
  { id: "finance-app", label: "Finance App" },
  { id: "the-pivot", label: "The Pivot" },
  { id: "events-platform", label: "Events Platform" },
  { id: "stack", label: "Stack" },
  { id: "reflection", label: "Reflection" },
];

export default function TypidPage() {
  return (
    <CaseStudyLayout
      projectTitle="Typid"
      sections={sections}
      accentColor="#f59e0b"
    >
      {/* Hero */}
      <section id="hero" className="pt-32 md:pt-44 pb-20 md:pb-28 px-6 md:px-12 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-wrap gap-2 mb-8">
            {["Co-Founder", "Product Design", "Frontend Dev", "2022 - Present"].map((tag) => (
              <span key={tag} className="text-[11px] px-3 py-1.5 rounded-full bg-cream text-foreground/60">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-medium leading-[0.92] tracking-tight max-w-3xl mb-8">
            Built a finance app, then pivoted to events.
          </h1>

          <p className="text-lg md:text-xl text-foreground/50 max-w-2xl leading-relaxed">
            Typid started as a personal finance app for Filipinos juggling cash, banks, and e-wallets. After shipping to both app stores, we pivoted to solve a bigger problem: fragmented event management in the Philippines.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 md:px-12 pb-24 md:pb-32">
        <div className="max-w-[1100px] mx-auto">
          <div className="relative w-full rounded-2xl overflow-hidden bg-[#0a0a0a]" style={{ aspectRatio: "16 / 9" }}>
            <div className="absolute left-[-20%] top-[-20%] w-[140%] h-[140%] pointer-events-none">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#17bff9]/40 blur-[120px] rounded-full w-[600px] h-[600px]" />
            </div>
            <div className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <div className="bg-white/20 blur-[80px] rounded-full w-[400px] h-[400px]" />
            </div>

            <div className="absolute border-4 border-white/15 rounded-[12px] overflow-hidden left-[20%] top-[12%] w-[58%]" style={{ aspectRatio: "404 / 226" }}>
              <Image src="/images/typid/aisen-3.png" alt="Aisen Fest event page" fill className="object-cover object-top" />
            </div>
            <div className="absolute border-4 border-white/15 rounded-[12px] overflow-hidden left-[16%] top-[24%] w-[66%]" style={{ aspectRatio: "448 / 250" }}>
              <Image src="/images/typid/Himaya-2.png" alt="Himaya event page" fill className="object-cover object-top" />
            </div>
            <div className="absolute border-4 border-white/15 rounded-[12px] overflow-hidden left-[12%] top-[38%] w-[74%]" style={{ aspectRatio: "488 / 274" }}>
              <Image src="/images/typid/homepage-1.png" alt="Typid homepage" fill className="object-cover object-top" />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Grid */}
      <section id="overview" className="px-6 md:px-12 pb-24 md:pb-32 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid md:grid-cols-3 gap-x-12 gap-y-10">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-foreground/40 mb-3">Role</p>
              <p className="text-sm leading-relaxed">Co-Founder, Product Designer, and Frontend Developer. Responsible for product strategy, UI/UX design, and building the client-side applications.</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-foreground/40 mb-3">Team</p>
              <p className="text-sm leading-relaxed">Two-person founding team. I handled design and frontend, my co-founder managed backend infrastructure and DevOps.</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-foreground/40 mb-3">Timeline</p>
              <p className="text-sm leading-relaxed">2022: Finance app shipped to App Store and Play Store. 2023: Market analysis and pivot decision. 2024: Events platform launched.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <div className="h-px bg-border" />
      </div>

      {/* Chapter 1: Finance */}
      <section id="finance-app" className="px-6 md:px-12 py-24 md:py-32 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] uppercase tracking-wider text-foreground/40 mb-6">Chapter 1</p>
          <h2 className="text-3xl md:text-4xl font-medium leading-tight tracking-tight max-w-2xl mb-6">
            A finance app that understood how Filipinos actually manage money
          </h2>
          <p className="text-base text-foreground/50 max-w-2xl mb-16 leading-relaxed">
            Most finance apps assume one bank account. In the Philippines, people split money across cash, BPI, GCash, and Maya daily. I designed and built an app that consolidated all of this into a single, clear view.
          </p>

          {/* Finance App Mockup */}
          <div className="flex justify-center mb-20">
            <div className="w-64 bg-white rounded-[36px] shadow-[0_8px_60px_rgba(0,0,0,0.08)] border border-gray-100 p-3">
              <div className="w-full rounded-[26px] overflow-hidden bg-gray-50">
                <div className="p-6 bg-[#0a0a0a]">
                  <p className="text-[10px] text-white/40 mb-1">Total Balance</p>
                  <p className="text-2xl font-bold text-white">&#8369;24,850</p>
                </div>
                <div className="p-3 space-y-2">
                  {[
                    { name: "Cash", amount: "₱5,200", dot: "#0a0a0a" },
                    { name: "BPI", amount: "₱12,450", dot: "#0066FF" },
                    { name: "GCash", amount: "₱4,200", dot: "#007DFE" },
                    { name: "Maya", amount: "₱3,000", dot: "#00B274" },
                  ].map((wallet) => (
                    <div key={wallet.name} className="flex items-center justify-between p-3 bg-white rounded-xl">
                      <div className="flex items-center gap-2.5">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: wallet.dot }} />
                        <span className="text-xs font-medium">{wallet.name}</span>
                      </div>
                      <span className="text-xs text-foreground/40">{wallet.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* What I built */}
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-lg font-medium mb-4">What I designed and built</h3>
              <ul className="space-y-3">
                {[
                  "Multi-wallet dashboard with cash, bank, and e-wallet balances in one view",
                  "Categorized expense tracking with visual breakdowns by wallet",
                  "Emergency fund tracker with savings goal progress",
                  "Cross-platform UI built in Flutter, deployed to both app stores",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-foreground/60 leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-foreground/30 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Tech decisions</h3>
              <div className="space-y-3">
                {[
                  { tool: "Flutter", reason: "Single codebase for iOS and Android. Faster iteration for a two-person team." },
                  { tool: "Supabase", reason: "Auth, database, and real-time subscriptions without managing infrastructure." },
                  { tool: "Riverpod", reason: "Clean state management. Better testability than Provider." },
                ].map((item) => (
                  <div key={item.tool} className="text-sm">
                    <span className="font-medium">{item.tool}</span>
                    <span className="text-foreground/40">: {item.reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <div className="h-px bg-border" />
      </div>

      {/* The Pivot */}
      <section id="the-pivot" className="px-6 md:px-12 py-24 md:py-32 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] uppercase tracking-wider text-foreground/40 mb-6">The Pivot</p>
          <h2 className="text-3xl md:text-4xl font-medium leading-tight tracking-tight max-w-2xl mb-6">
            The market was saturated. The problem wasn&apos;t.
          </h2>
          <p className="text-base text-foreground/50 max-w-2xl mb-16 leading-relaxed">
            After shipping v1, we ran into reality. GCash, Maya, and every major bank had their own finance features. Competing on personal finance alone wasn&apos;t viable. But while organizing a university event, we experienced the real gap. There was no unified platform for Philippine event management.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                year: "2022",
                title: "Shipped",
                body: "Finance app live on both app stores. Real users, real feedback. Proved we could build and ship.",
              },
              {
                year: "2023",
                title: "Pivoted",
                body: "Saturated market, no differentiation. Identified events as the real opportunity from firsthand experience.",
              },
              {
                year: "2024",
                title: "Launched",
                body: "Events platform live. Ticketing, QR check-in, PH payment support. Powering real events.",
              },
            ].map((step) => (
              <div key={step.year} className="p-6 rounded-2xl bg-cream/50">
                <p className="text-[11px] text-foreground/30 mb-4">{step.year}</p>
                <h3 className="text-base font-medium mb-2">{step.title}</h3>
                <p className="text-sm text-foreground/50 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <div className="h-px bg-border" />
      </div>

      {/* Chapter 2: Events */}
      <section id="events-platform" className="px-6 md:px-12 py-24 md:py-32 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] uppercase tracking-wider text-foreground/40 mb-6">Chapter 2</p>
          <h2 className="text-3xl md:text-4xl font-medium leading-tight tracking-tight max-w-2xl mb-6">
            Event ticketing built for how the Philippines actually pays
          </h2>
          <p className="text-base text-foreground/50 max-w-2xl mb-16 leading-relaxed">
            Eventbrite doesn&apos;t support GCash. Ticketmaster doesn&apos;t exist here. Local organizers were using Google Forms and manual bank transfer screenshots. We built the infrastructure they needed, from ticket purchase to venue check-in.
          </p>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 mb-20">
            {[
              {
                title: "Event creation",
                desc: "Organizers set up events with custom branding, ticket tiers, pricing, and capacity limits. No more spreadsheet management.",
              },
              {
                title: "PH payment verification",
                desc: "GCash, Maya, and bank transfer support with manual and automated verification. Built for the reality of Philippine payments.",
              },
              {
                title: "QR check-in",
                desc: "Each ticket generates a unique QR code. Venue staff scan to validate. Handles edge cases like refunds, duplicates, and transfer tickets.",
              },
              {
                title: "Attendee management",
                desc: "Track buyers, payment status, and check-in state in real-time. Exportable to Excel for organizers who need offline records.",
              },
              {
                title: "Financial dashboard",
                desc: "Budget planning, revenue tracking, and P&L summaries. Organizers see where the money is going without switching tools.",
              },
              {
                title: "Multi-tier ticketing",
                desc: "Early bird, VIP, group discounts with inventory management per tier and automatic sold-out handling.",
              },
            ].map((feature) => (
              <div key={feature.title}>
                <h3 className="text-base font-medium mb-2">{feature.title}</h3>
                <p className="text-sm text-foreground/50 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden bg-[#0a0a0a]" style={{ aspectRatio: "4 / 3" }}>
              <div className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <div className="bg-[#17bff9]/30 blur-[80px] rounded-full w-[300px] h-[300px]" />
              </div>
              <div className="absolute border-4 border-white/15 rounded-[12px] overflow-hidden left-[8%] top-[12%] w-[84%]" style={{ aspectRatio: "488 / 274" }}>
                <Image src="/images/typid/homepage-1.png" alt="Typid events homepage" fill className="object-cover object-top" />
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden bg-[#0a0a0a]" style={{ aspectRatio: "4 / 3" }}>
              <div className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <div className="bg-[#17bff9]/30 blur-[80px] rounded-full w-[300px] h-[300px]" />
              </div>
              <div className="absolute border-4 border-white/15 rounded-[12px] overflow-hidden left-[8%] top-[12%] w-[84%]" style={{ aspectRatio: "448 / 250" }}>
                <Image src="/images/typid/Himaya-2.png" alt="Himaya event on Typid" fill className="object-cover object-top" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <div className="h-px bg-border" />
      </div>

      {/* Tech Stack */}
      <section id="stack" className="px-6 md:px-12 py-24 md:py-32 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] uppercase tracking-wider text-foreground/40 mb-6">Stack</p>
          <h2 className="text-3xl md:text-4xl font-medium leading-tight tracking-tight max-w-2xl mb-16">
            Technical decisions
          </h2>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-foreground/40 mb-6">Finance App</p>
              <div className="space-y-4">
                {[
                  { name: "Flutter", role: "Cross-platform UI" },
                  { name: "Dart", role: "Application logic" },
                  { name: "Supabase", role: "Database, auth, real-time" },
                  { name: "Riverpod", role: "State management" },
                  { name: "Claude Code", role: "AI-assisted development" },
                ].map((tech) => (
                  <div key={tech.name} className="flex items-center justify-between pb-4 border-b border-border">
                    <span className="text-sm font-medium flex items-center gap-2"><TechIcon name={tech.name} />{tech.name}</span>
                    <span className="text-sm text-foreground/40">{tech.role}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-foreground/40 mb-6">Events Platform</p>
              <div className="space-y-4">
                {[
                  { name: "Next.js 14", role: "React framework" },
                  { name: "TypeScript", role: "Type safety" },
                  { name: "Supabase", role: "Database, auth, storage" },
                  { name: "Resend", role: "Transactional email" },
                  { name: "Claude Code", role: "AI-assisted development" },
                ].map((tech) => (
                  <div key={tech.name} className="flex items-center justify-between pb-4 border-b border-border">
                    <span className="text-sm font-medium flex items-center gap-2"><TechIcon name={tech.name} />{tech.name}</span>
                    <span className="text-sm text-foreground/40">{tech.role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <div className="h-px bg-border" />
      </div>

      {/* Reflection */}
      <section id="reflection" className="px-6 md:px-12 py-24 md:py-32 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] uppercase tracking-wider text-foreground/40 mb-6">Reflection</p>
          <h2 className="text-3xl md:text-4xl font-medium leading-tight tracking-tight max-w-2xl mb-10">
            What I learned
          </h2>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-4xl">
            {[
              {
                title: "Ship first, perfect later",
                body: "The finance app wasn't perfect, but shipping it taught us more than any amount of planning. Real users showed us what mattered.",
              },
              {
                title: "Pivoting isn't failure",
                body: "Recognizing a saturated market early saved us months. The skills and infrastructure from v1 directly accelerated the events platform.",
              },
              {
                title: "Design for local context",
                body: "International patterns don't always translate. Philippine payment habits, event culture, and user expectations required original solutions.",
              },
              {
                title: "Two-person teams move fast",
                body: "With clear ownership (design/frontend and backend/infra), we shipped two products in two years without process overhead.",
              },
            ].map((lesson) => (
              <div key={lesson.title}>
                <h3 className="text-base font-medium mb-2">{lesson.title}</h3>
                <p className="text-sm text-foreground/50 leading-relaxed">{lesson.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MoreProjects currentSlug="typid" />
    </CaseStudyLayout>
  );
}
