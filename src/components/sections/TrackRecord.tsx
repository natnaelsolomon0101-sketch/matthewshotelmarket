"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

type Deal = { name: string; location: string; img?: string };

const deals: Deal[] = [
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
  { name: "Hampton + Home2 Suites", location: "Austin, TX" },
  { name: "Tampa Boutique Multifamily", location: "Tampa, FL" },
  { name: "Home2 Suites by Hilton", location: "Del Rio, TX" },
  { name: "Dual Brand Hampton Inn + Home2 Suites", location: "Austin, TX" },
  { name: "Hampton Inn", location: "Beaumont, TX" },
  { name: "Home2 Suites", location: "Columbus, OH" },
  { name: "Hampton Inn & Suites", location: "Altoona, IA" },
  { name: "La Quinta Inn & Suites", location: "Waco, TX" },
  { name: "Holiday Inn Express", location: "Early, TX" },
  { name: "Firebrand Hotel", location: "Whitefish, MT" },
  { name: "Home2 Suites", location: "Hanford, CA" },
  { name: "Hampton Inn & Home2 Suites", location: "Tulsa, OK" },
  { name: "Marble Falls Hotel", location: "Marble Falls, TX" },
  { name: "Quality Inn", location: "Carthage, TX" },
  { name: "Home2 Suites", location: "Merrillville, IN" },
  { name: "Home2 Suites", location: "Austin, TX" },
  { name: "Holiday Inn", location: "Vidor, TX" },
  { name: "Residence Inn", location: "San Marcos, TX" },
  { name: "Staybridge Suites", location: "Austin, TX" },
  { name: "Country Inn & Suites", location: "Augusta, GA" },
  { name: "Hampton Inn Portfolio", location: "Atlanta, GA" },
  { name: "Crowne Plaza Downtown", location: "Dallas, TX" },
  { name: "Radisson Hotel", location: "Corning, NY" },
  { name: "Hilton Garden Inn", location: "Bozeman, MT" },
  { name: "Hampton Inn & Suites", location: "Beaumont, TX" },
  { name: "Stone Mountain Lodge", location: "Lyons, CO" },
  { name: "Holiday Inn Express", location: "Augusta, GA" },
  { name: "Ramada", location: "Houston, TX" },
  { name: "Staybridge Suites", location: "Houston, TX" },
  { name: "Country Inn & Suites", location: "San Antonio, TX" },
  { name: "The Resort at Paws Up", location: "Missoula, MT" },
  { name: "The Mansion at Judges Hill", location: "Austin, TX" },
];

export default function TrackRecord() {
  return (
    <section id="track-record" className="bg-white py-16 md:py-20 lg:py-24">
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
            <span className="text-[#1d1d1f]">Recently sold.</span>{" "}
            <span className="text-[#86868b]">Select transactions completed by the team.</span>
          </h2>
          <a
            href="#contact"
            className="inline-flex items-center gap-1 text-[#0071e3] text-[15px] tracking-[-0.014em] hover:underline shrink-0"
          >
            View all
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {deals.map((deal, i) => (
            <motion.article
              key={`${deal.name}-${deal.location}-${i}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.5,
                delay: (i % 4) * 0.05,
                ease: [0.32, 0.72, 0, 1],
              }}
              className="group bg-white rounded-[18px] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_-8px_rgba(0,0,0,0.08)] hover:scale-[1.015] transition-transform duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 group-hover:scale-[1.04] transition-transform duration-700">
                  {deal.img ? (
                    <Image
                      src={deal.img}
                      alt={`${deal.name} — ${deal.location}`}
                      fill
                      quality={88}
                      sizes="(max-width:768px) 50vw, 280px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1d3a6e] via-[#1a2f5c] to-[#0f1d3d] flex items-center justify-center px-4">
                      <span className="text-white/90 text-[13px] font-medium tracking-[-0.01em] text-center leading-tight">
                        {deal.name}
                      </span>
                    </div>
                  )}
                </div>
                <span className="absolute top-3 left-3 bg-white/95 backdrop-blur rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-[#1d1d1f] font-medium">
                  Sold
                </span>
              </div>
              <div className="px-5 py-4">
                <h3 className="text-[#1d1d1f] font-medium text-[15px] tracking-[-0.014em] leading-tight">
                  {deal.name}
                </h3>
                <p className="mt-1 text-[#86868b] text-[12.5px] tracking-[-0.01em]">
                  {deal.location}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
