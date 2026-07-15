import type { Metadata } from "next";
import { displayFont, bodyFont, monoFont } from "@/lib/fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { contacto } from "@/data/contacto";
import { empresa } from "@/data/empresa";
import { redes } from "@/data/redes";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kactuspub.cl"),
  title: {
    default: "Kactus Pub — La casa de los 80's, 90's y 2000's | Iquique",
    template: "%s | Kactus Pub",
  },
  description:
    "Kactus Pub, Iquique: pub temático de música 80's, 90's y 2000's. Reserva tu mesa para los sábados o arrienda el local para tu evento privado o corporativo.",
  openGraph: {
    title: "Kactus Pub — Iquique",
    description:
      "La casa de la mejor música de los 80's, 90's y 2000's. Todos los sábados en Iquique.",
    url: "https://kactuspub.cl",
    siteName: "Kactus Pub",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kactus Pub — Iquique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kactus Pub — Iquique",
    description:
      "La casa de la mejor música de los 80's, 90's y 2000's. Todos los sábados en Iquique.",
    images: ["/og-image.jpg"],
  },
};

/**
 * Datos estructurados Schema.org (JSON-LD), tipo NightClub — le confirma a
 * Google qué tipo de negocio es, su horario y sus redes, para que aparezca
 * mejor en resultados de búsqueda (rich snippets, Google Maps, etc.).
 * Se arma dinámicamente desde data/contacto.ts, data/empresa.ts y
 * data/redes.ts — nunca hay que editar este archivo a mano para esto.
 */
function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NightClub",
    name: empresa.nombre,
    description: empresa.tagline,
    image: "https://kactuspub.cl/og-image.jpg",
    url: "https://kactuspub.cl",
    telephone: `+${contacto.whatsappNumber}`,
    email: contacto.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Iquique",
      addressCountry: "CL",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: contacto.scheduleSchema.dayOfWeek,
      opens: contacto.scheduleSchema.opens,
      closes: contacto.scheduleSchema.closes,
    },
    sameAs: redes
      .filter((r) => r.href.startsWith("http"))
      .map((r) => r.href),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}
    >
      <head>
        <StructuredData />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
