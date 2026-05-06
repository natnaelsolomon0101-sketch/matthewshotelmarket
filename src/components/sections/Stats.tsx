"use client";

import { Counter } from "@/components/ui/counter";
import { AnimateIn } from "@/components/ui/animate-in";

const stats = [
  { v: "59K+", l: "Rooms Sold" },
  { v: "72", l: "Transactions 2024" },
  { v: "670+", l: "Total Sales" },
  { v: "$3.5B", l: "Sales Volume" },
];

export default function Stats() {
  return (
    <section id="stats" className="bg-white border-b border-black/[0.06]">
      <div className="mx-auto max-w-[1440px] px-8 lg:px-16 py-16 lg:py-20">
        <AnimateIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((s) => (
              <div key={s.l} className="text-center md:text-left">
                <Counter
                  value={s.v}
                  className="block text-4xl md:text-5xl xl:text-6xl font-black text-[#0e1a34] tabular-nums tracking-[-0.03em]"
                />
                <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-[#6e6e73] font-medium">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
