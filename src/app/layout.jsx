import { Geist, Geist_Mono, Roboto } from "next/font/google";
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
    generator: 'Next.js',
  applicationName: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'Seb' }, { name: 'Josh', url: 'https://nextjs.org' }],
  creator: 'Jiachi Liu',
  publisher: 'Sebastian Markbåge',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
}};

const roboto=Roboto({
  weight:'500',
  subsets:['latin']
})
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${roboto.className} antialiased`}
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
