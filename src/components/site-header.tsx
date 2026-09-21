"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/cv/Ivica-Stojanoski-CV.pdf", label: "CV", external: true },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background,border-color,backdrop-filter] duration-300",
        scrolled
          ? "border-b border-white/8 bg-[#0d100f]/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:h-16 sm:px-8">
        <Link
          href="/"
          className="font-display text-lg tracking-tight text-[var(--ink)] transition-opacity hover:opacity-80 sm:text-xl"
        >
          Ivica Stojanoski
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2" aria-label="Primary">
          {links.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-2.5 py-1.5 text-sm text-[var(--ink-muted)] transition-colors hover:text-[var(--ink)] sm:px-3"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-2.5 py-1.5 text-sm text-[var(--ink-muted)] transition-colors hover:text-[var(--ink)] sm:px-3"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}
