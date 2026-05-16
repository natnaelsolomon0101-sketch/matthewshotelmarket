"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Search, MapPin, Phone, Building2, FileText, ChevronRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  "Hotels",
  "Listings",
  "Under Contract",
  "Track Record",
  "Team",
  "Offices",
  "Contact",
];

const categories: { label: string; href: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { label: "Hotels", href: "#listings", icon: Building2 },
  { label: "Listings", href: "#listings", icon: FileText },
  { label: "In Escrow", href: "#under-contract", icon: FileText },
  { label: "Track Record", href: "#track-record", icon: Building2 },
  { label: "Offices", href: "#offices", icon: MapPin },
  { label: "Research", href: "#why", icon: FileText },
  { label: "Contact", href: "#contact", icon: Phone },
];

export default function Hero() {
  return (
    <>
      <Header />

      {/* Top bar — split headline + help CTAs */}
      <section className="bg-[#f5f5f7] pt-20 md:pt-24 pb-10">
        <div className="mx-auto max-w-[1024px] px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            className="flex items-start justify-between gap-8 flex-col md:flex-row"
          >
            <h1
              className="font-semibold max-w-[820px]"
              style={{
                fontSize: "clamp(2rem, 4.4vw, 3.5rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.04em",
              }}
            >
              <span className="text-[#1d1d1f]">Hotel Market.</span>{" "}
              <span className="text-[#86868b]">
                The team that&apos;s sold over 670 hotels.
              </span>
            </h1>

            <div className="flex flex-col gap-3 shrink-0">
              <a
                href="#contact"
                className="group flex items-center gap-3 text-[14px] font-normal text-[#1d1d1f]"
              >
                <span className="h-9 w-9 rounded-full bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center group-hover:bg-[#0071e3]/15 transition-colors">
                  <Search className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-semibold">Need a buyer or seller?</p>
                  <p className="text-[#0071e3] hover:underline tracking-[-0.014em]">
                    Talk to a specialist
                  </p>
                </div>
              </a>
              <a
                href="#offices"
                className="group flex items-center gap-3 text-[14px] font-normal text-[#1d1d1f]"
              >
                <span className="h-9 w-9 rounded-full bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center group-hover:bg-[#0071e3]/15 transition-colors">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-semibold">Visit a Matthews office</p>
                  <p className="text-[#0071e3] hover:underline tracking-[-0.014em]">
                    Find one near you
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Category tile row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.32, 0.72, 0, 1] }}
            className="mt-12 md:mt-16 -mx-6 overflow-x-auto"
          >
            <div className="flex gap-3 md:gap-4 px-6 min-w-max md:justify-center">
              {categories.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="group flex flex-col items-center gap-3 w-20 md:w-[110px] shrink-0"
                >
                  <span className="h-[72px] w-[72px] md:h-[88px] md:w-[88px] rounded-full bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_-8px_rgba(0,0,0,0.08)] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <c.icon className="h-7 w-7 md:h-8 md:w-8 text-[#1d1d1f]" />
                  </span>
                  <span className="text-[12px] md:text-[13px] text-[#1d1d1f] tracking-[-0.01em] text-center font-normal">
                    {c.label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <header>
      <nav className="fixed top-0 left-0 right-0 z-[9999] h-11 bg-black/72 backdrop-blur-2xl backdrop-saturate-[1.8] border-b border-white/[0.06]">
        <div className="mx-auto max-w-[1024px] h-full px-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/images/matthews-logo.jpg"
              alt="Matthews"
              width={200}
              height={200}
              quality={88}
              sizes="20px"
              className="h-[20px] w-[20px] rounded-md"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="inline-flex h-full items-center px-3 text-[12px] font-normal text-white/80 hover:text-white tracking-[-0.01em] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className={cn(
                "hidden lg:inline-flex items-center text-[12px] text-white/80 hover:text-white"
              )}
              aria-label="Contact"
            >
              <Search className="h-4 w-4" />
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 text-white/80"
              aria-label="Menu"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 p-6">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setOpen(false)}
                className="block py-3 text-[17px] text-white/90 tracking-[-0.022em]"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

/* helper: section header in Apple Store style — bold lead, lighter continuation */
export function StoreHeader({ lead, follow, action }: { lead: string; follow: string; action?: { label: string; href: string } }) {
  return (
    <div className="flex items-end justify-between gap-6 mb-7 md:mb-9 flex-wrap">
      <h2
        className="font-semibold flex-1 min-w-0"
        style={{ fontSize: "clamp(1.5rem, 2.6vw, 2rem)", lineHeight: 1.15, letterSpacing: "-0.025em" }}
      >
        <span className="text-[#1d1d1f]">{lead}</span>{" "}
        <span className="text-[#86868b]">{follow}</span>
      </h2>
      {action && (
        <a
          href={action.href}
          className="inline-flex items-center gap-1 text-[#0071e3] text-[15px] tracking-[-0.014em] hover:underline shrink-0"
        >
          {action.label}
          <ChevronRight className="h-4 w-4" />
        </a>
      )}
    </div>
  );
}
