"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonios } from "@/data/testimonios";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

/**
 * Sección Testimonios: carrusel horizontal con scroll-snap nativo (sin
 * librería de carrusel — más liviano) y flechas que desplazan el scroll
 * una tarjeta a la vez. Los datos vienen de data/testimonios.ts.
 */
export function Testimonios() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]") as HTMLElement | null;
    const distance = card ? card.offsetWidth + 20 : 340;
    el.scrollBy({ left: distance * direction, behavior: "smooth" });
  };

  return (
    <section id="testimonios" className="bg-base-soft py-24 sm:py-32">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <SectionHeading
            kicker="Lo que dicen nuestros clientes"
            title="Testimonios"
            align="center"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="relative w-full"
        >
          <div
            ref={scrollerRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonios.map((t) => (
              <div
                key={t.nombre}
                data-card
                className="flex w-[85%] shrink-0 snap-center flex-col gap-4 rounded-2xl border border-hairline bg-base p-7 sm:w-[380px]"
              >
                <Quote className="text-neon-purple/60" size={28} strokeWidth={1.5} />
                <p className="font-body text-base text-ink-muted">{t.texto}</p>
                <div className="mt-auto flex items-center justify-between pt-2">
                  <span className="font-body text-sm font-semibold text-ink">{t.nombre}</span>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={cn(
                          i < t.rating ? "fill-gold text-gold" : "fill-transparent text-ink-muted/30"
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Flechas de navegación, ocultas en mobile (ahí se navega con swipe nativo) */}
          <div className="mt-6 hidden items-center justify-center gap-4 sm:flex">
            <button
              onClick={() => scrollByCard(-1)}
              aria-label="Testimonio anterior"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-ink-muted transition-colors hover:border-neon-green/50 hover:text-neon-green"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scrollByCard(1)}
              aria-label="Siguiente testimonio"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-ink-muted transition-colors hover:border-neon-green/50 hover:text-neon-green"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
