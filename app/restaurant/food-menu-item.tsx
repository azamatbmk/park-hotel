import { IAboutProps } from "../components/about/about.interface"
import MoreButton from "../components/buttons/more-btn"
import styles from "./restaurant.module.css"

export default function FoodMenuItem({
    children,
    anchor,
    icon,
    btnText,
    description }: Omit<IAboutProps,'alt' | 'bgPhoto'>) {
    return (
        <div className={styles['food-item-wrapper']}>
            <div className={styles['menu-btn-and-h5-wrapper']}>
                <h5 className={styles['h5']}>{children}</h5>
                <MoreButton anchor={anchor} icon={icon}>{btnText}</MoreButton>
            </div>
            <p className={styles['paragraph']}>
                {description}
            </p>
        </div>
    )
}