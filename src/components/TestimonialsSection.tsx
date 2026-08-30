'use client';
import React from 'react';
import Link from 'next/link';

const testimonials = [
  [
    {
      quote:
        "LeadSutra helped us identify businesses that actually needed marketing. We closed 3 clients within the first month just by filtering 'no website' businesses.",
      name: 'Aze',
      role: 'Digital Marketing Agency',
      badge: '3 clients in 1st month',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
    },
    {
      quote:
        'I used to struggle finding clients. LeadSutra shows me exactly which businesses need a website \u2014 it replaced 5 tools I was paying for separately.',
      name: 'Nishtha',
      role: 'Freelance Web Designer',
      badge: 'Replaced 5 tools',
      avatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150',
    },
    {
      quote:
        "The opportunity score feature makes prospecting extremely easy. It saves hours of research every single day. Genuinely the best lead tool I've tried.",
      name: 'Early Adopter',
      role: 'Lead Gen Consultant',
      badge: 'Saves 4+ hrs/day',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
    },
  ],

  [
    {
      quote:
        'We onboarded LeadSutra for our team of 8. The bulk search and auto-pitch features alone saved us 20+ hours a week on prospecting.',
      name: 'Rohan Mehta',
      role: 'Agency Founder, Mumbai',
      badge: '20+ hrs saved/week',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150',
    },
    {
      quote:
        'Finding businesses without websites in tier-2 cities was impossible before. LeadSutra makes it a 2-minute job. Game changer for local SEO agencies.',
      name: 'Priya Sharma',
      role: 'SEO Consultant, Jaipur',
      badge: '10x faster prospecting',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150',
    },
    {
      quote:
        'The competitor analysis showed us gaps our competitors were missing. We pitched 15 businesses in one afternoon and closed 4 that week.',
      name: 'Vikram Patel',
      role: 'Growth Marketer, Ahmedabad',
      badge: '4 closes in 1 week',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150',
    },
  ],

  [
    {
      quote:
        "As a solo freelancer, I needed something affordable that actually works. LeadSutra's free tier gave me my first 3 paying clients.",
      name: 'Ananya Desai',
      role: 'Freelance Developer, Pune',
      badge: '3 clients from free tier',
      avatar:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150',
    },
    {
      quote:
        "The audit reports we generate through LeadSutra look so professional that clients think we spent hours on them. It's our secret weapon.",
      name: 'Karthik Nair',
      role: 'Digital Agency, Bangalore',
      badge: 'Pro reports in seconds',
      avatar:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150',
    },
    {
      quote:
        'We switched from Apollo + Hunter + Google Maps manual search to just LeadSutra. One tool, half the cost, twice the results.',
      name: 'Sneha Reddy',
      role: 'Sales Head, Hyderabad',
      badge: 'Replaced 3 tools',
      avatar:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150',
    },
  ],
];

function StarRating() {
  return (
    <div className="flex gap-0.5 mb-3">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
        </svg>
      ))}
    </div>
  );
}

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  badge: string;
  avatar: string;
}

function TestimonialCard({ quote, name, role, badge, avatar }: TestimonialCardProps) {
  return (
    <div className="p-6 rounded-2xl border border-border bg-card shadow-sm break-inside-avoid mb-4">
      <StarRating />
      <p className="text-sm leading-relaxed text-foreground/80 mb-4">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center gap-3 pt-3 border-t border-border/40">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={avatar}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
          loading="lazy"
        />

        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm text-foreground truncate">{name}</p>
          <p className="text-[11px] text-muted-foreground truncate">{role}</p>
        </div>
        <span className="text-[10px] font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full whitespace-nowrap">
          {badge}
        </span>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-secondary/50 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
            </svg>
            <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-[0.15em]">
              Early Adopters
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            Real Feedback from <span className="text-gradient">Indian Agencies</span>
          </h2>
          <p className="text-sm text-muted-foreground">
            Discover how thousands of agencies and freelancers streamline prospecting with
            LeadSutra.
          </p>
        </div>

        {/* Testimonials grid with scroll columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {testimonials.map((col, colIdx) => (
            <div
              key={colIdx}
              className={`relative overflow-hidden ${colIdx === 1 ? 'hidden md:block' : ''} ${colIdx === 2 ? 'hidden lg:block' : ''}`}
              style={{ maxHeight: '600px' }}
            >
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
              <div
                className="flex flex-col"
                style={{
                  animation: `testimonial-scroll ${20 + colIdx * 5}s linear infinite${colIdx === 1 ? ' reverse' : ''}`,
                }}
              >
                <div className="flex flex-col">
                  {col.map((t, j) => (
                    <TestimonialCard key={j} {...t} />
                  ))}
                </div>
                <div className="flex flex-col">
                  {col.map((t, j) => (
                    <TestimonialCard key={`dup-${j}`} {...t} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/auth"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            Generate Leads Like This
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
          </Link>
        </div>
      </div>
    </section>
  );
}
