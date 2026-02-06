"use client";

import { forwardRef } from "react";
import Link from "next/link";

interface Section {
  id: string;
  label: string;
}

interface CaseStudyNavProps {
  sections: Section[];
  activeId: string;
  scrollProgress: number;
  overDark: boolean;
}

export const CaseStudyNav = forwardRef<HTMLDivElement, CaseStudyNavProps>(
  function CaseStudyNav({ sections, activeId, scrollProgress, overDark }, ref) {
    // Colors flip based on background
    const pillBg = overDark ? "#ffffff" : "#0a0a0a";
    const logoFill = overDark ? "#0a0a0a" : "#ffffff";
    const activeClass = overDark
      ? "text-white bg-[#0a0a0a]"
      : "text-white bg-white/15";
    const inactiveClass = overDark
      ? "text-[#0a0a0a]/40 hover:text-[#0a0a0a]/70 hover:bg-black/5"
      : "text-white/40 hover:text-white/70 hover:bg-white/5";
    const mobileLabelClass = overDark
      ? "text-[#0a0a0a]/60"
      : "text-white/60";
    const strokeColor = overDark ? "#ffffff" : "#0a0a0a";

    return (
      <div ref={ref} className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
        <div className="flex flex-col items-center">
          {/* Pill navbar */}
          <div
            className="flex items-center gap-1 rounded-full px-2 py-2 transition-colors duration-300"
            style={{ backgroundColor: pillBg }}
          >
            {/* Logo */}
            <Link href="/" className="px-3 shrink-0">
              <svg width="14" height="19" viewBox="0 0 23 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="4" height="31" rx="2" fill={logoFill} />
                <rect x="18" y="7.82532" width="4.26835" height="18.4962" rx="2.13417" fill={logoFill} />
                <rect x="6" y="5" width="2" height="16" rx="1" fill={logoFill} />
                <rect x="10" y="9" width="2" height="14" rx="1" fill={logoFill} />
                <rect x="14" y="14" width="2" height="8" rx="1" fill={logoFill} />
              </svg>
            </Link>

            {/* Section links — hidden on small screens, show on md+ */}
            <div className="hidden md:flex items-center gap-0.5">
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(section.id)?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    className={`text-[12px] px-3 py-1.5 rounded-full transition-all whitespace-nowrap ${
                      isActive ? activeClass : inactiveClass
                    }`}
                  >
                    {section.label}
                  </a>
                );
              })}
            </div>

            {/* Active section label — visible only on small screens */}
            <span className={`md:hidden text-[12px] px-3 py-1.5 whitespace-nowrap ${mobileLabelClass}`}>
              {sections.find((s) => s.id === activeId)?.label || ""}
            </span>
          </div>

          {/* Progress stroke */}
          <div
            className="w-full mt-2 h-[2px] rounded-full overflow-hidden"
            style={{ maxWidth: "calc(100% - 16px)" }}
          >
            <div
              className="h-full rounded-full transition-all duration-300 ease-out"
              style={{
                width: `${scrollProgress * 100}%`,
                backgroundColor: strokeColor,
              }}
            />
          </div>
        </div>
      </div>
    );
  }
);
