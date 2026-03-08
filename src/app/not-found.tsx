import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] w-full max-w-4xl flex-col items-center justify-center px-6 text-center text-slate-100">
      <p className="text-sm uppercase tracking-[0.22em] text-cyan-300">404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-xl text-base text-slate-300">
        The page you requested does not exist or was moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-lg bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
      >
        Return Home
      </Link>
    </div>
  );
}

