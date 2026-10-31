import type { Metadata } from 'next';
import { Pinyon_Script, Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import { BakeryProvider } from '@/context/BakeryContext';
import SmoothScrollProvider from '@/components/storefront/SmoothScrollProvider';

const pinyonScript = Pinyon_Script({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-curvy-script',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-editorial',
  display: 'swap',
  style: ['normal', 'italic'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-jost',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Star Bakery Atelier • Heritage Sourdough & Pâtisserie Privée",
  description: "An aristocratic lineage of slow stone-hearth fermentation. Living sourdough culture, 100% stoneground heritage grains, and unhurried artisanal baking.",
  keywords: ["Star Bakery", "Luxury Sourdough", "Private Pâtisserie", "Artisanal Bakery", "Heritage Grains"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${pinyonScript.variable} ${playfair.variable} ${inter.variable} antialiased`}>
      <body className="bg-[#fafaf9] text-[#1c1917] selection:bg-[#d6d3d1] selection:text-[#18181b]">
        <BakeryProvider>
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
        </BakeryProvider>
      </body>
    </html>
  );
}
