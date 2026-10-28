import Botao from "./components/Botao";
import CardProduto from "./components/CardProduto";
import Hero from "./components/Hero";
import Label from "./components/Label";
import Logo from "./components/Logo";
import Reveal from "./components/Reveal";
import Section from "./components/Section";
import Selo from "./components/Selo";
import {
  comoEncomendar,
  contato,
  contatoFinal,
  diferenciais,
  footer,
  produtos,
  sobre,
} from "./content";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  name: "Kamalu Padaria e Confeitaria",
  telephone: "+5542999816629",
  description:
    "Salgados, bolos, docinhos e tortas por encomenda. Atendimento direto no WhatsApp.",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD fixo, sem entrada do usuário.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        <Hero />

        {/* Sobre */}
        <Section id="sobre" tom="paper">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-6">
            <div className="lg:col-span-7">
              <Reveal>
                <Label>{sobre.label}</Label>
              </Reveal>

              <Reveal delay={1}>
                <h2 className="mt-6 max-w-[560px] text-balance font-display text-display-lg font-semibold text-ink">
                  {sobre.titulo}
                </h2>
              </Reveal>

              <Reveal delay={2}>
                <div className="mt-6 max-w-[560px] space-y-4 text-body text-ink">
                  {sobre.paragrafos.map((paragrafo) => (
                    <p key={paragrafo}>{paragrafo}</p>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal
              delay={2}
              className="lg:col-span-4 lg:col-start-9 lg:self-end"
            >
              <div className="flex flex-wrap gap-3 text-ink lg:flex-col lg:items-start">
                {sobre.selos.map((selo) => (
                  <Selo key={selo}>{selo}</Selo>
                ))}
              </div>
            </Reveal>
          </div>
        </Section>

        {/* Produtos */}
        <Section id="produtos" tom="butter" pattern="papel">
          <Reveal>
            <Label>{produtos.label}</Label>
          </Reveal>

          <Reveal delay={1}>
            <h2 className="mt-6 max-w-[560px] text-balance font-display text-display-lg font-semibold text-ink">
              {produtos.titulo}
            </h2>
            <p className="mt-3 max-w-[560px] text-body text-ink">
              {produtos.apoio}
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {produtos.itens.map((produto, indice) => (
              <Reveal
                key={produto.numero}
                delay={indice % 4}
                className="h-full"
              >
                <CardProduto produto={produto} />
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Por que Kamalu */}
        <Section id="diferenca" tom="ink">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-6">
            <div className="lg:col-span-4">
              <Reveal>
                <Label className="text-butter">{diferenciais.label}</Label>
              </Reveal>
              <Reveal delay={1}>
                <h2 className="mt-6 text-balance font-display text-display-lg font-semibold text-paper">
                  {diferenciais.titulo}
                </h2>
              </Reveal>
            </div>

            <ul className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:col-span-8">
              {diferenciais.itens.map((item, indice) => (
                <li key={item.titulo}>
                  <Reveal delay={indice}>
                    <div className="border-t border-[#F6E7C8]/[0.18] pt-5">
                      <h3 className="font-display text-display-md font-semibold text-paper">
                        {item.titulo}
                      </h3>
                      <p className="mt-2 text-body text-butter">
                        {item.descricao}
                      </p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* Como encomendar */}
        <Section id="como-encomendar" tom="paper">
          <Reveal>
            <Label>{comoEncomendar.label}</Label>
          </Reveal>

          <Reveal delay={1}>
            <h2 className="mt-6 text-balance font-display text-display-lg font-semibold text-ink">
              {comoEncomendar.titulo}
            </h2>
            <p className="mt-3 max-w-[560px] text-[0.875rem] leading-[1.6] text-ink/80">
              {comoEncomendar.nota}
            </p>
          </Reveal>

          <ol className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-0 lg:divide-x lg:divide-[#2B1A14]/[0.14]">
            {comoEncomendar.passos.map((passo, indice) => (
              <li
                key={passo.numero}
                className="lg:px-8 lg:first:pl-0 lg:last:pr-0"
              >
                <Reveal delay={indice}>
                  <span
                    aria-hidden="true"
                    className="block font-display text-[2rem] font-semibold leading-none text-caramel"
                  >
                    {passo.numero}
                  </span>
                  <h3 className="mt-4 font-display text-display-md font-semibold text-ink">
                    {passo.titulo}
                  </h3>
                  <p className="mt-2 max-w-[320px] text-body text-ink">
                    {passo.descricao}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </Section>

        {/* Contato / CTA final */}
        <section className="relative overflow-hidden bg-wine text-paper">
          <div
            aria-hidden="true"
            className="pattern-arcos absolute inset-x-0 bottom-0 h-24"
          />
          <div className="relative mx-auto max-w-[640px] px-5 py-16 text-center md:px-10 md:py-24">
            <Reveal>
              <h2 className="text-balance font-display text-display-lg font-semibold text-paper">
                {contatoFinal.titulo}
              </h2>
            </Reveal>

            <Reveal delay={1}>
              <p className="mx-auto mt-4 max-w-[520px] text-body-lg text-butter">
                {contatoFinal.subhead}
              </p>
            </Reveal>

            <Reveal delay={2} className="mt-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Botao
                  href={contato.whatsappHero}
                  variante="primarioEscuro"
                  className="w-full sm:w-auto"
                >
                  {contatoFinal.ctaPrimario}
                </Botao>
                <Botao
                  href={contato.telefoneHref}
                  variante="secundarioClaro"
                  className="w-full sm:w-auto"
                >
                  {contato.telefoneExibicao}
                </Botao>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="relative bg-ink text-butter">
        <div className="mx-auto w-full max-w-[1120px] px-5 py-16 md:px-10 md:py-24">
          <div className="grid gap-10 md:grid-cols-3">
            <Logo alt="" className="w-[120px]" />

            <nav aria-label="Links do rodapé">
              <ul className="flex flex-col gap-3">
                {footer.links.map((link) => (
                  <li key={link.rotulo}>
                    <a
                      href={link.href}
                      className="link-sublinhado inline-flex min-h-11 items-center text-body text-butter hover:text-paper"
                      {...("externo" in link && link.externo
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {link.rotulo}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center text-body">
              <a
                href={contato.telefoneHref}
                className="link-sublinhado inline-flex min-h-11 items-center text-butter hover:text-paper"
              >
                (42) 99981-6629
              </a>
              <span className="ml-1">· Janaína</span>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-2 border-t border-[#F6E7C8]/[0.18] pt-6 text-caption text-butter md:flex-row md:items-center md:justify-between">
            <p>{footer.marca}</p>
            <p>{footer.copyright}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
