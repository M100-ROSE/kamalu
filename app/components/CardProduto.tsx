import type { Produto } from "../content";
import IlustracaoProduto from "./IlustracaoProduto";

type CardProdutoProps = {
  produto: Produto;
};

export default function CardProduto({ produto }: CardProdutoProps) {
  return (
    <article className="group flex h-full flex-col items-stretch rounded-[2px] border border-line border-t-2 border-t-caramel bg-paper p-6 transition-[transform,border-color] duration-[180ms] ease-out hover:-translate-y-0.5 hover:border-caramel focus-within:outline focus-within:outline-2 focus-within:outline-offset-[3px] focus-within:outline-magenta md:min-h-[248px] lg:p-8">
      <div className="mb-4 flex min-h-14 items-center justify-between gap-4">
        <span
          aria-hidden="true"
          className="block text-label text-caramel uppercase"
        >
          {produto.numero}
        </span>
        <IlustracaoProduto tipo={produto.ilustracao} />
      </div>

      <h3 className="font-display text-display-md font-semibold text-ink">
        {produto.titulo}
      </h3>

      <p className="mt-3 text-body text-ink">{produto.descricao}</p>

      <a
        href={produto.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Pedir ${produto.titulo} pelo WhatsApp com a Janaína (nova aba)`}
        className="mt-auto inline-flex min-h-11 items-center gap-1.5 self-start whitespace-nowrap pt-8 text-[0.8125rem] font-bold text-wine hover:text-wine"
      >
        <span className="link-sublinhado">Pedir pelo WhatsApp</span>
        <span
          aria-hidden="true"
          className="transition-transform duration-[160ms] ease-out group-hover:translate-x-0.5"
        >
          ↗
        </span>
      </a>
    </article>
  );
}
