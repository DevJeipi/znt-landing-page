/**
 * Pilares de serviço da ZNT: usados na seção Constelação e no JSON-LD
 * (catálogo de serviços), para buscadores e IAs entenderem o que a agência faz.
 */

export interface Pillar {
  id: string;
  name: string;
  tagline: string;
  description: string;
  color: string;
  items: string[];
}

export const pillars: Pillar[] = [
  {
    id: "estrategia",
    name: "Estratégia",
    tagline: "Posicione sua marca para ser escolhida.",
    description:
      "Construímos o posicionamento e a comunicação da sua empresa para gerar valor, atrair clientes e fortalecer sua presença no mercado.",
    color: "#7ec9ff",
    items: [
      "Diagnóstico Macro",
      "Planejamento de conteúdo",
      "Conteúdo",
      "Design",
      "Sites e Landing Pages",
      "Branding",
      "Identidade Visual",
      "Audiovisual",
      "Gestão das redes sociais",
    ],
  },
  {
    id: "performance",
    name: "Performance",
    tagline: "Aumente sua receita.",
    description:
      "Atraímos oportunidades, otimizamos seus investimentos e conectamos o marketing às vendas para gerar mais receita para sua empresa.",
    color: "#e3e36d",
    items: [
      "Diagnóstico do Funil de Vendas",
      "Análise de Métricas",
      "CRM & Automação",
      "Tráfego Pago / Mídia Paga",
      "Relatórios de Performance",
      "Estratégia Comercial",
      "Geração de Oportunidades",
      "Gestão de Vendas",
    ],
  },
  {
    id: "inovacao",
    name: "Inovação",
    tagline: "Aumente sua eficiência operacional com tecnologia.",
    description:
      "Aplicamos inteligência artificial, automação e tecnologia para reduzir processos manuais, ganhar eficiência e preparar sua empresa para o próximo nível.",
    color: "#68eaa9",
    items: [
      "Tecnologia",
      "Soluções",
      "Inteligência Artificial",
      "Softwares",
      "Desenvolvimento Web",
    ],
  },
];
