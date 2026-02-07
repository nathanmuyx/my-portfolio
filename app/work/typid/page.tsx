"use client";

import Image from "next/image";
import { CaseStudyLayout } from "@/components/case-study/CaseStudyLayout";
import { MoreProjects } from "@/components/case-study/MoreProjects";
import { TechIcon } from "@/components/case-study/TechIcon";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "origin", label: "Origin" },
  { id: "reality", label: "Reality Check" },
  { id: "cursor", label: "Cursor" },
  { id: "pivot", label: "The Pivot" },
  { id: "system", label: "The System" },
  { id: "result", label: "Result" },
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
            {["Side Project → Real Product", "Co-Founder", "Design + Dev", "2022 - Present"].map((tag) => (
              <span key={tag} className="text-[11px] px-3 py-1.5 rounded-full bg-cream text-foreground/60">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-medium leading-[0.92] tracking-tight max-w-4xl mb-8">
            Built a finance app for myself. Ended up fixing event accounting.
          </h1>

          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl leading-relaxed">
            Typid started because I didn&apos;t have an emergency fund. It became an event ticketing platform after 70 users taught me I was solving the wrong problem.
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
              <Image src="/images/typid/aisen-3.png" alt="Aisen Fest event page" fill className="object-cover object-top" priority sizes="(max-width: 768px) 90vw, 60vw" />
            </div>
            <div className="absolute border-4 border-white/15 rounded-[12px] overflow-hidden left-[16%] top-[24%] w-[66%]" style={{ aspectRatio: "448 / 250" }}>
              <Image src="/images/typid/Himaya-2.png" alt="Himaya event page" fill className="object-cover object-top" priority sizes="(max-width: 768px) 90vw, 66vw" />
            </div>
            <div className="absolute border-4 border-white/15 rounded-[12px] overflow-hidden left-[12%] top-[38%] w-[74%]" style={{ aspectRatio: "488 / 274" }}>
              <Image src="/images/typid/homepage-1.png" alt="Typid homepage" fill className="object-cover object-top" priority sizes="(max-width: 768px) 90vw, 74vw" />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12"><div className="h-px bg-border" /></div>

      {/* Chapter 01: The Origin */}
      <section id="origin" className="px-6 md:px-12 py-24 md:py-32 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-6">Chapter 01</p>
          <h2 className="text-3xl md:text-4xl font-medium leading-tight tracking-tight max-w-2xl mb-6">
            I didn&apos;t have an emergency fund. So I built an app to fix that.
          </h2>
          <div className="max-w-2xl space-y-5 text-base text-foreground/70 leading-relaxed mb-16">
            <p>
              Most finance apps assume you have one bank account. In the Philippines, money is everywhere. Cash in your wallet, BPI savings, GCash for online, Maya for bills. I needed something that showed me the real picture across all of them.
            </p>
            <p>
              Before writing a single line of code, I spent weeks researching the right stack. Firebase was the obvious choice, but the costs would blow up with scale. Supabase gave me auth, database, and real-time for free at the volume I needed. Flutter + Dart let me ship to both app stores from one codebase. I handled everything from the app icon to the store screenshots, and deployed to both Google Play and the App Store.
            </p>
          </div>

          {/* Pull quote */}
          <div className="border-l-2 border-foreground/10 pl-6 md:pl-10 py-2 mb-16 max-w-2xl">
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed italic">
              &ldquo;I wasn&apos;t building for a market. I was building for myself. Someone who splits &#8369;5,000 across four different wallets and loses track by Wednesday.&rdquo;
            </p>
          </div>

          {/* Finance App Screens */}
          <div className="relative w-full rounded-2xl overflow-hidden bg-[#0a0a0a]" style={{ aspectRatio: "860 / 420" }}>
            {/* Glow effects */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 flex items-center justify-center w-[400px] h-[400px] pointer-events-none">
              <div className="rotate-[131deg]">
                <div className="bg-white blur-[50px] rounded-full w-[280px] h-[280px]" />
              </div>
            </div>
            <div className="absolute left-[10%] top-[-4%] flex items-center justify-center w-[720px] h-[720px] pointer-events-none">
              <div className="rotate-[131deg]">
                <div className="bg-[#17bff9] blur-[50px] rounded-full w-[500px] h-[500px]" />
              </div>
            </div>
            {/* Phone screens */}
            <div className="absolute inset-0 flex items-center justify-center gap-[0.5%] px-[3%] pt-[3%] pb-[1%]">
              {[
                { src: "/images/typid/phone-home.png", alt: "Home screen" },
                { src: "/images/typid/phone-wallets.png", alt: "Wallets screen" },
                { src: "/images/typid/phone-emergency.png", alt: "Emergency fund setup" },
                { src: "/images/typid/phone-transactions.png", alt: "Transactions screen" },
              ].map((phone, i) => (
                <div key={i} className="relative h-full flex-1">
                  <Image src={phone.src} alt={phone.alt} fill className="object-cover object-top" loading="lazy" sizes="(max-width: 768px) 25vw, 20vw" quality={75} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12"><div className="h-px bg-border" /></div>

      {/* Chapter 02: The Reality Check */}
      <section id="reality" className="px-6 md:px-12 py-24 md:py-32 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-6">Chapter 02</p>
          <h2 className="text-3xl md:text-4xl font-medium leading-tight tracking-tight max-w-2xl mb-6">
            70 users told me everything I needed to hear.
          </h2>
          <div className="max-w-2xl space-y-5 text-base text-foreground/70 leading-relaxed mb-16">
            <p>
              We launched on both app stores. Got some traction. People said &ldquo;nice UI&rdquo; and then never came back. Most were one-time logins. A few recurring users, but not enough to validate the idea.
            </p>
            <p>
              This wasn&apos;t a UX problem. The flows were clean, the interface was solid. The problem was deeper: I was solving a problem only I had. Personal finance tracking in the Philippines is crowded. GCash, Maya, and every bank already had their own version. &ldquo;Perfect for me&rdquo; doesn&apos;t make a product.
            </p>
          </div>

          {/* App store badges */}
          <div className="flex flex-wrap gap-3">
            <a href="https://play.google.com/store/apps/details?id=com.typid.typid&hl=en" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 bg-[#0a0a0a] hover:bg-[#1a1a1a] transition-colors rounded-lg px-4 py-2.5">
              <svg width="20" height="22" viewBox="0 0 20 22" fill="none"><path d="M1.57 0.66C1.21 1.04 1 1.62 1 2.38V19.62C1 20.38 1.21 20.96 1.57 21.34L1.65 21.42L11.23 11.84V11.64V11.44L1.65 1.86L1.57 0.66Z" fill="url(#gp1)"/><path d="M14.41 15.04L11.23 11.84V11.64V11.44L14.41 8.24L14.51 8.3L18.27 10.42C19.35 11.02 19.35 11.98 18.27 12.58L14.51 14.98L14.41 15.04Z" fill="url(#gp2)"/><path d="M14.51 14.98L11.23 11.64L1.57 21.34C1.95 21.74 2.57 21.78 3.27 21.38L14.51 14.98Z" fill="url(#gp3)"/><path d="M14.51 8.3L3.27 1.92C2.57 1.52 1.95 1.56 1.57 1.96L11.23 11.64L14.51 8.3Z" fill="url(#gp4)"/><defs><linearGradient id="gp1" x1="10.28" y1="1.68" x2="-2.96" y2="14.92" gradientUnits="userSpaceOnUse"><stop stopColor="#00A0FF"/><stop offset="1" stopColor="#00A1FF"/></linearGradient><linearGradient id="gp2" x1="19.76" y1="11.14" x2="0.66" y2="11.14" gradientUnits="userSpaceOnUse"><stop stopColor="#FFE000"/><stop offset="1" stopColor="#FFBD00"/></linearGradient><linearGradient id="gp3" x1="12.64" y1="13.28" x2="-3.72" y2="29.64" gradientUnits="userSpaceOnUse"><stop stopColor="#FF3A44"/><stop offset="1" stopColor="#C31162"/></linearGradient><linearGradient id="gp4" x1="-0.96" y1="-4.92" x2="7.24" y2="3.28" gradientUnits="userSpaceOnUse"><stop stopColor="#32A071"/><stop offset="1" stopColor="#2DA771"/></linearGradient></defs></svg>
              <div className="flex flex-col">
                <span className="text-[9px] text-white/70 leading-none">Get it on</span>
                <span className="text-sm font-medium text-white leading-tight">Google Play</span>
              </div>
            </a>
            <a href="https://apps.apple.com/ph/app/typid/id6745561810" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 bg-[#0a0a0a] hover:bg-[#1a1a1a] transition-colors rounded-lg px-4 py-2.5">
              <svg width="18" height="22" viewBox="0 0 18 22" fill="white"><path d="M14.94 11.58C14.97 9.17 16.58 7.94 16.66 7.89C15.64 6.41 12.08 5.93 12.08 5.93C10.66 5.78 9.29 6.79 8.57 6.79C7.83 6.79 6.71 5.95 5.52 5.97C3.91 6 2.42 6.9 1.6 8.35C-0.11 11.29 1.18 15.63 2.82 17.99C3.64 19.15 4.6 20.44 5.87 20.4C7.1 20.35 7.57 19.61 8.97 19.61C10.36 19.61 10.8 20.4 12.08 20.37C13.4 20.35 14.23 19.2 15.03 18.03C15.98 16.67 16.37 15.34 16.38 15.28C16.36 15.27 14.91 14.7 14.94 11.58Z"/><path d="M12.37 4.21C13.03 3.39 13.48 2.27 13.34 1.14C12.37 1.18 11.16 1.82 10.47 2.62C9.86 3.33 9.32 4.49 9.48 5.58C10.57 5.66 11.69 5.01 12.37 4.21Z"/></svg>
              <div className="flex flex-col">
                <span className="text-[9px] text-white/70 leading-none">Available now on</span>
                <span className="text-sm font-medium text-white leading-tight">App Store</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12"><div className="h-px bg-border" /></div>

      {/* Interlude: Cursor */}
      <section id="cursor" className="px-6 md:px-12 py-24 md:py-32 scroll-mt-24 bg-[#0a0a0a]">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] uppercase tracking-wider text-white/50 mb-6">Interlude</p>
          <h2 className="text-3xl md:text-4xl font-medium leading-tight tracking-tight max-w-2xl mb-6 text-white">
            Cursor made me feel like a senior programmer.
          </h2>
          <div className="max-w-2xl space-y-5 text-base text-white/70 leading-relaxed">
            <p>
              Somewhere in the middle of building the finance app, I discovered Cursor. Half coding, half AI. It fundamentally changed how fast I could ship. Logic that used to take me days, I could build in hours.
            </p>
            <p>
              Not by prompting &ldquo;build me a feature.&rdquo; But by working component by component, testing as I went, so I never lost context. This would matter a lot for what came next.
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 04: The Pivot */}
      <section id="pivot" className="px-6 md:px-12 py-24 md:py-32 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-6">Chapter 04</p>
          <h2 className="text-3xl md:text-4xl font-medium leading-tight tracking-tight max-w-2xl mb-6">
            Our church had a money problem. We had the tools to fix it.
          </h2>
          <div className="max-w-2xl space-y-5 text-base text-foreground/70 leading-relaxed mb-16">
            <p>
              September 2025. Our church runs events. Worship nights, youth gatherings, community outreach. And every single time, there was a discrepancy in the money. Tickets sold don&apos;t match cash collected. People claim they paid but there&apos;s no record. It&apos;s not theft. It&apos;s chaos.
            </p>
            <p>
              Warren and I looked at each other and thought: Typid literally means &ldquo;record&rdquo; in Bisaya. For every event, there should be no money lost. Every peso tracked, every ticket verified, every attendee accounted for.
            </p>
          </div>

          {/* 14-day build stat */}
          <div className="rounded-2xl bg-[#0a0a0a] p-8 md:p-12 mb-16 max-w-2xl">
            <p className="text-[clamp(2.5rem,6vw,4rem)] font-medium leading-none tracking-tight mb-4 text-white">14 days</p>
            <p className="text-sm text-white/70 leading-relaxed">
              From decision to first ticket sold. Built with Claude + Cursor, component by component, never losing context.
            </p>
          </div>

          {/* Build timeline */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="p-6 rounded-2xl bg-[#0a0a0a]">
              <p className="text-[11px] uppercase tracking-wider text-white/50 mb-4">Week 1</p>
              <h3 className="text-base font-medium mb-2 text-white">Ticketing + Payments</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Event creation, multi-tier tickets, GCash/Maya payment verification. Custom event page for the church&apos;s public-facing ticket sales.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0a0a0a]">
              <p className="text-[11px] uppercase tracking-wider text-white/50 mb-4">Week 2</p>
              <h3 className="text-base font-medium mb-2 text-white">QR + Dashboard</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Unique QR per ticket. Seller dashboard for real-time tracking. Tested scanning for VIP vs. normal tickets until it was bulletproof.
              </p>
            </div>
          </div>

          {/* Build process screenshots */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Dashboard + Himaya event page */}
            <div className="relative rounded-2xl overflow-hidden bg-[#0a0a0a]" style={{ aspectRatio: "4 / 3" }}>
              <div className="absolute left-[-8%] top-[-1%] w-[120%] h-[120%] flex items-center justify-center pointer-events-none">
                <div className="rotate-[131deg]">
                  <div className="bg-[#17bff9] blur-[50px] rounded-full w-[360px] h-[360px]" />
                </div>
              </div>
              <div className="absolute border-[2.5px] border-white/20 rounded-[5px] overflow-hidden left-[7%] top-[9%] w-[67%] h-[55%]">
                <Image src="/images/typid/dashboard.png" alt="Typid seller dashboard" fill className="object-cover" loading="lazy" sizes="(max-width: 768px) 90vw, 45vw" quality={75} />
              </div>
              <div className="absolute border-[2.5px] border-white/20 rounded-[5px] overflow-hidden left-[24%] top-[32%] w-[72%] h-[60%]">
                <Image src="/images/typid/himaya-event.png" alt="Himaya event page" fill className="object-cover object-top" loading="lazy" sizes="(max-width: 768px) 90vw, 45vw" quality={75} />
              </div>
            </div>
            {/* Attendee list + QR scanner */}
            <div className="relative rounded-2xl overflow-hidden bg-[#0a0a0a]" style={{ aspectRatio: "4 / 3" }}>
              <div className="absolute left-[-8%] top-[-1%] w-[120%] h-[120%] flex items-center justify-center pointer-events-none">
                <div className="rotate-[131deg]">
                  <div className="bg-[#17bff9] blur-[50px] rounded-full w-[360px] h-[360px]" />
                </div>
              </div>
              <div className="absolute border-2 border-white/20 rounded-[4px] overflow-hidden left-[9%] top-[18%] w-[80%] h-[62%]">
                <Image src="/images/typid/attendee-list.png" alt="Attendee management list" fill className="object-cover" loading="lazy" sizes="(max-width: 768px) 90vw, 45vw" quality={75} />
              </div>
              <div className="absolute border-2 border-white/20 rounded-[9px] overflow-hidden left-[70%] top-[36%] w-[22%] h-[56%]">
                <Image src="/images/typid/qr-scanner.png" alt="QR check-in scanner" fill className="object-cover" loading="lazy" sizes="(max-width: 768px) 30vw, 15vw" quality={75} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12"><div className="h-px bg-border" /></div>

      {/* Chapter 05: The System */}
      <section id="system" className="px-6 md:px-12 py-24 md:py-32 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-6">Chapter 05</p>
          <h2 className="text-3xl md:text-4xl font-medium leading-tight tracking-tight max-w-2xl mb-6">
            Every ticket tracked. Every peso accounted for.
          </h2>
          <p className="text-base text-foreground/70 max-w-2xl leading-relaxed mb-16">
            Venue staff scan once and get instant validation. The organizer dashboard shows everything in real-time: who bought, who paid, who checked in. No more cross-referencing spreadsheets at 2 AM after an event.
          </p>

          {/* Feature screenshots */}
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Event creation", desc: "Custom branding, ticket tiers, pricing, capacity limits" },
              { title: "Custom QR payments", desc: "Upload GCash or bank transfer QR, displayed in payment settings" },
              { title: "QR check-in", desc: "Unique QR per ticket, handles refunds and duplicates" },
              { title: "Organizer dashboard", desc: "Real-time buyer, payment, and check-in tracking" },
            ].map((feature) => (
              <div key={feature.title} className="rounded-2xl bg-[#0a0a0a] overflow-hidden">
                <div className="flex items-center justify-center" style={{ aspectRatio: "16 / 10" }}>
                </div>
                <div className="p-5">
                  <h3 className="text-sm font-medium mb-1 text-white">{feature.title}</h3>
                  <p className="text-sm text-white/70">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12"><div className="h-px bg-border" /></div>

      {/* Chapter 06: The Result */}
      <section id="result" className="px-6 md:px-12 py-24 md:py-32 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-6">Chapter 06</p>
          <h2 className="text-[clamp(2.5rem,7vw,5rem)] font-medium leading-[0.92] tracking-tight max-w-3xl mb-10">
            Zero discrepancy.
          </h2>
          <p className="text-base text-foreground/70 max-w-2xl leading-relaxed mb-16">
            The first event ran flawlessly. Every ticket sold matched the money collected. Every attendee was verified at the door. The church organizers, who&apos;d been dealing with discrepancies for years, had a clean financial record for the first time.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { stat: "₱0", label: "Money unaccounted for" },
              { stat: "2", label: "Paid events, zero discrepancy" },
              { stat: "14 days", label: "Decision to first live event" },
            ].map((item) => (
              <div key={item.label} className="p-6 rounded-2xl bg-[#0a0a0a]">
                <p className="text-2xl md:text-3xl font-medium mb-2 text-white">{item.stat}</p>
                <p className="text-sm text-white/70">{item.label}</p>
              </div>
            ))}
          </div>

          <p className="text-base text-foreground/70 max-w-2xl leading-relaxed">
            Since then we&apos;ve run a second paid event with the same result. We&apos;re now working toward PayMongo integration for automated payment processing, removing the last manual step in the flow.
          </p>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12"><div className="h-px bg-border" /></div>

      {/* Stack */}
      <section id="stack" className="px-6 md:px-12 py-24 md:py-32 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-6">Stack</p>
          <h2 className="text-3xl md:text-4xl font-medium leading-tight tracking-tight max-w-2xl mb-16">
            Technical decisions
          </h2>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-6">Finance App</p>
              <div className="space-y-4">
                {[
                  { name: "Flutter", role: "Cross-platform UI" },
                  { name: "Dart", role: "Application logic" },
                  { name: "Supabase", role: "Database, auth, real-time" },
                  { name: "Claude Code", role: "AI-assisted development" },
                ].map((tech) => (
                  <div key={tech.name} className="flex items-center justify-between pb-4 border-b border-border">
                    <span className="text-sm font-medium flex items-center gap-2"><TechIcon name={tech.name} />{tech.name}</span>
                    <span className="text-sm text-foreground/60">{tech.role}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-6">Events Platform</p>
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
                    <span className="text-sm text-foreground/60">{tech.role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12"><div className="h-px bg-border" /></div>

      {/* Reflection */}
      <section id="reflection" className="px-6 md:px-12 py-24 md:py-32 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-6">Chapter 07</p>
          <h2 className="text-3xl md:text-4xl font-medium leading-tight tracking-tight max-w-2xl mb-10">
            What I&apos;d tell myself in 2022.
          </h2>

          <div className="space-y-10 max-w-2xl">
            {[
              {
                num: "01",
                title: "\"Perfect for me\" isn't product.",
                body: "The finance app was genuinely useful for me. But building for yourself is brainstorming work, not product work. The real skill is finding problems other people will pay to solve.",
              },
              {
                num: "02",
                title: "AI doesn't replace thinking. It replaces typing.",
                body: "I never prompted \"build me a ticketing app.\" I built component by component, testing each piece, keeping context tight. The AI made me faster, not lazier.",
              },
              {
                num: "03",
                title: "Solve problems you can see.",
                body: "The church event discrepancy wasn't abstract market research. It was a real problem happening to real people I knew. That proximity made everything clearer.",
              },
            ].map((lesson) => (
              <div key={lesson.num} className="flex gap-6">
                <span className="text-[11px] text-foreground/50 mt-1 shrink-0 w-5">{lesson.num}</span>
                <div>
                  <h3 className="text-base font-medium mb-2">{lesson.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{lesson.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MoreProjects currentSlug="typid" />
    </CaseStudyLayout>
  );
}
