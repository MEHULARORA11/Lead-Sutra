'use client';
import React from 'react';

export default function SolutionSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/10" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-accent font-semibold mb-6">
              The Solution
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold leading-[1.1] mb-4 text-foreground">
              Stop Guessing. <span className="text-gradient">Start Closing.</span>
            </h2>
            <p className="text-base text-foreground font-medium mb-6">
              You don&apos;t need more leads. You need{' '}
              <span className="text-primary font-bold">better timing.</span>
            </p>
            <p className="text-sm text-muted-foreground mb-5">LeadSutra finds businesses that:</p>

            <div className="space-y-3 mb-8">
              {[
                'Are actively losing money online',
                'Show buying intent signals',
                'Have clear gaps you can sell',
              ]?.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
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
                    className="text-accent shrink-0"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-muted-foreground mb-4">Then it gives you:</p>

            <div className="space-y-3 mb-8">
              {[
                { icon: 'file-search', label: 'A full audit of their digital presence' },
                { icon: 'rupee', label: "Revenue loss estimate they can't ignore" },
                { icon: 'send', label: 'A ready-to-send personalized pitch' },
              ]?.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    {item?.icon === 'file-search' && (
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
                        className="text-primary"
                      >
                        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                        <path d="M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" />
                        <path d="m9 18-1.5-1.5" />
                        <circle cx="5" cy="14" r="3" />
                      </svg>
                    )}
                    {item?.icon === 'rupee' && (
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
                        className="text-primary"
                      >
                        <path d="M6 3h12" />
                        <path d="M6 8h12" />
                        <path d="m6 13 8.5 8" />
                        <path d="M6 13h3" />
                        <path d="M9 13c6.667 0 6.667-10 0-10" />
                      </svg>
                    )}
                    {item?.icon === 'send' && (
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
                        className="text-primary"
                      >
                        <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                        <path d="m21.854 2.147-10.94 10.939" />
                      </svg>
                    )}
                  </div>
                  <span className="text-sm text-foreground">{item?.label}</span>
                </div>
              ))}
            </div>

            <a
              href="/auth"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-cta text-white font-semibold text-sm shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:scale-105"
            >
              See 10 High-Intent Leads
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

          {/* Right column - Sample Audit Card */}
          <div className="rounded-2xl glass-card p-6 border border-border">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-accent font-semibold text-muted-foreground uppercase tracking-wider">
                Sample Audit Result
              </span>
            </div>
            <h3 className="font-display font-bold text-foreground mb-1">Sharma Dental Care</h3>
            <p className="text-xs text-muted-foreground mb-4">Mumbai, Maharashtra</p>

            <div className="space-y-2 mb-5">
              {[
                { label: 'Website', value: 'Missing', color: 'text-destructive' },
                { label: 'Google Ads', value: 'Not running', color: 'text-destructive' },
                { label: 'Social Media', value: 'Weak presence', color: 'text-destructive' },
                { label: 'Google Reviews', value: '3.2 ★ (12 reviews)', color: 'text-accent' },
              ]?.map((item, i) => (
                <div key={i} className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{item?.label}</span>
                  <span className={`font-medium ${item?.color}`}>{item?.value}</span>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-destructive/5 border border-destructive/20 p-4 text-center">
              <p className="text-xs text-muted-foreground mb-1">Estimated Revenue Loss</p>
              <p className="text-2xl font-display font-bold text-destructive">
                ₹2.3 Lakh<span className="text-sm font-normal">/month</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
