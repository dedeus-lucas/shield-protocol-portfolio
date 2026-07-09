// src/components/terminalConsole.ts
import { TerminalCore } from '../core/terminalCore';
import { i18n } from '../languages/languagesManager';

export class TerminalConsole {
  private readonly core: TerminalCore;
  private container: HTMLElement | null = null;
  private outputBuffer: HTMLElement | null = null;
  private inputField: HTMLInputElement | null = null;

  constructor() {
    this.core = new TerminalCore();
  }

  /**
   * Acopla a infraestrutura do terminal aos elementos do HTML
   */
  public bind(containerId: string, outputId: string, inputId: string): void {
    this.container = document.getElementById(containerId);
    this.outputBuffer = document.getElementById(outputId);
    this.inputField = document.getElementById(inputId) as HTMLInputElement;

    if (this.inputField) {
      this.inputField.addEventListener('keydown', (e) => this.handleKeyDown(e));
      this.refreshPlaceholder();
    }
  }

  public refreshPlaceholder(): void {
    if (this.inputField) {
      this.inputField.placeholder = i18n.getText().terminal.placeholder;
    }
  }

  private handleKeyDown(event: KeyboardEvent): void {
    if (event.key !== 'Enter' || !this.inputField) return;

    const rawInput = this.inputField.value;
    this.inputField.value = '';

    if (!rawInput.trim()) return;

    this.printLine(`guest@shield-protocol:~$ ${rawInput}`, 'prompt-line');

    const result = this.core.executeCommand(rawInput);

    if (result.clearTerminal) {
      this.clear();
      return;
    }

    if (result.output) {
      this.printLine(result.output, result.isError ? 'error-line' : 'success-line');
    }

    if (result.systemAction) {
      this.handleSystemAction(result.systemAction);
    }
  }

  public printLine(text: string, className: string = ''): void {
    if (!this.outputBuffer) return;

    const line = document.createElement('div');
    line.className = `terminal-line ${className}`;
    line.style.whiteSpace = 'pre-wrap';
    line.style.marginBottom = '4px';
    
    line.textContent = text;

    this.outputBuffer.appendChild(line);

    if (this.container) {
      this.container.scrollTop = this.container.scrollHeight;
    }
  }

  private clear(): void {
    if (this.outputBuffer) {
      this.outputBuffer.innerHTML = '';
    }
  }

  private handleSystemAction(action: string): void {
    switch (action) {
      case 'change-lang-en':
        i18n.setLanguage('en');
        this.refreshPlaceholder();
        break;
      case 'change-lang-pt':
        i18n.setLanguage('pt-BR');
        this.refreshPlaceholder();
        break;
      case 'trigger-scan':
        this.executeVisualScanEffect();
        break;
    }
  }

  private executeVisualScanEffect(): void {
    const app = document.getElementById('app');
    if (!app) return;

    app.classList.add('scanning-effect');
    setTimeout(() => {
      app.classList.remove('scanning-effect');
    }, 1500);
  }
}

export const terminalConsole = new TerminalConsole();