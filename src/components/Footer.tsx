export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#f8f9fa", borderTop: "1px solid #e5e7eb" }}
      className="py-8 mt-16"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p style={{ color: "#6b7280" }} className="text-sm font-medium">
          © 2024 Ahmed. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm">
          <a
            href="https://linkedin.com/in/ahmed"
            style={{ color: "#6366f1" }}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition font-medium"
          >
            LinkedIn
          </a>
          <a
            href="mailto:ahmed@email.com"
            style={{ color: "#6366f1" }}
            className="hover:opacity-80 transition font-medium"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
