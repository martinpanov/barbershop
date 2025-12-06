import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import type { Metadata } from "next";

import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

import Navigation from "../components/Navigation";
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
