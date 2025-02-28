import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import { Footer } from "@/components/footer";

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
      <body className={`${GeistSans.className} antialiased bg-stone-50`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
