import type { Metadata } from "next";
import styles from "./page.module.css";
import MainPage from "./main/page";
import JsonLd from "./components/json-ld/json-ld";
import HashScroll from "./components/hash-scroll/hash-scroll";
import { createMetadata, hotelJsonLd } from "./lib/seo";
import { PAGE_SEO } from "./lib/page-seo";

export const metadata: Metadata = createMetadata({
  title: PAGE_SEO.home.title,
  description: PAGE_SEO.home.description,
  keywords: PAGE_SEO.home.keywords,
  path: PAGE_SEO.home.path,
});

export default function Home() {
  return (
    <div className={styles['page']}>
      <JsonLd data={hotelJsonLd} />
      <HashScroll />
      <main className={styles['main']}>
        <h1 className="visually-hidden">{PAGE_SEO.home.h1}</h1>
        <MainPage />
      </main>
    </div>
  );
}
