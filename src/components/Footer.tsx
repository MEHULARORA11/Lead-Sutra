'use client';
import React from 'react';

const footerLinks = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '/#features' },
      { label: 'Pricing', href: '/#pricing' },
      { label: 'Use Cases', href: '/#use-cases' },
      { label: 'Marketplace', href: '/marketplace' },
      { label: 'Documentation', href: '/docs' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
      { label: 'Press', href: '/press' },
      { label: 'Support', href: '/support' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'What is LeadSutra?', href: '/what-is-leadsutra' },
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'Lead Gen for Agencies', href: '/lead-generation-for-agencies' },
      { label: 'Find High-Intent Leads', href: '/find-high-intent-leads' },
      { label: 'B2B Lead Generation Tools', href: '/b2b-lead-generation-tools' },
      { label: 'Local Business Leads', href: '/local-business-leads' },
    ],
  },
  {
    title: 'Compare',
    links: [
      { label: 'vs Apollo.io', href: '/leadsutra-vs-apollo' },
      { label: 'vs Lusha', href: '/leadsutra-vs-lusha' },
      { label: 'vs ZoomInfo', href: '/leadsutra-vs-zoominfo' },
      { label: 'vs Hunter.io', href: '/leadsutra-vs-hunter' },
      { label: 'vs JustDial', href: '/justdial-alternative' },
      { label: 'vs IndiaMART', href: '/indiamart-alternative' },
      { label: 'Cold Email vs LeadSutra', href: '/cold-email-vs-leadsutra' },
    ],
  },
  {
    title: 'Free Tools',
    links: [
      { label: 'ROI Calculator', href: '/tools/roi-calculator' },
      { label: 'Restaurants in Mumbai', href: '/leads/mumbai/restaurants' },
      { label: 'Gyms in Bangalore', href: '/leads/bangalore/gyms-fitness' },
      { label: 'Dentists in Delhi', href: '/leads/delhi/dentists' },
      { label: 'E-commerce in Pune', href: '/leads/pune/ecommerce' },
      { label: 'SaaS in Hyderabad', href: '/leads/hyderabad/saas-startups' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-7 gap-8 md:gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-cta flex items-center justify-center shadow-lg shadow-primary/15">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              <span className="font-display font-bold text-base text-foreground">LeadSutra</span>
            </a>
            <p className="text-xs text-muted-foreground leading-relaxed">
              AI-powered client discovery for marketing agencies and freelancers across India.
            </p>
          </div>

          {/* Links */}
          {footerLinks?.map((section) => (
            <div key={section?.title}>
              <h4 className="font-display font-semibold text-sm mb-4 text-foreground">{section?.title}</h4>
              <ul className="space-y-2.5">
                {section?.links?.map((link) => (
                  <li key={link?.label}>
                    <a href={link?.href} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                      {link?.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p className="text-[11px] text-muted-foreground">&copy; 2026 LeadSutra. All rights reserved.</p>
            <span className="text-[11px] text-muted-foreground/60">Built by Mediora Media</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://x.com/SutraLead" target="_blank" rel="noopener noreferrer" className="text-[11px] text-muted-foreground hover:text-foreground transition-colors">Twitter</a>
            <a href="https://www.linkedin.com/company/leadsutradotin/" target="_blank" rel="noopener noreferrer" className="text-[11px] text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
            <a href="https://www.instagram.com/leadsutra.in/" target="_blank" rel="noopener noreferrer" className="text-[11px] text-muted-foreground hover:text-foreground transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
