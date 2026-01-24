import Image from "next/image"
import styles from "./about.module.css"
import { IAboutProps } from "./about.interface"
import FoodMenuItem from "@/app/restaurant/food-menu-item"

export default function About({ 
        children, 
        description, 
        bgPhoto, 
        anchor, 
        icon,
        alt,
        btnText
    }: IAboutProps ) {
    return (
        <section className={styles['about-section']}>
            <div>
                <h2 className={styles['title']}>{children}</h2>
            </div>
            <div className={styles['section-photo']}>
                <Image 
                    className={styles['photo']}
                    src={bgPhoto}
                    alt={alt}
                />
                <FoodMenuItem
                    children={children}
                    anchor={anchor}
                    btnText={btnText}
                    icon={icon}
                    description={description}
                />
            </div>
        </section>
    )
}