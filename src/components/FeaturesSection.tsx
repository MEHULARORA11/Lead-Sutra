'use client';
import React from 'react';

const features = [
  {
    title: 'Ads Intelligence',
    desc: 'Spy on competitor ads across Meta, Google & LinkedIn — see creatives, spend estimates & strategy gaps.',
    icon: (
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
      >
        <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: 'Revenue Leak Scanner',
    desc: 'Detect 20+ conversion gaps — missing WhatsApp widgets, broken CTAs, slow pages — with ₹ revenue impact.',
    icon: (
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
      >
        <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
        <polyline points="16 17 22 17 22 11" />
      </svg>
    ),
  },
  {
    title: 'AI Pitch Generator',
    desc: 'One-click personalized outreach referencing exact pain points for email, WhatsApp or LinkedIn.',
    icon: (
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
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: 'Contact Discovery',
    desc: 'Find decision-maker emails, phones & LinkedIn profiles with verified Gold Contacts.',
    icon: (
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
      >
        <circle cx="10" cy="7" r="4" />
        <path d="M10.3 15H7a4 4 0 0 0-4 4v2" />
        <circle cx="17" cy="17" r="3" />
        <path d="m21 21-1.9-1.9" />
      </svg>
    ),
  },
  {
    title: 'Growth Signals',
    desc: 'Track funded companies, hiring surges & scaling businesses — reach them before competitors.',
    icon: (
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
      >
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
  },
  {
    title: 'Deal Tracker & CRM',
    desc: 'Kanban pipeline with deal values, win-rate analytics & automated follow-up reminders.',
    icon: (
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
      >
        <path d="M6 5v11" />
        <path d="M12 5v6" />
        <path d="M18 5v14" />
      </svg>
    ),
  },
  {
    title: 'Client Closing Autopilot',
    desc: 'Weekly delivery of 10-15 pre-vetted, pre-audited leads with ready-to-send pitches.',
    icon: (
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
      >
        <path d="M12 6V2H8" />
        <path d="m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z" />
        <path d="M2 12h2" />
        <path d="M9 11v2" />
        <path d="M15 11v2" />
        <path d="M20 12h2" />
      </svg>
    ),
  },
  {
    title: 'Multi-Platform Audit',
    desc: 'Website, SEO, social media & reviews scored in seconds — instant sales ammunition.',
    icon: (
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
      >
        <path d="M3 7V5a2 2 0 0 1 2-2h2" />
        <path d="M17 3h2a2 2 0 0 1 2 2v2" />
        <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
        <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
        <circle cx="12" cy="12" r="3" />
        <path d="m16 16-1.9-1.9" />
      </svg>
    ),
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,hsl(24_95%_53%/0.04),transparent_70%)]" />
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-secondary/50 mb-6">
            <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-[0.15em]">
              What&apos;s New
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Your Full <span className="text-gradient">Client-Closing</span> Arsenal
          </h2>
          <p className="text-muted-foreground text-lg">
            Every tool you need — from finding prospects to closing deals — in one platform.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {features?.map((feature, i) => (
            <div key={i} className="group">
              <div className="h-full p-6 rounded-2xl glass-card hover:glow-border-indigo transition-all duration-500 border border-border">
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <span className="text-primary">{feature?.icon}</span>
                </div>
                <h3 className="text-base font-semibold mb-1.5">{feature?.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature?.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
