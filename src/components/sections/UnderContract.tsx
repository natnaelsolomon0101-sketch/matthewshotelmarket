"use client";

import { motion } from "motion/react";

const deals = [
  { name: "Courtyard Houston / Hampton Inn & Suites I-10 Park Row", city: "Houston, Texas", rooms: 267 },
  { name: "Vernon Hospitality Two-Pack Portfolio", city: "Vernon, Texas", rooms: 124 },
  { name: "Staybridge Suites Las Cruces", city: "Las Cruces, New Mexico", rooms: 115 },
  { name: "Fairfield Inn & Suites Cedar Hill", city: "Cedar Hill, Texas", rooms: 90 },
  { name: "Comfort Suites Johnson Creek Conference Center", city: "Johnson Creek, Wisconsin", rooms: 100 },
];

export default function UnderContract() {
  return (
    <section id="under-contract" className="bg-black py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1280px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="text-center mb-14 md:mb-20"
        >
          <p className="text-[#86868b] text-[15px] tracking-[-0.014em] mb-3">
            In escrow
          </p>
          <h2
            className="text-white font-semibold"
            style={{
              fontSize: "clamp(2.5rem, 5.6vw, 5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.045em",
            }}
          >
            Under contract.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {deals.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.06, ease: [0.32, 0.72, 0, 1] }}
              className="group relative bg-[#1d1d1f] rounded-[28px] p-8 lg:p-10 overflow-hidden hover:bg-[#252527] transition-colors duration-500 aspect-[5/4] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[#30d158] animate-pulse" />
                  <span className="text-[#30d158] text-[11px] uppercase tracking-[0.18em] font-medium">
                    In escrow
                  </span>
                </div>
                <h3
                  className="text-white font-semibold"
                  style={{
                    fontSize: "clamp(1.375rem, 2vw, 1.875rem)",
                    lineHeight: 1.15,
                    letterSpacing: "-0.025em",
                  }}
                >
                  {d.name}
                </h3>
              </div>

              <div className="flex items-end justify-between">
                <div>
                  <span className="block text-white font-semibold tabular-nums text-[2.5rem] leading-none tracking-[-0.04em]">
                    {d.rooms}
                  </span>
                  <span className="block text-[#86868b] text-[12px] mt-1 uppercase tracking-[0.18em] font-medium">
                    Keys
                  </span>
                </div>
                <span className="text-[#86868b] text-[13px] tracking-[-0.01em]">
                  {d.city}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
