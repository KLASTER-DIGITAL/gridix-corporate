import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { builder } from '@/lib/builder';
import { cn } from '@/lib/utils'; // Optional if needed for body

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  let metadataBase: URL;
  try {
    metadataBase = new URL(siteUrl);
  } catch (e) {
    console.error('Invalid NEXT_PUBLIC_SITE_URL:', siteUrl);
    metadataBase = new URL('http://localhost:3000');
  }

  let data: any = {};
  try {
    // Try to fetch global settings
    const settings = await builder.get('siteSettings', { options: { noTargeting: true } }).promise();
    data = settings?.data || {};
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={cn(inter.className, "antialiased min-h-screen flex flex-col")}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
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
