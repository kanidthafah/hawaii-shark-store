import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Outfit } from "next/font/google";
import ShopContextProvider from "@/context/ShopContext";
import SearchBar from "@/components/SearchBar";
  import { ToastContainer } from 'react-toastify';

const outfit = Outfit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "HAWAII SHARK",
  description: "Hawaii Shark Official Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ShopContextProvider>
        <body className={outfit.className}>
          <ToastContainer />
          <Navbar />
          <SearchBar />
          {children}
          <Footer />
        </body>
      </ShopContextProvider>
    </html>
  );
}
