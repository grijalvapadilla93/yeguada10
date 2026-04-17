"use client";
import { ScrollReveal } from "./scroll-reveal";
import { Icon } from "./icon";

export function MusicaVivo() {
  const events = [
    {
      day: "JUEVES",
      title: "Noche de Jazz",
      desc: "Trío acústico bajo las estrellas. Cócteles de autor.",
      icon: "piano",
    },
    {
      day: "VIERNES",
      title: "Fuego y Cuerda",
      desc: "Flamenco fusión con cortes a la leña en vivo.",
      icon: "local_fire_department",
    },
    {
      day: "SÁBADOS",
      title: "Raíces del Sur",
      desc: "Música criolla, parrilla encendida y vino de la casa.",
      icon: "music_note",
    },
  ];

  return (
    <section className="relative py-24 md:py-40 px-6 md:px-12 overflow-hidden bg-surface-container-low">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(80%) contrast(120%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <ScrollReveal threshold={0.05}>
            <p
              className="uppercase tracking-[0.4em] text-xs text-gold mb-6"
              style={{ fontFamily: "var(--font-label)" }}
            >
              TODA LA SEMANA
            </p>
            <h2
              className="text-5xl md:text-6xl lg:text-[100px] leading-[0.9] mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Música <br />
              <span className="italic text-gold">en Vivo</span>
            </h2>
            <p className="text-sand text-lg max-w-xl mx-auto">
              Cada noche tiene su propia identidad. Fuego, cuerda y buen
              vino acompañan una propuesta que va más allá del plato.
            </p>
          </ScrollReveal>
        </div>

        {/* Event cards — horizontal scroll on mobile, grid on desktop */}
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <ScrollReveal
              key={event.day}
              stagger={((i + 1) as 1) || 2}
              threshold={0.05}
            >
              <div className="group border border-outline-variant/20 p-10 hover:border-gold/40 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(196,144,42,0.08)] transition-all duration-500 ease-out h-full flex flex-col">
                {/* Day label */}
                <div className="flex items-center gap-4 mb-8">
                  <Icon
                    name={event.icon}
                    className="text-gold text-3xl"
                  />
                  <span
                    className="uppercase tracking-[0.3em] text-[10px] text-gold"
                    style={{ fontFamily: "var(--font-label)" }}
                  >
                    {event.day}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-3xl md:text-4xl text-cream mb-4 leading-tight"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {event.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sand text-sm leading-relaxed flex-1"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {event.desc}
                </p>

                {/* Bottom accent line */}
                <div className="mt-8 h-[1px] bg-outline-variant/20 group-hover:bg-gold/40 transition-luxury" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal threshold={0.05}>
          <div className="text-center mt-16">
            <button
              className="border-b border-gold text-gold uppercase tracking-[0.3em] text-xs py-2 hover:text-cream hover:border-cream transition-luxury"
              style={{ fontFamily: "var(--font-label)" }}
            >
              Ver Calendario Completo
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
