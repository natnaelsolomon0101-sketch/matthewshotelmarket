"use client";

import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const deals = [
  {
    name: "Two Property Portfolio: Courtyard Houston / Hampton Inn & Suites I-10 W-Park Row",
    address: "18010 Park Row Blvd, Houston, TX 77084",
    rooms: 267,
  },
  {
    name: "Vernon Hospitality Two-Pack Portfolio",
    address: "700 Hillcrest Dr, Vernon, TX 76384",
    rooms: 124,
  },
  {
    name: "Staybridge Suites Las Cruces",
    address: "2651 E Northrise Dr, Las Cruces, NM 88011",
    rooms: 115,
  },
  {
    name: "Fairfield Inn & Suites Dallas Cedar Hill",
    address: "409 N Clark Rd, Cedar Hill, TX 75104",
    rooms: 90,
  },
  {
    name: "Comfort Suites Johnson Creek Conference Center",
    address: "725 Paradise Ln, Johnson Creek, WI 53038",
    rooms: 100,
  },
];

export default function UnderContract() {
  return (
    <section id="under-contract">
      <SectionHeader title="Under Contract" label="In Escrow" />

      <div className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {deals.map((d, i) => (
              <motion.div
                key={d.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.05 }}
                className="relative bg-gradient-to-br from-[#0e1a34] to-[#152249] ring-1 ring-white/10 rounded-2xl p-7 text-white overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-[#4e8eff]/20 blur-3xl" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-5">
                    <span className="inline-flex h-2 w-2 rounded-full bg-[#4ade80] animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#4ade80]">
                      Under Contract
                    </span>
                  </div>

                  <h3 className="font-bold text-[17px] leading-[1.3] tracking-[-0.012em] mb-4 min-h-[3.5em]">
                    {d.name}
                  </h3>

                  <p className="flex items-start gap-2 text-white/70 text-[13px] leading-snug">
                    <MapPin className="h-4 w-4 shrink-0 mt-[2px] text-white/50" />
                    {d.address}
                  </p>

                  <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold tabular-nums tracking-tight">
                        {d.rooms}
                      </span>
                      <span className="text-[12px] text-white/60 font-medium ml-1.5">keys</span>
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.16em] text-white/50 font-medium">
                      In Escrow
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
