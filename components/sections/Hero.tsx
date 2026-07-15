"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { ChevronDown } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { whatsappHref } from "@/data/contacto";

/**
 * Variants para el stagger de entrada del contenido del hero: kicker → título
 * → subtítulo → botones, cada uno con un pequeño delay respecto al anterior.
 */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Hook de parallax: sigue el cursor y devuelve dos motion values (x, y)
 * suavizados con spring. Alimenta las luces ambiente del hero — el único
 * momento interactivo "con firma" de la página, sutil y de bajo costo de
 * performance (no hay listeners pesados, solo dos valores reactivos).
 */
function usePointerParallax(range = 30): { x: MotionValue<number>; y: MotionValue<number> } {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 40, damping: 20, mass: 0.8 });
  const y = useSpring(rawY, { stiffness: 40, damping: 20, mass: 0.8 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      rawX.set(nx * range);
      rawY.set(ny * range);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [rawX, rawY, range]);

  return { x, y };
}

/**
 * Hero a pantalla completa (100dvh) con video de fondo.
 *
 * Assets (ver /public/README.md para specs completas):
 *  - /public/hero-video.mp4  → video en loop de la pista/luces
 *  - /public/hero-poster.jpg → foto de respaldo mientras carga el video
 */
export function Hero() {
  const { x, y } = usePointerParallax();

  return (
    <section
      id="inicio"
      className="relative flex h-[100dvh] min-h-[600px] w-full items-center justify-center overflow-hidden bg-base"
    >
      {/* Video de fondo */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        poster="/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay: gradiente oscuro para legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-base" />

      {/* Luces ambiente con parallax de cursor — se mueven en direcciones
          opuestas para dar sensación de profundidad (capas a distinta distancia) */}
      <motion.div
        style={{ x, y }}
        className="pointer-events-none absolute -left-1/4 -top-1/4 h-[70%] w-[70%] rounded-full bg-neon-purple/20 blur-[100px]"
      />
      <motion.div
        style={{ x: useTransform(x, (v) => -v), y: useTransform(y, (v) => -v) }}
        className="pointer-events-none absolute -bottom-1/4 -right-1/4 h-[70%] w-[70%] rounded-full bg-neon-green/15 blur-[100px]"
      />

      {/* Contenido */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center"
      >
        <motion.span
          variants={item}
          className="fluid-eyebrow font-mono text-[11px] uppercase text-neon-green text-glow-green sm:text-xs"
        >
          <span className="eyebrow-rule" />
          Todos los sábados · Iquique
        </motion.span>

        <motion.h1
          variants={item}
          className="fluid-h1 font-display font-bold text-ink"
        >
          La casa de la mejor música de los{" "}
          <span className="text-neon-purple text-glow-purple">80&apos;s</span>,{" "}
          <span className="text-neon-green text-glow-green">90&apos;s</span> y{" "}
          <span className="text-gold">2000&apos;s</span>.
        </motion.h1>

        <motion.p
          variants={item}
          className="max-w-lg font-body text-[1rem] text-ink-muted sm:text-lg"
        >
          Todos los sábados vive una experiencia única en Kactus Pub.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-3 flex flex-col gap-4 sm:flex-row"
        >
          <CTAButton href={whatsappHref} variant="gold" external>
            Reservar Mesa
          </CTAButton>
          <CTAButton href="#arriendo" variant="outline-purple">
            Cotizar Evento
          </CTAButton>
        </motion.div>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-ink-muted" size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
}
