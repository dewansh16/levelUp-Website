import type { Metadata } from "next";
import { Archivo_Black, Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

const barlow = Barlow({
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-cond",
  weight: ["600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Level Up MMA Academy — Korba, Chhattisgarh",
  description:
    "Mixed Martial Arts, Karate, Taekwondo, Boxing, Judo, Ju-Jitsu and self-defence for children, teenagers and adults. Three training centres in Korba. First class is free.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${archivoBlack.variable} ${barlow.variable} ${barlowCondensed.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
