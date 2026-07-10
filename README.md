# Shield Protocol — Technical Architecture & Secure Ecosystem

> **🌐 Multi-language Documentation / Documentação Multilíngue** > This file contains the complete technical documentation in both **Portuguese** and **English** to satisfy global compliance and international engineering analysis.  
> *Este arquivo contém a documentação técnica completa em **Português** e **Inglês** para atender aos critérios de compliance global e análise de engenharia internacional.*

---

## 🇧🇷 [PT-BR] DOCUMENTAÇÃO EM PORTUGUÊS

### 🛡️ Visão Geral do Sistema
O **Shield Protocol** é um portfólio técnico de nível corporativo projetado sob uma metodologia rigorosa de segurança ativa e arquitetura limpa. O ecossistema demonstra alta maturidade em engenharia de software através do gerenciamento estrito de estados assíncronos, modularização isolada e internacionalização (i18n) reativa sem o uso de frameworks pesados de terceiros, garantindo sobrecarga zero (zero-overhead) em tempo de execução.

---

### 🛠️ Core de Engenharia & Matriz de Tecnologias

- **Mecanismo de Build & Bundler:** Vite (utilizando ES Modules nativos para substituição instantânea de módulos em quente - HMR)
- **Compilador Linguístico:** TypeScript em Modo Estrito (validação rigorosa de tipos através de diretivas `strict: true`)
- **Arquitetura de Estilização:** Vanilla CSS modular encapsulado por variáveis dinâmicas e estruturas puras de Layout Grid e Flexbox
- **Camada de Dados & Controle:** Desacoplamento absoluto entre a camada de exibição visual (`TerminalConsole`) e o motor de regras de negócio (`TerminalCore`)

---

### 📐 Arquitetura de Software & Fluxo Estrito

O projeto elimina de forma cirúrgica quaisquer dependências acopladas globalmente, forçando um fluxo unidirecional e previsível de eventos:

[ Ação do Navegador ] ──> Gatilho na Navbar / Entrada de Linha do Console
│
▼
[ LanguageManager (i18n) ] ──> Avalia o Dicionário de Estado Ativo (PT-BR / EN)
│
├─> [ Pipeline de Mutação do DOM ] ──> Injeta nós de texto de forma reativa
│
▼
[ Kernel do TerminalCore ] ──> Computa comandos de auditoria e regras estruturais
│
▼
[ ConsoleView do Terminal ] ──> Atualiza o Buffer CRT / Executa Animações de Varredura

---

### 📝 Registros de Decisão Arquitetural (ADR)

#### ADR 001: Seleção do Vite + TypeScript Estrito em detrimento de Scripts Legados
- **Contexto:** A estrutura anterior operava com arquivos planos e manipulação direta do DOM em JavaScript síncrono não compilado, gerando riscos de poluição do escopo global.
- **Decisão:** Migração completa para o ecossistema modularizado do Vite associado ao compilador estrito do TypeScript.
- **Consequências:** Inicialização do servidor local reduzida para próximo de 0ms via pré-empacotamento com `esbuild`. Casos de tipagem ambígua eliminados antes do deploy.

#### ADR 002: Arquitetura Reativa de Componentes Puros vs Frameworks SPAs (React/Vue)
- **Contexto:** Por se tratar de um site de alta visibilidade e portfólio técnico, o projeto exigia métricas máximas no Google Lighthouse e carregamento instantâneo.
- **Decisão:** Rejeição do custo de inicialização de grandes frameworks. Criação de um mapeamento declarativo através de atributos estruturais `data-i18n` acoplados a seletores puros de mutação.
- **Consequências:** Redução do tamanho final do bundle para zero dependências externas de runtime, mantendo a experiência do usuário fluida e instantânea.

---

### ⚡ Métricas de Otimização & Performance

Através de uma refatoração cirúrgica nas camadas de layout e renderização, o sistema alcançou pontuação máxima sob auditorias rigorosas:

- **Performance (100/100):** Eliminação de saltos visuais (Layout Shifts) com uso de propriedades estáticas de dimensionamento e controle estável de calhas de rolagem (`scrollbar-gutter`).
- **Acessibilidade (100/100):** Uso rigoroso de tags semânticas do HTML5 combinadas com captura ativa de foco do teclado no console interativo.
- **SEO & Core Web Vitals (100/100):** Compressão de dados visuais convertendo imagens cruas para arquivos de alta eficiência `.webp`.

