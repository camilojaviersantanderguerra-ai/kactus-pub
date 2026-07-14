/**
 * Información de contacto del local. Editar solo estos valores —
 * ningún componente debería tener un número, dirección o email hardcodeado.
 */
export interface ContactInfo {
  /** Número de WhatsApp en formato internacional, sin espacios (ej. 56912345678) */
  whatsappNumber: string;
  /** Mensaje precargado al abrir WhatsApp */
  whatsappMessage: string;
  email: string;
  address: string;
  /** URL de Google Maps (embed o link directo) */
  mapsUrl: string;
  schedule: string;
}

export const contacto: ContactInfo = {
  whatsappNumber: "56920245353",
  whatsappMessage: "Hola, quiero reservar una mesa para el sábado",
  email: "clubkactuslimitada@gmail.com",
  address: "Iquique, Chile",
  mapsUrl: "https://maps.app.goo.gl/pBHSDLpwFAkco3aJ9?g_st=iwb",
  schedule: "Sábados — 23:00 a 04:30",
};

/** Link de WhatsApp ya armado con el mensaje precargado, listo para usar en un <a href> */
export const whatsappHref = `https://wa.me/${contacto.whatsappNumber}?text=${encodeURIComponent(
  contacto.whatsappMessage
)}`;
