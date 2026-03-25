import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navber from "@/component/Shared/Navber";
import CartProvider from "@/contex/CartProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Yantun Khaijan | Best Foods Restaurant",
  description:
    "Explore delicious foods at Yantun Khaijan. Discover a variety of meals, reviews, and order your favorite dishes online.",
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CartProvider>
          <Navber></Navber>

          {children}
        </CartProvider>
      </body>
    </html>
  );
}
