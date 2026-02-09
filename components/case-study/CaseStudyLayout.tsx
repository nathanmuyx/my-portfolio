"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { CaseStudyNav } from "./CaseStudySideNav";
import { Footer } from "@/components/sections/Footer";

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

export function CaseStudyLayout({
  sections,
  children,
}: CaseStudyLayoutProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const navRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  const handleScroll = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
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
      />

      {/* Content */}
      <div>{children}</div>

      <Footer />
    </div>
  );
}
