"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

/** Devuelve la fecha del próximo sábado a las 23:00 (hora de apertura). */
function getNextSaturday(): Date {
  const now = new Date();
  const day = now.getDay(); // 0 = domingo ... 6 = sábado
  const daysUntilSaturday = (6 - day + 7) % 7;

  const target = new Date(now);
  target.setDate(now.getDate() + daysUntilSaturday);
  target.setHours(23, 0, 0, 0);

  // Si ya es sábado pero pasó la hora de apertura, apunta al sábado siguiente
  if (target.getTime() <= now.getTime()) {
    target.setDate(target.getDate() + 7);
  }

  return target;
}

function getTimeLeft(target: Date): TimeLeft {
  const diff = Math.max(target.getTime() - Date.now(), 0);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const units: { key: keyof TimeLeft; label: string }[] = [
  { key: "days", label: "Días" },
  { key: "hours", label: "Horas" },
  { key: "minutes", label: "Min" },
  { key: "seconds", label: "Seg" },
];

/**
 * Countdown en vivo hacia el próximo sábado. Se calcula en el cliente
 * (useEffect) para evitar desajustes de hidratación entre servidor y
 * navegador; en el primer render server-side muestra 00:00:00:00.
 */
export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const target = getNextSaturday();
    setTimeLeft(getTimeLeft(target));

    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(target));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-3 sm:gap-4">
      {units.map(({ key, label }) => (
        <div
          key={key}
          className="flex w-16 flex-col items-center gap-2 rounded-2xl border border-hairline bg-base-soft px-2 py-4 sm:w-20"
        >
          <motion.span
            key={mounted ? timeLeft[key] : `${key}-initial`}
            initial={{ opacity: 0, y: 10, scale: 0.94, filter: "blur(2px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-2xl font-bold text-neon-green text-glow-green sm:text-3xl"
          >
            {String(mounted ? timeLeft[key] : 0).padStart(2, "0")}
          </motion.span>
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink-muted sm:text-[10px]">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
