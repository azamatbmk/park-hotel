import Image, { StaticImageData } from "next/image";
import styles from "./restaurant.module.css"

export default function PagesHeroSectionBackground({ src, alt, h2}: { 
        src: StaticImageData,
        alt: string,
        h2: string
    }) {
    return (
        <>
            <Image
                className={styles['rest-bg']}
                src={src}
                alt={alt}
                fill
            />
            <h1 className={styles['h1']}>{h2}</h1>
        </>
    )
}