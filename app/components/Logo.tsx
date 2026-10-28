import Image from "next/image";

type LogoProps = {
  /** Alt do logo; no footer, use "" (decorativo). */
  alt: string;
  className?: string;
};

/**
 * Logo do monograma. Só existe sobre espresso: o filtro + screen transforma
 * o traço cinza-escuro em creme e anula o fundo preto do JPEG (spec §1).
 * A largura vem por classe (180px hero / 120px footer).
 */
export default function Logo({ alt, className = "" }: LogoProps) {
  return (
    <div
      className={`logo-plate ${className}`}
      aria-hidden={alt === "" ? "true" : undefined}
    >
      <div className="crop crop-logo">
        <Image
          src="/img/kamalu-logo.jpg"
          alt={alt}
          width={500}
          height={500}
          priority
          sizes="(min-width: 768px) 364px, 267px"
        />
      </div>
    </div>
  );
}
