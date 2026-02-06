"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { CaseStudyNav } from "./CaseStudySideNav";

interface Section {
  id: string;
  label: string;
}

interface CaseStudyLayoutProps {
  projectTitle: string;
  sections: Section[];
  accentColor?: string;
  children: React.ReactNode;
}

function isDarkBackground(el: Element | null): boolean {
  while (el && el !== document.documentElement) {
    const bg = getComputedStyle(el).backgroundColor;
    if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") {
      const match = bg.match(/\d+/g);
      if (match) {
        const [r, g, b] = match.map(Number);
        // Luminance check — below 80 is dark
        return r * 0.299 + g * 0.587 + b * 0.114 < 80;
      }
    }
    el = el.parentElement;
  }
  return false;
}

export function CaseStudyLayout({
  sections,
  children,
}: CaseStudyLayoutProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [overDark, setOverDark] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    setScrollProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0);

    // Sample background behind the progress bar
    if (navRef.current) {
      const rect = navRef.current.getBoundingClientRect();
      const sampleY = rect.top + rect.height / 2; // center of the pill
      const sampleX = rect.left + rect.width / 2;

      // Temporarily hide nav so elementFromPoint hits the content behind
      navRef.current.style.pointerEvents = "none";
      navRef.current.style.visibility = "hidden";
      const behind = document.elementFromPoint(sampleX, sampleY);
      navRef.current.style.visibility = "";
      navRef.current.style.pointerEvents = "";

      setOverDark(isDarkBackground(behind));
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Active section tracking
  useEffect(() => {
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-10% 0px -60% 0px",
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="bg-white text-foreground min-h-screen">
      <CaseStudyNav
        ref={navRef}
        sections={sections}
        activeId={activeId}
        scrollProgress={scrollProgress}
        overDark={overDark}
      />

      {/* Content */}
      <div>{children}</div>
    </div>
  );
}
