export type Produto = {
  numero: string;
  titulo: string;
  descricao: string;
  url: string;
};

export type ItemDiferenca = {
  titulo: string;
  descricao: string;
};

export type Passo = {
  numero: string;
  titulo: string;
  descricao: string;
};

export const contato = {
  nome: "Janaína",
  marca: "Kamalu — Padaria e Confeitaria",
  telefoneExibicao: "(42) 99981-6629",
  telefoneHref: "tel:+5542999816629",
  whatsapp: "https://wa.me/5542999816629",
  whatsappHero:
    "https://wa.me/5542999816629?text=Ol%C3%A1%2C%20Jana%C3%ADna!%20Vim%20pelo%20site%20e%20quero%20fazer%20uma%20encomenda.",
} as const;

export const seo = {
  title: "Kamalu — Padaria e Confeitaria | Encomendas",
  description:
    "Salgados de festa, bolos, docinhos e tortas por encomenda. Atendimento direto com a Janaína no WhatsApp.",
  ogTitle: "Kamalu — Padaria e Confeitaria",
  ogDescription:
    "Salgados, bolos, docinhos e tortas por encomenda. Atendimento direto no WhatsApp.",
} as const;

export const hero = {
  logoAlt: "Kamalu — Padaria e Confeitaria",
  label: "PADARIA · CONFEITARIA · ENCOMENDAS",
  titulo: "Bolo alto, bandeja cheia, mesa posta.",
  subhead:
    "Salgados de festa, bolos, docinhos e tortas por encomenda. A festa que lembra a infância de alguém — feita hoje, do jeito certo.",
  ctaPrimario: "Encomendar no WhatsApp",
  ctaSecundario: "Ver produtos",
  fatos: [
    "Encomenda até quinta",
    "Retirada combinada",
    "Atendimento direto com a Janaína",
  ],
} as const;

export const sobre = {
  label: "SOBRE",
  titulo: "Padaria de bairro, precisão de ateliê.",
  paragrafos: [
    "Trabalhamos por encomenda. O que sai daqui foi feito no dia, na medida que você pediu — nem sobra, nem falta.",
    "A receita é de casa. O método é de ateliê: peso na balança, tempo no forno, temperatura anotada.",
  ],
  selos: ["Assado no dia", "Peso conferido", "Encomenda com nome e hora"],
} as const;

export const produtos = {
  label: "O QUE SAI DA COZINHA",
  titulo: "Quatro coisas, feitas bem.",
  apoio:
    "Cento, meio cento, 20 ou 25 cm. Você escolhe a quantidade; a gente acerta a medida.",
  ctaCard: "Pedir pelo WhatsApp",
  itens: [
    {
      numero: "01",
      titulo: "Salgados de festa",
      descricao:
        "Coxinha, risole, empada e mini pastel — casquinha fina, recheio até a borda.",
      url: "https://wa.me/5542999816629?text=Ol%C3%A1%2C%20Jana%C3%ADna!%20Quero%20encomendar%20salgados%20de%20festa.%20Pode%20me%20passar%20os%20sabores%20e%20o%20pre%C3%A7o%20do%20cento%3F",
    },
    {
      numero: "02",
      titulo: "Bolos",
      descricao:
        "De corte e de festa — cenoura com ganache, formigueiro, red velvet.",
      url: "https://wa.me/5542999816629?text=Ol%C3%A1%2C%20Jana%C3%ADna!%20Quero%20encomendar%20um%20bolo.%20Pode%20me%20contar%20os%20tamanhos%20e%20recheios%3F",
    },
    {
      numero: "03",
      titulo: "Docinhos",
      descricao:
        "Brigadeiro, beijinho, cajuzinho e bicho de pé. Cento com até 4 sabores.",
      url: "https://wa.me/5542999816629?text=Ol%C3%A1%2C%20Jana%C3%ADna!%20Quero%20encomendar%20docinhos%20de%20bandeja.%20Quais%20sabores%20est%C3%A3o%20dispon%C3%ADveis%3F",
    },
    {
      numero: "04",
      titulo: "Tortas",
      descricao:
        "Limão, cheesecake de frutas vermelhas, maçã e holandesa. Gelada ou assada.",
      url: "https://wa.me/5542999816629?text=Ol%C3%A1%2C%20Jana%C3%ADna!%20Quero%20encomendar%20uma%20torta.%20Pode%20me%20passar%20as%20op%C3%A7%C3%B5es%20e%20o%20prazo%3F",
    },
  ] satisfies Produto[],
} as const;

export const diferenciais = {
  label: "DIFERENÇA",
  titulo: "O combinado é o combinado.",
  itens: [
    {
      titulo: "Forno às 6h",
      descricao:
        "Massa do dia, assada na manhã da entrega. Nada de congelado esperando.",
    },
    {
      titulo: "Medida, não palpite",
      descricao:
        "Cento, meio cento, 20 ou 25 cm. O tamanho que cabe na sua mesa.",
    },
    {
      titulo: "Prazo que se cumpre",
      descricao:
        "Encomenda confirmada até quinta, retirada no sábado de manhã.",
    },
    {
      titulo: "Chega inteira",
      descricao:
        "Caixa firme, bolo travado, fita no fecho. Sem surpresa no caminho.",
    },
  ] satisfies ItemDiferenca[],
} as const;

export const comoEncomendar = {
  label: "COMO ENCOMENDAR",
  titulo: "Três passos e está marcado.",
  nota: "Encomendas com 48h de antecedência. Para festas grandes, feche até quinta.",
  passos: [
    {
      numero: "01",
      titulo: "Escolha e mande",
      descricao: "Diga o produto, a quantidade e a data pelo WhatsApp.",
    },
    {
      numero: "02",
      titulo: "Confirme o combinado",
      descricao:
        "A Janaína responde com sabor, tamanho e valor. Só segue depois do seu ok.",
    },
    {
      numero: "03",
      titulo: "Retire no dia",
      descricao:
        "Retirada combinada no pedido ou entrega a combinar, com bolo e salgado prontos para servir.",
    },
  ] satisfies Passo[],
} as const;

export const contatoFinal = {
  titulo: "Diga a data. O resto a gente mede.",
  subhead: "Atendimento direto com a Janaína. Sem formulário, sem espera.",
  ctaPrimario: "Falar no WhatsApp",
} as const;

export const footer = {
  links: [
    { rotulo: "Produtos", href: "#produtos" },
    { rotulo: "Como encomendar", href: "#como-encomendar" },
    { rotulo: "WhatsApp", href: contato.whatsappHero, externo: true },
  ],
  contatoLinha: "(42) 99981-6629 · Janaína",
  marca: "Kamalu — Padaria e Confeitaria",
  copyright: "© 2026",
} as const;
