import { Hero } from "@/components/sections/Hero";
import { Eventos } from "@/components/sections/Eventos";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="divider-gradient" />
      <Eventos />

      {/*
        En las próximas etapas se agregarán aquí, en orden:
        <PorQueKactus />, <Galeria />, <ArriendoLocal />,
        <Nosotros />, <Testimonios />, <FAQ />, <Contacto />
      */}
    </>
  );
}
