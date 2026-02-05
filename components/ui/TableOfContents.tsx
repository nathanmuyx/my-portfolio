"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";

interface Section {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  sections: Section[];
  accentColor?: string;
}

export function TableOfContents({ sections, accentColor = "#000" }: TableOfContentsProps) {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || "");

  useEffect(() => {
    const elements = sections
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          const topEntry = visibleEntries.reduce((prev, curr) => {
            return prev.boundingClientRect.top < curr.boundingClientRect.top ? prev : curr;
          });
          setActiveSection(topEntry.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block animate-fade-in">
      <div className="flex flex-col gap-1">
        {/* Back link */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xs text-foreground/40 hover:text-foreground transition-colors mb-6 group"
        >
          <svg
            className="w-3 h-3 transition-transform group-hover:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </Link>

        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className="group flex items-center gap-3 py-1.5 text-right"
          >
            <span
              className={`text-[11px] uppercase tracking-wider transition-colors duration-200 ${
                activeSection === id
                  ? "text-foreground"
                  : "text-foreground/30 group-hover:text-foreground/60"
              }`}
            >
              {label}
            </span>
            <span
              className={`h-[2px] transition-all duration-200 ${
                activeSection === id ? "w-6" : "w-2 group-hover:w-4"
              }`}
              style={{
                backgroundColor: activeSection === id ? accentColor : "rgba(0,0,0,0.2)",
              }}
            />
          </button>
        ))}
      </div>
    </nav>
  );
}
