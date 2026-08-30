'use client';
import React, { useState } from 'react';

const faqs = [
  {
    q: 'What is LeadSutra?',
    a: 'LeadSutra is an AI-powered client discovery platform that helps marketing agencies and freelancers find businesses with digital marketing gaps, audit their online presence, and generate personalized outreach pitches.',
  },
  {
    q: 'How does LeadSutra find leads?',
    a: 'LeadSutra scans local and global business directories, analyzes websites for SEO issues, checks social media presence, and uses AI to score each lead based on how likely they are to need your services.',
  },
  {
    q: 'Who should use LeadSutra?',
    a: 'LeadSutra is built for marketing agencies, freelancers, and consultants who want to find high-intent clients without cold spamming. If you sell digital marketing, web design, SEO, or any online service to local businesses, LeadSutra is for you.',
  },
  {
    q: 'How is LeadSutra different from Apollo or Hunter?',
    a: 'Apollo and Hunter focus on contact data for B2B companies. LeadSutra is purpose-built for agencies selling to local businesses in India. It finds businesses losing revenue, audits their digital presence, and generates personalized pitches — all in one platform.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Yes! You can start with 5 free leads and 5 free audits — no credit card required. This lets you see real opportunities before committing to a paid plan.',
  },
  {
    q: 'How accurate is the revenue loss estimation?',
    a: 'Revenue loss estimates are calculated based on industry benchmarks, competitor ad spend data, local search traffic, and digital presence gaps. They are directional estimates designed to help you start conversations, not exact figures.',
  },
  {
    q: 'Can I use LeadSutra outside India?',
    a: 'LeadSutra is optimized for the Indian market with INR pricing, local business data, and India-specific features. While it can work for other markets, the best results are for agencies targeting Indian businesses.',
  },
  {
    q: 'How long does it take to find my first client?',
    a: 'Most users find their first high-intent lead within minutes of signing up. Closing a client typically takes 3-7 days depending on your outreach speed and the quality of your pitch.',
  },
  {
    q: 'Is my data secure?',
    a: 'Yes. LeadSutra uses industry-standard encryption and security practices. Your data is never sold or shared with third parties. You can delete your account and data at any time.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Everything you need to know about LeadSutra
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-2">
            {faqs?.map((faq, i) => (
              <div key={i} className="border border-border rounded-lg px-5 bg-card">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex flex-1 w-full items-center justify-between transition-all text-sm font-medium text-foreground hover:no-underline py-4"
                >
                  {faq?.q}
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
                    className={`shrink-0 transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                {openIndex === i && (
                  <div className="pb-4 text-sm text-muted-foreground leading-relaxed">{faq?.a}</div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-muted-foreground">
              Have more questions?{' '}
              <a href="/contact" className="text-primary hover:underline">
                Contact us
              </a>{' '}
              or read our{' '}
              <a href="/what-is-leadsutra" className="text-primary hover:underline">
                detailed explainer
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
