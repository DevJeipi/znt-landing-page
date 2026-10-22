/**
 * /llms.txt: resumo do site em Markdown para modelos de linguagem
 * (ChatGPT, Claude, Perplexity, Gemini). Gerado a partir dos mesmos dados
 * exibidos na página, para nunca ficar desatualizado.
 * Especificação: https://llmstxt.org
 */
import type { APIRoute } from "astro";
import { SITE, faqs } from "../data/site";
import { pillars } from "../data/services";
import { cases } from "../data/cases";

export const GET: APIRoute = () => {
  const { address, stats, social } = SITE;

  const body = `# ${SITE.name} (${SITE.legalName})

> ${SITE.summary}

- Site: ${SITE.url}
- Slogan: ${SITE.slogan}
- Endereço: ${address.streetAddress}, ${address.neighborhood}, ${address.addressLocality} - ${address.addressRegion}, Brasil
- E-mail: ${SITE.email}
- Agendar diagnóstico: ${SITE.ctaUrl}
- Instagram: ${social.instagram}
- LinkedIn: ${social.linkedin}

## Resultados

- ${stats.revenueFromPaidMedia} de receita gerada por mídia paga
- ${stats.views} de visualizações geradas
- ${stats.clients} clientes atendidos
- ${stats.projects} projetos entregues

## Serviços

${pillars
  .map(
    (pillar) =>
      `### ${pillar.name}\n\n${pillar.tagline} ${pillar.description}\n\n${pillar.items
        .map((item) => `- ${item}`)
        .join("\n")}`,
  )
  .join("\n\n")}

## Cases de sucesso

${cases
  .map((item) => {
    const details = item.metrics
      ? item.metrics.map((m) => `${m.label}: ${m.value}`).join("; ")
      : (item.deliverables ?? []).join(", ");
    return `- **${item.title}** (${item.tag}). ${details}`;
  })
  .join("\n")}

## Perguntas frequentes

${faqs.map((faq) => `### ${faq.question}\n\n${faq.answer}`).join("\n\n")}

## Páginas

- [Página inicial](${SITE.url}/): apresentação, serviços, time, cases e contato
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
