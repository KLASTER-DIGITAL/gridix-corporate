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
  return {
    title: 'Gridix Platform',
    description: 'Профессиональная платформа для девелоперов и агентств.',
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
