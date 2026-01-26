import HeroSection from "../components/hero-section/hero-section";
import PagesHeroSectionBackground from "../restaurant/main-section-bg";
import excursionsPageBg from "../../public/photos/excursionsbg.png"
import BookingBlock from "../components/booking/booking";
import H2HeaderComponent from "../components/h2-header/h2-header";

export default function Contacts() {

    
    return (
        <main>
            <HeroSection 
                background={
                    <PagesHeroSectionBackground
                        src={excursionsPageBg}
                        alt="Фото Даргавс"
                        h2="Экскурсии"
                    />
                }
                bookingBlock={<BookingBlock />}
            />
            <H2HeaderComponent children={'Достопримечательности'}/>
            
        </main>
    )
}