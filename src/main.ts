// src/main.ts

import { i18n } from './languages/languagesManager';
import { terminalConsole } from './components/terminalConsole';

interface SystemStatus {
  status: 'ONLINE' | 'MAINTENANCE' | 'OFFLINE';
  version: string;
  encryption: string;
}

const handleLanguageToggle = (button: HTMLButtonElement): void => {
  const currentLang = i18n.getCurrentLanguage();
  if (currentLang === 'pt-BR') {
    i18n.setLanguage('en');
    button.textContent = 'PT';
  } else {
    i18n.setLanguage('pt-BR');
    button.textContent = 'EN';
  }
};

/**
 * Ativa o motor utilitário de animações reativas baseadas na rolagem (scroll)
 */
const initScrollReveal = (): void => {
  // Mapeamos as principais secções do site que devem surgir dinamicamente
  const targetSections = document.querySelectorAll('main > section, footer');
  
  const observerOptions = {
    root: null, // usa o viewport global do navegador
    rootMargin: '0px',
    threshold: 0.12 // a secção ativa a animação quando 12% dela surge no ecrã
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Uma vez visível, deixamos de observar o elemento para poupar memória RAM
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  targetSections.forEach((section) => {
    section.classList.add('reveal'); // Inicializa ocultado no CSS
    observer.observe(section);
  });
};

const initializePortfolio = (config: SystemStatus): void => {
  console.log(`%c[SHIELD PROTOCOL] System Version ${config.version} initialized.`, "color: #00ff00; font-weight: bold;");
  console.log(`%c[STATUS] Firewall: ${config.status} | Cipher: ${config.encryption}`, "color: #00ffff;");
  
  i18n.updateDOM();
  terminalConsole.bind('terminal-container', 'terminal-output', 'terminal-input');

  const languageButton = document.getElementById('languageToggle') as HTMLButtonElement;
  if (languageButton) {
    languageButton.textContent = i18n.getCurrentLanguage() === 'pt-BR' ? 'EN' : 'PT';
    languageButton.addEventListener('click', () => {
      handleLanguageToggle(languageButton);
    });
  }

  // Ativa as animações de scroll reativas
  initScrollReveal();

  terminalConsole.printLine('==================================================', 'system-line');
  terminalConsole.printLine('      SHIELD PROTOCOL OPERATIONAL CORE OS v1.0    ', 'system-line');
  terminalConsole.printLine('==================================================', 'system-line');
  terminalConsole.printLine('Type "help" to list secure communications protocols.\n', 'success-line');
};

document.addEventListener('DOMContentLoaded', () => {
  initializePortfolio({
    status: 'ONLINE',
    version: '1.0.0',
    encryption: 'AES-256-GCM'
  });
});