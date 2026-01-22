import Image, { StaticImageData } from "next/image"
import styles from "./about.module.css"
import aboutPic from "/photos/about-1.jpg"

export default function About({ children, description, bgPhoto }: {
    children: React.ReactNode,
    description: string,
    bgPhoto: StaticImageData
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
                    <h5 className={styles['h5']}>{children}</h5>
                    <p className={styles['paragraph']}>
                        {description}
                    </p>
                </div>
            </div>
        </section>
    )
}