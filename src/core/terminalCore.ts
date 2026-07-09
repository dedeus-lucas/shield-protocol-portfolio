// src/core/terminalCore.ts
import { i18n } from '../languages/languagesManager';

export interface TerminalResponse {
  output: string;
  isError: boolean;
  clearTerminal?: boolean;
  systemAction?: 'trigger-scan' | 'change-lang-en' | 'change-lang-pt' | null;
}

export class TerminalCore {
  private readonly commandHistory: string[] = [];

  /**
   * Processa o comando inserido pelo utilizador e retorna a resposta apropriada
   */
  public executeCommand(input: string): TerminalResponse {
    const trimmedInput = input.trim().toLowerCase();
    if (!trimmedInput) return { output: '', isError: false };

    this.commandHistory.push(input);
    const texts = i18n.getText().terminal;

    const parts = trimmedInput.split(' ');
    const command = parts[0];
    const arg = parts[1];

    switch (command) {
      case 'help': {
        return {
          output: `[AVAILABLE COMMANDS]\n  help        - Display active command protocols.\n  clear       - Purge terminal console buffer.\n  about       - Stream engineer professional overview.\n  skills      - Scan active technology stack matrix.\n  scan        - Execute simulated core perimeter inspection.\n  lang <code细> - Switch system interface language (en / pt).`,
          isError: false,
        };
      }

      case 'clear': {
        return { output: '', isError: false, clearTerminal: true };
      }

      case 'about': {
        const aboutText = i18n.getText().about;
        return {
          output: `[SHIELD OVERVIEW]\n${aboutText.title}\n\n- ${aboutText.description1}\n- ${aboutText.description2}\n- ${aboutText.description3}`,
          isError: false,
        };
      }

      case 'skills': {
        const stackText = i18n.getText().stack;
        return {
          output: `[TARGET STACK MATRIX]\n- ${stackText.backendTitle}: Java, Spring Boot, REST APIs\n- ${stackText.securityTitle}: API Security, Cloud Security, DevSecOps\n- ${stackText.evolutionTitle}: Systems Architecture, Observability`,
          isError: false,
        };
      }

      case 'scan': {
        return {
          output: `[BOOTING PERIMETER SCAN...]\n>> Checking API endpoints... SAFE\n>> Inspecting cloud configuration... SECURE\n>> Analyzing dependencies lifecycle... VERIFIED\n\n${texts.success}`,
          isError: false,
          systemAction: 'trigger-scan',
        };
      }

      case 'lang': {
        if (arg === 'en') {
          return { output: 'System linguistic orientation shifted to English.', isError: false, systemAction: 'change-lang-en' };
        } else if (arg === 'pt' || arg === 'pt-br') {
          return { output: 'Orientação linguística do sistema alterada para Português.', isError: false, systemAction: 'change-lang-pt' };
        } else {
          return { output: 'ERROR: Invalid language parameter. Use "lang en" or "lang pt".', isError: true };
        }
      }

      default: {
        return {
          output: `${texts.accessDenied} - Command "${command}" not recognized by Shield OS.`,
          isError: true,
        };
      }
    }
  }

  public getHistory(): string[] {
    return this.commandHistory;
  }
}