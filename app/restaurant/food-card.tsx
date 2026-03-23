import rightTopArrow from "../../public/er.svg"
import Image from "next/image";
import styles from "./restaurant.module.css"
import FoodCardInfo from "./food-card-info";
import H2HeaderComponent from "../components/h2-header/h2-header";

export default function FoodMenu() {
    return (
        <section className={styles['food-cards-section']}>
            <H2HeaderComponent>{'Меню'}</H2HeaderComponent>
            <div className={styles['food-cards-container']}>
                <div className={styles['food-card-wrapper']}>
                    <Image
                        className={styles['desktop-image']}
                        src={'/photos/food1.png'}
                        alt="Фото блюда"
                        fill
                    />
                    <Image
                        className={styles['mobile-image']}
                        src={'/photos/food-mobile1.png'}
                        alt="Фото блюда"
                        width={361}
                        height={115}

                    />
                    <FoodCardInfo
                        children={'Завтрак'}
                        anchor={'#'}
                        icon={rightTopArrow}
                        btnText={'меню'}
                        description={'Завтраки, которые не только насытят, но\u00A0и\u00A0подарят энергию на весь день. С 9:00 до 12:00.'}
                    />
                </div>
                <div className={styles['food-card-wrapper']}>
                    <Image
                        className={styles['desktop-image']}
                        src={'/photos/food2.png'}
                        alt="Фото блюда"
                        fill
                    />
                    <Image
                        className={styles['mobile-image']}
                        src={'/photos/food-mobile2.png'}
                        alt="Фото блюда"
                        width={361}
                        height={115}
                    />
                    <FoodCardInfo
                        children={'Основное меню'}
                        anchor={'#'}
                        icon={rightTopArrow}
                        btnText={'меню'}
                        description={'Меню объединяет осетинские, кавказские и\u00A0европейские блюда, приготовленные с\u00A0любовью.'}
                    />
                </div>
                <div className={styles['food-card-wrapper']}>
                    <Image
                        className={styles['desktop-image']}
                        src={'/photos/food3.png'}
                        alt="Фото блюда"
                        fill
                    />
                    <Image
                        className={styles['mobile-image']}
                        src={'/photos/food-mobile3.png'}
                        alt="Фото блюда"
                        width={361}
                        height={115}
                    />
                    <FoodCardInfo
                        children={'Барное меню'}
                        anchor={'#'}
                        icon={rightTopArrow}
                        btnText={'меню'}
                        description={'Напитки под ваше настроение. Прекрасный выбор для\u00A0любого повода и\u00A0компании.'}
                    />
                </div>
            </div>
        </section>
    )
}