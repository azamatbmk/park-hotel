import BookingBlock from "../components/booking/booking";
import HeroSection from "../components/hero-section/hero-section";
import FoodMenu from "./food-card";
import FotoGallery from "./foto-gallery";
import PagesHeroSectionBackground from "../components/photo-background/photo-background";
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
                overlay={true}
            />
            <FoodMenu />
            <FotoGallery />
        </main>
    )
}