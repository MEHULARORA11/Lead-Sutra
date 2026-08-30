import { ClerkProvider } from '@clerk/nextjs';
import React from 'react';
import type { Metadata, Viewport } from 'next';
import '@/styles/index.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'LeadSutra — AI Client Discovery Platform for Agencies',
  description:
    'LeadSutra helps marketing agencies and freelancers discover businesses that need services — AI audits websites, detects digital gaps, and generates personalized pitches. Start free.',
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Sora:wght@100..800&display=swap"
          rel="stylesheet"
        />

        <script
          type="module"
          async
          src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fleadsutra3143back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.20"
        />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" />
      </head>
      <body className="min-h-screen bg-background text-foreground overflow-x-clip">
        <ClerkProvider>{children}</ClerkProvider>
      </body>
    </html>
  );
}
