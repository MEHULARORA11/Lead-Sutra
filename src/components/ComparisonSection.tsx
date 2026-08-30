'use client';
import React from 'react';

const features = [
  {
    name: 'Local Business Discovery',
    apollo: false,
    semrush: false,
    adspy: false,
    hunter: false,
    clay: 'Partial',
    leadsutra: true,
  },
  {
    name: 'AI Business Audit',
    apollo: false,
    semrush: 'Partial',
    adspy: false,
    hunter: false,
    clay: false,
    leadsutra: true,
  },
  {
    name: 'Revenue Loss Estimation',
    apollo: false,
    semrush: false,
    adspy: false,
    hunter: false,
    clay: false,
    leadsutra: true,
  },
  {
    name: 'Ads Intelligence',
    apollo: false,
    semrush: 'Partial',
    adspy: true,
    hunter: false,
    clay: false,
    leadsutra: true,
  },
  {
    name: 'Contact Discovery',
    apollo: true,
    semrush: false,
    adspy: false,
    hunter: true,
    clay: true,
    leadsutra: true,
  },
  {
    name: 'AI Pitch Generation',
    apollo: 'Partial',
    semrush: false,
    adspy: false,
    hunter: false,
    clay: 'Partial',
    leadsutra: true,
  },
  {
    name: 'Deal Pipeline / CRM',
    apollo: true,
    semrush: false,
    adspy: false,
    hunter: false,
    clay: false,
    leadsutra: true,
  },
  {
    name: 'Intent / Growth Signals',
    apollo: 'Partial',
    semrush: false,
    adspy: false,
    hunter: false,
    clay: 'Partial',
    leadsutra: true,
  },
  {
    name: 'India Localization',
    apollo: false,
    semrush: false,
    adspy: false,
    hunter: false,
    clay: false,
    leadsutra: true,
  },
  {
    name: 'WhatsApp Outreach',
    apollo: false,
    semrush: false,
    adspy: false,
    hunter: false,
    clay: false,
    leadsutra: true,
  },
];

const CheckIcon = () => (
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
    className="text-primary mx-auto"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const XIcon = () => (
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
    className="text-muted-foreground/40 mx-auto"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) return <CheckIcon />;
  if (value === false) return <XIcon />;
  return <span className="text-xs text-muted-foreground mx-auto block text-center">{value}</span>;
}

export default function ComparisonSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-background mb-6">
            <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-[0.15em]">
              Comparison
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            One Tool to <span className="text-gradient">Replace Five</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Why pay $500+/month across multiple tools when LeadSutra does it all — starting at
            ₹1,499?
          </p>
        </div>

        {/* Desktop table */}
        <div className="max-w-5xl mx-auto overflow-x-auto rounded-2xl border border-border bg-background shadow-xl hidden sm:block">
          <table className="w-full min-w-[700px] text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 font-medium text-muted-foreground w-[200px]">
                  Feature
                </th>
                {[
                  { name: 'Apollo', price: '$49–119/mo' },
                  { name: 'Semrush', price: '$139+/mo' },
                  { name: 'AdSpy', price: '$149/mo' },
                  { name: 'Hunter', price: '$49/mo' },
                  { name: 'Clay', price: '$149+/mo' },
                ].map((tool) => (
                  <th key={tool.name} className="p-4 text-center font-medium text-muted-foreground">
                    <div>{tool.name}</div>
                    <div className="text-[10px] font-normal opacity-60">{tool.price}</div>
                  </th>
                ))}
                <th className="p-4 text-center font-semibold text-primary bg-primary/5 rounded-tr-2xl">
                  <div className="flex items-center justify-center gap-1.5">
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
                      <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z" />
                      <path d="M5 21h14" />
                    </svg>
                    LeadSutra
                  </div>
                  <div className="text-[10px] font-normal opacity-80">₹1,499/mo</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((row, i) => (
                <tr
                  key={i}
                  className={`border-b border-border/50 ${i % 2 === 1 ? 'bg-muted/20' : ''}`}
                >
                  <td className="p-4 font-medium text-foreground">{row.name}</td>
                  <td className="p-4">
                    <CellValue value={row.apollo} />
                  </td>
                  <td className="p-4">
                    <CellValue value={row.semrush} />
                  </td>
                  <td className="p-4">
                    <CellValue value={row.adspy} />
                  </td>
                  <td className="p-4">
                    <CellValue value={row.hunter} />
                  </td>
                  <td className="p-4">
                    <CellValue value={row.clay} />
                  </td>
                  <td className="p-4 bg-primary/5">
                    <CellValue value={row.leadsutra} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile simplified */}
        <div className="max-w-lg mx-auto sm:hidden">
          <div className="space-y-3">
            {features.map((row, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 rounded-xl border border-border/50 bg-background/50"
              >
                <span className="text-sm font-medium text-foreground flex-1 pr-3">{row.name}</span>
                <div className="flex items-center gap-4 shrink-0">
                  <div className="text-center w-16">
                    <p className="text-[9px] text-muted-foreground mb-0.5">Others</p>
                    {row.apollo === true ||
                    row.semrush === true ||
                    row.adspy === true ||
                    row.hunter === true ||
                    row.clay === true ? (
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
                        className="text-muted-foreground mx-auto"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    ) : (
                      <span className="text-[10px] text-muted-foreground">Partial</span>
                    )}
                  </div>
                  <div className="text-center w-20 bg-primary/10 rounded-lg py-1.5 px-2">
                    <p className="text-[9px] text-primary font-semibold mb-0.5">LeadSutra</p>
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
                      className="text-primary mx-auto"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-muted-foreground text-sm mt-6 max-w-lg mx-auto">
          LeadSutra is the only platform purpose-built for agencies and freelancers selling to local
          businesses — especially in India.
        </p>
      </div>
    </section>
  );
}
