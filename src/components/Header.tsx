"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, profile } from "@/data/portfolio";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-slate-100 transition hover:text-cyan-300"
        >
          {profile.name}
        </Link>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-slate-100 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <span className="sr-only">Toggle menu</span>
          <span className="text-xl leading-none">{isOpen ? "x" : "+"}</span>
        </button>

        <div
          id="mobile-navigation"
          className={`${
            isOpen ? "flex" : "hidden"
          } absolute left-0 top-full w-full flex-col gap-4 border-b border-white/10 bg-slate-950/95 px-6 py-6 md:static md:flex md:w-auto md:flex-row md:items-center md:gap-2 md:border-0 md:bg-transparent md:p-0`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`rounded-md px-3 py-2 text-sm font-medium tracking-wide transition ${
                isActive(link.href)
                  ? "bg-cyan-400/15 text-cyan-300"
                  : "text-slate-200 hover:bg-white/5 hover:text-cyan-300"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
