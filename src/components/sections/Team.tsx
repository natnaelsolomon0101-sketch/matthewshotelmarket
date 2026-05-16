"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Mail, Phone } from "lucide-react";

type Agent = {
  name: string;
  title: string;
  office: string;
  phone?: string;
  email: string;
  photo: string;
  profile: string;
};

const agents: Agent[] = [
  { name: "Mitchell Glasson", title: "First Vice President", office: "Orange County, CA", phone: "+1 (949) 432-4502", email: "mitchell.glasson@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2016/05/Mitchell-Glasson-Web-Use.jpg", profile: "https://www.matthews.com/agents/mitchell-glasson" },
  { name: "Francisco Nacorda", title: "Senior Vice President", office: "Fort Lauderdale, FL", email: "francisco.nacorda@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2026/02/Francisco-Nacorda-Web-Use.jpg", profile: "https://www.matthews.com/agents/francisco-nacorda" },
  { name: "Dustin Robinett", title: "Vice President", office: "Kansas City, MO", phone: "+1 (303) 268-8243", email: "dustin.robinett@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2025/07/Dustin-Robinett-Web-Use-1.jpg", profile: "https://www.matthews.com/agents/dustin-robinett" },
  { name: "Mabelle Perez", title: "Vice President", office: "Fort Lauderdale, FL", phone: "+1 (786) 206-9739", email: "mabelle.perez@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2025/07/Mabelle-Perez-Web-Use.jpg", profile: "https://www.matthews.com/agents/mabelle-perez" },
  { name: "David Loving", title: "Associate Market Leader", office: "Tampa, FL", phone: "+1 (813) 358-3599", email: "david.loving@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2025/07/David-Loving-Web-Use-1.jpg", profile: "https://www.matthews.com/agents/david-loving" },
  { name: "Andrew Senatore", title: "Senior Associate", office: "Phoenix, AZ", phone: "+1 (602) 946-4901", email: "andrew.senatore@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2025/07/Andrew-Senatore-Web-Use.jpg", profile: "https://www.matthews.com/agents/andrew-senatore" },
  { name: "Hunter Davis", title: "Senior Associate", office: "Phoenix, AZ", phone: "+1 (602) 946-4371", email: "hunter.davis@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2025/07/Hunter-Davis-Web-Use-1-1.jpg", profile: "https://www.matthews.com/agents/hunter-davis" },
  { name: "Nate Solomon", title: "Associate", office: "Austin, TX", phone: "+1 (682) 418-4986", email: "nate.solomon@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2026/04/Nate-Solomon-Web-Use-1.jpg", profile: "https://www.matthews.com/agents/nate-solomon" },
  { name: "Alfonso Garcia", title: "Associate", office: "Dallas, TX", phone: "+1 (214) 432-4719", email: "alfonso.garcia@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2025/07/Alfonso-Garcia-Web-Use.jpg", profile: "https://www.matthews.com/agents/alfonso-garcia" },
  { name: "Ash Singh", title: "Associate", office: "Encino, CA", phone: "+1 (818) 330-4508", email: "ash.singh@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2026/04/Ash-Singh-Web-Use.jpg", profile: "https://www.matthews.com/agents/ash-singh" },
  { name: "Chris Beavers", title: "Associate", office: "Nashville, TN", phone: "+1 (629) 262-0382", email: "chris.beavers@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2025/07/Chris-Beavers-Web-Use.png", profile: "https://www.matthews.com/agents/chris-beavers" },
  { name: "Dominic Henderson", title: "Associate", office: "Orange County, CA", phone: "+1 (310) 561-8254", email: "dominic.henderson@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2025/07/Dominic-Henderson-Web-Use.jpg", profile: "https://www.matthews.com/agents/dominic-henderson" },
  { name: "Elias Zakas", title: "Associate", office: "Phoenix, AZ", phone: "+1 (602) 715-2609", email: "elias.zakas@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2025/07/Elias-Zakas-Web-Use.jpg", profile: "https://www.matthews.com/agents/elias-zakas" },
  { name: "Jake Senatore", title: "Associate", office: "Phoenix, AZ", phone: "+1 (602) 922-3471", email: "jake.senatore@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2025/07/Jake-Senatore-Web-Use.jpg", profile: "https://www.matthews.com/agents/jake-senatore" },
  { name: "Julio Leyva", title: "Associate", office: "Fort Lauderdale, FL", phone: "+1 (754) 288-1327", email: "julio.leyva@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2026/03/Julio-Leyva-Web-Use.jpg", profile: "https://www.matthews.com/agents/julio-leyva" },
  { name: "Luke Whittaker", title: "Associate", office: "Orange County, CA", phone: "+1 (317) 493-0055", email: "luke.whittaker@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2025/07/Luke-Whittaker-Web-Use-2.jpg", profile: "https://www.matthews.com/agents/luke-whittaker" },
  { name: "Ritik Patel", title: "Associate", office: "Cleveland, OH", phone: "+1 (216) 367-7832", email: "ritik.patel@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2025/09/Ritik-Patel-Web-Use.jpg", profile: "https://www.matthews.com/agents/ritik-patel" },
  { name: "Ryan Kawai Sanchez", title: "Associate", office: "Orange County, CA", phone: "+1 (949) 287-5854", email: "ryan.sanchez@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2025/07/Ryan-Sanchez-Use-1.jpg", profile: "https://www.matthews.com/agents/ryan-kawai-sanchez" },
  { name: "Youssef Alkalabani", title: "Associate", office: "Nashville, TN", phone: "+1 (615) 234-5749", email: "youssef.alkalabani@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2025/09/Youssef-Alkalabani-Web-Use.jpg", profile: "https://www.matthews.com/agents/youssef-alkalabani" },
  { name: "Jordan Beletz", title: "Sales Analyst", office: "Phoenix, AZ", phone: "+1 (520) 308-6079", email: "jordan.beletz@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2026/01/Jordan-Beletz-Web-Use.jpg", profile: "https://www.matthews.com/agents/jordan-beletz" },
];

