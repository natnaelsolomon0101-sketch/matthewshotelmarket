"use client";

import { motion } from "motion/react";
import { TrendingUp, Users, Network, Award } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const ease = [0.32, 0.72, 0, 1] as const;

type Benefit = {
  icon: LucideIcon;
  title: string;
  body: string;
};

const benefits: Benefit[] = [
  {
    icon: TrendingUp,
    title: "Market intelligence.",
    body: "Proprietary research on supply, demand, ADR, and cap rates across 30+ markets.",
  },
  {
    icon: Users,
    title: "1M+ investors.",
    body: "Direct lines to hotel investors, family offices, REITs, and institutional capital.",
  },
  {
    icon: Network,
    title: "30+ offices nationwide.",
    body: "Local expertise. National reach. Off-market deals surface first.",
  },
  {
    icon: Award,
    title: "$84.3B closed.",
    body: "Proven across every CRE asset class. Hospitality clients tap a platform that scales.",
  },
];

export default function WhyChoose() {
  return (
    <section id="why" className="bg-[#f5f5f7] py-16 md:py-20 lg:py-24">
      <div className="max-w-[1024px] mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, ease }}
          className="font-semibold mb-9"
          style={{
            fontSize: "clamp(1.5rem, 2.6vw, 2rem)",
            lineHeight: 1.15,
            letterSpacing: "-0.025em",
          }}
        >
          <span className="text-[#1d1d1f]">The Matthews difference.</span>{" "}
          <span className="text-[#86868b]">Why owners and investors choose us.</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, ease, delay: i * 0.05 }}
                className="bg-white rounded-[18px] p-6 md:p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_-8px_rgba(0,0,0,0.08)]"
              >
                <Icon className="h-7 w-7 text-[#0071e3] mb-4" strokeWidth={1.75} />
                <h3 className="text-[#1d1d1f] font-semibold text-[17px] leading-tight tracking-[-0.014em] mb-2">
                  {b.title}
                </h3>
                <p className="text-[#424245] text-[14px] leading-[1.5]">
                  {b.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
