import BookingBlock from "../components/booking/booking";
import HeroSection from "../components/hero-section/hero-section";
import FoodMenu from "./food-card";
import FotoGallery from "./foto-gallery";
import PagesHeroSectionBackground from "./main-section-bg";
import restBg from "../../public/photos/restbg.png"


export default function RestaurantPage() {
    return (
        <main>
            <HeroSection
                background={
                    <PagesHeroSectionBackground
                        src={restBg}
                        alt="Фото ресторана"
                        h2="РЕСТОРАН"
                    />
                }
                bookingBlock={<BookingBlock />}
            />
            <FoodMenu />
            <FotoGallery />
        </main>
    )
}