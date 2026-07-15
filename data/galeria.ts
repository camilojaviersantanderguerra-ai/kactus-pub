export interface GaleriaImage {
  /** Ruta relativa dentro de public/galeria/, ej. "/galeria/pista-01.jpg" */
  src: string;
  alt: string;
}

/**
 * Fotos reales de Kactus Pub. Cada línea corresponde a un archivo en
 * public/galeria/ — agregar una foto nueva es solo subir el archivo ahí
 * y agregar su línea acá, sin tocar ningún componente.
 */
export const galeriaImages: GaleriaImage[] = [
  { src: "/galeria/pista-baile-sabado.jpg", alt: "Pista de baile llena un sábado en Kactus Pub" },
  { src: "/galeria/terraza-neon-kactus.jpg", alt: "Terraza de Kactus Pub con letrero neón" },
  { src: "/galeria/photo-op-grupo.jpg", alt: "Grupo de amigos en la photo op de Kactus Pub" },
  { src: "/galeria/pista-baile-interior.jpg", alt: "Ambiente en la pista de baile interior" },
  { src: "/galeria/mesas-terraza.jpg", alt: "Amigos brindando en las mesas de la terraza" },
  { src: "/galeria/torta-cumpleanos-kactus.jpg", alt: "Torta de cumpleaños con la marca Kactus Pub" },
];
