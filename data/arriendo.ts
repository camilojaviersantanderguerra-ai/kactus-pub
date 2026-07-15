export interface ArriendoFoto {
  src: string;
  alt: string;
}

/**
 * Casos de uso para el arriendo del local, tal como se definieron en el brief.
 */
export const usosArriendo: string[] = [
  "Empresas",
  "Cumpleaños",
  "Matrimonios",
  "Aniversarios",
  "Licenciaturas",
  "Graduaciones",
  "Lanzamientos de productos",
  "Conferencias",
  "Capacitaciones",
  "Celebraciones privadas",
  "Fiestas corporativas",
];

/**
 * Fotos del salón para esta sección. Por ahora reutiliza dos fotos ya
 * subidas en public/galeria/; cuando haya fotos dedicadas del salón
 * preparado para eventos, se pueden reemplazar acá por rutas en
 * public/eventos/ sin tocar el componente.
 */
export const fotosArriendo: ArriendoFoto[] = [
  { src: "/galeria/terraza-neon-kactus.jpg", alt: "Terraza de Kactus Pub lista para un evento" },
  { src: "/galeria/torta-cumpleanos-kactus.jpg", alt: "Celebración privada en Kactus Pub" },
];
