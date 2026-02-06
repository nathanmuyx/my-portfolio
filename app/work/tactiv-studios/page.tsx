"use client";

import Image from "next/image";
import { CaseStudyLayout } from "@/components/case-study/CaseStudyLayout";
import { MoreProjects } from "@/components/case-study/MoreProjects";
import { TechIcon } from "@/components/case-study/TechIcon";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "screenshots", label: "Screenshots" },
  { id: "growth", label: "Growth" },
  { id: "selected-work", label: "Selected Work" },
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
            {["Intern → Lead", "PM + Design", "6+ Products", "2020 - 2023"].map((tag) => (
              <span key={tag} className="text-[11px] px-3 py-1.5 rounded-full bg-cream text-foreground/60">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-medium leading-[0.92] tracking-tight max-w-3xl mb-8">
            Three years. Intern to lead. 6+ products shipped.
          </h1>

          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl leading-relaxed">
            At Tactiv Studios I wore every hat: design, project management, QA, and some frontend. Agency pace, enterprise clients, constant context-switching between industries.
          </p>
        </div>
      </section>

      {/* Screenshots */}
      <section id="screenshots" className="px-6 md:px-12 pb-16 md:pb-20 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden bg-[#0a0a0a]" style={{ aspectRatio: "4 / 3" }}>
              <div className="absolute left-[6%] top-[8%] w-[88%] rounded-lg overflow-hidden" style={{ aspectRatio: "214 / 133" }}>
                <Image src="/images/tactiv-studios/screenshot-1.png" alt="Tactiv Studios dashboard" fill className="object-cover" priority sizes="(max-width: 768px) 90vw, 45vw" />
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden bg-[#0a0a0a]" style={{ aspectRatio: "4 / 3" }}>
              <div className="absolute left-[6%] top-[8%] w-[88%] rounded-lg overflow-hidden" style={{ aspectRatio: "258 / 159" }}>
                <Image src="/images/tactiv-studios/screenshot-2.png" alt="Tactiv Studios application" fill className="object-cover" priority sizes="(max-width: 768px) 90vw, 45vw" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12"><div className="h-px bg-border" /></div>

      {/* Growth + Products */}
      <section id="growth" className="px-6 md:px-12 py-20 md:py-24 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-6">Growth</p>
              <div className="space-y-6">
                {[
                  { year: "2020", role: "Intern", desc: "Design fundamentals, client communication, handoff processes." },
                  { year: "2021", role: "Junior Designer", desc: "Took ownership of screens. Started contributing to design systems." },
                  { year: "2022", role: "Designer + PM", desc: "Managed tickets, tested implementations, bridged design and dev." },
                  { year: "2023", role: "Lead", desc: "Led design direction, mentored juniors, established processes." },
                ].map((item) => (
                  <div key={item.year} className="flex gap-4">
                    <span className="text-sm text-foreground/50 w-10 flex-shrink-0">{item.year}</span>
                    <div>
                      <p className="text-sm font-medium">{item.role}</p>
                      <p className="text-sm text-foreground/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-6">Products shipped</p>
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
                    <span className="text-[11px] text-foreground/60">{project.type}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-4">Tools</p>
                <div className="flex flex-wrap gap-2">
                  {["Figma", "Adobe XD", "Trello", "Jira", "Webflow", "Loom"].map((tool) => (
                    <span key={tool} className="text-[11px] px-3 py-1.5 rounded-full bg-cream text-foreground/60 inline-flex items-center gap-1.5"><TechIcon name={tool} className="w-3 h-3" />{tool}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12"><div className="h-px bg-border" /></div>

      {/* Selected Work */}
      <section id="selected-work" className="px-6 md:px-12 py-20 md:py-24 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[11px] uppercase tracking-wider text-foreground/60 mb-6">Selected Work</p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              "HRMS dashboard",
              "Wealth management screens",
              "Emergency monitoring UI",
            ].map((label) => (
              <div key={label} className="rounded-2xl bg-[#0a0a0a] flex items-center justify-center" style={{ aspectRatio: "4 / 3" }}>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MoreProjects currentSlug="tactiv-studios" />
    </CaseStudyLayout>
  );
}
