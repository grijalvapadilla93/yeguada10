"use client";

export function SectionDivider() {
  return (
    <div className="relative py-8 md:py-12 w-full bg-surface-container-low overflow-visible flex items-center justify-center">
      {/* Full-width faint line */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-outline-variant/30 to-transparent" />
      
      {/* Center diamond with glow */}
      <div className="relative flex items-center justify-center px-6 bg-surface-container-low z-10">
        {/* Glow behind diamond */}
        <span className="absolute w-8 h-8 bg-gold/10 blur-md rounded-full" />
        {/* Diamond */}
        <span className="relative block w-[12px] h-[12px] rotate-45 border-2 border-gold bg-gold/30 shadow-[0_0_12px_rgba(196,144,42,0.4)]" />
      </div>
    </div>
  );
}
