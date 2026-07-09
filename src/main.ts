// src/main.ts

import { i18n } from './languages/languagesManager';
import { terminalConsole } from './components/terminalConsole';

interface SystemStatus {
  status: 'ONLINE' | 'MAINTENANCE' | 'OFFLINE';
  version: string;
  encryption: string;
}

/**
 * Gerencia a alternância de idiomas e a atualização visual do botão correspondente
 */
const handleLanguageToggle = (button: HTMLButtonElement): void => {
  const currentLang = i18n.getCurrentLanguage();
  
  // Se estiver em pt-BR, muda para en. Se estiver em en, muda para pt-BR.
  if (currentLang === 'pt-BR') {
    i18n.setLanguage('en');
    button.textContent = 'PT'; // Se o site virou inglês, o botão oferece voltar para PT
  } else {
    i18n.setLanguage('pt-BR');
    button.textContent = 'EN'; // Se o site virou português, o botão oferece ir para EN
  }
};

const initializePortfolio = (config: SystemStatus): void => {
  console.log(`%c[SHIELD PROTOCOL] System Version ${config.version} initialized.`, "color: #00ff00; font-weight: bold;");
  console.log(`%c[STATUS] Firewall: ${config.status} | Cipher: ${config.encryption}`, "color: #00ffff;");
  
  // 1. Inicialização das amarrações dinâmicas de internacionalização
  i18n.updateDOM();

  // 2. Acoplamento do terminal interativo
  terminalConsole.bind('terminal-container', 'terminal-output', 'terminal-input');

  // 3. Orquestração da reatividade do botão de idiomas
  const languageButton = document.getElementById('languageToggle') as HTMLButtonElement;
  if (languageButton) {
    // Sincroniza o texto inicial do botão com o idioma detectado no boot
    languageButton.textContent = i18n.getCurrentLanguage() === 'pt-BR' ? 'EN' : 'PT';
    
    // Adiciona o escutador de clique
    languageButton.addEventListener('click', () => {
      handleLanguageToggle(languageButton);
    });
  }

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