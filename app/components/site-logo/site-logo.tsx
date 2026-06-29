import Link from "next/link";
import Image from "next/image";
import styles from "./site-logo.module.css";

export default function SiteLogo({
  width,
  height,
  className,
  priority = false,
}: {
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Link href="/" className={`${styles["logo-link"]} ${className ?? ""}`} aria-label="На главную — Парк-отель Дзуарикау">
      <Image
        src="/logo.svg"
        alt="Парк-отель Дзуарикау"
        width={width}
        height={height}
        priority={priority}
      />
    </Link>
  );
}
