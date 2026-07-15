import { Hero } from "@/components/sections/Hero";
import { Eventos } from "@/components/sections/Eventos";
import { PorQueElegir } from "@/components/sections/PorQueElegir";
import { Nosotros } from "@/components/sections/Nosotros";
import { Galeria } from "@/components/sections/Galeria";
import { ArriendoLocal } from "@/components/sections/ArriendoLocal";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="divider-gradient" />
      <Eventos />
      <PorQueElegir />
      <Nosotros />
      <Galeria />
      <ArriendoLocal />

      {/*
        En las próximas etapas se agregarán aquí, en orden:
        <Testimonios />, <FAQ />, <Contacto />
      */}
    </>
  );
}
