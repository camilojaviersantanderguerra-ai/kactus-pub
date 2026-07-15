export interface FaqItem {
  pregunta: string;
  respuesta: string;
}

/**
 * Preguntas frecuentes. Editar el texto de cualquier respuesta acá no
 * requiere tocar el componente.
 */
export const faqItems: FaqItem[] = [
  {
    pregunta: "¿Hay estacionamiento?",
    respuesta: "Sí, contamos con estacionamientos cercanos al local.",
  },
  {
    pregunta: "¿Se puede reservar mesa?",
    respuesta:
      "Sí, puedes reservar tu mesa para los sábados directamente por WhatsApp — el botón 'Reservar Mesa' te lleva directo a la conversación.",
  },
  {
    pregunta: "¿Se puede arrendar el local completo?",
    respuesta:
      "Sí, el local está disponible para arriendo completo en eventos privados y corporativos. Puedes cotizar tu evento por WhatsApp o correo electrónico.",
  },
  {
    pregunta: "¿Se aceptan eventos corporativos?",
    respuesta:
      "Sí, recibimos capacitaciones, conferencias, lanzamientos de productos y fiestas corporativas, con el espacio preparado para cada ocasión.",
  },
];
