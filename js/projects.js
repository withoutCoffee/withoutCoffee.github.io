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
  // Exemplo — remova ou edite quando tiver seus projetos reais:
  // {
  //   title: "Meu Projeto",
  //   summary: "Breve descrição do que o projeto faz e qual problema resolve.",
  //   icon: "🚀",
  //   tags: ["Python", "FastAPI", "PostgreSQL"],
  //   link: "projects/meu-projeto.html",
  //   linkType: "page",
  //   linkLabel: "Ver detalhes"
  // },
  // {
  //   title: "Outro Projeto",
  //   summary: "Descrição do projeto com link externo para GitHub ou deploy.",
  //   icon: "📊",
  //   tags: ["React", "Node.js"],
  //   link: "https://github.com/withoutcoffee/outro-projeto",
  //   linkType: "external",
  //   linkLabel: "Ver no GitHub"
  // },
];
