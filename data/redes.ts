import { whatsappHref } from "./contacto";

export type SocialIcon = "instagram" | "facebook" | "whatsapp" | "mail";

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIcon;
}

/**
 * Redes sociales del local. El link de WhatsApp reutiliza `whatsappHref` de
 * `data/contacto.ts` — el número solo se escribe una vez, en un solo archivo.
 */
export const redes: SocialLink[] = [
  { label: "WhatsApp", href: whatsappHref, icon: "whatsapp" },
  { label: "Instagram", href: "https://instagram.com/kactuspub", icon: "instagram" },
  { label: "Facebook", href: "https://facebook.com/kactuspub", icon: "facebook" },
  { label: "Correo electrónico", href: "mailto:contacto@kactuspub.cl", icon: "mail" },
];
