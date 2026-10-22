/**
 * Cases de sucesso: usados na seção Cases e no /llms.txt.
 */

import caseClube15 from "../assets/cases/case-clube15.webp";
import caseFlordelo from "../assets/cases/case-flordelo.webp";
import caseFluence from "../assets/cases/case-fluence.webp";
import caseSantaTeresinha from "../assets/cases/case-santateresinha.webp";
import caseShallow from "../assets/cases/case-shallow.webp";

/**
 * COMO ADICIONAR FOTO OU VÍDEO EM UM CASE:
 *
 * 1. Coloque o arquivo em `src/assets/cases/` (ex: `case-saude.webp`, `case-ecommerce.mp4`).
 * 2. Foto:  importe no topo (`import caseSaude from "../assets/cases/case-saude.webp"`)
 *           e defina `mediaType: "image", mediaSrc: caseSaude.src`.
 * 3. Vídeo: importe ou aponte para `/cases/case-ecommerce.mp4` (pasta `public/cases/`)
 *           e defina `mediaType: "video", mediaSrc: "/cases/case-ecommerce.mp4"`.
 *           O vídeo roda em loop, sem som (autoplay muted) e usa `poster` como capa.
 * 4. Sem mídia: basta omitir `mediaType`: o card usa o fundo decorativo em glow azul.
 */

export interface CaseMetric {
  value: string;
  label: string;
}

export interface CaseItem {
  id: string;
  tag: string;
  title: string;
  metrics?: CaseMetric[];
  deliverables?: string[];
  href?: string;
  mediaType?: "image" | "video";
  mediaSrc?: string;
  poster?: string;
}

export const cases: CaseItem[] = [
  {
    id: "moda-praia",
    tag: "Audiovisual + Mídia paga",
    title: "Reposicionamento de marca do segmento de moda praia e fitness",
    mediaType: "image",
    mediaSrc: caseShallow.src,
    metrics: [
      { value: "+312%", label: "Leads" },
      { value: "-27%", label: "CAC" },
      { value: "+5,8x", label: "ROAS" },
    ],
  },
  {
    id: "massoterapeuta",
    tag: "Branding + Identidade visual",
    title:
      "Posicionamento de marca, identidade visual, tom de voz e criação de um ecossistema de serviços para uma massoterapeuta",
    deliverables: ["Identidade Visual", "Branding", "Design de produto"],
  },
  {
    id: "clube-esportivo",
    tag: "Gestão de redes sociais",
    title:
      "Ressignificando e dando propósito a um clube esportivo através de uma comunicação estratégica nas redes sociais",
    mediaType: "image",
    mediaSrc: caseClube15.src,
    metrics: [
      { value: "+182%", label: "Visualizações orgânicas" },
      { value: "+548%", label: "Interações" },
      { value: "+10.893", label: "Visitas ao perfil/mês" },
    ],
  },
  {
    id: "delivery",
    tag: "Audiovisual + Mídia paga",
    title:
      "Crescimento de 104,8% nos pedidos via delivery no mês, através de conteúdo orgânico e mídia paga",
    mediaType: "image",
    mediaSrc: caseFlordelo.src,
    metrics: [
      { value: "-11,22%", label: "CAC" },
      { value: "+104,8%", label: "Pedidos" },
      { value: "9,2x", label: "ROAS" },
    ],
  },
  {
    id: "estilistas",
    tag: "Gestão de redes sociais",
    title:
      "Após identificarmos estilistas como público-alvo, direcionamos a comunicação para moda e estilo, transformando o conteúdo em um canal de aquisição",
    mediaType: "image",
    mediaSrc: caseFluence.src,
    metrics: [
      { value: "+76%", label: "Pedidos fechados" },
      { value: "+142%", label: "Alcance orgânico" },
      { value: "+62%", label: "Contatos qualificados" },
    ],
  },
  {
    id: "escola",
    tag: "Audiovisual",
    title:
      "Estratégia de aquisição para transformar a campanha de matrículas em um canal de entrada de novos alunos para a escola",
    mediaType: "image",
    mediaSrc: caseSantaTeresinha.src,
    metrics: [
      { value: "+33%", label: "Novas matrículas" },
      { value: "+127%", label: "Leads interessados" },
      { value: "-61%", label: "Custo por lead" },
    ],
  },
];
