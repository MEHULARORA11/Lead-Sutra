'use client';
import React from 'react';

export default function CTASection() {
  return (
    <section className="py-32 lg:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.04] to-background" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-4 leading-tight text-foreground text-3d-matte">
            Your Next ₹1 Lakh Client
            <br />
            <span className="text-gradient-animated">Is Already Losing Money.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-2 max-w-xl mx-auto">
            They just don&apos;t know it yet. You&apos;ll show them — and close the deal.
          </p>
          <p className="text-base text-primary font-semibold mb-8">
            Find them before your competitor does.
          </p>

          <div className="relative inline-block">
            <div className="absolute -inset-3 rounded-2xl glow-pulse opacity-60 pointer-events-none" />
            <a
              href="/sign-up"
              className="relative shimmer-btn inline-flex items-center justify-center gap-2 bg-gradient-cta text-white shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all text-sm font-semibold px-10 h-14 rounded-xl hover:scale-105"
            >
              Close Your First Client — Free
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8 text-muted-foreground">
            {['5 free leads + 5 audits', 'No credit card required', 'Cancel anytime']?.map(
              (text, i) => (
                <div key={i} className="flex items-center gap-2">
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
                  <span className="text-xs">{text}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
