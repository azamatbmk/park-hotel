'use client'

import Link from "next/link";
import styles from './nav-menu.module.css'
import PhoneButton from "../buttons/phone-btn";
import SiteLogo from "../site-logo/site-logo";
import SiteAddress from "../site-address/site-address";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { menuItems } from "../hero-section/constants";

export default function NavMenu() {

    const triangle = '▼';
    const pathName = usePathname();

    const alwaysVisiblePaths = ['/luxroom', '/luxroom2', '/luxroom3'];

    const [isScrolled, setIsScrolled] = useState(false);
    
    useEffect(() => {
        
        const checkScroll = () => {
            const viewportHeight = window.innerHeight;
            setIsScrolled(window.scrollY > viewportHeight);
        };
        
        checkScroll();
        
        window.addEventListener('scroll', checkScroll);
        
        return () => window.removeEventListener('scroll', checkScroll);

    }, []);

    const isAlwaysVisible = alwaysVisiblePaths.includes(pathName);

    const isActive = (href: string) => {
        if (href === "/#about") return pathName === "/";
        return pathName === href;
    };

    return (
        <div className={`${styles['nav-container']} ${ isAlwaysVisible || isScrolled ? styles['nav-container--visible'] : ''}`}>
            <div className={styles['logo-and-address']}>
                <SiteLogo width={200} height={40} priority={true} />
                <SiteAddress />
            </div>
            <div className={styles['nav-and-phoneBtn-wrapper']}>
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
    )
}