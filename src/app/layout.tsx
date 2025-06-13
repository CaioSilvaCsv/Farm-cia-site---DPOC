import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

// Configuração das fontes
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}