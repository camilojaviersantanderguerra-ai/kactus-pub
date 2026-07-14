import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fondo
        base: {
          DEFAULT: "#0B0B0D", // negro grafito — fondo principal
          soft: "#141417", // gris grafito — fondo secundario / cards
        },
        // Acentos neón
        neon: {
          green: "#39FF88",
          purple: "#B84DFF",
        },
        // Acento cálido — reservado para CTAs principales
        gold: {
          DEFAULT: "#D4AF37",
          hover: "#E4C158",
        },
        // Texto
        ink: {
          DEFAULT: "#F5F3EF", // texto principal
          muted: "#8E8E93", // texto secundario
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        "glow-green": "0 0 24px 0 rgba(57, 255, 136, 0.35)",
        "glow-purple": "0 0 24px 0 rgba(184, 77, 255, 0.35)",
        "glow-gold": "0 0 24px 0 rgba(212, 175, 55, 0.35)",
      },
      backgroundImage: {
        "neon-gradient": "linear-gradient(90deg, #39FF88 0%, #B84DFF 100%)",
      },
      borderColor: {
        hairline: "rgba(255, 255, 255, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
