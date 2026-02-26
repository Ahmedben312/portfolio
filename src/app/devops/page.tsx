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
          DevOps Projects
        </h1>
        <p className="text-lg mb-12" style={{ color: "#cbd5e1" }}>
          Infrastructure automation, containerization, and CI/CD pipelines for
          scalable deployments
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
              Kubernetes Cluster Setup
            </h3>
            <p className="mb-6" style={{ color: "#cbd5e1" }}>
              A production-ready Kubernetes cluster with auto-scaling, service
              mesh, and monitoring. Includes deployment automation and health
              checks.
            </p>
            <div className="mb-6">
              <p style={{ color: "#94a3b8" }} className="text-sm mb-2">
                Technologies:
              </p>
              <p style={{ color: "#cbd5e1" }}>
                Kubernetes, Docker, Helm, Prometheus, ELK Stack
              </p>
            </div>
            <a
              href="https://github.com/ahmed/k8s-setup"
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
              CI/CD Pipeline
            </h3>
            <p className="mb-6" style={{ color: "#cbd5e1" }}>
              Automated CI/CD pipelines with GitHub Actions, automated testing,
              and deployment to AWS. Includes staging and production
              environments.
            </p>
            <div className="mb-6">
              <p style={{ color: "#94a3b8" }} className="text-sm mb-2">
                Technologies:
              </p>
              <p style={{ color: "#cbd5e1" }}>
                GitHub Actions, Docker, AWS EC2, S3, RDS
              </p>
            </div>
            <a
              href="https://github.com/ahmed/cicd-pipeline"
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
              Infrastructure as Code
            </h3>
            <p className="mb-6" style={{ color: "#cbd5e1" }}>
              Complete infrastructure automation with Terraform and Ansible.
              Manages AWS resources, network configuration, and security groups.
            </p>
            <div className="mb-6">
              <p style={{ color: "#94a3b8" }} className="text-sm mb-2">
                Technologies:
              </p>
              <p style={{ color: "#cbd5e1" }}>
                Terraform, Ansible, AWS, VPC, Security Groups
              </p>
            </div>
            <a
              href="https://github.com/ahmed/infrastructure-as-code"
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
              Monitoring & Logging
            </h3>
            <p className="mb-6" style={{ color: "#cbd5e1" }}>
              Comprehensive monitoring and logging solution with Prometheus,
              Grafana, and ELK Stack. Real-time alerts and dashboards for system
              health.
            </p>
            <div className="mb-6">
              <p style={{ color: "#94a3b8" }} className="text-sm mb-2">
                Technologies:
              </p>
              <p style={{ color: "#cbd5e1" }}>
                Prometheus, Grafana, ELK Stack, AlertManager
              </p>
            </div>
            <a
              href="https://github.com/ahmed/monitoring-stack"
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
