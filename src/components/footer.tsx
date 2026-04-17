"use client";

export function Footer() {
  const links = ["UBICACIÓN", "PRIVACIDAD", "TÉRMINOS", "ARCHIVO"];

  return (
    <footer className="bg-[#16130b] w-full border-t border-outline-variant/15">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 md:px-12 py-12 md:py-16 gap-6">
        <a href="#" className="mb-8 md:mb-0">
          <img
            src="/images/LogoYeguada10.png"
            alt="YEGUADA10"
            className="h-6 w-auto opacity-80"
          />
        </a>

        <div className="flex gap-8">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="uppercase tracking-[0.3em] text-[10px] text-outline hover:text-cream transition-luxury link-underline"
              style={{ fontFamily: "var(--font-label)" }}
            >
              {link}
            </a>
          ))}
        </div>

        <div
          className="uppercase tracking-[0.3em] text-[10px] text-gold"
          style={{ fontFamily: "var(--font-label)" }}
        >
          © 2024 YEGUADA10. ALL RIGHTS RESERVED.
        </div>
      </div>

      {/* Hecho por Cenit Digital */}
      <div className="border-t border-outline-variant/15 py-10">
        <div className="flex flex-col items-center gap-5">
          <span 
            className="uppercase tracking-[0.3em] text-[12px] text-outline/70"
            style={{ fontFamily: "var(--font-label)" }}
          >
            Hecho por
          </span>
          <img
            src="/cenit-logo.png"
            alt="Cenit Digital"
            className="h-10 w-auto opacity-80"
          />
        </div>
      </div>
    </footer>
  );
}
