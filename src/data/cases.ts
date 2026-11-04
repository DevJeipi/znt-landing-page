/**
 * Cases de sucesso: usados na seção Cases e no /llms.txt.
 */

// Capas dos cases (cards)
import capa15 from "../assets/cases/CAPA_15.avif";
import capaFlorDeLo from "../assets/cases/CAPA_FLOR_DE_L_.avif";
import capaFluence from "../assets/cases/CAPA_FLUENCE.avif";
import capaPamela from "../assets/cases/CAPA_PAMELA_MENGUE.avif";
import capaSanta from "../assets/cases/CAPA_SANTA.avif";
import capaShallow from "../assets/cases/CAPA_SHALLOW.avif";

// Imagens internas dos projetos (modal)
import projeto15 from "../assets/projetos/PROJETOS_15.png";
import projetoFlorDeLo from "../assets/projetos/PROJETOS_FLOR_DE_L_.png";
import projetoFluence from "../assets/projetos/PROJETOS_FLUENCE.png";
import projetoPamela from "../assets/projetos/PROJETO_PAMELA.png";
import projetoSanta from "../assets/projetos/PROJETOS_SANTA.png";
import projetoShallow from "../assets/projetos/PROJETOS_SHALLOW.png";

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
  client: string;
  tag: string;
  title: string;
  metrics?: CaseMetric[];
  deliverables?: string[];
  href?: string;
  mediaType?: "image" | "video";
  mediaSrc?: string;
  bannerSrc?: string;
  poster?: string;
}

export const cases: CaseItem[] = [
  {
    id: "moda-praia",
    client: "Shallow",
    tag: "Audiovisual + Mídia paga",
    title: "Reposicionamento de marca do segmento de moda praia e fitness",
    mediaType: "image",
    mediaSrc: capaShallow.src,
    bannerSrc: projetoShallow.src,
    metrics: [
      { value: "+312%", label: "Leads" },
      { value: "-27%", label: "CAC" },
      { value: "+12x", label: "ROAS" },
    ],
  },
  {
    id: "massoterapeuta",
    client: "Pâmela",
    tag: "Branding + Identidade visual",
    title:
      "Posicionamento de marca, identidade visual, tom de voz e criação de um ecossistema de serviços para uma massoterapeuta",
    mediaType: "image",
    mediaSrc: capaPamela.src,
    bannerSrc: projetoPamela.src,
    deliverables: ["Identidade Visual", "Branding", "Design de produto"],
  },
  {
    id: "clube-esportivo",
    client: "Clube 15",
    tag: "Gestão de redes sociais",
    title:
      "Ressignificando e dando propósito a um clube esportivo através de uma comunicação estratégica nas redes sociais",
    mediaType: "image",
    mediaSrc: capa15.src,
    bannerSrc: projeto15.src,
    metrics: [
      { value: "+182%", label: "Visualizações orgânicas" },
      { value: "+548%", label: "Interações" },
      { value: "+10.893", label: "Visitas ao perfil/mês" },
    ],
  },
  {
    id: "delivery",
    client: "Flor de Ló",
    tag: "Audiovisual + Mídia paga",
    title:
      "Crescimento de 104,8% nos pedidos via delivery no mês, através de conteúdo orgânico e mídia paga",
    mediaType: "image",
    mediaSrc: capaFlorDeLo.src,
    bannerSrc: projetoFlorDeLo.src,
    metrics: [
      { value: "-11,22%", label: "CAC" },
      { value: "+104,8%", label: "Pedidos" },
      { value: "6x", label: "ROAS" },
    ],
  },
  {
    id: "estilistas",
    client: "Fluence",
    tag: "Gestão de redes sociais",
    title:
      "Após identificarmos estilistas como público-alvo, direcionamos a comunicação para moda e estilo, transformando o conteúdo em um canal de aquisição",
    mediaType: "image",
    mediaSrc: capaFluence.src,
    bannerSrc: projetoFluence.src,
    metrics: [
      { value: "+76%", label: "Pedidos fechados" },
      { value: "+142%", label: "Alcance orgânico" },
      { value: "+62%", label: "Contatos qualificados" },
    ],
  },
  {
    id: "escola",
    client: "Santa Teresinha",
    tag: "Audiovisual",
    title:
      "Estratégia de aquisição para transformar a campanha de matrículas em um canal de entrada de novos alunos para a escola",
    mediaType: "image",
    mediaSrc: capaSanta.src,
    bannerSrc: projetoSanta.src,
    metrics: [
      { value: "+33%", label: "Novas matrículas" },
      { value: "+127%", label: "Leads interessados" },
      { value: "-61%", label: "Custo por lead" },
    ],
  },
];
