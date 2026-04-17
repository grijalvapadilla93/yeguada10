"use client";
import Link from "next/link";
import { ScrollReveal } from "./scroll-reveal";

export function Restaurante() {
  const categories = [
    {
      title: "Entradas",
      desc: "Quesos artesanos, curados y productos de la huerta.",
    },
    {
      title: "Carnes a la Leña",
      desc: "Cortes nobles madurados, asados al fuego vivo.",
    },
    {
      title: "Vinos",
      desc: "Bodega seleccionada con añadas históricas.",
    },
    {
      title: "Postres",
      desc: "Dulzura tradicional con toques contemporáneos.",
    },
  ];

  return (
    <section
      id="restaurant"
      className="relative py-24 md:py-32 px-6 md:px-12 bg-surface"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Left — text + menu */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <ScrollReveal threshold={0.05}>
              <p
                className="uppercase tracking-[0.3em] text-xs text-gold mb-4"
                style={{ fontFamily: "var(--font-label)" }}
              >
                EXPERIENCIA CULINARIA
              </p>
              <h2
                className="text-5xl md:text-7xl lg:text-[120px] leading-[0.9] mb-8"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Restaurante
              </h2>
            </ScrollReveal>

            <ScrollReveal stagger={1} threshold={0.05}>
              <p className="text-sand leading-relaxed text-lg mb-12 max-w-lg">
                Tributo al producto de temporada, donde el humo y el reposo
                dictan el sabor de cada plato. Una experiencia culinaria
                arraigada en la tierra.
              </p>
            </ScrollReveal>

            {/* Menu categories grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 mb-12">
              {categories.map((cat, i) => (
                <ScrollReveal key={cat.title} stagger={((i + 1) as 1) || 2} threshold={0.05}>
                  <div className="border-t border-outline-variant/30 pt-4">
                    <h3
                      className="text-2xl text-gold mb-2"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {cat.title}
                    </h3>
                    <p
                      className="text-sm text-sand"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {cat.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal stagger={3} threshold={0.05}>
              <Link
                href="/menu"
                className="border border-gold px-8 py-3 text-gold uppercase tracking-[0.3em] text-xs hover:bg-gold hover:text-[#1a1200] transition-luxury self-start btn-press inline-block"
                style={{ fontFamily: "var(--font-label)" }}
              >
                Ver Menú Completo
              </Link>
            </ScrollReveal>
          </div>

          {/* Right — image */}
          <ScrollReveal className="w-full md:w-1/2 h-[600px] img-hover-zoom" threshold={0.05}>
            <div
              className="w-full h-full luxury-filter"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1544025162-d76694265947?w=900&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              role="img"
              aria-label="Rustic platter on wooden table"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
