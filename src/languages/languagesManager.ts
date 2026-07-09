import { ptBr } from './pt-br';
import { en } from './en';

export type SupportedLanguages = 'pt-BR' | 'en';

class LanguageManager {
  private currentLang: SupportedLanguages = 'pt-BR';
  private readonly dictionary = {
    'pt-BR': ptBr,
    'en': en
  };

  constructor() {
    this.initLanguage();
  }

  private initLanguage(): void {
    const savedLang = localStorage.getItem('shield-protocol-lang') as SupportedLanguages;
    if (savedLang && (savedLang === 'pt-BR' || savedLang === 'en')) {
      this.currentLang = savedLang;
      return;
    }
    this.currentLang = navigator.language.startsWith('pt') ? 'pt-BR' : 'en';
  }

  public getCurrentLanguage(): SupportedLanguages {
    return this.currentLang;
  }

  public setLanguage(lang: SupportedLanguages): void {
    this.currentLang = lang;
    localStorage.setItem('shield-protocol-lang', lang);
    this.updateDOM();
  }

  public getText() {
    return this.dictionary[this.currentLang];
  }

  public updateDOM(): void {
    const elements = document.querySelectorAll<HTMLElement>('[data-i18n]');
    
    elements.forEach((element) => {
      const keyPath = element.dataset.i18n;
      if (!keyPath) return;

      const keys = keyPath.split('.');
      let currentData: any = this.getText();

      for (const key of keys) {
        if (currentData && Object.hasOwn(currentData, key)) {
          currentData = currentData[key];
        } else {
          currentData = null;
          break;
        }
      }

      if (typeof currentData === 'string' && element.textContent !== currentData) {
        element.textContent = currentData;
      }
    });

    document.documentElement.lang = this.currentLang === 'pt-BR' ? 'pt' : 'en';
  }
}

export const i18n = new LanguageManager();