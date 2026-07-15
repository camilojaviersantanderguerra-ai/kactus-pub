import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

/**
 * Encabezado estándar de sección: etiqueta pequeña en mono (kicker),
 * título grande en la display font, y descripción opcional en body font.
 * Reutilizado por Eventos, Galería, Arriendo, Nosotros, FAQ, etc.
 */
export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {kicker && (
        <span className="fluid-eyebrow font-mono text-[11px] uppercase text-neon-green">
          <span className="eyebrow-rule" />
          {kicker}
        </span>
      )}
      <h2 className="fluid-h2 font-display font-bold text-ink">{title}</h2>
      {description && (
        <p className="max-w-2xl font-body text-[1rem] text-ink-muted sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
