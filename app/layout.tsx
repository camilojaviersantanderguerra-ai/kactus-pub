import type { Metadata } from "next";
import { displayFont, bodyFont, monoFont } from "@/lib/fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
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
  },
};

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
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
