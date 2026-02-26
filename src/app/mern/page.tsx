"use client";

import ImageCarousel from "@/components/ImageCarousel";
import Link from "next/link";

export default function MernProjects() {
  // Placeholder image URLs - user will replace these with actual project images
  const placeholderImages = Array.from(
    { length: 8 },
    (_, i) => `https://via.placeholder.com/1200x600?text=MERN+Project+${i + 1}`,
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
          MERN Applications
        </h1>
        <p className="text-xl mb-16" style={{ color: "#6b7280" }}>
          Full-stack applications built with MongoDB, Express, React, and
          Node.js
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
              Social Media Platform
            </h3>
            <p className="mb-8 text-lg leading-relaxed" style={{ color: "#374151" }}>
              A full-featured social media application with user authentication,
              post creation, likes, comments, and real-time notifications.
            </p>
            <div className="mb-8">
              <p style={{ color: "#6b7280" }} className="text-sm font-semibold mb-2">
                Technologies:
              </p>
              <p style={{ color: "#6b7280" }}>
                MongoDB, Express, React, Node.js, Socket.io
              </p>
            </div>
            <a
              href="https://github.com/ahmed/social-media"
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
              Project Collaboration Tool
            </h3>
            <p className="mb-8 text-lg leading-relaxed" style={{ color: "#374151" }}>
              A comprehensive project management tool with team collaboration,
              task assignment, progress tracking, and file sharing capabilities.
            </p>
            <div className="mb-8">
              <p style={{ color: "#6b7280" }} className="text-sm font-semibold mb-2">
                Technologies:
              </p>
              <p style={{ color: "#6b7280" }}>
                MongoDB, Express, React, Node.js, AWS S3
              </p>
            </div>
            <a
              href="https://github.com/ahmed/collaboration-tool"
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
              Learning Management System
            </h3>
            <p className="mb-8 text-lg leading-relaxed" style={{ color: "#374151" }}>
              An LMS platform with course management, student enrollment,
              progress tracking, and online assessments with grading
              functionality.
            </p>
            <div className="mb-8">
              <p style={{ color: "#6b7280" }} className="text-sm font-semibold mb-2">
                Technologies:
              </p>
              <p style={{ color: "#6b7280" }}>
                MongoDB, Express, React, Node.js, Stripe API
              </p>
            </div>
            <a
              href="https://github.com/ahmed/lms-platform"
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
              Marketplace App
            </h3>
            <p className="mb-8 text-lg leading-relaxed" style={{ color: "#374151" }}>
              A multi-vendor marketplace with product listings, seller
              dashboard, order management, payment processing, and user reviews.
            </p>
            <div className="mb-8">
              <p style={{ color: "#6b7280" }} className="text-sm font-semibold mb-2">
                Technologies:
              </p>
              <p style={{ color: "#6b7280" }}>
                MongoDB, Express, React, Node.js, Stripe, Redis
              </p>
            </div>
            <a
              href="https://github.com/ahmed/marketplace"
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
