"use client";
import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (e: React.MouseEvent, href: string) => {
    setOpen(false);
    if (href.startsWith("#")) return;
    e.preventDefault();
    window.location.assign(href);
  };

  const links = [
    { label: "SEMENTALES", href: "#stallions" },
    { label: "ACADEMIA", href: "#academy" },
    { label: "MENÚ", href: "/menu" },
    { label: "FINCA", href: "#restaurant" },
    { label: "CONTACTO", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-luxury ${
          scrolled
            ? "bg-[#16130b]/90 backdrop-blur-xl shadow-lg shadow-black/20"
            : "bg-transparent backdrop-blur-xl"
        }`}
      >
        <nav className="flex justify-between items-center w-full px-6 md:px-12 py-6 md:py-8 mx-auto">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.location.assign("/");
            }}
            className="hover:opacity-80 transition-luxury"
          >
            <img
              src="/images/LogoYeguada10.png"
              alt="YEGUADA10"
              className="h-7 md:h-8 w-auto"
            />
          </a>

          <div className="hidden md:flex gap-12">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="uppercase tracking-[0.3em] text-xs text-cream/60 hover:text-cream hover:tracking-[0.35em] transition-all duration-300"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              className="hidden md:block uppercase tracking-[0.3em] text-xs text-gold hover:text-cream transition-luxury btn-press"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              RESERVAR
            </button>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-none p-2 -mr-2"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              <span
                className={`block w-6 h-[1.5px] bg-gold transition-all duration-300 ${
                  open ? "rotate-45 translate-y-[5px]" : ""
                }`}
              />
              <span
                className={`block w-6 h-[1.5px] bg-gold transition-all duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-[1.5px] bg-gold transition-all duration-300 ${
                  open ? "-rotate-45 -translate-y-[5px]" : ""
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#0d0a04]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {links.map((item, i) => (
          <a
            key={item.label}
            href={item.href}
            onClick={(e) => handleNav(e, item.href)}
            className="text-3xl font-light tracking-tight text-cream hover:text-gold transition-colors duration-300"
            style={{
              fontFamily: "var(--font-heading)",
              transform: open ? "translateY(0)" : "translateY(20px)",
              opacity: open ? 1 : 0,
              transition: `all 0.4s cubic-bezier(0.22, 1, 0.36, 1) ${i * 80}ms`,
            }}
          >
            {item.label}
          </a>
        ))}
        <button
          onClick={() => setOpen(false)}
          className="mt-8 px-10 py-4 bg-gold text-[#1a1200] uppercase tracking-[0.3em] text-xs btn-press"
          style={{ fontFamily: "var(--font-label)" }}
        >
          RESERVAR
        </button>
      </div>
    </>
  );
}
