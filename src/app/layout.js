// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/HomeLayout/Header";
import Footer from "@/components/HomeLayout/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "fitStyla",
  description: "Your personal AI stylist & digital wardrobe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
