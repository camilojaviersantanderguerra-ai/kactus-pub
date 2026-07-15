"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTAButton } from "@/components/ui/CTAButton";
import { usosArriendo, fotosArriendo } from "@/data/arriendo";
import { contacto, whatsappHrefEventos } from "@/data/contacto";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const chipContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};

/**
 * Sección Arriendo del Local: apunta al segundo objetivo del sitio (además
 * de las reservas de sábado) — conseguir clientes para eventos privados y
 * corporativos. Fondo `bg-base` (sin el `-soft`) para diferenciarse
 * visualmente de Nosotros/Galería y marcar que es una audiencia distinta
 * (empresas/particulares vs. asistentes de la noche del sábado).
 */
export function ArriendoLocal() {
  return (
    <section id="arriendo" className="bg-base py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="flex flex-col gap-6"
        >
          <SectionHeading
            kicker="Eventos privados y corporativos"
            title="Arriendo del Local"
            description="Un espacio versátil, preparado para que tu evento se vea tan bien como se siente. Ideal para:"
          />

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={chipContainer}
            className="flex flex-wrap gap-2.5"
          >
            {usosArriendo.map((uso) => (
              <motion.span
                key={uso}
                variants={fadeUp}
                className="rounded-full border border-hairline bg-base-soft px-4 py-2 font-body text-sm text-ink-muted"
              >
                {uso}
              </motion.span>
            ))}
          </motion.div>

          <div className="mt-2 flex flex-col gap-4 sm:flex-row">
            <CTAButton href={whatsappHrefEventos} variant="gold">
              Cotizar mi Evento
            </CTAButton>
            <a
              href={`mailto:${contacto.email}`}
              className="btn-sheen inline-flex items-center justify-center gap-2 rounded-full border border-neon-green/70 px-7 py-3.5 font-body text-sm font-semibold tracking-wide text-neon-green transition-colors duration-300 hover:bg-neon-green/10"
            >
              <span className="inline-flex items-center gap-2">
                <Mail size={16} />
                Escribir al correo
              </span>
            </a>
          </div>
        </motion.div>

        {/* Fotos del salón: dos imágenes superpuestas en un collage editorial */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeRight}
          className="relative mx-auto aspect-square w-full max-w-md lg:aspect-[4/5]"
        >
          <div className="absolute inset-0 -right-4 -top-4 h-[85%] w-[85%] overflow-hidden rounded-3xl border border-hairline sm:-right-6 sm:-top-6">
            <Image
              src={fotosArriendo[0].src}
              alt={fotosArriendo[0].alt}
              fill
              sizes="(min-width: 1024px) 400px, 80vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 h-[55%] w-[55%] overflow-hidden rounded-2xl border-4 border-base shadow-2xl">
            <Image
              src={fotosArriendo[1].src}
              alt={fotosArriendo[1].alt}
              fill
              sizes="(min-width: 1024px) 260px, 50vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
