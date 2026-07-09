// src/main.ts

// CORREÇÃO: Alinhamento exato com a pasta src/languages/languageManager após a migração
import { i18n } from './languages/languagesManager';
import { terminalConsole } from './components/terminalConsole';

interface SystemStatus {
  status: 'ONLINE' | 'MAINTENANCE' | 'OFFLINE';
  version: string;
  encryption: string;
}

const initializePortfolio = (config: SystemStatus): void => {
  console.log(`%c[SHIELD PROTOCOL] System Version ${config.version} initialized.`, "color: #00ff00; font-weight: bold;");
  console.log(`%c[STATUS] Firewall: ${config.status} | Cipher: ${config.encryption}`, "color: #00ffff;");
  
  // Inicialização das amarrações dinâmicas de internacionalização e UI
  i18n.updateDOM();

  // Acoplamento do terminal interativo utilizando os seletores corretos do DOM
  terminalConsole.bind('terminal-container', 'terminal-output', 'terminal-input');

  // Mensagem operacional de boas-vindas ao ecossistema do Shield Protocol
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