export default function Team() {
  return (
    <section id="team" className="bg-white py-16 md:py-20 lg:py-24">
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
            <span className="text-[#1d1d1f]">Meet the team.</span>{" "}
            <span className="text-[#86868b]">
              Matthews hospitality agents nationwide.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {agents.map((a, i) => {
            const telHref = a.phone
              ? `tel:${a.phone.replace(/[^0-9+]/g, "")}`
              : undefined;
            return (
              <motion.article
                key={a.email}
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
                <a
                  href={a.profile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative aspect-[4/5] overflow-hidden bg-[#f5f5f7]"
                >
                  <div className="absolute inset-0 group-hover:scale-[1.04] transition-transform duration-700">
                    <Image
                      src={a.photo}
                      alt={a.name}
                      fill
                      quality={92}
                      sizes="(max-width:768px) 50vw, 240px"
                      className="object-cover"
                    />
                  </div>
                </a>
                <div className="px-5 py-4">
                  <h3 className="text-[#1d1d1f] font-medium text-[15px] tracking-[-0.014em] leading-tight">
                    {a.name}
                  </h3>
                  <p className="mt-1 text-[#86868b] text-[12.5px] tracking-[-0.01em]">
                    {a.title}
                  </p>
                  <p className="mt-0.5 text-[#86868b] text-[12.5px] tracking-[-0.01em]">
                    {a.office}
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <a
                      href={`mailto:${a.email}`}
                      aria-label={`Email ${a.name}`}
                      className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#0071e3]/10 text-[#0071e3] hover:bg-[#0071e3]/15 transition-colors"
                    >
                      <Mail className="h-3.5 w-3.5" />
                    </a>
                    {telHref && (
                      <a
                        href={telHref}
                        aria-label={`Call ${a.name}`}
                        className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#0071e3]/10 text-[#0071e3] hover:bg-[#0071e3]/15 transition-colors"
                      >
                        <Phone className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
