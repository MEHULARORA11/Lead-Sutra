'use client';
import React, { useState } from 'react';

interface PlanFeature {
  text: string;
}

interface Plan {
  name: string;
  tagline: string;
  target: string;
  monthlyPrice: string;
  annualPrice: string;
  annualBilling: string;
  searches: string;
  audits: string;
  contacts: string;
  pitches: string;
  credits: string;
  features: PlanFeature[];
  footer: string;
  cta: string;
  ctaHref: string;
  highlighted: boolean;
  badge?: string;
  icon: React.ReactNode;
}

const plans: Plan[] = [
  {
    name: 'Starter',
    tagline: 'For freelancers starting their pipeline',
    target: 'Close 2–3 clients/month',
    monthlyPrice: '1,499',
    annualPrice: '1,249',
    annualBilling: 'Billed ₹14,990/year + GST',
    searches: '50 / mo',
    audits: '30 / mo',
    contacts: '15 / mo',
    pitches: '20 / mo',
    credits: '150 / mo',
    features: [
      { text: 'Google Maps & professional search' },
      { text: 'Full digital presence audit' },
      { text: 'AI pitch generator' },
      { text: 'CSV export & search history' },
      { text: '10 AI proposals / mo' },
      { text: '30 outreach messages / mo' },
      { text: '30 lead scores / mo' },
    ],
    footer: '200 saved leads · 30 reports · 3 bulk imports/mo',
    cta: 'Close My First Client',
    ctaHref: '/sign-up',
    highlighted: false,
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
        className="text-primary"
      >
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
  },
  {
    name: 'Pro',
    tagline: 'For agencies & serious freelancers',
    target: 'Close 5–10 clients/month',
    monthlyPrice: '3,499',
    annualPrice: '2,916',
    annualBilling: 'Billed ₹34,990/year + GST',
    searches: '150 / mo',
    audits: '100 / mo',
    contacts: '60 / mo',
    pitches: '60 / mo',
    credits: '400 / mo',
    features: [
      { text: 'Everything in Starter' },
      { text: 'Full Intelligence Engine access' },
      { text: 'Lead scoring & pipeline forecast' },
      { text: 'Sales Copilot & Objection Handler' },
      { text: '50 AI proposals / mo' },
      { text: '150 outreach messages / mo' },
      { text: '200 lead scores / mo' },
      { text: '10 bulk CSV imports / mo' },
    ],
    footer: '1,500 saved leads · 200 reports · 20 website monitors',
    cta: 'Start Closing Clients',
    ctaHref: '/sign-up',
    highlighted: true,
    badge: 'Most Agencies Start Here',
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
        className="text-primary"
      >
        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
      </svg>
    ),
  },
  {
    name: 'Agency',
    tagline: 'For teams & power users',
    target: 'Unlimited pipeline',
    monthlyPrice: '9,999',
    annualPrice: '8,333',
    annualBilling: 'Billed ₹99,990/year + GST',
    searches: '500 / mo',
    audits: '300 / mo',
    contacts: '200 / mo',
    pitches: '200 / mo',
    credits: '1,200 / mo',
    features: [
      { text: 'Everything in Pro' },
      { text: '5 team member seats' },
      { text: 'White-label audit reports' },
      { text: 'Full API access & webhooks' },
      { text: 'Unlimited proposals & outreach' },
      { text: 'Unlimited lead scores & bulk imports' },
    ],
    footer: '50,000 saved leads · Unlimited reports · 20,000 lead exports',
    cta: 'Scale My Agency',
    ctaHref: '/sign-up',
    highlighted: false,
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
        className="text-primary"
      >
        <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z" />
        <path d="M5 21h14" />
      </svg>
    ),
  },
];

