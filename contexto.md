# Contexto do Projeto — Kamalu

## Preferências

- Idioma de trabalho e dos documentos: **português do Brasil**.
- Formato de entrega pedido pelo cliente para o briefing: **documento Markdown** (não página web).
- Tom: conforto e nostalgia de infância, mas leve — sem infantilizar a marca.
- Nunca commitar `.opencode/`, segredos, `.env`, artefatos de build ou temporários.

## Estado atual

### Objetivo do projeto

Criar o **briefing de marca** de uma confeitaria/panificadora de festa — salgados de festa
(coxinha, risole, empada, mini pastel), bolos de festa e de corte, docinhos de bandeja e
tortas geladas/assadas — com posicionamento de "confeitaria de festa com alma de padaria
de bairro, executada com precisão de ateliê". O documento serve de guia único para
identidade visual, embalagem, fotografia, tom de voz e comunicação.

### O que é a marca

Negócio de **encomenda + balcão**, atendimento por WhatsApp, decisão de compra movida por
foto de bandeja cheia e preço por cento. Público principal: organizadora de festa (30–45),
aniversariante adulta (28–40) e comprador de última hora (25–50). Promessa proposta:
_"A festa que lembra a infância de alguém — feita hoje, do jeito certo."_ (não oficial).

### Decisões de design tomadas

**Paleta oficial — "Manteiga & Vinho" (padrão):**

| Nome | HEX | Papel | Proporção |
|---|---|---|---|
| Manteiga | `#F6E7C8` | fundo principal | 60% |
| Off-white | `#FFFDF8` | respiro, cartão | (nos 60%) |
| Vinho | `#5E1B2C` | destaque, faixas | 25% |
| Espresso | `#2B1A14` | texto, logo | 5% |
| Magenta fouet | `#E6186B` | acento (selo, laço) | 7% (≤10%) |
| Caramelo | `#C08552` | ilustração, filete | 3% |

- Alternativa **C (Creme & Tinta)** fica como versão institucional (papelaria, fachada, sacola).
- Alternativa **B (Rosé empoeirado & Cacau)** descartada como padrão.

**Tipografia:** par padrão **Fraunces 600/700 (display) + Karla 400/500 (texto)**, com Karla 700
em caixa alta para apoio. Alternativas mapeadas: Cormorant Garamond + Jost; Libre Caslon Display + Manrope.

**Hierarquia logo × ícone:** o monograma "k" caligráfico com o lettering PADARIA/CONFEITARIA
é o **logo principal e manda na peça** — arquivo fechado, não redesenhar, não recolorir em
magenta. O ícone do chapéu de chef com fouet magenta é **secundário**: selo, avatar, adesivo,
aba de caixa. O magenta é tempero, nunca fundo chapado grande.

**Direção de arte:** luz natural lateral, sombra longa e macia, fundo manteiga ou off-white,
props de papel-manteiga/cerâmica creme/linho cru, grão fino visível; mãos sim, rosto em close não.
Proibido: fundo branco infinito, rosa-bebê, confete, sprinkles, gradiente dourado, mascote.

### Estrutura do repositório

```
kamalu/
├── briefing.md              # Briefing de marca completo (~1.400 palavras, 13 seções)
├── contexto.md              # Este arquivo: memória e histórico do projeto
├── design/
│   └── especificacao-site.md  # Spec do site one-page (7 seções): assets, seções, paleta, tipografia, a11y, SEO
├── app/                     # Site Next.js 15 (App Router, TS, Tailwind v4)
│   ├── layout.tsx           # Fontes (Fraunces + Karla), metadata/OpenGraph, lang pt-BR, noscript do reveal
│   ├── page.tsx             # One-page + JSON-LD "Bakery"
│   ├── globals.css          # Tokens da paleta Manteiga & Vinho, tratamentos .logo-plate/.crop/.etiqueta-icone
│   ├── content.ts           # Todo o texto do site, contato e links de WhatsApp (fonte única)
│   ├── icon.png             # gerado por scripts/gerar-icones.mjs (512px)
│   ├── apple-icon.png       # gerado por scripts/gerar-icones.mjs (180px)
│   └── components/          # Botao, CardProduto, EtiquetaIcone, Hero, Label, Logo, Reveal, Section, Selo
├── public/img/
│   ├── kamalu-logo.jpg      # cópia do logo para o site
│   └── kamalu-icone.jpg     # cópia do ícone para o site
├── scripts/
│   └── gerar-icones.mjs     # recorta o ícone do JPEG preto e gera app/icon.png + app/apple-icon.png
├── img/                     # ORIGINAIS intocados
│   ├── WhatsApp Image 2026-10-27 at 21.56.56 (1).jpeg   # Logo: monograma k + PADARIA/CONFEITARIA
│   └── WhatsApp Image 2026-10-27 at 21.56.56.jpeg       # Ícone: chapéu de chef + fouet magenta
├── next.config.ts / tsconfig.json / postcss.config.mjs / .eslintrc.json
├── package.json / package-lock.json
└── .gitignore               # Ignora .opencode/, .next/, out/, next-env.d.ts, *.tsbuildinfo
```

