import BookingBlock from "../components/booking/booking";
import HeroSection from "../components/hero-section/hero-section";
import PagesHeroSectionBackground from "../restaurant/main-section-bg";
import roomsPageBg from "../../public/photos/rooms-page-bg.png"
import H2HeaderComponent from "../components/h2-header/h2-header";
import LuxRoom from "./lux-room";
import leftImageOne from "../../public/photos/rooms7.png"
import topImageOne from "../../public/photos/rooms8.png"
import leftBootomImageOne from "../../public/photos/rooms9.png"
import rightBottomImageOne from "../../public/photos/rooms10.png"
import leftImageTwo from "../../public/photos/rooms11.png"
import topImageTwo from "../../public/photos/rooms12.png"
import leftBootomImageTwo from "../../public/photos/rooms13.png"
import rightBottomImageTwo from "../../public/photos/rooms14.png"
import leftImageThree from "../../public/photos/rooms11.png"
import topImageThree from "../../public/photos/rooms12.png"
import leftBootomImageThree from "../../public/photos/rooms13.png"
import rightBottomImageThree from "../../public/photos/rooms14.png"

export default function RoomsPage() {
    return (
        <main>
            <HeroSection
                background={
                    <PagesHeroSectionBackground
                        src={roomsPageBg}
                        alt="Фото номера"
                        h2="Номера"
                    />
                }
                bookingBlock={<BookingBlock />}
            />
            <H2HeaderComponent children={'Люкс 1'}/>
            <LuxRoom
                leftImageSrc={leftImageOne}
                topImageSrc={topImageOne}
                leftBottobImageSrc={leftBootomImageOne}
                rightBottomImageSrc={rightBottomImageOne}
                alt="Фото номера"
                h2="Однокомнатный номер с двуспальной кроватью"
                description="Однокомнатный номер категории «люкс» оформлен в современном стиле и оснащён всем необходимым для комфортного проживания. В номере — двуспальная кровать и выход на балкон."
                price={12000}
                square={20}
            />
            <H2HeaderComponent children={'Люкс 2'}/>
            <LuxRoom
                leftImageSrc={leftImageTwo}
                topImageSrc={topImageTwo}
                leftBottobImageSrc={leftBootomImageTwo}
                rightBottomImageSrc={rightBottomImageTwo}
                alt="Фото номера"
                h2="Однокомнатный номер с раздельными кроватями"
                description="Однокомнатный номер с раздельными кроватями подойдёт для комфортного размещения двух гостей. Светлый интерьер, продуманная планировка и спокойная атмосфера создают все условия для отдыха."
                price={12000}
                square={20}
                sectionClassName={'foto-section-left'}
            />
            <H2HeaderComponent children={'Люкс 3'}/>
            <LuxRoom
                leftImageSrc={leftImageThree}
                topImageSrc={topImageThree}
                leftBottobImageSrc={leftBootomImageThree}
                rightBottomImageSrc={rightBottomImageThree}
                alt="Фото номера"
                h2="Однокомнатный номер с двуспальной кроватью"
                description="Двухкомнатный номер с отдельной спальней и гостиной — удобный вариант  для тех, кто предпочитает больше пространства. Современный интерьер  и все необходимые удобства обеспечивают комфортное проживание."
                price={17000}
                square={32}
            />
        </main>
    )
}