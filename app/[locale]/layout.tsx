import { NextIntlClientProvider, hasLocale } from 'next-intl';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { routing } from '@/i18n/routing';
import { Toaster } from '@/components/ui/sonner';
import Footer from '@/components/Footer';
import { setRequestLocale } from 'next-intl/server';

import '../globals.css';

export const metadata: Metadata = {
  title: 'Private Surgeon',
  description: 'Website for the best surgeon',
};

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

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

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={`min-h-screen flex flex-col ${manrope.className}`}>
        <NextIntlClientProvider>
          <Navbar />
          <main className="mt-[65px] sm:mt-19 flex-grow font-work-sans">
            {children}
          </main>
          <Footer />
          <Toaster richColors />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
