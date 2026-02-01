import Image from "next/image"
import styles from "./pool-foto.module.css"
import BookButton from "../components/buttons/book-btn"
import { IPoolProops } from "./pool-foto-props"


export default function PoolFotoSection({
    infoBoxLeftSide,
    oneFotoSrc,
    twoFotoSrcLeft,
    twoFotoSrcRight,
    threeFotoSrcOne,
    threeFotoSrcTwo,
    threeFotoSrcThree,
    mobileFoto,
    poolServiceIcon,
    poolServiceIconMobile,
    price,
    alt,
    h2,
    description,
    buttonText,
    guestsAndTime
}: IPoolProops) {
    return (
            <section className={styles['pool-foto-section']}>
                <div className={styles['one-foto-wrapper']}>
                    <Image
                        className={styles['one-foto']}
                        src={oneFotoSrc}
                        alt={alt}
                        width={1840}
                        height={650}
                    />
                    <Image
                        className={styles['mobile-foto']}
                        src={mobileFoto}
                        alt={alt}
                        width={393}
                        height={280}
                    />
                    <div className={
                        `${infoBoxLeftSide ? styles['pool-info-box__left'] : styles['pool-info-box']}`
                        }>
                        <h2 className={styles['pool-info-box-title']}>{h2}</h2>
                        <Image
                            className={`${infoBoxLeftSide 
                                        ? styles['price-work-days-item__none']
                                        : styles['price-work-days-item']}`}
                            src={'/pool-size.svg'}
                            alt="Ионка размеров бассейна"
                            width={675}
                            height={30}
                        />
                        <h5 className={`${infoBoxLeftSide 
                                        ? styles['price-work-days-item__h5']
                                        : styles['price-work-days-item__none']}`}>4 чел</h5>
                        <p>
                            {description}
                        </p>
                        <Image
                            className={styles['pool-service-icon']}
                            src={poolServiceIcon}
                            alt="Ионка услуг у бассейна"
                            width={647}
                            height={49}
                        />
                        <Image
                            className={styles['pool-service-icon__mobile']}
                            src={poolServiceIconMobile}
                            alt="Ионка услуг у бассейна"
                            width={361}
                            height={86}
                        />
                        <div className={
                            `${infoBoxLeftSide
                                        ? styles['price-work-days-wrapper__left']
                                        : styles['price-work-days-wrapper']}`}>
                            <div className={styles['price-work-days-wrapper__mobile']}>
                                <div className={styles['price-work-days-item']}>
                                    <p>пн-пт</p>
                                    <h5>{price}{'\u00A0'}₽</h5>
                                    <span>{guestsAndTime}</span>
                                </div>
                                {/* <div className={styles['price-work-days-item']}>
                                    <p>пн-пт</p>
                                    <h5>{price}{'\u00A0'}₽</h5>
                                    <span>{guestsAndTime}</span>
                                </div> */}
                                <div className={
                                    `${infoBoxLeftSide
                                            ? styles['price-work-days-item__none']
                                            : styles['price-work-days-item']}`}>
                                    <p>сб-вс</p>
                                    <h5>1500{'\u00A0'}₽</h5>
                                </div>
                            </div>
                            <div className={
                                `${infoBoxLeftSide 
                                        ? styles['price-work-days-item__none']
                                        : styles['price-work-days-item']}`}>
                                <p>
                                    *Для постояльцев стоимость посещения бассейна входит в стоимость проживания
                                </p>
                            </div>
                        </div>
                        <div className={
                            `${infoBoxLeftSide ? styles['book-button-wrapper__left'] : styles['book-button-wrapper']}`}>
                            <BookButton buttonText={buttonText} />
                        </div>
                    </div>
                </div>
                <div className={styles['two-foto-wrapper']}>
                    <Image
                        className={styles['one-foto']}
                        src={twoFotoSrcLeft}
                        alt={alt}
                        width={910}
                        height={607}
                    />
                    <Image
                        className={styles['one-foto']}
                        src={twoFotoSrcRight}
                        alt={alt}
                        width={910}
                        height={607}
                    />
                </div>
                <div className={styles['three-foto-wrapper']}>
                    <Image
                        className={styles['one-foto']}
                        src={threeFotoSrcOne}
                        alt={alt}
                        width={600}
                        height={400}
                    />
                    <Image
                        className={styles['one-foto']}
                        src={threeFotoSrcTwo}
                        alt={alt}
                        width={600}
                        height={400}
                    />
                    <Image
                        className={styles['one-foto']}
                        src={threeFotoSrcThree}
                        alt={alt}
                        width={600}
                        height={400}
                    />
                </div>
            </section>
    )
}