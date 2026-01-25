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
                        src={'/photos/food1.png'}
                        alt="Фото блюда"
                        width={400}
                        height={310}    
                    />
                    <FoodCardInfo
                        children={'Завтрак'}
                        anchor={'#'}
                        icon={rightTopArrow}
                        btnText={'меню'}
                        description={'Завтраки, которые не только насытят, но и подарят энергию на весь день. С 9:00 до 12:00.'}
                    />
                </div>
                <div className={styles['food-card-wrapper']}>
                    <Image
                        src={'/photos/food2.png'}
                        alt="Фото блюда"
                        width={400}
                        height={310}    
                    />
                    <FoodCardInfo
                        children={'Основное меню'}
                        anchor={'#'}
                        icon={rightTopArrow}
                        btnText={'меню'}
                        description={'Меню объединяет осетинские, кавказские и европейские блюда, приготовленные с любовью.'}
                    />
                </div>
                <div className={styles['food-card-wrapper']}>
                    <Image
                        src={'/photos/food3.png'}
                        alt="Фото блюда"
                        width={400}
                        height={310}    
                    />
                    <FoodCardInfo
                        children={'Барное меню'}
                        anchor={'#'}
                        icon={rightTopArrow}
                        btnText={'меню'}
                        description={'Напитки под ваше настроение. Прекрасный выбор для любого повода и компании.'}
                    />
                </div>
            </div>
        </section>
    )
}