---

### 💻 Instalação, Configuração & Execução

Para auditar o ambiente em seu contêiner local, execute a seguinte sequência de instruções no terminal:

1. Clone o repositório da branch principal:
   git clone https://github.com/dedeus-lucas/shield-protocol.git
   cd shield-protocol

2. Instale a árvore de dependências isoladas:
   npm install

3. Inicie o servidor local de alta velocidade:
   npm run dev

4. Execute o build final de otimização para produção:
   npm run build

---
---

## 🇺🇸 [EN] DOCUMENTATION IN ENGLISH

### 🛡️ System Overview
**Shield Protocol** is an enterprise-grade technical portfolio designed under a rigorous methodology of active security and clean architecture. The ecosystem demonstrates advanced software craftsmanship through the strict management of asynchronous states, isolated modularization, and reactive internationalization (i18n) without heavy third-party framework runtime overhead.

---

### 🛠️ Core Engineering & Stack Matrix

- **Build Engine & Bundler:** Vite (leveraging native ES Modules for instantaneous Hot Module Replacement - HMR)
- **Linguistic Core:** Strict TypeScript compiler compliance (`strict: true` enforcement flags)
- **Styling Architecture:** Modular Vanilla CSS utilizing advanced Layout Grid formatting and dynamic variable encapsulation
- **State & Action Control:** Decoupled architectural boundaries separating the view layer (`TerminalConsole`) from business logic kernels (`TerminalCore`)

---

### 📐 System Architecture & Flow Design

The codebase strictly adheres to the Separation of Concerns (SoC) and clean directory boundaries. It eliminates global cascading dependencies by enforcing explicit operational flows:

[ Browser Event ] ──> Clocks Language Toggle / Terminal Input
│
▼
[ LanguageManager (i18n) ] ──> Evaluates State Dictionary (PT-BR / EN)
│
├─> [ DOM Mutation Pipeline ] ──> Injects reactive text nodes
│
▼
[ TerminalCore Engine ] ──> Computes business rules & structural logic
│
▼
[ TerminalConsole View ] ──> Refreshes CRT Sandbox / Runs Scanning Buffers

---

### 📝 Architecture Decision Records (ADR)

#### ADR 001: Selection of Vite + Native TypeScript over Legacy Bundlers
- **Context:** The legacy implementation operated on flat file structures manipulating uncompiled, synchronous JavaScript bindings directly over global DOM fragments.
- **Decision:** Migrated the complete platform infrastructure into an estricted Vite environment utilizing compiler-driven TypeScript modules.
- **Consequences:** Accelerated cold server boot states to near 0ms execution via dependency pre-bundling with `esbuild`. Enhanced memory lifecycles during active state switching by isolating asynchronous context execution scopes.

#### ADR 002: Dynamic Vanilla Component Architecture instead of Heavy SPAs (React/Vue)
- **Context:** The application serves as a high-visibility portfolio, requiring critical optimizations targeting Google Lighthouse metrics and immediate First Contentful Paint.
- **Decision:** Rejected heavy framework overheads. Engineered a state-driven structural dictionary using pure DOM selectors coupled with explicit `data-i18n` path mappings.
- **Consequences:** Absolute zero framework bundle weight. Retained programmatic interface reactivity while maintaining strict, raw asset execution speeds.

---

### ⚡ Performance Optimization Metrics

Through surgical layout refactoring, the ecosystem achieves flawless performance indicators under Google Lighthouse evaluation:

- **Performance (100/100):** Mitigated layout shifts by using explicit asset bounding boxes and strict `scrollbar-gutter: stable` boundaries.
- **Accessibility (100/100):** Enforced fully semantic HTML elements accompanied by active keyboard trapping for interactive console units.
- **SEO & Core Web Vitals (100/100):** Optimized structural image data layers converting raw files into highly compressed `.webp` assets.

---

### 💻 Contribution, Installation & Setup

To replicate or audit the local development environment, enforce the following operations in your terminal container:

1. Clone the secure master branch repository:
   git clone https://github.com/dedeus-lucas/shield-protocol.git
   cd shield-protocol

2. Deploy the isolated dependency tree:
   npm install

3. Initialize the local ultra-fast development server instance:
   npm run dev

4. Compile and execute production bundle validation checks:
   npm run build

---

## 📄 License

This software is compiled under the terms of the corporate **MIT License**. Under attribution clauses, all baseline code assets are accessible for peer inspection.