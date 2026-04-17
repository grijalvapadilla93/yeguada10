import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Restaurante } from "@/components/restaurante";
import { MusicaVivo } from "@/components/musica-vivo";
import { Academia } from "@/components/academia";
import { Stallions } from "@/components/stallions";
import { Eventos } from "@/components/eventos";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function HomeContent() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Restaurante />
        <MusicaVivo />
        <Academia />
        <Stallions />
        <Eventos />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
