"use client";

import Link from "next/link";
import { ArrowLeft, Check, X } from "@phosphor-icons/react/dist/ssr";

const brandColors = [
  { name: "Typid", hex: "#00C1DB", usage: "Cyan - Finance & Events" },
  { name: "Retriever PH", hex: "#E85D3B", usage: "Orange-Red - Food/Delivery" },
  { name: "GoTrabaho", hex: "#F59E0B", usage: "Amber - Jobs/Services" },
  { name: "Tactiv Studios", hex: "#8b5cf6", usage: "Purple - Agency/Creative" },
  { name: "Blazesoft", hex: "#FF6B35", usage: "Orange - Gaming/Casino" },
  { name: "Strategic Visionz", hex: "#1a1a1a", usage: "Dark - Enterprise" },
];

const portfolioChecklist = [
  { item: "Clear value proposition", status: "done", note: "Design Engineer - I design it. Then I build it." },
  { item: "Role clarity", status: "done", note: "Lead with current position and skills" },
  { item: "Project case studies", status: "done", note: "6 projects with context and outcomes" },
  { item: "Brand consistency", status: "done", note: "Each project has its own identity" },
  { item: "Contact information", status: "done", note: "Email and LinkedIn accessible" },
  { item: "Mobile responsive", status: "done", note: "Works on all devices" },
  { item: "Process in case studies", status: "done", note: "GoTrabaho (5-step), Retriever (problem→solution)" },
  { item: "Shipped products", status: "done", note: "Typid Finance on Play Store & App Store" },
  { item: "Real project screenshots", status: "missing", note: "Add actual UI screenshots to case studies" },
  { item: "Testimonials", status: "missing", note: "Client/colleague quotes add credibility" },
  { item: "Resume/CV download", status: "missing", note: "PDF download for recruiters" },
  { item: "About page", status: "missing", note: "Personal story and background" },
  { item: "Services page", status: "missing", note: "For client work - what you offer" },
];

const targetAudience = [
  {
    type: "HR/Recruiters",
    needs: ["Quick overview of skills", "Years of experience", "Project variety", "Contact info"],
    priority: "High",
  },
  {
    type: "Design Partners",
    needs: ["Visual quality", "Design thinking", "Collaboration style", "Complementary skills"],
    priority: "Medium",
  },
  {
    type: "Clients",
    needs: ["Past work results", "Industry experience", "Process clarity", "Pricing/availability"],
    priority: "Medium",
  },
  {
    type: "Developers",
    needs: ["Technical understanding", "Handoff quality", "Design system thinking"],
    priority: "Low",
  },
];

