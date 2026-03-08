import type { Metadata } from "next";
import CategoryProjectsPage from "@/components/CategoryProjectsPage";

export const metadata: Metadata = {
  title: "Backend Projects | Ahmed",
  description:
    "Backend systems projects covering Node.js APIs, auth, data design, and reliable service architecture.",
};

export default function BackendPage() {
  return <CategoryProjectsPage slug="backend" />;
}
