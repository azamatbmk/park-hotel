import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local"
import NavMenu from "./components/nav-menu/nav-menu";
import Footer from "./components/footer/footer";

const dzuarikau = localFont({
  src: '../public/fonts/Morington_RUS.otf',
  variable: '--font-dzuarikau'
})

const inter = Inter({
  variable: "--font-inter-regular",
  weight: "300"
})

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

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
      <body className={`${dzuarikau.variable} ${inter.variable}`}>
        {/* <NavMenu /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
