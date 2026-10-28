import type { ReactNode } from "react";

type Variante = "primario" | "primarioEscuro" | "secundario" | "secundarioClaro";

type BotaoProps = {
  href: string;
  children: ReactNode;
  variante?: Variante;
  className?: string;
  "aria-label"?: string;
};

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-[2px] px-6 py-3.5 text-center font-sans text-xs font-bold uppercase tracking-[0.12em] transition-[background-color,box-shadow,color] duration-[120ms] ease-out";

const variantes: Record<Variante, string> = {
  primario:
    "bg-wine text-paper shadow-[4px_4px_0_0_#2b1a14] hover:bg-wine-deep hover:shadow-[2px_2px_0_0_#2b1a14]",
  primarioEscuro:
    "bg-butter text-ink shadow-[4px_4px_0_0_#2b1a14] hover:bg-paper hover:shadow-[2px_2px_0_0_#2b1a14]",
  secundario: "border border-wine text-wine hover:bg-butter",
  secundarioClaro: "border border-butter/70 text-paper hover:bg-butter hover:text-ink",
};

export default function Botao({
  href,
  children,
  variante = "primario",
  className = "",
  "aria-label": ariaLabel,
}: BotaoProps) {
  const externo = href.startsWith("http");

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={`${base} ${variantes[variante]} ${className}`}
      {...(externo
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </a>
  );
}
