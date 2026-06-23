import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "gold" | "outline" | "ghost" | "light";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-700 text-white hover:bg-brand-800 focus-visible:outline-brand-700 shadow-soft",
  gold: "bg-gold-400 text-brand-950 hover:bg-gold-300 focus-visible:outline-gold-500 shadow-soft",
  outline:
    "border border-brand-200 bg-white text-brand-800 hover:border-brand-400 hover:bg-brand-50 focus-visible:outline-brand-600",
  ghost: "text-brand-700 hover:bg-brand-50 focus-visible:outline-brand-600",
  light:
    "bg-white text-brand-800 hover:bg-brand-50 focus-visible:outline-white shadow-soft",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60";

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  ...rest
}: CommonProps & {
  href?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const classes = `${baseClasses} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    const isInternal = href.startsWith("/");
    if (isInternal) {
      return (
        <Link href={href} className={classes} {...rest}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
