import type { Metadata } from "next";
import { Fredoka, Amatic_SC, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const amatic = Amatic_SC({
  variable: "--font-amatic",
  subsets: ["latin"],
  weight: ["700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Wild Thing Colombian Coffee | Colombian Café in West Ealing",
  description: "A taste of Colombia in West Ealing. Artisan coffee, homemade arepas and empanadas, and fresh tropical juices.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fredoka.variable} ${amatic.variable} ${nunito.variable} scroll-smooth`}>
      <body className="antialiased bg-[var(--color-page-bg)] text-[var(--color-charcoal)] min-h-screen flex flex-col font-body">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
