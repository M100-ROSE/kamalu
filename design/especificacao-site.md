# Especificação de site — Kamalu (one-page)

Next.js 15 App Router + TS + Tailwind v4. Sem banco, carrinho ou galeria.
Objetivo único: **levar ao WhatsApp com o pedido iniciado**. Público: 30–45, organiza festa, decide pelo celular. **Posicionamento:** confeitaria de festa com alma de padaria de bairro, precisão de ateliê. **Promessa:** *"A festa que lembra a infância de alguém — feita hoje, do jeito certo."*

## 1. Assets — o que os arquivos realmente são

| Asset | Medição | Consequência |
|---|---|---|
| Logo (500×500) | 97,4% do arquivo é `#000000`; o traço é **cinza-escuro #3E3F3C**. Conteúdo em x117–365, y135–350 (monograma "k" em x192–303, y135–245) | Não existe logo creme. `invert(1)` sozinho cria **retângulo branco**; `screen` cru sobre espresso vira **ciano #5FB0B8** |

O ícone de chapéu + fouet foi **retirado do site**: não existe mais no cabeçalho de Produtos, não existe mais como etiqueta e não é mais o favicon. Nada ocupa o lado direito do cabeçalho de Produtos — o vazio é intencional.

**Logo só sobre espresso `#2B1A14`**, nunca em fundo claro:
```css
.logo-plate{background:#2B1A14;isolation:isolate}
.logo-plate img{filter:grayscale(1) sepia(1) brightness(2.9) saturate(.6);mix-blend-mode:screen}
```
Preto vira preto e o `screen` o anula; o traço sobe para ≈`#EDDFC1`. Se "PADARIA/CONFEITARIA" apagar no Footer (120px), acrescentar `contrast(1.1)` no fim do filtro. Nada além disso no tratamento do logo.

**Recorte sem PNG:** `.crop{position:relative;overflow:hidden}` + `img{position:absolute;max-width:none}`.

| Classe | aspect-ratio | img width | left | top |
|---|---|---|---|---|
| `.crop-logo` | 248/215 | 201,6% | −47,2% | −62,8% |

Só `.crop-logo` permanece: o recorte do Hero/Footer. `.crop-icon` e `.etiqueta-icone` foram removidos do CSS.

**Favicon:** sai do **monograma do logo**, não do ícone (ver §8).

## 2. Ordem das seções

| # | Seção | Papel | Fundo / texto |
|---|---|---|---|
| 1 | Hero | promessa + WhatsApp na dobra | `#2B1A14` / `#FFFDF8` |
| 2 | Sobre | legitimidade pelo método | `#FFFDF8` / `#2B1A14` |
| 3 | Produtos | reconhecimento | `#F6E7C8` / `#2B1A14` |
| 4 | Por que Kamalu | quebra de objeção | `#2B1A14` / `#FFFDF8` |
| 5 | Como encomendar | reduz atrito | `#FFFDF8` / `#2B1A14` |
| 6 | Contato / CTA | fecha | `#5E1B2C` / `#FFFDF8` |
| 7 | Footer | repete o contato | `#2B1A14` / `#F6E7C8` |

"Diferenciais" em escuro separa Produtos de Como encomendar sem criar terceiro fundo.

## 3. Seções

### 3.1 Hero
Desktop: coluna central, texto max 720px, `88vh` (min 640px), centrado; 3 fatos no rodapé com `border-top:1px rgba(246,231,200,.18)`. Mobile: `86svh`, fatos em coluna (gap 12px).
Ordem: logo (180px / 132px mobile) → label → H1 → subhead → CTAs → fatos.

- Label: `PADARIA · CONFEITARIA · ENCOMENDAS`
- **H1:** Bolo alto, bandeja cheia, mesa posta.
- Subhead: Salgados de festa, bolos, docinhos e tortas por encomenda. A festa que lembra a infância de alguém — feita hoje, do jeito certo.
- Primário: **Encomendar no WhatsApp** → `https://wa.me/5542999816629?text=Ol%C3%A1%2C%20Jana%C3%ADna!%20Vim%20pelo%20site%20e%20quero%20fazer%20uma%20encomenda.`
- Secundário: **Ver produtos** → `#produtos`
- Fatos: "Encomenda em qualquer dia" · "Retirada combinada" · "Atendimento direto com a Janaína"

### 3.2 Sobre
Desktop: texto em 7 col, 3 selos empilhados em 4 (base alinhada). Mobile: selos em linha com wrap.

