import { Hero } from "@/components/sections/Hero";
import { Eventos } from "@/components/sections/Eventos";
import { PorQueElegir } from "@/components/sections/PorQueElegir";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="divider-gradient" />
      <Eventos />
      <PorQueElegir />

      {/*
        En las próximas etapas se agregarán aquí, en orden:
        <Galeria />, <ArriendoLocal />,
        <Nosotros />, <Testimonios />, <FAQ />, <Contacto />
      */}
    </>
  );
}
