import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local"
import NavMenu from "./components/nav-menu/nav-menu";
import Footer from "./components/footer/footer";
import OtelixGlobal from "./components/otelix-ooking/otelix-global";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "./lib/seo";

const dzuarikau = localFont({
  src: '../public/fonts/Morington_RUS.otf',
  variable: '--font-dzuarikau'
})

const inter = Inter({
  variable: "--font-inter-regular",
  weight: "300",
  subsets: ["latin", "cyrillic"],
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${dzuarikau.variable} ${inter.variable} ${inter.className}`}>
        <NavMenu />
        <OtelixGlobal />
        {children}
        <Footer />
      </body>
    </html>
  );
}
