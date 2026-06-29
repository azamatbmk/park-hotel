import type { Metadata } from "next";
import styles from "./page.module.css";
import MainPage from "./main/page";
import JsonLd from "./components/json-ld/json-ld";
import { createMetadata, hotelJsonLd } from "./lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Главная",
  path: "/",
});

export default function Home() {
  return (
    <div className={styles['page']}>
      <JsonLd data={hotelJsonLd} />
      <main className={styles['main']}>
        <h1 className="visually-hidden">Парк-отель Дзуарикау — отдых в горах Северной Осетии</h1>
        <MainPage />
      </main>
    </div>
  );
}
