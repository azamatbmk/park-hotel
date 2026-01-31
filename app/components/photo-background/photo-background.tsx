import Image, { StaticImageData } from "next/image";
import styles from "./photo-background.module.css"
import mobileBg from "../../public/photos/rooms-mobilebg.png"

export default function PagesHeroSectionBackground({ src, alt, h2}: { 
        src: StaticImageData,
        alt: string,
        h2: string
    }) {
    return (
        <div className={styles['rest-bg-container']}>
            <div className={styles['rest-bg-wrapper__desktop']}>
                <Image
                    className={styles['rest-bg__desktop']}
                    src={src}
                    alt={alt}
                    fill
                />
            </div>
            <div className={styles['rest-bg-wrapper__mobile']}>
                <Image
                    className={styles['rest-bg__mobile']}
                    src={src}
                    alt={alt}
                />
            </div>
            <h1 className={styles['h1']}>{h2}</h1>
        </div>
    )
}