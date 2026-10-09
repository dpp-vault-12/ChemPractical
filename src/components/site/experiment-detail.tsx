import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Target,
  FlaskConical,
  Beaker,
  BookOpen,
  Microscope,
  TestTube,
  Calculator,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Droplets,
  Eye,
  ClipboardList,
  FlaskRound,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { experiments, type Experiment } from "@/lib/experiments";

interface ExperimentDetailProps {
  experiment: Experiment;
}

function SectionCard({
  icon: Icon,
  title,
  accent = "default",
  children,
}: {
  icon: LucideIcon;
  title: string;
  accent?: "default" | "amber" | "emerald" | "rose";
  children: React.ReactNode;
}) {
  const accentMap: Record<string, string> = {
    default: "bg-primary/10 text-primary",
    amber: "bg-amber-500/15 text-amber-700 dark:text-amber-300",
    emerald: "bg-emerald-600/15 text-emerald-700 dark:text-emerald-300",
    rose: "bg-rose-500/15 text-rose-700 dark:text-rose-300",
  };
  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div className="flex items-center gap-3">
        <span
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-xl",
            accentMap[accent],
          )}
        >
          <Icon className="h-5 w-5" strokeWidth={2.2} />
        </span>
        <h2 className="font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl">
          {title}
        </h2>
      </div>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function Pill({
  label,
  value,
  mono,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div className="rounded-xl border border-border bg-secondary/40 px-4 py-3">
      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </p>
      <p
        className={cn(
          "mt-1 text-sm font-semibold text-foreground",
          mono && "font-mono",
        )}
      >
        {value}
      </p>
    </div>
  );
}

