import Image from "next/image";

type EtiquetaIconeProps = {
  className?: string;
};

/**
 * Ícone chapéu + fouet como etiqueta espresso arredondada (spec §1, Opção A).
 * O fundo #2B1A14 casa com o preto do JPEG e o `screen` da imagem apaga a
 * chapa; uso único, no cabeçalho de Produtos. Decorativo: alt vazio +
 * aria-hidden.
 */
export default function EtiquetaIcone({
  className = "",
}: EtiquetaIconeProps) {
  return (
    <span
      className={`etiqueta-icone shrink-0 ${className}`}
      aria-hidden="true"
    >
      <span className="crop crop-icon block w-[88px] shrink-0 md:w-[128px]">
        <Image
          src="/img/kamalu-icone.jpg"
          alt=""
          width={500}
          height={500}
          sizes="(min-width: 768px) 128px, 88px"
        />
      </span>
    </span>
  );
}
