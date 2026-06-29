import HeroSection from "../components/hero-section/hero-section";
import PagesHeroSectionBackground from "../components/photo-background/photo-background";
import contactsBg from "../../public/photos/contactsbg.png"
import styles from "./contacts.module.css"
import Image from "next/image";
import YandexMap from "../components/yandex-map/yandex-map";

export default function Contacts() {
    return (
        <main>
            <HeroSection
                background={
                    <PagesHeroSectionBackground
                        src={contactsBg}
                        alt="Фото лестниц"
                        h2="Контакты"
                    />
                }
                overlay={true}
            />
            <h2 className={styles['title']}>Контакты</h2>
            <div className={styles['contacts-items-container']}>
                <div className={styles['contacts-item']}>
                    <h3>Адрес</h3>
                    <p>
                        Республика Северная Осетия — Алания, село Дзуарикау, улица А. Кцоева, 25</p>
                </div>
                <div className={styles['contacts-item']}>
                    <h3>Телефон</h3>
                    <p>+7 (928) 070-11-55</p>
                </div>
                <div className={styles['contacts-item']}>
                    <h3>Соцсети</h3>
                    <div>
                        <a href="" target="_blank">
                            <Image
                                className={styles['cocial-logo']}
                                src={"/whatsapp-logo.svg"}
                                alt={"Whatsapp логотип"}
                                width={40}
                                height={40}
                            />
                        </a>
                        <a href="" target="_blank">
                            <Image
                                className={styles['cocial-logo']}
                                src={"/instagram-logo.svg"}
                                alt={"Instagram логотип"}
                                width={40}
                                height={40}
                            />
                        </a>
                        <a href="" target="_blank">
                            <Image
                                className={styles['cocial-logo']}
                                src={"/telegram-logo.svg"}
                                alt={"Telegram логотип"}
                                width={40}
                                height={40}
                            />
                        </a>
                    </div>
                </div>
            </div>
            <YandexMap />
        </main>
    )
}