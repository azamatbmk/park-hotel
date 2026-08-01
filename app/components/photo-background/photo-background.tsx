import Image, { StaticImageData } from "next/image";
import styles from "./photo-background.module.css"

export default function PagesHeroSectionBackground({ src, alt, h2}: { 
        src: StaticImageData,
        alt: string,
        h2: string
    }) {
    return (
        <div className={styles['rest-bg-container']}>
            <Image
                className={styles['rest-bg']}
                src={src}
                alt={alt}
                fill
                sizes="100vw"
                priority
            />
            <h1 className={styles['h1']}>{h2}</h1>
        </div>
    )
}
