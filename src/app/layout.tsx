import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI & Digital Strategy Consultant | Grow Smarter with AI',
  description: 'I help businesses, professionals, and organizations leverage AI, content systems, branding, and automation to increase visibility, productivity, and growth.',
  keywords: [
    'AI Consultant',
    'Digital Strategy',
    'AI Automation',
    'Social Media Growth',
    'Branding Consultant',
    'Digital Transformation',
  ],
  authors: [{ name: 'AI Strategy Consultant' }],
  creator: 'AI Strategy Consultant',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ai-consultant.com',
    siteName: 'AI Strategy Consultant',
    title: 'AI & Digital Strategy Consultant | Grow Smarter with AI',
    description: 'Help your business leverage AI, automation, and digital strategy for exponential growth.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1677442d019cecf74b69351443a797ce9d7418570?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'AI Strategy Consultant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI & Digital Strategy Consultant',
    description: 'Grow your business smarter with AI, automation, and digital strategy',
    images: ['https://images.unsplash.com/photo-1677442d019cecf74b69351443a797ce9d7418570?w=1200&h=630&fit=crop'],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f1620" />
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'light' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)) {
                  document.documentElement.classList.add('light');
                } else {
                  document.documentElement.classList.remove('light');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="bg-gradient-premium">
        {children}
      </body>
    </html>
  );
}
