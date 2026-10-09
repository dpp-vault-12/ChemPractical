import Link from "next/link";
import type { Metadata } from "next";
import {
  Beaker,
  Droplets,
  FlaskConical,
  ShieldCheck,
  AlertTriangle,
  Atom,
  TestTube,
  Eye,
  Sparkles,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { SectionHeading } from "@/components/site/experiment-card";

export const metadata: Metadata = {
  title: "Reference",
  description:
    "Common reagents, indicators and safety notes used across the Class 12 Chemistry practical experiments.",
};

const reagents = [
  {
    name: "KMnO\u2084 (Potassium Permanganate)",
    role: "Oxidising agent / self-indicator",
    notes:
      "Strong oxidiser in acidic medium; reduced from purple MnO\u2084\u207b to colourless Mn\u00b2\u207a. Acts as its own indicator at the endpoint.",
    color: "from-pink-500 to-fuchsia-600",
  },
  {
    name: "Mohr Salt (FeSO\u2084\u00b7(NH\u2084)\u2082SO\u2084\u00b76H\u2082O)",
    role: "Primary standard reducing agent",
    notes:
      "Stable ferrous ammonium sulphate used to standardise KMnO\u2084. Fe\u00b2\u207a is oxidised to Fe\u00b3\u207a during titration.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    name: "Dilute H\u2082SO\u2084",
    role: "Acidic medium provider",
    notes:
      "Maintains the acidic medium required for the KMnO\u2084 redox reaction. Use ~2 M concentration.",
    color: "from-yellow-500 to-amber-600",
  },
  {
    name: "Neutral FeCl\u2083",
    role: "Phenol confirmatory reagent",
    notes:
      "Produces characteristic violet / green / blue colouration with phenolic \u2013OH groups. Used in functional group detection.",
    color: "from-amber-500 to-orange-600",
  },
  {
    name: "2,4-DNP (Brady's reagent)",
    role: "Carbonyl group test",
    notes:
      "Gives yellow / orange precipitate with aldehydes and ketones (carbonyl compounds).",
    color: "from-violet-500 to-purple-600",
  },
  {
    name: "Tollens' Reagent",
    role: "Aldehyde confirmatory test",
    notes:
      "Ammoniacal silver nitrate; produces silver mirror / grey precipitate only with aldehydes, not ketones.",
    color: "from-slate-500 to-zinc-600",
  },
  {
    name: "NaOH (Sodium Hydroxide)",
    role: "NH\u2084\u207a detection reagent",
    notes:
      "On heating with ammonium salts, liberates NH\u2083 gas (pungent smell), confirmed with HCl rod (white fumes) or Nessler's reagent.",
    color: "from-rose-500 to-red-600",
  },
  {
    name: "Nessler's Reagent",
    role: "Ammonium confirmatory test",
    notes:
      "K\u2082[HgI\u2084] in alkaline solution; gives reddish-brown colouration with NH\u2084\u207a / NH\u2083.",
    color: "from-orange-500 to-amber-700",
  },
  {
    name: "BaCl\u2082 (Barium Chloride)",
    role: "Sulphate confirmatory test",
    notes:
      "Gives white precipitate of BaSO\u2084 insoluble in conc. HNO\u2083, confirming SO\u2084\u00b2\u207b.",
    color: "from-lime-500 to-emerald-600",
  },
  {
    name: "AgNO\u2083 (Silver Nitrate)",
    role: "Chloride confirmatory test",
    notes:
      "Curdy white precipitate of AgCl, soluble in excess NH\u2084OH. Confirms Cl\u207b.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    name: "K\u2082CrO\u2084 (Potassium Chromate)",
    role: "Lead / Barium confirmatory test",
    notes:
      "Yellow precipitate of PbCrO\u2084 or BaCrO\u2084 confirms Pb\u00b2\u207a or Ba\u00b2\u207a respectively.",
    color: "from-yellow-500 to-amber-600",
  },
  {
    name: "KI (Potassium Iodide)",
    role: "Lead confirmatory test",
    notes:
      "Yellow precipitate of PbI\u2082 confirms Pb\u00b2\u207a. Precipitate dissolves in hot water and reappears as golden spangles on cooling.",
    color: "from-amber-500 to-yellow-600",
  },
];

const indicators = [
  {
    name: "KMnO\u2084 (self-indicator)",
    color: "Pink / Purple",
    change: "Colourless \u2192 stable light pink",
    use: "Redox titration of KMnO\u2084 vs Mohr salt.",
  },
  {
    name: "Blue litmus paper",
    color: "Blue",
    change: "Blue \u2192 Red (in acidic medium)",
    use: "Detects acidic nature of carboxylic acids and phenols.",
  },
  {
    name: "Neutral FeCl\u2083",
    color: "Pale yellow",
    change: "Yellow \u2192 Violet (with phenols)",
    use: "Confirms phenolic \u2013OH group.",
  },
];

const safety = [
  "Always wear a lab apron, safety goggles and closed shoes before entering the lab.",
  "Rinse the burette and pipette with the solution to be taken in them before use.",
  "Remove all air gaps from the burette before starting a titration.",
  "Use freshly prepared FeSO\u2084 / Mohr salt solution to avoid aerial oxidation.",
  "Add dilute H\u2082SO\u2084 (not HCl or HNO\u2083) before KMnO\u2084 titrations to maintain an acidic medium.",
  "Never add water to concentrated acid. Always add acid to water slowly with stirring.",
  "Keep conc. H\u2082SO\u2084 away from water taps and never pipette it by mouth.",
  "Avoid inhaling gases evolved during dry tests (Cl\u2082, NO\u2082, NH\u2083, SO\u2082). Use a fume hood where available.",
  "Do not taste any chemical. Dispose of residues in the designated waste containers.",
  "In case of acid spill on skin, wash immediately with plenty of water and notify the teacher.",
];

export default function ReferencePage() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/60 bg-secondary/30">
        <div className="absolute inset-0 lab-grid opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <nav className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span aria-hidden>/</span>
            <span className="text-foreground">Reference</span>
          </nav>

          <div className="mt-6 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              <Beaker className="h-3.5 w-3.5" />
              Reagents · Indicators · Safety
            </span>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground text-balance sm:text-5xl">
              The practical lab reference
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              A quick-reference companion to the experiments — common reagents,
              their roles, indicators and the colour changes that mark the
              endpoints, plus the lab safety guidelines you should always
              follow.
            </p>
          </div>
        </div>
      </section>

      {/* REAGENTS */}
      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Common reagents"
          title="Reagents used across the experiments"
          description="The reagents, test solutions and confirmatory chemicals that appear across the volumetric, organic and inorganic experiments in this record."
        />

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reagents.map((r) => (
            <div
              key={r.name}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className={`pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-br ${r.color} opacity-15 blur-2xl transition-opacity group-hover:opacity-30`}
              />
              <div className="flex items-center gap-3">
                <span
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${r.color} text-white shadow-sm`}
                >
                  <TestTube className="h-5 w-5" strokeWidth={2.2} />
                </span>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {r.role}
                </p>
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-foreground">
                {r.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {r.notes}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* INDICATORS */}
      <section className="border-y border-border/60 bg-secondary/30">
        <div className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Indicators & endpoints"
            title="Indicators and their colour changes"
            description="A quick lookup of the indicators used in the experiments, their original colour, the colour at the endpoint and the experiment they belong to."
          />

          <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-secondary/60">
                  <tr>
                    <th className="px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Indicator
                    </th>
                    <th className="px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Original colour
                    </th>
                    <th className="px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Endpoint change
                    </th>
                    <th className="px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Used in
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {indicators.map((i) => (
                    <tr key={i.name} className="hover:bg-secondary/30">
                      <td className="px-5 py-4 font-semibold text-foreground">
                        {i.name}
                      </td>
                      <td className="px-5 py-4 text-muted-foreground">
                        {i.color}
                      </td>
                      <td className="px-5 py-4 text-foreground">
                        <span className="inline-flex items-center gap-1.5">
                          <Droplets className="h-3.5 w-3.5 text-primary" />
                          {i.change}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-muted-foreground">
                        {i.use}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* COMMON TESTS */}
      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Quick lookup"
          title="Common tests & their confirmations"
          description="The standard qualitative tests called upon most often across these experiments — what they detect, and what a positive result looks like."
        />

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {[
            {
              icon: Atom,
              accent: "bg-amber-500/15 text-amber-700 dark:text-amber-300",
              test: "Neutral FeCl\u2083 test",
              detects: "Phenolic \u2013OH group",
              positive: "Violet / green / blue colouration",
            },
            {
              icon: Sparkles,
              accent: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300",
              test: "NaHCO\u2083 effervescence test",
              detects: "\u2013COOH (carboxylic acid) group",
              positive: "Brisk effervescence of CO\u2082",
            },
            {
              icon: Eye,
              accent: "bg-violet-500/15 text-violet-700 dark:text-violet-300",
              test: "2,4-DNP test",
              detects: "Carbonyl group (>C=O)",
              positive: "Yellow / orange precipitate",
            },
            {
              icon: FlaskConical,
              accent: "bg-slate-500/15 text-slate-700 dark:text-slate-300",
              test: "Tollens' test",
              detects: "\u2013CHO (aldehyde) group",
              positive: "Silver mirror / grey precipitate",
            },
            {
              icon: Droplets,
              accent: "bg-cyan-500/15 text-cyan-700 dark:text-cyan-300",
              test: "Brown Ring test",
              detects: "NO\u2083\u207b (nitrate radical)",
              positive: "Brown ring at the acid-solution interface",
            },
            {
              icon: Beaker,
              accent: "bg-lime-500/15 text-lime-700 dark:text-lime-300",
              test: "BaCl\u2082 test",
              detects: "SO\u2084\u00b2\u207b (sulphate radical)",
              positive: "White precipitate insoluble in conc. HNO\u2083",
            },
            {
              icon: TestTube,
              accent: "bg-blue-500/15 text-blue-700 dark:text-blue-300",
              test: "AgNO\u2083 test",
              detects: "Cl\u207b (chloride radical)",
              positive: "Curdy white ppt soluble in excess NH\u2084OH",
            },
            {
              icon: Atom,
              accent: "bg-yellow-500/15 text-yellow-700 dark:text-yellow-300",
              test: "K\u2082CrO\u2084 / KI test",
              detects: "Pb\u00b2\u207a (Group I basic radical)",
              positive: "Yellow precipitate (PbCrO\u2084 or PbI\u2082)",
            },
          ].map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.test}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-primary/30"
              >
                <span
                  className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${t.accent}`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {t.test}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground/80">Detects:</span>{" "}
                    {t.detects}
                  </p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground/80">Positive result:</span>{" "}
                    {t.positive}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SAFETY */}
      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Lab safety"
            title="Safety guidelines to follow"
            description="A non-exhaustive list of safety practices to follow during chemistry practicals. Always defer to your teacher's instructions and your school's lab safety manual."
          />

          <div className="mt-10 rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-700 dark:text-amber-300">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <h3 className="font-display text-lg font-bold text-foreground">
                Pre-lab checklist
              </h3>
            </div>
            <ul className="mt-5 grid grid-cols-1 gap-2.5 md:grid-cols-2">
              {safety.map((s, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-lg border border-amber-500/15 bg-background/60 px-4 py-3 text-sm leading-relaxed text-foreground"
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500/20 font-mono text-[10px] font-bold text-amber-700 dark:text-amber-300">
                    {i + 1}
                  </span>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-xl border border-rose-500/25 bg-rose-500/5 p-5">
            <AlertTriangle className="h-5 w-5 shrink-0 text-rose-600" />
            <p className="text-sm leading-relaxed text-foreground/90">
              <span className="font-semibold text-rose-700 dark:text-rose-300">
                Emergency:{" "}
              </span>
              If any chemical comes into contact with skin or eyes, wash
              immediately with plenty of water for at least 15 minutes and
              notify the teacher. For acid spills on the bench, neutralise
              with sodium bicarbonate before cleaning.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-border bg-card p-8 text-center shadow-sm sm:flex-row sm:text-left">
          <div>
            <p className="font-display text-xl font-bold text-foreground">
              Ready to put this into practice?
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Jump back to the experiments and apply these reagents and tests.
            </p>
          </div>
          <Link
            href="/experiments"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <BookOpen className="h-4 w-4" />
            Browse experiments
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
