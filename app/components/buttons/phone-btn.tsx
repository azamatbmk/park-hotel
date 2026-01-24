import Link from "next/link";
import styles from "./phone-btn.module.css"

export default function PhoneButton() {
    return(
        <div>
            <Link href="tel:+79280701155" className={styles['phone-btn']} >+7 (928) 070-11-55</Link>
        </div>
    )
}