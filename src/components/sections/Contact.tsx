"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    subscribe: true,
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Hotel Market inquiry from ${form.firstName} ${form.lastName}`);
    const body = encodeURIComponent(
      `Name: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`
    );
    window.location.href = `mailto:hotelteam@matthews.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact">
      <SectionHeader title="Get In Touch" label="National Hospitality Investment Sales" />

      <div className="bg-[#fafafa] py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16">
            {/* Left — copy + direct contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5 }}
            >
              <h2
                className="font-black text-[#0e1a34] uppercase"
                style={{
                  fontSize: "clamp(2rem, 3.4vw, 3rem)",
                  lineHeight: 0.98,
                  letterSpacing: "-0.035em",
                }}
              >
                Let&apos;s talk
                <br />
                hotels.
              </h2>
              <p className="mt-5 text-[#0b0b0f] text-[16px] leading-[1.7] tracking-[-0.005em] max-w-[48ch]">
                Whether you&apos;re considering a sale, building an
                acquisition pipeline, or want our read on your market —
                we&apos;d love to hear from you.
              </p>

              <div className="mt-10 space-y-5">
                <a
                  href="mailto:hotelteam@matthews.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="shrink-0 h-11 w-11 rounded-xl bg-white ring-1 ring-black/5 flex items-center justify-center group-hover:bg-[#eef3ff] transition-colors">
                    <Mail className="h-5 w-5 text-[#1a56db]" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#6e6e73]">
                      Email
                    </p>
                    <p className="text-[15px] font-medium text-[#0e1a34] group-hover:text-[#1a56db] transition-colors">
                      hotelteam@matthews.com
                    </p>
                  </div>
                </a>

                <a href="tel:+19727555200" className="flex items-start gap-4 group">
                  <div className="shrink-0 h-11 w-11 rounded-xl bg-white ring-1 ring-black/5 flex items-center justify-center group-hover:bg-[#eef3ff] transition-colors">
                    <Phone className="h-5 w-5 text-[#1a56db]" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#6e6e73]">
                      Phone
                    </p>
                    <p className="text-[15px] font-medium text-[#0e1a34] group-hover:text-[#1a56db] transition-colors">
                      (972) 755-5200
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="shrink-0 h-11 w-11 rounded-xl bg-white ring-1 ring-black/5 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-[#1a56db]" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#6e6e73]">
                      Headquarters
                    </p>
                    <p className="text-[15px] font-medium text-[#0e1a34]">
                      5001 Spring Valley Road, Suite #100W
                      <br />
                      Dallas, TX 75244
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right — form */}
            <motion.form
              onSubmit={onSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white ring-1 ring-black/5 rounded-2xl p-8 lg:p-10 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_30px_60px_-30px_rgba(15,23,42,0.18)]"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <Field
                  label="First Name"
                  required
                  value={form.firstName}
                  onChange={(v) => setForm({ ...form, firstName: v })}
                />
                <Field
                  label="Last Name"
                  required
                  value={form.lastName}
                  onChange={(v) => setForm({ ...form, lastName: v })}
                />
                <Field
                  label="Email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                />
                <Field
                  label="Phone"
                  type="tel"
                  value={form.phone}
                  onChange={(v) => setForm({ ...form, phone: v })}
                />
              </div>

              <div className="mt-5">
                <label className="block text-[11px] font-bold uppercase tracking-[0.14em] text-[#6e6e73] mb-2">
                  Message
                </label>
                <textarea
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  placeholder="How can we help?"
                  className="w-full rounded-xl ring-1 ring-black/10 bg-white px-4 py-3 text-[15px] text-[#0b0b0f] placeholder:text-[#9aa0a8] focus:ring-2 focus:ring-[#4e8eff] focus:outline-none transition-all"
                />
              </div>

              <label className="mt-5 flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.subscribe}
                  onChange={(e) => setForm({ ...form, subscribe: e.target.checked })}
                  className="h-4 w-4 rounded border-black/20 text-[#1a56db] focus:ring-[#4e8eff]"
                />
                <span className="text-[13px] text-[#6e6e73]">
                  Subscribe to market research and new listings.
                </span>
              </label>

              <button
                type="submit"
                disabled={submitted}
                className="mt-7 w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#0e1a34] text-white px-6 py-3.5 text-[15px] font-medium hover:bg-[#162444] transition-colors shadow-[0_10px_30px_-10px_rgba(14,26,52,0.5)] disabled:opacity-60"
              >
                {submitted ? "Sent — check your email client" : "Send Message"}
                {!submitted && <Send className="h-4 w-4" />}
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  type = "text",
  required,
  value,
  onChange,
}: {
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="block text-[11px] font-bold uppercase tracking-[0.14em] text-[#6e6e73] mb-2">
        {label}
        {required && <span className="text-[#1a56db] ml-1">*</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl ring-1 ring-black/10 bg-white px-4 py-3 text-[15px] text-[#0b0b0f] placeholder:text-[#9aa0a8] focus:ring-2 focus:ring-[#4e8eff] focus:outline-none transition-all"
      />
    </div>
  );
}
