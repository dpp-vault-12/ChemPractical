import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { experiments, getExperimentBySlug } from "@/lib/experiments";
import { ExperimentDetail } from "@/components/site/experiment-detail";

export const dynamicParams = false;

export function generateStaticParams() {
  return experiments.map((e) => ({ slug: e.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const exp = getExperimentBySlug(slug);
  if (!exp) return { title: "Experiment not found" };
  return {
    title: exp.title,
    description: exp.summary,
  };
}

export default async function ExperimentPage({ params }: PageProps) {
  const { slug } = await params;
  const exp = getExperimentBySlug(slug);
  if (!exp) notFound();
  return <ExperimentDetail experiment={exp} />;
}
