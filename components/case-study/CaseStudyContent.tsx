"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/data/case-studies";

interface CaseStudyContentProps {
  caseStudy: CaseStudy;
}

// Subtle accent colors - used sparingly
const projectAccents: Record<string, string> = {
  "typid-events": "#f59e0b",
  "strategic-visionz": "#3b82f6",
  "blazesoft": "#ec4899",
  "retriever": "#06b6d4",
  "gotrabaho": "#10b981",
  "tactiv-studios": "#8b5cf6",
};

export function CaseStudyContent({ caseStudy }: CaseStudyContentProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  const accent = projectAccents[caseStudy.slug] || "#000";

  return (
    <div className="bg-white">
      {/* Fixed Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 bg-white/80 backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <Link href="/" className="text-sm font-medium">
            Nathaniel Muyco
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        </div>
      </nav>

      {/* Hero - Full Viewport, Black & White */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="min-h-screen flex flex-col justify-center items-center text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          <p className="text-sm text-neutral-400 mb-6 tracking-wide">
            {caseStudy.tags.join(" · ")}
          </p>

          <h1 className="text-[clamp(3rem,12vw,8rem)] font-bold leading-[0.9] mb-6 text-neutral-900">
            {caseStudy.title}
          </h1>

          <p className="text-xl md:text-2xl text-neutral-500 max-w-2xl mx-auto">
            {caseStudy.subtitle}
          </p>
        </motion.div>

        {/* Scroll indicator with accent color */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-12"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-neutral-400">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-[1px] h-8"
              style={{ backgroundColor: accent }}
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Hero Image - Clean */}
      <section className="relative h-[150vh]">
        <div className="sticky top-0 h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-6xl aspect-video bg-neutral-100 rounded-[24px] flex items-center justify-center"
          >
            <p className="text-neutral-300 text-sm">Product Hero</p>
          </motion.div>
        </div>
      </section>

      {/* Overview - Large Black Text */}
      <section className="py-32 md:py-48 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-4xl lg:text-5xl font-medium leading-snug text-neutral-900"
          >
            {caseStudy.overview}
          </motion.p>
        </div>
      </section>

      {/* Role & Details - Minimal */}
      <section className="py-16 px-6 md:px-12 border-y border-neutral-100">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Role", value: caseStudy.role },
            { label: "Timeline", value: caseStudy.timeline },
            { label: "Year", value: caseStudy.year },
            { label: "Tools", value: caseStudy.tools.join(", ") },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <p className="text-xs text-neutral-400 mb-2">{item.label}</p>
              <p className="text-sm text-neutral-900">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Problem - Cinematic */}
      <section className="py-32 md:py-48 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            {/* Accent color used intentionally for section label */}
            <span className="text-sm font-medium" style={{ color: accent }}>
              The Challenge
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight max-w-4xl text-neutral-900"
          >
            {caseStudy.problem.description}
          </motion.h2>
        </div>
      </section>

      {/* Problem Image */}
      <section className="px-6 md:px-12 pb-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto aspect-[21/9] bg-neutral-100 rounded-[24px] flex items-center justify-center"
        >
          <p className="text-neutral-300 text-sm">Context</p>
        </motion.div>
      </section>

      {/* Solution */}
      <section className="py-32 md:py-48 px-6 md:px-12 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-sm font-medium" style={{ color: accent }}>
              The Solution
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-medium leading-relaxed max-w-3xl mb-16 text-neutral-900"
          >
            {caseStudy.solution.description}
          </motion.p>

          {caseStudy.solution.points && (
            <div className="grid md:grid-cols-2 gap-4">
              {caseStudy.solution.points.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex gap-4 p-6 bg-white rounded-2xl"
                >
                  {/* Accent color for numbers */}
                  <span className="text-lg font-bold" style={{ color: accent }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-neutral-600">{point}</p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Solution Images */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {[1, 2].map((n) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: n * 0.1 }}
              className="aspect-[4/3] bg-neutral-100 rounded-[24px] flex items-center justify-center"
            >
              <p className="text-neutral-300 text-sm">Screenshot {n}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      {caseStudy.process && (
        <section className="py-32 md:py-48 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <span className="text-sm font-medium" style={{ color: accent }}>
                {caseStudy.process.title}
              </span>
            </motion.div>

            <div className="space-y-0">
              {caseStudy.process.steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="group grid md:grid-cols-[100px_1fr] gap-8 py-12 border-b border-neutral-100"
                >
                  {/* Accent on hover */}
                  <span
                    className="text-4xl md:text-5xl font-bold text-neutral-200 group-hover:text-current transition-colors"
                    style={{ "--hover-color": accent } as React.CSSProperties}
                  >
                    <span className="group-hover:hidden">{step.number}</span>
                    <span className="hidden group-hover:inline" style={{ color: accent }}>
                      {step.number}
                    </span>
                  </span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-medium mb-3 text-neutral-900">
                      {step.title}
                    </h3>
                    <p className="text-neutral-500 max-w-xl">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Full Width Image */}
      <section className="px-6 md:px-12 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto aspect-[21/9] bg-neutral-100 rounded-[32px] flex items-center justify-center"
        >
          <p className="text-neutral-300 text-sm">Full Product View</p>
        </motion.div>
      </section>

      {/* Outcome - Big Numbers with Accent */}
      <section className="py-32 md:py-48 px-6 md:px-12 bg-neutral-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="text-sm font-medium" style={{ color: accent }}>
              The Outcome
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto mb-20"
          >
            {caseStudy.outcome.description}
          </motion.p>

          {caseStudy.outcome.metrics && (
            <div className="grid grid-cols-3 gap-8">
              {caseStudy.outcome.metrics.map((metric, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15 }}
                >
                  {/* Accent color for key metrics */}
                  <p
                    className="text-4xl md:text-6xl lg:text-7xl font-bold mb-3"
                    style={{ color: accent }}
                  >
                    {metric.value}
                  </p>
                  <p className="text-sm text-neutral-500">{metric.label}</p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Next Project */}
      {caseStudy.nextProject && (
        <section className="py-32 px-6 md:px-12 border-t border-neutral-100">
          <Link
            href={`/work/${caseStudy.nextProject.slug}`}
            className="group block max-w-6xl mx-auto"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div>
                <p className="text-sm text-neutral-400 mb-4">Next Project</p>
                <h3 className="text-3xl md:text-5xl font-bold text-neutral-900 group-hover:text-neutral-500 transition-colors">
                  {caseStudy.nextProject.title}
                </h3>
              </div>
              <ArrowUpRight className="w-12 h-12 text-neutral-200 group-hover:text-neutral-900 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all" />
            </div>
          </Link>
        </section>
      )}

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 border-t border-neutral-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-neutral-400">
            © {new Date().getFullYear()} Nathaniel Muyco
          </p>
          <div className="flex gap-8">
            <a
              href="https://linkedin.com/in/nathanielmuyco"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-400 hover:text-neutral-900 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:nathanmuyx@gmail.com"
              className="text-sm text-neutral-400 hover:text-neutral-900 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
