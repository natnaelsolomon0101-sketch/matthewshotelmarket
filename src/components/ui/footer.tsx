import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#f5f5f7]">
      <div className="max-w-[1024px] mx-auto px-6 py-10 md:py-14">
        {/* Top: logo line */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/matthews-logo.jpg"
            alt="Matthews"
            width={200}
            height={200}
            quality={88}
            sizes="20px"
            className="h-5 w-5 rounded-md"
          />
          <span className="text-[14px] font-medium text-[#1d1d1f]">
            Matthews Hotel Market
          </span>
        </div>

        <div className="border-t border-[#d2d2d7] mt-6" />

        {/* Sitemap */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 mt-8">
          {/* Hospitality */}
          <div>
            <h3 className="text-[#1d1d1f] text-[12px] font-semibold tracking-[-0.01em] mb-3">
              Hospitality
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="#listings"
                  className="text-[#424245] text-[12px] tracking-[-0.01em] hover:underline"
                >
                  Listings
                </Link>
              </li>
              <li>
                <Link
                  href="#under-contract"
                  className="text-[#424245] text-[12px] tracking-[-0.01em] hover:underline"
                >
                  Under Contract
                </Link>
              </li>
              <li>
                <Link
                  href="#track-record"
                  className="text-[#424245] text-[12px] tracking-[-0.01em] hover:underline"
                >
                  Track Record
                </Link>
              </li>
              <li>
                <Link
                  href="#why"
                  className="text-[#424245] text-[12px] tracking-[-0.01em] hover:underline"
                >
                  Research
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[#1d1d1f] text-[12px] font-semibold tracking-[-0.01em] mb-3">
              Company
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="#why"
                  className="text-[#424245] text-[12px] tracking-[-0.01em] hover:underline"
                >
                  Why Matthews
                </Link>
              </li>
              <li>
                <Link
                  href="#offices"
                  className="text-[#424245] text-[12px] tracking-[-0.01em] hover:underline"
                >
                  Offices
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-[#424245] text-[12px] tracking-[-0.01em] hover:underline"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://www.matthews.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#424245] text-[12px] tracking-[-0.01em] hover:underline"
                >
                  Matthews.com
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-[#1d1d1f] text-[12px] font-semibold tracking-[-0.01em] mb-3">
              Connect
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://www.linkedin.com/company/matthewscre/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#424245] text-[12px] tracking-[-0.01em] hover:underline"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:hotelteam@matthews.com"
                  className="text-[#424245] text-[12px] tracking-[-0.01em] hover:underline"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="tel:+19727555200"
                  className="text-[#424245] text-[12px] tracking-[-0.01em] hover:underline"
                >
                  Phone
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[#1d1d1f] text-[12px] font-semibold tracking-[-0.01em] mb-3">
              Legal
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="#"
                  className="text-[#424245] text-[12px] tracking-[-0.01em] hover:underline"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#424245] text-[12px] tracking-[-0.01em] hover:underline"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#424245] text-[12px] tracking-[-0.01em] hover:underline"
                >
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link
                  href="/IABS.pdf"
                  className="text-[#424245] text-[12px] tracking-[-0.01em] hover:underline"
                >
                  IABS
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom legal */}
        <div className="mt-10 pt-6 border-t border-[#d2d2d7]">
          <p className="text-[#86868b] text-[12px] tracking-[-0.01em]">
            5001 Spring Valley Rd, Suite 100W · Dallas, TX 75244 · (972) 755-5200
          </p>
          <p className="mt-2 text-[#86868b] text-[11px] tracking-[-0.005em] leading-relaxed">
            Copyright © {year} Matthews Real Estate Investment Services, LLC.
            All rights reserved. Matthews™ is a trademark of Matthews REIS. The
            information herein has been obtained from sources we believe to be
            reliable but is not guaranteed.
          </p>
        </div>
      </div>
    </footer>
  );
}
