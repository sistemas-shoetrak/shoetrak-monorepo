import '@repo/ui/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import AuthProvider from './_providers/auth';
import { ThemeProvider } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shoetrak App',
  description: 'Created by Shoetrak',
  keywords:
    'shoetrak, app, gestão de calçados, gestão, calçados, estoque, gestão de estoque, controle de estoque, controle, controle de calçados',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="pt-BR" translate="no">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
