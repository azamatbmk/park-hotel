import styles from "./book-btn.module.css"
import { HOTEL_PHONE_HREF } from "@/app/lib/seo";

export default function BookButton({
  buttonText,
  href = HOTEL_PHONE_HREF,
}: {
  buttonText: string;
  href?: string;
}) {
    return (
        <div>
            <a className={styles['book-btn']} href={href}>{buttonText}</a>
        </div>
    )
}