"use client";

import Image from "next/image";
import { motion } from "motion/react";

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
    <section id="track-record" className="bg-[#f5f5f7] py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1280px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-[#86868b] text-[15px] tracking-[-0.014em] mb-3">
            Track record
          </p>
          <h2
            className="text-[#1d1d1f] font-semibold"
            style={{
              fontSize: "clamp(2.5rem, 5.6vw, 5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.045em",
            }}
          >
            Recently sold.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {deals.map((d, i) => (
            <motion.div
              key={`${d.name}-${d.location}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.05, ease: [0.32, 0.72, 0, 1] }}
              className="group bg-white rounded-[22px] overflow-hidden transition-all duration-500 hover:scale-[1.015] hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.18)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#e8e8ed]">
                <Image
                  src={d.img}
                  alt={`${d.name} — ${d.location}`}
                  fill
                  quality={88}
                  sizes="(max-width: 768px) 50vw, 320px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-white/95 backdrop-blur px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[#1d1d1f]">
                  Sold
                </span>
              </div>
              <div className="px-5 py-4">
                <p className="text-[#1d1d1f] font-medium text-[15px] tracking-[-0.014em] leading-tight">
                  {d.name}
                </p>
                <p className="mt-1 text-[#86868b] text-[12.5px] tracking-[-0.01em]">
                  {d.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
