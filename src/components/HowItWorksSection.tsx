'use client';
import React from 'react';

const steps = [
  {
    num: '01',
    title: 'Find',
    desc: 'Discover businesses with real buying intent — active ad spend, hiring, website gaps.',
    color: 'bg-primary/10',
    iconColor: 'text-primary',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Audit',
    desc: "See exactly where they're losing money — weak SEO, no website, poor social presence.",
    color: 'bg-accent/10',
    iconColor: 'text-accent',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" />
        <path d="m9 18-1.5-1.5" />
        <circle cx="5" cy="14" r="3" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Pitch',
    desc: 'Send AI-personalized outreach that references their exact pain points and revenue loss.',
    color: 'bg-primary/10',
    iconColor: 'text-primary',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
        <path d="m21.854 2.147-10.94 10.939" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Close',
    desc: "Convert faster with data-backed proof that makes saying 'yes' the obvious choice.",
    color: 'bg-accent/10',
    iconColor: 'text-accent',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m11 17 2 2a1 1 0 1 0 3-3" />
        <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
        <path d="m21 3 1 11h-2" />
        <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
        <path d="M3 4h8" />
      </svg>
    ),
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="section-divider" />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-background" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-accent font-semibold mb-6">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-[1.1] mb-4 text-foreground text-3d-matte">
            From signal to signed client — <span className="text-gradient">in 4 steps</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            No cold lists. No guessing. Just real buying signals turned into closed deals.
          </p>
        </div>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-[4.5rem] left-[12%] right-[12%] h-px bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 z-0" />

          {steps?.map((step, i) => (
            <div key={i} className="group relative z-10">
              <div className="h-full p-7 rounded-2xl glass-card hover:glow-border-saffron transition-all duration-500 text-center card-sheen overflow-hidden border border-border">
                <div className="relative mx-auto mb-5">
                  <div
                    className={`w-14 h-14 mx-auto rounded-2xl flex items-center justify-center ${step?.color} group-hover:scale-110 transition-transform`}
                  >
                    <span className={step?.iconColor}>{step?.icon}</span>
                  </div>
                </div>
                <span className="text-[10px] font-accent font-bold text-muted-foreground/40 tracking-widest">
                  {step?.num}
                </span>
                <h3 className="text-lg font-display font-bold mb-2 text-foreground">
                  {step?.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step?.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
