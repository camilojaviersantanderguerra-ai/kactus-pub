import { Unbounded, Inter, Space_Mono } from "next/font/google";

/**
 * Display: Unbounded — geométrica, de alto impacto, con carácter retro-futurista.
 * Se usa en titulares (Hero, encabezados de sección) con moderación.
 */
export const displayFont = Unbounded({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

/**
 * Body: Inter — alta legibilidad en fondos oscuros, neutra para párrafos y UI.
 */
export const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

/**
 * Mono: Space Mono — usada en detalles puntuales (contador, etiquetas tipo
 * "ticket de club", datos), nunca en párrafos largos.
 */
export const monoFont = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});
