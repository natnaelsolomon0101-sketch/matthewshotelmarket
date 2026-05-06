"use client";

import { motion } from "motion/react";
import { TrendingUp, Database, Network, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: TrendingUp,
    title: "Market Intelligence",
    body:
      "Proprietary research on supply, demand, ADR, and cap rates across 30+ markets — so sellers price with confidence and buyers underwrite with conviction.",
  },
  {
    icon: Database,
    title: "1M+ Investor Database",
    body:
      "Direct relationships with hotel investors, family offices, REITs, and institutional capital — the right buyer for every brand, scale, and class.",
  },
  {
    icon: Network,
    title: "30+ Offices Nationwide",
    body:
      "Local market expertise with national reach. Our hospitality team partners with brokers across the country to surface off-market deals first.",
  },
  {
    icon: ShieldCheck,
    title: "$84.3B Closed",
    body:
      "Matthews has executed $84.3B+ across 33,000+ commercial transactions. Hospitality clients tap a platform proven across every CRE asset class.",
  },
];

export default function WhyChoose() {
  return (
    <section id="why" className="bg-[#0e1a34] py-24 lg:py-28 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#4e8eff]/10 blur-[120px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#1a56db]/10 blur-[120px] translate-y-1/2 -translate-x-1/3" />

      <div className="relative mx-auto max-w-[1440px] px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <p className="text-[#4e8eff] text-[12px] font-bold uppercase tracking-[0.22em] mb-4">
            Why Choose Matthews Hotel Market
          </p>
          <h2
            className="font-black text-white uppercase"
            style={{
              fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
              lineHeight: 0.98,
              letterSpacing: "-0.035em",
            }}
          >
            A leader in hotel
            <br />
            investment sales.
          </h2>
          <p className="mt-7 text-white/75 text-[17px] leading-[1.7] tracking-[-0.005em] max-w-[58ch]">
            Hotel ownership is a long game. The team you choose at the
            transaction shapes returns for years. Matthews&trade; pairs deep
            hospitality specialization with the platform breadth to surface
            the right buyer, the right structure, and the right outcome —
            every time.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white/[0.04] backdrop-blur-sm ring-1 ring-white/10 rounded-2xl p-8 hover:bg-white/[0.06] hover:ring-white/20 transition-all"
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0 h-12 w-12 rounded-xl bg-[#4e8eff]/15 ring-1 ring-[#4e8eff]/30 flex items-center justify-center">
                  <p.icon className="h-5 w-5 text-[#4e8eff]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-[19px] tracking-[-0.012em] mb-2">
                    {p.title}
                  </h3>
                  <p className="text-white/70 text-[14.5px] leading-[1.65]">
                    {p.body}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
