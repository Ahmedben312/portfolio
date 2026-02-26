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
    <div className="w-full py-12 px-6" style={{ backgroundColor: "#0f172a" }}>
      <div className="max-w-4xl mx-auto">
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
          Get In Touch
        </h1>
        <p className="text-lg mb-12" style={{ color: "#cbd5e1" }}>
          I&apos;d love to hear from you. Whether you have a question or just
          want to say hello, feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Contact Form */}
          <div>
            <h2
              className="text-2xl font-bold mb-6"
              style={{ color: "#00d9ff" }}
            >
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: "#cbd5e1" }}
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-opacity-10 focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: "#1a2332",
                    color: "#cbd5e1",
                    borderColor: "#00d9ff",
                  }}
                />
              </div>
              <div>
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: "#cbd5e1" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-opacity-10 focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: "#1a2332",
                    color: "#cbd5e1",
                    borderColor: "#00d9ff",
                  }}
                />
              </div>
              <div>
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: "#cbd5e1" }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-opacity-10 focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: "#1a2332",
                    color: "#cbd5e1",
                    borderColor: "#00d9ff",
                  }}
                />
              </div>
              <div>
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: "#cbd5e1" }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg bg-opacity-10 focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: "#1a2332",
                    color: "#cbd5e1",
                    borderColor: "#00d9ff",
                  }}
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg font-bold transition"
                style={{ backgroundColor: "#00d9ff", color: "#0f172a" }}
              >
                Send Message
              </button>
              {submitted && (
                <p style={{ color: "#00d9ff" }} className="text-sm">
                  Thank you! I&apos;ll get back to you soon.
                </p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2
              className="text-2xl font-bold mb-6"
              style={{ color: "#00d9ff" }}
            >
              Contact Information
            </h2>

            <div className="space-y-8">
              {/* Email */}
              <div
                className="p-6 rounded-lg"
                style={{ backgroundColor: "#1a2332" }}
              >
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: "#00d9ff" }}
                >
                  Email
                </h3>
                <a
                  href="mailto:ahmed@email.com"
                  className="text-lg"
                  style={{ color: "#cbd5e1" }}
                >
                  ahmed@email.com
                </a>
                <p style={{ color: "#94a3b8" }} className="text-sm mt-2">
                  Send me an email and I&apos;ll respond within 24 hours
                </p>
              </div>

              {/* LinkedIn */}
              <div
                className="p-6 rounded-lg"
                style={{ backgroundColor: "#1a2332" }}
              >
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: "#00d9ff" }}
                >
                  LinkedIn
                </h3>
                <a
                  href="https://linkedin.com/in/ahmed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg"
                  style={{ color: "#cbd5e1" }}
                >
                  linkedin.com/in/ahmed
                </a>
                <p style={{ color: "#94a3b8" }} className="text-sm mt-2">
                  Connect with me on LinkedIn to stay updated with my latest
                  work
                </p>
              </div>

              {/* Availability */}
              <div
                className="p-6 rounded-lg"
                style={{ backgroundColor: "#1a2332" }}
              >
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: "#00d9ff" }}
                >
                  Availability
                </h3>
                <p style={{ color: "#cbd5e1" }}>
                  Available for freelance projects, full-time positions, and
                  consulting
                </p>
                <p style={{ color: "#94a3b8" }} className="text-sm mt-2">
                  Response time: 24 hours
                </p>
              </div>

              {/* Social Links */}
              <div
                className="p-6 rounded-lg"
                style={{ backgroundColor: "#1a2332" }}
              >
                <h3
                  className="text-lg font-bold mb-4"
                  style={{ color: "#00d9ff" }}
                >
                  Follow
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com/in/ahmed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded"
                    style={{
                      backgroundColor: "#00d9ff",
                      color: "#0f172a",
                      fontWeight: "bold",
                    }}
                  >
                    LinkedIn
                  </a>
                  <a
                    href="mailto:ahmed@email.com"
                    className="px-4 py-2 rounded"
                    style={{
                      backgroundColor: "#00d9ff",
                      color: "#0f172a",
                      fontWeight: "bold",
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
