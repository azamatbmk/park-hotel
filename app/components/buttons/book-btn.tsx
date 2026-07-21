import Link from "next/link";
import styles from "./book-btn.module.css"
import { HOTEL_PHONE_HREF } from "@/app/lib/seo";

export default function BookButton({
  buttonText,
  href = HOTEL_PHONE_HREF,
  asLink = true,
}: {
  buttonText: string;
  href?: string;
  asLink?: boolean;
}) {
  const isInternal = href.startsWith("/") && !href.startsWith("//");

  if (!asLink) {
    return (
      <div>
        <span className={styles['book-btn']}>{buttonText}</span>
      </div>
    );
  }

  if (isInternal) {
    return (
      <div>
        <Link className={styles['book-btn']} href={href}>
          {buttonText}
        </Link>
      </div>
    );
  }

  return (
    <div>
      <a className={styles['book-btn']} href={href}>
        {buttonText}
      </a>
    </div>
  );
}
