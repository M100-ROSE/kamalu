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
├── briefing.md          # Briefing de marca completo (~1.400 palavras, 13 seções)
├── contexto.md          # Este arquivo: memória e histórico do projeto
├── img/
│   ├── WhatsApp Image 2026-10-27 at 21.56.56 (1).jpeg   # Logo: monograma k + PADARIA/CONFEITARIA
│   └── WhatsApp Image 2026-10-27 at 21.56.56.jpeg       # Ícone: chapéu de chef + fouet magenta
└── .gitignore           # Ignora .opencode/ e artefatos locais
```

As imagens são referenciadas no `briefing.md` por caminho relativo (`img/...`).

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
