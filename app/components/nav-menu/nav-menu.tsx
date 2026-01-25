'use client'

import Link from "next/link";
import styles from './nav-menu.module.css'
import Image from "next/image";
import PhoneButton from "../buttons/phone-btn";

export default function NavMenu() {
    return (
        <div className={styles['nav-container']}>
            <Image
                src='./logo.svg'
                alt="Логотип отеля"
                width={200}
                height={40}
            />
            <div className={styles['nav-and-phoneBtn-wrapper']}>
                <nav >
                    <ul className={styles['nav-wrapper']}>
                        <li className={styles.navitem}><Link href={'/'}>Об отеле</Link></li>
                        <li className={styles.navitem}><Link href={'/rooms'}>Номера</Link></li>
                        <li className={styles.navitem}><Link href={'/restaurant'}>Ресторан</Link></li>
                        <li className={styles.navitem}><Link href={'/pool'}>Бассейн & Баня</Link></li>
                        <li className={styles.navitem}><Link href={'/excursions'}>Экскурсии</Link></li>
                        <li className={styles.navitem}><Link href={'/contacts'}>Контакты</Link></li>
                    </ul>
                </nav>
                <PhoneButton />
            </div>
            {/* <Link href="tel:+79280701155" className="phone-box" >+7(928)070-11-55</Link> */}
        </div>
    )
}