import H2HeaderComponent from "../components/h2-header/h2-header";
import styles from "./foto-gallery.module.css"
import Image from "next/image";

export default function FotoGallery() {
    return(
        <section className={styles['foto-gallery-section']}>
            <H2HeaderComponent>{'Фото'}</H2HeaderComponent>
            <div className={styles['desktop-foto-gallery-container']}>
                <div className={styles['foto-gallery-item-wrapper']}>
                    <Image
                        src={'/photos/restaurant6.png'}
                        alt="Фото ресторана"
                        width={620}
                        height={400}
                    />
                </div>
                <div className={styles['foto-gallery-item-wrapper']}>
                    <Image
                        src={'/photos/restaurant2.png'}
                        alt="Фото ресторана"
                        width={620}
                        height={400}
                    />
                </div>
                <div className={styles['foto-gallery-item-wrapper']}>
                    <Image
                        src={'/photos/restaurant5.png'}
                        alt="Фото ресторана"
                        width={620}
                        height={400}
                    />
                </div>
                <div className={styles['foto-gallery-item-wrapper']}>
                    <Image
                        className={styles['display__none']}
                        src={'/photos/restaurant4.png'}
                        alt="Фото ресторана"
                        width={620}
                        height={400}
                    />
                </div>
            </div>
             <div className={styles['desktop-foto-cards-container']}>
                <div className={styles['foto-card-wrapper']}>
                    <Image
                        src={'/photos/restaurant7.png'}
                        alt="Фото блюда"
                        width={400}
                        height={310}    
                    />
                </div>
                <div className={styles['foto-card-wrapper']}>
                    <Image
                        src={'/photos/restaurant8.png'}
                        alt="Фото блюда"
                        width={400}
                        height={310}    
                    />
                </div>
                <div className={styles['foto-card-wrapper']}>
                    <Image
                        src={'/photos/restaurant9.png'}
                        alt="Фото блюда"
                        width={400}
                        height={310}    
                    />
                </div>
            </div>

            <div className={styles['mobile-foto-gallery-container']}>
                <div className={styles['foto-gallery-item-wrapper']}>
                    <Image
                        src={'/photos/restaurant-mobile6.png'}
                        alt="Фото ресторана"
                        width={620}
                        height={400}
                    />
                </div>
                <div className={styles['mobile-foto-cards-container']}>
                    <div className={styles['foto-card-wrapper__left']}>
                        <Image
                            src={'/photos/restaurant-mobile1.png'}
                            alt="Фото блюда"
                            width={194}
                            height={134}    
                        />
                    </div>
                    <div className={styles['foto-card-wrapper__right']}>
                        <Image
                            src={'/photos/restaurant-mobile5.png'}
                            alt="Фото блюда"
                            width={194}
                            height={134}    
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
                    />
                </div>
                <div className={styles['mobile-foto-cards-container']}>
                    <div className={styles['foto-card-wrapper__left']}>
                        <Image
                            src={'/photos/restaurant-mobile7.png'}
                            alt="Фото блюда"
                            width={194}
                            height={134}    
                        />
                    </div>
                    <div className={styles['foto-card-wrapper__right']}>
                        <Image
                            src={'/photos/restaurant-mobile8.png'}
                            alt="Фото блюда"
                            width={194}
                            height={134}    
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
                    />
                </div>
            </div>
        </section>
    )
}