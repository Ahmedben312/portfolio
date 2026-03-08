"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { profile, socialLinks } from "@/data/portfolio";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactSection() {
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const mailtoHref = useMemo(() => {
    const subject = formData.subject || "Project inquiry";
    const body = [
      `Name: ${formData.name || "-"}`,
      `Email: ${formData.email || "-"}`,
      "",
      "Message:",
      formData.message || "-",
    ].join("\n");

    return `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [formData.email, formData.message, formData.name, formData.subject]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = mailtoHref;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <div className="relative overflow-hidden bg-slate-950 text-slate-100">
      <div className="absolute inset-x-0 top-0 h-[360px] bg-[radial-gradient(circle_at_top,#0891b250,transparent_70%)]" />
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
        <Link
          href="/"
          className="mb-8 inline-flex items-center rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300/60 hover:text-cyan-300"
        >
          {"<- Back to Home"}
        </Link>

        <section className="mb-12">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Let us build something useful.
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
            Tell me about your product, timeline, and constraints. I will reply
            quickly with a practical plan.
          </p>
        </section>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-2xl border border-white/10 bg-slate-900/65 p-7 md:p-8">
            <h2 className="text-2xl font-semibold text-slate-50">Send a message</h2>
            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-slate-300">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-white/15 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-300/60"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-slate-300">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-white/15 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-300/60"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm text-slate-300">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-white/15 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-300/60"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={7}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-white/15 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-300/60"
                />
              </div>
              <button
                type="submit"
                className="rounded-lg bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Open email draft
              </button>
              {submitted ? (
                <p className="text-sm font-medium text-cyan-200">
                  Email draft created. I will respond within 24 hours.
                </p>
              ) : null}
            </form>
          </section>

          <aside className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-slate-900/65 p-7">
              <h3 className="text-xl font-semibold text-slate-50">
                Contact details
              </h3>
              <p className="mt-4 text-sm text-slate-300">Email</p>
              <a
                href={`mailto:${profile.email}`}
                className="text-base font-medium text-cyan-300 hover:text-cyan-200"
              >
                {profile.email}
              </a>
              <p className="mt-4 text-sm text-slate-300">Location</p>
              <p className="text-base font-medium text-slate-100">
                {profile.location}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/65 p-7">
              <h3 className="text-xl font-semibold text-slate-50">Elsewhere</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-300/60 hover:text-cyan-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-500/20 via-sky-500/10 to-amber-400/20 p-7">
              <h3 className="text-xl font-semibold text-slate-50">
                Engagement model
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                <li>Product-focused freelance support</li>
                <li>Platform and DevOps modernization</li>
                <li>Architecture and delivery consulting</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