- Label `SOBRE` · **H2:** Padaria de bairro, precisão de ateliê.
- P1: Trabalhamos por encomenda. O que sai daqui foi feito no dia, na medida que você pediu — nem sobra, nem falta.
- P2: A receita é de casa. O método é de ateliê: peso na balança, tempo no forno, temperatura anotada.
- Selos (borda 1px, sem fill): "Assado no dia" · "Peso conferido" · "Encomenda com nome e hora"

### 3.3 Produtos
Grid de 8 cards: 1 coluna (<768px), 2 (768–1023), 3 (1024–1279), 4 (≥1280). Gap 24px (16px <768px), cards de altura igual (`stretch`). Ordem mobile 01→08, sem reordenar.
Cabeçalho: label `O QUE SAI DA COZINHA` + **H2 "Da festa ao café da tarde."** + apoio "Cento, meio cento, 20 ou 25 cm. Oito linhas, o mesmo peso na balança e o mesmo forno às 6h." O lado direito do cabeçalho fica **vazio** (o ícone saiu): wrapper volta a ser só `<Label>`, sem `justify-between` e sem `max-w`.

Cada card traz o número e, na mesma linha, à direita, a ilustração do produto (ver §4). Sem preços e sem `[CONFIRMAR]` na tela.

| # | Título | Descrição | URL do CTA |
|---|---|---|---|
| 01 | Salgados de festa | Coxinha, risole, empada e mini pastel — casquinha fina, recheio até a borda. | `https://wa.me/5542999816629?text=Ol%C3%A1%2C%20Jana%C3%ADna!%20Quero%20encomendar%20salgados%20de%20festa.%20Pode%20me%20passar%20os%20sabores%20e%20o%20pre%C3%A7o%20do%20cento%3F` |
| 02 | Bolos | De corte e de festa — cenoura com ganache, formigueiro, red velvet. | `https://wa.me/5542999816629?text=Ol%C3%A1%2C%20Jana%C3%ADna!%20Quero%20encomendar%20um%20bolo.%20Pode%20me%20contar%20os%20tamanhos%20e%20recheios%3F` |
| 03 | Docinhos | Brigadeiro, beijinho, cajuzinho e bicho de pé. Cento com até 4 sabores. | `https://wa.me/5542999816629?text=Ol%C3%A1%2C%20Jana%C3%ADna!%20Quero%20encomendar%20docinhos%20de%20bandeja.%20Quais%20sabores%20est%C3%A3o%20dispon%C3%ADveis%3F` |
| 04 | Tortas | Limão, cheesecake de frutas vermelhas, maçã e holandesa. Gelada ou assada. | `https://wa.me/5542999816629?text=Ol%C3%A1%2C%20Jana%C3%ADna!%20Quero%20encomendar%20uma%20torta.%20Pode%20me%20passar%20as%20op%C3%A7%C3%B5es%20e%20o%20prazo%3F` |
| 05 | Pão de queijo | Pão de queijo, chipa, recheado e rosquinha de polvilho. | `https://wa.me/5542999816629?text=Ol%C3%A1%2C%20Jana%C3%ADna!%20Quero%20encomendar%20p%C3%A3o%20de%20queijo.%20Pode%20me%20contar%20as%20quantidades%20e%20o%20prazo%3F` |
| 06 | Pães caseiros | Pão francês, bisnaga, pão de forma e brioche de manteiga. | `https://wa.me/5542999816629?text=Ol%C3%A1%2C%20Jana%C3%ADna!%20Quero%20encomendar%20p%C3%A3es%20caseiros.%20Quais%20tipos%20saem%20no%20dia%3F` |
| 07 | Cucas | Banana, maçã, nata e goiabada — massa macia, farofa fina. | `https://wa.me/5542999816629?text=Ol%C3%A1%2C%20Jana%C3%ADna!%20Quero%20encomendar%20uma%20cuca.%20Quais%20recheios%20voc%C3%AAs%20fazem%3F` |
| 08 | Kits e caixas | Bolo, 20 salgados, 20 docinhos e pães — caixa fechada. | `https://wa.me/5542999816629?text=Ol%C3%A1%2C%20Jana%C3%ADna!%20Quero%20montar%20um%20kit%20de%20caf%C3%A9%20da%20tarde.%20O%20que%20voc%C3%AAs%20incluem%3F` |

CTA do card: **Pedir pelo WhatsApp ↗**, link de texto, `target="_blank" rel="noopener"`.

### 3.4 Por que Kamalu
Desktop: H2 em 4 col, 4 itens em 2×2. Mobile: 1 coluna.

