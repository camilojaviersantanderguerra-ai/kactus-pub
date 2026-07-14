export interface DecadeItem {
  decade: string;
  /** Numeral corto para el fondo tipográfico fantasma de la card (ej. "80", "00") */
  ghost: string;
  description: string;
  accent: "purple" | "green" | "gold";
}

export const decades: DecadeItem[] = [
  {
    decade: "80's",
    ghost: "80",
    description: "Synth pop, rock ochentero y los himnos que nunca pasan de moda.",
    accent: "purple",
  },
  {
    decade: "90's",
    ghost: "90",
    description: "Grunge, dance y los clásicos que marcaron una generación.",
    accent: "green",
  },
  {
    decade: "2000's",
    ghost: "00",
    description: "Pop, reggaetón old school y los hits que todos cantan.",
    accent: "gold",
  },
];

export interface EventFeature {
  label: string;
}

export const eventFeatures: EventFeature[] = [
  { label: "DJ en vivo" },
  { label: "Amplia pista de baile" },
  { label: "Excelente ambiente" },
  { label: "Zona de fumadores" },
];
