"use client";
import { useEffect } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

function MenuItem({
  name,
  description,
  price,
}: {
  name: string;
  description: string;
  price: string;
}) {
  return (
    <li className="flex flex-col group cursor-default">
      <div className="flex justify-between items-baseline mb-2 group-hover:translate-x-1 transition-transform duration-300">
        <h4
          className="font-bold text-xl text-cream group-hover:text-gold transition-colors duration-300"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {name}
        </h4>
        <div
          className="flex-grow mx-4 border-b border-outline-variant/40 group-hover:border-gold/30 relative transition-colors duration-300"
          style={{ borderBottomStyle: "dotted", top: "-6px" }}
        />
        <span
          className="text-gold tracking-widest text-md shrink-0 group-hover:drop-shadow-[0_0_8px_rgba(196,144,42,0.4)] transition-all duration-300"
          style={{ fontFamily: "var(--font-label)" }}
        >
          {price}
        </span>
      </div>
      <p
        className="text-sand/80 text-[1.1rem] italic pr-12 group-hover:text-sand transition-colors duration-300"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {description}
      </p>
    </li>
  );
}

function MenuCategory({
  title,
  items,
}: {
  title: string;
  items: { name: string; description: string; price: string }[];
}) {
  return (
    <ScrollReveal threshold={0.05}>
      <div className="relative">
        <h3
          className="text-2xl text-gold mb-16 text-center uppercase tracking-[0.4em] border-b border-outline-variant/20 pb-6"
          style={{ fontFamily: "var(--font-label)" }}
        >
          {title}
        </h3>
        <ul className="space-y-16">
          {items.map((item) => (
            <MenuItem key={item.name} {...item} />
          ))}
        </ul>
      </div>
    </ScrollReveal>
  );
}

