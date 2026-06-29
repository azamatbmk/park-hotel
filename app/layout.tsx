import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local"
import NavMenu from "./components/nav-menu/nav-menu";
import Footer from "./components/footer/footer";
import Otelix from "./otelix/page";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "./lib/seo";

const dzuarikau = localFont({
  src: '../public/fonts/Morington_RUS.otf',
  variable: '--font-dzuarikau'
})

const inter = Inter({
  variable: "--font-inter-regular",
  weight: "300"
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: SITE_NAME,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className={`${dzuarikau.variable} ${inter.variable}`}>
        <NavMenu />
        <Otelix />
        {children}
        <Footer />
      </body>
    </html>
  );
}
