'use client'

import Link from "next/link";
import styles from "./more-btn.module.css"
import Image from "next/image";
import { useEffect, useState } from "react"
import { IMoreBtn } from "./more-btn.interface";
import ArrowIcon from "../arrow-icon/arrow-icon";

export default function MoreButton({ icon, anchor, children }: IMoreBtn) {
    const [ count, setCount ] = useState<number>(1);


    const countUp = () => {
        return setCount(count + 1)
    }

    return(
        <div className={styles['more-btn']}>
            <Link href={anchor}>{children}</Link>
            { icon && <ArrowIcon /> }
        </div>
    )
}