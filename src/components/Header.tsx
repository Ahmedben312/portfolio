"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      style={{ backgroundColor: "#1a2332" }}
      className="sticky top-0 z-50"
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold"
          style={{ color: "#00d9ff" }}
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
            style={{ backgroundColor: "#cbd5e1" }}
          ></span>
          <span
            className="w-6 h-0.5"
            style={{ backgroundColor: "#cbd5e1" }}
          ></span>
          <span
            className="w-6 h-0.5"
            style={{ backgroundColor: "#cbd5e1" }}
          ></span>
        </button>

        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex absolute md:relative top-full md:top-auto left-0 md:left-auto right-0 md:right-auto flex-col md:flex-row gap-6 bg-[#1a2332] md:bg-transparent p-6 md:p-0 w-full md:w-auto`}
          style={{ backgroundColor: "#1a2332" }}
        >
          <Link
            href="/frontend"
            style={{ color: "#cbd5e1" }}
            className="hover:text-opacity-80"
          >
            Frontend
          </Link>
          <Link
            href="/backend"
            style={{ color: "#cbd5e1" }}
            className="hover:text-opacity-80"
          >
            Backend
          </Link>
          <Link
            href="/devops"
            style={{ color: "#cbd5e1" }}
            className="hover:text-opacity-80"
          >
            DevOps
          </Link>
          <Link
            href="/mern"
            style={{ color: "#cbd5e1" }}
            className="hover:text-opacity-80"
          >
            MERN
          </Link>
          <Link
            href="/contact"
            style={{ color: "#cbd5e1" }}
            className="hover:text-opacity-80"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
