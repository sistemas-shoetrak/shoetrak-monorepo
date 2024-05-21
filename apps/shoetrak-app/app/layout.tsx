import '@repo/ui/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import AuthProvider from '@/app/_providers/auth';
import { GetSession } from '@/app/_actions';
import { redirect } from 'next/navigation';
import PrivateRoute from '@/app/_providers/private-route';
import { ThemeProvider } from '@/app/_providers/theme';
import { DashboardProvider } from '@/modules';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shoetrak App',
  description: 'Created by Shoetrak',
  keywords:
    'shoetrak, app, gestão de calçados, gestão, calçados, estoque, gestão de estoque, controle de estoque, controle, controle de calçados',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): Promise<JSX.Element> {
  const session = await GetSession();

  return (
    <html lang="pt-BR" translate="no">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <PrivateRoute session={session}>
            <AuthProvider>
              <DashboardProvider>{children}</DashboardProvider>
            </AuthProvider>
          </PrivateRoute>
        </ThemeProvider>
      </body>
    </html>
  );
}
