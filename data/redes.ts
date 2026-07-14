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
  { label: "Instagram", href: "https://www.instagram.com/kactusiqq?igsh=MW1wbmlveXdxcGNvaQ==", icon: "instagram" },
  { label: "Facebook", href: "https://www.facebook.com/share/18bv5hsTGL/?mibextid=wwXIfr", icon: "facebook" },
  { label: "Correo electrónico", href: "mailto:clubkactuslimitada@gmail.com", icon: "mail" },
];
