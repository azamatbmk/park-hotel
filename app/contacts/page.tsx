import type { Metadata } from "next";
import HeroSection from "../components/hero-section/hero-section";
import PagesHeroSectionBackground from "../components/photo-background/photo-background";
import contactsBg from "../../public/photos/contactsbg.png"
import styles from "./contacts.module.css"
import Image from "next/image";
import YandexMap from "../components/yandex-map/yandex-map";
import JsonLd from "../components/json-ld/json-ld";
import { createMetadata, hotelJsonLd, WHATSAPP_URL } from "../lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Контакты",
  description:
    "Контакты парк-отеля «Дзуарикау»: адрес в селе Дзуарикау, телефон +7 (928) 070-11-55, карта проезда.",
  path: "/contacts",
});

export default function Contacts() {
    return (
        <main>
            <JsonLd data={hotelJsonLd} />
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
                        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                            <Image
                                className={styles['cocial-logo']}
                                src={"/whatsapp-logo.svg"}
                                alt={"Whatsapp логотип"}
                                width={40}
                                height={40}
                            />
                        </a>
                        <Image
                            className={styles['cocial-logo']}
                            src={"/instagram-logo.svg"}
                            alt={"Instagram логотип"}
                            width={40}
                            height={40}
                        />
                        <Image
                            className={styles['cocial-logo']}
                            src={"/telegram-logo.svg"}
                            alt={"Telegram логотип"}
                            width={40}
                            height={40}
                        />
                    </div>
                </div>
            </div>
            <YandexMap />
        </main>
    )
}