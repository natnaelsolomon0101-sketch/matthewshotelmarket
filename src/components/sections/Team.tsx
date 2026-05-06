"use client";

import { motion } from "motion/react";
import { SectionHeader } from "@/components/ui/section-header";

type Member = {
  name: string;
  title: string;
  initials: string;
};

const team: Member[] = [
  { name: "Allan Miller", title: "Senior Vice President & Senior Director", initials: "AM" },
  { name: "Chris Gomes", title: "Senior Vice President & Senior Director", initials: "CG" },
  { name: "Skyler Cooper", title: "Vice President", initials: "SC" },
  { name: "Ebrahim Valliani", title: "Associate", initials: "EV" },
  { name: "Michael Klar", title: "Vice President", initials: "MK" },
  { name: "Alexander Curry", title: "Associate", initials: "AC" },
  { name: "Hussain Shaik", title: "Associate", initials: "HS" },
  { name: "Christian Apt", title: "Associate", initials: "CA" },
  { name: "Sam Gardner", title: "Associate", initials: "SG" },
  { name: "Huberth Marak", title: "Senior Analyst", initials: "HM" },
  { name: "Rajan Patel", title: "Analyst", initials: "RP" },
  { name: "Kristen Blackshaw", title: "Director of Operations", initials: "KB" },
  { name: "Christina Ligi", title: "Marketing Coordinator", initials: "CL" },
  { name: "Luca DeCamillo", title: "Analyst", initials: "LD" },
  { name: "Pete Fehlman", title: "Senior Advisor", initials: "PF" },
];

const gradients = [
  "from-[#0e1a34] to-[#1a56db]",
  "from-[#152249] to-[#4e8eff]",
  "from-[#0a1226] to-[#3a6ed8]",
  "from-[#0e1a34] to-[#5b9aff]",
  "from-[#162444] to-[#1a56db]",
];

export default function Team() {
  return (
    <section id="team">
      <SectionHeader title="Our Team" label={`${team.length} Hospitality Professionals`} />

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
              The hotel team
            </h2>
            <p className="mt-5 text-[#0b0b0f] text-[16px] leading-[1.7] tracking-[-0.005em] max-w-[58ch]">
              Senior advisors, analysts, and operations — purpose-built to
              execute hospitality transactions from underwriting to closing.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {team.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: (i % 5) * 0.04 }}
                className="bg-white ring-1 ring-black/5 rounded-2xl p-5 shadow-[0_1px_2px_rgba(15,23,42,0.03)] card-hover-lift"
              >
                <div
                  className={`aspect-square w-full rounded-xl bg-gradient-to-br ${
                    gradients[i % gradients.length]
                  } flex items-center justify-center mb-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]`}
                >
                  <span className="text-white font-black text-2xl tracking-tight">
                    {m.initials}
                  </span>
                </div>
                <p className="text-[#0e1a34] font-bold text-[14.5px] leading-tight tracking-[-0.012em]">
                  {m.name}
                </p>
                <p className="mt-1 text-[#6e6e73] text-[11.5px] leading-snug font-medium">
                  {m.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
