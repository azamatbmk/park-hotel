import Image from "next/image"
import styles from "./excursion-foto-section.module.css"
import MoreButton from "../components/buttons/more-btn"
import { IAboutProps } from "../components/about/about.interface"

export default function ExcursionPhotoSection(
    { 
        children, 
        description, 
        bgPhoto, 
        anchor, 
        icon,
        alt,
        btnText
    }: IAboutProps) {
    return (
        <section className={styles['excursion-foto-section']}>
            <div className={styles['section-photo']}>
                <div className={styles['photo-and-distance-btn']}>
                    <Image 
                        className={styles['photo']}
                        src={bgPhoto}
                        alt={alt}
                        width={910}
                        height={413}
                    />
                    <button className={styles['more-foto-btn']}>больше фото</button>
                </div>
                <div className={styles['h5-and-p-box']}>
                    <div className={styles['more-btn-and-h5-wrapper']}>
                        <h5 className={styles['h5']}>{children}</h5>
                        <div className={styles['distance']}>
                            <MoreButton anchor={anchor} icon={icon}>{btnText}</MoreButton>
                        </div>
                    </div>
                    <p className={styles['paragraph']}>
                        {description}
                    </p>
                </div>
            </div>
        </section>
    )
}