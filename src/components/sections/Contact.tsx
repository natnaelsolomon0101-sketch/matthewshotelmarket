"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const onSubmit = (e: React.FormEvent) => {
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
    <section id="contact" className="bg-black py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[920px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="text-center mb-14 md:mb-20"
        >
          <p className="text-[#86868b] text-[15px] tracking-[-0.014em] mb-3">
            Get in touch
          </p>
          <h2
            className="text-white font-semibold"
            style={{
              fontSize: "clamp(2.5rem, 5.6vw, 5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.045em",
            }}
          >
            Talk to us.
          </h2>
          <p
            className="mx-auto mt-6 text-[#a1a1a6] max-w-[640px]"
            style={{ fontSize: "clamp(1.0625rem, 1.3vw, 1.25rem)", lineHeight: 1.45, letterSpacing: "0.011em" }}
          >
            Considering a sale, building an acquisition pipeline, or want our
            read on your market. Same form, same response time.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          onSubmit={onSubmit}
          className="bg-[#1d1d1f] rounded-[28px] p-8 md:p-12 lg:p-14"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <Field
              label="First name"
              required
              value={form.firstName}
              onChange={(v) => setForm({ ...form, firstName: v })}
            />
            <Field
              label="Last name"
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
            <label className="block text-[#86868b] text-[12px] tracking-[-0.01em] mb-2">
              Message
            </label>
            <textarea
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={5}
              placeholder="How can we help?"
              className="w-full rounded-2xl bg-[#2c2c2e] text-white text-[16px] px-5 py-4 placeholder:text-[#6e6e73] focus:bg-[#3a3a3c] focus:outline-none focus:ring-2 focus:ring-[#0071e3] transition-all border-0 tracking-[-0.014em]"
            />
          </div>

          <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
            <p className="text-[#86868b] text-[13px] tracking-[-0.01em]">
              We respond within one business day.
            </p>
            <button
              type="submit"
              disabled={submitted}
              className="inline-flex items-center gap-1 rounded-full bg-[#0071e3] hover:bg-[#0077ed] active:bg-[#006edb] px-6 py-[11px] text-[15px] font-normal text-white tracking-[-0.014em] transition-colors disabled:opacity-60"
            >
              {submitted ? "Sent" : "Send message"}
              {!submitted && <ChevronRight className="h-4 w-4" />}
            </button>
          </div>
        </motion.form>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 text-center">
          {[
            { l: "Email", v: "hotelteam@matthews.com", h: "mailto:hotelteam@matthews.com" },
            { l: "Phone", v: "(972) 755-5200", h: "tel:+19727555200" },
            { l: "Headquarters", v: "Dallas, Texas", h: undefined },
          ].map((c) => (
            <div key={c.l}>
              <p className="text-[#6e6e73] text-[12px] uppercase tracking-[0.18em] font-medium mb-2">
                {c.l}
              </p>
              {c.h ? (
                <a
                  href={c.h}
                  className="text-white text-[17px] tracking-[-0.022em] hover:text-[#2997ff] transition-colors"
                >
                  {c.v}
                </a>
              ) : (
                <p className="text-white text-[17px] tracking-[-0.022em]">{c.v}</p>
              )}
            </div>
          ))}
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
      <label className="block text-[#86868b] text-[12px] tracking-[-0.01em] mb-2">
        {label}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl bg-[#2c2c2e] text-white text-[16px] px-5 py-4 placeholder:text-[#6e6e73] focus:bg-[#3a3a3c] focus:outline-none focus:ring-2 focus:ring-[#0071e3] transition-all border-0 tracking-[-0.014em]"
      />
    </div>
  );
}
