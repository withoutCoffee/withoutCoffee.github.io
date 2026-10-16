/**
 * ARQUIVO DE EXPERIÊNCIAS
 * -----------------------
 * Para adicionar uma experiência, copie um dos objetos abaixo e preencha.
 *
 * Campos:
 *   role        — cargo
 *   company     — empresa / instituição
 *   start       — data de início (texto livre, ex: "Jan 2026")
 *   end         — data de fim (texto livre) ou null para "Atualmente"
 *   description — array de strings, cada item vira um bullet point
 *   tags        — array de tecnologias / ferramentas usadas
 *
 * A ordem aqui é a ordem de exibição (coloque a mais recente primeiro).
 */

const EXPERIENCES = [
  {
    role: "Software Engineer",
    company: "Prefeitura Municipal de Bodocó — PE",
    start: "Jan 2026",
    end: null,
    description: [
      "Desenvolvimento de sistemas internos para gestão de pessoas e análise de dados financeiros.",
      "Sistema de Gestão de RH (~960 servidores, documentos digitalizados em Cloudflare R2 e auditoria em MongoDB) e sistema do Programa Florescer, em parceria com a Secretaria de Meio Ambiente.",
      "Backend com Python + FastAPI + Alembic e Node.js + TypeScript + Prisma ORM usando PostgreSQL e MongoDB.",
      "Análise e estruturação de dados municipais com Python, Pandas, NumPy e Plotly.",
      "Interfaces de suporte com React Web, HTML, CSS e JavaScript.",
      "Deploys em VPS privada utilizando Coolify e Dokploy.",
    ],
    tags: ["Python", "FastAPI", "Node.js", "TypeScript", "Prisma", "PostgreSQL", "MongoDB", "Cloudflare R2", "Streamlit", "React", "Coolify"],
  },
  {
    role: "Analista de Dados",
    company: "Universidade Federal da Paraíba — UFPB",
    start: "Ago 2022",
    end: "Mar 2023",
    description: [
      "Projeto PHI (Paraíba Humana Inteligente) — análise de dados educacionais e criação de material sobre boas práticas de tecnologia e conformidade com a LGPD.",
      "Modelagem de dados com Excel e Python Pandas.",
      "Criação de dashboards e visualizações estratégicas com Looker Studio.",
    ],
    tags: ["Python", "Pandas", "Looker Studio", "Excel", "LGPD"],
  },
  {
    role: "Engenheiro de Dados",
    company: "Universidade Federal da Paraíba — UFPB",
    start: "Fev 2020",
    end: "Nov 2021",
    description: [
      "Desenvolvimento de aplicação de IA para tradução de textos em português para glosa de Libras (VLibras).",
      "Scripts em Python + Pandas + Regex para Data Augmentation e Data Cleaning de textos.",
      "Construção de pipeline para treinamento de modelos de Machine Learning, via SSH e Tmux em servidor físico compartilhado.",
      "Uso de GitFlow para versionamento e organização do código em equipe.",
    ],
    tags: ["Python", "Pandas", "Regex", "Machine Learning", "SSH", "Tmux", "GitFlow", "NLP"],
  },
];
