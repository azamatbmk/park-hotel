import type { Metadata } from "next";
import { createMetadata } from "../lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Бронирование",
  path: "/otelix",
  noIndex: true,
});

export default function OtelixLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
