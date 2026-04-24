"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  threshold?: number;
  direction?: "up" | "left" | "right";
}

export function ScrollReveal({
  children,
  className = "",
  stagger = 0,
  threshold = 0.15,
  direction = "up",
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
        // Force reflow so browser sees initial state before transition
        void element.offsetHeight;
        element.classList.add("revealed");
      }
      if (observer) observer.disconnect();
      clearTimeout(fallbackTimer);
    };

    const isDirectional = direction === "left" || direction === "right";

    if (!isDirectional) {
      const rect = element.getBoundingClientRect();
      const isFullyInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
      if (isFullyInViewport) {
        reveal(true);
      }
    }

    fallbackTimer = setTimeout(() => reveal(false), isDirectional ? 8000 : 4000);

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
          threshold: 0.15,
          rootMargin: "0px 0px -80px 0px",
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
  }, [stagger, threshold, direction]);

  const baseClass =
    direction === "left"
      ? "scroll-reveal-from-left"
      : direction === "right"
      ? "scroll-reveal-from-right"
      : "scroll-reveal";

  return (
    <div
      ref={ref}
      className={`${baseClass} ${className}`}
      style={{ transitionDelay: `${stagger * 0.15}s` }}
    >
      {children}
    </div>
  );
}
