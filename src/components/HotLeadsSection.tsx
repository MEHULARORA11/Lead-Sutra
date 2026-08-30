'use client';
import React, { useState, useEffect } from 'react';

const rotatingLeads = [
  'Salon in Pune losing ₹95K/month',
  'Cafe in Bangalore losing ₹1.1L/month',
  'Gym in Delhi losing ₹1.5L/month',
  'Clinic in Mumbai losing ₹2L/month',
];

const leads = [
  { type: 'Restaurant', city: 'Delhi', loss: '₹1.2L', issue: 'No Website' },
  { type: 'Gym', city: 'Mumbai', loss: '₹80K', issue: 'No Google Ads' },
  { type: 'Clinic', city: 'Bangalore', loss: '₹2.5L', issue: 'Weak Social Media' },
];

export default function HotLeadsSection() {
  const [leadIndex, setLeadIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLeadIndex((prev) => (prev + 1) % rotatingLeads?.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-destructive/[0.02] to-background" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-destructive/10 text-destructive text-xs font-accent font-semibold mb-6">
            🔥 TODAY&apos;S HOT LEADS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-[1.1] mb-3 text-foreground">
            These Businesses Are <span className="text-destructive">Losing Money Right Now</span>
          </h2>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 border border-destructive/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive" />
            </span>
            <span className="text-[11px] font-semibold text-destructive uppercase tracking-wider">
              Live · 47 new today
            </span>
          </div>
          <div className="mt-5 h-6 flex items-center justify-center overflow-hidden">
            <p className="text-sm text-muted-foreground">
              <span className="text-destructive font-semibold">New:</span>{' '}
              {rotatingLeads?.[leadIndex]}
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto mb-10">
          {leads?.map((lead, i) => (
            <div
              key={i}
              className="rounded-2xl glass-card border border-border p-5 text-center hover:border-destructive/30 transition-colors"
            >
              <p className="text-sm font-semibold text-foreground mb-1">{lead?.type}</p>
              <p className="text-xs text-muted-foreground mb-3">{lead?.city}</p>
              <p className="text-3xl font-display font-bold text-destructive mb-2">{lead?.loss}</p>
              <p className="text-xs text-destructive/70 font-medium mb-3">/month loss</p>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-destructive/5 border border-destructive/15">
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
                  className="text-destructive"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m15 9-6 6" />
                  <path d="m9 9 6 6" />
                </svg>
                <span className="text-[11px] text-destructive font-medium">{lead?.issue}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/auth"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-cta text-white font-semibold text-sm shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:scale-105"
          >
            Unlock These Leads
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
    </section>
  );
}
