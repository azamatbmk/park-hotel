import Image from "next/image";
import styles from "./lux-room.module.css";
import BookButton from "../components/buttons/book-btn";
import { ILuxRoomProps } from "./lux-room-props.interface";

export default function LuxRoom({
    description,
    price,
    leftImageSrc,
    topImageSrc,
    leftBottobImageSrc,
    rightBottomImageSrc,
    alt,
    h2,
    square,
    sectionClassName
}: ILuxRoomProps) {
    return(
        <section className={
                `${sectionClassName ? styles['foto-section-left'] : styles['foto-section']}`}>
            <div className={
                `${sectionClassName 
                        ? styles['foto-container__right'] 
                        : styles['foto-container']}`}>
                <div className={
                    `${sectionClassName 
                            ? styles['left-foto-wrapper__right'] 
                            : styles['left-foto-wrapper']}`}>
                    <Image
                        className={styles['left-image']}
                        src={leftImageSrc}
                        alt={alt}
                        width={445}
                        height={704}
                    />
                </div>
                <div className={styles['right-column']}>
                    <div className={
                        `${sectionClassName 
                                    ? styles['top-foto-wrapper__right'] 
                                    : styles['top-foto-wrapper']}`}>
                        <Image
                            className={styles['top-image']}
                            src={topImageSrc}
                            alt="Фото номера"
                            width={442}
                            height={345}
                        />
                    </div>
                    <div className={styles['bottom-wrapper']}>
                        <div className={styles['left-bottom-wrapper']}>
                            <Image
                                className={styles['left-bottom-image']}
                                src={leftBottobImageSrc}
                                alt="Фото номера"
                                width={213}
                                height={342}
                            />
                        </div>
                        <div className={
                            `${sectionClassName 
                                    ? styles['right-bottom-wrapper__right'] 
                                    : styles['right-bottom-wrapper']}`}>
                            <Image
                                className={styles['right-bottom-image']}
                                src={rightBottomImageSrc}
                                alt="Фото номера"
                                width={213}
                                height={342}
                            />
                            <span className={styles['span']}>+4</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${sectionClassName ? styles['description-container__right'] : styles['description-container']}`}>
                <div className={styles['h2-and-more-place-btn']}>
                    <h2 className={styles['h2']}>
                        {h2}
                    </h2>
                    <button className={styles['more-place-btn']}>доп.{'\u00A0'}место{'\u00A0'}▼</button>
                </div>
                <p className={styles['paragraph']}>{square} кв²</p>
                <p className={styles['paragraph']}>
                    {description}
                </p>
                <div className={styles['room-service-icon-werapper']}>
                    <Image
                        className={styles['room-service-icon']}
                        src={'/room-service-icons.svg'}
                        alt="Иконка завтрак"
                        width={630}
                        height={100}
                    />
                </div>
                <div className={`${sectionClassName ? styles['price__flex-end'] : styles['price']}`}>
                    <strong>от {price} ₽</strong>
                    <span>1 ночь / 2 гостя</span>
                    <BookButton buttonText={'Забронировать'} />
                </div>
            </div>
        </section>
    )
}