"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { mainNav } from "@/data/navigation";
import { CTAButton } from "@/components/ui/CTAButton";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

/**
 * Overlay de navegación para mobile/tablet. Se monta siempre (AnimatePresence
 * controla entrada/salida) para que la transición de fade + slide se vea
 * suave en vez de aparecer de golpe.
 */
export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex flex-col bg-base/98 backdrop-blur-md md:hidden"
        >
          <div className="flex items-center justify-end px-6 py-5">
            <button
              onClick={onClose}
              aria-label="Cerrar menú"
              className="text-ink transition-colors hover:text-neon-green"
            >
              <X size={28} />
            </button>
          </div>

          <motion.nav
            initial="closed"
            animate="open"
            variants={{
              open: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
            }}
            className="flex flex-1 flex-col items-center justify-center gap-8"
          >
            {mainNav.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={onClose}
                variants={{
                  closed: { opacity: 0, y: 12 },
                  open: { opacity: 1, y: 0 },
                }}
                className="font-display text-2xl font-semibold text-ink transition-colors hover:text-neon-green"
              >
                {link.label}
              </motion.a>
            ))}

            <CTAButton href="#eventos" variant="gold" className="mt-4">
              Reservar Mesa
            </CTAButton>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
