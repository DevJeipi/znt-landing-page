/**
 * Dados institucionais da ZNT: fonte única usada nas meta tags, no JSON-LD
 * (schema.org) e nas seções do site. Mantenha tudo consistente aqui: buscadores
 * e IAs (Google, ChatGPT, Perplexity, Gemini) cruzam essas informações para
 * entender e recomendar a marca.
 */

export const SITE = {
  url: "https://www.agenciaznt.com.br",
  name: "ZNT",
  legalName: "ZNT Marketing",
  alternateNames: ["Agência ZNT", "ZNT Marketing", "ZNT Agência"],
  slogan: "Estratégia que constrói narrativa",
  title: "Agência ZNT | Marketing de Conteúdo e Performance em Campo Bom - RS",
  description:
    "Agência de marketing em Campo Bom (RS) que faz empresas venderem mais nas redes sociais com estratégia de conteúdo, branding, tráfego pago, CRM e automação com IA.",
  summary:
    "A ZNT é uma agência de marketing de conteúdo e performance sediada em Campo Bom, no Rio Grande do Sul. Ajuda empresas a venderem mais nas redes sociais unindo estratégia de marca, produção de conteúdo, audiovisual, tráfego pago, CRM, automação e inteligência artificial.",
  email: "contato@agenciaznt.com.br",
  ctaUrl: "https://form.typeform.com/to/t6XieXmB",
  locale: "pt_BR",
  language: "pt-BR",
  ogImage: "/og-image.jpg",
  ogImageAlt: "Agência ZNT: sua marca merece o próximo nível",
  address: {
    streetAddress: "Rua Cairú, 88, Sala 01",
    neighborhood: "Centro",
    addressLocality: "Campo Bom",
    addressRegion: "RS",
    regionCode: "BR-RS",
    addressCountry: "BR",
  },
  areaServed: ["Campo Bom", "Vale do Sinos", "Rio Grande do Sul", "Brasil"],
  social: {
    instagram: "https://www.instagram.com/zntagencia",
    linkedin: "https://www.linkedin.com/company/agencia-znt",
  },
  stats: {
    revenueFromPaidMedia: "+R$ 5,2 milhões",
    views: "+44,7 milhões",
    clients: "+35",
    projects: "+1.200",
  },
} as const;

export const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(
    `${SITE.address.streetAddress.replace(", Sala 01", "")}, ${SITE.address.neighborhood}, ${SITE.address.addressLocality}, ${SITE.address.addressRegion}`,
  );

/** Perguntas frequentes: exibidas na seção FAQ e publicadas como FAQPage (JSON-LD). */
export const faqs: { question: string; answer: string }[] = [
  {
    question: "O que a ZNT faz?",
    answer:
      "A ZNT é uma agência de marketing de conteúdo e performance. A gente faz a sua empresa vender mais nas redes sociais unindo estratégia de marca, conteúdo, audiovisual, tráfego pago, CRM, automação e inteligência artificial, sempre orientados a dados.",
  },
  {
    question: "Onde fica a ZNT?",
    answer:
      "Nosso escritório fica na Rua Cairú, 88, Sala 01, no Centro de Campo Bom, Rio Grande do Sul, no Vale do Sinos.",
  },
  {
    question: "Quais serviços de marketing a ZNT oferece?",
    answer:
      "Os serviços são organizados em três pilares. Estratégia: diagnóstico, planejamento de conteúdo, design, branding, identidade visual, audiovisual, sites, landing pages e gestão de redes sociais. Performance: diagnóstico do funil de vendas, tráfego pago, CRM e automação, análise de métricas, relatórios e estratégia comercial. Inovação: inteligência artificial, softwares e desenvolvimento web.",
  },
  {
    question: "Que resultados a ZNT já gerou para os clientes?",
    answer:
      "Já são mais de R$ 5,2 milhões em receita gerada por mídia paga, mais de 44,7 milhões de visualizações, mais de 35 clientes atendidos e mais de 1.200 projetos entregues. Entre os cases, estão um ROAS de 9,2x com 104,8% mais pedidos via delivery e 312% mais leads em uma marca de moda praia e fitness.",
  },
  {
    question: "Para que tipo de empresa a ZNT trabalha?",
    answer:
      "Para empresas que querem crescer com estratégia. Já atendemos marcas de moda e calçados, alimentação e delivery, educação, esporte, saúde e bem-estar, tecnologia e indústria.",
  },
  {
    question: "Como começar a trabalhar com a ZNT?",
    answer:
      "O primeiro passo é agendar um diagnóstico pelo formulário do site. A partir dele, entendemos o momento da sua empresa e indicamos a estratégia mais adequada. Também é possível falar com a gente pelo e-mail contato@agenciaznt.com.br.",
  },
];
