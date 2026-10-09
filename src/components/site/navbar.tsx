"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Menu,
  X,
  FlaskConical,
  ChevronDown,
  Beaker,
  Atom,
  Home,
  BookOpen,
  Info,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/experiments", label: "Experiments", icon: BookOpen },
  { href: "/about", label: "About", icon: Info },
  { href: "/reference", label: "Reference", icon: FlaskConical },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/65">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          aria-label="ChemPractical home"
        >
          <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white shadow-sm ring-1 ring-emerald-900/10 transition-transform group-hover:scale-105">
            <FlaskConical className="h-5 w-5" strokeWidth={2.2} />
            <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-amber-400 ring-2 ring-background" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold tracking-tight text-foreground">
              ChemPractical
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              KV Class 12 · CBSE
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group relative inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/60",
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
                {active && (
                  <span className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-primary" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground hover:bg-secondary md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "inline-flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    active
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-secondary",
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-2 border-t border-border/60 pt-2">
              <p className="px-3 pb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Categories
              </p>
              <Link
                href="/experiments#volumetric"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-foreground hover:bg-secondary"
              >
                <FlaskConical className="h-4 w-4 text-emerald-600" />
                Volumetric Analysis
              </Link>
              <Link
                href="/experiments#functional-group"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-foreground hover:bg-secondary"
              >
                <Atom className="h-4 w-4 text-amber-600" />
                Functional Groups
              </Link>
              <Link
                href="/experiments#salt-analysis"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-foreground hover:bg-secondary"
              >
                <Beaker className="h-4 w-4 text-teal-600" />
                Salt Analysis
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
