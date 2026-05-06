"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "motion/react";

function parseValue(str: string): { prefix: string; number: number; suffix: string; decimals: number } {
  const match = str.match(/^([^0-9]*)([0-9,.]+)(.*)$/);
  if (!match) return { prefix: "", number: 0, suffix: str, decimals: 0 };
  const raw = match[2];
  const decimals = raw.includes(".") ? raw.split(".")[1].length : 0;
  const number = parseFloat(raw.replace(/,/g, ""));
  return { prefix: match[1], number, suffix: match[3], decimals };
}

function formatNumber(n: number, decimals: number): string {
  const parts = n.toFixed(decimals).split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

export function Counter({ value, className = "" }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -20px 0px" });
  const parsed = useRef(parseValue(value));
  const [display, setDisplay] = useState(() => {
    const { prefix, suffix, decimals } = parseValue(value);
    return `${prefix}${formatNumber(0, decimals)}${suffix}`;
  });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!isInView) return;
    const { prefix, number, suffix, decimals } = parsed.current;
    const duration = 1800;
    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * number;
      setDisplay(`${prefix}${formatNumber(current, decimals)}${suffix}`);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isInView]);

  return <span ref={ref} className={className}>{display}</span>;
}
