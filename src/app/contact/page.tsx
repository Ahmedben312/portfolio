import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact | Ahmed",
  description:
    "Contact Ahmed for freelance and full-time opportunities in full-stack and DevOps engineering.",
};

export default function ContactPage() {
  return <ContactSection />;
}
