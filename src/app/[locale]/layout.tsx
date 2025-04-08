import '@/styles/globals.css';

import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getLocale, getTranslations } from 'next-intl/server';
import { Poppins } from 'next/font/google';
import { notFound } from 'next/navigation';
import { getLangDir } from 'rtl-detect';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { routing } from '@/i18n/routing';
import Providers from '@/providers/providers';

import type { Metadata } from 'next';
import { PUBLIC_SITE_URL } from '@/utils/constants';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  subsets: ['latin', 'latin-ext'],
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Meta');

  const imageData = {
    images: [{ url: PUBLIC_SITE_URL + '/images/sozler-kosku.jpg' }],
  };

  return {
    metadataBase: new URL(PUBLIC_SITE_URL),
    title: {
      default: t('Title'),
      template: `%s • ${t('Title')}`,
    },
    description: t('Description'),
    openGraph: {
      ...imageData,
    },
    twitter: {
      card: 'summary_large_image',
      ...imageData,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const direction = getLangDir(locale);

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      dir={direction}
      suppressHydrationWarning={true}
      className="scroll-smooth"
    >
      <body
        className={`${poppins.variable} mx-auto flex flex-col flex justify-between items-center min-h-screen antialiased`}
      >
        <section className="animated-background">
          <div id="stars1"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </section>
        <NextIntlClientProvider>
          <Providers>
            <div className="min-h-screen">
              <Header />
              <main className="grow">{children}</main>
              <Footer />
            </div>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
