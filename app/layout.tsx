import "./globals.css";
import type { Metadata } from "next";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Toaster } from "@/components/ui/sonner";
import Navigation from "../components/Navigation";
import React from "react";
import Footer from "@/components/Footer";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Barbershop",
  description: "Barbershop website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Navigation />
        <Toaster />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
