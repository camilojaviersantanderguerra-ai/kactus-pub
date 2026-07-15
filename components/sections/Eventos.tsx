"use client";

import { motion } from "framer-motion";
import { Disc3, Music4, PartyPopper, Cigarette } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CountdownTimer } from "@/components/ui/CountdownTimer";
import { CTAButton } from "@/components/ui/CTAButton";
import { decades, eventFeatures, type DecadeItem } from "@/data/eventos";
import { whatsappHref } from "@/data/contacto";
import { cn } from "@/lib/utils";

const accentStyles: Record<
  DecadeItem["accent"],
  { text: string; ghost: string; border: string; glow: string }
> = {
  purple: {
    text: "text-neon-purple",
    ghost: "text-neon-purple",
    border: "hover:border-neon-purple/45",
    // Glow reducido respecto al hero/countdown: el hover debe insinuar, no gritar
    glow: "hover:shadow-[0_0_30px_-6px_rgba(184,77,255,0.25)]",
  },
  green: {
    text: "text-neon-green",
    ghost: "text-neon-green",
    border: "hover:border-neon-green/45",
    glow: "hover:shadow-[0_0_30px_-6px_rgba(57,255,136,0.25)]",
  },
  gold: {
    text: "text-gold",
    ghost: "text-gold",
    border: "hover:border-gold/45",
    glow: "hover:shadow-[0_0_30px_-6px_rgba(212,175,55,0.25)]",
  },
};

const featureIcons = [Disc3, Music4, PartyPopper, Cigarette];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const gridContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

/**
 * Sección Eventos: encabezado, countdown al próximo sábado, tres cards de
 * década (80's/90's/2000's) y bullets de features. Todo revela on-scroll
 * con `whileInView` (se anima una sola vez, `viewport={{ once: true }}`).
 */
export function Eventos() {
  return (
    <section id="eventos" className="bg-base py-24 sm:py-32">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <SectionHeading
            kicker="Todos los sábados"
            title="Una noche, tres décadas"
            description="DJ en vivo tocando lo mejor de los 80's, 90's y 2000's, en la pista más animada de Iquique."
            align="center"
          />
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          className="flex flex-col items-center gap-4"
        >
          <span className="fluid-eyebrow font-mono text-[11px] uppercase text-gold">
            Próximo sábado en
          </span>
          <CountdownTimer />
        </motion.div>

        {/* Cards de década */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={gridContainer}
          className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {decades.map((item) => {
            const accent = accentStyles[item.accent];
            return (
              <motion.div
                key={item.decade}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className={cn(
                  "relative overflow-hidden rounded-3xl border border-hairline bg-base-soft p-9 text-center transition-[border-color,box-shadow] duration-300",
                  accent.border,
                  accent.glow
                )}
              >
                {/* Numeral fantasma: le da a cada card una identidad tipográfica
                    propia sin agregar más color ni glow */}
                <span
                  aria-hidden
                  className={cn(
                    "pointer-events-none absolute -right-1 -top-2 select-none font-display text-8xl font-extrabold opacity-[0.06]",
                    accent.ghost
                  )}
                >
                  {item.ghost}
                </span>

                <span className={cn("relative font-display text-4xl font-extrabold", accent.text)}>
                  {item.decade}
                </span>
                <p className="relative mt-3 font-body text-sm text-ink-muted">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Features */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={gridContainer}
          className="flex flex-wrap items-center justify-center gap-8"
        >
          {eventFeatures.map((feature, i) => {
            const Icon = featureIcons[i % featureIcons.length];
            return (
              <motion.div
                key={feature.label}
                variants={fadeUp}
                className="flex items-center gap-2 text-ink-muted"
              >
                <Icon size={20} className="text-neon-green" />
                <span className="font-body text-sm">{feature.label}</span>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
        >
          <CTAButton href={whatsappHref} variant="gold" external>
            Reservar Mesa
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
}
