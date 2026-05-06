"use client";

import { motion } from "motion/react";
import { Counter } from "@/components/ui/counter";

const ease = [0.32, 0.72, 0, 1] as const;

export default function Stats() {
  return (
    <section id="stats" className="bg-white py-16 md:py-20 lg:py-24">
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
          <span className="text-[#1d1d1f]">The latest.</span>{" "}
          <span className="text-[#86868b]">Take a look at where we&rsquo;re moving.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1 — 2024 Production */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, ease, delay: 0.05 }}
            className="rounded-[18px] min-h-[280px] md:min-h-[360px] p-7 md:p-9 flex flex-col justify-end bg-gradient-to-br from-[#0a1226] to-[#1a3a6b] hover:scale-[1.012] transition-transform duration-500 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_-8px_rgba(0,0,0,0.08)]"
          >
            <div className="text-white/60 text-[11px] uppercase tracking-[0.18em] mb-3">
              2024 Production
            </div>
            <h3 className="text-white font-semibold text-[2rem] leading-tight tracking-[-0.025em]">
              <Counter value="$3.5B" /> sold.
            </h3>
            <p className="text-white/70 text-[14px] mt-2">
              72 transactions, 59,000+ rooms.
            </p>
          </motion.div>

          {/* Card 2 — Active Pipeline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, ease, delay: 0.1 }}
            className="rounded-[18px] min-h-[280px] md:min-h-[360px] p-7 md:p-9 flex flex-col justify-end bg-[#f5f5f7] hover:scale-[1.012] transition-transform duration-500 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_-8px_rgba(0,0,0,0.08)]"
          >
            <div className="text-[#86868b] text-[11px] uppercase tracking-[0.18em] mb-3">
              Active Pipeline
            </div>
            <h3 className="text-[#1d1d1f] font-semibold text-[2rem] leading-tight tracking-[-0.025em]">
              <Counter value="11" /> listings live.
            </h3>
            <p className="text-[#424245] text-[14px] mt-2">
              From 62 keys in Tyler to 898 across Dallas Select Service.
            </p>
          </motion.div>

          {/* Card 3 — Investor Reach */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, ease, delay: 0.15 }}
            className="rounded-[18px] min-h-[280px] md:min-h-[360px] p-7 md:p-9 flex flex-col justify-end bg-gradient-to-br from-[#0066cc] to-[#1a56db] hover:scale-[1.012] transition-transform duration-500 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_-8px_rgba(0,0,0,0.08)]"
          >
            <div className="text-white/60 text-[11px] uppercase tracking-[0.18em] mb-3">
              Investor Reach
            </div>
            <h3 className="text-white font-semibold text-[2rem] leading-tight tracking-[-0.025em]">
              <Counter value="1M+" /> investors.
            </h3>
            <p className="text-white/70 text-[14px] mt-2">
              Direct relationships with the buyers your asset deserves.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
