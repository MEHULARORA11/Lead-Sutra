'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-sm shadow-sm'
          : 'bg-background/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16 lg:h-[72px]">
          {/* Logo */}
          <div className="min-w-[180px] flex items-center">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-cta flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/30 transition-shadow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              <span className="font-display font-bold text-base tracking-tight text-foreground">
                LeadSutra
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex flex-1 items-center justify-center gap-8">
            <a
              href="#how-it-works"
              className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Pricing
            </a>
            <a
              href="#use-cases"
              className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Use Cases
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center justify-end gap-3 min-w-[180px]">
            <a
              href="/auth"
              className="h-9 px-3 rounded-md text-[13px] font-medium text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors inline-flex items-center"
            >
              Log In
            </a>
            <a
              href="/auth"
              className="inline-flex items-center justify-center h-9 bg-gradient-cta text-white shadow-lg shadow-primary/15 hover:shadow-primary/25 transition-all text-[13px] font-semibold px-5 rounded-lg"
            >
              Close Your First Client
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden ml-auto p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
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
            >
              {mobileOpen ? (
                <>
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </>
              ) : (
                <>
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-border/50 bg-background/95 backdrop-blur-sm">
            <nav className="flex flex-col gap-3 mb-4">
              <a
                href="#how-it-works"
                className="text-sm font-medium text-muted-foreground hover:text-foreground px-2 py-1"
                onClick={() => setMobileOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#pricing"
                className="text-sm font-medium text-muted-foreground hover:text-foreground px-2 py-1"
                onClick={() => setMobileOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#use-cases"
                className="text-sm font-medium text-muted-foreground hover:text-foreground px-2 py-1"
                onClick={() => setMobileOpen(false)}
              >
                Use Cases
              </a>
            </nav>
            <div className="flex flex-col gap-2">
              <a
                href="/auth"
                className="text-sm font-medium text-muted-foreground hover:text-foreground px-2 py-1"
              >
                Log In
              </a>
              <a
                href="/auth"
                className="inline-flex items-center justify-center bg-gradient-cta text-white text-sm font-semibold px-5 py-2.5 rounded-lg"
              >
                Close Your First Client
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
