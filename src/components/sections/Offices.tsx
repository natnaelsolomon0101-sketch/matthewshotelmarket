"use client";

import { motion } from "motion/react";

const offices = [
  { city: "Dallas", address: "5001 Spring Valley Rd, Suite 100W", state: "Dallas, TX 75244", phone: "(972) 755-5200", hq: true },
  { city: "Austin", address: "9600 N MoPac Expressway, Suite 300", state: "Austin, TX 78759", phone: "(512) 338-7800" },
  { city: "Houston", address: "Three Riverway, Suite 800", state: "Houston, TX 77056", phone: "(713) 452-4200" },
  { city: "San Antonio", address: "8200 IH 10 West, Suite 603", state: "San Antonio, TX 78230", phone: "(210) 343-7800" },
  { city: "Denver", address: "1225 17th Street, Suite 1800", state: "Denver, CO 80202", phone: "(303) 328-2000" },
  { city: "Chicago", address: "333 W Wacker Dr, Suite 200", state: "Chicago, IL 60606", phone: "(312) 327-5400" },
  { city: "Oakbrook", address: "One Mid-America Plaza, Suite 200", state: "Oakbrook Terrace, IL 60181", phone: "(630) 570-2200" },
];

export default function Offices() {
  return (
    <section id="offices" className="bg-[#f5f5f7] py-16 md:py-20 lg:py-24">
      <div className="max-w-[1024px] mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-7 md:mb-9 flex-wrap">
          <h2
            className="font-semibold flex-1 min-w-0"
            style={{
              fontSize: "clamp(1.5rem, 2.6vw, 2rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
            }}
          >
            <span className="text-[#1d1d1f]">Find a Matthews office.</span>{" "}
            <span className="text-[#86868b]">Coast to coast.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {offices.map((office, i) => {
            const telHref = `tel:${office.phone.replace(/[^0-9+]/g, "")}`;
            return (
              <motion.article
                key={`${office.city}-${i}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.5,
                  delay: (i % 4) * 0.05,
                  ease: [0.32, 0.72, 0, 1],
                }}
                className="bg-white rounded-[18px] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_-8px_rgba(0,0,0,0.08)] hover:bg-[#fafafa] transition-colors"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-[#1d1d1f] font-semibold text-[1.375rem] tracking-[-0.02em]">
                    {office.city}
                  </h3>
                  {office.hq && (
                    <span className="rounded-full bg-[#0071e3] text-white px-2.5 py-0.5 text-[10px] uppercase tracking-[0.18em] font-medium">
                      HQ
                    </span>
                  )}
                </div>
                <p className="mt-3 text-[#424245] text-[14px] leading-[1.5] tracking-[-0.014em]">
                  {office.address}
                </p>
                <p className="text-[#86868b] text-[14px] leading-[1.5] tracking-[-0.014em]">
                  {office.state}
                </p>
                <a
                  href={telHref}
                  className="mt-5 inline-block text-[#0071e3] text-[14.5px] tracking-[-0.014em] hover:underline"
                >
                  {office.phone}
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
