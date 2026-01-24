import BookingBlock from "../components/booking/booking";
import HeroSection from "../components/hero-section/hero-section";
import RestaurantBacground from "./main-section-bg";

export default function Restaurant() {
    return (
        <HeroSection
            background={<RestaurantBacground />}
            boockingBlock={<BookingBlock />}     
        />
    )
}