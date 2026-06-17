import type { Metadata } from "next";
import { Lato, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const lato = Lato({
  weight: ["400", "700", "900"],
  variable: "--font-lato",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chowly Support Hub",
  description: "Training resources and sprint tracker for the Chowly Support team",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lato.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1 px-6 py-8 max-w-[1200px] mx-auto w-full">{children}</main>
      </body>
    </html>
  );
}
