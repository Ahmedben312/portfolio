"use client";

import ImageCarousel from "@/components/ImageCarousel";
import Link from "next/link";

export default function FrontendProjects() {
  // Placeholder image URLs - user will replace these with actual project images
  const placeholderImages = Array.from(
    { length: 8 },
    (_, i) =>
      `https://via.placeholder.com/1200x600?text=Frontend+Project+${i + 1}`,
  );

  return (
    <div className="w-full py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/"
          className="mb-8 inline-block font-semibold text-lg"
          style={{ color: "#6366f1" }}
        >
          ← Back to Home
        </Link>

        <h1
          className="text-5xl md:text-6xl font-bold mb-4"
          style={{ color: "#6366f1" }}
        >
          Frontend Projects
        </h1>
        <p className="text-xl mb-16" style={{ color: "#6b7280" }}>
          React and Next.js applications with modern UI/UX design and responsive
          layouts
        </p>

        <div className="mb-20">
          <ImageCarousel
            images={placeholderImages}
            title="Project Screenshots"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div
            style={{ backgroundColor: "#f8f9fa" }}
            className="p-10 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition"
          >
            <h3
              className="text-3xl font-bold mb-6"
              style={{ color: "#6366f1" }}
            >
              E-commerce Platform
            </h3>
            <p className="mb-8 text-lg leading-relaxed" style={{ color: "#374151" }}>
              A full-featured e-commerce application built with React,
              TypeScript, and Tailwind CSS. Features include product catalog,
              shopping cart, user authentication, and payment integration.
            </p>
            <div className="mb-8">
              <p style={{ color: "#6b7280" }} className="text-sm font-semibold mb-2">
                Technologies:
              </p>
              <p style={{ color: "#6b7280" }}>
                React, TypeScript, Tailwind CSS, Redux, Stripe API
              </p>
            </div>
            <a
              href="https://github.com/ahmed/ecommerce"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-lg font-semibold text-lg transition hover:shadow-md"
              style={{
                backgroundColor: "#6366f1",
                color: "#ffffff",
              }}
            >
              View Repository →
            </a>
          </div>

          <div
            style={{ backgroundColor: "#f8f9fa" }}
            className="p-10 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition"
          >
            <h3
              className="text-3xl font-bold mb-6"
              style={{ color: "#6366f1" }}
            >
              Task Management App
            </h3>
            <p className="mb-8 text-lg leading-relaxed" style={{ color: "#374151" }}>
              A collaborative task management application with real-time
              updates, team collaboration, and project organization. Built with
              Next.js and Firebase.
            </p>
            <div className="mb-8">
              <p style={{ color: "#6b7280" }} className="text-sm font-semibold mb-2">
                Technologies:
              </p>
              <p style={{ color: "#6b7280" }}>
                Next.js, TypeScript, Firebase, Tailwind CSS
              </p>
            </div>
            <a
              href="https://github.com/ahmed/task-app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-lg font-semibold text-lg transition hover:shadow-md"
              style={{
                backgroundColor: "#6366f1",
                color: "#ffffff",
              }}
            >
              View Repository →
            </a>
          </div>

          <div
            style={{ backgroundColor: "#f8f9fa" }}
            className="p-10 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition"
          >
            <h3
              className="text-3xl font-bold mb-6"
              style={{ color: "#6366f1" }}
            >
              Analytics Dashboard
            </h3>
            <p className="mb-8 text-lg leading-relaxed" style={{ color: "#374151" }}>
              A data visualization dashboard with interactive charts and
              real-time analytics. Features include customizable widgets, date
              range filtering, and export functionality.
            </p>
            <div className="mb-8">
              <p style={{ color: "#6b7280" }} className="text-sm font-semibold mb-2">
                Technologies:
              </p>
              <p style={{ color: "#6b7280" }}>
                React, Chart.js, TypeScript, Tailwind CSS
              </p>
            </div>
            <a
              href="https://github.com/ahmed/analytics-dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-lg font-semibold text-lg transition hover:shadow-md"
              style={{
                backgroundColor: "#6366f1",
                color: "#ffffff",
              }}
            >
              View Repository →
            </a>
          </div>

          <div
            style={{ backgroundColor: "#f8f9fa" }}
            className="p-10 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition"
          >
            <h3
              className="text-3xl font-bold mb-6"
              style={{ color: "#6366f1" }}
            >
              Portfolio Website
            </h3>
            <p className="mb-8 text-lg leading-relaxed" style={{ color: "#374151" }}>
              A responsive portfolio website showcasing projects with image
              carousels, smooth scrolling, and modern design. Fully optimized
              and SEO-friendly.
            </p>
            <div className="mb-8">
              <p style={{ color: "#6b7280" }} className="text-sm font-semibold mb-2">
                Technologies:
              </p>
              <p style={{ color: "#6b7280" }}>
                Next.js, TypeScript, Tailwind CSS, Swiper
              </p>
            </div>
            <a
              href="https://github.com/ahmed/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-lg font-semibold text-lg transition hover:shadow-md"
              style={{
                backgroundColor: "#6366f1",
                color: "#ffffff",
              }}
            >
              View Repository →
            </a>
          </div>
        </div>

        <p style={{ color: "#9ca3af" }} className="text-center text-sm mt-16">
          Note: Replace placeholder images in the carousel with your actual
          project screenshots
        </p>
      </div>
    </div>
  );
}
