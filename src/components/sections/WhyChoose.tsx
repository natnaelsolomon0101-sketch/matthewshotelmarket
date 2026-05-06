"use client";

import { motion } from "motion/react";

const pillars = [
  {
    eyebrow: "Market intelligence",
    headline: "Information,\nnot just listings.",
    body: "Proprietary research on supply, demand, ADR, and cap rates across 30+ markets. Sellers price with confidence. Buyers underwrite with conviction.",
  },
  {
    eyebrow: "Investor reach",
    headline: "Over 1 million\nrelationships.",
    body: "Direct lines to hotel investors, family offices, REITs, and institutional capital. The right buyer for every brand, scale, and class.",
  },
  {
    eyebrow: "Coast-to-coast",
    headline: "30+ offices.\nOne team.",
    body: "Local market expertise with national reach. Off-market deals surface first when every sub-market has someone listening.",
  },
  {
    eyebrow: "Track record",
    headline: "$84.3 billion\nclosed.",
    body: "Matthews has executed across every CRE asset class. Hospitality clients tap a platform proven at every scale and structure.",
  },
];

export default function WhyChoose() {
  return (
    <section id="why" className="bg-white py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1280px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="text-[#86868b] text-[15px] tracking-[-0.014em] mb-3">
            Why Matthews
          </p>
          <h2
            className="text-[#1d1d1f] font-semibold mx-auto max-w-[920px]"
            style={{
              fontSize: "clamp(2.5rem, 5.6vw, 5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.045em",
            }}
          >
            A leader in hotel investment sales.
          </h2>
        </motion.div>

        <div className="space-y-5 lg:space-y-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.eyebrow}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
              className={`relative rounded-[28px] overflow-hidden p-10 md:p-16 lg:p-20 ${
                i % 2 === 0
                  ? "bg-[#f5f5f7] text-[#1d1d1f]"
                  : "bg-[#1d1d1f] text-white"
              }`}
            >
              <p
                className={`text-[14px] tracking-[-0.014em] mb-4 ${
                  i % 2 === 0 ? "text-[#86868b]" : "text-[#86868b]"
                }`}
              >
                {p.eyebrow}
              </p>
              <h3
                className="font-semibold whitespace-pre-line max-w-[820px]"
                style={{
                  fontSize: "clamp(2rem, 4.4vw, 4rem)",
                  lineHeight: 1.07,
                  letterSpacing: "-0.04em",
                }}
              >
                {p.headline}
              </h3>
              <p
                className={`mt-7 max-w-[640px] ${
                  i % 2 === 0 ? "text-[#424245]" : "text-[#a1a1a6]"
                }`}
                style={{
                  fontSize: "clamp(1.0625rem, 1.3vw, 1.25rem)",
                  lineHeight: 1.5,
                  letterSpacing: "0.011em",
                }}
              >
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
