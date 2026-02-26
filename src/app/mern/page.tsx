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
          MERN Applications
        </h1>
        <p className="text-lg mb-12" style={{ color: "#cbd5e1" }}>
          Full-stack applications built with MongoDB, Express, React, and
          Node.js
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
              Social Media Platform
            </h3>
            <p className="mb-6" style={{ color: "#cbd5e1" }}>
              A full-featured social media application with user authentication,
              post creation, likes, comments, and real-time notifications.
            </p>
            <div className="mb-6">
              <p style={{ color: "#94a3b8" }} className="text-sm mb-2">
                Technologies:
              </p>
              <p style={{ color: "#cbd5e1" }}>
                MongoDB, Express, React, Node.js, Socket.io
              </p>
            </div>
            <a
              href="https://github.com/ahmed/social-media"
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
              Project Collaboration Tool
            </h3>
            <p className="mb-6" style={{ color: "#cbd5e1" }}>
              A comprehensive project management tool with team collaboration,
              task assignment, progress tracking, and file sharing capabilities.
            </p>
            <div className="mb-6">
              <p style={{ color: "#94a3b8" }} className="text-sm mb-2">
                Technologies:
              </p>
              <p style={{ color: "#cbd5e1" }}>
                MongoDB, Express, React, Node.js, AWS S3
              </p>
            </div>
            <a
              href="https://github.com/ahmed/collaboration-tool"
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
              Learning Management System
            </h3>
            <p className="mb-6" style={{ color: "#cbd5e1" }}>
              An LMS platform with course management, student enrollment,
              progress tracking, and online assessments with grading
              functionality.
            </p>
            <div className="mb-6">
              <p style={{ color: "#94a3b8" }} className="text-sm mb-2">
                Technologies:
              </p>
              <p style={{ color: "#cbd5e1" }}>
                MongoDB, Express, React, Node.js, Stripe API
              </p>
            </div>
            <a
              href="https://github.com/ahmed/lms-platform"
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
              Marketplace App
            </h3>
            <p className="mb-6" style={{ color: "#cbd5e1" }}>
              A multi-vendor marketplace with product listings, seller
              dashboard, order management, payment processing, and user reviews.
            </p>
            <div className="mb-6">
              <p style={{ color: "#94a3b8" }} className="text-sm mb-2">
                Technologies:
              </p>
              <p style={{ color: "#cbd5e1" }}>
                MongoDB, Express, React, Node.js, Stripe, Redis
              </p>
            </div>
            <a
              href="https://github.com/ahmed/marketplace"
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
