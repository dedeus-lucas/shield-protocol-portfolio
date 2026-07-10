// src/main.ts

/* =========================================================
   ORQUESTRAÇÃO DE ESTILOS (VITE BUNDLER)
========================================================= */
import './styles/reset.css';
import './styles/variables.css';
import './styles/typography.css';
import './styles/layout.css';
import './styles/style.css';

/* =========================================================
   IMPORTS DE LÓGICA E COMPONENTES
========================================================= */
import { i18n } from './languages/languagesManager';
import { terminalConsole } from './components/terminalConsole';

interface SystemStatus {
  status: 'ONLINE' | 'MAINTENANCE' | 'OFFLINE';
  version: string;
  encryption: string;
}

/**
 * Atualiza o placeholder do terminal baseado no idioma ativo
 */
const updateTerminalPlaceholder = (): void => {
  const terminalInput = document.getElementById('terminal-input') as HTMLInputElement;
  if (terminalInput) {
    // Busca a tradução direto do gerenciador e injeta como placeholder
    const translations = i18n.getText();
    terminalInput.placeholder = translations.terminal?.waiting || 'Awaiting command...';
  }
};

/**
 * Gerencia a alternância de idiomas e a atualização visual do botão correspondente
 */
const handleLanguageToggle = (button: HTMLButtonElement): void => {
  const currentLang = i18n.getCurrentLanguage();
  if (currentLang === 'pt-BR') {
    i18n.setLanguage('en');
    button.textContent = 'PT';
  } else {
    i18n.setLanguage('pt-BR');
    button.textContent = 'EN';
  }
  
  // Sincroniza o placeholder do terminal imediatamente após a troca
  updateTerminalPlaceholder();
};

/**
 * Ativa o motor utilitário de animações reativas baseadas na rolagem (scroll)
 */
const initScrollReveal = (): void => {
  const targetSections = document.querySelectorAll('main > section, footer');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.12
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  targetSections.forEach((section) => {
    section.classList.add('reveal');
    observer.observe(section);
  });
};

const initializePortfolio = (config: SystemStatus): void => {
  console.log(`%c[SHIELD PROTOCOL] System Version ${config.version} initialized.`, "color: #00ff00; font-weight: bold;");
  console.log(`%c[STATUS] Firewall: ${config.status} | Cipher: ${config.encryption}`, "color: #00ffff;");
  
  // 1. Inicialização das amarrações dinâmicas de internacionalização
  i18n.updateDOM();

  // 2. Acoplamento do terminal interativo
  terminalConsole.bind('terminal-container', 'terminal-output', 'terminal-input');

  // 3. Configura o placeholder inicial traduzido do terminal
  updateTerminalPlaceholder();

  // 4. Orquestração da reatividade do botão de idiomas
  const languageButton = document.getElementById('languageToggle') as HTMLButtonElement;
  if (languageButton) {
    languageButton.textContent = i18n.getCurrentLanguage() === 'pt-BR' ? 'EN' : 'PT';
    languageButton.addEventListener('click', () => {
      handleLanguageToggle(languageButton);
    });
  }

  // 5. Ativa as animações de scroll reativas
  initScrollReveal();

  // Mensagem operacional de boas-vindas no buffer do terminal
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