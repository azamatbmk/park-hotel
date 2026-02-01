'use client'

import Link from "next/link";
import Image from "next/image";
import styles from "./hero-section.module.css";
import PhoneButton from "../buttons/phone-btn";
import { usePathname } from "next/navigation";
import { menuItems } from "./constants";
import { IHeroSectionProps } from "./hero-section.interface";
import BurgerIcon from "../burger-menu/burger-icon";
import Modal from "../burger-menu/modal";
import NavMenu from "../nav-menu/nav-menu";
import { useState } from "react";


export default function HeroSection({
    background,
    bookingBlock,
    overlay,
    mobileMargin
}: IHeroSectionProps) {
    const triangle = '▼';
    const pathName = usePathname();

    return (
        <section className={`${mobileMargin ? styles['hero-section__mobile'] : styles['hero-section']}`}>
            {background}
            <div className={`${overlay ? styles['overlay'] : styles['display__off']}`}></div>
            <div className={styles['nav-container']}>
                <Image
                    className={styles['main-logo']}
                    src='./logo.svg'
                    alt="Логотип отеля"
                    width={400}
                    height={70}
                    priority={true}
                />
                <BurgerIcon />
                <div className={styles['nav-and-phone']}>
                    <nav>
                        <ul className={styles['nav-wrapper']}>
                            { menuItems.map((item) => {
                                const isActive = pathName == item.href;
                            return (
                                <li key={item.href}>
                                    <Link href={item.href}>
                                        {item.title}
                                        {isActive && (
                                            <span className={styles['triangle']}>
                                                {triangle}
                                            </span>
                                        )}
                                    </Link>
                                </li>
                            )
                            })}
                        </ul>
                    </nav>
                    <PhoneButton />
                </div>
            </div>
            {bookingBlock}
        </section>
    )
}