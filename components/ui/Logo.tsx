"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

/**
 * Logo del sitio. Intenta cargar `/public/logo.png` (el archivo de marca real);
 * si todavía no existe (o falla la carga), cae de vuelta al wordmark de texto
 * "KACTUS." — así el sitio nunca se rompe visualmente mientras no se haya
 * subido el logo definitivo, y el día que se suba, funciona sin tocar código.
 */
export function Logo({ className }: LogoProps) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <Link href="#inicio" className={cn("inline-flex items-center", className)}>
      {!imageFailed ? (
        <Image
          src="/logo.png"
          alt="Kactus Pub"
          width={120}
          height={118}
          priority
          className="h-12 w-auto object-contain transition-all duration-300 hover:drop-shadow-[0_0_14px_rgba(57,255,136,0.5)]"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <span
          className={cn(
            "font-display text-lg font-bold tracking-wide text-ink transition-all duration-300",
            "hover:text-neon-green hover:text-glow-green"
          )}
        >
          KACTUS<span className="text-gold">.</span>
        </span>
      )}
    </Link>
  );
}
