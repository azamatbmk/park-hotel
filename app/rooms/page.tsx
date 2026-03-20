import BookingBlock from "../components/booking/booking";
import HeroSection from "../components/hero-section/hero-section";
import PagesHeroSectionBackground from "../components/photo-background/photo-background";
import roomsPageBg from "../../public/photos/rooms-page-bg.png"
import H2HeaderComponent from "../components/h2-header/h2-header";
// import LuxRoom from "./lux-room";
import leftImageOne from "../../public/photos/rooms7.png"
import leftImageOneReact from '../../public/photos/Lux1/722.jpg'
import topImageOne from "../../public/photos/rooms8.png"
import topImageOneReact from "../../public/photos/Lux1/734.jpg"
import leftBootomImageOne from "../../public/photos/rooms9.png"
import leftBootomImageOneReact from "../../public/photos/Lux1/835.jpg"
import rightBottomImageOne from "../../public/photos/rooms10.png"
import rightBottomImageOneReact from "../../public/photos/Lux1/846.jpg"
import leftImageTwo from "../../public/photos/rooms11.png"
import leftImageTwoReact from '../../public/photos/Lux2/P1195008.jpg'
import topImageTwo from "../../public/photos/rooms12.png"
import topImageTwoReact from "../../public/photos/Lux2/P1195032.jpg"
import leftBootomImageTwo from "../../public/photos/rooms13.png"
import leftBootomImageTwoReact from "../../public/photos/Lux2/P1195071.jpg"
import rightBottomImageTwo from "../../public/photos/rooms14.png"
import rightBottomImageTwoReact from "../../public/photos/Lux2/P1195030.jpg"
import leftImageThree from "../../public/photos/rooms15.png"
import leftImageThreeReact from '../../public/photos/Lux3/P1195123.jpg'
import topImageThree from "../../public/photos/rooms16.png"
import topImageThreeReact from "../../public/photos/Lux3/P1195134.jpg"
import leftBootomImageThree from "../../public/photos/rooms17.png"
import leftBootomImageThreeReact from "../../public/photos/Lux3/P1195207.jpg"
import rightBottomImageThree from "../../public/photos/rooms18.png"
import rightBottomImageThreeReact from "../../public/photos/Lux3/P1195237.jpg"
import mobileImageOne from "../../public/photos/rooms-mobile1.png"
import mobileImageTwo from "../../public/photos/rooms-mobile2.png"
import mobileImageThree from "../../public/photos/rooms-mobile3.png"
import LuxRoomReact from "../components/react-photo-gallery/react-photo-gallery";

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
                // bookingBlock={<Otelix />}
                overlay={true}
            />
            <H2HeaderComponent children={'Люкс 1'} />
            <LuxRoomReact
                mobileImageSrc={mobileImageOne}
                leftImageSrc={leftImageOne}
                leftImageSrcReact={leftImageOneReact}
                topImageSrc={topImageOne}
                topImageSrcReact={topImageOneReact}
                leftBottobImageSrc={leftBootomImageOne}
                leftBottobImageSrcReact={leftBootomImageOneReact}
                rightBottomImageSrc={rightBottomImageOne}
                alt="Фото номера"
                rightBottomImageSrcReact={rightBottomImageOneReact}
                h2={"Однокомнатный номер с\u00A0двуспальной кроватью"}
                description={"Однокомнатный номер категории «люкс» оформлен в современном стиле и\u00A0оснащён всем необходимым для комфортного проживания. В номере — двуспальная кровать и\u00A0выход на\u00A0балкон."}
                price={'12 000'}
                square={20}
                path={'/luxroom'}
            />
            <H2HeaderComponent children={'Люкс 2'} />
            <LuxRoomReact
                mobileImageSrc={mobileImageTwo}
                leftImageSrc={leftImageTwo}
                leftImageSrcReact={leftImageTwoReact}
                topImageSrc={topImageTwo}
                topImageSrcReact={topImageTwoReact}
                leftBottobImageSrc={leftBootomImageTwo}
                leftBottobImageSrcReact={leftBootomImageTwoReact}
                rightBottomImageSrc={rightBottomImageTwo}
                rightBottomImageSrcReact={rightBottomImageTwoReact}
                alt="Фото номера"
                h2={"Однокомнатный номер с\u00A0раздельными кроватями"}
                description={"Однокомнатный номер с раздельными кроватями подойдёт для\u00A0комфортного размещения двух гостей. Светлый интерьер, продуманная планировка и\u00A0спокойная атмосфера создают все условия для\u00A0отдыха."}
                price={'12 000'}
                square={20}
                sectionClassName={'foto-section-left'}
                path={'/luxroom2'}
            />
            <H2HeaderComponent children={'Люкс 3'} />
            <LuxRoomReact
                mobileImageSrc={mobileImageThree}
                leftImageSrc={leftImageThree}
                leftImageSrcReact={leftImageThreeReact}
                topImageSrc={topImageThree}
                topImageSrcReact={topImageThreeReact}
                leftBottobImageSrc={leftBootomImageThree}
                leftBottobImageSrcReact={leftBootomImageThreeReact}
                rightBottomImageSrc={rightBottomImageThree}
                rightBottomImageSrcReact={rightBottomImageThreeReact}
                alt="Фото номера"
                h2={"Двухкомнатный номер с\u00A0двуспальной кроватью"}
                description={"Двухкомнатный номер с отдельной спальней и гостиной — удобный вариант для\u00A0тех, кто\u00A0предпочитает больше пространства. Современный интерьер и\u00A0все\u00A0необходимые удобства обеспечивают комфортное проживание."}
                price={'17 000'}
                square={32}
                path={'/luxroom3'}
            />
        </main>
    )
}