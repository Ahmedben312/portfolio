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
    <div className="w-full py-12 px-6" style={{ backgroundColor: "#0f172a" }}>
      <div className="max-w-6xl mx-auto">
        <Link
          href="/"
          className="mb-8 inline-block"
          style={{ color: "#00d9ff" }}
        >
          ← Back to Home
        </Link>

        <h1
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ color: "#00d9ff" }}
        >
          Frontend Projects
        </h1>
        <p className="text-lg mb-12" style={{ color: "#cbd5e1" }}>
          React and Next.js applications with modern UI/UX design and responsive
          layouts
        </p>

        <div className="mb-16">
          <ImageCarousel
            images={placeholderImages}
            title="Project Screenshots"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div
            style={{ backgroundColor: "#1a2332" }}
            className="p-8 rounded-lg"
          >
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: "#00d9ff" }}
            >
              E-commerce Platform
            </h3>
            <p className="mb-6" style={{ color: "#cbd5e1" }}>
              A full-featured e-commerce application built with React,
              TypeScript, and Tailwind CSS. Features include product catalog,
              shopping cart, user authentication, and payment integration.
            </p>
            <div className="mb-6">
              <p style={{ color: "#94a3b8" }} className="text-sm mb-2">
                Technologies:
              </p>
              <p style={{ color: "#cbd5e1" }}>
                React, TypeScript, Tailwind CSS, Redux, Stripe API
              </p>
            </div>
            <a
              href="https://github.com/ahmed/ecommerce"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 rounded"
              style={{
                backgroundColor: "#00d9ff",
                color: "#0f172a",
                fontWeight: "bold",
              }}
            >
              View Repository →
            </a>
          </div>

          <div
            style={{ backgroundColor: "#1a2332" }}
            className="p-8 rounded-lg"
          >
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: "#00d9ff" }}
            >
              Task Management App
            </h3>
            <p className="mb-6" style={{ color: "#cbd5e1" }}>
              A collaborative task management application with real-time
              updates, team collaboration, and project organization. Built with
              Next.js and Firebase.
            </p>
            <div className="mb-6">
              <p style={{ color: "#94a3b8" }} className="text-sm mb-2">
                Technologies:
              </p>
              <p style={{ color: "#cbd5e1" }}>
                Next.js, TypeScript, Firebase, Tailwind CSS
              </p>
            </div>
            <a
              href="https://github.com/ahmed/task-app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 rounded"
              style={{
                backgroundColor: "#00d9ff",
                color: "#0f172a",
                fontWeight: "bold",
              }}
            >
              View Repository →
            </a>
          </div>

          <div
            style={{ backgroundColor: "#1a2332" }}
            className="p-8 rounded-lg"
          >
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: "#00d9ff" }}
            >
              Analytics Dashboard
            </h3>
            <p className="mb-6" style={{ color: "#cbd5e1" }}>
              A data visualization dashboard with interactive charts and
              real-time analytics. Features include customizable widgets, date
              range filtering, and export functionality.
            </p>
            <div className="mb-6">
              <p style={{ color: "#94a3b8" }} className="text-sm mb-2">
                Technologies:
              </p>
              <p style={{ color: "#cbd5e1" }}>
                React, Chart.js, TypeScript, Tailwind CSS
              </p>
            </div>
            <a
              href="https://github.com/ahmed/analytics-dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 rounded"
              style={{
                backgroundColor: "#00d9ff",
                color: "#0f172a",
                fontWeight: "bold",
              }}
            >
              View Repository →
            </a>
          </div>

          <div
            style={{ backgroundColor: "#1a2332" }}
            className="p-8 rounded-lg"
          >
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: "#00d9ff" }}
            >
              Portfolio Website
            </h3>
            <p className="mb-6" style={{ color: "#cbd5e1" }}>
              A responsive portfolio website showcasing projects with image
              carousels, smooth scrolling, and modern design. Fully optimized
              and SEO-friendly.
            </p>
            <div className="mb-6">
              <p style={{ color: "#94a3b8" }} className="text-sm mb-2">
                Technologies:
              </p>
              <p style={{ color: "#cbd5e1" }}>
                Next.js, TypeScript, Tailwind CSS, Swiper
              </p>
            </div>
            <a
              href="https://github.com/ahmed/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 rounded"
              style={{
                backgroundColor: "#00d9ff",
                color: "#0f172a",
                fontWeight: "bold",
              }}
            >
              View Repository →
            </a>
          </div>
        </div>

        <p style={{ color: "#94a3b8" }} className="text-center text-sm mt-8">
          Note: Replace placeholder images in the carousel with your actual
          project screenshots
        </p>
      </div>
    </div>
  );
}
