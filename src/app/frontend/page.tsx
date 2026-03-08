import type { Metadata } from "next";
import CategoryProjectsPage from "@/components/CategoryProjectsPage";

export const metadata: Metadata = {
  title: "Frontend Projects | Ahmed",
  description:
    "Frontend engineering projects with React, Next.js, TypeScript, and performance-focused UX.",
};

export default function FrontendPage() {
  return <CategoryProjectsPage slug="frontend" />;
}
