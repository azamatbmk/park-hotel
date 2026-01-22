import Image from "next/image";
import styles from "./page.module.css";
import MainButton from "./components/button/button";
import BookingBlock from "./components/booking/booking";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* <MainButton /> */}
        <BookingBlock />
      </main>
    </div>
  );
}
