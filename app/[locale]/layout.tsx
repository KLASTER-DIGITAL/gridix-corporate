import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { builder } from '@/lib/builder';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { cn } from '@/lib/utils';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

interface SiteSettingsData {
  defaultTitle?: string;
  siteName?: string;
  defaultDescription?: string;
  defaultOgImage?: string;
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gridix.live';
  const builderKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY;

  // Server-side diagnostic logging (visible in Vercel logs)
  if (process.env.NODE_ENV === 'production') {
    console.log('[Diagnostic] NEXT_PUBLIC_SITE_URL:', siteUrl);
    console.log('[Diagnostic] NEXT_PUBLIC_BUILDER_API_KEY defined:', !!builderKey);
  }

  let metadataBase: URL;
  try {
    metadataBase = new URL(siteUrl);
  } catch (e) {
    console.error('[Layout] Invalid NEXT_PUBLIC_SITE_URL:', siteUrl);
    metadataBase = new URL('https://gridix.live');
  }

  let data: SiteSettingsData = {};
  try {
    // Try to fetch global settings with locale targeting
    const settings = await builder.get('site-settings', {
      options: { noTargeting: true },
      userAttributes: { locale }
    }).promise();
    data = (settings?.data as SiteSettingsData) || {};
  } catch (error) {
    console.error('Failed to fetch site settings from Builder.io:', error);
  }

  return {
    metadataBase,
    title: {
      default: data.defaultTitle || 'Gridix Platform',
      template: `%s | ${data.siteName || 'Gridix'}`,
    },
    description: data.defaultDescription || 'Профессиональная платформа для девелоперов и агентств.',
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: {
        'ru': `${siteUrl}/ru`,
        'en': `${siteUrl}/en`,
      },
    },
    openGraph: {
      type: 'website',
      siteName: data.siteName || 'Gridix',
      images: data.defaultOgImage ? [{ url: data.defaultOgImage }] : [],
    },
    robots: {
      index: true,
      follow: true,
    },
    twitter: {
      card: 'summary_large_image',
      title: data.siteName || 'Gridix Platform',
      description: data.defaultDescription || 'Профессиональная платформа для девелоперов и агентств.',
      images: data.defaultOgImage ? [data.defaultOgImage] : [],
    },
  };
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={cn(inter.className, "antialiased min-h-screen flex flex-col")}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Gridix",
              "url": process.env.NEXT_PUBLIC_SITE_URL,
              "sameAs": [
                "https://twitter.com/gridix",
                "https://linkedin.com/company/gridix"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