export default function PricingSection() {
  const [annual, setAnnual] = useState(true);

  return (
    <section className="py-32 bg-background relative overflow-x-clip" id="pricing">
      <span
        id="pricing-anchor"
        aria-hidden="true"
        className="block absolute -top-20 left-0 h-0 w-0"
      />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,hsl(248_68%_64%/0.04),transparent_60%)]" />
      </div>
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-secondary/50 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
              <path d="M20 3v4" />
              <path d="M22 5h-4" />
              <path d="M4 17v2" />
              <path d="M5 18H3" />
            </svg>
            <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-[0.15em]">
              Pricing
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            One Client Pays for <span className="text-gradient">Months of LeadSutra</span>
          </h2>
          <p className="text-lg text-foreground font-semibold mb-2">
            Close 1 client → <span className="text-accent">10–30x ROI</span>
          </p>
          <p className="text-sm text-muted-foreground mb-1">
            Most users recover cost with 1 client in 3–7 days
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-1 p-1 rounded-full bg-secondary border border-border mt-4">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                !annual ? 'bg-card shadow-sm text-foreground' : 'text-muted-foreground'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                annual ? 'bg-card shadow-sm text-foreground' : 'text-muted-foreground'
              }`}
            >
              Annual
              <span
                className="text-[10px] bg-aurora/10 text-aurora px-2 py-0.5 rounded-full font-semibold"
                style={{ color: 'hsl(248 68% 64%)' }}
              >
                Save 17%
              </span>
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl transition-all duration-300 hover:-translate-y-1 glass-card border ${
                plan.highlighted
                  ? 'glow-border-indigo border-primary/30 lg:scale-[1.03] z-10'
                  : 'border-border hover:glow-border-indigo'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-gradient-primary text-white text-[11px] font-semibold shadow-lg shadow-primary/30">
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
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
                    {plan.badge}
                  </span>
                </div>
              )}
              <div className="p-7">
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-1.5">
                    {plan.icon}
                    <h3 className="text-lg font-bold">{plan.name}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">{plan.tagline}</p>
                  <p className="text-xs font-semibold text-accent mb-4">{plan.target}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-base text-muted-foreground">₹</span>
                    <span className="text-4xl font-bold text-foreground">
                      {annual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-muted-foreground text-sm">/mo</span>
                    <span className="text-[11px] text-muted-foreground ml-1">+ 18% GST</span>
                  </div>
                  {annual && (
                    <p
                      className="text-[11px] font-medium mt-1"
                      style={{ color: 'hsl(248 68% 64%)' }}
                    >
                      {plan.annualBilling}
                    </p>
                  )}
                </div>

                {/* Usage stats */}
                <div className="rounded-xl bg-secondary/40 border border-border/50 p-4 mb-5">
                  <div className="space-y-2">
                    {[
                      { label: 'Local Searches', value: plan.searches },
                      { label: 'AI Audits', value: plan.audits },
                      { label: 'Contact Finds', value: plan.contacts },
                      { label: 'AI Pitches', value: plan.pitches },
                      { label: 'Credits', value: plan.credits },
                    ].map((stat, j) => (
                      <div key={j} className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{stat.label}</span>
                        <span className="font-semibold text-foreground">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-4">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: 'hsl(248 68% 64% / 0.1)' }}
                      >
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
                          style={{ color: 'hsl(248 68% 64%)' }}
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </div>
                      <span className="text-foreground/80">{f.text}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-[11px] text-muted-foreground/60 mb-6">{plan.footer}</p>

                <a
                  href={plan.ctaHref}
                  className={`inline-flex items-center justify-center w-full h-11 px-8 rounded-xl text-sm font-medium transition-colors ${
                    plan.highlighted
                      ? 'bg-gradient-primary text-white shadow-lg shadow-primary/25 hover:opacity-90'
                      : 'bg-secondary text-foreground hover:bg-secondary/80 border border-border'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-xs text-muted-foreground/40">
            🛡️ Cancel anytime · No long-term contract
          </p>
        </div>
      </div>
    </section>
  );
}
