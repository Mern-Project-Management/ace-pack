import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AosProvider } from "@/components/providers/AosProvider";

export const metadata: Metadata = {
  title: "AcePack Container Solutions | Premium Plastic Food Containers",
  description: "Manufacturer and global exporter of high-quality plastic food containers, hinge cups, portion cups, RO series, bento boxes, and sweet containers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="antialiased min-h-screen flex flex-col justify-between bg-[#FAF8F4] text-[#1A1D20]">
        <AosProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </AosProvider>
      </body>
    </html>
  );
}
