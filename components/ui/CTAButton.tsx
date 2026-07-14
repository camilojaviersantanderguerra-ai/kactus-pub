import Link from "next/link";
import { cn } from "@/lib/utils";
import type { CTAButtonProps } from "@/types";

const variantStyles = {
  // CTA de mayor jerarquía: reservar mesa, cotizar evento.
  // Nota: se retiró el glow de sombra en hover — con el sheen de luz barriendo
  // la superficie ya hay feedback suficiente; sumar glow además lo saturaba.
  gold: "bg-gold text-base hover:bg-gold-hover",
  // CTA secundario, sobre fondos oscuros
  "outline-green":
    "border border-neon-green/70 text-neon-green bg-transparent hover:bg-neon-green/10",
  "outline-purple":
    "border border-neon-purple/70 text-neon-purple bg-transparent hover:bg-neon-purple/10",
} as const;

/**
 * Botón de llamado a la acción. `variant="gold"` se reserva SIEMPRE para las
 * dos conversiones principales del sitio (Reservar Mesa / Cotizar Evento),
 * de modo que el usuario aprenda a asociar el dorado con "acción principal".
 *
 * Incluye un "sheen": un barrido diagonal de luz que cruza el botón al hacer
 * hover (clase `btn-sheen` en globals.css), para que el feedback se sienta
 * como una superficie pulida y no solo un cambio de color plano.
 */
export function CTAButton({
  href,
  children,
  variant = "gold",
  className,
}: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "btn-sheen inline-flex items-center justify-center rounded-full px-7 py-3.5",
        "font-body text-sm font-semibold tracking-wide",
        "transition-colors duration-300",
        variantStyles[variant],
        className
      )}
    >
      <span>{children}</span>
    </Link>
  );
}
