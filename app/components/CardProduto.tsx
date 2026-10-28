import type { Produto } from "../content";

type CardProdutoProps = {
  produto: Produto;
};

export default function CardProduto({ produto }: CardProdutoProps) {
  return (
    <article className="group flex h-full flex-col rounded-[2px] border border-line border-t-2 border-t-caramel bg-paper p-8 transition-[transform,border-color] duration-[180ms] ease-out hover:-translate-y-0.5 hover:border-caramel focus-within:outline focus-within:outline-2 focus-within:outline-offset-[3px] focus-within:outline-magenta">
      <span
        aria-hidden="true"
        className="mb-6 block text-label text-caramel uppercase"
      >
        {produto.numero}
      </span>

      <h3 className="font-display text-display-md font-semibold text-ink">
        {produto.titulo}
      </h3>

      <p className="mt-3 text-body text-ink">{produto.descricao}</p>

      <a
        href={produto.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Pedir ${produto.titulo} pelo WhatsApp com a Janaína (nova aba)`}
        className="mt-8 inline-flex min-h-11 items-center gap-1.5 self-start whitespace-nowrap text-[0.8125rem] font-bold text-wine hover:text-wine md:mt-auto"
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
