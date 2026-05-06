"use client";

import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

type Tone = "indigo" | "blue" | "graphite" | "navy";

type Listing = {
  name: string;
  city: string;
  rooms: number;
  tone: Tone;
};

const listings: Listing[] = [
  { name: "Hampton Inn & Suites Aurora South Denver", city: "Aurora, Colorado", rooms: 112, tone: "indigo" },
  { name: "Holiday Inn Express & Suites Fort Worth Downtown", city: "Fort Worth, Texas", rooms: 163, tone: "blue" },
  { name: "Home2 Suites by Hilton Jackson", city: "Jackson, Michigan", rooms: 83, tone: "graphite" },
  { name: "Fairfield Inn & Suites Goshen", city: "Goshen, Indiana", rooms: 92, tone: "navy" },
  { name: "Fairfield Inn & Suites Warsaw", city: "Warsaw, Indiana", rooms: 92, tone: "blue" },
  { name: "Courtyard by Marriott Chicago Deerfield", city: "Deerfield, Illinois", rooms: 131, tone: "indigo" },
  { name: "Courtyard Arlington Heights South", city: "Arlington Heights, Illinois", rooms: 147, tone: "navy" },
  { name: "Courtyard by Marriott Rockford", city: "Rockford, Illinois", rooms: 147, tone: "graphite" },
  { name: "Holiday Inn Express Temple Medical Center", city: "Temple, Texas", rooms: 71, tone: "blue" },
  { name: "Fairfield Inn & Suites Tyler", city: "Tyler, Texas", rooms: 62, tone: "indigo" },
  { name: "Dallas Select Service Portfolio", city: "Multi-Asset, Texas", rooms: 898, tone: "navy" },
];

const tones: Record<Tone, string> = {
  indigo: "from-[#1a3a6b] to-[#0a1226]",
  blue: "from-[#0066cc] to-[#1a56db]",
  graphite: "from-[#1d1d1f] to-[#2c2c2e]",
  navy: "from-[#0e1a34] to-[#1a3a6b]",
};

export default function Listings() {
  return (
    <section id="listings" className="bg-white py-16 md:py-20 lg:py-24">
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
            <span className="text-[#1d1d1f]">Listings.</span>{" "}
            <span className="text-[#86868b]">Hotels available for acquisition.</span>
          </h2>
          <a
            href="#contact"
            className="inline-flex items-center gap-1 text-[#0071e3] text-[15px] tracking-[-0.014em] hover:underline shrink-0"
          >
            See all
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {listings.map((l, i) => (
            <motion.a
              key={l.name}
              href="#contact"
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
              <div
                className={`relative aspect-[4/3] rounded-t-[18px] bg-gradient-to-br ${tones[l.tone]} overflow-hidden`}
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
                    {l.name}
                  </h3>
                  <p
                    className="text-white/70 mt-1"
                    style={{
                      fontSize: "12px",
                      letterSpacing: "-0.014em",
                    }}
                  >
                    {l.city}
                  </p>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="block text-[#1d1d1f] font-semibold tabular-nums text-[1.75rem] leading-none tracking-[-0.025em]">
                      {l.rooms}
                    </span>
                    <span className="block text-[#86868b] text-[11px] mt-1.5 uppercase tracking-[0.16em] font-medium">
                      Keys
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[#0071e3] text-[13px] tracking-[-0.014em] group-hover:underline">
                    Request offers
                    <ChevronRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
