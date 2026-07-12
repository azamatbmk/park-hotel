import Link from "next/link";
import styles from "./more-btn.module.css"
import { IMoreBtn } from "./more-btn.interface";
import ArrowIcon from "../arrow-icon/arrow-icon";

export default function MoreButton({ icon, anchor, children }: IMoreBtn) {
    const isPdf = anchor.toLowerCase().endsWith(".pdf");
    const isHttp = anchor.startsWith("http");
    const isTel = anchor.startsWith("tel:");
    const useNativeLink = isPdf || isHttp || isTel;

    const content = (
        <>
            {children}
            {icon && <ArrowIcon />}
        </>
    );

    if (useNativeLink) {
        return (
            <a
                href={anchor}
                className={styles['more-btn']}
                target={isPdf || isHttp ? "_blank" : undefined}
                rel={isPdf || isHttp ? "noopener noreferrer" : undefined}
            >
                {content}
            </a>
        );
    }

    return (
        <Link href={anchor} className={styles['more-btn']}>
            {content}
        </Link>
    );
}
