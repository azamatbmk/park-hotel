import Link from "next/link";
import styles from "./more-btn.module.css"
import { IMoreBtn } from "./more-btn.interface";
import ArrowIcon from "../arrow-icon/arrow-icon";

export default function MoreButton({ icon, anchor, children }: IMoreBtn) {
    const isExternal = anchor.startsWith("http");
    return(
        <div className={styles['more-btn']}>
            <Link
                href={anchor}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
            >
                {children}
            </Link>
            { icon && <ArrowIcon /> }
        </div>
    )
}