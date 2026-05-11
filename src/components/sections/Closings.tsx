"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import {
  closed,
  parseDealSize,
  totalKnownVolume,
  type ClosedDeal,
  type Segment,
} from "@/lib/closed";

const SEGMENTS: ("All" | Segment)[] = [
  "All",
  "Select Service",
  "Full Service",
  "Resort",
  "Boutique",
  "Extended Stay",
];

function formatVolume(total: number): string {
  if (total >= 1_000_000_000) return `$${(total / 1_000_000_000).toFixed(1)}B+`;
  if (total >= 1_000_000) return `$${Math.round(total / 1_000_000)}M+`;
  return `$${total.toLocaleString()}`;
}

function formatDealSize(value: string): string {
  const n = parseDealSize(value);
  if (!Number.isFinite(n)) return value;
  if (n >= 1_000_000) {
    const m = n / 1_000_000;
    return `$${m % 1 === 0 ? m.toFixed(0) : m.toFixed(2).replace(/0$/, "")}M`;
  }
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`;
  return `$${n.toLocaleString()}`;
}

export default function Closings() {
  const [segment, setSegment] = useState<"All" | Segment>("All");

  const filtered = useMemo<ClosedDeal[]>(
    () =>
      segment === "All"
        ? closed
        : closed.filter((d) => d.segment === segment),
    [segment],
  );

  const volume = useMemo(() => totalKnownVolume(filtered), [filtered]);

  return (
    <section
      id="closings"
      className="bg-white py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-[1024px] mx-auto px-6">
        <p className="text-[12px] uppercase tracking-[0.16em] text-[#86868b] mb-4">
          Recent Transactions
        </p>
        <h2
          className="font-semibold"
          style={{
            fontSize: "clamp(1.75rem, 3.4vw, 2.75rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.028em",
          }}
        >
          <span className="text-[#1d1d1f]">Selected closings.</span>{" "}
          <span className="text-[#86868b]">
            Capital markets, debt placement, and investment sales.
          </span>
        </h2>
        <p className="mt-4 text-[#86868b] text-[17px] tracking-[-0.014em] max-w-[640px] leading-relaxed">
          A representative slice of recent hospitality transactions across the
          team.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-6 md:gap-10 pb-10 border-b border-[#e5e5e7]">
          <div>
            <div className="text-[#1d1d1f] font-semibold tracking-[-0.02em] text-[44px] leading-none">
              {filtered.length}
            </div>
            <div className="mt-2 text-[#86868b] text-[14px] tracking-[-0.01em]">
              Featured transactions
            </div>
          </div>
          <div>
            <div className="text-[#1d1d1f] font-semibold tracking-[-0.02em] text-[44px] leading-none">
              {formatVolume(volume)}
            </div>
            <div className="mt-2 text-[#86868b] text-[14px] tracking-[-0.01em]">
              Disclosed volume
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between gap-6 flex-wrap">
          <div className="flex flex-wrap gap-2">
            {SEGMENTS.map((s) => {
              const active = s === segment;
              return (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSegment(s)}
                  className={
                    "rounded-full px-4 py-2 text-[13.5px] tracking-[-0.01em] transition-colors " +
                    (active
                      ? "bg-[#1d1d1f] text-white"
                      : "bg-transparent text-[#86868b] hover:text-[#1d1d1f]")
                  }
                >
                  {s}
                </button>
              );
            })}
          </div>
          <span className="text-[12px] uppercase tracking-[0.18em] text-[#86868b]">
            {filtered.length} Closings
          </span>
        </div>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#e5e5e7]">
                <th className="py-3 pr-4 text-[12px] uppercase tracking-[0.14em] text-[#86868b] font-medium">
                  Tenant
                </th>
                <th className="py-3 pr-4 text-[12px] uppercase tracking-[0.14em] text-[#86868b] font-medium">
                  City
                </th>
                <th className="py-3 pr-4 text-[12px] uppercase tracking-[0.14em] text-[#86868b] font-medium">
                  State
                </th>
                <th className="py-3 pr-4 text-[12px] uppercase tracking-[0.14em] text-[#86868b] font-medium">
                  Amount
                </th>
                <th className="py-3 text-[12px] uppercase tracking-[0.14em] text-[#86868b] font-medium">
                  Type
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((d, i) => (
                <motion.tr
                  key={d.slug}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{
                    duration: 0.35,
                    delay: Math.min(i * 0.015, 0.3),
                    ease: [0.32, 0.72, 0, 1],
                  }}
                  className="border-b border-[#f1f1f3]"
                >
                  <td className="py-4 pr-4 text-[15px] tracking-[-0.014em] text-[#1d1d1f]">
                    {d.name}
                  </td>
                  <td className="py-4 pr-4 text-[15px] tracking-[-0.014em] text-[#1d1d1f]">
                    {d.city}
                  </td>
                  <td className="py-4 pr-4 text-[15px] tracking-[-0.014em] text-[#1d1d1f]">
                    {d.state}
                  </td>
                  <td className="py-4 pr-4 text-[15px] tracking-[-0.014em] text-[#1d1d1f] tabular-nums">
                    {formatDealSize(d.dealSize)}
                  </td>
                  <td className="py-4 text-[14px] tracking-[-0.01em] text-[#86868b]">
                    {d.transactionTypeLabel ?? d.transactionType}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
