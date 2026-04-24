"use client";
import { ScrollReveal } from "./scroll-reveal";
import { Icon } from "./icon";

export function Stallions() {
  return (
    <section
      id="stallions"
      className="py-24 md:py-40 px-6 md:px-12 bg-surface-container-low border-y border-outline-variant/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image — slides in from LEFT (desde la yegua) */}
          <ScrollReveal
            className="order-2 md:order-1 h-[400px] md:h-[800px] img-hover-zoom dust-container"
            direction="left"
          >
            <div
              className="w-full h-full luxury-filter"
              style={{
                backgroundImage:
                  "url('/images/VentaPreYeguada10.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              role="img"
              aria-label="Noble PRE stallion portrait"
            />
          </ScrollReveal>

          {/* Text — slides in from RIGHT */}
          <div className="order-1 md:order-2 flex flex-col justify-center">
            <ScrollReveal direction="right">
              <p
                className="text-gold uppercase tracking-[0.4em] text-[10px] mb-6 border-l border-gold pl-4"
                style={{ fontFamily: "var(--font-label)" }}
              >
                EL ARCHIVO
              </p>
              <h2
                className="text-6xl md:text-8xl mb-10 text-cream leading-none"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Linaje y <br />
                <span className="italic text-gold">Herencia</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal stagger={1} direction="right">
              <div className="space-y-6 text-sand text-lg mb-12">
                <p>
                  Nuestros ejemplares Pura Raza Española no son simplemente
                  criados; son curados. Cada caballo representa décadas de
                  selección rigurosa, buscando la nobleza de espíritu, la
                  funcionalidad atlética y la belleza racial.
                </p>
                <p>
                  Un archivo viviente de genética excepcional, disponible para
                  criadores y jinetes que exigen lo extraordinario.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal stagger={2} direction="right">
              <a
                href="#"
                className="inline-flex items-center gap-4 text-gold hover:text-cream transition-luxury group cursor-pointer"
              >
                <span
                  className="uppercase tracking-[0.3em] text-xs"
                  style={{ fontFamily: "var(--font-label)" }}
                >
                  Consultar Ejemplares
                </span>
                <Icon
                  name="arrow_right_alt"
                  className="transform group-hover:translate-x-2 transition-transform"
                />
              </a>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
