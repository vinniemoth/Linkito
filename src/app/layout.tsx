import type { Metadata } from "next";
import { montserrat } from "@/fonts/fonts";
import "./globals.css";
import Header from "@/components/header";
import Providers from "@/providers/Providers";

export const metadata: Metadata = {
  title: "Linkito URL Shortener",
  description: "Shorten your URLs with Linkito",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <Providers>
          <Header></Header>
          {children}
        </Providers>
      </body>
    </html>
  );
}
