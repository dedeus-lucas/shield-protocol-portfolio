import { TranslationSchema } from './translations';

export const en: TranslationSchema = {
  metadata: {
    title: "Shield Protocol - Software Engineering & Security",
    description: "Technical portfolio focused on backend engineering, secure systems architecture, and DevSecOps.",
  },

  nav: {
    title: "Shield Protocol",
    subtitle: "Secure Systems Engineering",
    home: "Home",
    about: "About",
    journey: "Journey",
    stack: "Stack",
    projects: "Projects",
    contact: "Contact",
  },

  hero: {
    badge: "SECURE SYSTEMS ENGINEERING",
    welcome: "SYSTEM INITIALIZED",
    title: "Backend Engineering, Cloud Security & Secure Architecture",
    subtitle: "Developing scalable ecosystems focusing on Java, Spring Boot, API protection, and DevSecOps automation.",
    description: "Computer Science undergraduate focused on building robust applications, mitigating corporate vulnerabilities, and distributed infrastructure.",
    cta: "Execute Inspection",
    projectsButton: "View Projects",
    githubButton: "GitHub",
  },

  about: {
    label: "ABOUT",
    title: "Building resilient engineering, active security, and continuous evolution.",
    description1: "Computer Science undergraduate specialized in the design and implementation of high-availability backend architectures, rigorous API security, and Cloud Security.",
    description2: "Proficient in the Spring ecosystem, automated CI/CD pipelines under a DevSecOps culture, Docker virtualization, and critical Linux environment administration.",
    description3: "Objective: To develop fault-tolerant enterprise systems by applying cutting-edge cryptography and core principles of Clean Architecture.",
    backend: {
      title: "Backend Engineering",
      description: "Robust development with Java, Spring Boot, JPA/Hibernate, and relational/non-relational database modeling.",
    },
    security: {
      title: "Security & Cloud",
      description: "OWASP Top 10 mitigation, restricted API auditing, IAM management on AWS/GCP, and container hardening.",
    },
    learning: {
      title: "Continuous Evolution",
      description: "Ongoing research into event-driven microservices, Site Reliability Engineering (SRE), and deep observability.",
    },
  },

  journey: {
    label: "JOURNEY",
    title: "Technical progression oriented toward mission-critical systems.",
    description: "Continuous evolution grounded in pure software engineering, defensive security, and delivering scalable solutions in real-world scenarios.",
    current: {
      year: "2024",
      title: "Foundations & Technical Base",
      description: "Formal entry into Computer Science. Consolidation of structural pillars in computer networks, Linux OS architecture, algorithms, and infrastructure.",
    },
    evolution: {
      year: "2025",
      title: "Backend, Cloud & Security",
      description: "Specialization in the Java/Spring ecosystem. In-depth study of cryptography, API protection (OAuth2/JWT), containerization with Docker, and Cloud Security provisioning.",
    },
    expansion: {
      year: "2026",
      title: "Real Projects & Expansion",
      description: "Architecture and deployment of enterprise platforms. Autonomous development of large-scale solutions, multi-framework integrations (PHP/Python), and automation via applied AI.",
    },
    future: {
      year: "FUTURE",
      title: "Specialization & Solutions",
      description: "High-Seniority Software Engineering. Advanced focus on AppSec, robust DevSecOps, enterprise System Design modeling, and distributed systems auditing.",
    },
  },

  stack: {
    label: "STACK",
    title: "Technologies, tools, and engineering ecosystem.",
    description: "A comprehensive skill set structured to support scalable, secure, and monitored backend applications.",
    backendTitle: "Backend Engineering",
    securityTitle: "Security & Cloud",
    evolutionTitle: "Continuous Evolution",
  },

  projects: {
    label: "PROJECTS",
    title: "Real projects, technical evolution, and continuous construction.",
    description: "Systems developed under strict software engineering, performance, and secure design metrics.",
    advocaciaPremium: {
      desc: "Premium institutional Landing Page tailored for high-complexity corporate law. Engineered under a clean modular architecture leveraging Vite, Sass (Modern Modules), and Vanilla JavaScript. Built to eliminate Hydration Overhead, securing sub-second load times via aggressive LCP optimization and absolute universal accessibility compliance (WCAG 2.1 AA) featuring a native JavaScript Focus Trap for assistive technologies."
    },
    vl: {
      badge: "MVP DELIVERED",
      description: "Premium institutional platform optimized for VL Estética e Fisioterapia. Engineering focused on Core Web Vitals, performance extrema, advanced SEO, and digital accessibility (a11y).",
    },
    labs: {
      badge: "IN DEVELOPMENT",
      description: "Isolated environments (sandbox) focused on Java microservices design, load testing, deep observability (Prometheus/Grafana), and DevSecOps pipelines.",
    },
  },

  footer: {
    contact: {
      label: "CONTACT",
      title: "Building projects, knowledge, and engineering-oriented solutions.",
      description: "Available for technical consulting, freelance software engineering, security project partnerships, and enterprise corporate positions.",
    },
    copyright: "© 2026 Shield Protocol. All rights reserved.",
  },

  terminal: {
    welcome: "SHIELD PROTOCOL OPERATIONAL CORE OS v1.0",
    help_message: "Type 'help' to list secure communications protocols.",
    waiting: "Awaiting command...",
    success: "[SCAN COMPLETED] Ecosystem perimeter fully verified.",
    accessDenied: "ERROR: Access denied",
    invalidLang: "ERROR: Invalid language parameter. Use 'lang en' or 'lang pt'.",
    shiftSuccess: "System linguistic orientation shifted to English.",
    helpOutput: "[AVAILABLE COMMANDS]\n  help        - Display active command protocols.\n  clear       - Purge terminal console buffer.\n  about       - Stream engineer professional overview.\n  skills      - Scan active technology stack matrix.\n  scan        - Execute simulated core perimeter inspection.\n  lang <code细> - Switch system interface language (en / pt)."
  },
};