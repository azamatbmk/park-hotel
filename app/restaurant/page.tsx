import type { Metadata } from "next";
import HeroSection from "../components/hero-section/hero-section";
import FoodMenu from "./food-card";
import FotoGallery from "./foto-gallery";
import PagesHeroSectionBackground from "../components/photo-background/photo-background";
import restBg from "../../public/photos/restbg.png"
import { createMetadata } from "../lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Ресторан",
  description:
    "Ресторан парк-отеля «Дзуарикау»: завтраки, кавказская и европейская кухня, барное меню в уютной атмосфере.",
  path: "/restaurant",
});

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
                overlay={true}
            />
            <FoodMenu />
            <FotoGallery />
        </main>
    )
}