- Label `DIFERENÇA` · **H2:** O combinado é o combinado.
- **Forno às 6h** — Massa do dia, assada na manhã da entrega. Nada de congelado esperando.
- **Medida, não palpite** — Cento, meio cento, 20 ou 25 cm. O tamanho que cabe na sua mesa.
- **Data combinada** — Encomenda feita em qualquer dia. A retirada você combina com a Janaína — e é essa data que vale.
- **Chega inteira** — Caixa firme, bolo travado, fita no fecho. Sem surpresa no caminho.

### 3.5 Como encomendar
Desktop: 3 colunas, filete vertical de 1px entre elas. Mobile: empilhado. Nota: "Encomendas podem ser feitas em qualquer dia. A data de retirada é combinada com a Janaína; para festas grandes, avise antes para garantir o dia."

- Label `COMO ENCOMENDAR` · **H2:** Três passos e está marcado.
- **01 Escolha e mande** — Diga o produto, a quantidade e a data pelo WhatsApp.
- **02 Confirme o combinado** — A Janaína responde com sabor, tamanho e valor. Só segue depois do seu ok.
- **03 Retire no dia** — Retirada combinada no pedido ou entrega a combinar, com bolo e salgado prontos para servir.

### 3.6 Contato / CTA final
Bloco centrado max 640px; botões 100% no mobile.

- **H2:** Diga a data. O resto a gente mede.
- Sub: Atendimento direto com a Janaína. Sem formulário, sem espera.
- Primário invertido: **Falar no WhatsApp** → URL do Hero.
- Secundário: "(42) 99981-6629" → `tel:+5542999816629`
- Sem linha de rodapé (sem retirada/Instagram a confirmar).

### 3.7 Footer
Desktop: 3 colunas (logo | links | contato). Mobile: empilhado, logo primeiro.
Logo (120px, `.logo-plate`) · links Produtos / Como encomendar / WhatsApp · "(42) 99981-6629 · Janaína" · "Kamalu — Padaria e Confeitaria" · "© 2026". Sem CNPJ.

## 4. Sistema visual

| Token | Tamanho | LH | Uso |
|---|---|---|---|
| `display-xl` | `clamp(2.5rem, 6vw, 3.5rem)` 40→56 | 1.05, −0.02em | H1 |
| `display-lg` | `clamp(1.75rem, 3.4vw, 2rem)` 28→32 | 1.15, −0.01em | H2 |
| `display-md` | `clamp(1.125rem, 1.8vw, 1.375rem)` 18→22 | 1.3 | H3 / produto |
| `body-lg` | 1.0625rem | 1.6 | subhead |
| `body` | 1rem | 1.6 | texto |
| `caption` | 0.75rem, +0.06em | 1.4 | apoio |
| `label` | 0.6875rem, +0.16em, 700, caixa alta | 1.2 | labels |

Fraunces 600 só em display e nome de produto; Karla no resto.
**Spacing:** 4/8/12/16/24/32/48/64/96px. Seção 96px / 64px mobile; gap 24px.
**Raios:** 2px (card, botão), 4px (etiqueta), 999px (selo). **Sombras:** nenhuma — profundidade por borda 1px, troca de fundo e 2px no hover.
**Grid:** container 1120px, padding 20px / 40px, 12 colunas, gap 24px. Breakpoints `md:768` (2 col), `lg:1024` (3 col), `xl:1280` (4 col). Produtos: gap 24px (16px <768px).
**Linhas:** `1px rgba(43,26,20,.14)` em claro, `1px rgba(246,231,200,.18)` em escuro; filete 32px `#C08552` sob cada label.
**Exceções (2):** réplica `#2B1A14` a +4px no botão primário (efeito carimbo, a única "sombra"); números dos passos em Fraunces 32px `#C08552`.

### 4.1 Ilustração de produto (SVG inline)

| Token | Valor |
|---|---|
| `viewBox` | `0 0 48 48`, área viva 6–42 |
| traço | `1.75`, `stroke-linecap/linejoin="round"`, `fill="none"` no `<svg>` |
| cor | `currentColor` no wrapper: `text-wine`; hover do card → `text-ink`; `transition: color 160ms ease-out` (o traço é `currentColor`) |
| massa | **0 ou 1 forma fechada** `fill="#C08552"`, sempre **detalhe interno** (ver regra abaixo) |
| limite | máximo **5 elementos** por SVG |
| tamanho | 56px ≥1024 · 48px 768–1023 · 44px <768 |
| posição | mesma linha do número, alinhada à direita (`justify-between items-center`), `min-h-14` e `mb-4` |
| proibido | hachura, opacidade, gradiente, sombra, texto, rosto, laço, confete, fita |

