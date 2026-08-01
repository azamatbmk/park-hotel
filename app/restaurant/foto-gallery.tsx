import H2HeaderComponent from "../components/h2-header/h2-header";
import styles from "./foto-gallery.module.css"
import Image from "next/image";

const desktopGallery = [
    "/photos/restaurant6.png",
    "/photos/restaurant2.png",
    "/photos/restaurant5.png",
    "/photos/restaurant4.png",
] as const;

const desktopCards = [
    "/photos/restaurant7.png",
    "/photos/restaurant8.png",
    "/photos/restaurant9.png",
] as const;

export default function FotoGallery() {
    return(
        <section className={styles['foto-gallery-section']}>
            <H2HeaderComponent>{'Фото'}</H2HeaderComponent>
            <div className={styles['desktop-foto-gallery-container']}>
                {desktopGallery.map((src) => (
                    <div key={src} className={styles['foto-gallery-item-wrapper']}>
                        <Image
                            src={src}
                            alt="Фото ресторана"
                            width={620}
                            height={400}
                            sizes="(max-width: 768px) 100vw, 50vw"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </div>
                ))}
            </div>
             <div className={styles['desktop-foto-cards-container']}>
                {desktopCards.map((src) => (
                    <div key={src} className={styles['foto-card-wrapper']}>
                        <Image
                            src={src}
                            alt="Фото блюда"
                            width={400}
                            height={310}
                            sizes="(max-width: 768px) 1px, 33vw"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </div>
                ))}
            </div>

            <div className={styles['mobile-foto-gallery-container']}>
                <div className={styles['foto-gallery-item-wrapper']}>
                    <Image
                        src={'/photos/restaurant-mobile6.png'}
                        alt="Фото ресторана"
                        width={620}
                        height={400}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                    />
                </div>
                <div className={styles['mobile-foto-cards-container']}>
                    <div className={styles['foto-card-wrapper__left']}>
                        <Image
                            src={'/photos/restaurant-mobile1.png'}
                            alt="Фото блюда"
                            fill
                            sizes="50vw"
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    <div className={styles['foto-card-wrapper__right']}>
                        <Image
                            src={'/photos/restaurant-mobile5.png'}
                            alt="Фото блюда"
                            fill
                            sizes="50vw"
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                </div>
            </div>
             <div className={styles['mobile-foto-gallery-container']}>
                <div className={styles['foto-gallery-item-wrapper']}>
                    <Image
                        src={'/photos/restaurant-mobile4.png'}
                        alt="Фото ресторана"
                        width={620}
                        height={400}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                    />
                </div>
                <div className={styles['mobile-foto-cards-container']}>
                    <div className={styles['foto-card-wrapper__left']}>
                        <Image
                            src={'/photos/restaurant-mobile7.png'}
                            alt="Фото блюда"
                            fill
                            sizes="50vw"
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    <div className={styles['foto-card-wrapper__right']}>
                        <Image
                            src={'/photos/restaurant-mobile8.png'}
                            alt="Фото блюда"
                            fill
                            sizes="50vw"
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                </div>
            </div>
             <div className={styles['mobile-foto-gallery-container']}>
                <div className={styles['foto-gallery-item-wrapper']}>
                    <Image
                        src={'/photos/restaurant-mobile9.png'}
                        alt="Фото ресторана"
                        width={620}
                        height={400}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                    />
                </div>
            </div>
        </section>
    )
}