As imagens são referenciadas no `briefing.md` por caminho relativo (`img/...`).

### Site institucional (one-page)

- **Stack:** Next.js 15.5.28 (App Router) + React 19 + TypeScript + Tailwind CSS v4 (`@tailwindcss/postcss`), sem banco, sem CMS, sem carrinho. `sharp` só como devDependency para gerar ícones.
- **Objetivo único:** levar ao WhatsApp com o pedido já iniciado. Quatro cards de produto, cada um com deep link `wa.me` com mensagem pré-preenchida por categoria.
- **Seções:** Hero (fundo espresso) → Sobre → Produtos → Por que Kamalu (fundo espresso) → Como encomendar → CTA final → Footer. Sem header fixo; nav reside no rodapé.
- **Decisões visuais:** paleta Manteiga & Vinho aplicada em tokens; Fraunces 600/700 + Karla 400/500/700 via `next/font/google`; JPEGs de fundo preto tratados com `mix-blend-mode: screen` (+ filtro no logo) em vez de recorte/PNG; selo do ícone virou pill espresso (`.etiqueta-icone`, raio 999px) em vez de chapa preta; logo sem cast esverdeado (filtro ajustado para `#EDDFC1`).
- **Movimento e a11y:** reveal no scroll com fallback em `<noscript>`; contraste conferido, foco visível, `lang="pt-BR"`, textos alternativos.
- **SEO:** title/description/OpenGraph em `app/layout.tsx`, `themeColor #2B1A14`, JSON-LD `Bakery` com nome e telefone.
- **Textos:** nenhum placeholder `[CONFIRMAR]` — o que não foi confirmado pelo cliente simplesmente não aparece na tela (ver pendências).

**Como rodar:**

```bash
npm install
npm run dev      # desenvolvimento em http://localhost:3000
npm run build    # build de produção (passa com lint + tipos)
npm run start    # serve o build
npm run lint     # eslint .
npm run icones   # regenera app/icon.png e app/apple-icon.png a partir de public/img/kamalu-icone.jpg
```

## Histórico

### 2026-10-27 — Briefing de marca da confeitaria e panificadora

**Solicitação original:** briefing de marca em Markdown (formato escolhido explicitamente pelo
cliente, não página web) para confeitaria/panificadora de festa, com sentimento de conforto e
infância, leve e não infantil.

**O que foi feito:**
1. Monica pesquisou referências de marca e mercado (Poilâne, Levain, Tartine, Confeitaria Colombo,
   Benjamin Padaria, Dominique Ansel, Chip NYC), direções de paleta, pares de fontes do Google
   Fonts e tendências 2024–2026.
2. Day redigiu `briefing.md` (~1.400 palavras) resolvendo a tensão entre o logo escuro e o ícone
   magenta, com paleta oficial, tipografia, uso dos assets, direção de arte, tom de voz,
   aplicações e pendências.
3. Bebell revisou o arquivo: estrutura completa, 13 seções, imagens da pasta `img/` referenciadas
   por caminho relativo — sem imagens quebradas.
4. Dakota (esta etapa) registrou o contexto no repositório e versionou o material.

**Arquivos alterados:**
- `briefing.md` (novo)
- `img/WhatsApp Image 2026-10-27 at 21.56.56 (1).jpeg` (novo)
- `img/WhatsApp Image 2026-10-27 at 21.56.56.jpeg` (novo)
- `contexto.md` (novo)
- `.gitignore` (novo)

**Pendências (aguardando cliente):**
- [ ] Nome oficial da marca (nota fiscal, redes sociais)
- [ ] O que o "k" do monograma significa
- [ ] Ano de fundação / "desde 19xx"
- [ ] Slogan oficial — a promessa do briefing é proposta, não aprovada
- [ ] O magenta `#E6186B` é inegociável? (se sim, permanece em acento ≤10%)
- [ ] Vetores do logo e do ícone (AI/SVG/PDF) — JPEG não serve para grande formato

**Pendências internas:**
- [ ] Aprovar paleta A como oficial e definir quando usar a variante C (institucional)
- [ ] Confirmar se "Chip NYC" entra na lista final de referências do documento

### 2026-10-27 — Site institucional em Next.js para a Kamalu

**Solicitação original:** o cliente confirmou o nome **Kamalu** (padaria e confeitaria) e passou o
contato **+55 (42) 99981-6629 — Janaína**. Pediu um **site em Next.js** usando o briefing de marca
já aprovado, para apresentar a marca e levar o pedido direto ao WhatsApp.

**O que foi feito:**
1. Day escreveu `design/especificacao-site.md` (7 seções): leitura técnica dos assets (logo com
   fundo 97,4% preto e traço cinza `#3E3F3C`; ícone com fundo preto e fouet `#FF2675`), ordem das
   seções, paleta "Manteiga & Vinho", par tipográfico Fraunces + Karla, tratamento dos JPEGs de
   fundo preto, acessibilidade e SEO.
