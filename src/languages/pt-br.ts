import { TranslationSchema } from './translations';

export const ptBr: TranslationSchema = {
  metadata: {
    title: "Shield Protocol - Portfólio Técnico",
    description: "Plataforma de segurança e desenvolvimento de sistemas de alto impacto.",
  },

  nav: {
    title: "Shield Protocol",
    subtitle: "Portfólio de Engenharia de Sistemas Seguros",
    home: "Início",
    about: "Sobre",
    journey: "Jornada",
    stack: "Stack",
    projects: "Projetos",
    contact: "Contato",
  },

  hero: {
    badge: "ENGENHARIA DE SISTEMAS SEGUROS",
    welcome: "SISTEMA INICIALIZADO",
    title: "Engenharia Backend, Segurança em Cloud & Arquitetura Segura",
    subtitle: "Bacharelando em Ciência da Computação com foco em Java, ecossistema Spring, segurança de APIs, DevSecOps e arquitetura segura.",
    description: "Bacharelando em Ciência da Computação com foco em Java, ecossistema Spring, segurança de APIs, DevSecOps e arquitetura segura.",
    cta: "Executar Inspeção",
    projectsButton: "Ver Projetos",
    githubButton: "GitHub",
  },

  about: {
    label: "SOBRE",
    title: "Construindo engenharia, segurança e evolução contínua.",
    description1: "Bacharelando em Ciência da Computação com foco em engenharia backend, segurança de APIs, cloud security e arquitetura escalável.",
    description2: "Construindo conhecimento em Java, Spring, DevSecOps, Linux, cloud e desenvolvimento seguro.",
    description3: "Objetivo: construir sistemas robustos, seguros e orientados à engenharia.",
    backend: {
      title: "Engenharia Backend",
      description: "Java, Spring Boot, APIs REST e arquitetura escalável.",
    },
    security: {
      title: "Segurança & Cloud",
      description: "Segurança de APIs, Cloud e práticas DevSecOps.",
    },
    learning: {
      title: "Evolução Contínua",
      description: "Expansão contínua em arquitetura, observabilidade e engenharia.",
    },
  },

  journey: {
    label: "JORNADA",
    title: "Evolução contínua em engenharia, segurança e arquitetura.",
    description: "Construindo conhecimento técnico progressivo com foco em backend, cloud, segurança e aplicações reais.",
    current: {
      year: "2024",
      title: "Fundamentos & Base Técnico",
      description: "Início da formação em tecnologia com fundamentos de Linux, redes, infraestrutura e engenharia de software, consolidando a base para evolução técnica.",
    },
    evolution: {
      year: "2025",
      title: "Backend, Cloud & Segurança",
      description: "Formalização do aprofundamento em Cybersecurity, engenharia backend, Java, JavaScript, cloud computing e arquitetura segura.",
    },
    expansion: {
      year: "2026",
      title: "Projetos Reais & Expansão",
      description: "Aplicação prática em projetos freelancer, aprofundamento em PHP, Python, automações, IA aplicada e desenvolvimento orientado a soluções.",
    },
    future: {
      year: "FUTURO",
      title: "Especialização & Soluções",
      description: "Foco em DevSecOps, AppSec, Ethical Hacking, arquitetura de soluções e desenvolvimento de projetos empresariais reais.",
    },
  },

  stack: {
    label: "STACK",
    title: "Tecnologias, ferramentas e ecossistema de engenharia.",
    description: "Construindo uma base técnica voltada para backend, segurança, cloud e arquitetura.",
    backendTitle: "Engenharia Backend",
    securityTitle: "Segurança & Cloud",
    evolutionTitle: "Evolução Contínua",
  },

  projects: {
    label: "PROJETOS",
    title: "Projetos reais, evolução técnica e construção contínua.",
    description: "Projetos voltados para engenharia, aplicações reais e evolução prática.",
    vl: {
      badge: "MVP ENTREGUE",
      description: "Landing page institucional premium desenvolvida para a VL Estética e Fisioterapia, com foco em experiência do usuário, performance e acessibilidade.",
    },
    labs: {
      badge: "Em desenvolvimento",
      description: "Laboratórios focados em backend, APIs seguras, observabilidade, arquitetura e práticas DevSecOps.",
    },
  },

  footer: {
    contact: {
      label: "CONTATO",
      title: "Construindo projetos, conhecimento e soluções orientadas à engenharia.",
      description: "Aberto para oportunidades, freelas, colaboração técnica e projetos reais.",
    },
    copyright: "© 2026 Shield Protocol. Todos os direitos reservados.",
  },

  terminal: {
    welcome: "SHIELD PROTOCOL OPERATIONAL CORE OS v1.0",
    help_message: "Digite 'help' para listar os protocolos de comunicação seguros.",
    waiting: "Aguardando comando...",
    success: "[INSPEÇÃO CONCLUÍDA] Perímetro do ecossistema totalmente íntegro.",
    accessDenied: "ERRO: Acesso negado",
    invalidLang: "ERRO: Parâmetro de idioma inválido. Use 'lang en' ou 'lang pt'.",
    shiftSuccess: "Orientação linguística do sistema alterada para Português.",
    helpOutput: "[COMANDOS DISPONÍVEIS]\n  help        - Exibe os protocolos ativos de comando.\n  clear       - Limpa o buffer de log do console.\n  about       - Transmite uma visão geral sobre o engenheiro.\n  skills      - Varre a matriz da stack de tecnologias.\n  scan        - Executa uma inspeção simulada de perímetro.\n  lang <code细> - Altera o idioma da interface (en / pt)."
  },
};