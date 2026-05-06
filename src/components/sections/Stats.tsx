"use client";

import { motion } from "motion/react";
import { Counter } from "@/components/ui/counter";

const stats = [
  { v: "59K+", l: "Rooms sold" },
  { v: "72", l: "Transactions in 2024" },
  { v: "670+", l: "Total sales" },
  { v: "$3.5B", l: "Sales volume" },
];

export default function Stats() {
  return (
    <section id="stats" className="bg-black py-24 md:py-32 lg:py-40 relative overflow-hidden">
      <div className="mx-auto max-w-[1024px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="text-center"
        >
          <h2
            className="text-white font-semibold mx-auto"
            style={{
              fontSize: "clamp(2.5rem, 5.6vw, 5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.045em",
            }}
          >
            Built on track record.
          </h2>
          <p
            className="mx-auto mt-5 text-[#a1a1a6] max-w-[640px]"
            style={{ fontSize: "clamp(1.0625rem, 1.3vw, 1.25rem)", lineHeight: 1.45, letterSpacing: "0.011em" }}
          >
            Hospitality investment sales is a long game. Numbers compound.
          </p>
        </motion.div>

        <div className="mt-20 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-y-16 md:gap-y-0 md:gap-x-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.32, 0.72, 0, 1] }}
              className="text-center"
            >
              <Counter
                value={s.v}
                className="block text-white font-semibold tabular-nums text-[3rem] md:text-[4rem] xl:text-[5.5rem] leading-none tracking-[-0.05em]"
              />
              <p className="mt-3 text-[#86868b] text-[14px] tracking-[-0.014em]">
                {s.l}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
