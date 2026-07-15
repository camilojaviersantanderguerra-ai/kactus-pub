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
 * Fotos del salón para esta sección: zona de fumadores y pista de baile
 * vacía, ambas en public/eventos/.
 */
export const fotosArriendo: ArriendoFoto[] = [
  { src: "/eventos/pista-baile-vacia.jpg", alt: "Pista de baile de Kactus Pub lista para un evento" },
  { src: "/eventos/zona-fumadores.jpg", alt: "Zona de fumadores de Kactus Pub" },
];
