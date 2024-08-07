import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "./main.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Huxley Web Design",
  description: "Huxley Web Design Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  if (typeof window === 'object'){
    require("assets/vendor/isotope-layout/isotope.pkgd.min.js")
    require("assets/vendor/swiper/swiper-bundle.min.js")
  }
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
