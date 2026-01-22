import About from "../components/about/about";
import ImageCarousel from "../components/carousel/carousel";
import HeroSection from "../components/hero-section/hero-section";

 const aboutImages = [
    { src: '/photos/about2.png', alt: 'Photo 1', title: 'Ресторан1' },
    { src: '/photos/about3.png', alt: 'Photo 2', title: 'Ресторан2' },
    { src: '/photos/about4.png', alt: 'Photo 3', title: 'Ресторан3' }
  ];

export default function MainPage() {
    return (
        <>
            <HeroSection />
            <About />
            <ImageCarousel images={aboutImages} />
        </>
    )
}