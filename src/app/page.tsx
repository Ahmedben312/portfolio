import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center px-6 py-20"
        style={{ backgroundColor: "#0f172a" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{ color: "#00d9ff" }}
          >
            Hi, I&apos;m Ahmed
          </h1>
          <h2
            className="text-2xl md:text-4xl font-semibold mb-4"
            style={{ color: "#cbd5e1" }}
          >
            Full-Stack Developer & DevOps Engineer
          </h2>
          <p
            className="text-lg mb-8 max-w-2xl mx-auto"
            style={{ color: "#94a3b8" }}
          >
            Building modern web applications with MERN stack, TypeScript, and
            Next.js. Deploying and scaling with Docker, Kubernetes, and AWS.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/frontend"
              className="px-8 py-3 rounded-lg font-semibold transition"
              style={{ backgroundColor: "#00d9ff", color: "#0f172a" }}
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 rounded-lg font-semibold transition"
              style={{ borderColor: "#00d9ff", color: "#00d9ff" }}
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6" style={{ backgroundColor: "#0f172a" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8" style={{ color: "#00d9ff" }}>
            About Me
          </h2>
          <p
            className="text-lg mb-6 leading-relaxed"
            style={{ color: "#cbd5e1" }}
          >
            I&apos;m a full-stack developer with 5+ years of experience building
            scalable web applications. I specialize in the MERN stack (MongoDB,
            Express, React, Node.js), TypeScript, and modern frameworks like
            Next.js.
          </p>
          <p
            className="text-lg mb-6 leading-relaxed"
            style={{ color: "#cbd5e1" }}
          >
            My expertise spans frontend architecture with React and Next.js,
            backend API development with Node.js and Express, and comprehensive
            DevOps solutions using Docker, Kubernetes, and AWS.
          </p>
          <p className="text-lg leading-relaxed" style={{ color: "#cbd5e1" }}>
            I&apos;m passionate about clean code, testing, continuous
            improvement, and delivering high-quality solutions that solve
            real-world problems.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6" style={{ backgroundColor: "#0f172a" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12" style={{ color: "#00d9ff" }}>
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend Skills */}
            <div
              className="p-8 rounded-lg"
              style={{ backgroundColor: "#1a2332" }}
            >
              <div className="text-4xl mb-4">⚛️</div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: "#00d9ff" }}
              >
                Frontend
              </h3>
              <p style={{ color: "#cbd5e1" }}>
                React, Next.js, TypeScript, Tailwind CSS, Responsive Design,
                State Management (Redux/Context)
              </p>
            </div>
            {/* Backend Skills */}
            <div
              className="p-8 rounded-lg"
              style={{ backgroundColor: "#1a2332" }}
            >
              <div className="text-4xl mb-4">🚀</div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: "#00d9ff" }}
              >
                Backend
              </h3>
              <p style={{ color: "#cbd5e1" }}>
                Node.js, Express, MongoDB, PostgreSQL, REST APIs, Authentication
                & Authorization
              </p>
            </div>
            {/* DevOps Skills */}
            <div
              className="p-8 rounded-lg"
              style={{ backgroundColor: "#1a2332" }}
            >
              <div className="text-4xl mb-4">⚙️</div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: "#00d9ff" }}
              >
                DevOps
              </h3>
              <p style={{ color: "#cbd5e1" }}>
                Docker, Kubernetes, CI/CD (GitHub Actions), AWS (EC2, S3, RDS),
                Linux
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-20 px-6" style={{ backgroundColor: "#0f172a" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12" style={{ color: "#00d9ff" }}>
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/frontend" className="group">
              <div
                className="p-8 rounded-lg h-full transition transform group-hover:scale-105 cursor-pointer"
                style={{ backgroundColor: "#1a2332" }}
              >
                <div className="text-4xl mb-4">⚛️</div>
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ color: "#00d9ff" }}
                >
                  Frontend Projects
                </h3>
                <p style={{ color: "#cbd5e1" }}>
                  React and Next.js applications with modern UI/UX design
                </p>
                <p className="mt-4" style={{ color: "#94a3b8" }}>
                  Click to view →
                </p>
              </div>
            </Link>
            <Link href="/backend" className="group">
              <div
                className="p-8 rounded-lg h-full transition transform group-hover:scale-105 cursor-pointer"
                style={{ backgroundColor: "#1a2332" }}
              >
                <div className="text-4xl mb-4">🚀</div>
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ color: "#00d9ff" }}
                >
                  Backend Projects
                </h3>
                <p style={{ color: "#cbd5e1" }}>
                  Node.js and Express APIs with database integration
                </p>
                <p className="mt-4" style={{ color: "#94a3b8" }}>
                  Click to view →
                </p>
              </div>
            </Link>
            <Link href="/devops" className="group">
              <div
                className="p-8 rounded-lg h-full transition transform group-hover:scale-105 cursor-pointer"
                style={{ backgroundColor: "#1a2332" }}
              >
                <div className="text-4xl mb-4">⚙️</div>
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ color: "#00d9ff" }}
                >
                  DevOps Projects
                </h3>
                <p style={{ color: "#cbd5e1" }}>
                  Docker, Kubernetes, and CI/CD pipeline automation
                </p>
                <p className="mt-4" style={{ color: "#94a3b8" }}>
                  Click to view →
                </p>
              </div>
            </Link>
            <Link href="/mern" className="group">
              <div
                className="p-8 rounded-lg h-full transition transform group-hover:scale-105 cursor-pointer"
                style={{ backgroundColor: "#1a2332" }}
              >
                <div className="text-4xl mb-4">🔗</div>
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ color: "#00d9ff" }}
                >
                  MERN Applications
                </h3>
                <p style={{ color: "#cbd5e1" }}>
                  Full-stack applications with MongoDB, Express, React, and
                  Node.js
                </p>
                <p className="mt-4" style={{ color: "#94a3b8" }}>
                  Click to view →
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