**Regra de massa (substitui "1 massa = silhueta"):** o caramelo é acento, não preenchimento da figura.
1. Proibido preencher a **silhueta geral** ou qualquer forma que toque o contorno externo do conjunto.
2. Permitido apenas em **elemento interno** (recheio, creme, andar, tampo, um objeto secundário) que esteja **≥2u dentro** de outro traço.
3. **Área máxima 15% do viewBox** (≤ 345u² de 2304u²). Medido: 02 = 168u², 03 = 201u², 04 = 96u², 05 = 94u².
4. **Teste de 1 cor:** apagando o caramelo, o desenho inteiro precisa continuar legível só pelo traço. Se não continuar, a massa está errada.
5. 01, 06, 07 e 08 ficam **sem massa** (traço puro) — foi o preenchimento deles que virou mancha.

Geometria aprovada v2 (viewBox 48×48, ≤5 elementos, primitivas; substitui a v1):

1. **Salgados** — coxinha, sem massa. Silhueta `M24 9C28 14 36 21 36 27a12 12 0 0 1-24 0c0-6 8-13 12-18Z`; dobras do ápice em chevron `M20 21 24 16.5` e `M28 21 24 16.5`; base do recheio `M18 32h12`. 4 elementos. (Ajuste v2.1: o par `M21 21l-2 4` / `M27 21l2 4` + arco `M16 30q8 5 16 0` lia como rosto a 44px — proibido.)
2. **Bolos** — mantém a geometria v1 (base 30×12 em 9,30; meio 26×9 em 11,21; topo 20×7 em 14,14; glacê 2 arcos; cereja r2,5 em 24,9). **Muda só a massa:** `rect x=12 y=22 w=24 h=7 r=2` (o andar do meio, recuado 1u) em vez da base.
3. **Docinhos** — um brigadeiro em forminha (substitui travessa + 3 círculos). Bola `circle cx=24 cy=23 r=8` com massa; borda da forminha `M16 30h16`; copo `M17 30l1.5 7h11l1.5-7`. 3 elementos. (Ajuste v2.1: a saia em 4 traços lia como pedestre de balão a 44px.)
4. **Tortas** — torta baixa com recheio à vista. Prato `M6 37h36`; corpo `M10 29h28v8H10Z`; massa `rect x=12 y=31 w=24 h=4`; farofa/merengue `M12 29q4-4 8 0t8 0t8 0`. 4 elementos.
5. **Pão de queijo** — mantém 3 elipses e os 2 traços; massa passa da elipse (17,32) para a de cima, `ellipse cx=24 cy=22 rx=6 ry=5`.
6. **Pães** — mantém a cápsula 34×10 entre (7,28) e (41,28); **sem massa**; talhos longos, com folga de 2u nas bordas: `M15 30 19.5 25.5`, `M23 30 27.5 25.5`, `M31 30 35.5 25.5`.
7. **Cucas** — massa reta + farofa de 3 ondulações largas (não 5 finas). Corpo `M10 30h28v6H10Z`; farofa `M10 30q4.7-6 9.4 0t9.4 0t9.2 0`; corte `M30 30v6`; tábua `M7 36h34`. 4 elementos, sem massa.
8. **Kits** — mantém trapézio do corpo, tampa 36×5 em (6,23) e alça; **sem massa**. 3 elementos.


## 5. Componentes

| Componente | Default | Hover | Focus-visible | Disabled |
|---|---|---|---|---|
| Primário | bg `#5E1B2C`, texto `#FFFDF8`, 14×24px, Karla 700 12px `.12em` caixa alta, réplica a +4px | bg `#4A1423`, réplica a +2px, 120ms | outline `2px #E6186B`, offset 3px | opacidade .45, sem réplica |
| Primário em escuro | bg `#F6E7C8`, texto `#2B1A14` | bg `#FFFDF8` | idem | idem |
| Secundário | transparente, borda `1px #5E1B2C`, texto `#5E1B2C` | bg `#F6E7C8` | idem | opacidade .45 |
| Card | bg `#FFFDF8`, borda `1px #E0CDA9`, `border-top:2px #C08552`, padding 32px (24px <1024), raio 2px, `align-items:stretch`, altura mín. 248px (≥768), CTA com `mt-auto` no rodapé | `translateY(-2px)`, borda `#C08552`, 180ms | outline via `:focus-within` | — |
| Selo | 11px 700 caixa alta `.16em`, padding 4×10px, borda 1px `currentColor`, raio 999px | — | — | ponto 8px `#E6186B` |
| Link | sublinhado 1px, offset 3px | sublinhado 2px, cor `#5E1B2C` | outline 2px `#E6186B` | — |

