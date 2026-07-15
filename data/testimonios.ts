export interface Testimonio {
  nombre: string;
  texto: string;
  /** Calificación de 1 a 5 */
  rating: number;
}

/**
 * Testimonios reales, recopilados de los comentarios en Facebook.
 */
export const testimonios: Testimonio[] = [
  {
    nombre: "Cynthia Brito Ramirez",
    texto: "Lo mejor de Iquique.",
    rating: 5,
  },
  {
    nombre: "Yasna Gonzalez",
    texto: "Es bakan Kactus.",
    rating: 5,
  },
  {
    nombre: "Nathalia Olguin",
    texto: "Buenísimo, mi lugar favorito!",
    rating: 5,
  },
  {
    nombre: "Patty Gallegos Lagos",
    texto: "Lo mejor.",
    rating: 5,
  },
  {
    nombre: "Yenifer Carola Rojas Pizarro",
    texto:
      "Yo diría más de 20... yo me casé en Kactus, del Morro, hace 21 años y ya existía. Un abrazote a Enrique y su equipo, unos bellos.",
    rating: 5,
  },
  {
    nombre: "Alexis Hidalgo",
    texto: "La mejor.",
    rating: 5,
  },
  {
    nombre: "Catherina Opazo",
    texto: "Lo mejor de lo mejor... siempre 10 de 10.",
    rating: 5,
  },
  {
    nombre: "Zulmita Pulgarin",
    texto: "La mejor. Me encanta ir ahí. Genial.",
    rating: 5,
  },
  {
    nombre: "Margarita Guzman Marzant",
    texto: "Lo mejor de lo mejor.",
    rating: 5,
  },
  {
    nombre: "Cristian Reyes Novoa",
    texto:
      "Tengo grandes recuerdos del Kactus Pub cuando estaba en calle Gorostiaga. Fueron mis últimos tiempos de carrete estando soltero.",
    rating: 5,
  },
  {
    nombre: "Patty Castro",
    texto: "Yo lo conocí cuando tocaban música de los 70.",
    rating: 5,
  },
  {
    nombre: "Cynthia Gonzalez",
    texto: "Estuvo buenísimo, bailé hasta los reclamos jajaja.",
    rating: 5,
  },
];
