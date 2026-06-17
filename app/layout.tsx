import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
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
    <html lang="en" className={`${geistSans.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-slate-900 text-slate-100">
        <Navbar />
        <main className="flex-1 p-6 max-w-7xl mx-auto w-full">{children}</main>
      </body>
    </html>
  );
}
