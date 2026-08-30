'use client';
import React from 'react';

export default function StepsSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-primary/[0.03] to-background" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-accent font-semibold mb-6">
              💰 This Is How You Close ₹1L+ Deals
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-[1.1] mb-4 text-foreground">
              3 Steps to Your <span className="text-gradient">First Client</span>
            </h2>
            <p className="text-lg font-semibold text-foreground mb-1">
              Pick a city → See who&apos;s losing money → Send a pitch they can&apos;t ignore
            </p>
            <p className="text-muted-foreground max-w-lg mx-auto text-sm">
              Here&apos;s a real business you could pitch right now:
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {/* Audit card */}
            <div className="rounded-2xl glass-card border border-border p-6">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-accent font-semibold text-muted-foreground uppercase tracking-wider">
                  Sample Audit — Sharma Dental Care, Mumbai
                </span>
              </div>
              <div className="space-y-4">
                {[
                  { title: 'No Website', desc: 'Losing all organic traffic' },
                  { title: 'No Google Ads', desc: 'Competitors capturing their customers' },
                  { title: 'Weak Social Media', desc: 'Zero brand visibility online' },
                ]?.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-xl bg-destructive/5 border border-destructive/15"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-destructive shrink-0 mt-0.5"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="m15 9-6 6" />
                      <path d="m9 9 6 6" />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{item?.title}</p>
                      <p className="text-xs text-muted-foreground">{item?.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Revenue loss card */}
            <div className="rounded-2xl glass-card border border-destructive/20 p-6 flex flex-col items-center justify-center text-center">
              <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider font-semibold">
                Estimated Revenue Loss
              </p>
              <p className="text-6xl sm:text-7xl lg:text-8xl font-display font-bold text-destructive mb-1">
                ₹2.3L
              </p>
              <p className="text-lg text-destructive/80 font-medium mb-3">/month</p>
              <button className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <path d="M12 17h.01" />
                </svg>
                How is this calculated?
              </button>
              <p className="text-[10px] text-muted-foreground/50 mt-2">
                Based on traffic, competitor ads &amp; industry benchmarks
              </p>
            </div>
          </div>

          {/* AI Pitch card */}
          <div className="max-w-2xl mx-auto rounded-2xl glass-card border border-primary/20 p-6 mb-8">
            <div className="flex items-center gap-2 mb-4">
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
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
              </svg>
              <span className="text-xs font-accent font-semibold text-primary uppercase tracking-wider">
                AI-Generated Pitch — Ready in 3 Seconds
              </span>
            </div>
            <div className="rounded-xl bg-card border border-border p-4">
              <p className="text-sm text-foreground leading-relaxed italic">
                &ldquo;Sharma ji — you&apos;re losing{' '}
                <span className="font-bold text-destructive not-italic">₹2.3L/month</span> to
                competitors. I have a 5-minute fix.&rdquo;
              </p>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <p className="text-lg text-foreground font-medium mb-1">
              Now you&apos;re not selling.{' '}
              <span className="font-bold">You&apos;re showing them what they&apos;re losing.</span>
            </p>
            <p className="text-base text-primary font-semibold mb-6">
              That&apos;s how deals close.
            </p>
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-accent/10 border border-accent/20 mb-4">
              <span className="text-sm font-semibold text-accent">
                Close 1 client → tool pays for itself
              </span>
            </div>
            <p className="text-sm text-destructive font-semibold mb-6 flex items-center justify-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive" />
              </span>
              While you decide, your competitor is already pitching them.
            </p>
            <div className="mt-4">
              <a
                href="/auth"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                Generate leads like this
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
          </div>
        </div>
      </div>
    </section>
  );
}
