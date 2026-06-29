'use client'

import Link from "next/link";
import styles from "./hero-section.module.css";
import PhoneButton from "../buttons/phone-btn";
import SiteLogo from "../site-logo/site-logo";
import SiteAddress from "../site-address/site-address";
import { usePathname } from "next/navigation";
import { menuItems } from "./constants";
import { IHeroSectionProps } from "./hero-section.interface";
import BurgerIcon from "../burger-menu/burger-icon";


export default function HeroSection({
    background,
    bookingBlock,
    overlay,
    mobileMargin
}: IHeroSectionProps) {
    const triangle = '▼';
    const pathName = usePathname();

    const isActive = (href: string) => {
        if (href === "/#about") return pathName === "/";
        return pathName === href;
    };

    return (
        <section className={`${mobileMargin ? styles['hero-section__mobile'] : styles['hero-section']}`}>
            {background}
            <div className={`${overlay ? styles['overlay'] : styles['display__off']}`}></div>
            <div className={styles['nav-container']}>
                <div className={styles['logo-and-address']}>
                    <SiteLogo
                        className={styles['main-logo']}
                        width={400}
                        height={70}
                        priority={true}
                    />
                    <SiteAddress />
                </div>
                <BurgerIcon black= { false }/>
                <div className={styles['nav-and-phone']}>
                    <nav className={styles['nav-tag']}>
                        <ul className={styles['nav-wrapper']}>
                            { menuItems.map((item) => {
                            return (
                                    <li key={item.href}>
                                        <Link href={item.href}>
                                            {item.title}
                                            {isActive(item.href) && (
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