"use client";
import { useEffect, useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  stagger?: 1 | 2 | 3 | 4 | 5;
  threshold?: number;
}

export function ScrollReveal({
  children,
  className = "",
  stagger,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.classList.remove("revealed");

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        el.classList.add("revealed");
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Check immediately in case element is already in view
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const staggerClass = stagger ? `stagger-${stagger}` : "";

  return (
    <div ref={ref} className={`scroll-reveal ${staggerClass} ${className}`}>
      {children}
    </div>
  );
}
