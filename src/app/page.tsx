import Link from "next/link";
import {
  ArrowRight,
  FlaskConical,
  Atom,
  Beaker,
  Microscope,
  ShieldCheck,
  BookMarked,
  Lightbulb,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import { experiments, categoryMeta } from "@/lib/experiments";
import { ExperimentCard, SectionHeading } from "@/components/site/experiment-card";

export default function HomePage() {
  const featured = [
    experiments.find((e) => e.slug === "titration")!,
    experiments.find((e) => e.slug === "fg-aldehyde")!,
    experiments.find((e) => e.slug === "salt-barium-chloride")!,
  ];

  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 lab-grid opacity-60" aria-hidden />
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full molecule-glow blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-40 -left-32 h-[26rem] w-[26rem] rounded-full molecule-glow blur-3xl"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-600/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
                </span>
                Class 12 CBSE · Chemistry Practical
              </span>

              <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
                The complete{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent">
                    chemistry practical
                  </span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 300 12"
                    fill="none"
                    preserveAspectRatio="none"
                    aria-hidden
                  >
                    <path
                      d="M2 9C75 3 225 3 298 9"
                      stroke="#f59e0b"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                record, beautifully reimagined.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
                A polished, multi-page digital edition of the Kendriya Vidyalaya
                Class 12 Chemistry practical file — covering volumetric
                titrations, organic functional group detection, and systematic
                inorganic salt analysis. Each experiment is presented with
                theory, observations, calculations and conclusions in a clean,
                easy-to-navigate interface.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/experiments"
                  className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
                >
                  Browse all 9 experiments
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-foreground/30 hover:bg-secondary"
                >
                  <BookMarked className="h-4 w-4" />
                  About this record
                </Link>
              </div>

              <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-4">
                {[
                  { label: "Experiments", value: "9" },
                  { label: "Categories", value: "3" },
                  { label: "Salt analyses", value: "5" },
                  { label: "Functional groups", value: "3" },
                ].map((s) => (
                  <div key={s.label} className="border-l-2 border-primary/30 pl-4">
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      {s.label}
                    </dt>
                    <dd className="mt-1 font-display text-3xl font-bold text-foreground">
                      {s.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Visual: Stylized chemistry card */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md">
                <div
                  className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-emerald-500/20 via-amber-500/10 to-teal-500/20 blur-2xl"
                  aria-hidden
                />
                <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-2xl">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-300">
                      <FlaskConical className="h-3 w-3" />
                      Live Demo
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {"KMnO\u2084 + Fe\u00b2\u207a"}
                    </span>
                  </div>

                  <div className="mt-5 flex items-end justify-center gap-3">
                    {/* Stylized flask */}
                    <svg
                      viewBox="0 0 200 240"
                      className="h-56 w-auto drop-shadow-sm"
                      aria-hidden
                    >
                      <defs>
                        <linearGradient id="liquid" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#f472b6" />
                          <stop offset="100%" stopColor="#db2777" />
                        </linearGradient>
                        <linearGradient id="glass" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0.5" />
                          <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.7" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M85 30 L85 90 L40 200 Q40 220 60 220 L140 220 Q160 220 160 200 L115 90 L115 30 Z"
                        fill="url(#glass)"
                        stroke="#0f766e"
                        strokeWidth="2.5"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M55 160 L145 160 L150 200 Q150 215 138 215 L62 215 Q50 215 50 200 Z"
                        fill="url(#liquid)"
                        opacity="0.85"
                      />
                      <rect x="80" y="22" width="40" height="10" rx="3" fill="#0f766e" />
                      <circle cx="80" cy="180" r="3" fill="#fff" opacity="0.7">
                        <animate attributeName="cy" values="200;160;200" dur="3s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="120" cy="190" r="2.5" fill="#fff" opacity="0.6">
                        <animate attributeName="cy" values="200;160;200" dur="2.5s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="100" cy="170" r="2" fill="#fff" opacity="0.8">
                        <animate attributeName="cy" values="200;160;200" dur="2s" repeatCount="indefinite" />
                      </circle>
                    </svg>

                    {/* Stylized beaker */}
                    <svg viewBox="0 0 160 200" className="h-40 w-auto" aria-hidden>
                      <defs>
                        <linearGradient id="liquid2" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#fcd34d" />
                          <stop offset="100%" stopColor="#f59e0b" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M30 30 L30 170 Q30 185 45 185 L115 185 Q130 185 130 170 L130 30 Z"
                        fill="rgba(226,232,240,0.4)"
                        stroke="#0f766e"
                        strokeWidth="2.5"
                      />
                      <path
                        d="M33 100 L127 100 L127 170 Q127 183 113 183 L47 183 Q33 183 33 170 Z"
                        fill="url(#liquid2)"
                        opacity="0.85"
                      />
                      <line x1="40" y1="60" x2="55" y2="60" stroke="#0f766e" strokeWidth="2" />
                      <line x1="40" y1="90" x2="55" y2="90" stroke="#0f766e" strokeWidth="2" />
                      <line x1="40" y1="120" x2="55" y2="120" stroke="#0f766e" strokeWidth="2" />
                      <line x1="40" y1="150" x2="55" y2="150" stroke="#0f766e" strokeWidth="2" />
                    </svg>
                  </div>

                  <div className="mt-4 rounded-xl border border-border bg-secondary/40 p-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      Endpoint
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      {"Colourless → stable light pink"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY OVERVIEW */}
      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Three streams, one record"
          title="What this practical file covers"
          description="The Class 12 CBSE Chemistry practical curriculum spans quantitative titration, organic qualitative analysis, and inorganic salt analysis. Each stream is presented as a dedicated section with its own set of full experiments."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {(
            [
              "volumetric",
              "functional-group",
              "salt-analysis",
            ] as const
          ).map((catKey) => {
            const cat = categoryMeta[catKey];
            const Icon = cat.icon;
            const count = experiments.filter(
              (e) => e.category === catKey,
            ).length;
            return (
              <Link
                key={catKey}
                href={`/experiments#${catKey}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${cat.accent} opacity-10 blur-2xl transition-opacity group-hover:opacity-25`}
                />
                <span
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${cat.accent} text-white shadow-sm`}
                >
                  <Icon className="h-6 w-6" strokeWidth={2.2} />
                </span>
                <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {count} experiment{count > 1 ? "s" : ""}
                </p>
                <h3 className="mt-1 font-display text-xl font-bold text-foreground">
                  {cat.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {cat.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Explore
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* FEATURED EXPERIMENTS */}
      <section className="border-y border-border/60 bg-secondary/30">
        <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Featured"
              title="A glimpse of the experiments"
              description="Three hand-picked experiments spanning all three streams — the self-indicating KMnO₄ titration, the silver-mirror aldehyde test, and a full Group V barium analysis."
            />
            <Link
              href="/experiments"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-foreground/30 hover:bg-secondary"
            >
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((exp) => (
              <ExperimentCard key={exp.slug} experiment={exp} />
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES STRIP */}
      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Built for clarity"
          title="Designed to make revision effortless"
          description="Every experiment follows the same clean structure — aim, apparatus, theory, observations, calculations, results — so you always know where to look."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Microscope,
              title: "Structured layout",
              body: "Each experiment follows the same clean sections — aim, apparatus, theory, observations, calculations, results and precautions.",
            },
            {
              icon: Lightbulb,
              title: "Theory first",
              body: "Balanced equations, ionic equations and the underlying redox or qualitative logic are always presented before observations.",
            },
            {
              icon: ShieldCheck,
              title: "Safety & precautions",
              body: "Lab safety notes and per-experiment precautions are called out so you don’t miss the important details before practical exams.",
            },
            {
              icon: TrendingUp,
              title: "Revision-friendly",
              body: "Card-based navigation, clear typography and consistent color-coding by category make scanning and revising fast.",
            },
          ].map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-primary/30"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                  {f.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {f.body}
                </p>
              </div>
            );
          })}
        </div>

        {/* Checkmark strip */}
        <div className="mt-10 rounded-2xl border border-emerald-600/20 bg-emerald-600/5 p-6 sm:p-8">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-xl font-bold text-foreground">
                Everything in the original KV practical file — digitised.
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                All 10 pages of the original record are preserved and enhanced
                with interactive navigation.
              </p>
            </div>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {[
                "Volumetric titration",
                "Organic functional groups",
                "Inorganic salt analysis",
                "Observation tables",
              ].map((c) => (
                <li
                  key={c}
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60 bg-gradient-to-br from-emerald-700 via-teal-700 to-emerald-800 text-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                Ready to dive into the lab?
              </h2>
              <p className="mt-2 max-w-xl text-emerald-50/90 text-pretty">
                Jump straight to the experiments, browse by category, or read
                the reference section for reagents and indicators.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/experiments"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-emerald-800 shadow-sm transition-transform hover:-translate-y-0.5"
              >
                <FlaskConical className="h-4 w-4" />
                Start with experiments
              </Link>
              <Link
                href="/reference"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                <Beaker className="h-4 w-4" />
                Reference
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
