'use client'

import Image from "next/image"
import styles from "./footer.module.css"
import footerLogo from "../../../public/greylogo.svg"
import Link from "next/link"
import PhoneButton from "../buttons/phone-btn"
import pointIcon from "../../../public/point.svg"
import PhoneButtonMobile from "../buttons/phone-btn-mobile"
import { usePathname } from "next/navigation"
import { WHATSAPP_URL, YANDEX_MAPS_URL } from "../../lib/seo";

const ROOM_PATHS = ['/luxroom', '/luxroom2', '/luxroom3'];

export default function Footer() {
    const path = usePathname();
    const year = new Date().getFullYear();

    return (
        <section className={styles['footer-section']}>
            <div className={styles['footer-logo__desktop']}>
                <Image
                    src={footerLogo}
                    alt="Лого в подвале"
                    width={300}
                    height={60}/>
                <div className={styles['policy-link-wrapper__desktop']}>
                    <p className={styles['policy-link']}>Правовая информация</p>
                    <p>© {year}. Парк-отель Дзуарикау</p>
                </div>
            </div>
            <div className={styles['nav-work-adress-wrapper']}>
                <div className={styles['footer-nav']}>
                    <h4 className={styles['h4']}>Навигация</h4>
                    <nav >
                        <ul className={styles['nav-wrapper']} style={{ listStyle: 'none' }}>
                            <li><Link href={'/#about'}>Об отеле</Link></li>
                            <li><Link href={'/rooms'}>Номера</Link></li>
                            <li><Link href={'/restaurant'}>Ресторан</Link></li>
                            <li><Link href={'/pool'}>Бассейн & Баня</Link></li>
                            <li><Link href={'/excursions'}>Экскурсии</Link></li>
                            <li><Link href={'/contacts'}>Контакты</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className={styles['work-time']}>
                    <h4 className={styles['h4']}>График работы</h4>
                    <p>с 08:00 до 23:00</p>
                </div>
                <div className={styles['footer-adress']}>
                    <h4 className={styles['h4']}>Адрес</h4>
                    <div className={styles['adress-text']}>
                        <Image
                            src={pointIcon}
                            alt={"Иконка геопозиции"}
                            width={42}
                            height={42}
                        />
                        <Link href={YANDEX_MAPS_URL} target="_blank" rel="noopener noreferrer">
                            Республика Северная Осетия — Алания,<br />село Дзуарикау, улица А. Кцоева, 25
                        </Link>
                    </div>
                    <PhoneButton />
                    <PhoneButtonMobile />
                    <div className={styles['social-logo-wrapper']}>
                        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                            <Image
                                src={"/whatsapp-logo.svg"}
                                alt={"Whatsapp логотип"}
                                width={40}
                                height={40}
                            />
                        </a>
                    </div>
                    <div className={styles['policy-link-wrapper__mobile']}>
                        <p className={styles['policy-link']}>Правовая информация</p>
                        <p>© {year}. Парк-отель Дзуарикау</p>
                    </div>
                </div>
            </div>
            <div className={`${ROOM_PATHS.includes(path) ? styles['bottom-div'] : ''}`}></div>
        </section>
    )
}
