"use client";

import { motion } from "motion/react";
import { Phone, MapPin } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const offices = [
  {
    city: "Dallas",
    address: "5001 Spring Valley Road, Suite #100W",
    cityState: "Dallas, TX 75244",
    phone: "(972) 755-5200",
    hq: true,
  },
  {
    city: "Austin",
    address: "9600 North MoPac Expressway, Suite #300",
    cityState: "Austin, TX 78759",
    phone: "(512) 338-7800",
  },
  {
    city: "Houston",
    address: "Three Riverway, Suite #800",
    cityState: "Houston, TX 77056",
    phone: "(713) 452-4200",
  },
  {
    city: "San Antonio",
    address: "8200 IH 10 West, Suite #603",
    cityState: "San Antonio, TX 78230",
    phone: "(210) 343-7800",
  },
  {
    city: "Denver",
    address: "1225 17th Street, Suite #1800",
    cityState: "Denver, CO 80202",
    phone: "(303) 328-2000",
  },
  {
    city: "Chicago — Downtown",
    address: "333 W Wacker Dr, Suite #200",
    cityState: "Chicago, IL 60606",
    phone: "(312) 327-5400",
  },
  {
    city: "Chicago — Oakbrook",
    address: "One Mid-America Plaza, Suite #200",
    cityState: "Oakbrook Terrace, IL 60181",
    phone: "(630) 570-2200",
  },
];

export default function Offices() {
  return (
    <section id="offices">
      <SectionHeader title="Office Locations" label={`${offices.length} Offices`} />

      <div className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mb-14"
          >
            <h2
              className="font-black text-[#0e1a34] uppercase"
              style={{
                fontSize: "clamp(2rem, 3.4vw, 3rem)",
                lineHeight: 0.98,
                letterSpacing: "-0.035em",
              }}
            >
              Find us nearby
            </h2>
            <p className="mt-5 text-[#0b0b0f] text-[16px] leading-[1.7] tracking-[-0.005em] max-w-[58ch]">
              Local offices across the central U.S. — with the full Matthews&trade;
              platform of 30+ offices nationwide behind every transaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {offices.map((o, i) => (
              <motion.div
                key={o.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
                className="bg-[#fafafa] ring-1 ring-black/5 rounded-2xl p-7 card-hover-lift"
              >
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-[#0e1a34] font-bold text-[19px] tracking-[-0.012em]">
                    {o.city}
                  </h3>
                  {o.hq && (
                    <span className="inline-flex items-center rounded-full bg-[#0e1a34] text-white px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.16em]">
                      HQ
                    </span>
                  )}
                </div>

                <div className="space-y-3">
                  <p className="flex items-start gap-3 text-[#6e6e73] text-[14px] leading-relaxed">
                    <MapPin className="h-4 w-4 shrink-0 mt-[3px] text-[#9aa0a8]" />
                    <span>
                      {o.address}
                      <br />
                      <span className="text-[#86868b]">{o.cityState}</span>
                    </span>
                  </p>
                  <a
                    href={`tel:${o.phone.replace(/[^0-9]/g, "")}`}
                    className="flex items-center gap-3 text-[#0e1a34] text-[14px] font-medium hover:text-[#1a56db] transition-colors"
                  >
                    <Phone className="h-4 w-4 text-[#9aa0a8]" />
                    {o.phone}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
