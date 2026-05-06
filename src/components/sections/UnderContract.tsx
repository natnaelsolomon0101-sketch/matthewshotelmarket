"use client";

import { motion } from "motion/react";

type Deal = {
  name: string;
  city: string;
  rooms: number;
};

const deals: Deal[] = [
  { name: "Courtyard Houston / Hampton Inn I-10 Park Row", city: "Houston, Texas", rooms: 267 },
  { name: "Vernon Hospitality Two-Pack Portfolio", city: "Vernon, Texas", rooms: 124 },
  { name: "Staybridge Suites Las Cruces", city: "Las Cruces, New Mexico", rooms: 115 },
  { name: "Fairfield Inn & Suites Cedar Hill", city: "Cedar Hill, Texas", rooms: 90 },
  { name: "Comfort Suites Johnson Creek Conference Center", city: "Johnson Creek, Wisconsin", rooms: 100 },
];

const gradients = [
  "from-[#0e1a34] to-[#1a3a6b]",
  "from-[#1a3a6b] to-[#0a1226]",
  "from-[#0066cc] to-[#1a56db]",
  "from-[#1d1d1f] to-[#2c2c2e]",
  "from-[#0e1a34] to-[#1a3a6b]",
];

export default function UnderContract() {
  return (
    <section id="under-contract" className="bg-[#f5f5f7] py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1024px] px-6">
        <div className="flex items-end justify-between gap-6 mb-7 md:mb-9 flex-wrap">
          <h2
            className="font-semibold flex-1 min-w-0"
            style={{
              fontSize: "clamp(1.5rem, 2.6vw, 2rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
            }}
          >
            <span className="text-[#1d1d1f]">In escrow.</span>{" "}
            <span className="text-[#86868b]">Currently under contract.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {deals.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.5,
                delay: (i % 4) * 0.05,
                ease: [0.32, 0.72, 0, 1],
              }}
              className="group block bg-white rounded-[18px] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_-8px_rgba(0,0,0,0.08)] hover:scale-[1.015] transition-transform duration-500"
            >
              <div className="px-5 pt-5 pb-3 flex items-center gap-2">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[#30d158]" />
                <span className="text-[#30d158] text-[10px] uppercase tracking-[0.18em] font-medium">
                  Under contract
                </span>
              </div>

              <div
                className={`relative aspect-[4/3] bg-gradient-to-br ${gradients[i % gradients.length]} overflow-hidden`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" />
                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <h3
                    className="text-white font-semibold"
                    style={{
                      fontSize: "18px",
                      lineHeight: 1.2,
                      letterSpacing: "-0.022em",
                    }}
                  >
                    {d.name}
                  </h3>
                  <p
                    className="text-white/70 mt-1"
                    style={{
                      fontSize: "12px",
                      letterSpacing: "-0.014em",
                    }}
                  >
                    {d.city}
                  </p>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="block text-[#1d1d1f] font-semibold tabular-nums text-[1.75rem] leading-none tracking-[-0.025em]">
                      {d.rooms}
                    </span>
                    <span className="block text-[#86868b] text-[11px] mt-1.5 uppercase tracking-[0.16em] font-medium">
                      Keys
                    </span>
                  </div>
                  <span className="text-[#424245] text-[13px] tracking-[-0.014em]">
                    {d.city}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
