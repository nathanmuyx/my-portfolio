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
  SiFigma,
} from "react-icons/si";

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
  "Figma": { icon: SiFigma, color: "#A259FF" },
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
};

export function TechIcon({ name, className = "w-4 h-4" }: { name: string; className?: string }) {
  const entry = iconMap[name];
  if (!entry) return null;
  const Icon = entry.icon;
  return <Icon className={className} style={{ color: entry.color }} />;
}
