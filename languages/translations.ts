export interface TranslationSchema {
  metadata: {
    title: string;
    description: string;
  };
  nav: {
    title: string;
    subtitle: string;
    home: string;
    about: string;
    journey: string;
    stack: string;
    projects: string;
    contact: string;
  };
  hero: {
    badge: string;
    welcome: string;
    title: string;
    subtitle: string;
    description: string;
    cta: string;
    projectsButton: string;
    githubButton: string;
  };
  about: {
    label: string;
    title: string;
    description1: string;
    description2: string;
    description3: string;
    backend: {
      title: string;
      description: string;
    };
    security: {
      title: string;
      description: string;
    };
    learning: {
      title: string;
      description: string;
    };
  };
  journey: {
    label: string;
    title: string;
    description: string;
    current: {
      year: string;
      title: string;
      description: string;
    };
    evolution: {
      year: string;
      title: string;
      description: string;
    };
    expansion: {
      year: string;
      title: string;
      description: string;
    };
    future: {
      year: string;
      title: string;
      description: string;
    };
  };
  stack: {
    label: string;
    title: string;
    description: string;
    backendTitle: string;
    securityTitle: string;
    evolutionTitle: string;
  };
  projects: {
    label: string;
    title: string;
    description: string;
    vl: {
      badge: string;
      description: string;
    };
    labs: {
      badge: string;
      description: string;
    };
  };
  footer: {
    contact: {
      label: string;
      title: string;
      description: string;
    };
    copyright: string;
  };
  terminal: {
    placeholder: string;
    accessDenied: string;
    success: string;
  };
}