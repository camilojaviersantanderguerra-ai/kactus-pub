import { Instagram, Facebook, Mail, MessageCircle, Music2, MapPin, Clock } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { mainNav } from "@/data/navigation";
import { contacto } from "@/data/contacto";
import { redes, type SocialIcon } from "@/data/redes";
import { empresa } from "@/data/empresa";

const iconMap: Record<SocialIcon, typeof Instagram> = {
  instagram: Instagram,
  facebook: Facebook,
  whatsapp: MessageCircle, // Lucide no incluye el ícono de marca de WhatsApp
  tiktok: Music2, // Lucide tampoco incluye el ícono de marca de TikTok
  mail: Mail,
};

/**
 * Footer base. Todo el contenido (horario, dirección, redes, tagline) viene
 * de /data/contacto.ts, /data/redes.ts y /data/empresa.ts — este componente
 * solo define cómo se ve, nunca qué dice.
 */
export function Footer() {
  return (
    <footer className="border-t border-hairline bg-base">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 md:grid-cols-4">
        <div className="flex flex-col gap-4 sm:col-span-2 md:col-span-1">
          <Logo />
          <p className="font-body text-sm text-ink-muted">{empresa.tagline}.</p>
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
            Navegación
          </span>
          {mainNav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-ink-muted transition-colors hover:text-neon-green"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
            Horario
          </span>
          <div className="flex items-start gap-2 text-sm text-ink-muted">
            <Clock size={16} className="mt-0.5 shrink-0" />
            <span>{contacto.schedule}</span>
          </div>
          <a
            href={contacto.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2 text-sm text-ink-muted transition-colors hover:text-neon-green"
          >
            <MapPin size={16} className="mt-0.5 shrink-0" />
            <span>{contacto.address}</span>
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
            Síguenos
          </span>
          <div className="flex gap-4">
            {redes.map((red) => {
              const Icon = iconMap[red.icon];
              return (
                <a
                  key={red.label}
                  href={red.href}
                  target={red.href.startsWith("http") ? "_blank" : undefined}
                  rel={red.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={red.label}
                  className="text-ink-muted transition-colors hover:text-neon-purple"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-hairline px-6 py-6">
        <p className="mx-auto max-w-7xl font-mono text-xs text-ink-muted">
          © {new Date().getFullYear()} {empresa.nombre}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