export default function BrandPage() {
  const doneCount = portfolioChecklist.filter(i => i.status === "done").length;
  const totalCount = portfolioChecklist.length;

  return (
    <div className="bg-white text-foreground min-h-screen">
      {/* Header */}
      <header className="px-6 md:px-12 py-6 border-b border-gray-200">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors">
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
          <span className="text-sm text-foreground/40">Brand Guidelines</span>
        </div>
      </header>

      <main className="px-6 md:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Brand & Portfolio Audit</h1>
            <p className="text-lg text-foreground/50 max-w-2xl">
              Reference document for maintaining consistency and identifying gaps in the portfolio to land careers and clients.
            </p>
          </div>

          {/* Progress */}
          <div className="mb-16 p-6 rounded-2xl bg-gray-50 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium">Portfolio Completeness</h2>
              <span className="text-2xl font-bold">{Math.round((doneCount / totalCount) * 100)}%</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-500 rounded-full transition-all"
                style={{ width: `${(doneCount / totalCount) * 100}%` }}
              />
            </div>
            <p className="text-sm text-foreground/40 mt-2">{doneCount} of {totalCount} items complete</p>
          </div>

          {/* Brand Colors */}
          <section className="mb-16">
            <h2 className="text-2xl font-medium mb-8">Project Brand Colors</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {brandColors.map((color) => (
                <div key={color.name} className="p-4 rounded-xl border border-gray-200 flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex-shrink-0"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div>
                    <p className="font-medium">{color.name}</p>
                    <p className="text-xs text-foreground/40 font-mono">{color.hex}</p>
                    <p className="text-xs text-foreground/50 mt-1">{color.usage}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Checklist */}
          <section className="mb-16">
            <h2 className="text-2xl font-medium mb-8">Portfolio Checklist</h2>
            <div className="space-y-3">
              {portfolioChecklist.map((item) => (
                <div
                  key={item.item}
                  className={`p-4 rounded-xl border flex items-start gap-4 ${
                    item.status === "done"
                      ? "bg-green-50 border-green-200"
                      : "bg-amber-50 border-amber-200"
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                    item.status === "done" ? "bg-green-500" : "bg-amber-500"
                  }`}>
                    {item.status === "done"
                      ? <Check size={14} className="text-white" />
                      : <X size={14} className="text-white" />
                    }
                  </div>
                  <div>
                    <p className="font-medium">{item.item}</p>
                    <p className="text-sm text-foreground/50">{item.note}</p>
                  </div>
                  <span className={`ml-auto text-xs px-2 py-1 rounded-full ${
                    item.status === "done"
                      ? "bg-green-200 text-green-800"
                      : "bg-amber-200 text-amber-800"
                  }`}>
                    {item.status === "done" ? "Done" : "Missing"}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Target Audience */}
          <section className="mb-16">
            <h2 className="text-2xl font-medium mb-8">Target Audience Needs</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {targetAudience.map((audience) => (
                <div key={audience.type} className="p-6 rounded-2xl border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium">{audience.type}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      audience.priority === "High"
                        ? "bg-red-100 text-red-700"
                        : audience.priority === "Medium"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-gray-100 text-gray-700"
                    }`}>
                      {audience.priority} Priority
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {audience.needs.map((need) => (
                      <li key={need} className="text-sm text-foreground/60 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-foreground/30" />
                        {need}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Typography */}
          <section className="mb-16">
            <h2 className="text-2xl font-medium mb-8">Typography Scale</h2>
            <div className="space-y-6 p-6 rounded-2xl bg-gray-50 border border-gray-200">
              <div>
                <p className="text-xs text-foreground/40 mb-2">Hero Title</p>
                <p className="text-[clamp(3rem,10vw,6rem)] font-bold leading-[0.85]">Aa</p>
              </div>
              <div>
                <p className="text-xs text-foreground/40 mb-2">Section Title</p>
                <p className="text-3xl md:text-4xl font-medium">Section Heading</p>
              </div>
              <div>
                <p className="text-xs text-foreground/40 mb-2">Body Large</p>
                <p className="text-lg text-foreground/60">Body text for introductions and key statements.</p>
              </div>
              <div>
                <p className="text-xs text-foreground/40 mb-2">Body</p>
                <p className="text-sm text-foreground/50">Regular body text for descriptions and details.</p>
              </div>
              <div>
                <p className="text-xs text-foreground/40 mb-2">Label</p>
                <p className="text-xs uppercase tracking-wider text-foreground/40">SECTION LABEL</p>
              </div>
            </div>
          </section>

          {/* Design Principles */}
          <section>
            <h2 className="text-2xl font-medium mb-8">Design Principles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Minimal", desc: "Less is more. Remove everything that doesn't serve the message." },
                { title: "Intentional", desc: "Every color, space, and element has a purpose." },
                { title: "Fast", desc: "Performance matters. No heavy animations or unnecessary bloat." },
              ].map((principle) => (
                <div key={principle.title} className="p-6 rounded-2xl bg-[#0a0a0a] text-white">
                  <h3 className="text-lg font-medium mb-2">{principle.title}</h3>
                  <p className="text-sm text-white/60">{principle.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-foreground/40">Internal reference document</p>
          <Link href="/" className="text-sm text-foreground/40 hover:text-foreground transition-colors">
            Back to Portfolio
          </Link>
        </div>
      </footer>
    </div>
  );
}
