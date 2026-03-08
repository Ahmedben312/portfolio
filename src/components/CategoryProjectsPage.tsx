import Link from "next/link";
import {
  categories,
  type CategorySlug,
  projectsByCategory,
} from "@/data/portfolio";

interface CategoryProjectsPageProps {
  slug: CategorySlug;
}

export default function CategoryProjectsPage({
  slug,
}: CategoryProjectsPageProps) {
  const category = categories[slug];
  const projects = projectsByCategory[slug];

  return (
    <div className="relative overflow-hidden bg-slate-950 text-slate-100">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
        <Link
          href="/"
          className="mb-8 inline-flex items-center rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300/60 hover:text-cyan-300"
        >
          {"<- Back to Home"}
        </Link>

        <section className="mb-14 space-y-6">
          <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">
            {category.label}
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
            {category.heading}
          </h1>
          <p className="max-w-3xl text-lg text-slate-300">{category.strapline}</p>
          <p className="max-w-3xl text-base leading-7 text-slate-400">
            {category.description}
          </p>
          <ul className="grid gap-3 md:grid-cols-3">
            {category.outcomes.map((outcome) => (
              <li
                key={outcome}
                className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200"
              >
                {outcome}
              </li>
            ))}
          </ul>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group rounded-2xl border border-white/10 bg-slate-900/60 p-7 transition hover:border-cyan-300/50 hover:bg-slate-900"
            >
              <h2 className="text-2xl font-semibold tracking-tight text-slate-100">
                {project.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {project.summary}
              </p>
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
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-cyan-300/60 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-300/10"
                >
                  Repository {"->"}
                </a>
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-white/35 hover:bg-white/5"
                  >
                    Live Demo {"->"}
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </section>

        <section className="mt-14 rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-500/15 via-sky-500/10 to-amber-400/15 p-8">
          <h3 className="text-2xl font-semibold text-slate-50">
            Need this kind of build for your product?
          </h3>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">
            I help teams ship stable releases quickly, with clear architecture
            and production-grade delivery workflows.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Start a Conversation
          </Link>
        </section>
      </div>
    </div>
  );
}
