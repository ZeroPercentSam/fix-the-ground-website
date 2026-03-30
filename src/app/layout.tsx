import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fix The Ground | Rebuilding California's Soil Infrastructure",
  description: "Fix The Ground is raising $5M to deploy three pilot inner-city composting facilities that turn California's organic waste crisis into a soil regeneration engine.",
  keywords: ["soil regeneration", "composting", "California", "SB 1383", "organic waste", "agriculture", "investment"],
  openGraph: {
    title: "Fix The Ground | Rebuilding California's Soil Infrastructure",
    description: "Turning a $23M ton waste crisis into a regenerative economic engine.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-sand-50">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
