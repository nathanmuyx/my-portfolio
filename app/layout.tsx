import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nathaniel Muyco — Design Engineer",
  description: "I design decisions, not just interfaces. Product designer who bridges strategy and pixels.",
  keywords: ["design engineer", "product designer", "full-stack developer", "Davao City", "Flutter", "React", "design systems"],
  authors: [{ name: "Nathaniel Muyco" }],
  openGraph: {
    title: "Nathaniel Muyco — Design Engineer",
    description: "I design decisions, not just interfaces.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nathaniel Muyco — Design Engineer",
    description: "I design decisions, not just interfaces.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
