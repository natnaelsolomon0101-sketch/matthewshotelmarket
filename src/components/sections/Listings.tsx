"use client";

import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

type Listing = {
  name: string;
  city: string;
  rooms: number;
  tone: "navy" | "blue" | "graphite" | "midnight";
};

const listings: Listing[] = [
  { name: "Hampton Inn & Suites Aurora South Denver", city: "Aurora, Colorado", rooms: 112, tone: "navy" },
  { name: "Holiday Inn Express & Suites Fort Worth Downtown", city: "Fort Worth, Texas", rooms: 163, tone: "blue" },
  { name: "Home2 Suites by Hilton Jackson", city: "Jackson, Michigan", rooms: 83, tone: "graphite" },
  { name: "Fairfield Inn & Suites Goshen", city: "Goshen, Indiana", rooms: 92, tone: "midnight" },
  { name: "Fairfield Inn & Suites Warsaw", city: "Warsaw, Indiana", rooms: 92, tone: "blue" },
  { name: "Courtyard by Marriott Chicago Deerfield", city: "Deerfield, Illinois", rooms: 131, tone: "navy" },
  { name: "Courtyard Arlington Heights / South", city: "Arlington Heights, Illinois", rooms: 147, tone: "midnight" },
  { name: "Courtyard by Marriott Rockford", city: "Rockford, Illinois", rooms: 147, tone: "graphite" },
  { name: "Holiday Inn Express Temple Medical Center", city: "Temple, Texas", rooms: 71, tone: "blue" },
  { name: "Fairfield Inn & Suites Tyler", city: "Tyler, Texas", rooms: 62, tone: "navy" },
  { name: "Dallas Select Service Portfolio", city: "Multi-Asset, Texas", rooms: 898, tone: "midnight" },
];

const toneStyles = {
  navy: "bg-[linear-gradient(160deg,#0a1226_0%,#152249_100%)]",
  blue: "bg-[linear-gradient(160deg,#0066cc_0%,#1a56db_100%)]",
  graphite: "bg-[linear-gradient(160deg,#1d1d1f_0%,#2c2c2e_100%)]",
  midnight: "bg-[linear-gradient(160deg,#0e1a34_0%,#1a3a6b_100%)]",
};

export default function Listings() {
  return (
    <section id="listings" className="bg-[#f5f5f7] py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="text-center mb-14 md:mb-20"
        >
          <p className="text-[#86868b] text-[15px] tracking-[-0.014em] mb-3">
            Available for acquisition
          </p>
          <h2
            className="text-[#1d1d1f] font-semibold mx-auto"
            style={{
              fontSize: "clamp(2.5rem, 5.6vw, 5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.045em",
            }}
          >
            Current listings.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {listings.map((l, i) => (
            <motion.a
              key={l.name}
              href="#contact"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.06, ease: [0.32, 0.72, 0, 1] }}
              className={`group relative ${toneStyles[l.tone]} rounded-[28px] p-8 md:p-10 overflow-hidden text-white aspect-[4/5] flex flex-col justify-between transition-transform duration-500 hover:scale-[1.012]`}
            >
              <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.4),transparent_60%)]" />
              </div>

              <div className="relative">
                <p className="text-[13px] font-medium text-white/60 tracking-[-0.01em] mb-3">
                  {l.city}
                </p>
                <h3
                  className="font-semibold text-white"
                  style={{
                    fontSize: "clamp(1.5rem, 2.2vw, 2rem)",
                    lineHeight: 1.1,
                    letterSpacing: "-0.025em",
                  }}
                >
                  {l.name}
                </h3>
              </div>

              <div className="relative flex items-end justify-between">
                <div>
                  <span className="block text-white font-semibold tabular-nums text-[2.75rem] leading-none tracking-[-0.04em]">
                    {l.rooms}
                  </span>
                  <span className="block text-white/55 text-[12px] mt-1 uppercase tracking-[0.18em] font-medium">
                    Keys
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 text-[#a8c5ff] text-[15px] tracking-[-0.014em] group-hover:underline">
                  Request offers
                  <ChevronRight className="h-4 w-4" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
