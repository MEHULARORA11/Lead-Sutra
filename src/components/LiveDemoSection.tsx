'use client';
import React from 'react';

export default function LiveDemoSection() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_center,hsl(174_92%_38%/0.04),transparent_70%)]" />
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-secondary/50 mb-6">
            <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-[0.15em]">
              Live Demo
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            See It <span className="text-gradient">In Action</span>
          </h2>
          <p className="text-muted-foreground">
            Watch LeadSutra discover real opportunities in Mumbai.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl glow-border-saffron bg-card overflow-hidden border border-primary/20">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-5 py-3 border-b border-border/30 bg-secondary/20">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-destructive/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-primary/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-accent/40" />
              </div>
              <div className="flex-1 mx-6 px-4 py-1.5 rounded-md bg-background/50 text-[10px] text-muted-foreground/40 font-mono">
                app.leadsutra.in/search
              </div>
            </div>

            {/* Search bar */}
            <div className="p-6 border-b border-border/30">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-3 flex-1 p-3 rounded-xl bg-secondary/40 border border-border/40">
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
                    className="text-muted-foreground/50"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                  <span className="text-sm text-foreground/60">Search businesses...</span>
                </div>
                <button className="px-6 py-3 rounded-xl bg-gradient-primary text-sm font-semibold text-white shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow">
                  Search
                </button>
              </div>
            </div>

            {/* Empty state */}
            <div className="p-6 min-h-[320px]">
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-muted-foreground/20 mb-4"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <p className="text-sm text-muted-foreground/50">Click Search to see live results</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
