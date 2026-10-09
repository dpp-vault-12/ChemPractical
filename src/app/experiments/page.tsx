import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, BookOpen, FlaskConical, Atom, Beaker } from "lucide-react";
import {
  experiments,
  categoryMeta,
  type ExperimentCategory,
} from "@/lib/experiments";
import { ExperimentCard, SectionHeading } from "@/components/site/experiment-card";

export const metadata: Metadata = {
  title: "Experiments",
  description:
    "Browse all 9 chemistry practical experiments — volumetric analysis, organic functional group detection, and inorganic salt analysis.",
};

export default function ExperimentsPage() {
  const categories: ExperimentCategory[] = [
    "volumetric",
    "functional-group",
    "salt-analysis",
  ];

  return (
    <div className="flex flex-col">
      {/* Page header */}
      <section className="relative overflow-hidden border-b border-border/60 bg-secondary/30">
        <div className="absolute inset-0 lab-grid opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <nav className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span aria-hidden>/</span>
            <span className="text-foreground">Experiments</span>
          </nav>

          <div className="mt-6 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              <BookOpen className="h-3.5 w-3.5" />
              All Experiments
            </span>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground text-balance sm:text-5xl">
              The complete practical catalogue
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              Nine full experiments organised into three streams. Click any
              card to open the full record — with theory, observations,
              calculations, results and precautions.
            </p>
          </div>

          {/* Quick stats */}
          <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { label: "Total experiments", value: experiments.length, icon: BookOpen },
              { label: "Volumetric", value: 1, icon: FlaskConical },
              { label: "Functional groups", value: 3, icon: Atom },
              { label: "Salt analyses", value: 5, icon: Beaker },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-sm"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display text-2xl font-bold leading-none text-foreground">
                      {s.value}
                    </p>
                    <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                      {s.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </dl>
        </div>
      </section>

      {/* Sections per category */}
      {categories.map((catKey) => {
        const cat = categoryMeta[catKey];
        const Icon = cat.icon;
        const items = experiments.filter((e) => e.category === catKey);
        return (
          <section
            key={catKey}
            id={catKey}
            className="mx-auto w-full max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex items-start gap-4">
                <span
                  className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${cat.accent} text-white shadow-sm`}
                >
                  <Icon className="h-6 w-6" strokeWidth={2.2} />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                    {items.length} experiment{items.length > 1 ? "s" : ""}
                  </p>
                  <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    {cat.label}
                  </h2>
                  <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {cat.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {items.map((exp) => (
                <ExperimentCard key={exp.slug} experiment={exp} />
              ))}
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 py-10 sm:px-6 sm:flex-row sm:items-center lg:px-8">
          <div>
            <p className="font-display text-lg font-semibold text-foreground">
              Looking for reagents, indicators and safety notes?
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              The Reference page collects the common chemicals and tests used
              across these experiments.
            </p>
          </div>
          <Link
            href="/reference"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Open reference
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
