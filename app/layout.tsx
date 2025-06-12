import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import "./animations.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Galaxy Academy",
  description:
    "Galaxy Academy is your portal to the stars, offering a vast array of courses and resources to explore the universe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}

        <Footer />
      </body>
    </html>
  );
}
