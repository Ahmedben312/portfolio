"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      style={{ backgroundColor: "#ffffff", borderBottom: "1px solid #e5e7eb" }}
      className="sticky top-0 z-50 shadow-sm"
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold"
          style={{ color: "#6366f1" }}
        >
          Ahmed
        </Link>

        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="w-6 h-0.5"
            style={{ backgroundColor: "#374151" }}
          ></span>
          <span
            className="w-6 h-0.5"
            style={{ backgroundColor: "#374151" }}
          ></span>
          <span
            className="w-6 h-0.5"
            style={{ backgroundColor: "#374151" }}
          ></span>
        </button>

        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex absolute md:relative top-full md:top-auto left-0 md:left-auto right-0 md:right-auto flex-col md:flex-row gap-6 bg-white md:bg-transparent p-6 md:p-0 w-full md:w-auto shadow-md md:shadow-none border-b md:border-b-0 border-gray-100`}
        >
          <Link
            href="/frontend"
            style={{ color: "#374151" }}
            className="hover:text-opacity-80 transition font-medium"
          >
            Frontend
          </Link>
          <Link
            href="/backend"
            style={{ color: "#374151" }}
            className="hover:text-opacity-80 transition font-medium"
          >
            Backend
          </Link>
          <Link
            href="/devops"
            style={{ color: "#374151" }}
            className="hover:text-opacity-80 transition font-medium"
          >
            DevOps
          </Link>
          <Link
            href="/mern"
            style={{ color: "#374151" }}
            className="hover:text-opacity-80 transition font-medium"
          >
            MERN
          </Link>
          <Link
            href="/contact"
            style={{ color: "#6366f1" }}
            className="font-semibold transition"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
