export interface GaleriaImage {
  /** Ruta relativa dentro de public/galeria/, ej. "/galeria/pista-01.jpg" */
  src: string;
  alt: string;
}

/**
 * Vacío por ahora — se completa a medida que se suban las fotos reales a
 * public/galeria/. El componente de Galería (próxima etapa) va a mapear
 * este array, así que agregar una foto nueva es solo agregar una línea acá,
 * sin tocar ningún componente.
 */
export const galeriaImages: GaleriaImage[] = [];
