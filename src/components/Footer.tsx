export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0a0f1a" }} className="py-8 mt-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p style={{ color: "#64748b" }} className="text-sm">
          © 2024 Ahmed. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm">
          <a
            href="https://linkedin.com/in/ahmed"
            style={{ color: "#64748b" }}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-opacity-80"
          >
            LinkedIn
          </a>
          <a
            href="mailto:ahmed@email.com"
            style={{ color: "#64748b" }}
            className="hover:text-opacity-80"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
