import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700', '800']
});

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata = {
  title: "PRIMEAZE | We find, you choose, move in.",
  description: "Exclusive rental property management in Bengaluru. Property hunt in your desired areas with end-to-end support. We find, you choose, move in. PrimeAze",
  keywords: ["premium rentals bangalore", "luxury property management", "family homes bangalore", "Commercial Spaces bengaluru"],
  authors: [{ name: "PrimeAze" }],
  openGraph: {
    title: "PrimeAze | We find, you choose, move in.",
    description: "Curated rental properties in Bengaluru. Property hunt in your desired areas.",
    url: "https://primeaze.co",
    siteName: "PRIMEAZE",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body className={`${plusJakarta.variable} ${inter.variable} font-inter antialiased bg-light-bg text-text-dark overflow-x-hidden`}>
        <Navbar />
        <main className="min-h-screen overflow-x-hidden">
          {children}
        </main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
