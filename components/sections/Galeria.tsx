"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galeriaImages } from "@/data/galeria";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const gridContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

/**
 * Sección Galería: grid tipo masonry (columnas CSS, cada foto con su alto
 * natural) + lightbox a pantalla completa al hacer click, con navegación
 * por flechas y teclado. Las fotos vienen de data/galeria.ts — agregar una
 * línea ahí (con el archivo correspondiente en public/galeria/) es todo lo
 * que hace falta para que aparezca acá, sin tocar este componente.
 */
export function Galeria() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const hasImages = galeriaImages.length > 0;

  const close = useCallback(() => setLightboxIndex(null), []);
  const showPrev = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i - 1 + galeriaImages.length) % galeriaImages.length)),
    []
  );
  const showNext = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i + 1) % galeriaImages.length)),
    []
  );

  // Navegación por teclado en el lightbox: Escape cierra, flechas cambian de foto
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, close, showPrev, showNext]);

  return (
    <section id="galeria" className="bg-base-soft py-24 sm:py-32">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-14 px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <SectionHeading
            kicker="Momentos reales"
            title="Galería"
            description="Un vistazo a las noches de sábado y al espacio de Kactus Pub."
            align="center"
          />
        </motion.div>

        {hasImages ? (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.05 }}
            variants={gridContainer}
            className="columns-1 gap-4 sm:columns-2 lg:columns-3"
          >
            {galeriaImages.map((img, i) => (
              <motion.button
                key={img.src}
                variants={fadeUp}
                onClick={() => setLightboxIndex(i)}
                className="group relative mb-4 block w-full overflow-hidden rounded-2xl border border-hairline bg-base focus:outline-none"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={800}
                  className="h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.button>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="flex w-full flex-col items-center gap-3 rounded-3xl border border-dashed border-hairline bg-base px-6 py-16 text-center"
          >
            <ImageIcon className="text-ink-muted/40" size={40} strokeWidth={1.25} />
            <p className="font-body text-sm text-ink-muted">
              Muy pronto vas a poder ver fotos reales de Kactus Pub acá.
            </p>
          </motion.div>
        )}
      </div>

      {/* Lightbox a pantalla completa */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={close}
          >
            <button
              onClick={close}
              aria-label="Cerrar"
              className="absolute right-5 top-5 z-10 text-ink-muted transition-colors hover:text-ink"
            >
              <X size={28} />
            </button>

            {galeriaImages.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    showPrev();
                  }}
                  aria-label="Foto anterior"
                  className="absolute left-3 top-1/2 z-10 -translate-y-1/2 text-ink-muted transition-colors hover:text-ink sm:left-6"
                >
                  <ChevronLeft size={32} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    showNext();
                  }}
                  aria-label="Foto siguiente"
                  className="absolute right-3 top-1/2 z-10 -translate-y-1/2 text-ink-muted transition-colors hover:text-ink sm:right-6"
                >
                  <ChevronRight size={32} />
                </button>
              </>
            )}

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto max-h-[85vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galeriaImages[lightboxIndex].src}
                alt={galeriaImages[lightboxIndex].alt}
                width={1200}
                height={1200}
                className="max-h-[85vh] w-auto rounded-lg object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
