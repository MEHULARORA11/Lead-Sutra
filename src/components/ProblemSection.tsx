'use client';
import React, { useEffect, useState } from 'react';

export default function ProblemSection() {
  const [counter, setCounter] = useState(247000);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => prev + Math.floor(Math.random() * 50 + 10));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-destructive/10 text-destructive text-xs font-semibold mb-6">
            The Real Problem
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-[1.1] mb-8 text-foreground">
            You Don&apos;t Have a Lead Problem.
            <br />
            <span className="text-gradient">You Have a Timing Problem.</span>
          </h2>

          <div className="space-y-4 max-w-md mx-auto text-left mb-10">
            {[
              "You message businesses that aren't ready to buy",
              'You pitch without knowing their real problems',
              'You waste hours researching instead of closing',
            ]?.map((text, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center shrink-0 mt-0.5">
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
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </div>
                <span className="text-sm text-muted-foreground leading-relaxed">{text}</span>
              </div>
            ))}
          </div>

          {/* Stats card */}
          <div className="py-6 px-8 rounded-2xl bg-card border border-border inline-block">
            <p className="text-lg font-display font-bold text-foreground">
              100 messages{' '}
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
                className="inline mx-1 text-muted-foreground"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>{' '}
              2 replies{' '}
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
                className="inline mx-1 text-muted-foreground"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>{' '}
              <span className="text-destructive">0 deals</span>
            </p>
          </div>

          {/* Live counter */}
          <div className="mt-8 py-5 px-6 rounded-2xl bg-destructive/5 border border-destructive/20 inline-block">
            <div className="flex items-center justify-center gap-2 mb-1">
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
                className="text-destructive animate-pulse"
              >
                <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
                <polyline points="16 17 22 17 22 11" />
              </svg>
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-destructive">
                Lost while you read this page
              </span>
            </div>
            <p className="text-3xl sm:text-4xl font-display font-bold text-destructive tabular-nums">
              ₹{counter?.toLocaleString('en-IN')}
            </p>
            <p className="text-[11px] text-muted-foreground mt-1">…and counting, every second</p>
          </div>

          <p className="mt-8 text-lg font-semibold text-primary">LeadSutra flips this.</p>
          <div className="mt-4">
            <a
              href="/auth"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Find My First Client
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
    </section>
  );
}
