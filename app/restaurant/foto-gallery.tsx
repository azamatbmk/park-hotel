import H2HeaderComponent from "../components/h2-header/h2-header";
import styles from "./foto-gallery.module.css"
import Image from "next/image";

export default function FotoGallery() {
    return(
        <section className={styles['foto-gallery-section']}>
            <H2HeaderComponent>{'Фото'}</H2HeaderComponent>
            <div className={styles['foto-gallery-container']}>
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
                    src={'/photos/restaurant4.png'}
                    alt="Фото ресторана"
                    width={620}
                    height={400}
                />
                </div>
            </div>
             <div className={styles['foto-cards-container']}>
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
        </section>
    )
}