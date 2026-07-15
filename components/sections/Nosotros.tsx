"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Music2 } from "lucide-react";
import { empresa } from "@/data/empresa";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

/**
 * Panel de foto con fallback: intenta cargar /public/nosotros.jpg (ver
 * public/README.md); si todavía no existe, muestra un panel decorativo en
 * vez de un ícono de imagen rota — mismo patrón que el Logo.
 */
function FotoPanel() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-hairline bg-base-soft sm:aspect-[16/11] lg:aspect-[4/5]"
    >
      {!imageFailed ? (
        <Image
          src="/nosotros.jpg"
          alt={empresa.nombre}
          fill
          sizes="(min-width: 1024px) 480px, 100vw"
          className="object-cover"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-neon-purple/15 via-base-soft to-neon-green/10">
          <Music2 className="text-ink-muted/40" size={56} strokeWidth={1.25} />
        </div>
      )}
    </motion.div>
  );
}

/**
 * Sección Nosotros: layout editorial de dos columnas (foto + texto en
 * desktop, apiladas en mobile). Todo el contenido viene de data/empresa.ts.
 */
export function Nosotros() {
  return (
    <section id="nosotros" className="bg-base-soft py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        <FotoPanel />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeLeft}
          className="flex flex-col gap-6"
        >
          <span className="fluid-eyebrow font-mono text-[11px] uppercase text-neon-green">
            <span className="eyebrow-rule" />
            Quiénes somos
          </span>

          <h2 className="fluid-h2 font-display font-bold text-ink">Nuestra historia</h2>

          <div className="flex flex-col gap-4">
            {empresa.historia.map((parrafo, i) => (
              <p key={i} className="font-body text-base text-ink-muted sm:text-lg">
                {parrafo}
              </p>
            ))}
          </div>

          <div className="mt-2 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-ink-muted">
            <MapPin size={16} className="text-gold" />
            <span>{empresa.ciudad}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
