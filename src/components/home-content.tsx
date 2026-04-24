import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Restaurante } from "@/components/restaurante";
import { MusicaVivo } from "@/components/musica-vivo";
import { Academia } from "@/components/academia";
import { Stallions } from "@/components/stallions";
import { Eventos } from "@/components/eventos";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { SectionDivider } from "@/components/section-divider";

export default function HomeContent() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <Restaurante />
        <SectionDivider />
        <MusicaVivo />
        <SectionDivider />
        <Academia />
        <SectionDivider />
        <Stallions />
        <SectionDivider />
        <Eventos />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
