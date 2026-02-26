"use client";

import ImageCarousel from "@/components/ImageCarousel";
import Link from "next/link";

export default function BackendProjects() {
  // Placeholder image URLs - user will replace these with actual project images
  const placeholderImages = Array.from(
    { length: 8 },
    (_, i) =>
      `https://via.placeholder.com/1200x600?text=Backend+Project+${i + 1}`,
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
          Backend Projects
        </h1>
        <p className="text-xl mb-16" style={{ color: "#6b7280" }}>
          Node.js and Express APIs with database integration, authentication,
          and scalable architecture
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
              RESTful API
            </h3>
            <p className="mb-8 text-lg leading-relaxed" style={{ color: "#374151" }}>
              A comprehensive RESTful API with JWT authentication, role-based
              access control, and MongoDB integration. Includes comprehensive
              API documentation and testing.
            </p>
            <div className="mb-8">
              <p style={{ color: "#6b7280" }} className="text-sm font-semibold mb-2">
                Technologies:
              </p>
              <p style={{ color: "#6b7280" }}>
                Node.js, Express, MongoDB, JWT, Mongoose
              </p>
            </div>
            <a
              href="https://github.com/ahmed/rest-api"
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
              Microservices Architecture
            </h3>
            <p className="mb-8 text-lg leading-relaxed" style={{ color: "#374151" }}>
              A scalable microservices architecture with Node.js services,
              message queues, and database replication for high availability and
              performance.
            </p>
            <div className="mb-8">
              <p style={{ color: "#6b7280" }} className="text-sm font-semibold mb-2">
                Technologies:
              </p>
              <p style={{ color: "#6b7280" }}>
                Node.js, Express, RabbitMQ, PostgreSQL, Redis
              </p>
            </div>
            <a
              href="https://github.com/ahmed/microservices"
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
              Real-time Chat API
            </h3>
            <p className="mb-8 text-lg leading-relaxed" style={{ color: "#374151" }}>
              A real-time messaging API with WebSocket support, user presence,
              and message history. Built with Node.js and Socket.io for instant
              communication.
            </p>
            <div className="mb-8">
              <p style={{ color: "#6b7280" }} className="text-sm font-semibold mb-2">
                Technologies:
              </p>
              <p style={{ color: "#6b7280" }}>
                Node.js, Express, Socket.io, MongoDB, Redis
              </p>
            </div>
            <a
              href="https://github.com/ahmed/chat-api"
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
              File Management API
            </h3>
            <p className="mb-8 text-lg leading-relaxed" style={{ color: "#374151" }}>
              A secure file management API with cloud storage integration, file
              versioning, and access control. Supports S3 for scalable storage.
            </p>
            <div className="mb-8">
              <p style={{ color: "#6b7280" }} className="text-sm font-semibold mb-2">
                Technologies:
              </p>
              <p style={{ color: "#6b7280" }}>
                Node.js, Express, AWS S3, MongoDB, TypeScript
              </p>
            </div>
            <a
              href="https://github.com/ahmed/file-api"
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
