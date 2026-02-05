"use client";

import Image from "next/image";
import Link from "next/link";

export default function TactivStudiosPage() {
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
          <span className="text-sm text-foreground/40">Tactiv Studios</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-16 md:pb-20 px-6 md:px-12">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-wrap gap-2 mb-8">
            {["Intern → Lead", "PM + Design", "6+ Products", "2020 — 2023"].map((tag) => (
              <span key={tag} className="text-[11px] px-3 py-1.5 rounded-full bg-cream text-foreground/60">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-medium leading-[0.92] tracking-tight max-w-3xl mb-8">
            Three years. Intern to lead. 6+ products shipped.
          </h1>

          <p className="text-lg md:text-xl text-foreground/50 max-w-2xl leading-relaxed">
            At Tactiv Studios I wore every hat — design, project management, QA, and some frontend. Agency pace, enterprise clients, constant context-switching between industries.
          </p>
        </div>
      </section>

      {/* Screenshots */}
      <section className="px-6 md:px-12 pb-16 md:pb-20">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden bg-[#0a0a0a]" style={{ aspectRatio: "4 / 3" }}>
              <div className="absolute left-[6%] top-[8%] w-[88%] rounded-lg overflow-hidden" style={{ aspectRatio: "214 / 133" }}>
                <Image src="/images/tactiv-studios/screenshot-1.png" alt="Tactiv Studios dashboard" fill className="object-cover" />
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden bg-[#0a0a0a]" style={{ aspectRatio: "4 / 3" }}>
              <div className="absolute left-[6%] top-[8%] w-[88%] rounded-lg overflow-hidden" style={{ aspectRatio: "258 / 159" }}>
                <Image src="/images/tactiv-studios/screenshot-2.png" alt="Tactiv Studios application" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12"><div className="h-px bg-border" /></div>

      {/* Growth + Products */}
      <section className="px-6 md:px-12 py-20 md:py-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-foreground/40 mb-6">Growth</p>
              <div className="space-y-6">
                {[
                  { year: "2020", role: "Intern", desc: "Design fundamentals, client communication, handoff processes." },
                  { year: "2021", role: "Junior Designer", desc: "Took ownership of screens. Started contributing to design systems." },
                  { year: "2022", role: "Designer + PM", desc: "Managed tickets, tested implementations, bridged design and dev." },
                  { year: "2023", role: "Lead", desc: "Led design direction, mentored juniors, established processes." },
                ].map((item) => (
                  <div key={item.year} className="flex gap-4">
                    <span className="text-sm text-foreground/30 w-10 flex-shrink-0">{item.year}</span>
                    <div>
                      <p className="text-sm font-medium">{item.role}</p>
                      <p className="text-sm text-foreground/50">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-foreground/40 mb-6">Products shipped</p>
              <div className="space-y-4">
                {[
                  { name: "Home Loan Application System", type: "Web App, Fintech" },
                  { name: "HRMS", type: "Enterprise SaaS" },
                  { name: "Emergency Monitoring System", type: "Dashboard, Government" },
                  { name: "Fitness iOS Application", type: "Mobile, Health" },
                  { name: "Wealth Management Dashboards", type: "Fintech, Dashboard" },
                  { name: "Additional client projects", type: "NDA" },
                ].map((project) => (
                  <div key={project.name} className="flex items-baseline justify-between pb-4 border-b border-border">
                    <span className="text-sm font-medium">{project.name}</span>
                    <span className="text-[11px] text-foreground/40">{project.type}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <p className="text-[11px] uppercase tracking-wider text-foreground/40 mb-4">Tools</p>
                <div className="flex flex-wrap gap-2">
                  {["Figma", "Adobe XD", "Trello", "Jira", "Webflow", "Loom"].map((tool) => (
                    <span key={tool} className="text-[11px] px-3 py-1.5 rounded-full bg-cream text-foreground/60">{tool}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12"><div className="h-px bg-border" /></div>

      {/* Image Placeholders */}
      <section className="px-6 md:px-12 py-20 md:py-24">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] uppercase tracking-wider text-foreground/40 mb-6">Selected Work</p>
          {/* TODO: Replace placeholders with product screenshots, design system samples, or dashboard views */}
          <div className="grid md:grid-cols-3 gap-4">
            {[
              "HRMS dashboard",
              "Wealth management screens",
              "Emergency monitoring UI",
            ].map((label) => (
              <div key={label} className="rounded-2xl bg-cream/50 border border-border flex items-center justify-center" style={{ aspectRatio: "4 / 3" }}>
                <p className="text-sm text-foreground/30 px-6 text-center">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="px-6 md:px-12 py-20 border-t border-border">
        <Link href="/work/typid" className="group block max-w-[1100px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-foreground/40 mb-3">Next Project</p>
              <h3 className="text-3xl md:text-4xl font-medium group-hover:text-foreground/60 transition-colors">Typid</h3>
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
