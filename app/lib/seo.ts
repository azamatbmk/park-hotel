import type { Metadata } from "next";

export const SITE_NAME = "Парк-отель Дзуарикау";
export const SITE_DESCRIPTION =
  "Парк-отель «Дзуарикау» в Северной Осетии: номера люкс, ресторан, бассейн и баня среди гор. Отдых рядом с Владикавказом и Фиагдоном.";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://park-hotel-dzuarikau.ru";

export const HOTEL_PHONE = "+7 (928) 070-11-55";
export const HOTEL_ADDRESS =
  "Республика Северная Осетия — Алания, село Дзуарикау, улица А. Кцоева, 25";

export const YANDEX_MAPS_URL =
  "https://yandex.ru/maps/org/park_otel_dzuarikau/171424752573/";
export const WHATSAPP_URL = "https://wa.me/79280701155";

export const OG_IMAGE = "/photos/aboutbg.jpg";

export function createMetadata({
  title,
  description = SITE_DESCRIPTION,
  path = "",
  noIndex = false,
}: {
  title: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
}): Metadata {
  const canonicalPath = path || "/";
  const url = canonicalPath === "/" ? SITE_URL : `${SITE_URL}${canonicalPath}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "ru_RU",
      type: "website",
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: SITE_NAME,
        },
      ],
    },
  };
}

export const hotelJsonLd = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}${OG_IMAGE}`,
  telephone: HOTEL_PHONE,
  address: {
    "@type": "PostalAddress",
    streetAddress: "улица А. Кцоева, 25",
    addressLocality: "Дзуарикау",
    addressRegion: "Республика Северная Осетия — Алания",
    addressCountry: "RU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.00455,
    longitude: 44.388426,
  },
  sameAs: [YANDEX_MAPS_URL, WHATSAPP_URL],
};
