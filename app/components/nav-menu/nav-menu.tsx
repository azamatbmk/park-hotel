'use client'

import Link from "next/link";
import styles from './nav-menu.module.css'
import Image from "next/image";
import PhoneButton from "../buttons/phone-btn";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function NavMenu() {
    const [isScrolled, setIsScrolled] = useState(false);
    
    useEffect(() => {
        
        const checkScroll = () => {
            const viewportHeight = window.innerHeight;
            setIsScrolled(window.scrollY > viewportHeight);
            console.log(window.scrollY)
        };
        
        checkScroll();
        
        window.addEventListener('scroll', checkScroll);
        
        return () => window.removeEventListener('scroll', checkScroll);

    }, [])

    return (
        <div className={`${isScrolled
                            ? styles['nav-container__on']
                            : styles['nav-container__off']}`}>
            <Image
                src='./logo.svg'
                alt="Логотип отеля"
                width={200}
                height={40}
                priority={true}
            />
            <div className={styles['nav-and-phoneBtn-wrapper']}>
                <nav >
                    <ul className={styles['nav-wrapper']}>
                        <li><Link href={'/'}>Об отеле</Link></li>
                        <li><Link href={'/rooms'}>Номера</Link></li>
                        <li><Link href={'/restaurant'}>Ресторан</Link></li>
                        <li><Link href={'/pool'}>Бассейн & Баня</Link></li>
                        <li><Link href={'/excursions'}>Экскурсии</Link></li>
                        <li><Link href={'/contacts'}>Контакты</Link></li>
                    </ul>
                </nav>
                <PhoneButton />
            </div>
            {/* <Link href="tel:+79280701155" className="phone-box" >+7(928)070-11-55</Link> */}
        </div>
    )
}