import Link from "next/link";
import { navLinks, profile, socialLinks } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10">
        <div className="flex flex-wrap items-center gap-3">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-2 py-1 text-sm text-slate-300 transition hover:bg-white/5 hover:text-cyan-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-6">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={
                item.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6">
          <p className="text-sm text-slate-400">
            {year} {profile.name}. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            Built with Next.js and deployed on Vercel.
          </p>
        </div>
      </div>
    </footer>
  );
}
