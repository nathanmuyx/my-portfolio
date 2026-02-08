export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  year: string;
  timeline: string;
  overview: string;
  problem: {
    title: string;
    description: string;
  };
  solution: {
    title: string;
    description: string;
    points?: string[];
  };
  process?: {
    title: string;
    steps: {
      number: string;
      title: string;
      description: string;
    }[];
  };
  outcome: {
    title: string;
    description: string;
    metrics?: {
      value: string;
      label: string;
    }[];
  };
  tools: string[];
  nextProject?: {
    slug: string;
    title: string;
  };
}

export const caseStudies: Record<string, CaseStudy> = {
  "strategic-visionz": {
    slug: "strategic-visionz",
    title: "Strategic Visionz",
    subtitle: "Enterprise design engineering",
    tags: ["CURRENT ROLE", "ENTERPRISE"],
    year: "2024 — Present",
    timeline: "Ongoing",
    overview: "Leading product design and frontend development for enterprise clients at Strategic Visionz. Building design systems and shipping production-ready code that scales.",
    problem: {
      title: "The Challenge",
      description: "Enterprise clients need design solutions that balance innovation with stability. Complex requirements, multiple stakeholders, and strict technical constraints demand a designer who can also think like an engineer.",
    },
    solution: {
      title: "The Approach",
      description: "I bridge the gap between design and development, delivering solutions that are both beautiful and buildable:",
      points: [
        "Design system architecture for enterprise scale",
        "Production-ready component development",
        "Cross-functional collaboration with dev teams",
        "Design-to-code workflows that reduce handoff friction",
        "Technical feasibility assessments during design phase",
      ],
    },
    outcome: {
      title: "The Impact",
      description: "Delivering enterprise-grade design solutions that ship faster and maintain consistency across large-scale applications.",
      metrics: [
        { value: "Current", label: "Active role" },
        { value: "Enterprise", label: "Client scale" },
        { value: "Full stack", label: "Design to code" },
      ],
    },
    tools: ["Figma", "React", "TypeScript", "Design Systems"],
    nextProject: {
      slug: "blazesoft",
      title: "Blazesoft",
    },
  },
  "blazesoft": {
    slug: "blazesoft",
    title: "Blazesoft",
    subtitle: "Design system from scratch",
    tags: ["DESIGN SYSTEM", "GAMING", "FINTECH"],
    year: "2023 — 2024",
    timeline: "6 months",
    overview: "Built and maintained the design system powering Blazesoft's gaming and fintech products. Established design-to-dev workflows that reduced production time significantly.",
    problem: {
      title: "The Problem",
      description: "Blazesoft had multiple products with inconsistent UI, no shared components, and a growing gap between design and development. Every new feature meant reinventing the wheel.",
    },
    solution: {
      title: "The Solution",
      description: "Created a comprehensive design system from the ground up that unified the product experience:",
      points: [
        "Design tokens for colors, typography, spacing",
        "Component library with multiple variants",
        "Documentation for designers and developers",
        "Figma-to-code workflow automation",
        "Pattern library for common UI patterns",
      ],
    },
    process: {
      title: "The Process",
      steps: [
        {
          number: "01",
          title: "Audit",
          description: "Catalogued all existing UI patterns and identified inconsistencies across products.",
        },
        {
          number: "02",
          title: "Foundation",
          description: "Established design tokens and core principles that would guide the system.",
        },
        {
          number: "03",
          title: "Components",
          description: "Built and documented reusable components with clear APIs.",
        },
        {
          number: "04",
          title: "Adoption",
          description: "Rolled out the system and trained teams on proper usage.",
        },
      ],
    },
    outcome: {
      title: "The Outcome",
      description: "The design system became the foundation for all Blazesoft products, dramatically improving consistency and development speed.",
      metrics: [
        { value: "50%", label: "Faster design-to-dev" },
        { value: "1", label: "Unified system" },
        { value: "100+", label: "Components built" },
      ],
    },
    tools: ["Figma", "Design Tokens", "Documentation", "React"],
    nextProject: {
      slug: "typid-events",
      title: "Typid Events",
    },
  },
  "typid-events": {
    slug: "typid-events",
    title: "Typid Events",
    subtitle: "All-in-one event management platform",
    tags: ["FOUNDER", "PRODUCT DESIGN", "DEVELOPMENT"],
    year: "2022 — Present",
    timeline: "Ongoing",
    overview: "Typid Events is an all-in-one event management platform that centralizes the entire event workflow—from planning through ticket sales, analytics, and payouts. Built to solve the fragmented event ticketing experience in the Philippines.",
    problem: {
      title: "The Problem",
      description: "Event ticketing in the Philippines is broken. Organizers juggle multiple tools for events, ticketing, discounts, and analytics. Manual GCash payments create friction. There's no good local alternative that understands the market.",
    },
    solution: {
      title: "The Solution",
      description: "I designed and built an end-to-end ticketing platform with everything organizers need in one place:",
      points: [
        "Event creation and customization with branding options",
        "Typid Pay — integrated payment processing with transparency",
        "Unique QR code generation for each attendee",
        "Real-time QR scanning for check-ins",
        "Live analytics dashboard for data-driven decisions",
        "Voucher and discount code creation",
        "Customizable ticket booth design",
      ],
    },
    process: {
      title: "The Process",
      steps: [
        {
          number: "01",
          title: "Research & Validation",
          description: "Interviewed local event organizers to understand pain points. Validated the need for a unified platform.",
        },
        {
          number: "02",
          title: "Design System",
          description: "Created a flexible design system that scales across web dashboard and mobile check-in experiences.",
        },
        {
          number: "03",
          title: "MVP Development",
          description: "Built the core platform: event creation, ticketing, QR validation, and basic analytics.",
        },
        {
          number: "04",
          title: "Iterate & Scale",
          description: "Launched with real events, gathered feedback, and continuously improved the product.",
        },
      ],
    },
    outcome: {
      title: "The Outcome",
      description: "Typid Events is now a live platform handling various event types—from raffles and fun runs to concerts and product launches.",
      metrics: [
        { value: "5-step", label: "Simplified workflow" },
        { value: "Real-time", label: "Analytics & check-ins" },
        { value: "Live", label: "Platform with active users" },
      ],
    },
    tools: ["Figma", "Flutter", "Firebase", "PayMongo"],
    nextProject: {
      slug: "retriever",
      title: "Retriever PH",
    },
  },
  "retriever": {
    slug: "retriever",
    title: "Retriever PH",
    subtitle: "Lost and found mobile application",
    tags: ["REDESIGN", "MOBILE APP", "UI/UX"],
    year: "2023",
    timeline: "2 months",
    overview: "Retriever PH is a lost and found platform connecting communities. I was brought in to fix fundamental design issues and rebuild the mobile experience from the ground up.",
    problem: {
      title: "The Problem",
      description: "The previous designer used wrong dimensions, had no design system, and created inconsistent spacing across 50+ screens. Development was blocked because handoff was impossible. The app needed a complete redesign, not patches.",
    },
    solution: {
      title: "The Solution",
      description: "I made the call to scrap and rebuild rather than patch the existing designs. Created a proper foundation:",
      points: [
        "Established correct device dimensions and safe areas",
        "Built a consistent component library",
        "Created a spacing and typography system",
        "Redesigned all 54 screens with proper hierarchy",
        "Prepared clean developer handoff documentation",
      ],
    },
    outcome: {
      title: "The Outcome",
      description: "The complete redesign unblocked development and eliminated design debt. The team could finally move forward with confidence.",
      metrics: [
        { value: "54", label: "Screens redesigned" },
        { value: "100%", label: "Dev handoff unblocked" },
        { value: "0", label: "Design debt remaining" },
      ],
    },
    tools: ["Figma", "Design System", "Component Library"],
    nextProject: {
      slug: "gotrabaho",
      title: "GoTrabaho",
    },
  },
  "gotrabaho": {
    slug: "gotrabaho",
    title: "GoTrabaho",
    subtitle: "Blue-collar job matching platform",
    tags: ["END-TO-END", "FLUTTER", "FULL STACK"],
    year: "2023",
    timeline: "3 months",
    overview: "GoTrabaho is a job matching platform for blue-collar workers in the Philippines. I designed and built the entire product—from design system to shipped Flutter app.",
    problem: {
      title: "The Problem",
      description: "Blue-collar job matching needed credibility. Users were hesitant to trust unknown workers showing up at their homes. The platform needed to build trust from the first interaction.",
    },
    solution: {
      title: "The Solution",
      description: "I made a deliberate choice to add friction where it mattered—verification onboarding. Even though it increased initial drop-off, trust was the product.",
      points: [
        "Identity verification during onboarding",
        "Skills and experience validation",
        "Review and rating system",
        "Clear worker profiles with verification badges",
        "Secure messaging between clients and workers",
      ],
    },
    process: {
      title: "The Process",
      steps: [
        {
          number: "01",
          title: "Design System",
          description: "Created a component library optimized for Flutter implementation.",
        },
        {
          number: "02",
          title: "Flutter Frontend",
          description: "Built the mobile app with focus on performance and usability.",
        },
        {
          number: "03",
          title: "Firebase Backend",
          description: "Set up authentication, database, and cloud functions.",
        },
        {
          number: "04",
          title: "Ship & Iterate",
          description: "Launched MVP and gathered user feedback for improvements.",
        },
      ],
    },
    outcome: {
      title: "The Outcome",
      description: "Shipped a complete product end-to-end. The verification-first approach built the trust needed for users to confidently hire workers.",
      metrics: [
        { value: "End-to-end", label: "Design to code" },
        { value: "Flutter", label: "Cross-platform app" },
        { value: "Shipped", label: "Live product" },
      ],
    },
    tools: ["Figma", "Flutter", "Firebase", "Dart"],
    nextProject: {
      slug: "tactiv-studios",
      title: "Tactiv Studios",
    },
  },
  "tactiv-studios": {
    slug: "tactiv-studios",
    title: "Tactiv Studios",
    subtitle: "3 years of product work",
    tags: ["3 YEARS", "PM + DESIGN", "6+ PRODUCTS"],
    year: "2020 — 2023",
    timeline: "3 years",
    overview: "At Tactiv Studios, I grew from intern to lead over three years. I shipped 6+ products across mobile and web, wearing multiple hats—design, development, and project management.",
    problem: {
      title: "The Challenge",
      description: "Working at an agency means context-switching between vastly different products and industries. Each project had unique constraints, stakeholders, and technical requirements.",
    },
    solution: {
      title: "The Edge",
      description: "Running tickets, testing implementations, and designing gave me a translator's advantage. I learned why designs fail in development and how to prevent it.",
      points: [
        "Home loan application system",
        "HRMS (Human Resource Management System)",
        "Emergency monitoring system",
        "Fitness iOS application",
        "Wealth management dashboards",
        "Various client projects under NDA",
      ],
    },
    process: {
      title: "Growth Path",
      steps: [
        {
          number: "01",
          title: "Intern",
          description: "Started learning the ropes—design fundamentals, client communication, handoff processes.",
        },
        {
          number: "02",
          title: "Junior Designer",
          description: "Took ownership of screens and features. Started contributing to design systems.",
        },
        {
          number: "03",
          title: "Designer + PM",
          description: "Managed tickets, tested implementations, bridged design and development.",
        },
        {
          number: "04",
          title: "Lead",
          description: "Led design direction, mentored juniors, established processes for the team.",
        },
      ],
    },
    outcome: {
      title: "The Outcome",
      description: "Three years of shipping products taught me that the best designers understand development constraints, and the best developers appreciate design thinking.",
      metrics: [
        { value: "6+", label: "Products shipped" },
        { value: "3", label: "Years of growth" },
        { value: "Lead", label: "Final role" },
      ],
    },
    tools: ["Figma", "React", "Flutter", "Project Management"],
    nextProject: {
      slug: "strategic-visionz",
      title: "Strategic Visionz",
    },
  },
};

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies[slug];
}

export function getAllCaseStudySlugs(): string[] {
  return Object.keys(caseStudies);
}
