"use client";

import ImageCarousel from "@/components/ImageCarousel";
import Link from "next/link";

export default function DevOpsProjects() {
  // Placeholder image URLs - user will replace these with actual project images
  const placeholderImages = Array.from(
    { length: 8 },
    (_, i) =>
      `https://via.placeholder.com/1200x600?text=DevOps+Project+${i + 1}`,
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
          DevOps Projects
        </h1>
        <p className="text-xl mb-16" style={{ color: "#6b7280" }}>
          Infrastructure automation, containerization, and CI/CD pipelines for
          scalable deployments
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
              Kubernetes Cluster Setup
            </h3>
            <p className="mb-8 text-lg leading-relaxed" style={{ color: "#374151" }}>
              A production-ready Kubernetes cluster with auto-scaling, service
              mesh, and monitoring. Includes deployment automation and health
              checks.
            </p>
            <div className="mb-8">
              <p style={{ color: "#6b7280" }} className="text-sm font-semibold mb-2">
                Technologies:
              </p>
              <p style={{ color: "#6b7280" }}>
                Kubernetes, Docker, Helm, Prometheus, ELK Stack
              </p>
            </div>
            <a
              href="https://github.com/ahmed/k8s-setup"
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
              CI/CD Pipeline
            </h3>
            <p className="mb-8 text-lg leading-relaxed" style={{ color: "#374151" }}>
              Automated CI/CD pipelines with GitHub Actions, automated testing,
              and deployment to AWS. Includes staging and production
              environments.
            </p>
            <div className="mb-8">
              <p style={{ color: "#6b7280" }} className="text-sm font-semibold mb-2">
                Technologies:
              </p>
              <p style={{ color: "#6b7280" }}>
                GitHub Actions, Docker, AWS EC2, S3, RDS
              </p>
            </div>
            <a
              href="https://github.com/ahmed/cicd-pipeline"
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
              Infrastructure as Code
            </h3>
            <p className="mb-8 text-lg leading-relaxed" style={{ color: "#374151" }}>
              Complete infrastructure automation with Terraform and Ansible.
              Manages AWS resources, network configuration, and security groups.
            </p>
            <div className="mb-8">
              <p style={{ color: "#6b7280" }} className="text-sm font-semibold mb-2">
                Technologies:
              </p>
              <p style={{ color: "#6b7280" }}>
                Terraform, Ansible, AWS, VPC, Security Groups
              </p>
            </div>
            <a
              href="https://github.com/ahmed/infrastructure-as-code"
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
              Monitoring & Logging
            </h3>
            <p className="mb-8 text-lg leading-relaxed" style={{ color: "#374151" }}>
              Comprehensive monitoring and logging solution with Prometheus,
              Grafana, and ELK Stack. Real-time alerts and dashboards for system
              health.
            </p>
            <div className="mb-8">
              <p style={{ color: "#6b7280" }} className="text-sm font-semibold mb-2">
                Technologies:
              </p>
              <p style={{ color: "#6b7280" }}>
                Prometheus, Grafana, ELK Stack, AlertManager
              </p>
            </div>
            <a
              href="https://github.com/ahmed/monitoring-stack"
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
