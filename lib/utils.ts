import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina clases condicionales (clsx) y resuelve conflictos de Tailwind
 * (tailwind-merge). Se usará en todos los componentes que acepten `className`.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
