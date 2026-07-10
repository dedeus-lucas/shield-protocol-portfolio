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

const renderTerminalWelcomeMessage = (): void => {
  const translations = i18n.getText();
  
  const outputContainer = document.getElementById('terminal-output');
  if (outputContainer) {
    outputContainer.innerHTML = '';
  }

  terminalConsole.printLine('==================================================', 'system-line');
  terminalConsole.printLine(`      ${translations.terminal.welcome}    `, 'system-line');
  terminalConsole.printLine('==================================================', 'system-line');
  terminalConsole.printLine(`${translations.terminal.help_message}\n`, 'success-line');
};

const updateTerminalPlaceholder = (): void => {
  const terminalInput = document.getElementById('terminal-input') as HTMLInputElement;
  if (terminalInput) {
    const translations = i18n.getText();
    terminalInput.placeholder = translations.terminal?.waiting || 'Awaiting command...';
    terminalInput.value = '';
  }
};

const handleLanguageToggle = (button: HTMLButtonElement): void => {
  const currentLang = i18n.getCurrentLanguage();
  if (currentLang === 'pt-BR') {
    i18n.setLanguage('en');
    button.textContent = 'PT';
  } else {
    i18n.setLanguage('pt-BR');
    button.textContent = 'EN';
  }
  
  updateTerminalPlaceholder();
  
  renderTerminalWelcomeMessage();
};

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
  
  // 1. Inicialização das amarrações dinâmicas de internacionalização do DOM
  i18n.updateDOM();

  // 2. Acoplamento do terminal interativo
  terminalConsole.bind('terminal-container', 'terminal-output', 'terminal-input');

  // 3. Força a tradução inicial do placeholder e do buffer de texto do console
  updateTerminalPlaceholder();
  renderTerminalWelcomeMessage();

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
};

document.addEventListener('DOMContentLoaded', () => {
  initializePortfolio({
    status: 'ONLINE',
    version: '1.0.0',
    encryption: 'AES-256-GCM'
  });
});