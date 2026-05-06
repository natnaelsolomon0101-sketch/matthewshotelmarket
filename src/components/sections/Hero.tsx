"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { name: "Listings", href: "#listings" },
  { name: "Under Contract", href: "#under-contract" },
  { name: "Track Record", href: "#track-record" },
  { name: "Offices", href: "#offices" },
  { name: "Contact", href: "#contact" },
];

export default function Hero() {
  return (
    <>
      <Header />
      <section className="relative min-h-screen w-full overflow-hidden bg-black flex items-center justify-center pt-12 pb-16">
        {/* Subtle product-style spotlight */}
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[120vh] w-[120vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(0,113,227,0.18),rgba(0,0,0,0)_70%)]" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>

        <div className="relative z-10 w-full text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
            className="mx-auto max-w-[1200px]"
          >
            <p className="text-[#86868b] text-[19px] md:text-[21px] font-normal tracking-[-0.022em] mb-3">
              Matthews Hotel Market
            </p>
            <h1
              className="text-white font-semibold"
              style={{
                fontSize: "clamp(3.75rem, 10vw, 9rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.05em",
              }}
            >
              Hotels.
              <br />
              <span className="bg-gradient-to-r from-[#5b9aff] via-[#a8c5ff] to-white bg-clip-text text-transparent">
                Reimagined.
              </span>
            </h1>
            <p
              className="mx-auto mt-7 text-[#a1a1a6] font-normal max-w-[720px]"
              style={{
                fontSize: "clamp(1.25rem, 1.6vw, 1.625rem)",
                lineHeight: 1.4,
                letterSpacing: "0.011em",
              }}
            >
              National hospitality investment sales. Built on $84.3B closed,
              33,500+ transactions, and a 1M+ investor relationship database.
            </p>

            <div className="mt-11 flex items-center justify-center gap-5 flex-wrap">
              <Link
                href="#listings"
                className="inline-flex items-center justify-center rounded-full bg-[#0071e3] hover:bg-[#0077ed] active:bg-[#006edb] px-[22px] py-[12px] text-[17px] font-normal text-white tracking-[-0.022em] transition-colors min-w-[140px]"
              >
                View listings
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-1 text-[17px] font-normal text-[#2997ff] hover:underline tracking-[-0.022em]"
              >
                Talk to the team
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#6e6e73] text-[11px] uppercase tracking-[0.3em] hidden md:block">
          Scroll
        </div>
      </section>
    </>
  );
}

function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <header>
      <nav className="fixed top-0 left-0 right-0 z-[9999] h-12 bg-black/72 backdrop-blur-2xl backdrop-saturate-[1.8] border-b border-white/[0.06]">
        <div className="mx-auto max-w-[1024px] h-full px-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/images/matthews-logo.jpg"
              alt="Matthews"
              width={200}
              height={200}
              quality={88}
              sizes="22px"
              className="h-[22px] w-[22px] rounded-md"
            />
            <span className="text-[14px] font-medium text-white/90 tracking-[-0.01em] hidden sm:block">
              Matthews Hotel Market
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="inline-flex h-full items-center px-3 text-[12px] font-normal text-white/80 hover:text-white tracking-[-0.01em] transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-white/80"
            aria-label="Menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 p-6">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-[17px] text-white/90 tracking-[-0.022em]"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
