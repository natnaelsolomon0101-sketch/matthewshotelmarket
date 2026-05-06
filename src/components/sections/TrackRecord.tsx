"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { SectionHeader } from "@/components/ui/section-header";

const deals = [
  { name: "Hampton Inn", location: "Jacksonville, FL", img: "/images/hotels/hampton-inn.jpg" },
  { name: "Best Western Plus", location: "Columbiana, OH", img: "/images/hotels/best-western-plus.jpg" },
  { name: "Holiday Inn", location: "San Antonio, TX", img: "/images/hotels/holiday-inn.jpg" },
  { name: "Days Inn", location: "Harriman, TN", img: "/images/hotels/days-inn.png" },
  { name: "Quality Inn & Suites", location: "Monroeville, AL", img: "/images/hotels/quality-inn-suites.jpg" },
  { name: "Homewood Suites", location: "Panama City Beach, FL", img: "/images/hotels/homewood-pcb.avif" },
  { name: "Hilton Garden Inn", location: "Panama City Beach, FL", img: "/images/hotels/hilton-garden-pcb.jpg" },
  { name: "Home2 Suites", location: "Titusville, FL", img: "/images/hotels/home2-titusville.jpg" },
  { name: "Tru by Hilton", location: "Titusville, FL", img: "/images/hotels/tru-titusville.jpg" },
  { name: "Best Western", location: "St. Clairsville, OH", img: "/images/hotels/best-western-stclairsville.jpg" },
  { name: "Travelodge", location: "Fort Wayne, IN", img: "/images/hotels/travelodge.jpg" },
  { name: "Baymont", location: "College Station, TX", img: "/images/hotels/baymont.jpg" },
  { name: "Best Western", location: "Bowling Green, OH", img: "/images/hotels/best-western-bg.jpg" },
  { name: "Quality Inn", location: "Lima, OH", img: "/images/hotels/quality-inn-lima.jpg" },
  { name: "Fairfield Inn", location: "Evansville, IN", img: "/images/hotels/fairfield-inn.jpg" },
  { name: "Ramada", location: "Del Rio, TX", img: "/images/hotels/ramada-del-rio.png" },
  { name: "Courtyard", location: "Hampton, VA", img: "/images/hotels/courtyard-hampton.jpg" },
  { name: "Studio Res", location: "Panama City Beach, FL", img: "/images/hotels/studio-res-pcb.jpg" },
  { name: "Sea Glass Inn", location: "Melbourne, FL", img: "/images/hotels/sea-glass-melbourne.jpg" },
  { name: "LivSmart Studios", location: "Mobile, AL", img: "/images/hotels/livsmart-mobile.jpg" },
];

export default function TrackRecord() {
  return (
    <section id="track-record">
      <SectionHeader title="Track Record" label={`${deals.length} Notable Sales`} />

      <div className="bg-[#fafafa] py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mb-12"
          >
            <h2
              className="font-black text-[#0e1a34] uppercase"
              style={{
                fontSize: "clamp(2rem, 3.4vw, 3rem)",
                lineHeight: 0.98,
                letterSpacing: "-0.035em",
              }}
            >
              Recent transactions
            </h2>
            <p className="mt-5 text-[#0b0b0f] text-[16px] leading-[1.7] tracking-[-0.005em] max-w-[58ch]">
              Select hospitality transactions completed by the Matthews Hotel
              Market team across the U.S. — limited service, branded extended
              stay, and full-service assets.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {deals.map((d, i) => (
              <motion.div
                key={`${d.name}-${d.location}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: (i % 5) * 0.04 }}
                className="group bg-white rounded-2xl ring-1 ring-black/5 overflow-hidden shadow-[0_1px_2px_rgba(15,23,42,0.04)] card-hover-lift"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#eef0f4]">
                  <Image
                    src={d.img}
                    alt={`${d.name} - ${d.location}`}
                    fill
                    quality={88}
                    sizes="(max-width: 768px) 50vw, 280px"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1a34]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute top-2.5 left-2.5 inline-flex items-center rounded-full bg-white/95 backdrop-blur px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[#0e1a34]">
                    Sold
                  </span>
                </div>
                <div className="px-3 py-3">
                  <p className="text-[12.5px] font-bold text-[#0e1a34] leading-tight tracking-[-0.01em]">
                    {d.name}
                  </p>
                  <p className="mt-1 text-[10.5px] text-[#86868b] font-medium">
                    {d.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
