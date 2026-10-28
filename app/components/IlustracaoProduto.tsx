import type { ReactNode } from "react";

/**
 * Ilustrações de produto (spec §4 e §5).
 *
 * Sistema: viewBox 48×48, área viva 6–42, traço 1.75 em `currentColor`,
 * uma única "massa" fechada em `#C08552` por desenho, no máximo 5 elementos.
 * Sem rosto, laço, confete, fita, hachura, opacidade, gradiente, sombra ou
 * texto. Decorativas: `aria-hidden` + `focusable="false"`.
 */

export type TipoIlustracao =
  | "salgados"
  | "bolos"
  | "docinhos"
  | "tortas"
  | "paoDeQueijo"
  | "paes"
  | "cucas"
  | "kits";

const desenhos: Record<TipoIlustracao, ReactNode> = {
  // 01 — coxinha: silhueta, dobras do ápice em chevron e base do recheio (sem massa)
  salgados: (
    <>
      <path d="M24 9C28 14 36 21 36 27a12 12 0 0 1-24 0c0-6 8-13 12-18Z" />
      <path d="M20 21 24 16.5" />
      <path d="M28 21 24 16.5" />
      <path d="M18 32h12" />
    </>
  ),

  // 02 — bolo de três andares; massa no andar do meio (recuado 1u)
  bolos: (
    <>
      <rect x="12" y="22" width="24" height="7" rx="2" fill="#C08552" />
      <rect x="9" y="30" width="30" height="12" rx="2" />
      <rect x="14" y="14" width="20" height="7" rx="2" />
      <path d="M14 18Q16.5 23 19 18Q21.5 23 24 18" />
      <circle cx="24" cy="9" r="2.5" />
    </>
  ),

  // 03 — brigadeiro em forminha: bola com massa, borda e copo da forminha
  docinhos: (
    <>
      <circle cx="24" cy="23" r="8" fill="#C08552" />
      <path d="M16 30h16" />
      <path d="M17 30l1.5 7h11l1.5-7" />
    </>
  ),

  // 04 — torta baixa, recheio à vista (massa recuada 2u no corpo)
  tortas: (
    <>
      <rect x="12" y="31" width="24" height="4" fill="#C08552" />
      <path d="M6 37h36" />
      <path d="M10 29h28v8H10Z" />
      <path d="M12 29q4-4 8 0t8 0t8 0" />
    </>
  ),

  // 05 — três pães de queijo; massa na elipse central
  paoDeQueijo: (
    <>
      <ellipse cx="24" cy="22" rx="6" ry="5" fill="#C08552" />
      <ellipse cx="17" cy="32" rx="6" ry="5" />
      <ellipse cx="31" cy="32" rx="6" ry="5" />
      <path d="M21 21.6 23.2 19.4" />
      <path d="M24.8 22.2 27 20" />
    </>
  ),

  // 06 — pão comprido com três talhos longos (sem massa)
  paes: (
    <>
      <rect x="7" y="23" width="34" height="10" rx="5" />
      <path d="M15 30 19.5 25.5" />
      <path d="M23 30 27.5 25.5" />
      <path d="M31 30 35.5 25.5" />
    </>
  ),

  // 07 — cuca: corpo, farofa de 3 ondulações largas, corte e tábua
  cucas: (
    <>
      <path d="M10 30h28v6H10Z" />
      <path d="M10 30q4.7-6 9.4 0t9.4 0t9.2 0" />
      <path d="M30 30v6" />
      <path d="M7 36h34" />
    </>
  ),

  // 08 — caixa de kit com tampa e alça (sem massa)
  kits: (
    <>
      <path d="M10 28h28l-4 12H14Z" />
      <rect x="6" y="23" width="36" height="5" rx="1" />
      <path d="M18 23A6 8 0 0 1 30 23" />
    </>
  ),
};

type IlustracaoProdutoProps = {
  tipo: TipoIlustracao;
  className?: string;
};

export default function IlustracaoProduto({
  tipo,
  className = "",
}: IlustracaoProdutoProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-11 w-11 shrink-0 text-wine transition-[color] duration-[160ms] ease-out group-hover:text-ink md:h-12 md:w-12 lg:h-14 lg:w-14 ${className}`}
    >
      {desenhos[tipo]}
    </svg>
  );
}