2. Anna implementou o site one-page em Next.js 15.5.28 (App Router, TypeScript, Tailwind v4):
   Hero, Sobre, Produtos (4 cards com deep link de WhatsApp por produto), Por que Kamalu, Como
   encomendar, CTA final e Footer. Rodapé faz o papel de navegação — **sem header fixo**;
   animação de reveal no scroll; JSON-LD `Bakery`; favicons/ícones gerados por
   `scripts/gerar-icones.mjs`; imagens copiadas para `public/img/`, mantendo os originais em `img/`.
3. Bebell revisou com screenshots (headless Chrome) e pediu duas correções de design: o selo do
   ícone virou **pill espresso** (`.etiqueta-icone`, raio 999px) e o logo perdeu o **cast
   esverdeado** (filtro levando o traço a `#EDDFC1`). Também exigiu a remoção de todos os
   placeholders `[CONFIRMAR]` que apareciam na tela.
4. Dakota (esta etapa) conferiu o estado real (`git status`, `git diff`), rodou `npm run lint` e
   `npm run build` (ambos limpos), confirmou que o HTML gerado não contém `[CONFIRMAR]`, registrou
   o contexto e versionou a entrega.

**Decisões registradas:**
- Paleta "Manteiga & Vinho" como oficial: Manteiga `#F6E7C8` (60%), Off-white `#FFFDF8`, Vinho
  `#5E1B2C` (25%), Espresso `#2B1A14` (5%), Magenta fouet `#E6186B` (7%, só acento), Caramelo
  `#C08552` (3%). O magenta permanece tempero, nunca fundo chapado grande.
- Tipografia: **Fraunces** 600/700 no display e **Karla** 400/500 (700 em caixa alta para apoio),
  carregadas via `next/font/google` com `display: swap` e variáveis CSS.
- Tratamento dos JPEGs de fundo preto: `mix-blend-mode: screen` sobre espresso, sem recorte e sem
  PNG; o preto do arquivo se anula no fundo. Logo **só sobre espresso** (nunca em fundo claro);
  ícone em fundo claro aparece uma única vez, dentro da pill espresso.
- Selo do ícone = pill espresso, não chapa preta.
- Logo sem cast esverdeado: `grayscale(1) sepia(1) brightness(2.9) saturate(.6)`, traço em
  `#EDDFC1`; `contrast(1.1)` no rodapé em tamanho pequeno se o lettering apagar.
- Textos finais sem placeholder: o que o cliente não confirmou (endereço, horário, Instagram)
  simplesmente não aparece na página. Todo o copy vive em `app/content.ts`.
- Contato único e canônico: `wa.me/5542999816629`, `tel:+5542999816629`, exibição
  `(42) 99981-6629`, atendimento com a Janaína.

**Arquivos alterados:**
- `design/especificacao-site.md` (novo)
- `app/layout.tsx`, `app/page.tsx`, `app/globals.css`, `app/content.ts` (novos)
- `app/icon.png`, `app/apple-icon.png` (novos, gerados)
- `app/components/Botao.tsx`, `CardProduto.tsx`, `EtiquetaIcone.tsx`, `Hero.tsx`, `Label.tsx`,
  `Logo.tsx`, `Reveal.tsx`, `Section.tsx`, `Selo.tsx` (novos)
- `public/img/kamalu-logo.jpg`, `public/img/kamalu-icone.jpg` (novos — cópias de `img/`)
- `scripts/gerar-icones.mjs` (novo)
- `package.json`, `package-lock.json`, `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`,
  `.eslintrc.json` (novos)
- `.gitignore` (alterado: `.next/`, `out/`, `next-env.d.ts`, `*.tsbuildinfo`, `.eslintcache`)
- `contexto.md` (alterado)

**Pendências (aguardando cliente):**
- [ ] Domínio oficial (e apontamento de DNS)
- [ ] Endereço e local de retirada
- [ ] Horário de funcionamento
- [ ] Instagram (perfil oficial)
- [ ] CNPJ / razão social para o rodapé e o JSON-LD
- [ ] `og:image` 1200×630 (hoje o OpenGraph vai sem imagem)
- [ ] Campos faltantes do JSON-LD `Bakery`: `address`, `openingHoursSpecification`, `url`,
      `image`, `sameAs` (Instagram), `priceRange`
- [ ] Vetores AI/SVG do logo e do ícone — JPEG não serve para grande formato nem para o favicon definitivo

**Pendências internas:**
- [ ] Regerar `app/icon.png` e `app/apple-icon.png` (`npm run icones`) quando chegarem os vetores
- [ ] Substituir as cópias JPEG de `public/img/` por PNG/SVG quando houver arquivo fechado

## Modelo para novas entradas

```markdown
### AAAA-MM-DD — Título curto da tarefa

**Solicitação original:** (resumo fiel do pedido)

**O que foi feito:**
1. ...
2. ...

**Arquivos alterados:**
- `caminho/arquivo` (novo | alterado | removido)

**Pendências:**
- [ ] ...
```
