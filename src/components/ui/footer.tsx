import Link from "next/link";

const columns = [
  {
    title: "Hospitality",
    links: [
      { label: "Current Listings", href: "#listings" },
      { label: "Under Contract", href: "#under-contract" },
      { label: "Track Record", href: "#track-record" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Why Matthews", href: "#why" },
      { label: "Offices", href: "#offices" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/company/matthewscre/posts/?feedView=all" },
      { label: "matthews.com", href: "https://www.matthews.com" },
      { label: "hotelteam@matthews.com", href: "mailto:hotelteam@matthews.com" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] text-[#86868b] text-[12px] tracking-[-0.01em]">
      <div className="mx-auto max-w-[1024px] px-6 py-12 md:py-16">
        <div className="border-b border-[#d2d2d7] pb-8">
          <Link href="/" aria-label="Home" className="inline-flex items-center gap-2">
            <span className="text-[14px] font-medium text-[#1d1d1f] tracking-[-0.014em]">
              Matthews Hotel Market
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-8 mt-10">
          {columns.map((c) => (
            <div key={c.title}>
              <h4 className="text-[#1d1d1f] text-[12px] font-semibold tracking-[-0.01em] mb-3">
                {c.title}
              </h4>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-[#424245] hover:underline"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-[#d2d2d7] flex flex-wrap items-center justify-between gap-3">
          <p>
            Copyright &copy; {new Date().getFullYear()} Matthews Real Estate Investment Services. All rights reserved.
          </p>
          <p>
            5001 Spring Valley Rd, Suite 100W &middot; Dallas, TX 75244 &middot; (972) 755-5200
          </p>
        </div>
      </div>
    </footer>
  );
}
