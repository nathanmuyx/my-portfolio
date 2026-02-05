"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    slug: "typid-events",
    title: "Typid Events",
    description: "End-to-end event platform I founded. Design, code, ship.",
    tags: ["Founder", "Product"],
    year: "2024",
    featured: true,
  },
  {
    slug: "retriever",
    title: "Retriever PH",
    description: "Rebuilt a broken design system from scratch.",
    tags: ["Redesign", "Mobile"],
    year: "2023",
  },
  {
    slug: "gotrabaho",
    title: "GoTrabaho",
    description: "Job platform built end-to-end in Flutter.",
    tags: ["Full Stack", "Flutter"],
    year: "2023",
  },
  {
    slug: "tactiv-studios",
    title: "Tactiv Studios",
    description: "3 years. 6+ products. Intern to Lead.",
    tags: ["Agency", "Multiple"],
    year: "2020–23",
  },
];

export function SelectedWork() {
  return (
    <section id="work" className="py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-sm text-muted-foreground">Selected Work</h2>
      </motion.div>

      <div className="space-y-1">
        {projects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Link
              href={`/work/${project.slug}`}
              className="group block py-8 border-t border-border hover:bg-cream/50 -mx-6 px-6 md:-mx-12 md:px-12 transition-colors"
            >
              <div className="grid md:grid-cols-12 gap-4 md:gap-8 items-center">
                <div className="md:col-span-1">
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                </div>

                <div className="md:col-span-4">
                  <h3 className="text-2xl md:text-3xl font-medium group-hover:text-muted-foreground transition-colors">
                    {project.title}
                  </h3>
                </div>

                <div className="md:col-span-4">
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                </div>

                <div className="md:col-span-2">
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-1 flex justify-end">
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
