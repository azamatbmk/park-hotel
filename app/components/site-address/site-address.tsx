import Link from "next/link";
import { HOTEL_ADDRESS, YANDEX_MAPS_URL } from "../../lib/seo";
import styles from "./site-address.module.css";

export default function SiteAddress({ className }: { className?: string }) {
  return (
    <Link
      href={YANDEX_MAPS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles["site-address"]} ${className ?? ""}`}
    >
      {HOTEL_ADDRESS}
    </Link>
  );
}
