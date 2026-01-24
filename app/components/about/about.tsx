import Image, { StaticImageData } from "next/image"
import styles from "./about.module.css"
import MoreButton from "../buttons/more-btn"

export default function About({ children, description, bgPhoto, anchor, icon }: {
    children: React.ReactNode;
    description: string;
    bgPhoto: StaticImageData;
    anchor: string;
    icon?: React.ReactNode;
}) {
    return (
        <section className={styles['about-section']}>
            <div>
                <h2 className={styles['title']}>{children}</h2>
            </div>
            <div className={styles['section-photo']}>
                <Image 
                    className={styles['photo']}
                    src={bgPhoto}
                    alt="Фото об отеле"
                />
                <div className={styles['h5-and-p-box']}>
                    <div className={styles['more-btn-and-h5-wrapper']}>
                        <h5 className={styles['h5']}>{children}</h5>
                        <MoreButton anchor={anchor} icon={icon}>{'подробнее'}</MoreButton>
                    </div>
                    <p className={styles['paragraph']}>
                        {description}
                    </p>
                </div>
            </div>
        </section>
    )
}