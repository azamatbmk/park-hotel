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
        <section className={`${sectionClassName ? styles['foto-section-left'] : styles['foto-section']}` }>
            <div className={styles['foto-container']}>
                <div className={styles['left-foto-wrapper']}>
                    <Image
                        className={styles['left-image']}
                        src={leftImageSrc}
                        alt={alt}
                        width={445}
                        height={704}
                    />
                </div>
                <div className={styles['right-column']}>
                    <div className={styles['top-foto-wrapper']}>
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
                        <div className={styles['right-bottom-wrapper']}>
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
            <div className={styles['description-container']}>
                <h2 className={styles['h2']}>
                    {h2}
                </h2>
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
                <div className={styles['price']}>
                    <strong>от {price} ₽</strong>
                    <span>1 ночь / 2 гостя</span>
                </div>
                <BookButton buttonText={'Забронировать'} />
            </div>
        </section>
    )
}