export default function MenuPage() {
  // Force full reload when pressing back from this page
  useEffect(() => {
    // Push an extra state so popstate fires on first back press
    window.history.pushState(null, "", window.location.href);

    const onPopState = () => {
      window.location.replace("/");
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const paraEmpezar = [
    {
      name: "Cecina de León",
      description:
        "Carne curada de León, aceite de roble ahumado, pan crujiente tostado",
      price: "24",
    },
    {
      name: "Tartar de la Finca",
      description: "Solomillo cortado a mano, tostada de tuétano, mostaza silvestre",
      price: "28",
    },
    {
      name: "Ostra a la Brasa",
      description:
        "Sobre brasas de roble, limón de la finca, chili fermentado",
      price: "12",
    },
  ];

  const huerta = [
    {
      name: "Corazón de Alcachofa",
      description: "Carbonizada sobre brasas, emulsión de jamón ibérico, yolk curado",
      price: "18",
    },
    {
      name: "Tomate de Temporada",
      description: "Cultivado en la finca, sal ahumada, queso crudo de oveja",
      price: "16",
    },
    {
      name: "Puerros Asados",
      description: "Al horno de ceniza, vinagreta de avellana tostada, mantequilla morena",
      price: "15",
    },
  ];

  const carnes = [
    {
      name: 'Chuletón "Ribeye"',
      description: "Madurado 45 días, fuego de leña de roble, escamas de sal marina",
      price: "14/hg",
    },
    {
      name: "Presa Ibérica",
      description:
        "Cerdo bellota, tubérculos de temporada asados, jus reducido",
      price: "36",
    },
    {
      name: "Lechazo Asado",
      description: "Lento al horno de leña, ajo confitado, tomillo silvestre",
      price: "42",
    },
  ];

  const delMar = [
    {
      name: "Rodaballo Salvaje",
      description:
        "A la parrilla sobre sarmientos, salsa bilbaína tradicional",
      price: "45",
    },
    {
      name: "Langostinos Rojos",
      description: "Beso de fuego, sal marina gruesa",
      price: "38",
    },
  ];

  const postres = [
    {
      name: "Chocolate Ahumado",
      description: "Tarta 70% cacao, caramelo de sal ahumada, nata cruda",
      price: "14",
    },
    {
      name: "Higos al Horno de Leña",
      description: "Miel de la finca, mascarpone, tomillo",
      price: "12",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Header */}
      <header className="relative w-full h-[60vh] flex items-center justify-center bg-surface-container-low overflow-hidden pt-24 text-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "sepia(20%) brightness(40%)",
            opacity: 0.4,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a150a] to-transparent" />

        <div className="relative z-10 w-full px-8 md:px-24">
          <ScrollReveal threshold={0.05}>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl text-gold leading-none tracking-[-0.02em] mx-auto"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              El Calor del <br />
              <span className="italic text-cream">Hogar.</span>
            </h1>
            <p
              className="uppercase tracking-[0.3em] text-outline mt-8 text-sm mx-auto max-w-md"
              style={{ fontFamily: "var(--font-label)" }}
            >
              Oferta Gastronómica
            </p>
          </ScrollReveal>
        </div>
      </header>

      {/* Menu */}
      <section className="py-24 bg-surface relative">
        <div className="container mx-auto px-8 md:px-16 max-w-6xl">
          {/* Menú Degustación */}
          <ScrollReveal threshold={0.05}>
            <div className="mb-40 border border-outline-variant/30 p-12 md:p-16 relative bg-surface-container-low">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-surface px-8 border border-outline-variant/30 shadow-lg">
                <span
                  className="uppercase tracking-[0.4em] text-gold text-sm py-2 block"
                  style={{ fontFamily: "var(--font-label)" }}
                >
                  Menú Degustación
                </span>
              </div>
              <div className="text-center max-w-2xl mx-auto space-y-8 mt-4">
                <p
                  className="italic text-sand text-xl leading-relaxed"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Un recorrido por el terroir de la finca, reflejando la verdad
                  cruda de la temporada y el poder elemental del fuego.
                </p>
                <div
                  className="space-y-6 text-lg text-cream tracking-wide"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  <p>Bienvenida de la Finca</p>
                  <p>Consomé de Alcachofa Ahumada</p>
                  <p>Lubina Salvaje con Brasa y Hinojo</p>
                  <p>Chuletón Madurado 45 Días</p>
                  <p>Tarta de Higos al Horno de Leña</p>
                </div>
                <div className="pt-8 mt-12 border-t border-outline-variant/30 flex flex-col items-center gap-3">
                  <span
                    className="text-gold uppercase tracking-widest text-xl"
                    style={{ fontFamily: "var(--font-label)" }}
                  >
                    145{" "}
                    <span className="text-xs text-outline-variant ml-1">
                      EUR
                    </span>
                  </span>
                  <span
                    className="text-outline uppercase tracking-[0.2em] text-xs"
                    style={{ fontFamily: "var(--font-label)" }}
                  >
                    Maridaje de Vinos{" "}
                    <span className="text-gold ml-2">85</span>
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* A La Carta header */}
          <ScrollReveal threshold={0.05}>
            <div className="text-center mb-32">
              <h2
                className="text-4xl md:text-5xl text-cream uppercase tracking-widest"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                A La Carta
              </h2>
              <div className="w-16 h-[1px] bg-gold mx-auto mt-8" />
            </div>
          </ScrollReveal>

          {/* Categories */}
          <div className="grid grid-cols-1 gap-y-40 max-w-5xl mx-auto">
            <MenuCategory title="Para Empezar" items={paraEmpezar} />
            <MenuCategory title="De Nuestra Huerta" items={huerta} />
            <MenuCategory title="Carnes a la Brasa" items={carnes} />
            <MenuCategory title="Del Mar" items={delMar} />
            <MenuCategory title="Postres" items={postres} />
          </div>
        </div>
      </section>

      {/* Reservation */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden border-t border-outline-variant/20">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "sepia(20%) brightness(30%) blur(4px)",
            opacity: 0.2,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/90 to-surface" />

        <div className="relative z-10 w-full max-w-4xl mx-auto px-8">
          <ScrollReveal threshold={0.05}>
            <div className="text-center mb-16">
              <h2
                className="text-4xl md:text-5xl text-gold mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Reservar Mesa
              </h2>
              <div className="w-12 h-[1px] bg-gold mx-auto" />
            </div>
          </ScrollReveal>

          <ScrollReveal stagger={1} threshold={0.05}>
            <form
              className="flex flex-col md:flex-row gap-8 items-end justify-center bg-surface-container-low/50 backdrop-blur-md p-8 border border-outline-variant/30"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex-1 w-full md:w-auto border-b border-outline/50 pb-2">
                <label
                  className="block text-gold text-[10px] uppercase tracking-[0.3em] mb-3"
                  style={{ fontFamily: "var(--font-label)" }}
                >
                  Fecha y Hora
                </label>
                <input
                  type="datetime-local"
                  className="w-full bg-transparent text-cream text-lg focus:outline-none border-none p-0 focus:ring-0"
                />
              </div>
              <div className="flex-1 w-full md:w-auto border-b border-outline/50 pb-2">
                <label
                  className="block text-gold text-[10px] uppercase tracking-[0.3em] mb-3"
                  style={{ fontFamily: "var(--font-label)" }}
                >
                  Número de Personas
                </label>
                <select defaultValue="2" className="w-full bg-transparent text-cream text-lg focus:outline-none border-none p-0 focus:ring-0 appearance-none cursor-pointer">
                  <option value="1" className="bg-surface text-cream">
                    1 Persona
                  </option>
                  <option value="2" className="bg-surface text-cream">
                    2 Personas
                  </option>
                  <option value="3" className="bg-surface text-cream">
                    3 Personas
                  </option>
                  <option value="4" className="bg-surface text-cream">
                    4 Personas
                  </option>
                  <option value="5" className="bg-surface text-cream">
                    5 Personas
                  </option>
                  <option value="6+" className="bg-surface text-cream">
                    6+ Personas
                  </option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full md:w-auto bg-gold text-[#1a1200] px-10 py-4 uppercase tracking-[0.3em] text-[11px] hover:bg-gold-light transition-luxury btn-press shrink-0"
                style={{ fontFamily: "var(--font-label)" }}
              >
                Reservar Mesa
              </button>
            </form>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
