import { notFound } from "next/navigation";
import { getCaseStudy, getAllCaseStudySlugs } from "@/data/case-studies";
import { CaseStudyContent } from "@/components/case-study/CaseStudyContent";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    return { title: "Not Found" };
  }

  return {
    title: `${caseStudy.title} | Nathaniel Muyco`,
    description: caseStudy.overview,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  return <CaseStudyContent caseStudy={caseStudy} />;
}
