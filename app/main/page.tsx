import About from "../components/about/about";
import ImageCarousel from "../components/carousel/carousel";
import HeroSection from "../components/hero-section/hero-section";
import aboutBg from "../../public/photos/aboutbg.jpg"
import roomsBg from "../../public/photos/roomsbg.png"
import restBg from "../../public/photos/restbg.png"
import spaBg from "../../public/photos/spabg.png"
import rightTopArrow from "../../public/er.svg"
import { aboutImages, aboutDescription, mobileAboutDescriptionPartOne, mobileAboutDescriptionPartTwo } from "./constants";
import { roomsDescription, roomsImages } from "../rooms/constants";
import { restaurantDescription, restaurantImages } from "../restaurant/constants";
import { spaDescription, spaImages } from "../pool/constants";
import VideoBackground from "../components/video-background/video-background";

 
export default function MainPage() {
    return (
        <>
            <HeroSection
                background={<VideoBackground />}
                overlay={false}
                mobileMargin={true}
            />
            <About
                description={aboutDescription}
                descriptionPartOne={mobileAboutDescriptionPartOne}
                descriptionPartTwo={mobileAboutDescriptionPartTwo}
                bgPhoto={aboutBg}
                alt={'Фото отеля'}

                anchor={'/restaurant'}>
                    {'Об отеле'}
            </About>
            <ImageCarousel images={aboutImages} />
            <About
                description={roomsDescription}
                descriptionPartOne={roomsDescription}
                bgPhoto={roomsBg}
                alt={'Фото номеров'}
                anchor={'/rooms'}
                btnText={'подробнее'}
                icon={rightTopArrow}>
                    {'Номера'}
            </About>
            <ImageCarousel images={roomsImages} />
            <About
                description={restaurantDescription}
                descriptionPartOne={restaurantDescription}
                bgPhoto={restBg}
                alt={'Фото ресторана'}
                anchor={'/restaurant'}
                btnText={'подробнее'}
                icon={rightTopArrow}
                right={true}>
                    {'Ресторан'}
            </About>
            <ImageCarousel images={restaurantImages} />
            <About
                description={spaDescription}
                descriptionPartOne={spaDescription}
                bgPhoto={spaBg}
                alt={'Фото бассейна'}
                anchor={'/pool'}
                btnText={'подробнее'}
                icon={rightTopArrow}>
                    {'Бассейн & спа'}
            </About>
            <ImageCarousel images={spaImages} />
        </>
    )
}