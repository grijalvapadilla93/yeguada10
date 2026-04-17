"use client";
import { ScrollReveal } from "./scroll-reveal";

export function Academia() {
  const disciplines = [
    { title: "Doma Clásica", desc: "Perfección en cada movimiento." },
    { title: "Alta Escuela", desc: "Tradición y maestría." },
    { title: "Clínicas", desc: "Inmersiones intensivas." },
    { title: "Pupilaje", desc: "Cuidado integral." },
  ];

  return (
    <section id="academy" className="py-24 md:py-32 px-6 md:px-12 bg-surface">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse gap-16 items-center">
        {/* Text */}
        <div className="w-full md:w-5/12">
          <ScrollReveal>
            <p
              className="text-gold uppercase tracking-[0.3em] text-xs mb-4"
              style={{ fontFamily: "var(--font-label)" }}
            >
              LA ACADEMIA
            </p>
            <h2
              className="text-5xl md:text-6xl mb-8"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Excelencia <br />
              <span className="italic text-gold">Ecuestre</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal stagger={1}>
            <div className="space-y-8 text-sand">
              <p className="text-lg">
                Formación de alto nivel basada en el respeto mutuo, la técnica
                refinada y la comprensión profunda de la biomecánica del
                caballo.
              </p>

              <div className="grid grid-cols-2 gap-8 border-t border-outline-variant/20 pt-8">
                {disciplines.map((d) => (
                  <div key={d.title}>
                    <h4
                      className="text-xl text-cream mb-2"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {d.title}
                    </h4>
                    <p className="text-sm">{d.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Image */}
        <ScrollReveal className="w-full md:w-7/12 h-[700px] img-hover-zoom">
          <div
            className="w-full h-full luxury-filter"
            style={{
              backgroundImage:
                "url('/images/Yeguada10Academia.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            role="img"
            aria-label="Horse and rider in dressage"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
