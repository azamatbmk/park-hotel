import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local"
import NavMenu from "./components/nav-menu/nav-menu";

const dzuarikau = localFont({
  src: '../public/fonts/Morington_RUS.otf',
  variable: '--font-dzuarikau'
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      <body className={`${geistSans.variable} ${geistMono.variable} ${dzuarikau.variable}`}>        
        {children}
      </body>
    </html>
  );
}
