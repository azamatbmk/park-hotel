import About from "../components/about/about";
import ImageCarousel from "../components/carousel/carousel";
import HeroSection from "../components/hero-section/hero-section";
import aboutBg from "../../public/photos/aboutbg.jpg"
import roomsBg from "../../public/photos/roomsbg.png"
import restBg from "../../public/photos/restbg.png"
import spaBg from "../../public/photos/spabg.png"
import rightTopArrow from "../../public/er.svg"
import { aboutImages, aboutDescription } from "./constants";
import { roomsDescription, roomsImages } from "../rooms/constants";
import { restaurantDescription, restaurantImages } from "../restaurant/constants";
import { spaDescription, spaImages } from "../pool/constants";

 
export default function MainPage() {
    return (
        <>
            <HeroSection />
            <About
                description={aboutDescription}
                bgPhoto={aboutBg}
                anchor={'/restaurant'}
                icon={rightTopArrow}>
                    {'Об отеле'}
            </About>
            <ImageCarousel images={aboutImages} />
            <About
                description={roomsDescription}
                bgPhoto={roomsBg}
                anchor={'/rooms'}
                icon={rightTopArrow}>
                    {'Номера'}
            </About>
            <ImageCarousel images={roomsImages} />
            <About
                description={restaurantDescription}
                bgPhoto={restBg}
                anchor={'/restaurant'}
                icon={rightTopArrow}>
                    {'Ресторан'}
            </About>
            <ImageCarousel images={restaurantImages} />
            <About
                description={spaDescription}
                bgPhoto={spaBg}
                anchor={'/pool'}
                icon={rightTopArrow}>
                    {'Бассейн & спа'}
            </About>
            <ImageCarousel images={spaImages} />
        </>
    )
}