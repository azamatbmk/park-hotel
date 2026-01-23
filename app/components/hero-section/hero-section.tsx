import Link from "next/link";
import BookingBlock from "../booking/booking";
import Image from "next/image";
import styles from "./hero-section.module.css";

export default function HeroSection() {
    return (
        <section className={styles['hero-section']}>
            <video
                className={styles['video']}
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="video/main1.webm" type="video/webm"/>
                Ваш браузер не поддерживает видео
            </video>
            <div className={styles['nav-container']}>
                <Image className={styles['main-logo']} src='./logo.svg' alt="Логотип отеля" width={500} height={70}/>
                <div className={styles['nav-and-phone']}>
                    <nav >
                        <ul className={styles['nav-wrapper']}>
                            <li className={styles.navitem}><Link href={'/'}>Об отеле</Link></li>
                            <li className={styles.navitem}><Link href={'/rooms'}>Номера</Link></li>
                            <li className={styles.navitem}><Link href={'/restaurant'}>Ресторан</Link></li>
                            <li className={styles.navitem}><Link href={'/pool'}>Бассейн & Баня</Link></li>
                            <li className={styles.navitem}><Link href={'/excursions'}>Экскурсии</Link></li>
                            <li className={styles.navitem}><Link href={'/contacts'}>Контакты</Link></li>
                            <li className={styles.navitem}><Link href={'/contacts'}>Контакты</Link></li>
                        </ul>
                    </nav>
                    <Link href="tel:+79280701155" className={styles['phone-box']} >+7 (928) 070-11-55</Link>
                </div>
            </div>
            <BookingBlock />
        </section>
    )
}