import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { AuthProvider } from "@/context/AuthProvider";
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
  title: "Harigeet Creations | Elegance in Every Thread",
  description: "Discover our premium collection of bespoke ethnic wear, garments, and jewellery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${playfair.variable} ${lato.variable} antialiased min-h-screen bg-beige overflow-x-hidden selection:bg-champagne selection:text-white`}>
        <RoyalIntro />
        <CustomCursor />
        <AuthProvider>
          <WishlistProvider>
            <CartProvider>
              {children}
            </CartProvider>
          </WishlistProvider>
        </AuthProvider>
      </body>
    </html>
  );
}