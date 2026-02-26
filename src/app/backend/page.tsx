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
          Backend Projects
        </h1>
        <p className="text-lg mb-12" style={{ color: "#cbd5e1" }}>
          Node.js and Express APIs with database integration, authentication,
          and scalable architecture
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
              RESTful API
            </h3>
            <p className="mb-6" style={{ color: "#cbd5e1" }}>
              A comprehensive RESTful API with JWT authentication, role-based
              access control, and MongoDB integration. Includes comprehensive
              API documentation and testing.
            </p>
            <div className="mb-6">
              <p style={{ color: "#94a3b8" }} className="text-sm mb-2">
                Technologies:
              </p>
              <p style={{ color: "#cbd5e1" }}>
                Node.js, Express, MongoDB, JWT, Mongoose
              </p>
            </div>
            <a
              href="https://github.com/ahmed/rest-api"
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
              Microservices Architecture
            </h3>
            <p className="mb-6" style={{ color: "#cbd5e1" }}>
              A scalable microservices architecture with Node.js services,
              message queues, and database replication for high availability and
              performance.
            </p>
            <div className="mb-6">
              <p style={{ color: "#94a3b8" }} className="text-sm mb-2">
                Technologies:
              </p>
              <p style={{ color: "#cbd5e1" }}>
                Node.js, Express, RabbitMQ, PostgreSQL, Redis
              </p>
            </div>
            <a
              href="https://github.com/ahmed/microservices"
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
              Real-time Chat API
            </h3>
            <p className="mb-6" style={{ color: "#cbd5e1" }}>
              A real-time messaging API with WebSocket support, user presence,
              and message history. Built with Node.js and Socket.io for instant
              communication.
            </p>
            <div className="mb-6">
              <p style={{ color: "#94a3b8" }} className="text-sm mb-2">
                Technologies:
              </p>
              <p style={{ color: "#cbd5e1" }}>
                Node.js, Express, Socket.io, MongoDB, Redis
              </p>
            </div>
            <a
              href="https://github.com/ahmed/chat-api"
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
              File Management API
            </h3>
            <p className="mb-6" style={{ color: "#cbd5e1" }}>
              A secure file management API with cloud storage integration, file
              versioning, and access control. Supports S3 for scalable storage.
            </p>
            <div className="mb-6">
              <p style={{ color: "#94a3b8" }} className="text-sm mb-2">
                Technologies:
              </p>
              <p style={{ color: "#cbd5e1" }}>
                Node.js, Express, AWS S3, MongoDB, TypeScript
              </p>
            </div>
            <a
              href="https://github.com/ahmed/file-api"
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
