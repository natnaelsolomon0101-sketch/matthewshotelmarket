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
    <section id="offices" className="bg-white py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1280px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="text-center mb-14 md:mb-20"
        >
          <p className="text-[#86868b] text-[15px] tracking-[-0.014em] mb-3">
            Coast to coast
          </p>
          <h2
            className="text-[#1d1d1f] font-semibold"
            style={{
              fontSize: "clamp(2.5rem, 5.6vw, 5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.045em",
            }}
          >
            Find us nearby.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          {offices.map((o, i) => (
            <motion.div
              key={o.city}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.05, ease: [0.32, 0.72, 0, 1] }}
              className="bg-[#f5f5f7] rounded-[22px] p-7 md:p-8 hover:bg-[#ededf0] transition-colors duration-300"
            >
              <div className="flex items-center justify-between mb-5">
                <h3
                  className="text-[#1d1d1f] font-semibold"
                  style={{
                    fontSize: "1.625rem",
                    lineHeight: 1.1,
                    letterSpacing: "-0.025em",
                  }}
                >
                  {o.city}
                </h3>
                {o.hq && (
                  <span className="inline-flex items-center rounded-full bg-[#0071e3] text-white px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.18em]">
                    HQ
                  </span>
                )}
              </div>
              <p className="text-[#424245] text-[14.5px] leading-[1.5] tracking-[-0.014em]">
                {o.address}
                <br />
                <span className="text-[#86868b]">{o.state}</span>
              </p>
              <a
                href={`tel:${o.phone.replace(/[^0-9]/g, "")}`}
                className="mt-5 inline-block text-[#0071e3] text-[14.5px] tracking-[-0.014em] hover:underline"
              >
                {o.phone}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
