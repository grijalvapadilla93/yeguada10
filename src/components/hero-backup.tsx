"use client";
import { useEffect, useRef } from "react";

export function Hero() {
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!videoRef.current) return;
      const scrollY = window.scrollY;
      // Video moves at 40% scroll speed → parallax
      videoRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video background — oversized, moves slower than scroll (parallax) */}
      <div
        ref={videoRef}
        className="absolute -top-[20%] left-0 w-full h-[140%] will-change-transform"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover luxury-filter"
        >
          <source src="/videos/yeguada10.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Gradient overlays — sides + top */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d0a04]/80 via-[#0d0a04]/40 to-transparent z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[#0d0a04]/30 z-[1]" />

      {/* Bottom fade — merges hero into next section smoothly */}
      <div className="absolute bottom-0 left-0 right-0 h-[40vh] bg-gradient-to-t from-[#1a150a] via-[#1a150a]/60 to-transparent z-[2]" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-12 pt-20">
        <p
          className="hero-fade-up uppercase tracking-[0.3em] text-[11px] text-gold mb-6"
          style={{ fontFamily: "var(--font-label)", animationDelay: "0.1s" }}
        >
          — Finca · Restaurante · Caballos PRE
        </p>

        <h1 className="hero-title flex flex-col mb-12">
          <span
            className="hero-fade-up text-[120px] md:text-[180px] font-bold text-cream tracking-tighter"
            style={{
              fontFamily: "var(--font-heading)",
              animationDelay: "0.2s",
            }}
          >
            YEGUADA
          </span>
          <span
            className="hero-fade-up text-6xl md:text-8xl italic text-gold -mt-8 md:-mt-12 ml-20 md:ml-32"
            style={{
              fontFamily: "var(--font-heading)",
              animationDelay: "0.4s",
            }}
          >
            Diez
          </span>
        </h1>

        <div
          className="hero-fade-up flex flex-col md:flex-row gap-6 items-start"
          style={{ animationDelay: "0.6s" }}
        >
          <button
            className="px-10 py-4 bg-gold text-[#1a1200] uppercase tracking-[0.3em] text-xs hover:bg-gold-light transition-luxury btn-press"
            style={{ fontFamily: "var(--font-label)" }}
          >
            Reservar Mesa
          </button>
          <button
            className="px-10 py-4 border border-gold/40 text-gold uppercase tracking-[0.3em] text-xs hover:border-gold transition-luxury btn-press"
            style={{ fontFamily: "var(--font-label)" }}
          >
            Ver Caballos PRE
          </button>
        </div>
      </div>

      {/* Stat boxes */}
      <div
        className="hero-fade-in absolute bottom-12 right-12 flex flex-col gap-4 z-10"
        style={{ animationDelay: "0.8s" }}
      >
        <div className="bg-surface-variant/70 backdrop-blur-xl p-6 min-w-[200px]">
          <p
            className="text-[10px] tracking-[0.2em] text-gold mb-1"
            style={{ fontFamily: "var(--font-label)" }}
          >
            RAZA
          </p>
          <p
            className="text-xl text-cream"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Pura Raza Española
          </p>
        </div>
        <div className="bg-surface-variant/70 backdrop-blur-xl p-6 min-w-[200px]">
          <p
            className="text-[10px] tracking-[0.2em] text-gold mb-1"
            style={{ fontFamily: "var(--font-label)" }}
          >
            LEGADO
          </p>
          <p
            className="text-xl text-cream"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            10 Años de Tradición
          </p>
        </div>
      </div>
    </section>
  );
}
