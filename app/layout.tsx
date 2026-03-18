import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local"
import NavMenu from "./components/nav-menu/nav-menu";
import Footer from "./components/footer/footer";
import OtelixWidget from "./components/otelix-ooking/otelix-booking";
import Otelix from "./otelix/page";

const dzuarikau = localFont({
  src: '../public/fonts/Morington_RUS.otf',
  variable: '--font-dzuarikau'
})

const inter = Inter({
  variable: "--font-inter-regular",
  weight: "300"
})

export const metadata: Metadata = {
  title: 'Park-Hotel Dzuarikau',
  description: 'Парк 0тель Дзуарикау',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
