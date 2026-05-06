import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { title: "Listings", href: "#listings" },
  { title: "Under Contract", href: "#under-contract" },
  { title: "Track Record", href: "#track-record" },
  { title: "Offices", href: "#offices" },
  { title: "Contact", href: "#contact" },
];

const linkedInLinks = [
  { label: "Matthews CRE on LinkedIn", href: "https://www.linkedin.com/company/matthewscre/posts/?feedView=all" },
];

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <rect width="24" height="24" rx="4" fill="#0e1a34" />
      <path
        d="M8.5 10.5v5m3.5-3.5v3.5m0-3.5a2 2 0 0 1 4 0v3.5m-4-3.5V10.5m-3.5-2h.01"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] border-t border-black/5 py-16">
      <div className="mx-auto max-w-5xl px-8">
        <Link href="/" aria-label="go home" className="mx-auto flex w-fit items-center gap-2.5">
          <Image
            src="/images/matthews-logo.jpg"
            alt="Matthews"
            width={200}
            height={200}
            quality={88}
            sizes="36px"
            className="h-9 w-9 rounded-xl ring-1 ring-black/5"
          />
          <span className="text-base font-bold tracking-widest text-[#0e1a34]">
            MATTHEWS&trade; HOTEL MARKET
          </span>
        </Link>

        <nav className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="text-sm font-medium text-[#6e6e73] hover:text-[#0b0b0f] transition-colors duration-150"
            >
              {link.title}
            </a>
          ))}
        </nav>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {linkedInLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-full ring-1 ring-black/5 bg-white px-5 py-2.5 text-sm font-medium text-[#0b0b0f] shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all hover:ring-black/15 hover:shadow-[0_8px_20px_-8px_rgba(15,23,42,0.15)] hover:-translate-y-0.5"
            >
              <LinkedInIcon />
              {l.label}
            </a>
          ))}
        </div>

        <div className="mt-10 text-center text-xs text-[#6e6e73]">
          <p>
            5001 Spring Valley Road, Suite #100W &middot; Dallas, TX 75244 &middot; (972) 755-5200
          </p>
          <p className="mt-1.5">National Hospitality Investment Sales</p>
        </div>

        <p className="mt-8 text-center text-[11px] uppercase tracking-[0.14em] font-medium text-[#8e8e93]">
          &copy; {new Date().getFullYear()} Matthews Real Estate Investment Services. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
