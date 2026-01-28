import Link from "next/link";
import styles from "./more-btn.module.css"
import { IMoreBtn } from "./more-btn.interface";
import ArrowIcon from "../arrow-icon/arrow-icon";

export default function MoreButton({ icon, anchor, children }: IMoreBtn) {
    return(
        <div className={styles['more-btn']}>
            <Link href={anchor}>{children}</Link>
            { icon && <ArrowIcon /> }
        </div>
    )
}