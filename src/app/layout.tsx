import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import CustomCursor from "@/components/ui/CustomCursor";
import RoyalIntro from "@/components/RoyalIntro";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Harigeet Creations | Elegance in Every Stitch",
  description: "Premium Indian ethnic fashion, garments, jewellery, accessories, fabrics, boutique collections and custom stitching.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen flex flex-col font-sans bg-ivory text-gray-900 overflow-x-hidden selection:bg-champagne selection:text-burgundy">
        <RoyalIntro />
        <CustomCursor />
        <WishlistProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </WishlistProvider>
      </body>
    </html>
  );
}