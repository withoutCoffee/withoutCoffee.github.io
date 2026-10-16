/**
 * ARQUIVO DE PROJETOS
 * -------------------
 * Para adicionar um novo projeto, basta copiar um dos objetos abaixo
 * e preencher com os dados do seu projeto.
 *
 * Campos:
 *   title    — nome do projeto
 *   summary  — descrição curta (aparece no card)
 *   icon     — emoji ou ícone para o card
 *   cover    — caminho da imagem de capa do card (opcional, ex: "assets/foo.png")
 *   coverAlt — texto alternativo da capa (opcional, padrão: o título)
 *   tags     — array de tecnologias usadas
 *   link     — URL de destino do botão
 *   linkType — "page" (página interna em /projects/) ou "external" (link externo)
 *   linkLabel — texto do botão (opcional, padrão: "Ver projeto")
 *
 * Para criar uma página de detalhes interna:
 *   1. Copie o arquivo projects/_template.html
 *   2. Renomeie para projects/nome-do-projeto.html
 *   3. Edite com os detalhes do projeto
 *   4. No campo "link" coloque: "projects/nome-do-projeto.html"
 *   5. No campo "linkType" coloque: "page"
 */

const PROJECTS = [
  {
    title: "Sistema de Gestão de RH",
    summary: "Sistema de gestão de pessoal e documentos digitalizados para a Prefeitura de Bodocó — cerca de 960 servidores, com trilha de auditoria completa.",
    icon: "🏛️",
    cover: "assets/sistema-rh-dashboard.png",
    coverAlt: "Dashboard do Sistema RH com os totais de funcionários do município",
    tags: ["Node.js", "TypeScript", "Prisma ORM", "PostgreSQL", "MongoDB", "Cloudflare R2"],
    link: "projects/sistema-rh.html",
    linkType: "page",
    linkLabel: "Ver detalhes",
  },
  {
    title: "Programa Florescer",
    summary: "Acompanhamento de frequência, serviço comunitário, saúde e formação profissional das beneficiárias do programa social de Bodocó.",
    icon: "🌻",
    cover: "assets/florescer-home.png",
    coverAlt: "Página inicial do Programa Florescer",
    tags: ["Node.js", "TypeScript", "React", "Prisma ORM", "PostgreSQL"],
    link: "projects/florescer.html",
    linkType: "page",
    linkLabel: "Ver detalhes",
  },
  {
    title: "Cardápio Digital",
    summary: "Plataforma para restaurantes: QR Code por mesa, comanda individual, delivery, estoque e montagem personalizada de pratos em tempo real.",
    icon: "🍽️",
    cover: "assets/cardapio-pedidos.png",
    coverAlt: "Painel de pedidos do Cardápio Digital, com filtros por canal e status",
    tags: ["Node.js", "TypeScript", "React", "Prisma ORM", "PostgreSQL", "WebSocket", "Cloudflare R2", "Resend"],
    link: "projects/cardapio-digital.html",
    linkType: "page",
    linkLabel: "Ver detalhes",
  },
];
