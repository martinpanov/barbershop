import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display } from 'next/font/google';
import Navbar from './Navbar/Navbar';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const playFairDisplay = Playfair_Display({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  style: ['normal', 'italic']
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
    <html lang="en">
      <body className={playFairDisplay.className}>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
