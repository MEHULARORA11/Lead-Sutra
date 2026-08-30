'use client';
import React, { useState, useEffect } from 'react';

import Link from 'next/link';

const rotatingTexts = [
  '47 businesses losing ₹80K/month',
  '23 restaurants with no website',
  '15 clinics with weak social media',
  '31 gyms missing Google Ads',
];

export default function HeroSection() {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingTexts?.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="relative pt-28 pb-20 lg:pt-36 lg:pb-28">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.04] via-background to-background" />

        {/* Radar rings */}
        <div
          className="absolute inset-0 top-20 flex items-center justify-center pointer-events-none"
          aria-hidden="true"
        >
          <div className="relative w-[600px] h-[600px] lg:w-[800px] lg:h-[800px]">
            <div className="absolute inset-0 rounded-full border border-primary/10 radar-ring" />
            <div className="absolute inset-0 rounded-full border border-accent/8 radar-ring-delayed" />
            <div className="absolute inset-0 rounded-full border border-primary/6 radar-ring-delayed-2" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/[0.03] to-accent/[0.02]" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            {/* Badge */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-accent font-semibold uppercase tracking-[0.2em] text-primary">
                Client Closing Intelligence
              </span>
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.08] text-foreground text-3d-matte">
              Close Your First <span className="text-gradient-animated">₹1 Lakh Client</span>
              <br />
              <span className="text-foreground">This Week.</span>
            </h1>

            {/* Subheadline */}
            <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              While you cold-email random businesses,{' '}
              <span className="text-foreground font-semibold">
                1,200+ are bleeding ₹50K–₹5L/month
              </span>
              . Find them in 60 seconds.
            </p>

            {/* Rotating text */}
            <div className="mt-4 h-7 flex items-center justify-center">
              <span className="text-sm text-primary font-semibold">
                ✦{' '}
                <span key={textIndex} className="inline-block">
                  {rotatingTexts?.[textIndex]}
                </span>
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <div className="absolute -inset-8 bg-gradient-to-r from-primary/[0.08] via-accent/[0.04] to-transparent rounded-full blur-2xl pointer-events-none" />
              <Link
                href="/sign-up"
                className="relative shimmer-btn px-8 py-3.5 rounded-xl bg-gradient-cta text-white font-semibold text-sm shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:scale-105"
              >
                Close Your First Client — Free
              </Link>
              <Link
                href="#pricing"
                className="relative px-6 py-3 rounded-xl border border-border text-foreground font-medium text-sm hover:bg-muted/50 transition-all"
              >
                See Pricing
              </Link>
            </div>

            <p className="mt-3 text-xs font-semibold text-primary">
              From ₹1,499/mo · Close your first client this week
            </p>
            <p className="mt-6 text-xs text-muted-foreground/60">
              🟢 1,200+ agencies already closing clients with LeadSutra
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-accent"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
                <span className="text-xs text-muted-foreground">
                  Close your first client in days
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-accent"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
                <span className="text-xs text-muted-foreground">
                  Works for agencies, freelancers &amp; consultants
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
