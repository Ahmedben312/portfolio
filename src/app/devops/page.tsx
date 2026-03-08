import type { Metadata } from "next";
import CategoryProjectsPage from "@/components/CategoryProjectsPage";

export const metadata: Metadata = {
  title: "DevOps Projects | Ahmed",
  description:
    "DevOps work across CI/CD, Kubernetes, observability, and scalable cloud deployment practices.",
};

export default function DevopsPage() {
  return <CategoryProjectsPage slug="devops" />;
}
