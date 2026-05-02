import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700', '800']
});

export const metadata = {
  title: "PRIMEAZE | Premium Rental Property Management in Bengaluru",
  description: "Exclusive, hand-visited, perfectly curated rental properties for families, professionals, and corporate clients in Bengaluru. Not available anywhere else.",
  keywords: ["premium rentals bangalore", "luxury property management", "family homes bangalore", "corporate housing bengaluru"],
  authors: [{ name: "PRIMEAZE" }],
  openGraph: {
    title: "PRIMEAZE | Premium Rental Properties",
    description: "Curated rental properties in Bengaluru. Not available anywhere else.",
    url: "https://primeaze.co",
    siteName: "PRIMEAZE",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PRIMEAZE | Premium Rental Properties",
    description: "Curated rental properties in Bengaluru. Not available anywhere else.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.variable} font-montserrat antialiased bg-light-bg text-text-dark`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
