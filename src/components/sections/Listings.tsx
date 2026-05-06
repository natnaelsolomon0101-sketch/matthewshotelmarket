"use client";

import { motion } from "motion/react";
import { ArrowUpRight, MapPin, BedDouble } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

type Listing = {
  name: string;
  address: string;
  city: string;
  rooms: number;
  brand: string;
};

const listings: Listing[] = [
  {
    name: "Hampton Inn & Suites Aurora South Denver",
    address: "2525 S Anaheim St",
    city: "Aurora, CO 80014",
    rooms: 112,
    brand: "Hilton",
  },
  {
    name: "Holiday Inn Express & Suites Fort Worth Downtown",
    address: "1111 W Lancaster Ave",
    city: "Fort Worth, TX 76102",
    rooms: 163,
    brand: "IHG",
  },
  {
    name: "Home2 Suites by Hilton Jackson",
    address: "2704 Bob McClain Dr",
    city: "Jackson, MI 49202",
    rooms: 83,
    brand: "Hilton",
  },
  {
    name: "Fairfield Inn & Suites Goshen",
    address: "2110 Keystone Dr",
    city: "Goshen, IN 46526",
    rooms: 92,
    brand: "Marriott",
  },
  {
    name: "Fairfield Inn & Suites Warsaw",
    address: "54 Petro Dr",
    city: "Warsaw, IN 46582",
    rooms: 92,
    brand: "Marriott",
  },
  {
    name: "Courtyard by Marriott Chicago Deerfield",
    address: "800 Lake Cook Rd",
    city: "Deerfield, IL 60015",
    rooms: 131,
    brand: "Marriott",
  },
  {
    name: "Courtyard by Marriott Arlington Heights/South",
    address: "100 Algonquin Rd",
    city: "Arlington Heights, IL 60005",
    rooms: 147,
    brand: "Marriott",
  },
  {
    name: "Courtyard by Marriott Rockford",
    address: "7676 E State St",
    city: "Rockford, IL 61108",
    rooms: 147,
    brand: "Marriott",
  },
  {
    name: "Holiday Inn Express Temple Medical Center",
    address: "2609 S 39th St",
    city: "Temple, TX 76504",
    rooms: 71,
    brand: "IHG",
  },
  {
    name: "Fairfield Inn & Suites Tyler",
    address: "1945 W SW Loop 323",
    city: "Tyler, TX 75701",
    rooms: 62,
    brand: "Marriott",
  },
  {
    name: "Dallas Select Service Portfolio",
    address: "Multi-Asset Portfolio",
    city: "Dallas, TX",
    rooms: 898,
    brand: "Portfolio",
  },
];

export default function Listings() {
  return (
    <section id="listings">
      <SectionHeader title="Current Listings" label={`${listings.length} Active Offerings`} />

      <div className="bg-[#fafafa] py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {listings.map((l, i) => (
              <motion.a
                key={l.name}
                href="#contact"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.05 }}
                className="group bg-white ring-1 ring-black/5 rounded-2xl p-7 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_20px_40px_-24px_rgba(15,23,42,0.10)] card-hover-lift flex flex-col"
              >
                <div className="flex items-start justify-end gap-3 mb-5">
                  <ArrowUpRight className="h-5 w-5 text-[#9aa0a8] group-hover:text-[#1a56db] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>

                <h3 className="text-[#0e1a34] font-bold text-[18px] leading-[1.25] tracking-[-0.015em] mb-3">
                  {l.name}
                </h3>

                <p className="flex items-start gap-2 text-[#6e6e73] text-[13px] leading-snug">
                  <MapPin className="h-4 w-4 shrink-0 mt-[2px] text-[#9aa0a8]" />
                  <span>
                    {l.address}
                    <br />
                    <span className="text-[#86868b]">{l.city}</span>
                  </span>
                </p>

                <div className="mt-auto pt-6 flex items-center justify-between border-t border-black/5 mt-6">
                  <div className="flex items-center gap-1.5 text-[#0e1a34]">
                    <BedDouble className="h-4 w-4 text-[#1a56db]" />
                    <span className="text-[15px] font-bold tabular-nums">{l.rooms}</span>
                    <span className="text-[12px] text-[#6e6e73] font-medium">keys</span>
                  </div>
                  <span className="text-[12px] font-semibold text-[#1a56db] group-hover:underline">
                    Request for Offers
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
