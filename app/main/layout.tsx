import type { Metadata } from "next";
import { createMetadata } from "../lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Главная",
  path: "/main",
  noIndex: true,
});

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
