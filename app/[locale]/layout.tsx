import { NextIntlClientProvider, hasLocale } from 'next-intl';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { routing } from '@/i18n/routing';

import '../globals.css';

export const metadata: Metadata = {
  title: 'Privet Surgeon',
  description: 'Website for the best surgeon',
};

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
});

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={manrope.className}>
        <NextIntlClientProvider>
          <main className="font-work-sans">
            <Navbar />
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
