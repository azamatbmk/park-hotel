import Image from "next/image"
import styles from "./about.module.css"
import MoreButton from "../buttons/more-btn"
import { IAboutProps } from "./about.interface"

export default function About(
    { 
        children, 
        description, 
        bgPhoto, 
        anchor ='/', 
        icon,
        btnText,
        descriptionPartOne,
        descriptionPartTwo
    }: IAboutProps) {
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
                        {btnText && <MoreButton anchor={anchor} icon={icon}>{btnText}</MoreButton>}
                    </div>
                    <p className={styles['paragraph']}>
                        {description}
                    </p>
                </div>
                <div className={styles['mobile-768-description']}>
                    <p>{descriptionPartOne}</p>
                    <p>{descriptionPartTwo}</p>
                    {btnText && <MoreButton anchor={anchor} icon={icon}>{btnText}</MoreButton>}
                </div>
            </div>
        </section>
    )
}