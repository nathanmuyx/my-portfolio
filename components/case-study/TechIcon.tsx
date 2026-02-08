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
  SiTrello,
  SiJira,
  SiWebflow,
  SiLoom,
  SiResend,
  SiClaude,
  SiGithub,
  SiAsana,
  SiSlack,
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

function FirebaseIcon({ className }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 256 351" fill="none" className={className}>
      <path d="M0 282.998L2.123 280.026 102.567 89.512 102.567 88.336 58.434 2.102C55.928 -2.684 48.548 -0.316 49.142 5.06L0 282.998Z" fill="#FFC24A"/>
      <path d="M1.253 280.432L1.854 279.2 102.21 89.932 58.13 2.386C55.725 -2.192 48.793 -0.058 49.352 4.87L1.253 280.432Z" fill="#FFA712"/>
      <path d="M135.005 150.38L167.318 117.169 135.005 48.478C132.999 44.043 126.847 44.134 124.963 48.628L108.121 86.214 107.343 88.878 135.005 150.38Z" fill="#F4BD62"/>
      <path d="M134.417 149.076L166.283 117.169 134.417 49.272C132.511 45.037 127.39 45.037 125.484 49.272L108.793 86.076 107.636 89.614 134.417 149.076Z" fill="#FFA50E"/>
      <path d="M0 282.998L0.962 282.03 4.045 279.326 132.792 153.284 134.417 148.724 107.636 89.614 0 282.998Z" fill="#F6820C"/>
      <path d="M139.121 347.551L255.395 282.703 222.191 78.208C221.153 71.97 213.303 69.674 209.247 74.454L0 282.998 115.608 347.37C122.914 351.556 131.726 351.592 139.121 347.551Z" fill="#FDE068"/>
      <path d="M254.354 282.16L221.402 79.218C220.364 73.16 213.014 70.864 209.048 75.374L0.962 282.03 116.19 346.828C123.316 350.924 131.948 350.96 139.164 347.01L254.354 282.16Z" fill="#FCCA3F"/>
      <path d="M139.121 345.565C131.726 349.606 122.914 349.57 115.608 345.384L0.931 281.08 0 282.998 115.608 347.37C122.914 351.556 131.726 351.592 139.121 347.551L255.395 282.703 255.111 280.876 139.121 345.565Z" fill="#EEAB37"/>
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
  "Firebase": { icon: FirebaseIcon, color: "#FFCA28" },
  "Trello": { icon: SiTrello, color: "#0052CC" },
  "Jira": { icon: SiJira, color: "#0052CC" },
  "Webflow": { icon: SiWebflow, color: "#4353FF" },
  "Loom": { icon: SiLoom, color: "#625DF5" },
  "Resend": { icon: SiResend, color: "#000000" },
  "Claude Code": { icon: SiClaude, color: "#D97757" },
  "GitHub": { icon: SiGithub, color: "#181717" },
  "Asana": { icon: SiAsana, color: "#F06A6A" },
  "Slack": { icon: SiSlack, color: "#4A154B" },
};

export function TechIcon({ name, className = "w-4 h-4" }: { name: string; className?: string }) {
  const entry = iconMap[name];
  if (!entry) return null;
  const Icon = entry.icon;
  return <Icon className={className} style={{ color: entry.color }} />;
}
