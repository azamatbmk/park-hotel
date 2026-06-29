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
    return (
        <div>
            {asLink ? (
                <a className={styles['book-btn']} href={href}>{buttonText}</a>
            ) : (
                <span className={styles['book-btn']}>{buttonText}</span>
            )}
        </div>
    )
}