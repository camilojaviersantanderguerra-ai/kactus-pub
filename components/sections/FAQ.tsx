"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqItems } from "@/data/faq";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

/**
 * Sección FAQ: acordeón minimalista, un ítem abierto a la vez. El ícono +
 * rota 45° al abrir (se convierte visualmente en una X sutil). Los datos
 * vienen de data/faq.ts.
 */
export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-base py-24 sm:py-32">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-12 px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <SectionHeading
            kicker="¿Tienes dudas?"
            title="Preguntas Frecuentes"
            align="center"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="w-full border-t border-hairline"
        >
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.pregunta} className="border-b border-hairline">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-body text-base font-medium text-ink sm:text-lg">
                    {item.pregunta}
                  </span>
                  <Plus
                    size={20}
                    className={cn(
                      "shrink-0 text-neon-green transition-transform duration-300",
                      isOpen && "rotate-45"
                    )}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 pr-8 font-body text-sm text-ink-muted sm:text-base">
                        {item.respuesta}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
