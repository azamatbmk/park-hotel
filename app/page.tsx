import Image from "next/image";
import styles from "./page.module.css";
import MainButton from "./components/buttons/more-btn";
import BookingBlock from "./components/booking/booking";
import HeroSection from "./components/hero-section/hero-section";
import MainPage from "./main/page";
import About from "./components/about/about";

export default function Home() {
  return (
    <div className={styles['page']}>
      <main className={styles['main']}>
        <MainPage />
      </main>
    </div>
  );
}
