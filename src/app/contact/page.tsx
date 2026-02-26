"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Create mailto link
    const mailtoLink = `mailto:ahmed@email.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    )}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="w-full py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
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
          Get In Touch
        </h1>
        <p className="text-xl mb-16" style={{ color: "#6b7280" }}>
          I&apos;d love to hear from you. Whether you have a question or just
          want to say hello, feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-12">
          {/* Contact Form */}
          <div>
            <h2
              className="text-3xl font-bold mb-8"
              style={{ color: "#6366f1" }}
            >
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  className="block text-sm font-semibold mb-3"
                  style={{ color: "#374151" }}
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 border"
                  style={{
                    backgroundColor: "#f8f9fa",
                    color: "#374151",
                    borderColor: "#e5e7eb",
                  }}
                />
              </div>
              <div>
                <label
                  className="block text-sm font-semibold mb-3"
                  style={{ color: "#374151" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 border"
                  style={{
                    backgroundColor: "#f8f9fa",
                    color: "#374151",
                    borderColor: "#e5e7eb",
                  }}
                />
              </div>
              <div>
                <label
                  className="block text-sm font-semibold mb-3"
                  style={{ color: "#374151" }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 border"
                  style={{
                    backgroundColor: "#f8f9fa",
                    color: "#374151",
                    borderColor: "#e5e7eb",
                  }}
                />
              </div>
              <div>
                <label
                  className="block text-sm font-semibold mb-3"
                  style={{ color: "#374151" }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 border"
                  style={{
                    backgroundColor: "#f8f9fa",
                    color: "#374151",
                    borderColor: "#e5e7eb",
                  }}
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg font-bold text-lg transition hover:shadow-lg"
                style={{ backgroundColor: "#6366f1", color: "#ffffff" }}
              >
                Send Message
              </button>
              {submitted && (
                <p style={{ color: "#6366f1" }} className="text-sm font-semibold">
                  ✓ Thank you! I&apos;ll get back to you soon.
                </p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2
              className="text-3xl font-bold mb-8"
              style={{ color: "#6366f1" }}
            >
              Contact Information
            </h2>

            <div className="space-y-6">
              {/* Email */}
              <div
                className="p-8 rounded-2xl border"
                style={{ backgroundColor: "#f8f9fa", borderColor: "#e5e7eb" }}
              >
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: "#6366f1" }}
                >
                  Email
                </h3>
                <a
                  href="mailto:ahmed@email.com"
                  className="text-lg font-medium hover:underline"
                  style={{ color: "#6366f1" }}
                >
                  ahmed@email.com
                </a>
                <p style={{ color: "#6b7280" }} className="text-sm mt-3">
                  Send me an email and I&apos;ll respond within 24 hours
                </p>
              </div>

              {/* LinkedIn */}
              <div
                className="p-8 rounded-2xl border"
                style={{ backgroundColor: "#f8f9fa", borderColor: "#e5e7eb" }}
              >
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: "#6366f1" }}
                >
                  LinkedIn
                </h3>
                <a
                  href="https://linkedin.com/in/ahmed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium hover:underline"
                  style={{ color: "#6366f1" }}
                >
                  linkedin.com/in/ahmed
                </a>
                <p style={{ color: "#6b7280" }} className="text-sm mt-3">
                  Connect with me on LinkedIn to stay updated with my latest
                  work
                </p>
              </div>

              {/* Availability */}
              <div
                className="p-8 rounded-2xl border"
                style={{ backgroundColor: "#f8f9fa", borderColor: "#e5e7eb" }}
              >
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: "#6366f1" }}
                >
                  Availability
                </h3>
                <p style={{ color: "#374151" }} className="font-medium">
                  Available for freelance projects, full-time positions, and
                  consulting
                </p>
                <p style={{ color: "#6b7280" }} className="text-sm mt-3">
                  Response time: 24 hours
                </p>
              </div>

              {/* Social Links */}
              <div
                className="p-8 rounded-2xl border"
                style={{ backgroundColor: "#f8f9fa", borderColor: "#e5e7eb" }}
              >
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: "#6366f1" }}
                >
                  Connect
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com/in/ahmed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-lg font-semibold text-sm transition hover:shadow-md"
                    style={{
                      backgroundColor: "#6366f1",
                      color: "#ffffff",
                    }}
                  >
                    LinkedIn
                  </a>
                  <a
                    href="mailto:ahmed@email.com"
                    className="px-6 py-3 rounded-lg font-semibold text-sm border-2 transition hover:bg-indigo-50"
                    style={{
                      borderColor: "#6366f1",
                      color: "#6366f1",
                    }}
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