export function ExperimentDetail({ experiment: exp }: ExperimentDetailProps) {
  const idx = experiments.findIndex((e) => e.slug === exp.slug);
  const prev = idx > 0 ? experiments[idx - 1] : null;
  const next = idx < experiments.length - 1 ? experiments[idx + 1] : null;
  const Icon = exp.icon;

  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 lab-grid opacity-50" aria-hidden />
        <div
          className={cn(
            "pointer-events-none absolute -right-32 -top-32 h-[26rem] w-[26rem] rounded-full bg-gradient-to-br opacity-20 blur-3xl",
            exp.accent,
          )}
          aria-hidden
        />

        <div className="relative mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          {/* Breadcrumbs */}
          <nav className="flex flex-wrap items-center gap-2 text-xs font-medium text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span aria-hidden>/</span>
            <Link href="/experiments" className="hover:text-foreground">
              Experiments
            </Link>
            <span aria-hidden>/</span>
            <Link
              href={`/experiments#${exp.category}`}
              className="hover:text-foreground"
            >
              {exp.categoryLabel}
            </Link>
            <span aria-hidden>/</span>
            <span className="text-foreground">Experiment #{exp.number}</span>
          </nav>

          <div className="mt-6 flex items-start gap-4">
            <span
              className={cn(
                "inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-md",
                exp.accent,
              )}
            >
              <Icon className="h-7 w-7" strokeWidth={2.2} />
            </span>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Experiment #{exp.number}
                </span>
                <span
                  className={cn(
                    "inline-flex items-center gap-1 rounded-full bg-gradient-to-r px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white",
                    exp.accent,
                  )}
                >
                  {exp.categoryLabel}
                </span>
              </div>
              <h1 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-foreground text-balance sm:text-4xl lg:text-5xl">
                {exp.title}
              </h1>
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
                {exp.summary}
              </p>
            </div>
          </div>

          {/* Quick info row */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {exp.compoundName && (
              <Pill label="Compound" value={exp.shortTitle} mono />
            )}
            {exp.basicRadical && (
              <Pill label="Basic radical" value={exp.basicRadical} mono />
            )}
            {exp.acidRadical && (
              <Pill label="Acid radical" value={exp.acidRadical} mono />
            )}
            {exp.indicator && <Pill label="Indicator" value={exp.indicator} />}
            {exp.endpoint && <Pill label="Endpoint" value={exp.endpoint} />}
            {exp.physicalProperties && (
              <>
                <Pill label="Colour" value={exp.physicalProperties.colour} />
                <Pill label="State" value={exp.physicalProperties.state} />
                <Pill label="Odour" value={exp.physicalProperties.odour} />
              </>
            )}
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="flex flex-col gap-6">
          {/* Aim */}
          {exp.aim && (
            <SectionCard icon={Target} title="Aim" accent="emerald">
              <p className="text-base leading-relaxed text-foreground">
                {exp.aim}
              </p>
            </SectionCard>
          )}

          {/* Apparatus & Chemicals (titration) */}
          {(exp.apparatus || exp.chemicals) && (
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {exp.apparatus && (
                <SectionCard icon={FlaskConical} title="Apparatus Required">
                  <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {exp.apparatus.map((a) => (
                      <li
                        key={a}
                        className="flex items-start gap-2 text-sm leading-relaxed text-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </SectionCard>
              )}
              {exp.chemicals && (
                <SectionCard icon={TestTube} title="Chemicals Required" accent="amber">
                  <ul className="grid grid-cols-1 gap-2">
                    {exp.chemicals.map((c) => (
                      <li
                        key={c}
                        className="flex items-start gap-2 text-sm leading-relaxed text-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </SectionCard>
              )}
            </div>
          )}

          {/* Theory */}
          {exp.theory && exp.theory.length > 0 && (
            <SectionCard icon={BookOpen} title="Theory">
              <div className="space-y-4">
                {exp.theory.map((p, i) => (
                  <p key={i} className="text-sm leading-relaxed text-foreground/90 sm:text-base">
                    {p}
                  </p>
                ))}
              </div>

              {/* Equations */}
              {(exp.balancedEquation || exp.ionicEquation) && (
                <div className="mt-6 space-y-4">
                  {exp.balancedEquation && (
                    <div className="rounded-xl border border-emerald-600/20 bg-emerald-600/5 p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-300">
                        Balanced equation
                      </p>
                      <p className="mt-2 font-mono text-sm leading-relaxed text-foreground sm:text-base">
                        {exp.balancedEquation}
                      </p>
                    </div>
                  )}
                  {exp.ionicEquation && (
                    <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-700 dark:text-amber-300">
                        Ionic equation
                      </p>
                      <p className="mt-2 font-mono text-sm leading-relaxed text-foreground sm:text-base">
                        {exp.ionicEquation}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </SectionCard>
          )}

          {/* Indicator & endpoint */}
          {(exp.indicator || exp.endpoint) && (
            <SectionCard icon={Droplets} title="Indicator & Endpoint" accent="amber">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {exp.indicator && (
                  <Pill label="Indicator" value={exp.indicator} />
                )}
                {exp.endpoint && <Pill label="Endpoint change" value={exp.endpoint} />}
              </div>
            </SectionCard>
          )}

          {/* Observation table (titration) */}
          {exp.observationsTable && (
            <SectionCard icon={ClipboardList} title="Observation Table">
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-left text-sm">
                  <thead className="bg-secondary/60">
                    <tr>
                      {exp.observationsTable.headers.map((h, i) => (
                        <th
                          key={i}
                          className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {exp.observationsTable.rows.map((row, ri) => (
                      <tr key={ri} className="hover:bg-secondary/30">
                        {row.map((cell, ci) => (
                          <td
                            key={ci}
                            className={cn(
                              "px-4 py-3 text-foreground",
                              ci === 0 && "font-mono text-xs text-muted-foreground",
                              ci === row.length - 1 && "font-semibold text-primary",
                            )}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {exp.observationsTable.concordantVolume && (
                <div className="mt-4 flex items-center gap-3 rounded-xl border border-emerald-600/20 bg-emerald-600/5 px-4 py-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  <p className="text-sm text-foreground">
                    <span className="font-semibold">Concordant volume:</span>{" "}
                    <span className="font-mono">
                      {exp.observationsTable.concordantVolume}
                    </span>{" "}
                    of KMnO₄ solution.
                  </p>
                </div>
              )}
            </SectionCard>
          )}

          {/* Calculations */}
          {exp.calculations && exp.calculations.length > 0 && (
            <SectionCard icon={Calculator} title="Calculations">
              <ol className="space-y-3">
                {exp.calculations.map((c, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 font-mono text-xs font-bold text-primary">
                      {i + 1}
                    </span>
                    <p className="pt-0.5 font-mono text-sm leading-relaxed text-foreground sm:text-base">
                      {c}
                    </p>
                  </li>
                ))}
              </ol>
            </SectionCard>
          )}

          {/* Observation / Inference rows (FG & salt) */}
          {exp.observationRows && exp.observationRows.length > 0 && (
            <SectionCard icon={Eye} title="Observations & Inferences">
              <div className="space-y-4">
                {exp.observationRows.map((row, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-border bg-background/60 p-4 sm:p-5"
                  >
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 font-mono text-xs font-bold text-primary">
                        {i + 1}
                      </span>
                      <div className="flex-1 space-y-2">
                        <p className="text-sm leading-relaxed text-foreground">
                          <span className="font-semibold text-muted-foreground">
                            Experiment:{" "}
                          </span>
                          {row.experiment}
                        </p>
                        <p className="text-sm leading-relaxed text-foreground">
                          <span className="font-semibold text-amber-700 dark:text-amber-300">
                            Observation:{" "}
                          </span>
                          {row.observation}
                        </p>
                        <p className="text-sm leading-relaxed text-foreground">
                          <span className="font-semibold text-emerald-700 dark:text-emerald-300">
                            Inference:{" "}
                          </span>
                          {row.inference}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>
          )}

          {/* Result */}
          {exp.result && (
            <SectionCard icon={CheckCircle2} title="Result" accent="emerald">
              <div className="rounded-xl border border-emerald-600/20 bg-emerald-600/5 p-5">
                <p className="text-base leading-relaxed font-semibold text-foreground">
                  {exp.result}
                </p>
              </div>
            </SectionCard>
          )}

          {/* Conclusion */}
          {exp.conclusion && (
            <SectionCard
              icon={FlaskRound}
              title="Conclusion"
              accent="emerald"
            >
              <div className="rounded-xl border border-emerald-600/20 bg-emerald-600/5 p-5">
                <p className="text-base leading-relaxed text-foreground">
                  {exp.conclusion}
                </p>
                {exp.compoundName && (
                  <div className="mt-4 flex flex-wrap gap-3">
                    {exp.basicRadical && (
                      <Pill label="Basic radical" value={exp.basicRadical} mono />
                    )}
                    {exp.acidRadical && (
                      <Pill label="Acid radical" value={exp.acidRadical} mono />
                    )}
                    <Pill label="Compound" value={exp.compoundName} mono />
                  </div>
                )}
              </div>
            </SectionCard>
          )}

          {/* Precautions */}
          {exp.precautions && exp.precautions.length > 0 && (
            <SectionCard icon={AlertTriangle} title="Precautions" accent="rose">
              <ul className="space-y-2.5">
                {exp.precautions.map((p, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 rounded-lg border border-rose-500/15 bg-rose-500/5 px-4 py-3 text-sm leading-relaxed text-foreground"
                  >
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-500/15 text-rose-700 dark:text-rose-300">
                      <AlertTriangle className="h-3 w-3" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </SectionCard>
          )}
        </div>

        {/* Prev / next nav */}
        <nav className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {prev ? (
            <Link
              href={`/experiments/${prev.slug}`}
              className="group flex items-center gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
            >
              <ArrowLeft className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
              <div className="flex-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Previous · Experiment #{prev.number}
                </p>
                <p className="mt-0.5 font-display text-base font-semibold text-foreground">
                  {prev.shortTitle}
                </p>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/experiments/${next.slug}`}
              className="group flex items-center gap-3 rounded-2xl border border-border bg-card p-5 text-right shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md sm:flex-row-reverse"
            >
              <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
              <div className="flex-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Next · Experiment #{next.number}
                </p>
                <p className="mt-0.5 font-display text-base font-semibold text-foreground">
                  {next.shortTitle}
                </p>
              </div>
            </Link>
          ) : (
            <div />
          )}
        </nav>

        {/* Back to all */}
        <div className="mt-6 flex justify-center">
          <Link
            href="/experiments"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-foreground/30 hover:bg-secondary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all experiments
          </Link>
        </div>
      </section>
    </div>
  );
}
