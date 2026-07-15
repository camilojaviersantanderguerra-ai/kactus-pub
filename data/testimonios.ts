export interface Testimonio {
  nombre: string;
  texto: string;
  /** Calificación de 1 a 5 */
  rating: number;
}

/**
 * Testimonios de ejemplo — reemplazar por reseñas reales de clientes cuando
 * estén disponibles. Cada objeto es independiente, así que se pueden ir
 * cambiando de a uno sin afectar a los demás.
 */
export const testimonios: Testimonio[] = [
  {
    nombre: "Camila R.",
    texto:
      "La mejor noche de 80's y 90's de Iquique, sin duda. El ambiente, la música y el trato son increíbles.",
    rating: 5,
  },
  {
    nombre: "Matías S.",
    texto:
      "Arrendamos el local para un cumpleaños y quedamos encantados. Todo muy bien organizado y el sonido excelente.",
    rating: 5,
  },
  {
    nombre: "Fernanda P.",
    texto:
      "Un lugar con mucha personalidad. Se nota que la música está pensada para pasarlo bien de principio a fin.",
    rating: 5,
  },
  {
    nombre: "Diego A.",
    texto:
      "Volvemos todos los sábados con el grupo de amigos. El DJ siempre acierta con los clásicos.",
    rating: 5,
  },
];
