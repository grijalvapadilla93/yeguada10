"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  threshold?: number;
}

export function ScrollReveal({
  children,
  className = "",
  stagger = 0,
  threshold = 0.15,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!document.documentElement.classList.contains("js-enabled")) {
      document.documentElement.classList.add("js-enabled");
    }

    const element = ref.current;
    if (!element) return;

    let observer: IntersectionObserver | null = null;
    let fallbackTimer: ReturnType<typeof setTimeout>;

    const reveal = (immediate = false) => {
      if (!element) return;
      if (immediate) {
        element.style.transition = "none";
        element.classList.add("revealed");
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            element.style.transition = "";
          });
        });
      } else {
        element.classList.add("revealed");
      }
      if (observer) observer.disconnect();
      clearTimeout(fallbackTimer);
    };

    const rect = element.getBoundingClientRect();
    const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

    if (isInViewport) {
      reveal(true);
    }

    fallbackTimer = setTimeout(() => reveal(false), 2000 + stagger * 100);

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => reveal(false), stagger * 100);
            }
          });
        },
        {
          threshold: 0.05,
          rootMargin: "0px 0px -40px 0px",
        }
      );
      observer.observe(element);
    } else {
      reveal(false);
    }

    return () => {
      if (observer) observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, [stagger, threshold]);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${className}`}
      style={{ transitionDelay: `${stagger * 0.15}s` }}
    >
      {children}
    </div>
  );
}
