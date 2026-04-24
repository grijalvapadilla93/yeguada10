"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -100, y: -100 });
  const isHoveringRef = useRef(false);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
    };

    const onEnterInteractive = () => {
      isHoveringRef.current = true;
      dot.classList.add("cursor-dot-hover");
      ring.classList.add("cursor-ring-hover");
    };

    const onLeaveInteractive = () => {
      isHoveringRef.current = false;
      dot.classList.remove("cursor-dot-hover");
      ring.classList.remove("cursor-ring-hover");
    };

    const raf = () => {
      const { x, y } = posRef.current;
      ring.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      requestAnimationFrame(raf);
    };
    const rafId = requestAnimationFrame(raf);

    window.addEventListener("mousemove", onMove);

    const interactives = document.querySelectorAll(
      "a, button, [role='button'], input, textarea, label, .img-hover-zoom"
    );
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnterInteractive);
      el.addEventListener("mouseleave", onLeaveInteractive);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterInteractive);
        el.removeEventListener("mouseleave", onLeaveInteractive);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          backgroundColor: "#c4902a",
          pointerEvents: "none",
          zIndex: 99999,
          transition: "width 0.3s ease, height 0.3s ease, background-color 0.3s ease",
          willChange: "transform",
        }}
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          border: "1px solid rgba(196, 144, 42, 0.35)",
          pointerEvents: "none",
          zIndex: 99998,
          transition: "width 0.4s ease, height 0.4s ease, border-color 0.4s ease",
          willChange: "transform",
        }}
      />
    </>
  );
}
