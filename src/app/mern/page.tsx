import type { Metadata } from "next";
import CategoryProjectsPage from "@/components/CategoryProjectsPage";

export const metadata: Metadata = {
  title: "MERN Applications | Ahmed",
  description:
    "Full-stack MERN applications with integrated product workflows and production deployment readiness.",
};

export default function MernPage() {
  return <CategoryProjectsPage slug="mern" />;
}
