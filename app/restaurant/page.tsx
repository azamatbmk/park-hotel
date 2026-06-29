import type { Metadata } from "next";
import HeroSection from "../components/hero-section/hero-section";
import FoodMenu from "./food-card";
import FotoGallery from "./foto-gallery";
import RestaurantBookingPhone from "../components/restaurant-booking/restaurant-booking";
import PagesHeroSectionBackground from "../components/photo-background/photo-background";
import restBg from "../../public/photos/restbg.webp"
import { createMetadata } from "../lib/seo";
import { PAGE_SEO } from "../lib/page-seo";

export const metadata: Metadata = createMetadata({
  title: PAGE_SEO.restaurant.title,
  description: PAGE_SEO.restaurant.description,
  keywords: PAGE_SEO.restaurant.keywords,
  path: PAGE_SEO.restaurant.path,
});

export default function RestaurantPage() {
    return (
        <main>
            <HeroSection
                background={
                    <PagesHeroSectionBackground
                        src={restBg}
                        alt="Фото ресторана"
                        h2={PAGE_SEO.restaurant.h1}
                    />
                }
                overlay={true}
            />
            <RestaurantBookingPhone />
            <FoodMenu />
            <FotoGallery />
        </main>
    )
}
