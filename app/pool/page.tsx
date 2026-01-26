import BookingBlock from "../components/booking/booking";
import HeroSection from "../components/hero-section/hero-section";
import PagesHeroSectionBackground from "../restaurant/main-section-bg";
import poolPageBg from "../../public/photos/spa-paige-bg.png"
import H2HeaderComponent from "../components/h2-header/h2-header";
import PoolFotoSection from "./pool-foto";
import poolOneFotoSrc from "../../public/photos/spa7.png"
import poolTwoFotoSrcLeft from "../../public/photos/spa8.png"
import poolTwoFotoSrcRight from "../../public/photos/spa9.png"
import poolThreeFotoSrcOne from "../../public/photos/spa10.png"
import poolThreeFotoSrcTwo from "../../public/photos/spa11.png"
import poolThreeFotoSrcThree from "../../public/photos/spa12.png"
import spaOneFotoSrc from "../../public/photos/spa13.png"
import spaTwoFotoSrcLeft from "../../public/photos/spa14.png"
import spaTwoFotoSrcRight from "../../public/photos/spa15.png"
import spaThreeFotoSrcOne from "../../public/photos/spa3.png"
import spaThreeFotoSrcTwo from "../../public/photos/spa16.png"
import spaThreeFotoSrcThree from "../../public/photos/spa17.png"
import poolServiceIcon from "../../public/pool-service.svg"
import spaServiceIcon from "../../public/spa-service-icon.svg"

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
            <PoolFotoSection 
                infoBoxLefSide={false}
                oneFotoSrc={poolOneFotoSrc}
                twoFotoSrcLeft={poolTwoFotoSrcLeft}
                twoFotoSrcRight={poolTwoFotoSrcRight}
                threeFotoSrcOne={poolThreeFotoSrcOne}
                threeFotoSrcTwo={poolThreeFotoSrcTwo}
                threeFotoSrcThree={poolThreeFotoSrcThree}
                poolServiceIcon={poolServiceIcon}
                alt={'Фото бассейна'}
                h2={'Бассейн'}
                description={'Открытый подогреваемый бассейн парк-отеля «Дзуарикау» доступен для гостей с 10:00 до 17:00. Для комфортного отдыха предусмотрены солнечные зоны для загара и тени под навесами.'}
                buttonText={'Забронировать бассейн'}
            />
            <H2HeaderComponent
                children={'Баня'}
            />
            <PoolFotoSection
                infoBoxLefSide={true}
                oneFotoSrc={spaOneFotoSrc}
                twoFotoSrcLeft={spaTwoFotoSrcLeft}
                twoFotoSrcRight={spaTwoFotoSrcRight}
                threeFotoSrcOne={spaThreeFotoSrcOne}
                threeFotoSrcTwo={spaThreeFotoSrcTwo}
                threeFotoSrcThree={spaThreeFotoSrcThree}
                poolServiceIcon={spaServiceIcon}
                alt={'Фото бани'}
                h2={'Баня'}
                description={'Банный комплекс парк-отеля «Дзуарикау» включает просторную парную и деревянную охлаждающую купель. Для отдыха предусмотрена зона, где гости могут расслабиться и восстановить силы. Также в банный комплекс можно заказать блюда из меню ресторана.'}
                buttonText={'Забронировать баню'}
            />
        </main>
    )
}