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
      <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="assets/vendor/php-email-form/validate.js"></script>
      <script src="assets/vendor/aos/aos.js"></script>
      <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
      <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
      <script src="assets/vendor/imagesloaded/imagesloaded.pkgd.min.js"></script>
      <script src=""></script>
      <script src=""></script>

      <script src="assets/js/main.js"></script>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
