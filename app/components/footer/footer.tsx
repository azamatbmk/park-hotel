import Image from "next/image"
import styles from "./footer.module.css"
import footerLogo from "../../../public/greylogo.svg"
import Link from "next/link"

export default function Footer() {
    return (
        <section className={styles['footer-section']}>
            <div className={styles['footer-logo']}>
                <Image src={footerLogo} alt="Лого в подвале" width={445} height={96}/>
                <div>
                    <Link href={'/'} className={styles['policy-link']}>{'Правовая информация'}</Link>
                    <p>© 2025. Парк-отель Дзуарикау</p>
                </div>
            </div>
            <div className={styles['footer-nav']}>
                <h4 className={styles['h4']}>НАВИГАЦИЯ</h4>
                <nav >
                <ul className={styles['nav-wrapper']} style={{ listStyle: 'none' }}>
                    <li className={styles['li']}><Link href={'/'}>Об отеле</Link></li>
                    <li className={styles['li']}><Link href={'/rooms'}>Номера</Link></li>
                    <li className={styles['li']}><Link href={'/restaurant'}>Ресторан</Link></li>
                    <li className={styles['li']}><Link href={'/pool'}>Бассейн & Баня</Link></li>
                    <li className={styles['li']}><Link href={'/excursions'}>Экскурсии</Link></li>
                    <li className={styles['li']}><Link href={'/contacts'}>Контакты</Link></li>
                </ul>
            </nav>
            </div>
            <div></div>
            <div></div>
        </section>
    )
}