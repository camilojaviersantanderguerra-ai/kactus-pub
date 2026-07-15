"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook, Mail, MessageCircle, Music2, MapPin, Send } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { redes, type SocialIcon } from "@/data/redes";
import { contacto } from "@/data/contacto";
import { cn } from "@/lib/utils";

const iconMap: Record<SocialIcon, typeof Instagram> = {
  instagram: Instagram,
  facebook: Facebook,
  whatsapp: MessageCircle,
  tiktok: Music2,
  mail: Mail,
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

/**
 * Sección Contacto: botones grandes a cada red, panel de mapa (link directo
 * a Google Maps — sin iframe embebido, para no depender de una API key), y
 * un formulario minimalista. Como el sitio no tiene backend propio, el
 * formulario arma el mensaje y lo abre directo en WhatsApp con todo
 * precargado, en vez de "enviarse" a ningún lado silenciosamente.
 */
export function Contacto() {
  const [nombre, setNombre] = useState("");
  const [contactoForm, setContactoForm] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const texto = `Hola, soy ${nombre || "un visitante del sitio"} (${contactoForm || "sin datos de contacto"}).\n\n${mensaje}`;
    const url = `https://wa.me/${contacto.whatsappNumber}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contacto" className="bg-base-soft py-24 sm:py-32">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-14 px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <SectionHeading
            kicker="Hablemos"
            title="Contacto"
            description="Escríbenos por el canal que prefieras, o completa el formulario y te respondemos por WhatsApp."
            align="center"
          />
        </motion.div>

        {/* Botones grandes de contacto directo */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="flex w-full flex-wrap items-center justify-center gap-4"
        >
          {redes.map((red) => {
            const Icon = iconMap[red.icon];
            return (
              <a
                key={red.label}
                href={red.href}
                target={red.href.startsWith("http") ? "_blank" : undefined}
                rel={red.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="btn-sheen inline-flex items-center gap-2.5 rounded-full border border-hairline bg-base px-6 py-3.5 font-body text-sm font-semibold text-ink transition-colors duration-300 hover:border-neon-green/50 hover:text-neon-green"
              >
                <Icon size={18} />
                <span>{red.label}</span>
              </a>
            );
          })}
        </motion.div>

        <div className="grid w-full gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Formulario */}
          <motion.form
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeLeft}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-1.5">
              <label htmlFor="nombre" className="font-mono text-xs uppercase tracking-[0.15em] text-ink-muted">
                Nombre
              </label>
              <input
                id="nombre"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Tu nombre"
                className="border-b border-hairline bg-transparent py-2.5 font-body text-ink outline-none transition-colors duration-300 placeholder:text-ink-muted/50 focus:border-neon-green"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="contacto-dato" className="font-mono text-xs uppercase tracking-[0.15em] text-ink-muted">
                Email o teléfono
              </label>
              <input
                id="contacto-dato"
                type="text"
                value={contactoForm}
                onChange={(e) => setContactoForm(e.target.value)}
                placeholder="¿Cómo te contactamos de vuelta?"
                className="border-b border-hairline bg-transparent py-2.5 font-body text-ink outline-none transition-colors duration-300 placeholder:text-ink-muted/50 focus:border-neon-green"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="mensaje" className="font-mono text-xs uppercase tracking-[0.15em] text-ink-muted">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                required
                rows={4}
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                placeholder="Cuéntanos qué necesitas"
                className="resize-none border-b border-hairline bg-transparent py-2.5 font-body text-ink outline-none transition-colors duration-300 placeholder:text-ink-muted/50 focus:border-neon-green"
              />
            </div>

            <button
              type="submit"
              className={cn(
                "btn-sheen mt-2 inline-flex items-center justify-center gap-2 self-start rounded-full px-7 py-3.5",
                "font-body text-sm font-semibold tracking-wide text-base transition-colors duration-300",
                "bg-gold hover:bg-gold-hover"
              )}
            >
              <span className="inline-flex items-center gap-2">
                Enviar por WhatsApp
                <Send size={16} />
              </span>
            </button>
          </motion.form>

          {/* Panel de mapa */}
          <motion.a
            href={contacto.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeRight}
            className="group flex flex-col items-center justify-center gap-4 rounded-3xl border border-hairline bg-base px-8 py-16 text-center transition-colors duration-300 hover:border-neon-purple/40"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-neon-purple/10 text-neon-purple transition-transform duration-300 group-hover:scale-110">
              <MapPin size={26} />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-body text-base font-semibold text-ink">{contacto.address}</span>
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-ink-muted">
                Ver ubicación en Google Maps
              </span>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
