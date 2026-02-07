"use client";

import {
  SiFlutter,
  SiNextdotjs,
  SiSupabase,
  SiReact,
  SiExpo,
  SiAdobexd,
  SiTypescript,
  SiDart,
  SiFirebase,
  SiTrello,
  SiJira,
  SiWebflow,
  SiLoom,
  SiResend,
  SiClaude,
  SiGithub,
} from "react-icons/si";

function FigmaIcon({ className }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 38 57" fill="none" className={className}>
      <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
      <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
      <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
      <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
      <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
    </svg>
  );
}

function WeWebIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="20 20 220 160" fill="currentColor" className={className} style={style}>
      <path d="M67.17 99.46C48.52 99.46 32.96 113.72 31.35 132.3L28.05 170.32H67.53L73.69 99.45H67.18L67.17 99.46Z" />
      <path d="M219.09 28.6C197.91 28.6 181.32 46.82 183.29 67.91L192.88 170.33H232.36L219.09 28.6Z" />
      <path d="M150.79 59.63C125.97 59.63 103.74 74.97 94.93 98.17L67.53 170.33H107.01L130.21 109.74L153.41 170.33H192.89L150.8 59.63H150.79Z" />
    </svg>
  );
}

const iconMap: Record<string, { icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>; color: string }> = {
  "WeWeb": { icon: WeWebIcon, color: "#6251A2" },
  "Flutter": { icon: SiFlutter, color: "#54C5F8" },
  "Next.js": { icon: SiNextdotjs, color: "#000000" },
  "Next.js 14": { icon: SiNextdotjs, color: "#000000" },
  "React": { icon: SiReact, color: "#61DAFB" },
  "React / Next.js": { icon: SiReact, color: "#61DAFB" },
  "Supabase": { icon: SiSupabase, color: "#3ECF8E" },
  "Expo": { icon: SiExpo, color: "#000000" },
  "Figma": { icon: FigmaIcon, color: "#A259FF" },
  "Adobe XD": { icon: SiAdobexd, color: "#FF61F6" },
  "TypeScript": { icon: SiTypescript, color: "#3178C6" },
  "Dart": { icon: SiDart, color: "#0175C2" },
  "Firebase": { icon: SiFirebase, color: "#FFCA28" },
  "Trello": { icon: SiTrello, color: "#0052CC" },
  "Jira": { icon: SiJira, color: "#0052CC" },
  "Webflow": { icon: SiWebflow, color: "#4353FF" },
  "Loom": { icon: SiLoom, color: "#625DF5" },
  "Resend": { icon: SiResend, color: "#000000" },
  "Claude Code": { icon: SiClaude, color: "#D97757" },
  "GitHub": { icon: SiGithub, color: "#181717" },
};

export function TechIcon({ name, className = "w-4 h-4" }: { name: string; className?: string }) {
  const entry = iconMap[name];
  if (!entry) return null;
  const Icon = entry.icon;
  return <Icon className={className} style={{ color: entry.color }} />;
}
