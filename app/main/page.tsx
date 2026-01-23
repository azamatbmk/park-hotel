import About from "../components/about/about";
import ImageCarousel from "../components/carousel/carousel";
import HeroSection from "../components/hero-section/hero-section";
import restaurantPic from "../../public/photos/about-1.jpg"
import roomsBg from "../../public/photos/roomsbg.png"
import rightTopArrow from "../../public/er.svg"

 const restaurantImages = [
    { src: '/photos/about2.png', alt: 'Photo 1', title: 'Ресторан1' },
    { src: '/photos/about3.png', alt: 'Photo 2', title: 'Ресторан2' },
    { src: '/photos/about4.png', alt: 'Photo 3', title: 'Ресторан3' }
  ];

  const restDescription = 'Парк-отель «Дзуарикау» расположен в живописном уголке Осетии, недалеко от Владикавказа и вблизи живописного поселка Фиагдон. Это идеальное место для отдыха на природе — в тишине, среди гор и чистого воздуха. Уютные номера, гостеприимная атмосфера и красота окружающих пейзажей сделают ваш отдых по-настоящему особенным.'
  const roomsDescription = 'Уютные и стильные номера категории «люкс». Каждый номер оборудован всем необходимым для отдыха. Простор, тишина и вид на живописные пейзажи создают идеальные условия для полноценного расслабления и спокойного отдыха в гармонии с природой.'



export default function MainPage() {
    return (
        <>
            <HeroSection />
            <About
                description={restDescription}
                bgPhoto={restaurantPic}
                anchor={'/restaurant/page.tsx'}
                icon={rightTopArrow}>
                    {'Об отеле'}
            </About>
            <ImageCarousel images={restaurantImages} />
            <About
                description={roomsDescription}
                bgPhoto={roomsBg}
                anchor={'/rooms/page.tsx'}
                icon={rightTopArrow}>
                    {'Номера'}
            </About>
        </>
    )
}