import type { Metadata } from "next";
import Link from "next/link";
import {
  categories,
  featuredProjects,
  processSteps,
  profile,
  skillGroups,
  stats,
} from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Ahmed | Portfolio",
  description:
    "Portfolio homepage for Ahmed, a full-stack developer and DevOps engineer shipping reliable web products.",
};

export default function Home() {
  const categoryItems = Object.values(categories);

  return (
    <div className="relative overflow-hidden bg-slate-950 text-slate-100">
      <div className="absolute inset-x-0 top-0 h-[460px] bg-[radial-gradient(circle_at_top,#0e749050,transparent_68%)]" />
      <div className="absolute right-0 top-56 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute left-0 top-[42rem] h-80 w-80 rounded-full bg-amber-300/10 blur-3xl" />

      <section className="relative mx-auto w-full max-w-6xl px-6 pb-16 pt-20 md:pt-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200">
              Available for freelance and full-time roles
            </p>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
              {profile.name}
              <span className="block text-cyan-300">{profile.role}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
              {profile.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-lg bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Work With Me
              </Link>
              <Link
                href="/frontend"
                className="rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-cyan-300"
              >
                Explore Projects
              </Link>
            </div>
          </div>

          <aside className="rounded-2xl border border-white/10 bg-slate-900/70 p-7">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Snapshot
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-2xl font-semibold text-slate-50">{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm text-slate-400">
              Based in {profile.location}. Open to remote collaboration across product, platform, and infrastructure work.
            </p>
          </aside>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 py-14">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Core Expertise
          </h2>
          <Link
            href="/contact"
            className="text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
          >
            Discuss a project {"->"}
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-white/10 bg-slate-900/65 p-6"
            >
              <h3 className="text-xl font-semibold text-slate-100">{group.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{group.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-white/15 px-3 py-1 text-xs text-slate-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Project Domains
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">
          Choose a domain to see detailed project outcomes, architecture decisions, and implementation stacks.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {categoryItems.map((category) => (
            <Link
              key={category.slug}
              href={`/${category.slug}`}
              className="group rounded-2xl border border-white/10 bg-slate-900/70 p-7 transition hover:border-cyan-300/45 hover:bg-slate-900"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">
                {category.label}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-50">
                {category.strapline}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {category.description}
              </p>
              <p className="mt-4 text-sm font-semibold text-cyan-300">
                Open category {"->"}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Featured Work
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-7"
            >
              <h3 className="text-2xl font-semibold text-slate-50">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{project.summary}</p>
              <p className="mt-4 rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-100">
                {project.impact}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 px-3 py-1 text-xs text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          How I Work
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-2xl border border-white/10 bg-slate-900/70 p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Step 0{index + 1}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-slate-50">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-8">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-500/20 via-sky-500/10 to-amber-300/20 p-8 md:p-10">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
            Ready to upgrade your product or platform?
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-200">
            I can help you ship faster with robust architecture, smooth user experiences, and a reliable deployment workflow.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Contact Me
            </Link>
            <Link
              href="/backend"
              className="rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-cyan-300"
            >
              Review Backend Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
