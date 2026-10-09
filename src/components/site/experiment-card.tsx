import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Experiment } from "@/lib/experiments";

interface ExperimentCardProps {
  experiment: Experiment;
  className?: string;
}

export function ExperimentCard({ experiment, className }: ExperimentCardProps) {
  const Icon = experiment.icon;
  return (
    <Link
      href={`/experiments/${experiment.slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/30",
        className,
      )}
    >
      {/* Gradient corner accent */}
      <div
        className={cn(
          "pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br opacity-10 blur-2xl transition-opacity duration-300 group-hover:opacity-25",
          experiment.accent,
        )}
      />

      <div className="flex items-start justify-between gap-3">
        <span
          className={cn(
            "inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-sm",
            experiment.accent,
          )}
        >
          <Icon className="h-5 w-5" strokeWidth={2.2} />
        </span>
        <span className="inline-flex items-center gap-1 rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          Exp #{experiment.number}
        </span>
      </div>

      <div className="mt-4 flex-1">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary/80">
          {experiment.categoryLabel}
        </p>
        <h3 className="mt-1.5 font-display text-lg font-semibold leading-snug text-foreground">
          {experiment.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {experiment.summary}
        </p>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
          Open experiment
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </span>
        {experiment.compoundName && (
          <span className="font-mono text-xs text-muted-foreground">
            {experiment.shortTitle}
          </span>
        )}
      </div>
    </Link>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  icon?: LucideIcon;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  icon: Icon,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2",
        align === "center" && "items-center text-center",
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
          {Icon && <Icon className="h-3.5 w-3.5" />}
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
