export type BeneficioIcon =
  | "sonido"
  | "escenario"
  | "bar"
  | "pista"
  | "fumadores"
  | "banos"
  | "ubicacion"
  | "estacionamiento"
  | "seguridad";

export interface Beneficio {
  label: string;
  icon: BeneficioIcon;
}

export const beneficios: Beneficio[] = [
  { label: "Sonido profesional", icon: "sonido" },
  { label: "Escenario", icon: "escenario" },
  { label: "Bar completamente equipado", icon: "bar" },
  { label: "Amplia pista de baile", icon: "pista" },
  { label: "Patio para fumadores", icon: "fumadores" },
  { label: "Baños", icon: "banos" },
  { label: "Excelente ubicación", icon: "ubicacion" },
  { label: "Estacionamientos cercanos", icon: "estacionamiento" },
  { label: "Ambiente seguro", icon: "seguridad" },
];
