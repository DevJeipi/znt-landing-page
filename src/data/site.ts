/**
 * Dados institucionais da ZNT: fonte única usada nas meta tags, no JSON-LD
 * (schema.org) e nas seções do site. Mantenha tudo consistente aqui: buscadores
 * e IAs (Google, ChatGPT, Perplexity, Gemini) cruzam essas informações para
 * entender e recomendar a marca.
 */

export type Locale = "pt" | "en";

export const SITE = {
  url: "https://www.agenciaznt.com.br",
  name: "ZNT",
  legalName: "ZNT Marketing",
  alternateNames: ["Agência ZNT", "ZNT Marketing", "ZNT Agência", "ZNT Agency"],
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

export const SITE_EN = {
  ...SITE,
  slogan: "Strategy that builds narrative",
  title: "ZNT Agency | Content & Performance Marketing in Brazil",
  description:
    "Marketing agency in Campo Bom, Brazil that helps companies sell more on social media with content strategy, branding, paid media, CRM, and AI automation.",
  summary:
    "ZNT is a content and performance marketing agency based in Campo Bom, Rio Grande do Sul, Brazil. It helps companies sell more on social media by combining brand strategy, content production, audiovisual, paid media, CRM, automation, and artificial intelligence.",
  locale: "en_US",
  language: "en",
  ogImageAlt: "ZNT Agency: your brand deserves the next level",
  stats: {
    revenueFromPaidMedia: "+R$ 5.2 million",
    views: "+44.7 million",
    clients: "+35",
    projects: "+1,200",
  },
} as const;

export function getSite(lang: Locale = "pt") {
  return lang === "en" ? SITE_EN : SITE;
}

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

export const faqsEn: { question: string; answer: string }[] = [
  {
    question: "What does ZNT do?",
    answer:
      "ZNT is a content and performance marketing agency. We help your company sell more on social media by combining brand strategy, content, audiovisual production, paid media, CRM, automation, and artificial intelligence — always data-driven.",
  },
  {
    question: "Where is ZNT located?",
    answer:
      "Our office is located at Rua Cairú, 88, Suite 01, in Downtown Campo Bom, Rio Grande do Sul, Brazil (Vale do Sinos region).",
  },
  {
    question: "What marketing services does ZNT offer?",
    answer:
      "Our services are organized into three pillars. Strategy: macro diagnosis, content planning, design, branding, visual identity, audiovisual production, websites, landing pages, and social media management. Performance: sales funnel diagnosis, paid media, CRM & automation, metrics analysis, reporting, and commercial strategy. Innovation: artificial intelligence, software, and web development.",
  },
  {
    question: "What results has ZNT generated for clients?",
    answer:
      "We have generated over R$ 5.2 million in paid media revenue, over 44.7 million views, served more than 35 clients, and delivered over 1,200 projects. Highlights include a 9.2x ROAS with 104.8% more delivery orders and a 312% increase in leads for a beachwear and fitness brand.",
  },
  {
    question: "What types of companies does ZNT work with?",
    answer:
      "We work with companies that want to grow strategically. We have served brands in fashion and footwear, food and delivery, education, sports, health and wellness, technology, and manufacturing.",
  },
  {
    question: "How do I start working with ZNT?",
    answer:
      "The first step is to book a diagnostic session through the form on our website. From there, we understand your company's current stage and recommend the most effective strategy. You can also reach us by email at contato@agenciaznt.com.br.",
  },
];

export function getFaqs(lang: Locale = "pt") {
  return lang === "en" ? faqsEn : faqs;
}
