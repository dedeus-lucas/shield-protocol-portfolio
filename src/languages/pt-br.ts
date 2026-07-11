import { TranslationSchema } from './translations';

export const ptBr: TranslationSchema = {
  metadata: {
    title: "Shield Protocol - Engenharia de Software & Segurança",
    description: "Portfólio técnico focado em engenharia backend, arquitetura de sistemas seguros e DevSecOps.",
  },

  nav: {
    title: "Shield Protocol",
    subtitle: "Engenharia de Sistemas Seguros",
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
    subtitle: "Desenvolvimento de ecossistemas escaláveis com foco em Java, Spring Boot, proteção de APIs e automação DevSecOps.",
    description: "Bacharelando em Ciência da Computação focado na construção de aplicações robustas, mitigação de vulnerabilidades corporativas e infraestrutura distribuída.",
    cta: "Executar Inspeção",
    projectsButton: "Ver Projetos",
    githubButton: "GitHub",
  },

  about: {
    label: "SOBRE",
    title: "Construindo engenharia resiliente, segurança ativa e evolução contínua.",
    description1: "Bacharelando em Ciência da Computação especializado no design e implementação de arquiteturas backend de alta disponibilidade, segurança rigorosa de APIs e Cloud Security.",
    description2: "Proficiente no ecossistema Spring, pipelines de CI/CD automatizados sob cultura DevSecOps, virtualização com Docker e administração de ambientes críticos em Linux.",
    description3: "Objetivo: Desenvolver sistemas corporativos tolerantes a falhas, aplicando criptografia de ponta e princípios fundamentais de Clean Architecture.",
    backend: {
      title: "Engenharia Backend",
      description: "Desenvolvimento robusto com Java, Spring Boot, JPA/Hibernate e modelagem de bancos de dados relacionais e não-relacionais.",
    },
    security: {
      title: "Segurança & Cloud",
      description: "Mitigação de OWASP Top 10, auditoria de APIs restritas, gerenciamento de IAM na AWS/GCP e hardening de contêineres.",
    },
    learning: {
      title: "Evolução Contínua",
      description: "Pesquisa contínua em microserviços orientados a eventos, engenharia de confiabilidade (SRE) e observabilidade profunda.",
    },
  },

  journey: {
    label: "JORNADA",
    title: "Progressão técnica orientada a sistemas de missão crítica.",
    description: "Evolução contínua fundamentada em engenharia de software pura, segurança defensiva e entrega de soluções escaláveis em cenários reais.",
    current: {
      year: "2024",
      title: "Fundamentos & Base Técnica",
      description: "Ingresso formal na Ciência da Computação. Consolidação de pilares estruturais em redes de computadores, arquitetura de SO Linux, algoritmos e infraestrutura de redes.",
    },
    evolution: {
      year: "2025",
      title: "Backend, Cloud & Segurança",
      description: "Especialização no ecossistema Java/Spring. Aprofundamento em criptografia, proteção de APIs (OAuth2/JWT), conteinerização com Docker e provisionamento em Cloud Security.",
    },
    expansion: {
      year: "2026",
      title: "Projetos Reais & Expansão",
      description: "Arquitetura e implantação de plataformas corporativas. Desenvolvimento autônomo de soluções em larga escala, integrações multiframework (PHP/Python) e automação via IA aplicada.",
    },
    future: {
      year: "FUTURO",
      title: "Especialização & Soluções",
      description: "Engenharia de Software de Alta Senioridade. Foco avançado em AppSec, DevSecOps robusto, modelagem de System Design empresarial e auditoria de sistemas distribuídos.",
    },
  },

  stack: {
    label: "STACK",
    title: "Tecnologias, ferramentas e ecossistema de engenharia.",
    description: "Conjunto de competências estruturado para sustentar aplicações backend escaláveis, seguras e monitoradas.",
    backendTitle: "Backend Engineering",
    securityTitle: "Security & Cloud",
    evolutionTitle: "Continuous Evolution",
  },

  projects: {
    label: "PROJETOS",
    title: "Projetos reais, evolução técnica e construção contínua.",
    description: "Sistemas desenvolvidos sob métricas rigorosas de engenharia, performance e design seguro.",
    advocaciaPremium: {
      desc: "Landing Page institucional premium focada em advocacia corporativa de alta complexidade. Desenvolvida em arquitetura modular com Vite, Sass (Modern Modules) e JavaScript Vanilla. Implementação rigorosa de performance extrema eliminando o Hydration Overhead, otimização severa de LCP e conformidade de acessibilidade universal (WCAG 2.1 AA) com Focus Trap nativo para navegação assistida."
    },
    vl: {
      badge: "MVP ENTREGUE",
      description: "Plataforma institucional premium otimizada para a VL Estética e Fisioterapia. Engenharia focada em Core Web Vitals, performance extrema, SEO avançado e acessibilidade digital (a11y).",
    },
    labs: {
      badge: "EM DESENVOLVIMENTO",
      description: "Ambientes isolados (sandbox) focados no design de microsserviços Java, testes de carga, observabilidade (Prometheus/Grafana) e esteiras DevSecOps.",
    },
  },

  footer: {
    contact: {
      label: "CONTATO",
      title: "Construindo projetos, conhecimento e soluções orientadas à engenharia.",
      description: "Disponível para consultoria técnica, engenharia de software freelancer, parcerias em projetos de segurança e posições corporativas.",
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