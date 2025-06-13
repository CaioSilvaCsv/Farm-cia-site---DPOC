import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Metadata } from 'next';

// Configuração das fontes
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: {
    default: 'DPOC: Abordagem e Tratamento', // Título padrão (para a home page)
    template: '%s | DPOC', // Ex: "Formulário | DPOC"
  },
  description: 'Uma abordagem completa sobre a Doença Pulmonar Obstrutiva Crônica (DPOC), incluindo causas, sintomas, tratamentos e classificação.',
  icons:{
    icon:"/favicon.ico"
  }
};


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