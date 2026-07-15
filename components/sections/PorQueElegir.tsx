"use client";

import { motion } from "framer-motion";
import {
  Volume2,
  Mic2,
  Wine,
  Music4,
  Cigarette,
  Bath,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { beneficios, type BeneficioIcon } from "@/data/porque-elegir";
import { cn } from "@/lib/utils";

const iconMap: Record<BeneficioIcon, typeof Volume2> = {
  sonido: Volume2,
  escenario: Mic2,
  bar: Wine,
  pista: Music4,
  fumadores: Cigarette,
  banos: Bath,
  ubicacion: MapPin,
  seguridad: ShieldCheck,
};

/** Mismo trío de acentos usado en toda la página, en un ciclo de 3 para dar ritmo visual sin depender de un significado por color */
const accentCycle = [
  { text: "text-neon-purple", border: "hover:border-neon-purple/45" },
  { text: "text-neon-green", border: "hover:border-neon-green/45" },
  { text: "text-gold", border: "hover:border-gold/45" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const gridContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

/**
 * Sección "Por qué elegir Kactus": grid de 9 beneficios con ícono, en tarjetas
 * simples (sin numeral fantasma, esa firma queda reservada para las décadas
 * de Eventos). El color de acento cicla morado→verde→dorado por posición,
 * dando ritmo visual sin necesitar significado semántico por color.
 */
export function PorQueElegir() {
  return (
    <section id="porque-elegir" className="bg-base py-24 sm:py-32">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-14 px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <SectionHeading
            kicker="Todo lo que necesitas"
            title="¿Por qué elegir Kactus?"
            description="Un espacio pensado en cada detalle, tanto para la noche de los sábados como para tu evento privado."
            align="center"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={gridContainer}
          className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {beneficios.map((beneficio, i) => {
            const Icon = iconMap[beneficio.icon];
            const accent = accentCycle[i % accentCycle.length];
            return (
              <motion.div
                key={beneficio.label}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className={cn(
                  "flex items-center gap-4 rounded-2xl border border-hairline bg-base-soft px-6 py-5 transition-[border-color] duration-300",
                  accent.border
                )}
              >
                <Icon className={cn("shrink-0", accent.text)} size={26} strokeWidth={1.75} />
                <span className="font-body text-sm font-medium text-ink sm:text-base">
                  {beneficio.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
