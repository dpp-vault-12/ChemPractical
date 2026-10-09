import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  FlaskConical,
  Atom,
  Beaker,
  ShieldCheck,
  FileText,
  Layers,
  Clock,
  Target,
} from "lucide-react";
import { SectionHeading } from "@/components/site/experiment-card";

export const metadata: Metadata = {
  title: "About",
  description:
    "About the ChemPractical digital record — a polished multi-page edition of the Kendriya Vidyalaya Class 12 Chemistry practical file.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/60 bg-secondary/30">
        <div className="absolute inset-0 lab-grid opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <nav className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span aria-hidden>/</span>
            <span className="text-foreground">About</span>
          </nav>

          <div className="mt-6">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              <GraduationCap className="h-3.5 w-3.5" />
              About this record
            </span>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground text-balance sm:text-5xl">
              A digital edition of a real Class 12 practical file
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              ChemPractical is a polished, multi-page reimagining of the
              Kendriya Vidyalaya Class 12 Chemistry practical record. Every
              experiment from the original PDF has been preserved, structured
              and presented in a clean, navigable interface designed for
              revision before practical exams.
            </p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="The source"
              title="From a 10-page PDF to an interactive catalogue"
            />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground/90">
              <p>
                The source document is a handwritten Class 12 Chemistry
                practical record from Kendriya Vidyalaya — a 10-page PDF
                covering three core streams of the CBSE Chemistry practical
                syllabus. While the original file is comprehensive, scanning
                through dense handwritten observations to revise a specific
                experiment can be slow.
              </p>
              <p>
                This website re-presents every experiment from the original
                record in a structured, fully-typed digital format. The aim is
                to make the content easier to scan, search and study — without
                losing any of the scientific detail from the source material.
              </p>
              <p>
                All observations, equations, calculations and conclusions are
                preserved exactly as in the original record. The chemistry
                itself is unchanged; only the presentation has been
                reimagined for the screen.
              </p>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                At a glance
              </p>
              <dl className="mt-4 divide-y divide-border">
                {[
                  { label: "Source", value: "KV Class 12 Chemistry practical file (PDF)" },
                  { label: "Pages", value: "10 original pages" },
                  { label: "Experiments", value: "9 fully digitised" },
                  { label: "Streams", value: "Volumetric · Organic · Inorganic" },
                  { label: "Format", value: "Multi-page Next.js website" },
                  { label: "Curriculum", value: "CBSE Class 12 Chemistry" },
                ].map((r) => (
                  <div key={r.label} className="flex items-start justify-between gap-4 py-3">
                    <dt className="text-sm font-medium text-muted-foreground">
                      {r.label}
                    </dt>
                    <dd className="text-right text-sm font-semibold text-foreground">
                      {r.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </section>

      {/* WHAT'S INSIDE */}
      <section className="border-y border-border/60 bg-secondary/30">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            align="center"
            eyebrow="Three streams"
            title="What this record contains"
            description="The CBSE Class 12 Chemistry practical curriculum is organised into three streams. Every stream is represented here with its full set of experiments."
          />

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                icon: FlaskConical,
                accent: "from-emerald-500 to-teal-600",
                title: "Volumetric Analysis",
                count: "1 experiment",
                body: "Quantitative titration using a standard solution to determine the unknown concentration. Featured: KMnO₄ vs M/20 Mohr salt, a self-indicating redox titration.",
              },
              {
                icon: Atom,
                accent: "from-amber-500 to-orange-600",
                title: "Functional Group Detection",
                count: "3 experiments",
                body: "Qualitative organic analysis — identifying the characteristic functional groups in unknown organic samples: carboxylic acid (–COOH), phenol (–OH) and aldehyde (–CHO).",
              },
              {
                icon: Beaker,
                accent: "from-teal-500 to-emerald-600",
                title: "Inorganic Salt Analysis",
                count: "5 experiments",
                body: "Systematic qualitative analysis of inorganic salts — identifying both the basic and acid radicals through dry tests, wet tests and confirmatory tests.",
              },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="rounded-2xl border border-border bg-card p-6 shadow-sm"
                >
                  <span
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${c.accent} text-white shadow-sm`}
                  >
                    <Icon className="h-6 w-6" strokeWidth={2.2} />
                  </span>
                  <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                    {c.count}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-bold text-foreground">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {c.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT'S STRUCTURED */}
      <section className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Inside every experiment"
          title="A consistent, scannable structure"
          description="Every experiment follows the same clean section layout — so you always know where to look, whether you're revising theory two days before the exam or checking a single observation five minutes before."
        />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {[
            { icon: Target, title: "Aim", body: "A single-sentence statement of what the experiment is trying to determine or detect." },
            { icon: FlaskConical, title: "Apparatus & Chemicals", body: "Burette, pipette, beakers, conical flasks — plus every chemical and reagent required." },
            { icon: BookOpen, title: "Theory & Equations", body: "The underlying chemistry, balanced molecular equations and ionic equations presented side-by-side." },
            { icon: Clock, title: "Indicator & Endpoint", body: "What indicator is used (KMnO₄ is self-indicating) and what colour change marks the endpoint." },
            { icon: FileText, title: "Observation Table", body: "Tabulated burette readings with the concordant volume clearly called out." },
            { icon: Layers, title: "Observation & Inference rows", body: "Each test step is broken into experiment, observation and inference for salt and functional-group analysis." },
            { icon: ShieldCheck, title: "Result & Conclusion", body: "The final result, plus a clearly stated conclusion identifying the functional group or radicals." },
            { icon: BookOpen, title: "Precautions", body: "Lab-safety notes and per-experiment precautions to follow during the practical." },
          ].map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 text-amber-700 dark:text-amber-300">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">
                  For educational revision only
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                  This website is a study aid — a digital presentation of an
                  existing KV Class 12 Chemistry practical record. It is not a
                  substitute for the lab manual or your teacher's guidance.
                  Always follow your school's lab safety guidelines and
                  standard operating procedures when handling chemicals and
                  apparatus in the laboratory.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-border bg-card p-8 text-center shadow-sm sm:flex-row sm:text-left">
          <div>
            <p className="font-display text-xl font-bold text-foreground">
              Ready to dive in?
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Browse all 9 experiments or jump straight to a specific category.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/experiments"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <BookOpen className="h-4 w-4" />
              Browse experiments
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/reference"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-foreground/30 hover:bg-secondary"
            >
              <Beaker className="h-4 w-4" />
              Reference
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
