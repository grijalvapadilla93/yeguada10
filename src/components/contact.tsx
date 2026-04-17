"use client";
import { ScrollReveal } from "./scroll-reveal";
import { Icon } from "./icon";

export function Contact() {
  return (
    <section id="contact" className="grid md:grid-cols-2 bg-surface">
      {/* Form */}
      <div className="p-8 md:p-16 lg:p-32 border-b md:border-b-0 md:border-r border-outline-variant/15 flex flex-col justify-center">
        <ScrollReveal>
          <h2
            className="text-5xl md:text-6xl mb-12"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Cómo <br />
            <span className="italic text-gold">Llegar</span>
          </h2>
        </ScrollReveal>

        <form className="space-y-10 w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
          <ScrollReveal stagger={1}>
            <div className="group">
              <label
                className="uppercase tracking-[0.3em] text-[10px] text-outline mb-2 block"
                style={{ fontFamily: "var(--font-label)" }}
              >
                NOMBRE Y APELLIDO
              </label>
              <input
                type="text"
                placeholder="Su nombre"
                className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant/40 focus:border-gold focus:ring-0 text-cream px-0 py-3 transition-luxury text-lg"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal stagger={2}>
            <div className="group">
              <label
                className="uppercase tracking-[0.3em] text-[10px] text-outline mb-2 block"
                style={{ fontFamily: "var(--font-label)" }}
              >
                CORREO ELECTRÓNICO
              </label>
              <input
                type="email"
                placeholder="correo@ejemplo.com"
                className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant/40 focus:border-gold focus:ring-0 text-cream px-0 py-3 transition-luxury text-lg"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal stagger={3}>
            <div className="group">
              <label
                className="uppercase tracking-[0.3em] text-[10px] text-outline mb-2 block"
                style={{ fontFamily: "var(--font-label)" }}
              >
                MENSAJE
              </label>
              <textarea
                placeholder="¿En qué podemos ayudarle?"
                rows={4}
                className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant/40 focus:border-gold focus:ring-0 text-cream px-0 py-3 transition-luxury text-lg resize-none"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal stagger={4}>
            <button
              type="submit"
              className="w-full py-5 bg-gold text-[#1a1200] uppercase tracking-[0.4em] text-xs hover:bg-gold-light transition-luxury mt-4 btn-press btn-shimmer"
              style={{ fontFamily: "var(--font-label)" }}
            >
              Enviar Mensaje
            </button>
          </ScrollReveal>
        </form>
      </div>

      {/* Map / Location */}
      <div className="h-[500px] md:h-auto relative bg-surface-container-low">
        {/* Map placeholder */}
        <div
          className="absolute inset-0 opacity-30 grayscale"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Location card overlay */}
        <ScrollReveal className="absolute inset-0 m-6 md:m-24 border border-outline-variant/20 flex flex-col items-center justify-center bg-[#0d0a04]/50 backdrop-blur-sm z-10 p-6 md:p-8 text-center">
          <Icon name="explore" className="text-gold text-5xl mb-6 icon-pulse cursor-default" />
          <h3
            className="text-3xl text-cream mb-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Finca Yeguada10
          </h3>
          <p
            className="uppercase tracking-[0.2em] text-xs text-sand leading-loose"
            style={{ fontFamily: "var(--font-label)" }}
          >
            Km 12.5 Carretera Vieja
            <br />
            Sevilla, España
            <br />
            CP 41000
          </p>
          <button
            className="mt-8 border-b border-gold text-gold uppercase tracking-[0.2em] text-[10px] pb-1 hover:text-cream transition-luxury"
            style={{ fontFamily: "var(--font-label)" }}
          >
            Abrir en Maps
          </button>

          {/* WhatsApp button */}
          <a
            href="https://wa.me/34600000000?text=Hola%2C%20me%20gustaría%20hacer%20una%20reserva%20en%20Yeguada10"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-3 bg-[#25D366] text-white px-6 py-3 text-xs uppercase tracking-[0.2em] hover:bg-[#20BD5A] transition-luxury btn-press"
            style={{ fontFamily: "var(--font-label)" }}
          >
            <Icon name="chat" className="text-lg" />
            Reservar por WhatsApp
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
