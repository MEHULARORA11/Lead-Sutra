'use client';
import React from 'react';

const cities = [
  'Delhi',
  'Mumbai',
  'Bangalore',
  'Hyderabad',
  'Pune',
  'Ahmedabad',
  'Indore',
  'Jaipur',
];

const stats = [
  {
    label: 'Businesses analyzed',
    value: '50K+',
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
        className="text-primary/60 mx-auto mb-2"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
  {
    label: 'Agencies & freelancers',
    value: '1,200+',
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
        className="text-primary/60 mx-auto mb-2"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    label: 'Searches performed',
    value: '200K+',
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
        className="text-primary/60 mx-auto mb-2"
      >
        <path d="M3 3v16a2 2 0 0 0 2 2h16" />
        <path d="M18 17V9" />
        <path d="M13 17V5" />
        <path d="M8 17v-3" />
      </svg>
    ),
  },
  {
    label: 'Audits run',
    value: '80K+',
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
        className="text-primary/60 mx-auto mb-2"
      >
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    quote: '"Closed 3 clients in 7 days using LeadSutra leads"',
    name: 'Rahul S.',
    role: 'Digital Agency, Pune',
    badge: '3 clients / 7 days',
  },
  {
    quote: '"\u20b91.2L deal from just 1 LeadSutra lead"',
    name: 'Priya M.',
    role: 'Freelance Marketer, Delhi',
    badge: '\u20b91.2L from 1 lead',
  },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-background relative border-t border-border/30">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
            </span>
            <span className="text-[11px] font-semibold text-primary uppercase tracking-widest">
              Live platform stats
            </span>
          </div>
          <p className="text-[11px] font-semibold text-muted-foreground/40 uppercase tracking-[0.2em] mb-6">
            Trusted by agencies across India for high-intent prospecting
          </p>

          {/* Marquee cities */}
          <div className="relative overflow-hidden max-w-xl mx-auto">
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            <div className="flex gap-3 marquee-scroll w-max">
              {[...cities, ...cities]?.map((city, i) => (
                <span
                  key={i}
                  className="text-[11px] px-3 py-1.5 rounded-full border border-border bg-secondary/30 text-muted-foreground/40 whitespace-nowrap"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          {stats?.map((stat, i) => (
            <div
              key={i}
              className="text-center p-4 rounded-xl border border-border/40 bg-secondary/20 hover:border-primary/30 transition-colors card-sheen overflow-hidden"
            >
              {stat?.icon}
              <p className="text-3xl lg:text-4xl font-display font-bold text-gradient mb-1">
                {stat?.value}
              </p>
              <p className="text-xs text-muted-foreground/50 font-medium">{stat?.label}</p>
            </div>
          ))}
        </div>

        {/* Mini testimonials */}
        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {testimonials?.map((t, i) => (
            <div key={i} className="rounded-xl glass-card border border-border p-5 text-left">
              <p className="text-sm font-semibold text-foreground mb-2">{t?.quote}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-foreground">{t?.name}</p>
                  <p className="text-[11px] text-muted-foreground">{t?.role}</p>
                </div>
                <span className="text-xs font-bold text-accent bg-accent/10 px-2 py-1 rounded-full">
                  {t?.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
