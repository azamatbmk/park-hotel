import Image from "next/image"
import styles from "./pool-foto.module.css"
import BookButton from "../components/buttons/book-btn"
import { IPoolProops } from "./pool-foto-props"
import DesktopTag from "../components/room-tag/desktop-room-tag"
import { poolTags, saunaTags } from "./constants"


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
    guestsAndTime,
    guestsAndTimeMobile
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
                    <div className={`${infoBoxLeftSide
                        ? styles['pool-sizes-container__none']
                        : styles['pool-sizes-container']}`}>
                        <div className={styles['pool-sizes-item']}>
                            <Image
                                src={'./pool-icon.svg'}
                                alt="Иконка бассейна"
                                width={20}
                                height={20}
                            />
                            <p>9 x 16</p>
                        </div>
                        <div className={styles['pool-sizes-item']}>
                            <Image
                                src={'./pool-long-icon.svg'}
                                alt="Иконка бассейна"
                                width={20}
                                height={20}
                            />
                            <p>1,30–1,50 м</p>
                        </div>
                        <div className={styles['pool-sizes-item']}>
                            <Image
                                src={'./human-icon.svg'}
                                alt="иконка человечек"
                                width={20}
                                height={20}
                            />
                            <p>до 50 чел</p>
                        </div>
                    </div>
                    <div className={`${infoBoxLeftSide
                        ? styles['price-work-days-item__p']
                        : styles['price-work-days-item__none']}`}>
                        <Image
                            src={'./human-icon.svg'}
                            alt="иконка человечек"
                            width={20}
                            height={20}
                            style={{ marginRight: '10px' }}
                        />
                        <p>4 чел</p>
                    </div>
                    <p className={`${infoBoxLeftSide
                        ? styles['sauna-description']
                        : styles['description']}`}>
                        {description}
                    </p>

                    <div className={`${infoBoxLeftSide
                        ? styles['sauna-tags-container']
                        : styles['pool-tags-container']}`}>
                        {poolServiceIcon.map((tag, index) => {
                            return (
                                <DesktopTag key={index}
                                    imageSrc={tag.imageSrc}
                                    width={tag.width}
                                    height={tag.height}
                                    alt={tag.alt}
                                    text={tag.text}
                                />
                            )
                        })}
                    </div>
                    <div className={
                        `${infoBoxLeftSide
                            ? styles['price-work-days-wrapper-book-button__mobile']
                            : styles['']}`}>
                        <div className={
                            `${infoBoxLeftSide
                                ? styles['price-work-days-wrapper__left']
                                : styles['price-work-days-wrapper']}`}>
                            <div className={styles['price-work-days-wrapper__desktop']}>
                                <div className={styles['price-work-days-item']}>
                                    <p className={
                                        `${infoBoxLeftSide
                                            ? styles['price-work-days-item__none']
                                            : styles['']}`}>пн-пт</p>
                                    <h5>{price}{'\u00A0'}₽</h5>
                                    <span className={
                                        `${infoBoxLeftSide
                                            ? styles['align-self-end']
                                            : styles['']}`}>{guestsAndTime}</span>
                                </div>

                                <div className={
                                    `${infoBoxLeftSide
                                        ? styles['price-work-days-item__none']
                                        : styles['price-work-days-item']}`}>
                                    <p>сб-вс</p>
                                    <h5>1{'\u00A0'}500{'\u00A0'}₽</h5>
                                </div>
                            </div>
                            <div className={styles['price-work-days-wrapper__mobile']}>
                                <div className={styles['price-work-days-item']}>
                                    <span className={
                                        `${infoBoxLeftSide
                                            ? styles['price-work-days-item__none']
                                            : styles['']}`}>пн-пт</span>
                                    <h5>{price}{'\u00A0'}₽</h5>
                                    <span>{guestsAndTimeMobile}</span>
                                    <div className={
                                        `${infoBoxLeftSide
                                            ? styles['price-work-days-item__none']
                                            : styles['price-work-days-item']}`}>
                                        <h5>700{'\u00A0'}₽/чел</h5>
                                        <span>{'дети с 2 до 6 лет'}</span>
                                    </div>
                                </div>

                                <div className={
                                    `${infoBoxLeftSide
                                        ? styles['price-work-days-item__none']
                                        : styles['price-work-days-item']}`}>
                                    <span>сб-вс</span>
                                    <h5>1{'\u00A0'}500{'\u00A0'}₽</h5>
                                    <span style={{ marginBottom: '10px' }}>{guestsAndTimeMobile}</span>
                                    <h5>700{'\u00A0'}₽/чел</h5>
                                    <span>{'дети с 2 до 6 лет'}</span>
                                </div>
                            </div>
                            <div className={
                                `${infoBoxLeftSide
                                    ? styles['price-work-days-item__none']
                                    : styles['price-work-days-item']}`}>
                                <p>
                                    *Для постояльцев стоимость посещения бассейна входит в{'\u00A0'}стоимость проживания
                                </p>
                            </div>
                        </div>
                        <div className={
                            `${infoBoxLeftSide ? styles['book-button-wrapper__left'] : styles['book-button-wrapper']}`}>
                            <BookButton buttonText={buttonText} />
                        </div>
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