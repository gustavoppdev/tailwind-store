import {
  discboundHeirloomJournalBlack1,
  discboundHeirloomJournalBlack2,
  discboundHeirloomJournalBlack3,
  hmmBallpointPenBlack1,
  hmmBallpointPenBlack2,
  hmmBallpointPenBlack3,
  hmmBallpointPenWhite1,
  hmmBallpointPenWhite2,
  hmmBallpointPenWhite3,
  lemnosClockGreen1,
  lemnosClockGreen2,
  lemnosClockGreen3,
  lemnosClockOrange1,
  lemnosClockOrange2,
  lemnosClockOrange3,
  prospectBriefcaseBlack1,
  prospectBriefcaseBlack2,
  prospectBriefcaseBlack3,
} from "@/assets";
import { Product } from "./types";

export const AllProducts: Product[] = [
  {
    id: "e8f0b7c2-5d9a-4c1f-8e2b-7a3d2c1e4b5a-1",
    name: { pt: "Relógio Lemnos SOSO", en: "Lemnos SOSO Clock" },
    category: "desk_and_office",
    slug: { pt: "relogio-lemnos-soso-green", en: "lemnos-soso-clock-green" },
    description: {
      pt: "O relógio Lemnos SOSO apresenta design limpo e minimalista. O compensado natural oferece textura orgânica, enquanto o ponteiro branco das horas contrasta com o mostrador colorido. O ponteiro dos segundos é silencioso, sem tique-taque perturbador.",
      en: "The Lemnos SOSO clock features a clean, minimalist design. The natural plywood brings in organic texture, while the white hour hand contrasts nicely against the colored face. And the silent sweeping second hand means there's no distracting ticking noise.",
    },
    price: { brl: 379.0, usd: 69.0 },
    sizesAvailable: [{ pt: "Único", en: "One size" }],
    image: [lemnosClockGreen1, lemnosClockGreen2, lemnosClockGreen3],
    alt: {
      pt: "Relógio Lemnos SOSO verde",
      en: "Lemnos SOSO Clock Green",
    },
    details: [
      { pt: "Corpo em compensado com vidro", en: "Plywood & Glass" },
      {
        pt: "Ponteiro dos segundos de movimento contínuo",
        en: "Sweeping Second hand",
      },
      { pt: "Lente de vidro semi-temperado", en: "Semi-tempered glass lens" },
      {
        pt: "Dimensões: 9,9'' de diâmetro / 1,8'' de profundidade",
        en: "Dimensions: 9.9'' diameter / 1.8'' depth",
      },
      { pt: "Peso aproximado: 580 g", en: "Weight: 580 grams" },
      {
        pt: "Tipo de Bateria: 1 x AA *Inclusa",
        en: "Battery Type: 1 x AA *Included",
      },
      { pt: "Feito no Japão", en: "Made in Japan" },
    ],
    colorsAvailable: ["olive-green", "orange"],
    variations: [
      {
        key: "olive-green",
        href: {
          pt: "/collection/relogio-lemnos-soso-green",
          en: "/collection/lemnos-soso-clock-green",
        },
      },
      {
        key: "orange",
        href: {
          pt: "/collection/relogio-lemnos-soso-orange",
          en: "/collection/lemnos-soso-clock-orange",
        },
      },
    ],
    rating: 4.8,
  },
  {
    id: "e8f0b7c2-5d9a-4c1f-8e2b-7a3d2c1e4b5a-2",
    name: { pt: "Relógio Lemnos SOSO", en: "Lemnos SOSO Clock" },
    category: "desk_and_office",
    slug: { pt: "relogio-lemnos-soso-orange", en: "lemnos-soso-clock-orange" },
    description: {
      pt: "O relógio Lemnos SOSO apresenta design limpo e minimalista. O compensado natural oferece textura orgânica, enquanto o ponteiro branco das horas contrasta com o mostrador colorido. O ponteiro dos segundos é silencioso, sem tique-taque perturbador.",
      en: "The Lemnos SOSO clock features a clean, minimalist design. The natural plywood brings in organic texture, while the white hour hand contrasts nicely against the colored face. And the silent sweeping second hand means there's no distracting ticking noise.",
    },
    price: { brl: 379.0, usd: 69.0 },
    sizesAvailable: [{ pt: "Único", en: "One size" }],
    image: [lemnosClockOrange1, lemnosClockOrange2, lemnosClockOrange3],
    alt: {
      pt: "Relógio Lemnos SOSO laranja",
      en: "Lemnos SOSO Clock Orange",
    },
    details: [
      { pt: "Corpo em compensado com vidro", en: "Plywood & Glass" },
      {
        pt: "Ponteiro dos segundos de movimento contínuo",
        en: "Sweeping Second hand",
      },
      { pt: "Lente de vidro semi-temperado", en: "Semi-tempered glass lens" },
      {
        pt: "Dimensões: 9,9'' de diâmetro / 1,8'' de profundidade",
        en: "Dimensions: 9.9'' diameter / 1.8'' depth",
      },
      { pt: "Peso aproximado: 580 g", en: "Weight: 580 grams" },
      {
        pt: "Tipo de Bateria: 1 x AA *Inclusa",
        en: "Battery Type: 1 x AA *Included",
      },
      { pt: "Feito no Japão", en: "Made in Japan" },
    ],
    colorsAvailable: ["orange", "olive-green"],
    variations: [
      {
        key: "olive-green",
        href: {
          pt: "/collection/relogio-lemnos-soso-green",
          en: "/collection/lemnos-soso-clock-green",
        },
      },
      {
        key: "orange",
        href: {
          pt: "/collection/relogio-lemnos-soso-orange",
          en: "/collection/lemnos-soso-clock-orange",
        },
      },
    ],
    rating: 4.8,
  },
  {
    id: "e8f0b7c2-5d9a-4c1f-8e2b-7a3d2c1e4b5a-3",
    name: { pt: "Caneta esferográfica HMM", en: "HMM Ballpoint Pen" },
    category: "desk_and_office",
    slug: {
      pt: "caneta-esferografica-hmm-black",
      en: "hmm-ballpoint-pen-black",
    },
    description: {
      pt: "Esta caneta HMM é feita em alumínio leve, com mecanismo de mola resistente que produz um clique agradável. Seu corpo de 12 lados oferece pegada confortável e evita que a caneta role. Compatível com recarga padrão Schmidt P900M.",
      en: "This HMM Ballpoint Pen is beautifully crafted from lightweight aluminum and equipped with a heavy duty spring mechanism that creates a satisfying “click”. The 12-sided pen barrel provides a comfortable grip and also keeps the pen from rolling off your desk. And best of all, this pen is refillable with the standard Schmidt P900M Refill.",
    },
    price: { brl: 209.0, usd: 39.0 },
    sizesAvailable: [{ pt: "136mm x 11mm", en: "136mm x 11mm" }],
    image: [
      hmmBallpointPenBlack1,
      hmmBallpointPenBlack2,
      hmmBallpointPenBlack3,
    ],
    alt: { pt: "Caneta HMM Preta", en: "HMM Ballpoint Pen" },
    details: [
      { pt: "Corpo em alumínio usinado", en: "Milled aluminum" },
      {
        pt: "Recarregável com recargas Schmidt P900M",
        en: "Refillable with Schmidt P900M Refills",
      },
      { pt: "Peso aproximado: 22 g", en: "Weight: 22g" },
      { pt: "Dimensões: 136mm x 11mm", en: "Dimensions: 136mm x 11mm" },
    ],
    colorsAvailable: ["black", "gray"],
    variations: [
      {
        key: "black",
        href: {
          pt: "/collection/caneta-esferografica-hmm-black",
          en: "/collection/hmm-ballpoint-pen-black",
        },
      },
      {
        key: "gray",
        href: {
          pt: "/collection/caneta-esferografica-hmm-gray",
          en: "/collection/hmm-ballpoint-pen-gray",
        },
      },
    ],
    rating: 4.8,
  },
  {
    id: "e8f0b7c2-5d9a-4c1f-8e2b-7a3d2c1e4b5a-4",
    name: { pt: "Caneta esferográfica HMM", en: "HMM Ballpoint Pen" },
    category: "desk_and_office",
    slug: { pt: "caneta-esferografica-hmm-gray", en: "hmm-ballpoint-pen-gray" },
    description: {
      pt: "Esta caneta HMM é feita em alumínio leve, com mecanismo de mola resistente que produz um clique agradável. Seu corpo de 12 lados oferece pegada confortável e evita que a caneta role. Compatível com recarga padrão Schmidt P900M.",
      en: "This HMM Ballpoint Pen is beautifully crafted from lightweight aluminum and equipped with a heavy duty spring mechanism that creates a satisfying “click”. The 12-sided pen barrel provides a comfortable grip and also keeps the pen from rolling off your desk. And best of all, this pen is refillable with the standard Schmidt P900M Refill.",
    },
    price: { brl: 209.0, usd: 39.0 },
    sizesAvailable: [{ pt: "136mm x 11mm", en: "136mm x 11mm" }],
    image: [
      hmmBallpointPenWhite1,
      hmmBallpointPenWhite2,
      hmmBallpointPenWhite3,
    ],
    alt: { pt: "Caneta HMM Cinza", en: "HMM Ballpoint Pen Gray" },
    details: [
      { pt: "Corpo em alumínio usinado", en: "Milled aluminum" },
      {
        pt: "Recarregável com recargas Schmidt P900M",
        en: "Refillable with Schmidt P900M Refills",
      },
      { pt: "Peso aproximado: 22 g", en: "Weight: 22g" },
      { pt: "Dimensões: 136mm x 11mm", en: "Dimensions: 136mm x 11mm" },
    ],
    colorsAvailable: ["gray", "black"],
    variations: [
      {
        key: "black",
        href: {
          pt: "/collection/caneta-esferografica-hmm-black",
          en: "/collection/hmm-ballpoint-pen-black",
        },
      },
      {
        key: "gray",
        href: {
          pt: "/collection/caneta-esferografica-hmm-gray",
          en: "/collection/hmm-ballpoint-pen-gray",
        },
      },
    ],
    rating: 4.8,
  },
  {
    id: "e8f0b7c2-5d9a-4c1f-8e2b-7a3d2c1e4b5a-5",
    name: {
      pt: "Caderno Herança Encadernado com Discos",
      en: "Discbound Heirloom Journal",
    },
    category: "self_improvement",
    slug: {
      pt: "caderno-heranca-encadernado-discos-preto",
      en: "discbound-heirloom-journal-black",
    },
    description: {
      pt: "Cada caderno recarregável é feito com componentes de altíssima qualidade – desde os discos de metal sólido até o couro legítimo e o papel premium. O sistema de encadernação com discos permite adicionar, remover ou reorganizar páginas facilmente. As capas de couro envelhecem lindamente com o tempo e podem ser recarregadas indefinidamente. Este é um caderno que você vai querer manter por toda a vida.",
      en: "Each refillable journal is made from the highest quality components – from the solid metal discs, to the full-grain leather, to the perfect paper stock. The discbound system is made of 11 modular discs that allow paper to be freely added, removed, and reorganized. The leather covers will wear in beautifully over time and can be endlessly refilled with additional paper packs. This journal is something you’ll be holding onto for life.",
    },
    price: { brl: 1099.0, usd: 199.0 },
    sizesAvailable: [{ pt: ' 8.5" x 11"', en: ' 8.5" x 11"' }],
    image: [
      discboundHeirloomJournalBlack1,
      discboundHeirloomJournalBlack2,
      discboundHeirloomJournalBlack3,
    ],
    alt: {
      pt: "Caderno Herança Encadernado com Discos Preto",
      en: "Discbound Heirloom Journal Black",
    },
    details: [
      {
        pt: "Capas de couro legítimo Wickett & Craig",
        en: "Full-grain Wickett & Craig leather covers",
      },
      {
        pt: "Sistema recarregável com discos",
        en: "Refillable discbound system",
      },
      { pt: "Discos de latão sólido", en: "Solid brass discs" },
      { pt: "Abre completamente plano", en: "Lays completely flat" },
      {
        pt: 'Dimensões da página: 8.5" x 11"',
        en: 'Page dimensions: 8.5" x 11"',
      },
      { pt: "120 páginas com grade de pontos", en: "120 dot grid pages" },
      { pt: "Papel branco liso 70#", en: "70# smooth white paper" },
      { pt: "Produzido nos EUA", en: "Made in USA" },
    ],
    colorsAvailable: ["black"],
    variations: [
      {
        key: "black",
        href: {
          pt: "/collection/caderno-heranca-encadernado-discos-preto",
          en: "/collection/discbound-heirloom-journal-black",
        },
      },
    ],
    rating: 4.8,
  },
  {
    id: "e8f0b7c2-5d9a-4c1f-8e2b-7a3d2c1e4b5a-6",
    name: { pt: "Pasta Prospect", en: "Prospect Briefcase" },
    category: "travel",
    slug: { pt: "pasta-prospect-preto", en: "prospect-briefcase-black" },
    description: {
      pt: "Com design aerodinâmico e alça de ombro acolchoada em couro, esta pasta é perfeita para o dia a dia ou viagens pelo mundo. Conta com três bolsos pequenos, um bolso maior para tablet e compartimento principal para laptops de até 15'.",
      en: "Its streamlined design and padded leather shoulder strap make it perfect for daily commutes or trips around the world. Interior includes three small pockets, a larger tablet pocket, and the main compartment fits laptops up to 15'.",
    },
    price: { brl: 1799.0, usd: 319.0 },
    sizesAvailable: [
      { pt: '15" L x 12" A x 4" P', en: '15" W x 12" H x 4" D' },
    ],
    image: [
      prospectBriefcaseBlack1,
      prospectBriefcaseBlack2,
      prospectBriefcaseBlack3,
    ],
    alt: { pt: "Pasta Prospect Preta", en: "Prospect Briefcase" },
    details: [
      {
        pt: 'Dimensões: 15" L x 12" A x 4" P',
        en: 'Dimensions: 15" W x 12" H x 4" D',
      },
      {
        pt: "Tecido twill preto resistente e pesado",
        en: "Durable heavyweight black twill",
      },
      {
        pt: "Couro legítimo Wickett & Craig",
        en: "Full-grain Wickett & Craig bridle leather",
      },
      {
        pt: "Alça de ombro acolchoada (ajustável e removível)",
        en: "Padded shoulder strap (adjustable and removable)",
      },
      { pt: "Ferragens e rebites em latão", en: "Brass hardware and rivets" },
      { pt: "Zíperes Riri M8", en: "Riri M8 zippers" },
      { pt: "Etiqueta tecida personalizada", en: "Custom woven label" },
      {
        pt: 'Bolsos frontais divididos (7" x 8")',
        en: 'Front split utility pockets (7" x 8")',
      },
      {
        pt: '3 bolsos internos pequenos (5" x 8")',
        en: '3 small interior pockets (5" x 8")',
      },
      {
        pt: 'Bolso interno para tablet / laptop (14,5" x 10")',
        en: 'Interior tablet / laptop pocket (14.5" x 10")',
      },
      {
        pt: "Feito à mão em Charleston, SC 🇺🇸",
        en: "Handmade in Charleston, SC 🇺🇸",
      },
    ],
    colorsAvailable: ["black"],
    variations: [
      {
        key: "black",
        href: {
          pt: "/collection/pasta-prospect-preto",
          en: "/collection/prospect-briefcase-black",
        },
      },
    ],
    rating: 4.8,
  },
];
