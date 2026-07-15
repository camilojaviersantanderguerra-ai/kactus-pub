import { Hero } from "@/components/sections/Hero";
import { Eventos } from "@/components/sections/Eventos";
import { PorQueElegir } from "@/components/sections/PorQueElegir";
import { Nosotros } from "@/components/sections/Nosotros";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="divider-gradient" />
      <Eventos />
      <PorQueElegir />
      <Nosotros />

      {/*
        En las próximas etapas se agregarán aquí, en orden:
        <Galeria />, <ArriendoLocal />,
        <Testimonios />, <FAQ />, <Contacto />
      */}
    </>
  );
}
