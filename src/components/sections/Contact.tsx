"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, ChevronRight } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Hotel Market inquiry from ${form.firstName} ${form.lastName}`
    );
    const body = encodeURIComponent(
      `Name: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`
    );
    window.location.href = `mailto:hotelteam@matthews.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-[1024px] mx-auto px-6">
        <h2
          className="font-semibold mb-9"
          style={{
            fontSize: "clamp(1.5rem, 2.6vw, 2rem)",
            lineHeight: 1.15,
            letterSpacing: "-0.025em",
          }}
        >
          <span className="text-[#1d1d1f]">Get in touch.</span>{" "}
          <span className="text-[#86868b]">
            We respond within one business day.
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-14">
          {/* LEFT: contact info */}
          <div className="space-y-7">
            <div className="flex items-start gap-4">
              <div className="h-9 w-9 rounded-full bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center shrink-0">
                <Mail className="h-4 w-4" />
              </div>
              <div>
                <div className="uppercase tracking-[0.18em] text-[#86868b] text-[10px] font-medium mb-1">
                  Email
                </div>
                <a
                  href="mailto:hotelteam@matthews.com"
                  className="text-[#0071e3] hover:underline text-[15px] tracking-[-0.014em]"
                >
                  hotelteam@matthews.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-9 w-9 rounded-full bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center shrink-0">
                <Phone className="h-4 w-4" />
              </div>
              <div>
                <div className="uppercase tracking-[0.18em] text-[#86868b] text-[10px] font-medium mb-1">
                  Phone
                </div>
                <a
                  href="tel:+19727555200"
                  className="text-[#0071e3] hover:underline text-[15px] tracking-[-0.014em]"
                >
                  (972) 755-5200
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-9 w-9 rounded-full bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center shrink-0">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <div className="uppercase tracking-[0.18em] text-[#86868b] text-[10px] font-medium mb-1">
                  Headquarters
                </div>
                <div className="text-[#1d1d1f] text-[15px] tracking-[-0.014em]">
                  5001 Spring Valley Rd, Suite 100W. Dallas, TX 75244.
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: form card */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="bg-white rounded-[18px] p-6 md:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_-8px_rgba(0,0,0,0.08)]"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="text-[#86868b] text-[12px] tracking-[-0.01em] mb-2 block"
                >
                  First name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={form.firstName}
                  onChange={handleChange}
                  className="w-full rounded-2xl bg-[#f5f5f7] text-[#1d1d1f] text-[16px] px-4 py-3.5 placeholder:text-[#86868b] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0071e3] transition-all border-0 tracking-[-0.014em]"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="text-[#86868b] text-[12px] tracking-[-0.01em] mb-2 block"
                >
                  Last name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={form.lastName}
                  onChange={handleChange}
                  className="w-full rounded-2xl bg-[#f5f5f7] text-[#1d1d1f] text-[16px] px-4 py-3.5 placeholder:text-[#86868b] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0071e3] transition-all border-0 tracking-[-0.014em]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="email"
                  className="text-[#86868b] text-[12px] tracking-[-0.01em] mb-2 block"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-2xl bg-[#f5f5f7] text-[#1d1d1f] text-[16px] px-4 py-3.5 placeholder:text-[#86868b] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0071e3] transition-all border-0 tracking-[-0.014em]"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="text-[#86868b] text-[12px] tracking-[-0.01em] mb-2 block"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full rounded-2xl bg-[#f5f5f7] text-[#1d1d1f] text-[16px] px-4 py-3.5 placeholder:text-[#86868b] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0071e3] transition-all border-0 tracking-[-0.014em]"
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-[#86868b] text-[12px] tracking-[-0.01em] mb-2 block"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-2xl bg-[#f5f5f7] text-[#1d1d1f] text-[16px] px-4 py-3.5 placeholder:text-[#86868b] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0071e3] transition-all border-0 tracking-[-0.014em] resize-none"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={submitted}
                className="inline-flex items-center gap-1 rounded-full bg-[#0071e3] hover:bg-[#0077ed] active:bg-[#006edb] px-6 py-2.5 text-[14px] font-normal text-white tracking-[-0.014em] transition-colors disabled:opacity-60"
              >
                {submitted ? "Sent" : "Send message"}
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
