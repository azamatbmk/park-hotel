import rightTopArrow from "../../public/er.svg"
import Image from "next/image";
import styles from "./restaurant.module.css"
import FoodCardInfo from "./food-card-info";
import H2HeaderComponent from "../components/h2-header/h2-header";
import { MENU_PDF } from "./constants";

const foodCards = [
    {
        desktopSrc: "/photos/food1.png",
        mobileSrc: "/photos/food-mobile1.png",
        anchor: MENU_PDF.breakfast,
        title: "Завтрак",
        description:
            "Завтраки, которые не только насытят, но\u00A0и\u00A0подарят энергию на весь день. С 9:00 до 11:00.",
    },
    {
        desktopSrc: "/photos/food2.png",
        mobileSrc: "/photos/food-mobile2.png",
        anchor: MENU_PDF.main,
        title: "Основное меню",
        description:
            "Меню объединяет осетинские, кавказские и\u00A0европейские блюда, приготовленные с\u00A0любовью.",
    },
    {
        desktopSrc: "/photos/food3.png",
        mobileSrc: "/photos/food-mobile3.png",
        anchor: MENU_PDF.bar,
        title: "Барное меню",
        description:
            "Напитки под ваше настроение. Прекрасный выбор для\u00A0любого повода и\u00A0компании.",
    },
] as const;

export default function FoodMenu() {
    return (
        <section className={styles['food-cards-section']}>
            <H2HeaderComponent>{'Меню'}</H2HeaderComponent>
            <div className={styles['food-cards-container']}>
                {foodCards.map((card, index) => (
                    <div key={card.desktopSrc} className={styles['food-card-wrapper']}>
                        <Image
                            className={styles['desktop-image']}
                            src={card.desktopSrc}
                            alt="Фото блюда"
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            priority={index === 0}
                            style={{ objectFit: "cover" }}
                        />
                        <Image
                            className={styles['mobile-image']}
                            src={card.mobileSrc}
                            alt="Фото блюда"
                            width={361}
                            height={115}
                            sizes="90vw"
                            priority={index === 0}
                        />
                        <FoodCardInfo
                            anchor={card.anchor}
                            icon={rightTopArrow}
                            btnText={'меню'}
                            description={card.description}
                        >
                            {card.title}
                        </FoodCardInfo>
                    </div>
                ))}
            </div>
        </section>
    )
}
