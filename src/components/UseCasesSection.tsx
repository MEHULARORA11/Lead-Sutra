'use client';
import React from 'react';

const useCases = [
  {
    title: 'For Agencies',
    desc: 'Close more clients without increasing outreach. Walk in with proof, not promises.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      >
        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
        <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
        <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
        <path d="M10 6h4" />
        <path d="M10 10h4" />
        <path d="M10 14h4" />
        <path d="M10 18h4" />
      </svg>
    ),
  },
  {
    title: 'For Freelancers',
    desc: 'Find clients without begging or cold spamming. Let the data do the selling.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      >
        <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
      </svg>
    ),
  },
  {
    title: 'For Consultants',
    desc: "Sell with proof, not persuasion. Show them what they're losing — and how you fix it.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      >
        <path d="M3 3v16a2 2 0 0 0 2 2h16" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
  },
];

export default function UseCasesSection() {
  return (
    <section id="use-cases" className="py-24 lg:py-32 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-secondary/50 mb-6">
            <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-[0.15em]">
              Who It&apos;s For
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            Built for closers <span className="text-gradient">who want results</span>
          </h2>
          <p className="text-muted-foreground">
            Not another tool. A weapon for agencies and freelancers who close.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {useCases?.map((uc, i) => (
            <div key={i} className="group">
              <div className="h-full p-7 rounded-2xl glass-card hover:glow-border-saffron transition-all duration-500 border border-border">
                <div className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center mb-5 group-hover:border-primary/30 transition-colors">
                  {uc?.icon}
                </div>
                <h3 className="text-base font-display font-semibold mb-2 text-foreground">
                  {uc?.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{uc?.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
