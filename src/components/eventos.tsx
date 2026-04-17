"use client";
import { ScrollReveal } from "./scroll-reveal";

export function Eventos() {
  return (
    <section className="relative py-24 md:py-40 px-6 md:px-12 overflow-hidden bg-surface-container-low">
      {/* Background image */}
      <div className="absolute inset-0 opacity-40">
        <div
          className="w-full h-full luxury-filter"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          role="img"
          aria-label="Candlelit table in a stone courtyard"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mt-16 md:mt-32">
        <ScrollReveal>
          <p
            className="text-gold uppercase tracking-[0.4em] text-xs mb-6"
            style={{ fontFamily: "var(--font-label)" }}
          >
            ENCUENTROS EXCLUSIVOS
          </p>
        </ScrollReveal>

          <ScrollReveal stagger={1}>
            <h2
              className="text-5xl md:text-6xl lg:text-8xl mb-8 leading-none"
              style={{ fontFamily: "var(--font-heading)" }}
            >
            Celebraciones <br />
            <span className="italic text-gold">con Alma</span>
          </h2>
        </ScrollReveal>

          <ScrollReveal stagger={2}>
            <p className="text-xl text-sand mx-auto max-w-2xl mb-12">
              Espacios curados para reuniones íntimas y eventos memorables en el
              corazón de nuestra finca histórica.
            </p>
          </ScrollReveal>

        <ScrollReveal stagger={3}>
          <button
            className="border-b border-gold text-gold uppercase tracking-[0.3em] text-xs py-2 hover:text-cream hover:border-cream transition-luxury"
            style={{ fontFamily: "var(--font-label)" }}
          >
            Solicitar Información
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
}
