import type { TipoIlustracao } from "./components/IlustracaoProduto";

export type Produto = {
  numero: string;
  titulo: string;
  descricao: string;
  url: string;
  ilustracao: TipoIlustracao;
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
    "Encomenda em qualquer dia",
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
  titulo: "Da festa ao café da tarde.",
  apoio:
    "Cento, meio cento, 20 ou 25 cm. Oito linhas, o mesmo peso na balança e o mesmo forno às 6h.",
  ctaCard: "Pedir pelo WhatsApp",
  itens: [
    {
      numero: "01",
      titulo: "Salgados de festa",
      descricao:
        "Coxinha, risole, empada e mini pastel — casquinha fina, recheio até a borda.",
      url: "https://wa.me/5542999816629?text=Ol%C3%A1%2C%20Jana%C3%ADna!%20Quero%20encomendar%20salgados%20de%20festa.%20Pode%20me%20passar%20os%20sabores%20e%20o%20pre%C3%A7o%20do%20cento%3F",
      ilustracao: "salgados",
    },
    {
      numero: "02",
      titulo: "Bolos",
      descricao:
        "De corte e de festa — cenoura com ganache, formigueiro, red velvet.",
      url: "https://wa.me/5542999816629?text=Ol%C3%A1%2C%20Jana%C3%ADna!%20Quero%20encomendar%20um%20bolo.%20Pode%20me%20contar%20os%20tamanhos%20e%20recheios%3F",
      ilustracao: "bolos",
    },
    {
      numero: "03",
      titulo: "Docinhos",
      descricao:
        "Brigadeiro, beijinho, cajuzinho e bicho de pé. Cento com até 4 sabores.",
      url: "https://wa.me/5542999816629?text=Ol%C3%A1%2C%20Jana%C3%ADna!%20Quero%20encomendar%20docinhos%20de%20bandeja.%20Quais%20sabores%20est%C3%A3o%20dispon%C3%ADveis%3F",
      ilustracao: "docinhos",
    },
    {
      numero: "04",
      titulo: "Tortas",
      descricao:
        "Limão, cheesecake de frutas vermelhas, maçã e holandesa. Gelada ou assada.",
      url: "https://wa.me/5542999816629?text=Ol%C3%A1%2C%20Jana%C3%ADna!%20Quero%20encomendar%20uma%20torta.%20Pode%20me%20passar%20as%20op%C3%A7%C3%B5es%20e%20o%20prazo%3F",
      ilustracao: "tortas",
    },
    {
      numero: "05",
      titulo: "Pão de queijo",
      descricao: "Pão de queijo, chipa, recheado e rosquinha de polvilho.",
      url: "https://wa.me/5542999816629?text=Ol%C3%A1%2C%20Jana%C3%ADna!%20Quero%20encomendar%20p%C3%A3o%20de%20queijo.%20Pode%20me%20contar%20as%20quantidades%20e%20o%20prazo%3F",
      ilustracao: "paoDeQueijo",
    },
    {
      numero: "06",
      titulo: "Pães caseiros",
      descricao: "Pão francês, bisnaga, pão de forma e brioche de manteiga.",
      url: "https://wa.me/5542999816629?text=Ol%C3%A1%2C%20Jana%C3%ADna!%20Quero%20encomendar%20p%C3%A3es%20caseiros.%20Quais%20tipos%20saem%20no%20dia%3F",
      ilustracao: "paes",
    },
    {
      numero: "07",
      titulo: "Cucas",
      descricao:
        "Banana, maçã, nata e goiabada — massa macia, farofa fina.",
      url: "https://wa.me/5542999816629?text=Ol%C3%A1%2C%20Jana%C3%ADna!%20Quero%20encomendar%20uma%20cuca.%20Quais%20recheios%20voc%C3%AAs%20fazem%3F",
      ilustracao: "cucas",
    },
    {
      numero: "08",
      titulo: "Kits e caixas",
      descricao: "Bolo, 20 salgados, 20 docinhos e pães — caixa fechada.",
      url: "https://wa.me/5542999816629?text=Ol%C3%A1%2C%20Jana%C3%ADna!%20Quero%20montar%20um%20kit%20de%20caf%C3%A9%20da%20tarde.%20O%20que%20voc%C3%AAs%20incluem%3F",
      ilustracao: "kits",
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
      titulo: "Data combinada",
      descricao:
        "Encomenda feita em qualquer dia. A retirada você combina com a Janaína — e é essa data que vale.",
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
  nota: "Encomendas podem ser feitas em qualquer dia. A data de retirada é combinada com a Janaína; para festas grandes, avise antes para garantir o dia.",
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
