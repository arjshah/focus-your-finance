import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Focus your Finance | Professional Tax Services",
  description: "Expert tax services for individuals and businesses. Get personalized tax solutions and financial guidance to secure your future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geist.className} antialiased bg-stone-50`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