**Patterns** (CSS puro, `aria-hidden`):
- Papel-manteiga: `repeating-linear-gradient(135deg, rgba(43,26,20,.05) 0 1px, transparent 1px 12px)`.
- Arcos (rodapé do CTA): `repeating-radial-gradient(circle at 50% 120%, transparent 0 39px, rgba(192,133,82,.18) 40px 41px)`, altura 96px, `overflow:hidden`.
- Pontos (Hero): `radial-gradient(rgba(246,231,200,.10) 1px, transparent 1px)`, `background-size:16px 16px`.

## 6. Microinterações

1. Reveal: opacidade 0→1, `translateY(12px→0)`, 480ms `cubic-bezier(.22,.61,.36,1)`, threshold .15, uma vez, stagger 60ms por `--i`.
2. Card sobe 2px + borda caramelo, 180ms `ease-out`; seta "↗" anda 2px. A ilustração acompanha: traço `#5E1B2C` → `#2B1A14` em 160ms `ease-out`.
3. Underline: `background-size 0→100%`, 200ms `cubic-bezier(.4,0,.2,1)`.
4. Botão: réplica 4px→2px, 120ms.
5. `prefers-reduced-motion`: sem transform, só opacidade.

## 7. Acessibilidade

| Par | Ratio | Uso |
|---|---|---|
| `#2B1A14` / `#F6E7C8` | 13,6:1 | corpo ✔ |
| `#5E1B2C` / `#F6E7C8` | 10,3:1 | títulos ✔ |
| `#FFFDF8` / `#5E1B2C` | 12,5:1 | CTA ✔ |
| `#FFFDF8` / `#2B1A14` | 16,5:1 | Hero ✔ |
| `#C08552` / `#2B1A14` | 5,3:1 | filetes ✔ |
| `#E6186B` / `#F6E7C8` | 3,65:1 | só ≥24px ou gráfico |
| `#E6186B` / `#2B1A14` | 3,74:1 | só ≥24px ou gráfico |

Foco sempre visível (`2px #E6186B`, offset 3px), nunca `outline:none`. Toque ≥44×44px. Patterns com `aria-hidden="true"`.
**Alt exato:** logo do header e do footer → `Kamalu — Padaria e Confeitaria` (no footer, `alt=""`). As ilustrações de produto são decorativas: `aria-hidden="true"` + `focusable="false"` e nenhum `alt` (são SVG inline, sem `<img>`). Link só de ícone: `aria-label="Abrir conversa com a Janaína no WhatsApp (nova aba)"`.

## 8. SEO

- **Title (43):** `Kamalu — Padaria e Confeitaria | Encomendas`
- **Description (104):** `Salgados de festa, bolos, docinhos e tortas por encomenda. Atendimento direto com a Janaína no WhatsApp.`
- **OG title:** `Kamalu — Padaria e Confeitaria` · **OG desc:** `Salgados, bolos, docinhos e tortas por encomenda. Atendimento direto no WhatsApp.` · `og:image` 1200×630 [CONFIRMAR]: fundo `#2B1A14`, logo filtrado, H1 em Fraunces creme.
- **Favicon:** vem do **logo** (o ícone saiu do projeto). Recorte do monograma "k" em x192–303, y135–245, centralizado em quadrado `#2B1A14` com 12% de padding; traço convertido para creme com ganho alto (o traço original é `#3E3F3C` e some a 32px). Script `npm run icones` (`scripts/gerar-icones.mjs`) gera `app/icon.png` 512px e `app/apple-icon.png` 180px. Conferir sempre a 32px e a 16px: o "k" tem que continuar legível.
- **JSON-LD `Bakery`:** `name` "Kamalu Padaria e Confeitaria", `url`, `telephone` "+5542999816629", `image`, `priceRange` [CONFIRMAR], `address` [CONFIRMAR], `openingHoursSpecification` [CONFIRMAR], `sameAs` [Instagram CONFIRMAR], `areaServed` [CONFIRMAR].

## 9. O que não fazer

Sem galeria ou foto de produto. Sem carrossel, formulário, preço ou depoimento inventado — prova social só como `[PLACEHOLDER A CONFIRMAR]`. Sem mascote, laço, confete, cupcake, gradiente dourado, ícone de bolinho genérico. **Ilustração de produto:** sem hachura, sem opacidade, sem gradiente, sem sombra, sem texto, sem rosto — traço chapado de 1.75 e uma única massa caramelo `#C08552`. Sem magenta em área grande ou texto fino. Sem itálico, contorno ou sombra no logo. Sem raio grande, sombra difusa ou bounce. Sem "feito com amor", exclamação em série ou diminutivo meloso.
