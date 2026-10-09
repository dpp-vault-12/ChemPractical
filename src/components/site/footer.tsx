import Link from "next/link";
import {
  FlaskConical,
  Mail,
  Github,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

const footerLinks = [
  {
    title: "Experiments",
    links: [
      { label: "All Experiments", href: "/experiments" },
      { label: "Volumetric Analysis", href: "/experiments#volumetric" },
      { label: "Functional Group Detection", href: "/experiments#functional-group" },
      { label: "Inorganic Salt Analysis", href: "/experiments#salt-analysis" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "About this record", href: "/about" },
      { label: "Reference & Reagents", href: "/reference" },
      { label: "Home", href: "/" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/60 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white shadow-sm">
                <FlaskConical className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-bold tracking-tight">
                  ChemPractical
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  KV Class 12 · CBSE
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A polished, multi-page digital chemistry practical record
              covering volumetric analysis, organic functional group detection,
              and inorganic salt analysis — based on the Kendriya Vidyalaya
              Class 12 CBSE syllabus.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="mailto:hello@chempractical.example"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:text-foreground hover:border-foreground/30"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:text-foreground hover:border-foreground/30"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <Link
                href="/experiments"
                className="ml-1 inline-flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <BookOpen className="h-4 w-4" />
                Browse experiments
              </Link>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title} className="md:col-span-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="group inline-flex items-center gap-1 text-sm text-foreground/80 transition-colors hover:text-primary"
                    >
                      {l.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Tip card */}
          <div className="md:col-span-1" />
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} ChemPractical. A digital
            adaptation of the KV Class 12 Chemistry practical record.
          </p>
          <p>
            Built for students · For educational reference only ·
            Always follow lab safety guidelines.
          </p>
        </div>
      </div>
    </footer>
  );
}
