# Blog da Blue

Um blog construído com **React**, **Vite** e **Tailwind CSS**.

## 💡 Descrição

Este projeto é um blog onde é possível ler e publicar artigos sobre diversos temas, desenvolvido com as tecnologias React (via Vite) e estilização com Tailwind CSS.

## 🚀 Tecnologias

* **React** — Biblioteca JavaScript para construção de interfaces.
* **Vite** — Ferramenta de build e dev server ultra-rápido.
* **Tailwind CSS** — Framework CSS utilitário para estilização.
* **ESLint** — Linter para manter a qualidade do código.

## 🔧 Pré-requisitos

* [Node.js](https://nodejs.org/) (versão ≥ 16)
* [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

## 💻 Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/vitto2/blog-da-blue.git
   cd blog-da-blue
   ```
2. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn install
   ```
3. Caso ainda não exista, gere os arquivos de configuração do Tailwind:

   ```bash
   npx tailwindcss init -p
   ```

## 🏃‍♂️ Desenvolvimento

Inicie o servidor de desenvolvimento com HMR:

```bash
npm run dev
# ou
yarn dev
```

Abra [http://localhost:5173](http://localhost:5173) no navegador para visualizar o projeto.

## 📦 Build

Para gerar a versão de produção:

```bash
npm run build
# ou
yarn build
```

Os arquivos otimizados serão gerados na pasta `dist`.

## ⚡ Preview de Produção

Para servir a build localmente:

```bash
npm run preview
# ou
yarn preview
```

## 🗂️ Estrutura do Projeto

```
├── public/           # Arquivos estáticos (favicon, etc.)
├── src/
│   ├── assets/       # Imagens e mídias
│   ├── components/   # Componentes React reutilizáveis
│   ├── pages/        # Páginas do blog (rotas)
│   ├── App.jsx       # Componente raiz
│   └── main.jsx      # Ponto de entrada da aplicação
├── index.html        # Template HTML principal
├── package.json      # Scripts e dependências
├── tailwind.config.js# Configuração do Tailwind CSS
├── postcss.config.js # Configuração do PostCSS
└── vite.config.js    # Configuração do Vite
```

## ✏️ Customização

* **Tailwind**: Edite o arquivo `tailwind.config.js` para personalizar cores, fontes e plugins.
* **Variáveis de ambiente**: Crie um arquivo `.env` na raiz com suas variáveis, por exemplo:

  ```bash
  VITE_API_URL=https://api.seusite.com
  ```

## 🤝 Contribuindo

1. Faça um fork deste repositório.
2. Crie uma branch para sua feature:

   ```bash
   git checkout -b feature/nova-feature
   ```
3. Faça commit das suas alterações:

   ```bash
   git commit -m "Adicionar nova feature"
   ```
4. Envie para a branch original:

   ```bash
   git push origin feature/nova-feature
   ```
5. Abra um Pull Request.

## 📄 Licença

Este projeto está licenciado sob a licença **MIT**.

---

Feito com ❤️ por Vitor Souza.
