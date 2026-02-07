'use client'

import Link from "next/link";
import styles from './nav-menu.module.css'
import Image from "next/image";
import PhoneButton from "../buttons/phone-btn";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { menuItems } from "../hero-section/constants";

export default function NavMenu() {

    const triangle = '▼';
    const pathName = usePathname();

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

    return (
        <div className={`${styles['nav-container']} ${isScrolled ? styles['nav-container--visible'] : ''}`}>
            <Image
                src='./logo.svg'
                alt="Логотип отеля"
                width={200}
                height={40}
                priority={true}
            />
            <div className={styles['nav-and-phoneBtn-wrapper']}>
                <nav className={styles['nav-tag']}>
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
    )
}