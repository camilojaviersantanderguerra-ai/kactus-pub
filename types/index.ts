export interface NavLink {
  label: string;
  href: string;
}

export type CTAVariant = "gold" | "outline-green" | "outline-purple";

export interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: CTAVariant;
  className?: string;
}
