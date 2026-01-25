import BookingBlock from "../components/booking/booking";
import HeroSection from "../components/hero-section/hero-section";
import PagesHeroSectionBackground from "../restaurant/main-section-bg";
import poolPageBg from "../../public/photos/spa-paige-bg.png"
import H2HeaderComponent from "../components/h2-header/h2-header";

export default function PoolPage() {
    return (
        <main>
            <HeroSection
                background={
                    <PagesHeroSectionBackground
                        src={poolPageBg}
                        alt="Фото бассейна"
                        h2="Бассейн & Баня"
                    />
                }
                bookingBlock={<BookingBlock />}
            />
            <H2HeaderComponent
                children={'Бассейн'}
            />
        </main>
    )
}