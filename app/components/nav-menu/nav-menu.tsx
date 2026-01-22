'use client'

import Link from "next/link";
import styles from './nav-menu.module.css'
import Image from "next/image";

export default function NavMenu() {
    return (
        <div className={styles.navcontainer}>
            <Image src='./logo.svg' alt="Логотип отеля" width={500} height={50}/>
            <nav >
                <ul className={styles.navwrapper}>
                    <li className={styles.navitem}><Link href={'/'}>Об отеле</Link></li>
                    <li className={styles.navitem}><Link href={'/rooms'}>Номера</Link></li>
                    <li className={styles.navitem}><Link href={'/restaurant'}>Ресторан</Link></li>
                    <li className={styles.navitem}><Link href={'/pool'}>Бассейн & Баня</Link></li>
                    <li className={styles.navitem}><Link href={'/excursions'}>Экскурсии</Link></li>
                    <li className={styles.navitem}><Link href={'/contacts'}>Контакты</Link></li>
                </ul>
            </nav>
            <Link href="tel:+79280701155" className="phone-box" >+7 (928) 070-11-55</Link>
        </div>
    )
}