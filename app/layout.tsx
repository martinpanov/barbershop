import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Roboto } from 'next/font/google';
import Navbar from './Navbar/Navbar';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Footer from './Footer/Footer';
import { Toaster } from 'react-hot-toast';
config.autoAddCss = false;

const playFairDisplay = Playfair_Display({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  style: ['normal', 'italic'],
  variable: '--font-playfair'
});

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto'
});

export const metadata: Metadata = {
  title: 'Barbershop',
  description: 'Barbershop website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playFairDisplay.variable} ${roboto.variable} text-white`}>
      <body>
        <Navbar />
        <Toaster
          position="top-right"
          reverseOrder={true}
        />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
