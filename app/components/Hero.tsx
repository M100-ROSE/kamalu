import { contato, hero } from "../content";
import Botao from "./Botao";
import Label from "./Label";
import Logo from "./Logo";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div aria-hidden="true" className="pattern-pontos absolute inset-0" />

      <div className="relative mx-auto flex min-h-[86svh] w-full max-w-[1120px] flex-col px-5 md:min-h-[88vh] md:px-10">
        <div className="flex flex-1 flex-col items-center justify-center py-16 text-center md:py-20">
          <Reveal>
            <Logo
              alt={hero.logoAlt}
              className="mx-auto w-[132px] md:w-[180px]"
            />
          </Reveal>

          <Reveal delay={1} className="mt-10 w-full">
            <Label alinhamento="centro" className="text-butter">
              {hero.label}
            </Label>
          </Reveal>

          <Reveal delay={2} className="w-full">
            <h1 className="mx-auto mt-6 max-w-[720px] text-balance font-display text-display-xl font-semibold text-paper">
              {hero.titulo}
            </h1>
          </Reveal>

          <Reveal delay={3} className="w-full">
            <p className="mx-auto mt-5 max-w-[600px] text-body-lg text-butter">
              {hero.subhead}
            </p>
          </Reveal>

          <Reveal delay={4} className="mt-8 w-full">
            <div className="flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
              <Botao
                href={contato.whatsappHero}
                variante="primarioEscuro"
                className="w-full sm:w-auto"
              >
                {hero.ctaPrimario}
              </Botao>
              <Botao
                href="#produtos"
                variante="secundarioClaro"
                className="w-full sm:w-auto"
              >
                {hero.ctaSecundario}
              </Botao>
            </div>
          </Reveal>
        </div>

        <ul className="grid grid-cols-1 gap-3 border-t border-[#F6E7C8]/[0.18] py-6 text-caption text-butter md:grid-cols-3 md:gap-6 md:text-center">
          {hero.fatos.map((fato) => (
            <li key={fato}>{fato}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
