import BookingBlock from "../components/booking/booking";
import HeroSection from "../components/hero-section/hero-section";
import FoodMenu from "./food-menu";
import RestaurantBackground from "./main-section-bg";

export default function Restaurant() {
    return (
        <main>
            <HeroSection
                background={<RestaurantBackground />}
                bookingBlock={<BookingBlock />}     
            />
            <FoodMenu />
        </main>
    )
}