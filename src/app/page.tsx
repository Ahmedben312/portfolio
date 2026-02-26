import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-6xl md:text-8xl font-bold mb-8"
            style={{ color: "#6366f1" }}
          >
            Hi, I&apos;m Ahmed
          </h1>
          <h2
            className="text-3xl md:text-5xl font-semibold mb-8"
            style={{ color: "#374151" }}
          >
            Full-Stack Developer & DevOps Engineer
          </h2>
          <p
            className="text-xl mb-12 max-w-3xl mx-auto"
            style={{ color: "#6b7280" }}
          >
            Building modern web applications with MERN stack, TypeScript, and
            Next.js. Deploying and scaling with Docker, Kubernetes, and AWS.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Link
              href="/frontend"
              className="px-10 py-4 rounded-lg font-semibold transition hover:shadow-lg text-lg"
              style={{ backgroundColor: "#6366f1", color: "#ffffff" }}
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="px-10 py-4 border-2 rounded-lg font-semibold transition hover:bg-indigo-50 text-lg"
              style={{ borderColor: "#6366f1", color: "#6366f1" }}
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold mb-12" style={{ color: "#6366f1" }}>
            About Me
          </h2>
          <div className="space-y-8">
            <p
              className="text-xl leading-relaxed"
            style={{ color: "#374151" }}
          >
                I&apos;m a full-stack developer with 5+ years of experience building
                scalable web applications. I specialize in the MERN stack (MongoDB,
                Express, React, Node.js), TypeScript, and modern frameworks like
                Next.js.
              </p>
              <p
                className="text-xl leading-relaxed"
                style={{ color: "#374151" }}
              >
                My expertise spans frontend architecture with React and Next.js,
                backend API development with Node.js and Express, and comprehensive
                DevOps solutions using Docker, Kubernetes, and AWS.
              </p>
              <p className="text-xl leading-relaxed" style={{ color: "#374151" }}>
                I&apos;m passionate about clean code, testing, continuous
                improvement, and delivering high-quality solutions that solve
                real-world problems.
              </p>
            </div>
          </div>
        </section>

      {/* Skills Section */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16" style={{ color: "#6366f1" }}>
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Frontend Skills */}
            <div className="p-10 rounded-2xl shadow-sm hover:shadow-lg transition bg-white border border-gray-200">
              <div className="text-6xl mb-6">⚛️</div>
              <h3
                className="text-2xl font-bold mb-6"
                style={{ color: "#6366f1" }}
              >
                  Frontend
                </h3>
                <p className="text-lg leading-relaxed" style={{ color: "#6b7280" }}>
                  React, Next.js, TypeScript, Tailwind CSS, Responsive Design,
                  State Management (Redux/Context)
                </p>
              </div>
              {/* Backend Skills */}
              <div className="p-10 rounded-2xl shadow-sm hover:shadow-lg transition bg-white border border-gray-200">
                <div className="text-6xl mb-6">🚀</div>
                <h3
                  className="text-2xl font-bold mb-6"
                style={{ color: "#6366f1" }}
              >
                  Backend
                </h3>
                <p className="text-lg leading-relaxed" style={{ color: "#6b7280" }}>
                  Node.js, Express, MongoDB, PostgreSQL, REST APIs, Authentication
                  & Authorization
                </p>
              </div>
              {/* DevOps Skills */}
              <div className="p-10 rounded-2xl shadow-sm hover:shadow-lg transition bg-white border border-gray-200">
                <div className="text-6xl mb-6">⚙️</div>
                <h3
                  className="text-2xl font-bold mb-6"
                style={{ color: "#6366f1" }}
              >
                  DevOps
                </h3>
                <p className="text-lg leading-relaxed" style={{ color: "#6b7280" }}>
                  Docker, Kubernetes, CI/CD (GitHub Actions), AWS (EC2, S3, RDS),
                  Linux
                </p>
              </div>
            </div>
          </div>
        </section>

      {/* Projects Preview */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16" style={{ color: "#6366f1" }}>
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <Link href="/frontend" className="group">
                <div className="p-10 rounded-2xl h-full transition duration-300 cursor-pointer border border-gray-200 shadow-sm group-hover:shadow-xl group-hover:border-indigo-300 bg-white group-hover:bg-indigo-50">
                  <div className="text-6xl mb-6">⚛️</div>
                  <h3
                    className="text-3xl font-bold mb-4"
                  style={{ color: "#6366f1" }}
                >
                    Frontend Projects
                  </h3>
                  <p className="text-lg mb-6" style={{ color: "#374151" }}>
                    React and Next.js applications with modern UI/UX design
                  </p>
                  <p className="text-lg font-semibold" style={{ color: "#9ca3af" }}>
                    Click to view →
                  </p>
                </div>
              </Link>
              <Link href="/backend" className="group">
                <div className="p-10 rounded-2xl h-full transition duration-300 cursor-pointer border border-gray-200 shadow-sm group-hover:shadow-xl group-hover:border-indigo-300 bg-white group-hover:bg-indigo-50">
                  <div className="text-6xl mb-6">🚀</div>
                  <h3
                    className="text-3xl font-bold mb-4"
                  style={{ color: "#6366f1" }}
                >
                    Backend Projects
                  </h3>
                  <p className="text-lg mb-6" style={{ color: "#374151" }}>
                    Node.js and Express APIs with database integration
                  </p>
                  <p className="text-lg font-semibold" style={{ color: "#9ca3af" }}>
                    Click to view →
                  </p>
                </div>
              </Link>
              <Link href="/devops" className="group">
                <div className="p-10 rounded-2xl h-full transition duration-300 cursor-pointer border border-gray-200 shadow-sm group-hover:shadow-xl group-hover:border-indigo-300 bg-white group-hover:bg-indigo-50">
                  <div className="text-6xl mb-6">⚙️</div>
                  <h3
                    className="text-3xl font-bold mb-4"
                  style={{ color: "#6366f1" }}
                >
                    DevOps Projects
                  </h3>
                  <p className="text-lg mb-6" style={{ color: "#374151" }}>
                    Docker, Kubernetes, and CI/CD pipeline automation
                  </p>
                  <p className="text-lg font-semibold" style={{ color: "#9ca3af" }}>
                    Click to view →
                  </p>
                </div>
              </Link>
              <Link href="/mern" className="group">
                <div className="p-10 rounded-2xl h-full transition duration-300 cursor-pointer border border-gray-200 shadow-sm group-hover:shadow-xl group-hover:border-indigo-300 bg-white group-hover:bg-indigo-50">
                  <div className="text-6xl mb-6">🔗</div>
                  <h3
                    className="text-3xl font-bold mb-4"
                    style={{ color: "#6366f1" }}
                  >
                    MERN Applications
                  </h3>
                  <p className="text-lg mb-6" style={{ color: "#374151" }}>
                    Full-stack applications with MongoDB, Express, React, and Node.js
                  </p>
                  <p className="text-lg font-semibold" style={{ color: "#9ca3af" }}>
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
