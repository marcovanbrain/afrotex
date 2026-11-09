# Afrotex — Cabelos & Texturas

[![Site publicado](https://img.shields.io/badge/site-online-8B5E3C)](https://afrotex.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-149ECA?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript)](https://www.typescriptlang.org/)

**Afrotex** é um guia digital sobre cabelos e texturas. O projeto reúne conteúdos para ajudar visitantes a conhecer os diferentes tipos e padrões de curvatura dos cabelos, explorar métodos de crescimento capilar e acessar dicas de cuidado, com uma proposta de cuidado inclusivo.

🌐 **Acesse o site:** https://afrotex.vercel.app/

## ✨ Conteúdo e funcionalidades

A página inicial é organizada em seções:

- **Apresentação:** introdução ao guia.
- **Seleção de público:** experiência com contexto de audiência.
- **Tipos de cabelo:** conteúdo informativo sobre diferentes tipos.
- **Padrões de curvatura:** orientação para compreender as curvaturas.
- **Métodos de crescimento:** conteúdo sobre crescimento capilar.
- **Dicas de cuidado:** recomendações e informações práticas.
- **Cuidado inclusivo:** abordagem de cuidado para diferentes necessidades e características.

## 🧰 Tecnologias

Conforme as dependências e os arquivos do projeto:

- [Next.js 16](https://nextjs.org/) — framework React.
- [React 19](https://react.dev/) — biblioteca de interface.
- [TypeScript](https://www.typescriptlang.org/) — tipagem estática.
- [Tailwind CSS 4](https://tailwindcss.com/) — estilos.
- [Radix UI](https://www.radix-ui.com/) — componentes de interface acessíveis.
- [Lucide React](https://lucide.dev/) — ícones.
- [Vercel Analytics](https://vercel.com/analytics) — métricas de acesso.
- [pnpm](https://pnpm.io/) — gerenciamento de dependências (lockfile versionado).

## 🚀 Executar localmente

### Pré-requisitos

- Node.js compatível com a versão do Next.js utilizada.
- pnpm instalado.

### Instalação

Clone o repositório e entre na pasta:

```bash
git clone https://github.com/marcovanbrain/afrotex.git
cd afrotex
```

Instale as dependências:

```bash
pnpm install
```

Inicie o servidor de desenvolvimento:

```bash
pnpm dev
```

A aplicação ficará disponível em [http://localhost:3000](http://localhost:3000).

## 📦 Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `pnpm dev` | Inicia o servidor de desenvolvimento. |
| `pnpm build` | Gera a versão de produção. |
| `pnpm start` | Inicia a aplicação em modo de produção após o build. |
| `pnpm lint` | Executa o ESLint. |

## 📁 Estrutura do projeto

Visão geral dos diretórios e arquivos principais:

```text
afrotex/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
├── hooks/
├── lib/
├── public/
├── styles/
├── components.json
├── next.config.mjs
├── package.json
├── pnpm-lock.yaml
└── tsconfig.json
```

- `app/`: estrutura da aplicação Next.js, layout global, página inicial e estilos.
- `components/`: componentes que compõem as seções e elementos da interface.
- `hooks/`: hooks reutilizáveis.
- `lib/`: funções e utilitários compartilhados.
- `public/`: arquivos estáticos.
- `styles/`: recursos de estilo.

## 🌍 Deploy

O projeto está publicado na **Vercel**:

https://afrotex.vercel.app/

O repositório GitHub é a base de versionamento do código:

https://github.com/marcovanbrain/afrotex

Quando o projeto está conectado à Vercel, novos commits na branch configurada podem disparar novos deployments automaticamente.

## 🤝 Contribuição

Contribuições são bem-vindas. Para propor uma melhoria:

1. Faça um fork do repositório.
2. Crie uma branch para sua alteração: `git checkout -b feat/minha-melhoria`.
3. Faça commits claros e objetivos.
4. Envie a branch e abra um Pull Request descrevendo a mudança.

## 📄 Licença

Nenhuma licença de uso foi identificada neste repositório até o momento. Consulte o responsável pelo projeto antes de reutilizar, distribuir ou modificar o código fora dos termos permitidos.
