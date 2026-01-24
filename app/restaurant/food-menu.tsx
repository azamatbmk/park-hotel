import FoodMenuItem from "./food-menu-item";
import rightTopArrow from "../../public/er.svg"

export default function FoodMenu() {
    return (
        <section>
            <FoodMenuItem
                children={'Завтрак'}
                anchor={'#'}
                icon={rightTopArrow}
                btnText={'меню'}
                description={'Завтраки, которые не только насытят, но и подарят энергию на весь день. С 9:00 до 12:00.'}    
            />
        </section>
    )
}