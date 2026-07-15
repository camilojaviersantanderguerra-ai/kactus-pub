"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { CTAButton } from "@/components/ui/CTAButton";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { mainNav } from "@/data/navigation";
import { whatsappHref } from "@/data/contacto";
import { cn } from "@/lib/utils";
import type { NavLink } from "@/types";

/**
 * Header fijo con efecto glassmorphism.
 *
 * - Sobre el hero: transparente, sin borde, se funde con el fondo oscuro.
 * - Al superar 40px de scroll: fondo semitransparente + blur (glass) y una
 *   sombra suave hacia abajo, para separarse visualmente del contenido.
 * - `useScroll`/`useMotionValueEvent` de Framer Motion evita re-renders en
 *   cada pixel de scroll (solo actualiza el estado al cruzar el umbral).
 * - El header completo entra con un fade + slide-down suave al cargar.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-40",
          "transition-[background-color,backdrop-filter,border-color,box-shadow] duration-500 ease-out",
          scrolled
            ? "border-b border-white/10 bg-base/70 shadow-[0_8px_40px_-8px_rgba(0,0,0,0.45)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent backdrop-blur-none"
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between px-6 transition-[padding] duration-400 ease-out",
            scrolled ? "py-3" : "py-4 md:py-5"
          )}
        >
          <Logo />

          <nav className="hidden items-center gap-8 md:flex">
            {mainNav.map((link) => (
              <NavItem key={link.href} link={link} />
            ))}
          </nav>

          <div className="hidden md:block">
            <CTAButton href={whatsappHref} variant="gold" external>
              Reservar Mesa
            </CTAButton>
          </div>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            className="relative h-7 w-7 text-ink md:hidden"
          >
            <AnimatePresence initial={false} mode="wait">
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <X size={26} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Menu size={26} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

/**
 * Link de navegación de escritorio con subrayado animado en hover
 * (scale-x de 0 a 1, con origen a la izquierda). El subrayado usa el
 * degradé morado→verde de la marca en vez de un solo color plano — un
 * detalle que conecta cada link con la identidad de las dos décadas acento.
 */
function NavItem({ link }: { link: NavLink }) {
  return (
    <a
      href={link.href}
      className="group relative font-body text-[13px] font-medium tracking-wide text-ink-muted transition-colors duration-300 hover:text-ink"
    >
      {link.label}
      <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-neon-purple to-neon-green transition-transform duration-300 ease-out group-hover:scale-x-100" />
    </a>
  );
}
