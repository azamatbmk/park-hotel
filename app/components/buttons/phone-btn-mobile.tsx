import Link from "next/link";
import styles from "./phone-btn-mobile.module.css"

export default function PhoneButtonMobile() {
    return(
        <div className={styles['phone-btn__mobile']}>
            <Link
                href="tel:+79280701155"
                >+7 (928) 070-11-55</Link>
        </div>
    )
}