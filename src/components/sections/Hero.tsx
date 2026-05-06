"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
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
      <section className="relative h-screen w-full overflow-hidden bg-[#0e1a34]">
        {/* Layered gradient backdrop — Matthews navy with electric blue accent */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(78,142,255,0.35),transparent_55%),radial-gradient(ellipse_at_20%_80%,rgba(26,86,219,0.25),transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#0a1226_0%,#0e1a34_50%,#0f111b_100%)] mix-blend-multiply" />
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end pb-16 lg:pb-24 px-8 lg:px-16">
          <div className="mx-auto max-w-[1440px] w-full">
            <div className="flex items-center gap-3.5 mb-7">
              <Image
                src="/images/matthews-logo.jpg"
                alt="Matthews"
                width={200}
                height={200}
                quality={88}
                sizes="48px"
                className="h-12 w-12 rounded-xl ring-1 ring-white/10 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.5)]"
              />
              <span className="text-[13px] font-bold tracking-[0.22em] text-white">
                MATTHEWS&trade;
              </span>
            </div>

            <p className="text-[#4e8eff] text-[12px] font-bold uppercase tracking-[0.22em] mb-5">
              Hospitality Investment Sales
            </p>

            <h1
              className="font-black text-white uppercase"
              style={{
                fontSize: "clamp(3rem, 6.4vw, 7rem)",
                lineHeight: 0.92,
                letterSpacing: "-0.04em",
              }}
            >
              Matthews
              <br />
              Hotel Market
            </h1>

            <p
              className="mt-6 text-white/85 font-light tracking-tight max-w-[680px]"
              style={{ fontSize: "clamp(1.125rem, 1.6vw, 1.5rem)", lineHeight: 1.45 }}
            >
              A national hospitality brokerage team — select-service, full-service, and resort
              hotel investment sales backed by Matthews&trade; market intelligence and a 1M+
              investor database.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="#listings"
                className="inline-flex items-center rounded-full bg-white px-7 py-3 text-[15px] font-medium text-[#0e1a34] tracking-[-0.01em] hover:bg-white/90 transition-colors duration-200 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.45)]"
              >
                View Listings
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center rounded-full ring-1 ring-white/25 bg-white/10 px-7 py-3 text-[15px] font-medium text-white tracking-[-0.01em] backdrop-blur-md hover:bg-white/20 transition-colors duration-200"
              >
                Contact the Team
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-[10px] uppercase tracking-[0.3em] hidden md:block">
          Scroll
        </div>
      </section>
    </>
  );
}

function Header() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (!raf) {
        raf = requestAnimationFrame(() => {
          setScrolled(window.scrollY > 10);
          raf = 0;
        });
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <header>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[9999] h-14 transition-all duration-300",
          scrolled
            ? "bg-[rgba(250,250,252,0.92)] backdrop-blur-xl backdrop-saturate-[1.8] border-b border-black/[0.07]"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-[1440px] h-full px-6 lg:px-10 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/images/matthews-logo.jpg"
              alt="Matthews"
              width={200}
              height={200}
              quality={88}
              sizes="32px"
              className="h-8 w-8 rounded-lg ring-1 ring-black/5"
            />
            <span
              className={cn(
                "text-[13px] font-bold tracking-[0.18em] transition-colors",
                scrolled ? "text-[#0e1a34]" : "text-white"
              )}
            >
              MATTHEWS HOTEL MARKET
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "inline-flex h-full items-center px-3 text-[13px] font-medium transition-colors",
                  scrolled
                    ? "text-[#0b0b0f] hover:text-[#1a56db]"
                    : "text-white/70 hover:text-white"
                )}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className={cn(
                "ml-2 inline-flex items-center rounded-full px-4 py-1.5 text-[13px] font-medium transition-colors",
                scrolled
                  ? "bg-[#0e1a34] text-white hover:bg-[#162444]"
                  : "bg-white text-[#0e1a34] hover:bg-white/90"
              )}
            >
              Get in touch
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden p-2" aria-label="Menu">
            {open ? (
              <X className={cn("size-5", scrolled ? "text-[#0b0b0f]" : "text-white")} />
            ) : (
              <Menu className={cn("size-5", scrolled ? "text-[#0b0b0f]" : "text-white")} />
            )}
          </button>
        </div>

        {open && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-[#e8e8ed] p-6">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm text-[#0b0b0f] hover:text-[#1a56db]"
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
