import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Muhammad Huzaifa | Web Designer & UI/UX Specialist",
  description: "Explore the digital design portfolio of Muhammad Huzaifa. Sleek, premium, and interactive web design solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${outfit.variable}`}>
      <body>
        <div className="orb orb-primary"></div>
        <div className="orb orb-secondary"></div>
        <div className="orb orb-accent"></div>
        {children}
      </body>
    </html>
  );
}
